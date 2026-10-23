import React,{useEffect,useState} from 'react';
import {h,Fragment} from './design-runtime.jsx';
import {groups,primaryRoutes} from './workflows.mjs';
import {groupHomeForRole,groupsForRole,journeyForRole,roleInfo,roles} from './roles.mjs';

export const journeys={
 assets:[['Danh sách tài sản','/tai-san'],['Thêm tài sản','/tai-san/them-moi'],['Chi tiết / chỉnh sửa','/tai-san/chinh-sua'],['In mã QR','/tai-san/in-qr'],['Xóa tài sản','/tai-san/xoa']],
 allocation:[['Phiếu của tôi','/cap-phat'],['Tạo yêu cầu','/cap-phat/tao-moi'],['Danh sách yêu cầu','/cap-phat/yeu-cau'],['Chi tiết yêu cầu','/cap-phat/chi-tiet'],['Biên bản bàn giao','/cap-phat/ban-giao'],['Tạo biên bản','/cap-phat/ban-giao/tao-moi']],
 recovery:[['Danh sách thu hồi','/thu-hoi'],['Tạo biên bản','/thu-hoi/tao-moi'],['Chọn nhân viên','/thu-hoi/chon-nhan-vien'],['Chi tiết biên bản','/thu-hoi/chi-tiet'],['Đã thông báo','/thu-hoi/da-thong-bao'],['Nhân viên xác nhận','/thu-hoi/nhan-vien-xac-nhan'],['Quét tài sản','/thu-hoi/quet-tai-san'],['Kiểm tra tình trạng','/thu-hoi/kiem-tra'],['Xác nhận thu hồi','/thu-hoi/xac-nhan'],['Hoàn tất','/thu-hoi/hoan-tat']],
 transfer:[['Danh sách điều chuyển','/dieu-chuyen'],['Tạo yêu cầu','/dieu-chuyen/tao-moi'],['Chi tiết yêu cầu','/dieu-chuyen/chi-tiet'],['Bàn giao','/dieu-chuyen/ban-giao'],['Tiếp nhận','/dieu-chuyen/tiep-nhan']],
 liquidation:[['Danh sách đề nghị','/thanh-ly'],['Tạo đề nghị','/thanh-ly/tao-moi'],['Chờ tiếp nhận','/thanh-ly/cho-tiep-nhan'],['Thẩm định','/thanh-ly/tham-dinh'],['Đủ điều kiện','/thanh-ly/du-dieu-kien'],['Lập tờ trình','/thanh-ly/lap-to-trinh'],['Chờ phê duyệt','/thanh-ly/cho-phe-duyet'],['Phê duyệt','/thanh-ly/phe-duyet'],['Thực hiện','/thanh-ly/thuc-hien'],['Quyết định','/thanh-ly/quyet-dinh'],['Lưu hồ sơ','/thanh-ly/luu-ho-so']]
};
const icons={assets:'▦',allocation:'◫',recovery:'↙',transfer:'⇄',liquidation:'◇'};

