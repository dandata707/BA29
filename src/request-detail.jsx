import React,{useState} from 'react';
import {h,Fragment} from './design-runtime.jsx';
import './request-detail.css';

const assets=[
 {id:1,type:'Laptop',description:'RAM 16GB, SSD 512GB',requested:1,limit:'1',issued:1,status:'over',note:'Phục vụ dự án mới',held:[{code:'TS-LT-014',date:'05/03/2026',status:'Đang sử dụng'}]},
 {id:2,type:'Màn hình',description:'24 inch, Full HD',requested:2,limit:'2',issued:1,status:'over',note:'Cần thêm màn hình phụ',held:[{code:'TS-MH-008',date:'12/04/2026',status:'Đang sử dụng'}]},
 {id:3,type:'Bàn phím',description:'Kết nối không dây',requested:1,limit:'1',issued:0,status:'within',note:'N/A',held:[]},
 {id:4,type:'Chuột',description:'Kết nối Bluetooth',requested:1,limit:'1',issued:0,status:'within',note:'N/A',held:[]},
 {id:5,type:'Webcam',description:'Full HD 1080p',requested:1,limit:'N/A',issued:0,status:'unset',note:'Họp trực tuyến',held:[]}
];
const filters=[['all','Tất cả'],['over','Vượt định mức'],['within','Trong định mức'],['unset','Chưa có định mức']];
const statusLabels={over:'Vượt định mức',within:'Trong định mức',unset:'Chưa có định mức'};

function Person({title,name='Nguyễn Minh Anh',department='Nhân sự'}){return <section className="request-person"><h3>{title}</h3><dl><dt>Họ và tên:</dt><dd>{name}</dd><dt>Mã NV:</dt><dd>NV-0025</dd><dt>Phòng ban:</dt><dd>{department}</dd><dt>Chức danh:</dt><dd>Chuyên viên nhân sự</dd></dl></section>;}

export default function RequestDetail({code='CP-2026-030',request,role,onBack,onReject,onApprove,onCreateMinutes,onNotifications}){
 const [filter,setFilter]=useState('all');
 const [expanded,setExpanded]=useState(()=>new Set([1]));
 const visible=assets.filter(item=>filter==='all'||item.status===filter);
 const toggle=id=>setExpanded(current=>{const next=new Set(current);next.has(id)?next.delete(id):next.add(id);return next;});
 return <div className="request-detail">
  <div className="request-detail-top"><nav aria-label="Đường dẫn trang"><button onClick={()=>onBack('/cap-phat')} aria-label="Trang chủ"><i className="fa-solid fa-house"/></button><span>/</span><button onClick={()=>onBack('/cap-phat')}>Cấp phát tài sản</button><span>/</span><button onClick={()=>onBack('/cap-phat/yeu-cau')}>Yêu cầu cấp phát</button><span>/</span><strong>Chi tiết phiếu</strong></nav><div className="request-detail-user"><button aria-label="Thông báo" onClick={onNotifications}><i className="fa-solid fa-bell"/><span className="notification-dot"/></button><span className="request-avatar">LP</span></div></div>
  <div className="request-detail-body">
   <button className="request-return-link" onClick={()=>onBack()}>← &nbsp;Quay lại danh sách</button>
   <h1>Chi tiết phiếu yêu cầu cấp phát</h1><p className="request-number">{code}</p>
   <section className="request-card"><header>Thông tin chung</header><div className="request-people"><Person title="Người tạo phiếu" name={request?.creator} department={request?.department}/><Person title="Người nhận" name={request?.recipient} department={request?.department}/></div><div className="request-limit">Định mức áp dụng: <strong>Nhóm chức danh Chuyên viên</strong></div></section>
   <section className="request-card request-purpose"><header>Thông tin yêu cầu</header><div className="request-purpose-body"><div><strong>Lý do yêu cầu</strong><span>Bổ sung thiết bị phục vụ triển khai dự án mới và họp trực tuyến.</span></div><div><strong>Ngày cần sử dụng</strong><span>{request?.needed||'25/10/2026'}</span></div></div></section>
   <section className="request-card request-assets"><header><h2>Danh sách tài sản yêu cầu</h2><div className="request-filter-line"><div className="request-filters" role="group" aria-label="Lọc theo trạng thái định mức">{filters.map(([key,label])=><button key={key} className={'request-filter request-filter-'+key+(filter===key?' is-selected':'')} aria-pressed={filter===key} onClick={()=>setFilter(key)}>{label} ({key==='all'?assets.length:assets.filter(item=>item.status===key).length})</button>)}</div><span className="request-priority"><i className="fa-solid fa-arrow-down-up-across-line"/> Ưu tiên dòng vượt định mức</span></div></header>
    <div className="request-table-scroll"><table className="request-table"><colgroup><col style={{width:'5%'}}/><col style={{width:'10%'}}/><col style={{width:'18%'}}/><col style={{width:'10%'}}/><col style={{width:'9%'}}/><col style={{width:'8%'}}/><col style={{width:'15%'}}/><col style={{width:'17%'}}/><col style={{width:'8%'}}/></colgroup><thead><tr><th>STT</th><th>Loại tài sản</th><th>Mô tả</th><th>SL yêu cầu</th><th>Định mức</th><th>Đã cấp</th><th>Trạng thái định mức</th><th>Ghi chú</th><th>Chi tiết</th></tr></thead><tbody>{visible.map(item=><React.Fragment key={item.id}><tr className={'request-asset-row status-'+item.status}><td>{item.id}</td><td>{item.type}</td><td>{item.description}</td><td className={item.status==='over'?'request-quantity-over':''}>{item.requested}</td><td>{item.limit}</td><td>{item.issued}</td><td><span className={'request-status status-'+item.status}>{statusLabels[item.status]}</span></td><td>{item.note}</td><td><button className="request-expand" aria-label={(expanded.has(item.id)?'Thu gọn':'Xem chi tiết')+' '+item.type} aria-expanded={expanded.has(item.id)} onClick={()=>toggle(item.id)}><i className={'fa-solid fa-chevron-'+(expanded.has(item.id)?'up':'down')}/></button></td></tr>{expanded.has(item.id)&&<tr className="request-held-row"><td colSpan="9"><div className="request-held"><h3>Tài sản đang giữ cùng loại</h3>{item.held.length?<table><thead><tr><th>Mã tài sản</th><th>Ngày cấp</th><th>Tình trạng</th></tr></thead><tbody>{item.held.map(held=><tr key={held.code}><td><a href="#" onClick={e=>e.preventDefault()}>{held.code}</a></td><td>{held.date}</td><td><span>{held.status}</span></td></tr>)}</tbody></table>:<p>Chưa có tài sản cùng loại đang được cấp.</p>}</div></td></tr>}</React.Fragment>)}</tbody></table></div>
    <footer>Tổng 5 dòng: 2 trong định mức, 2 vượt định mức, 1 chưa có định mức</footer>
   </section>
   <div className="request-actions"><button className="request-back" onClick={()=>onBack()}>Quay lại</button>{role!=='employee'&&(!request||request.status==='Chờ duyệt')&&<><button className="request-reject" onClick={onReject}>Từ chối</button><button className="request-approve" onClick={onApprove}><i className="fa-solid fa-check"/> Phê duyệt</button></>}{role!=='employee'&&request?.status==='Đã duyệt'&&<button className="request-approve" onClick={onCreateMinutes}><i className="fa-solid fa-file-signature"/> Tạo biên bản</button>}</div>
  </div>
 </div>;
}
