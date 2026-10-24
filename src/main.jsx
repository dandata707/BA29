import React,{Suspense,lazy,useCallback,useEffect,useLayoutEffect,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import {createRoot} from 'react-dom/client';
import {h,Fragment,InteractionContext} from './design-runtime.jsx';
import {classifyAction,filterRecords,groupFor,groups,normalize,primaryRoutes,routes,validateForm} from './workflows.mjs';
import {readStore,recordEvent,saveRecord,storeField} from './storage.mjs';
import {PrototypeNav} from './prototype-nav.jsx';
import RequestDetail from './request-detail.jsx';
import RequestList from './request-list.jsx';
import RecoveryComplete from './recovery-complete.jsx';
import {isHandoverLocked} from './handover-assets.mjs';
import {canVisit,groupHomeForRole,groupsForRole,roleHome,roleInfo} from './roles.mjs';
import manifest from './screen-manifest.json';
import '@fontsource-variable/inter';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource/be-vietnam-pro/vietnamese-400.css';
import '@fontsource/be-vietnam-pro/latin-400.css';
import '@fontsource/be-vietnam-pro/vietnamese-500.css';
import '@fontsource/be-vietnam-pro/latin-500.css';
import '@fontsource/be-vietnam-pro/vietnamese-600.css';
import '@fontsource/be-vietnam-pro/latin-600.css';
import '@fontsource/be-vietnam-pro/vietnamese-700.css';
import '@fontsource/be-vietnam-pro/latin-700.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import './base.css';
import './design.css';
import './handover-assets.css';

const loaders=import.meta.glob('./screens/*.jsx');
const screens=Object.fromEntries(manifest.map(f=>[f.id,lazy(loaders['./screens/'+f.file+'.jsx'])]));
const byId=Object.fromEntries(manifest.map(f=>[f.id,f]));
const routeNow=()=>decodeURIComponent(location.hash.replace(/^#/,'')||'/cap-phat');
function screenFor(route){if(route==='/cap-phat/chi-tiet')return 'request-detail';if(route==='/cap-phat/yeu-cau')return 'request-list';if(route==='/cap-phat/ban-giao/chi-tiet')return '123:801';if(route.startsWith('/man-hinh/'))return route.slice('/man-hinh/'.length).replace('-',':');return routes[route]||'87:2';}

function Screen({id,isDetail=false,recordCode,role}){const Component=screens[id];return Component?<Suspense fallback={<div className="screen-loading" role="status">Đang tải giao diện…</div>}><Component isDetail={isDetail} recordCode={recordCode} role={role}/></Suspense>:<p>Không tìm thấy màn hình.</p>;}
class ErrorBoundary extends React.Component{
 state={error:null};static getDerivedStateFromError(error){return {error};}
 render(){return this.state.error?<div className="app-error" role="alert"><h1>Không thể hiển thị màn hình</h1><p>{this.state.error.message}</p><button onClick={()=>location.reload()}>Thử lại</button></div>:this.props.children;}
}

function Modal({title,children,onClose,wide=false,className=''}){
 const ref=useRef(null),lastFocus=useRef(document.activeElement);
 useEffect(()=>{ref.current?.querySelector('button,input,textarea,[tabindex="0"]')?.focus();return()=>lastFocus.current?.focus?.();},[]);
 const trap=e=>{if(e.key!=='Tab')return;const list=[...ref.current.querySelectorAll('button,input,select,textarea,[tabindex="0"]')].filter(x=>!x.disabled);const first=list[0],last=list.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}};
 return <div className="app-backdrop" onClick={onClose} onKeyDown={trap}><section className={'app-modal'+(wide?' app-modal-wide':'')+(className?' '+className:'')} role="dialog" aria-modal="true" aria-label={title} ref={ref} onClick={e=>e.stopPropagation()}>{title&&<header><h2>{title}</h2><button className="icon-button" aria-label="Đóng" onClick={onClose}>×</button></header>}{children}</section></div>;
}

function HandoverRowMenu({anchor,children}){
 const ref=useRef(null),[position,setPosition]=useState(null);
 useLayoutEffect(()=>{
  const place=()=>{
   if(!anchor?.isConnected)return;
   const rect=anchor.getBoundingClientRect(),menu=ref.current;
   const width=menu?.offsetWidth||196,height=menu?.offsetHeight||116,gap=6,padding=8;
   const below=rect.bottom+gap;
   setPosition({left:Math.max(padding,Math.min(rect.right-width,window.innerWidth-width-padding)),top:Math.max(padding,Math.min(below+height<=window.innerHeight-padding?below:rect.top-height-gap,window.innerHeight-height-padding))});
  };
  place();window.addEventListener('scroll',place,true);window.addEventListener('resize',place);
  return()=>{window.removeEventListener('scroll',place,true);window.removeEventListener('resize',place);};
 },[anchor]);
 return createPortal(<div ref={ref} className="handover-row-menu" style={{...position,visibility:position?'visible':'hidden'}} role="menu" aria-label="Thao tác biên bản">{children}</div>,document.body);
}

function EmployeeNotifications({onClose,onOpen}){
 const [filter,setFilter]=useState('all'),[read,setRead]=useState(()=>new Set());
 const notifications=[
  {code:'BBBG-2024-0325',title:'Yêu cầu ký nhận biên bản bàn giao',description:'Trần Văn Minh đã gửi biên bản bàn giao 5 tài sản (Laptop Dell, Màn hình...). Vui lòng kiểm tra và ký xác nhận.',time:'10 phút trước'},
  {code:'BBBG-2024-0321',title:'Biên bản bàn giao',suffix:' đã hoàn tất',description:'Đỗ Minh Quân đã ký xác nhận nhận 6 tài sản bàn giao thành công.',time:'2 giờ trước'},
  {code:'BBBG-2024-0324',title:'Biên bản bàn giao mới',suffix:' cần rà soát',description:'Nguyễn Minh Anh đã tạo biên bản bàn giao cho phòng ban Kinh doanh.',time:'Hôm qua lúc 16:45'}
 ];
 const unreadCount=notifications.filter(item=>!read.has(item.code)).length;
 const visible=filter==='unread'?notifications.filter(item=>!read.has(item.code)):notifications;
 return <div className="employee-notifications">
  <header className="employee-notifications-header"><div><h2>Thông báo</h2><span>{unreadCount} chưa đọc</span></div><button onClick={()=>setRead(new Set(notifications.map(item=>item.code)))}>Đánh dấu tất cả đã đọc</button><button className="employee-notifications-close" aria-label="Đóng" onClick={onClose}>×</button></header>
  <div className="employee-notifications-tabs" role="tablist" aria-label="Lọc thông báo">{[['all','Tất cả'],['unread','Chưa đọc']].map(([key,label])=><button key={key} role="tab" aria-selected={filter===key} onClick={()=>setFilter(key)}>{label}{key==='unread'&&<i/>}</button>)}</div>
  <div className="employee-notifications-list">{visible.map(item=><button className={'employee-notification'+(read.has(item.code)?' is-read':'')} key={item.code} onClick={()=>{setRead(current=>new Set(current).add(item.code));onOpen(item.code);}}><span className="employee-notification-copy"><strong>{item.title} <b>{item.code}</b>{item.suffix}</strong><span>{item.description}</span><small>{item.time}</small></span>{!read.has(item.code)&&<i className="employee-notification-unread" aria-label="Chưa đọc"/>}</button>)}</div>
 </div>;
}

function LiquidationAssetPicker({onClose,onAdd}){
 const assets=[
  {code:'TS-00128',name:'Máy in Canon LBP',type:'CCDC',cost:'15,030,000',remaining:'8,500,000',status:'Đang sử dụng'},
  {code:'TS-00076',name:'Máy tính để bàn Dell',type:'TSCĐ',cost:'18,000,000',remaining:'4,500,000',status:'Đang sử dụng'},
  {code:'TS-00086',name:'Điện thoại IP',type:'CCDC',cost:'5,200,000',remaining:'1,800,000',status:'Đang sử dụng'},
  {code:'TS-00102',name:'Bàn làm việc gỗ',type:'TSCĐ',cost:'12,500,000',remaining:'6,200,000',status:'Đang sử dụng'},
  {code:'TS-00115',name:'Điều hòa 12000BTU',type:'TSCĐ',cost:'14,800,000',remaining:'7,400,000',status:'Đang bảo trì'},
  {code:'TS-00127',name:'Tủ hồ sơ sắt',type:'CCDC',cost:'3,600,000',remaining:'1,200,000',status:'Đang sử dụng'}
 ];
 const [query,setQuery]=useState(''),[type,setType]=useState('Tất cả'),[status,setStatus]=useState('Tất cả'),[selected,setSelected]=useState(()=>new Set(['TS-00128','TS-00076','TS-00102']));
 const visible=assets.filter(asset=>(type==='Tất cả'||asset.type===type)&&(status==='Tất cả'||asset.status===status)&&normalize(asset.code+' '+asset.name).includes(normalize(query)));
 const toggle=code=>setSelected(current=>{const next=new Set(current);if(next.has(code))next.delete(code);else next.add(code);return next;});
 const selectVisible=checked=>setSelected(current=>{const next=new Set(current);visible.forEach(asset=>checked?next.add(asset.code):next.delete(asset.code));return next;});
 const allVisible=visible.length>0&&visible.every(asset=>selected.has(asset.code));
 useEffect(()=>{const close=e=>{if(e.key==='Escape')onClose();};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close);},[onClose]);
 return <div className="asset-picker-backdrop" onMouseDown={event=>{if(event.target===event.currentTarget)onClose();}}>
  <section className="asset-picker" role="dialog" aria-modal="true" aria-labelledby="asset-picker-title">
   <header className="asset-picker-header"><h2 id="asset-picker-title">Thêm tài sản vào danh sách đề nghị thanh lý</h2><button aria-label="Đóng" onClick={onClose}>×</button></header>
   <div className="asset-picker-filters">
    <label className="asset-picker-search">Từ khóa<input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Nhập mã tài sản, tên tài sản..."/></label>
    <label>Loại tài sản<select value={type} onChange={event=>setType(event.target.value)}><option>Tất cả</option><option>TSCĐ</option><option>CCDC</option></select></label>
    <label>Trạng thái tài sản<select value={status} onChange={event=>setStatus(event.target.value)}><option>Tất cả</option><option>Đang sử dụng</option><option>Đang bảo trì</option></select></label>
    <button className="asset-picker-reset" onClick={()=>{setQuery('');setType('Tất cả');setStatus('Tất cả');}}><i className="fa-solid fa-arrows-rotate" aria-hidden="true"/>Đặt lại</button>
   </div>
   <div className="asset-picker-table-wrap"><table className="asset-picker-table">
    <thead><tr><th><input aria-label="Chọn tất cả tài sản đang hiển thị" type="checkbox" checked={allVisible} onChange={event=>selectVisible(event.target.checked)}/></th><th>STT</th><th>Mã tài sản</th><th>Tên tài sản</th><th>Loại tài sản</th><th>Nguyên giá (VNĐ)</th><th>Giá trị còn lại (VNĐ)</th></tr></thead>
    <tbody>{visible.map((asset,index)=><tr key={asset.code} className={selected.has(asset.code)?'is-selected':''}>
     <td><input aria-label={'Chọn '+asset.code} type="checkbox" checked={selected.has(asset.code)} onChange={()=>toggle(asset.code)}/></td><td>{assets.indexOf(asset)+1}</td><td><button className="asset-picker-code" onClick={()=>toggle(asset.code)}>{asset.code}</button></td><td>{asset.name}</td><td>{asset.type}</td><td>{asset.cost}</td><td><strong>{asset.remaining}</strong></td>
    </tr>)}{visible.length===0&&<tr><td colSpan="7" className="asset-picker-empty">Không tìm thấy tài sản phù hợp.</td></tr>}</tbody>
   </table></div>
   <div className="asset-picker-pagination"><span>Hiển thị {visible.length?1:0}-{visible.length} trong {visible.length} tài sản</span><div><button disabled aria-label="Trang trước">‹</button><button className="is-current">1</button><button disabled aria-label="Trang sau">›</button></div></div>
   <footer className="asset-picker-footer"><p><i className="fa-regular fa-circle-info" aria-hidden="true"/>Tài sản được chọn sẽ được đưa vào bảng đề nghị để chọn lý do thanh lý</p><div><button className="asset-picker-cancel" onClick={onClose}>Hủy</button><button className="asset-picker-add" onClick={()=>onAdd(assets.filter(asset=>selected.has(asset.code)))} disabled={!selected.size}><i className="fa-solid fa-plus" aria-hidden="true"/>Thêm vào danh sách ({selected.size})</button></div></footer>
  </section>
 </div>;
}

function Workspace({onNavigate,onScreen,onClose,role,gallery=false}){
 const [query,setQuery]=useState('');const [variants,setVariants]=useState(gallery);
 const items=manifest.filter(f=>f.width>1000&&(variants||primaryRoutes[f.id])&&canVisit(role,primaryRoutes[f.id]||'/man-hinh/'+f.id.replace(':','-'))).filter(f=>normalize(f.name+' '+f.id).includes(normalize(query)));
 return <Modal title="Không gian làm việc" onClose={onClose} wide><div className="workspace-content"><input autoFocus className="app-input" placeholder="Tìm màn hình hoặc nghiệp vụ…" aria-label="Tìm màn hình" value={query} onChange={e=>setQuery(e.target.value)}/><nav className="module-grid">{groupsForRole(role).map(g=><button key={g.key} onClick={()=>onNavigate(groupHomeForRole(role,g))}>{g.label}<span>↗</span></button>)}</nav><label className="variants-toggle"><input type="checkbox" checked={variants} onChange={e=>setVariants(e.target.checked)}/> Xem tất cả trạng thái giao diện</label><div className="screen-list">{items.map(f=><button key={f.id} onClick={()=>onScreen(f.id)}><span>{friendlyTitle(f)}</span><small>{groups.find(g=>g.key===groupFor(f.page))?.label}</small></button>)}{!items.length&&<p>Không tìm thấy màn hình phù hợp.</p>}</div><p className="keyboard-hint">Ctrl + K để chuyển phân hệ · Esc để đóng</p></div></Modal>;
}
function friendlyTitle(frame){const fixed={'70:1485':'Biên bản thu hồi tài sản','32:292':'Tạo biên bản thu hồi','34:384':'Chọn nhân viên và tài sản thu hồi','64:2':'Chi tiết biên bản thu hồi','67:1153':'Biên bản đã gửi thông báo','65:404':'Quét tài sản thu hồi','66:575':'Kiểm tra tình trạng tài sản','67:898':'Xác nhận thu hồi','67:1291':'Thu hồi hoàn tất','133:2':'Nhân viên xác nhận thu hồi','40:12':'Danh sách tài sản','40:7095':'Thêm mới tài sản','87:2907':'Danh sách phiếu yêu cầu cấp phát','87:3277':'Chi tiết phiếu yêu cầu cấp phát'};return fixed[frame.id]||frame.name;}

function App(){
 const [route,setRoute]=useState(routeNow),[modal,setModal]=useState(null),[toast,setToast]=useState(null),[menu,setMenu]=useState(null),[filters,setFilters]=useState({}),[page,setPage]=useState(1),[records,setRecords]=useState(()=>readStore().records||[]);
 const [passwordVisible,setPasswordVisible]=useState(false),[files,setFiles]=useState([]),[formError,setFormError]=useState(''),[resetKey,setResetKey]=useState(0);
 const [notificationPosition,setNotificationPosition]=useState(null);
 const [navCollapsed,setNavCollapsed]=useState(()=>localStorage.getItem('ba29-nav-collapsed')==='true');
 const [mobileNavOpen,setMobileNavOpen]=useState(false),[stageScale,setStageScale]=useState(1);
 const [role,setRole]=useState(()=>roleInfo(localStorage.getItem('ba29-role')).key);
 const [detailCode,setDetailCode]=useState('CP-2026-030');
 const [liquidationCode,setLiquidationCode]=useState('TL-2026-025');
 const [liquidationInfo,setLiquidationInfo]=useState(null);
 const [handoverCode,setHandoverCode]=useState('BBBG-2024-0325');
 const [handoverPassword,setHandoverPassword]=useState('');
 const [handoverPasswordError,setHandoverPasswordError]=useState('');
 const [detailRequest,setDetailRequest]=useState(null);
 const [rejectReason,setRejectReason]=useState(''),[rejectError,setRejectError]=useState('');
 const [allocationRecordMode,setAllocationRecordMode]=useState(false),[allocationAssetMode,setAllocationAssetMode]=useState('new'),[radioSelection,setRadioSelection]=useState({}),[allocationAssets,setAllocationAssets]=useState([{id:1,type:'',description:'',quantity:0,note:''}]);
 const allocationAssetRows=allocationAssets.length;
 const root=useRef(null),uploadRef=useRef(null),previous=useRef('/cap-phat'),toastTimer=useRef(),selectedRow=useRef(null),selectedIds=useRef(new Set());
 const id=screenFor(route),frame=byId[id]||byId['87:2'],group=groupFor(frame.page);
 const notify=useCallback((message,error=false)=>{setToast({message,error});clearTimeout(toastTimer.current);toastTimer.current=setTimeout(()=>setToast(null),4500);},[]);
 const navigate=useCallback(path=>{if(!canVisit(role,path)){notify('Màn hình này không thuộc vai trò '+roleInfo(role).label+'.',true);return;}setMobileNavOpen(false);if(path===routeNow()){setModal(null);setMenu(null);return;}previous.current=routeNow();location.hash=path;setModal(null);setMenu(null);setFormError('');},[role,notify]);
 const showScreen=useCallback(screen=>navigate(primaryRoutes[screen]||'/man-hinh/'+screen.replace(':','-')),[navigate]);
 useEffect(()=>{const changed=()=>{const nextRoute=routeNow();setRoute(nextRoute);if(nextRoute!=='/cap-phat/tao-moi'){setAllocationRecordMode(false);setAllocationAssetMode('new');setRadioSelection({});setAllocationAssets([{id:1,type:'',description:'',quantity:0,note:''}]);}setFilters({});setPage(1);setMenu(null);setModal(null);setFormError('');selectedIds.current.clear();window.scrollTo(0,0);};window.addEventListener('hashchange',changed);return()=>window.removeEventListener('hashchange',changed);},[]);
 useEffect(()=>{document.title=(id==='request-detail'?'Chi tiết phiếu yêu cầu cấp phát':id==='request-list'?'Danh sách phiếu yêu cầu cấp phát':friendlyTitle(frame))+' — BA Asset';},[id]);
 useEffect(()=>{const key=e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setModal('workspace');}if(e.key==='Escape'){setMenu(null);setModal(null);}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'){e.preventDefault();document.dispatchEvent(new CustomEvent('ba-save'));}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);},[]);
 useEffect(()=>()=>clearTimeout(toastTimer.current),[]);
 useEffect(()=>{localStorage.setItem('ba29-nav-collapsed',String(navCollapsed));},[navCollapsed]);
 useEffect(()=>{
  if(id!=='87:707')return;
  const secondRow=root.current?.querySelector('[data-node-id="87:934"]');
  if(secondRow)secondRow.hidden=allocationAssetRows<2;
  const count=root.current?.querySelector('[data-node-id="87:877"] p');
  if(count)count.textContent=allocationAssetRows+' tài sản';
 },[id,allocationAssetRows]);
 useEffect(()=>{const resize=()=>{const mobile=window.innerWidth<=900;const available=window.innerWidth-(mobile?0:navCollapsed?76:256);setStageScale(Math.min(1,Math.max(.72,available/Math.max(frame.width||1280,1024))));if(!mobile)setMobileNavOpen(false);};resize();window.addEventListener('resize',resize);return()=>window.removeEventListener('resize',resize);},[id,navCollapsed,frame.width]);
 useEffect(()=>{localStorage.setItem('ba29-role',role);if(!canVisit(role,route))location.hash=roleHome(role);},[role,route]);

 const back=()=>navigate(previous.current===route?groups.find(g=>g.key===group).path:previous.current);
 const openEmployeeRequest=row=>{
  const cells=[...row.children].map(cell=>cell.textContent.trim().replace(/\s+/g,' '));
  const code=cells[1]?.replace(/\s+/g,'').match(/CP-\d{4}-\d+/)?.[0]||'CP-2026-030';
  const type=cells[2]?.includes('mới')?'Cho nhân viên mới':'Cho cá nhân';
  const recipient=cells[3]||'Nguyễn Minh Anh';
  const createdAt=cells[4]||'20/10/2026',neededAt=cells[5]||'25/10/2026';
  const suffix=code.match(/\d{3}$/)?.[0]||'025';
  const values={
   '87:770':'Nguyễn Minh Anh','87:776':'NV-0025','87:782':'Nhân sự','87:788':'Chuyên viên nhân sự','87:794':code,'87:800':createdAt,
   '87:808':type==='Cho cá nhân','87:816':type==='Cho nhân viên mới',
   '87:832':recipient,'87:838':'NV-'+suffix,'87:844':'Nhân viên','87:851':'Phòng Kinh doanh','87:866':neededAt,
   '87:880':true,'87:888':false,'87:909':'RAM 16GB, SSD 512GB','87:916':'1','87:921':'Phục vụ công việc','87:928':'Máy tính xách tay',
   '87:935':'24 inch, Full HD','87:942':'1','87:947':'Làm việc tại văn phòng','87:954':'Màn hình','87:974':'Cấp phát tài sản phục vụ công việc','87:983':neededAt
  };
  Object.entries(values).forEach(([fieldId,value])=>storeField(fieldId,value));
  setDetailCode(code);
  setDetailRequest({code,type,recipient,created:createdAt,needed:neededAt,status:cells[6]||''});
  setAllocationRecordMode(true);setAllocationAssetMode('quota');setAllocationAssets([{id:1,type:'Máy tính xách tay',description:'RAM 16GB, SSD 512GB',quantity:1,note:'Phục vụ công việc'},{id:2,type:'Màn hình',description:'24 inch, Full HD',quantity:1,note:'Làm việc tại văn phòng'}]);setRadioSelection({"allocation-request-type":type==='Cho cá nhân'?'87:808':'87:816',"allocation-asset-source":'87:880'});
  navigate('/cap-phat/tao-moi');
 };
 const openAllocationDetail=row=>{
  const cells=[...(row?.children||[])].map(cell=>cell.textContent.trim().replace(/\s+/g,' '));
  const code=cells[1]?.replace(/\s+/g,'').match(/CP-\d{4}-\d+/)?.[0]||'CP-2026-030';
  setDetailCode(code);
  setDetailRequest({code,type:cells[2]||'',recipient:cells[3]||'',creator:'Nguyễn Minh Anh',created:cells[4]||'',needed:cells[5]||'',status:cells[6]||''});
  navigate('/cap-phat/chi-tiet');
 };
 const visibleFields=()=>[...(root.current?.querySelectorAll('[data-field-id]')||[])].filter(el=>el.getClientRects().length).map(el=>({id:el.dataset.fieldId,label:el.getAttribute('aria-label')||'Thông tin',required:el.dataset.required==='true',value:el.value,readOnly:el.readOnly,element:el}));
 const validate=()=>{const fields=visibleFields();const errors=validateForm(fields);root.current?.querySelectorAll('[aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));for(const error of errors)fields.find(f=>f.id===error.id)?.element.setAttribute('aria-invalid','true');if(errors.length){fields.find(f=>f.id===errors[0].id)?.element.focus();setFormError('Vui lòng điền đầy đủ '+errors.length+' thông tin bắt buộc.');notify('Vui lòng kiểm tra các thông tin bắt buộc.',true);return false;}setFormError('');return true;};
 const save=(action)=>{
  if(route==='/cap-phat/ban-giao/chi-tiet'&&isHandoverLocked(handoverCode)){notify('Biên bản chờ ký hoặc hoàn tất không được chỉnh sửa.',true);return;}
  if(!action.draft&&!validate())return;
  const fields=Object.fromEntries(visibleFields().filter(f=>f.element.type!=='password'&&!/mật khẩu|password/i.test(f.label)).map(f=>[f.label,f.value]));
  const prefix=({assets:'TS',allocation:'CP',recovery:'TH',transfer:'DC',liquidation:'TL'})[group];
  const record=saveRecord({group,screen:id,code:prefix+'-2026-'+String((readStore().records?.length||0)+25).padStart(3,'0'),status:action.draft?'Nháp':'Chờ duyệt',fields,files:files.map(f=>({name:f.name,size:f.size}))});
  setRecords(readStore().records);recordEvent({type:'save',recordId:record.id,group});
  notify(action.draft?'Đã lưu bản nháp.':'Đã lưu thông tin thành công.');
  if(action.another){visibleFields().filter(f=>!f.readOnly).forEach(f=>storeField(f.id,''));showScreen('40:8902');}
  else if(action.path)navigate(action.path);
 };

 const addLiquidationAssets=assets=>{
  const body=root.current?.querySelector('[data-node-id="145:28087"]');
  if(!body){notify('Không tìm thấy danh mục tài sản đề nghị thanh lý.',true);return;}
  const existing=new Set([...body.children].map(row=>row.children[1]?.textContent.replace(/\s/g,'')).filter(Boolean));
  const fresh=assets.filter(asset=>!existing.has(asset.code));
  fresh.forEach(asset=>{
   const rows=[...body.children],row=rows[0]?.cloneNode(true);
   if(!row)return;
   const number=rows.length+1;
   row.dataset.name='Row '+number;
   row.querySelectorAll('[data-node-id]').forEach(element=>{element.dataset.nodeId+='-added-'+number;});
   const cells=[...row.children];
   const textValues=[
    [String(number)],
    ['TS-',asset.code.slice(3)],
    [asset.name],
    [asset.type],
    [asset.cost],
    [asset.remaining],
    ['Chọn lý do'],
    [''],
    []
   ];
   cells.forEach((cell,index)=>{
    const paragraphs=[...cell.querySelectorAll('p')],values=textValues[index]||[];
    paragraphs.forEach((paragraph,paragraphIndex)=>{paragraph.textContent=values[paragraphIndex]||'';});
    cell.querySelectorAll('input,textarea').forEach(input=>{input.value='';});
    cell.querySelectorAll('select').forEach(select=>{select.selectedIndex=0;});
   });
   body.append(row);
  });
  setModal(null);
  notify(fresh.length?`Đã thêm ${fresh.length} tài sản vào danh sách.${fresh.length<assets.length?' '+(assets.length-fresh.length)+' tài sản đã có trong danh sách.':''}`:'Các tài sản đã chọn đều có trong danh sách.');
 };

 const execute=(a,source={})=>{
  if(role==='employee'&&(a.type==='approve'||a.type==='delete'||(a.type==='save'&&route!=='/cap-phat/tao-moi'))){notify('Vai trò nhân viên chỉ được gửi phiếu của mình và xem biên bản bàn giao.',true);return;}
  switch(a.type){
   case 'navigate':navigate(a.path);break;
   case 'screen':showScreen(a.id);break;
   case 'modal':setMenu(null);setModal(a.kind);break;
   case 'back':
    if(route==='/cap-phat/tao-moi'&&allocationRecordMode&&['cho duyet','da duyet'].includes(normalize(detailRequest?.status||''))){navigate('/cap-phat');break;}
    if(route!=='/cap-phat/chi-tiet'&&a.confirm&&visibleFields().some(f=>!f.readOnly&&f.value))setModal('leave');else back();break;
   case 'close':if(modal)setModal(null);else back();setMenu(null);break;
   case 'password':setPasswordVisible(!passwordVisible);root.current?.querySelectorAll('input').forEach(el=>{if(/mật khẩu/i.test(el.getAttribute('aria-label')||''))el.type=passwordVisible?'password':'text';});break;
   case 'refresh':setFilters({});setPage(1);setResetKey(k=>k+1);notify('Đã làm mới danh sách.');break;
   case 'clear-filters':setFilters({});setPage(1);setResetKey(k=>k+1);notify('Đã xóa bộ lọc.');break;
   case 'page':setPage(p=>Math.max(1,a.page??p+(a.direction||1)));break;
   case 'quantity':{const input=source.element?.closest('[data-name*="Container"]')?.querySelector('input');if(input){input.value=Math.max(1,(+input.value||1)+a.delta);storeField(input.dataset.fieldId,input.value);}break;}
   case 'save':save(a);break;
   case 'approve':if(validate()){recordEvent({type:'approve',group,screen:id});notify('Đã xác nhận xử lý thành công.');navigate(role==='director'&&group==='liquidation'?'/thanh-ly/cho-phe-duyet':a.path);}break;
   case 'delete':{const reason=visibleFields().find(f=>/lý do/i.test(f.label));if(!reason?.value){notify('Vui lòng nhập lý do xóa tài sản.',true);return;}recordEvent({type:'delete',group,reason:reason.value});showScreen('40:12041');notify('Đã xóa tài sản.');break;}
   case 'scan':navigate('/thu-hoi/kiem-tra');notify('Đã ghi nhận tài sản. Vui lòng kiểm tra tình trạng.');break;
   case 'upload':uploadRef.current?.click();break;
   case 'focus-search':root.current?.querySelector('input[type="search"],input[placeholder*="Tìm"],input[placeholder*="tìm"],input[placeholder*="Nhập mã"]')?.focus();break;
   case 'clear-query':{setFilters(previous=>({...previous,query:''}));const input=root.current?.querySelector('input[type="search"],input[placeholder*="Tìm"],input[placeholder*="tìm"],input[placeholder*="Nhập mã"]');if(input){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value')?.set.call(input,'');input.dispatchEvent(new Event('input',{bubbles:true}));}break;}
   case 'clear-selection':selectedIds.current.clear();root.current?.querySelectorAll('[role="checkbox"][aria-checked="true"]').forEach(box=>box.click());notify('Đã bỏ chọn.');break;
   case 'status-tab':setFilters(previous=>({...previous,status:a.status}));setPage(1);root.current?.querySelectorAll('[role="button"]').forEach(button=>{if(/^(Tất cả|Nháp|Chờ bàn giao|Đang bàn giao)/.test(button.textContent.trim()))button.setAttribute('aria-pressed',button===source.element?'true':'false');});break;
   case 'toggle-chip':source.element?.setAttribute('aria-pressed',source.element.getAttribute('aria-pressed')==='true'?'false':'true');break;
   case 'section-tab':{const target=[...(root.current?.querySelectorAll('p')||[])].find(element=>normalize(element.textContent.trim())===a.label&&!element.closest('[role="button"]'));target?.scrollIntoView?.({behavior:'smooth',block:'start'});root.current?.querySelectorAll('[role="button"]').forEach(button=>{if(['thong tin chung','hop dong mua ban','bien ban ban giao','danh muc tai san'].includes(normalize(button.textContent.trim())))button.setAttribute('aria-pressed',button===source.element?'true':'false');});break;}
   case 'select-assets':navigate('/thanh-ly/tao-moi');notify('Đã thêm tài sản đã chọn vào danh sách đề nghị.');break;
   case 'remove-row':{const row=findDataRow(source.element);if(row){row.hidden=true;notify('Đã bỏ tài sản khỏi danh sách.');}break;}
   case 'add-row':{
    if(id==='87:707'){if(allocationAssetRows>=10){notify('Tối đa 10 dòng tài sản cho mỗi phiếu.',true);break;}setAllocationAssets(items=>[...items,{id:Math.max(0,...items.map(item=>item.id))+1,type:'',description:'',quantity:0,note:''}]);break;}
    if(role==='employee'&&route==='/thanh-ly/tao-moi'){setModal('liquidation-assets');break;}
    const body=route==='/thanh-ly/tao-moi'?root.current?.querySelector('[data-node-id="145:28087"]'):root.current?.querySelector('[data-name="Body"],[data-name*="Table Body"]');
    const rows=body?[...body.children]:[],template=rows.at(-1),row=template?.cloneNode(true);
    if(row){
     const rowNumber=rows.length+1;
     row.dataset.name='Row '+rowNumber;
     row.querySelectorAll('[data-node-id]').forEach(el=>el.dataset.nodeId+='-added-'+rowNumber);
     row.querySelectorAll('p').forEach((el,index)=>{el.textContent=el===row.querySelector('p')?String(rowNumber):'';});
     row.querySelectorAll('input,textarea').forEach(el=>{el.value='';});
     row.querySelectorAll('select').forEach(el=>{el.selectedIndex=0;});
     body.append(row);
     notify('Đã thêm dòng tài sản.');
    }
    break;
   }
   case 'export':exportData(a.format);break;
   case 'download-attachment':notify('Chưa có tệp đính kèm mẫu để tải về.',true);break;
   case 'menu':{const rect=source.element?.getBoundingClientRect(),row=findDataRow(source.element);selectedRow.current=row;setMenu({x:Math.min(rect?.left||innerWidth-230,innerWidth-220),y:Math.min((rect?.bottom||100)+5,innerHeight-235),requestStatus:normalize(row?.children?.[6]?.textContent||'')});break;}
  }
 };

 const action=source=>{
  if(source.kind==='workspace'){setModal('workspace');return;}
  const t=normalize(source.label),n=normalize(source.name);
  if(role==='employee'&&route==='/thanh-ly'&&(t==='xem'||/^tl-\d/.test(t))){const row=findDataRow(source.element),cells=[...(row?.children||[])].map(cell=>cell.textContent.trim().replace(/\s+/g,' '));setLiquidationCode(source.label.match(/TL-\d{4}-\d+/)?.[0]||row?.textContent.match(/TL-\d{4}-\d+/)?.[0]||'TL-2026-025');setLiquidationInfo({date:cells[1],owner:cells[2],department:cells[3],assets:cells[4],status:cells[5]});setModal('employee-liquidation-detail');return;}
 if(/notification|thong bao/.test(n)&&(!t||/^\d+$/.test(t))){
  setMenu(null);
  if(role==='employee'){
   const rect=source.element?.getBoundingClientRect();
   const width=Math.min(512,innerWidth-24);
   setNotificationPosition({top:Math.min((rect?.bottom||0)+8,innerHeight-200),left:Math.max(12,Math.min((rect?.right||innerWidth)-width,innerWidth-width-12))});
   setModal(modal==='notifications'?null:'notifications');
  }else setModal('notifications');
  return;
 }
 if(role==='asset-manager'&&id==='123:1142'&&/thao tac bien ban/.test(normalize(n))){
  const row=findDataRow(source.element),code=row?.textContent.match(/BBBG-\d{4}-\d+/)?.[0];
  if(code)setHandoverCode(code);
  selectedRow.current=row;
  setMenu({kind:'handover',anchor:source.element,locked:isHandoverLocked(code)});
  return;
 }
 if(role==='asset-manager'&&route==='/thanh-ly/du-dieu-kien'&&/hanh dong/.test(n)){
  const rect=source.element?.getBoundingClientRect(),row=findDataRow(source.element);
  selectedRow.current=row;
  setMenu({kind:'liquidation-proposal',eligible:!normalize(row?.textContent||'').includes('chua du dieu kien'),x:Math.min(rect?.left||innerWidth-210,innerWidth-210),y:Math.min((rect?.bottom||100)+5,innerHeight-130)});
  return;
 }
 if(route.startsWith('/cap-phat/ban-giao')&&(/^gui$/.test(t)||(role==='employee'&&route==='/cap-phat/ban-giao/chi-tiet'&&/^xac nhan$/.test(t)))){setHandoverPassword('');setHandoverPasswordError('');setPasswordVisible(false);setModal('handover-confirm');return;}
  const handoverCodeMatch=source.label.match(/BBBG-\d{4}-\d+/);
  if(handoverCodeMatch){setHandoverCode(handoverCodeMatch[0]);navigate('/cap-phat/ban-giao/chi-tiet');return;}
  if(role==='employee'&&id==='133:2'&&source.id==='133:99'){
   const confirmation=root.current?.querySelector('[data-node-id="133:95"][role="checkbox"]');
   if(confirmation?.getAttribute('aria-checked')!=='true'){notify('Vui lòng tích cam kết bàn giao trước khi xác nhận.',true);return;}
   recordEvent({type:'employee-recovery-confirm',group,screen:id});
   notify('Đã xác nhận sẽ bàn giao tài sản đúng hẹn.');
   return;
  }
  if(modal==='reject'&&/tu choi|xac nhan/.test(t)){const reason=document.querySelector('[role="dialog"] textarea')?.value;if(!reason?.trim()){notify('Vui lòng nhập lý do từ chối.',true);return;}recordEvent({type:'reject',group,reason});setModal(null);notify('Đã từ chối yêu cầu và ghi nhận lý do.');return;}
  if(/hien.an mat khau/.test(n)){execute({type:'password'},source);return;}
  if(id==='123:1530'&&/ky|xac nhan/.test(t)){const input=root.current?.querySelector('input[type="password"],input[aria-label*="Mật khẩu"]');if(!input?.value){notify('Vui lòng nhập mật khẩu xác nhận.',true);input?.focus();return;}recordEvent({type:'signed-demo',group});navigate('/cap-phat/ban-giao');notify('Đã ghi nhận xác nhận bàn giao trên bản giao diện thử nghiệm.');return;}
  if(group==='assets'&&/\/xoa$/.test(route)&&/xoa/.test(t)){execute({type:'delete'},source);return;}
  if(group==='assets'&&/\/in-qr$/.test(route)&&/in tem|xac nhan in|tao.*in|^in$/.test(t)){exportData('print');return;}
  if(/gui|luu|tao/.test(t)&&['32:292','34:384'].includes(id)&&!source.inNavigation){save({path:'/thu-hoi/chi-tiet'});return;}
  if(/dong y huy|huy bo hoan toan/.test(t)){navigate(groups.find(g=>g.key===group).path);return;}
  if(/o lai|tiep tuc soan/.test(t)){setModal(null);if(id==='40:9486')navigate('/tai-san/them-moi');return;}
  if(role==='employee'&&route==='/thanh-ly/tao-moi'&&t==='them tai san'){setModal('liquidation-assets');return;}
  if(route==='/thanh-ly/tao-moi'&&n==='button - tuy chon'&&source.element?.closest('[data-node-id="145:28087"]'))return;
  execute(classifyAction({...source,group,screen:route}),source);
 };

 const field=change=>{
  if(change.kind==='checkbox'){
   if(route==='/cap-phat/tao-moi'&&change.value&&change.id==='87:880')setAllocationAssetMode('quota');
   if(route==='/cap-phat/tao-moi'&&change.value&&change.id==='87:888')setAllocationAssetMode('new');
   change.value?selectedIds.current.add(change.id):selectedIds.current.delete(change.id);return;
  }
  const t=normalize(change.label),value=change.value;
  const inFilter=!!change.element.closest('[data-name*="Filter"],[data-name*="Search"],[data-name*="Toolbar"]');
  if(inFilter||(/tìm|tra cứu|nhập mã phiếu/i.test(change.element.placeholder||''))){
   setPage(1);setFilters(f=>({...f,[/trang thai/.test(t)||/trạng thái/i.test(change.element.closest('[data-name*="Trạng"]')?.dataset.name||'')?'status':/loai yeu cau/.test(t)?'type':'query']:value}));
  }
  if((id==='32:292'||id==='34:384')&&/nhan vien|chon nguoi|nguoi ban giao/.test(t)&&value){navigate('/thu-hoi/chon-nhan-vien');}
  if(/ma tai san|so the kiem ke/.test(t)&&group==='transfer'&&value.length>1)notify('Đã tìm thấy tài sản phù hợp trong danh mục.');
  change.element.removeAttribute('aria-invalid');
 };

 function exportData(format){
  if(format==='print'){window.print();return;}
  const rows=records.filter(r=>r.group===group);const csv='\uFEFFMã phiếu,Trạng thái,Ngày tạo\r\n'+rows.map(r=>[r.code,r.status,r.createdAt].map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\r\n');
  const blob=new Blob([format==='word'?'<html><meta charset="utf-8"><body>'+root.current.innerHTML+'</body></html>':csv],{type:format==='word'?'application/msword;charset=utf-8':'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='BA-Asset-'+group+(format==='word'?'.doc':'.csv');link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Đã xuất dữ liệu.');
 }

 useEffect(()=>{
  const onSave=()=>save({draft:true});document.addEventListener('ba-save',onSave);return()=>document.removeEventListener('ba-save',onSave);
 });
 useEffect(()=>{
  // Figma uses both tables and cards. Only data rows inside their original body are filtered.
  const run=()=>{const stage=root.current;if(!stage)return;const all=[...stage.querySelectorAll('[data-name]')];let rows=all.filter(el=>/^(Row \d|Row -|Data Row|Table Row|Body → Row|Request Card)/.test(el.dataset.name||'')||(el.dataset.name==='Row'&&el.closest('[data-name="Body"],[data-name*="Table Body"]')));if(!rows.length){const cards=all.filter(el=>/^DC-2026-/.test(el.textContent.trim())&&el.textContent.length<350);rows=cards.filter(el=>!cards.some(other=>other!==el&&other.contains(el)));}
   const visible=filterRecords(rows.map(el=>({element:el,text:el.textContent})).map((r,i)=>({index:i,text:r.text})),filters).filter(row=>role!=='employee'||route!=='/cap-phat/ban-giao'||row.text.includes('BBBG-2024-0325')).map(r=>r.index);
   rows.forEach((row,i)=>{row.hidden=!visible.includes(i);row.style.display=row.hidden?'none':'';});
   if(id==='123:1142'&&route==='/cap-phat/ban-giao'&&role==='employee'){
    stage.querySelector('[data-node-id="123:1341"]')?.setAttribute('hidden','');
    rows.forEach(row=>row.lastElementChild?.setAttribute('hidden',''));
   }else{
    stage.querySelector('[data-node-id="123:1341"]')?.removeAttribute('hidden');
    rows.forEach(row=>row.lastElementChild?.removeAttribute('hidden'));
   }
   if(group==='allocation')rows.forEach((row,index)=>{
    const cells=[...row.children];const number=cells[0]?.querySelector('p');if(number&&/^\d+$/.test(number.textContent.trim()))number.textContent=String(index+1+(page-1)*6);
    const code=cells[1]?.querySelectorAll('p');if(code?.length===2&&/^CP-/.test(code[0].textContent))code[1].textContent=String(Math.max(1,24-((page-1)*6+index))).padStart(3,'0');
   });
   const had=stage.querySelector('.filter-empty');if(had)had.remove();if(rows.length&&!visible.length){const empty=document.createElement('div');empty.className='filter-empty';empty.setAttribute('role','status');empty.textContent='Không tìm thấy kết quả phù hợp. Thử thay đổi từ khóa hoặc xóa bộ lọc.';rows[0].parentElement.append(empty);}
   // Existing page buttons retain their visual treatment; update accessible current-page state.
   stage.querySelectorAll('[data-name*="Page"],[data-name*="page"]').forEach(el=>{if(el.getAttribute('role')==='button'&&/^\d+$/.test(el.textContent.trim())){el.setAttribute('aria-current',Number(el.textContent.trim())===page?'page':'false');}});
  };
  const observer=new MutationObserver(()=>{observer.disconnect();run();if(root.current)observer.observe(root.current,{childList:true,subtree:true});});
  if(root.current)observer.observe(root.current,{childList:true,subtree:true});run();return()=>observer.disconnect();
 },[id,filters,page,role,route]);

 const rootClick=e=>{
  if(e.target.closest('[role="button"],input,select,textarea'))return;
  const employeeAllocationRow=role==='employee'&&route==='/cap-phat'&&e.target.closest('[data-name^="Row "]');
  if(employeeAllocationRow){openEmployeeRequest(employeeAllocationRow);return;}
  const handoverRow=e.target.closest('[data-name^="Row "]');
  const handoverRowCode=handoverRow?.textContent.match(/BBBG-\d{4}-\d+/)?.[0];
  if(group==='allocation'&&route==='/cap-phat/ban-giao'&&handoverRowCode){setHandoverCode(handoverRowCode);navigate('/cap-phat/ban-giao/chi-tiet');return;}
  const el=e.target.closest('[data-name]');if(!el)return;const text=el.textContent.trim(),n=el.dataset.name||'';
  if(/^BBBG-\d{4}-\d+/.test(text)&&text.length<350){setHandoverCode(text.match(/BBBG-\d{4}-\d+/)?.[0]||'BBBG-2024-0325');navigate('/cap-phat/ban-giao/chi-tiet');return;}
  if(/^(TH\d|TH-|DC-|TL-|CP-|TS-)/.test(text)&&text.length<350){if(group==='liquidation'&&route==='/thanh-ly/cho-tiep-nhan')return;const path=({assets:'/tai-san/chinh-sua',allocation:'/cap-phat/chi-tiet',recovery:'/thu-hoi/chi-tiet',transfer:'/dieu-chuyen/chi-tiet',liquidation:'/thanh-ly/tham-dinh'})[group];if(group==='allocation')setDetailCode(text.match(/CP-\d{4}-\d+/)?.[0]||'CP-2026-030');navigate(path);return;}
  if(/chon.*tep|tai.*tep|keo.*tha|upload/i.test(normalize(text))&&text.length<220){uploadRef.current?.click();return;}
  if(/brand|logo/i.test(n)||((text==='BA Asset'||text==='QLTS')&&text.length<10)||(group==='transfer'&&text==='Điều chuyển tài sản'))setModal('workspace');
 };
 const onFile=e=>{const picked=[...(e.target.files||[])];if(picked.some(f=>f.size>20*1024*1024)){notify('Mỗi tệp tối đa 20 MB.',true);return;}setFiles(v=>[...v,...picked]);notify('Đã đính kèm '+picked.length+' tệp.');};

 return <InteractionContext.Provider value={{action,field,resetKey,records,group,role,allocationAssetMode,allocationRecordMode,allocationAssetRows,allocationAssets,updateAllocationAsset:(id,patch)=>setAllocationAssets(items=>items.map(item=>item.id===id?{...item,...patch}:item)),removeAllocationAsset:id=>setAllocationAssets(items=>items.length>1?items.filter(item=>item.id!==id):items),radioSelection,chooseRadio:(groupKey,nodeId)=>setRadioSelection(current=>({...current,[groupKey]:nodeId})),clearAllocationRequest:route==='/cap-phat/tao-moi'&&!allocationRecordMode,handoverReadOnly:route==='/cap-phat/ban-giao/chi-tiet'&&isHandoverLocked(handoverCode),isList:Object.values(groups).some(g=>g.path===route)}}>
  <div className={'prototype-shell'+(navCollapsed?' nav-collapsed':'')+(mobileNavOpen?' mobile-nav-open':'')}>
  {mobileNavOpen&&<button className="prototype-mobile-dismiss" aria-label="Đóng menu điều hướng" onClick={()=>setMobileNavOpen(false)}/>}
  <PrototypeNav route={route} group={group} role={role} onRoleChange={next=>{setRole(next);setMobileNavOpen(false);location.hash=roleHome(next);setModal(null);setMenu(null);}} onNavigate={navigate} onWorkspace={()=>{setMobileNavOpen(false);setModal('workspace');}} onHelp={()=>{setMobileNavOpen(false);setModal('help');}} collapsed={navCollapsed} onToggle={()=>setNavCollapsed(value=>!value)} mobileOpen={mobileNavOpen} onMobileToggle={()=>setMobileNavOpen(value=>!value)}/>
  <div className="prototype-content">
  <a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();root.current?.focus();}}>Đến nội dung chính</a>
  <main id="main-content" ref={root} tabIndex={-1} className={'design-stage group-'+group+' role-'+role+(['request-list','request-detail'].includes(id)||route==='/thu-hoi/hoan-tat'?' fluid-stage':' figma-stage')} style={{'--design-height':frame.height+'px','--design-width':frame.width+'px','--stage-scale':stageScale}} onClick={rootClick} key={id}>
   <ErrorBoundary key={id}>{route==='/thu-hoi/hoan-tat'?<RecoveryComplete/>:id==='request-list'?<RequestList records={records} onOpen={item=>{setDetailCode(item.code);setDetailRequest(item);navigate('/cap-phat/chi-tiet');}} onNavigate={navigate} onNotifications={()=>setModal('notifications')}/>:id==='request-detail'?<RequestDetail code={detailCode} request={detailRequest||((readStore().events||[]).find(event=>event.code===detailCode&&(event.type==='approve'||event.type==='reject'))?.type==='approve'?{status:'Đã duyệt'}:null)} role={role} onBack={path=>navigate(path||(role==='employee'?'/cap-phat':'/cap-phat/yeu-cau'))} onReject={()=>{setRejectReason('');setRejectError('');setModal('reject');}} onApprove={()=>{recordEvent({type:'approve',group:'allocation',screen:id,code:detailCode});setDetailRequest(current=>({...current,status:'Đã duyệt'}));notify('Đã phê duyệt phiếu '+detailCode+'.');}} onCreateMinutes={()=>navigate('/cap-phat/ban-giao/tao-moi')} onNotifications={()=>setModal('notifications')}/>:<Screen id={id} isDetail={route==='/cap-phat/ban-giao/chi-tiet'} recordCode={handoverCode} role={role}/>}</ErrorBoundary>
  </main>
  </div>
  </div>
  {formError&&<div className="form-error-summary" role="alert">{formError}<button onClick={()=>setFormError('')} aria-label="Đóng">×</button></div>}
  {files.length>0&&<aside className="attachment-tray" aria-label="Tệp đã đính kèm">{files.map((f,i)=><span key={f.name+i}>{f.name}<button aria-label={'Bỏ tệp '+f.name} onClick={()=>setFiles(v=>v.filter((_,index)=>index!==i))}>×</button></span>)}</aside>}
  <input type="file" ref={uploadRef} hidden multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" onChange={onFile}/>
  {menu?.kind==='liquidation-proposal'&&<><div className="menu-dismiss" onClick={()=>setMenu(null)}/><div className="action-menu" role="menu" aria-label="Thao tác đề nghị thanh lý" style={{left:menu.x,top:menu.y}}><button role="menuitem" onClick={()=>{setMenu(null);navigate('/thanh-ly/tham-dinh');}}>Xem chi tiết đề nghị</button>{menu.eligible&&<button role="menuitem" onClick={()=>{setMenu(null);navigate('/thanh-ly/lap-to-trinh');}}>Lập tờ trình</button>}</div></>}
  {toast&&<div className={'app-toast'+(toast.error?' app-toast-error':'')} role={toast.error?'alert':'status'}><span>{toast.error?'!':'✓'}</span>{toast.message}<button aria-label="Đóng thông báo" onClick={()=>setToast(null)}>×</button></div>}
  {menu&&menu.kind!=='liquidation-proposal'&&<><div className="menu-dismiss" onClick={()=>setMenu(null)}/>{menu.kind==='handover'?<HandoverRowMenu anchor={menu.anchor}><button role="menuitem" onClick={()=>{setMenu(null);navigate('/cap-phat/ban-giao/chi-tiet');}}><i className="fa-solid fa-eye" aria-hidden="true"/>Xem chi tiết</button><button role="menuitem" disabled={menu.locked} title={menu.locked?"Biên bản chờ ký hoặc hoàn tất không được chỉnh sửa":undefined} onClick={()=>{if(menu.locked)return;setMenu(null);navigate('/cap-phat/ban-giao/tao-moi');}}><i className="fa-solid fa-pen-to-square" aria-hidden="true"/>Sửa biên bản</button><button role="menuitem" onClick={()=>{setMenu(null);exportData('print');}}><i className="fa-solid fa-print" aria-hidden="true"/>In biên bản</button></HandoverRowMenu>:<div className="action-menu" style={{left:menu.x,top:menu.y}} role="menu">{(group==='allocation'?[['Xem chi tiết','view-allocation',true],['Chỉnh sửa phiếu','edit-allocation',!['da duyet','cho duyet'].includes(menu.requestStatus)],['Xem lý do từ chối','87:1419',menu.requestStatus?.includes('tu choi')],['Thu hồi phiếu','cancel-record',menu.requestStatus?.includes('cho duyet')]]:group==='assets'?[['Xem / sửa thông tin','/tai-san/chinh-sua',true],['In QR tài sản','/tai-san/in-qr',true],['Xóa tài sản','/tai-san/xoa',true]]:[['Xem chi tiết',group==='liquidation'?(role==='employee'?'/thanh-ly/tao-moi':'/thanh-ly/tham-dinh'):groups.find(g=>g.key===group).path+'/chi-tiet',true],['Xuất dữ liệu','export',true]]).map(([label,target,enabled])=><button role="menuitem" key={label} disabled={!enabled} onClick={()=>{if(!enabled)return;const row=selectedRow.current;setMenu(null);if(target==='view-allocation'||target==='edit-allocation')openAllocationDetail(row);else if(target.startsWith('/'))navigate(target);else if(target.includes(':'))showScreen(target);else if(target==='export')exportData('csv');else setModal(target);}}>{label}</button>)}</div>}</>}
  {(modal==='workspace'||route==='/man-hinh')&&<Workspace role={role} onNavigate={navigate} onScreen={showScreen} onClose={()=>modal?setModal(null):navigate(roleHome(role))} gallery={route==='/man-hinh'}/>}
  {modal==='liquidation-assets'&&role==='employee'&&route==='/thanh-ly/tao-moi'&&<LiquidationAssetPicker onClose={()=>setModal(null)} onAdd={addLiquidationAssets}/>}
  {modal==='employee-liquidation-detail'&&<Modal title={'Chi tiết đề nghị thanh lý '+liquidationCode} onClose={()=>setModal(null)}><div className="modal-body"><p>Mã đề nghị: <strong>{liquidationCode}</strong></p><p>Ngày lập: {liquidationInfo?.date||'—'}</p><p>Người lập: {liquidationInfo?.owner||'—'} · Bộ phận: {liquidationInfo?.department||'—'}</p><p>Số tài sản: {liquidationInfo?.assets||'—'} · Trạng thái: {liquidationInfo?.status||'—'}</p><div className="modal-actions"><button onClick={()=>setModal(null)}>Đóng</button></div></div></Modal>}
  {modal==='notifications'&&(role==='employee'?<><button className="employee-notification-dismiss" aria-label="Đóng thông báo" onClick={()=>setModal(null)}/><div className="employee-notifications-dropdown" style={notificationPosition||{top:72,right:12}}><EmployeeNotifications onClose={()=>setModal(null)} onOpen={code=>{setHandoverCode(code);setModal(null);navigate('/cap-phat/ban-giao/chi-tiet');}}/></div></>:<Modal title="Thông báo" onClose={()=>setModal(null)}><div className="notification-design"><Screen id="122:95"/></div><div className="local-records">{records.slice(0,4).map(r=><button key={r.id} onClick={()=>{navigate(groups.find(g=>g.key===r.group).path);notify(r.code+' — '+r.status);}}><strong>{r.code}</strong><span>{r.status} · Đã lưu trên trình duyệt</span></button>)}</div></Modal>)}
  {modal==='reject'&&id==='request-detail'&&<Modal title="Từ chối yêu cầu cấp phát" className="request-reject-modal" onClose={()=>setModal(null)}><div className="request-reject-body"><label htmlFor="rejection-reason">Lý do từ chối <span aria-hidden="true">*</span></label><div className="request-reject-field"><textarea id="rejection-reason" rows={4} maxLength={500} value={rejectReason} aria-invalid={!!rejectError} aria-describedby="rejection-helper" placeholder="Nhập lý do từ chối yêu cầu cấp phát tài sản..." onChange={e=>{setRejectReason(e.target.value);if(rejectError)setRejectError('');}}/><span className="request-reject-count">{rejectReason.length}/500</span></div><p id="rejection-helper" className={rejectError?'request-reject-error':''}>{rejectError||'Vui lòng nhập lý do để người yêu cầu có thể điều chỉnh.'}</p><div className="request-reject-actions"><button onClick={()=>setModal(null)}>Hủy</button><button onClick={()=>{if(!rejectReason.trim()){setRejectError('Vui lòng nhập lý do từ chối.');document.getElementById('rejection-reason')?.focus();return;}recordEvent({type:'reject',group:'allocation',screen:id,code:detailCode,reason:rejectReason.trim()});setModal(null);notify('Đã từ chối yêu cầu '+detailCode+'.');navigate('/cap-phat/yeu-cau');}}>Xác nhận từ chối</button></div></div></Modal>}
  {modal==='handover-confirm'&&<Modal title="Xác nhận gửi biên bản bàn giao" className="handover-confirm-modal" onClose={()=>setModal(null)}><div className="handover-confirm-body"><p className="handover-confirm-description">Vui lòng nhập mật khẩu tài khoản của bạn để xác thực và hoàn tất ký biên bản bàn giao tài sản.</p><dl className="handover-confirm-summary"><div><dt>Mã biên bản:</dt><dd>{handoverCode}</dd></div><div><dt>Người xác nhận:</dt><dd>Lê Hoàng Phúc</dd></div></dl><label htmlFor="handover-confirm-password">Mật khẩu xác nhận <span aria-hidden="true">*</span></label><div className="handover-confirm-password"><i className="fa-solid fa-lock" aria-hidden="true"/><input id="handover-confirm-password" type={passwordVisible?'text':'password'} autoComplete="current-password" placeholder="Nhập mật khẩu của bạn..." value={handoverPassword} aria-invalid={!!handoverPasswordError} aria-describedby="handover-confirm-hint" onChange={event=>{setHandoverPassword(event.target.value);if(handoverPasswordError)setHandoverPasswordError('');}}/><button type="button" aria-label={passwordVisible?'Ẩn mật khẩu':'Hiện mật khẩu'} onClick={()=>setPasswordVisible(value=>!value)}><i className={'fa-solid '+(passwordVisible?'fa-eye-slash':'fa-eye')} aria-hidden="true"/></button></div>{handoverPasswordError&&<p className="handover-confirm-error" role="alert">{handoverPasswordError}</p>}<p className="handover-confirm-hint" id="handover-confirm-hint"><i className="fa-regular fa-clock" aria-hidden="true"/> Mật khẩu dùng để xác nhận tính pháp lý khi hoàn tất biên bản bàn giao điện tử.</p><div className="handover-confirm-actions"><button onClick={()=>setModal(null)}>Hủy bỏ</button><button className="handover-confirm-submit" onClick={()=>{if(!handoverPassword.trim()){setHandoverPasswordError('Vui lòng nhập mật khẩu xác nhận.');document.getElementById('handover-confirm-password')?.focus();return;}recordEvent({type:'signed-demo',group:'allocation',code:handoverCode});setModal(null);setHandoverPassword('');navigate('/cap-phat/ban-giao');notify('Đã ghi nhận xác nhận bàn giao trên bản giao diện thử nghiệm.');}}><i className="fa-solid fa-check" aria-hidden="true"/> Xác nhận</button></div></div></Modal>}
  {modal==='reject'&&id!=='request-detail'&&<Modal title="Từ chối yêu cầu" onClose={()=>setModal(null)}><div className="modal-body"><p>Nhập lý do để người yêu cầu có thể điều chỉnh thông tin.</p><label htmlFor="rejection-reason">Lý do từ chối <span aria-hidden="true">*</span></label><textarea id="rejection-reason" className="app-input" rows={4} placeholder="Nhập lý do từ chối…"/><div className="modal-actions"><button onClick={()=>setModal(null)}>Hủy bỏ</button><button className="danger-button" onClick={()=>action({label:'Từ chối',name:'Button'})}>Từ chối</button></div></div></Modal>}
  {(modal==='leave'||modal==='cancel-record')&&<Modal title={modal==='leave'?'Hủy thay đổi?':'Hủy phiếu yêu cầu?'} onClose={()=>setModal(null)}><div className="modal-body"><p>{modal==='leave'?'Thông tin chưa lưu sẽ không được gửi. Bạn có muốn quay lại danh sách?':'Phiếu sẽ được chuyển sang trạng thái đã hủy.'}</p><div className="modal-actions"><button onClick={()=>setModal(null)}>Tiếp tục chỉnh sửa</button><button className="danger-button" onClick={()=>{recordEvent({type:'cancel',screen:id});setModal(null);navigate(groups.find(g=>g.key===group).path);notify('Đã hủy thao tác.');}}>Xác nhận hủy</button></div></div></Modal>}
  {modal==='help'&&<Modal title="Trợ giúp" onClose={()=>setModal(null)}><div className="modal-body"><p>Chọn phân hệ trong menu để quản lý tài sản, cấp phát, thu hồi, điều chuyển hoặc thanh lý.</p><p>Nhấn <kbd>Ctrl</kbd> + <kbd>K</kbd> để chuyển màn hình, <kbd>Ctrl</kbd> + <kbd>S</kbd> để lưu nháp.</p><p>Dữ liệu của bản giao diện được lưu trên trình duyệt hiện tại.</p><button className="primary-button" onClick={()=>setModal('workspace')}>Mở không gian làm việc</button></div></Modal>}
 </InteractionContext.Provider>;
}
function findDataRow(element){let el=element;while(el&&el!==document.body){if(/^(Row \d|Row -|Data Row|Table Row|Body → Row|Request Card)/.test(el.dataset?.name||''))return el;el=el.parentElement;}return null;}

export const appRoot=createRoot(document.getElementById('root'));
appRoot.render(<App/>);