export function PrototypeNav({route,group,role,onRoleChange,onNavigate,onWorkspace,onHelp,collapsed,onToggle,mobileOpen,onMobileToggle}){
 const [expanded,setExpanded]=useState(group);
 const [roleMenu,setRoleMenu]=useState(false);
 useEffect(()=>setExpanded(group),[group]);
 useEffect(()=>{const close=e=>{if(e.key==='Escape')setRoleMenu(false);};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close);},[]);
 const steps=journeyForRole(role,group,journeys[group]||[]);
 const visibleGroups=groupsForRole(role);
 const activeRole=roleInfo(role);
 const canonical=route.startsWith('/man-hinh/')?primaryRoutes[route.slice('/man-hinh/'.length).replace('-',':')]:route;
 const index=steps.findIndex(([,path])=>path===canonical);
 return <>
  <aside className={'prototype-sidebar'+(collapsed?' is-collapsed':'')} aria-label="Điều hướng BA Asset">
   <div className="prototype-brand"><button className="prototype-brand-link" onClick={onWorkspace} aria-label="Mở không gian làm việc"><span className="prototype-brand-mark">BA</span><span className="prototype-brand-copy"><strong>BA Asset</strong><small>QUẢN LÝ TÀI SẢN</small></span></button><button className="prototype-collapse" aria-label={collapsed?'Mở rộng thanh điều hướng':'Thu gọn thanh điều hướng'} title={collapsed?'Mở rộng':'Thu gọn'} onClick={onToggle}>{collapsed?'»':'«'}</button></div>
   <div className="prototype-nav-caption">PHÂN HỆ NGHIỆP VỤ</div>
   <nav className="prototype-nav-groups">{visibleGroups.map(item=><div className="prototype-nav-section" key={item.key}><div className={'prototype-nav-line'+(item.key===group?' is-active':'')}><button className="prototype-nav-group" title={item.label} aria-current={item.key===group?'page':undefined} onClick={()=>{setExpanded(item.key);onNavigate(groupHomeForRole(role,item));}}><span className="prototype-nav-icon" aria-hidden="true">{icons[item.key]}</span><span className="prototype-nav-label">{item.label}</span></button>{!collapsed&&<button className="prototype-nav-expand" aria-label={(expanded===item.key?'Thu gọn ':'Mở rộng ')+item.label} aria-expanded={expanded===item.key} onClick={()=>setExpanded(expanded===item.key?'':item.key)}>{expanded===item.key?'⌄':'›'}</button>}</div>{!collapsed&&expanded===item.key&&<div className="prototype-subnav">{journeyForRole(role,item.key,journeys[item.key]||[]).map(([label,path],i)=><button key={path} className={'prototype-subnav-link'+(canonical===path?' is-current':'')} aria-current={canonical===path?'step':undefined} onClick={()=>onNavigate(path)}><span className="prototype-step-dot">{i+1}</span><span>{label}</span></button>)}</div>}</div>)}</nav>
   <div className="prototype-nav-footer"><button onClick={onWorkspace} title="Tất cả màn hình"><span aria-hidden="true">▤</span><span>Tất cả màn hình</span></button><button onClick={onHelp} title="Trợ giúp"><span aria-hidden="true">?</span><span>Trợ giúp</span></button><div className="prototype-role-picker">{roleMenu&&<div className="prototype-role-menu" role="menu" aria-label="Chọn vai trò">{roles.map(item=><button key={item.key} role="menuitemradio" aria-checked={item.key===role} onClick={()=>{setRoleMenu(false);onRoleChange(item.key);}}><span className="prototype-role-avatar">{item.short}</span><span><strong>{item.label}</strong><small>{item.description}</small></span>{item.key===role&&<span className="prototype-role-check">✓</span>}</button>)}</div>}<button className="prototype-role-trigger" aria-label={'Chuyển vai trò, hiện tại: '+activeRole.label} aria-haspopup="menu" aria-expanded={roleMenu} onClick={()=>{if(collapsed)onToggle();setRoleMenu(value=>!value);}}><span className="prototype-role-avatar">{activeRole.short}</span><span className="prototype-role-current"><strong>{activeRole.label}</strong><small>Chuyển vai trò</small></span><span className="prototype-role-chevron">⌃</span></button></div></div>
  </aside>
  <div className="prototype-flowbar"><button className="prototype-mobile-menu" aria-label={mobileOpen?'Đóng menu điều hướng':'Mở menu điều hướng'} aria-expanded={mobileOpen} onClick={onMobileToggle}>☰</button><div className="prototype-flow-heading"><span>{groups.find(item=>item.key===group)?.label}</span><strong>{index<0?'Khám phá màn hình':steps[index][0]}</strong><small>{index<0?'Màn hình theo thiết kế':`Bước ${index+1} / ${steps.length}`}</small></div><div className="prototype-flow-actions"><button disabled={index<=0} onClick={()=>onNavigate(steps[index-1][1])} aria-label="Bước trước">← <span>Trước</span></button><div className="prototype-progress" role="progressbar" aria-label="Tiến độ xem quy trình" aria-valuemin={0} aria-valuemax={steps.length} aria-valuenow={index+1}><span style={{width:`${Math.max(0,(index+1)/steps.length*100)}%`}}/></div><button disabled={index<0||index>=steps.length-1} onClick={()=>onNavigate(steps[index+1][1])} aria-label="Bước tiếp theo"><span>Tiếp</span> →</button></div></div>
 </>;
}
