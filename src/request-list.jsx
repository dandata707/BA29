import React,{useMemo,useState} from 'react';
import {h} from './design-runtime.jsx';
import {normalize} from './workflows.mjs';
import {readStore} from './storage.mjs';
import './request-list.css';

const firstRequests=[
 ['CP-2026-019','Trần Thu Hà','Kế toán','Cho cá nhân','Trần Thu Hà','15/10/2026','22/10/2026'],
 ['CP-2026-020','Nguyễn Minh Anh','Nhân sự','Cho nhân viên mới','Vũ Ngọc Mai','16/10/2026','23/10/2026'],
 ['CP-2026-021','Phạm Đức Anh','Công nghệ','Cho cá nhân','Phạm Đức Anh','17/10/2026','24/10/2026'],
 ['CP-2026-022','Lê Thanh Hương','Marketing','Cho cá nhân','Lê Thanh Hương','18/10/2026','24/10/2026'],
 ['CP-2026-023','Nguyễn Minh Anh','Nhân sự','Cho nhân viên mới','Trần Hoàng Nam','19/10/2026','25/10/2026'],
 ['CP-2026-024','Đỗ Minh Quân','Kinh doanh','Cho cá nhân','Đỗ Minh Quân','20/10/2026','26/10/2026']
];
const people=['Nguyễn Minh Anh','Trần Thu Hà','Phạm Đức Anh','Lê Thanh Hương','Đỗ Minh Quân','Vũ Ngọc Mai','Trần Hoàng Nam'];
const departments=['Nhân sự','Kế toán','Công nghệ','Marketing','Kinh doanh'];
const initialRequests=Array.from({length:56},(_,index)=>{
 const number=index+19;
 const seed=firstRequests[index];
 const creator=seed?.[1]||people[index%people.length];
 const department=seed?.[2]||departments[index%departments.length];
 const type=seed?.[3]||(index%4===0?'Cho nhân viên mới':'Cho cá nhân');
 const recipient=seed?.[4]||creator;
 const created=seed?.[5]||`${String(1+(index%28)).padStart(2,'0')}/11/2026`;
 const needed=seed?.[6]||`${String(1+((index+7)%28)).padStart(2,'0')}/11/2026`;
 const status=index<12?'Chờ duyệt':index<40?'Đã duyệt':index<45?'Từ chối':index<48?'Đã thu hồi':'Đã cấp phát';
 return {code:seed?.[0]||`CP-2026-${String(number).padStart(3,'0')}`,creator,department,type,recipient,created,needed,status};
});
const tabs=[['Chờ duyệt','pending'],['Đã duyệt','approved'],['Từ chối','rejected'],['Đã thu hồi','recalled'],['Tất cả','all']];
const dateValue=value=>{const [day,month,year]=value.split('/').map(Number);return year*10000+month*100+day;};

export default function RequestList({onOpen,onNavigate,onNotifications,records=[]}){
 const [tab,setTab]=useState('Chờ duyệt'),[query,setQuery]=useState(''),[department,setDepartment]=useState(''),[requestType,setRequestType]=useState(''),[sort,setSort]=useState('oldest'),[page,setPage]=useState(1),[perPage,setPerPage]=useState(6),[revision,setRevision]=useState(0);
 const requests=useMemo(()=>{
  const latest=new Map();for(const event of readStore().events||[])if(event.code&&!latest.has(event.code)&&(event.type==='approve'||event.type==='reject'))latest.set(event.code,event.type==='approve'?'Đã duyệt':'Từ chối');
  const saved=records.filter(record=>record.group==='allocation'&&record.code&&!initialRequests.some(item=>item.code===record.code)).map(record=>({code:record.code,creator:record.fields?.['Họ và tên']||'Nguyễn Minh Anh',department:record.fields?.['Phòng ban']||'Nhân sự',type:'Cho cá nhân',recipient:record.fields?.['Người nhận']||record.fields?.['Họ và tên']||'Nguyễn Minh Anh',created:new Date(record.createdAt).toLocaleDateString('vi-VN'),needed:'25/10/2026',status:record.status==='Nháp'?'Chờ duyệt':record.status||'Chờ duyệt'}));
  return [...initialRequests,...saved].map(item=>({...item,status:latest.get(item.code)||item.status}));
 },[records,revision]);
 const counts=Object.fromEntries(tabs.map(([label])=>[label,label==='Tất cả'?requests.length:requests.filter(item=>item.status===label).length]));
 const filtered=requests.filter(item=>(tab==='Tất cả'||item.status===tab)&&(!query||normalize(item.code+' '+item.creator+' '+item.recipient).includes(normalize(query)))&&(!department||item.department===department)&&(!requestType||item.type===requestType)).sort((a,b)=>sort==='newest'?dateValue(b.created)-dateValue(a.created):dateValue(a.created)-dateValue(b.created));
 const totalPages=Math.max(1,Math.ceil(filtered.length/perPage));
 const currentPage=Math.min(page,totalPages);
 const visible=filtered.slice((currentPage-1)*perPage,currentPage*perPage);
 const resetPage=setter=>event=>{setter(event.target.value);setPage(1);};
 const clear=()=>{setQuery('');setDepartment('');setRequestType('');setTab('Chờ duyệt');setSort('oldest');setPage(1);setPerPage(6);};
 return <div className="request-list">
  <div className="request-list-top"><nav aria-label="Đường dẫn trang"><button onClick={()=>onNavigate('/cap-phat')} aria-label="Trang chủ"><i className="fa-solid fa-house"/></button><span>/</span><button onClick={()=>onNavigate('/cap-phat')}>Cấp phát tài sản</button><span>/</span><strong>Danh sách phiếu yêu cầu</strong></nav><div className="request-list-user"><button aria-label="Thông báo" onClick={onNotifications}><i className="fa-solid fa-bell"/><span className="notification-dot"/></button><span className="request-avatar">LP</span></div></div>
  <div className="request-list-body"><h1>Danh sách phiếu yêu cầu cấp phát</h1><p className="request-list-subtitle">Tiếp nhận, xem xét và phê duyệt yêu cầu cấp phát tài sản.</p>
   <div className="request-list-controls"><label className="request-list-search">Tìm kiếm<span><i className="fa-solid fa-magnifying-glass"/><input value={query} onChange={resetPage(setQuery)} placeholder="Mã phiếu, tên hoặc mã nhân viên"/></span></label><label>Phòng ban<select value={department} onChange={resetPage(setDepartment)}><option value="">Tất cả phòng ban</option>{departments.map(value=><option key={value}>{value}</option>)}</select></label><label>Loại yêu cầu<select value={requestType} onChange={resetPage(setRequestType)}><option value="">Tất cả loại yêu cầu</option><option>Cho cá nhân</option><option>Cho nhân viên mới</option></select></label><button className="request-list-clear" onClick={clear}><i className="fa-solid fa-arrows-rotate"/> Xóa bộ lọc</button></div>
   <section className="request-list-card"><div className="request-list-toolbar"><div className="request-list-tabs" role="tablist" aria-label="Trạng thái phiếu">{tabs.map(([label,key])=><button key={key} role="tab" aria-selected={tab===label} className={tab===label?'is-active':''} onClick={()=>{setTab(label);setPage(1);}}>{label}<span>{counts[label]}</span></button>)}</div><div className="request-list-sort"><label><i className="fa-solid fa-arrow-down-up-across-line"/><select aria-label="Sắp xếp theo ngày tạo" value={sort} onChange={resetPage(setSort)}><option value="oldest">Ngày tạo: Cũ nhất trước</option><option value="newest">Ngày tạo: Mới nhất trước</option></select></label><button aria-label="Làm mới danh sách" onClick={()=>setRevision(value=>value+1)}><i className="fa-solid fa-arrows-rotate"/></button></div></div>
    <div className="request-list-table-scroll"><table className="request-list-table"><colgroup><col style={{width:'6%'}}/><col style={{width:'10%'}}/><col style={{width:'12%'}}/><col style={{width:'10%'}}/><col style={{width:'12%'}}/><col style={{width:'13%'}}/><col style={{width:'11%'}}/><col style={{width:'14%'}}/><col style={{width:'12%'}}/></colgroup><thead><tr><th>STT</th><th>Mã phiếu</th><th>Người tạo<br/>phiếu</th><th>Phòng<br/>ban</th><th>Loại yêu<br/>cầu</th><th>Người nhận<br/>tài sản</th><th>Ngày tạo <i className="fa-solid fa-arrow-up"/></th><th>Ngày cần sử<br/>dụng</th><th>Trạng thái</th></tr></thead><tbody>{visible.map((item,index)=><tr key={item.code} onClick={()=>onOpen(item)} title={'Xem chi tiết '+item.code}><td>{(currentPage-1)*perPage+index+1}</td><td><button className="request-list-code" onClick={event=>{event.stopPropagation();onOpen(item);}}>{item.code}</button></td><td>{item.creator}</td><td>{item.department}</td><td>{item.type}</td><td>{item.recipient}</td><td>{item.created}</td><td>{item.needed}</td><td><span className={'request-list-status '+(item.status==='Chờ duyệt'?'pending':item.status==='Đã duyệt'?'approved':item.status==='Từ chối'?'rejected':'other')}>{item.status}</span></td></tr>)}</tbody></table>{!visible.length&&<p className="request-list-empty">Không tìm thấy phiếu phù hợp.</p>}</div>
    <footer><span>{filtered.length?`Hiển thị ${(currentPage-1)*perPage+1}–${Math.min(currentPage*perPage,filtered.length)} trên ${filtered.length} phiếu`:'Không có phiếu để hiển thị'}</span><div className="request-list-pagination"><label><select aria-label="Số phiếu mỗi trang" value={perPage} onChange={event=>{setPerPage(Number(event.target.value));setPage(1);}}><option value={6}>6 / trang</option><option value={10}>10 / trang</option><option value={20}>20 / trang</option></select></label><button aria-label="Trang trước" disabled={currentPage<=1} onClick={()=>setPage(currentPage-1)}><i className="fa-solid fa-chevron-left"/></button>{Array.from({length:Math.min(totalPages,5)},(_,index)=>index+Math.max(1,Math.min(currentPage-2,totalPages-4))).map(number=><button key={number} aria-label={'Trang '+number} aria-current={currentPage===number?'page':undefined} onClick={()=>setPage(number)}>{number}</button>)}<button aria-label="Trang sau" disabled={currentPage>=totalPages} onClick={()=>setPage(currentPage+1)}><i className="fa-solid fa-chevron-right"/></button></div></footer>
   </section>
  </div>
 </div>;
}
