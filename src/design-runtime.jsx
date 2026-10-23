import React,{createContext,useContext,useState,useId,useEffect} from 'react';
import {normalize} from './workflows.mjs';
import {readStore,storeField} from './storage.mjs';
export const Fragment=React.Fragment;
export const InteractionContext=createContext({action:()=>{},field:()=>{}});
export function textOf(value){
 if(value==null||typeof value==='boolean')return '';
 if(typeof value==='string'||typeof value==='number')return String(value);
 if(Array.isArray(value))return value.map(textOf).join(' ');
 return textOf(value.props?.children);
}
function optionsFor(text,group){
 const t=normalize(text);
 if(/trang thai|cho duyet|da duyet|cho tiep nhan/.test(t)){
  const states={assets:['Chưa cấp phát','Đang sử dụng','Đang sửa chữa / bảo trì','Đã thanh lý','Đã xóa'],allocation:['Nháp','Chờ duyệt','Đã duyệt','Từ chối','Đã cấp phát'],recovery:['Nháp','Chờ xác nhận','Đã thông báo','Đang thu hồi','Hoàn tất'],transfer:['Chờ tiếp nhận','Chờ bổ sung','Đã phê duyệt','Chờ xác nhận bàn giao','Từ chối','Hoàn tất'],liquidation:['Nháp','Chờ tiếp nhận','Đang thẩm định','Chờ phê duyệt','Đã phê duyệt','Hoàn tất']};
  return ['Tất cả trạng thái',...(states[group]||states.allocation)];
 }
 if(/loai yeu cau|cho ca nhan/.test(t))return ['Tất cả loại yêu cầu','Cho cá nhân','Cho nhân viên mới'];
 if(/trang|^6$|^10$|^20$/.test(t))return ['6 / trang','10 / trang','20 / trang','50 / trang'];
 if(/phong|bo phan|don vi/.test(t))return ['Chọn phòng ban','Phòng Hành chính','Phòng Kế toán','Phòng Kỹ thuật','Phòng Nhân sự','Phòng Kinh doanh'];
 if(/danh muc|nhom|loai tai san/.test(t))return ['Tất cả danh mục','Máy tính xách tay','Máy tính để bàn','Màn hình','Máy in','Thiết bị văn phòng','Bàn ghế văn phòng'];
 if(/nhan vien|nguyen|tran|pham|nguoi/.test(t))return ['Chọn nhân viên','Nguyễn Minh Anh','Nguyễn Văn An','Trần Hoàng Nam','Phạm Hoàng Dung','Nguyễn Thị Mai'];
 if(/tinh trang|hoat dong|hu hong|tot/.test(t))return ['Hoạt động bình thường','Hư hỏng','Cần bảo trì','Không sử dụng được'];
 if(/ngay.*moi|cu nhat/.test(t))return ['Ngày tạo: Mới nhất trước','Ngày tạo: Cũ nhất trước'];
 if(/ly do/.test(t))return ['Chọn lý do','Hết hạn sử dụng','Hư hỏng không thể sửa chữa','Không còn nhu cầu sử dụng','Khác'];
 if(/hinh thuc|phuong thuc/.test(t))return ['Chọn hình thức','Bán thanh lý','Tiêu hủy','Chuyển giao'];
 return [text,'Tất cả','Thiết bị công nghệ thông tin','Thiết bị văn phòng','Khác'].filter(Boolean);
}
function Field({as='input',designProps,children}){
 const ctx=useContext(InteractionContext),generatedId=useId();
 const {className,...props}=designProps;
 const nodeId=props['data-node-id']||generatedId;
 const text=textOf(children).replace(/\s+/g,' ').trim();
 const hints=props['data-field-hints']||'';
 const isCheck=hints.includes('check');
 const isPlaceholder=/^(nhập|nhap|tìm |tim |chọn |chon |vd:|ví dụ|dd\/|--|gõ |tối thiểu)/i.test(text)||!text;
 const isFilter=/^(tất cả|tìm |tra cứu|nhập mã phiếu|\d+\s*\/\s*trang)/i.test(text);
 const password=/mật khẩu|password/i.test(text+' '+props['data-name']);
 const [value,setValue]=useState(()=>(!isFilter&&!password?readStore().forms?.[nodeId]:undefined)??(isPlaceholder?'':text));
 const [checked,setChecked]=useState(false);
 const [label,setLabel]=useState(text||'Thông tin');
 useEffect(()=>{if(isFilter)setValue(isPlaceholder?'':text);},[ctx.resetKey]);
 const ownRef=React.useCallback(el=>{
  if(!el)return;
  let node=el.closest('[data-name]'),nextLabel='';
  for(let depth=0;node&&depth<5&&!nextLabel;depth++,node=node.parentElement){
   const labelNode=node.querySelector(':scope > [data-name="Label"],:scope > [data-name^="Label -"]');
   const sibling=node.previousElementSibling;
   nextLabel=labelNode?.textContent||(/label/i.test(sibling?.dataset.name||'')?sibling.textContent:'');
  }
  if(nextLabel&&nextLabel.length<160)setLabel(nextLabel);
 },[]);
 const onChange=e=>{
  const next=e.target.value;setValue(next);if(!isFilter&&!password)storeField(nodeId,next);
  ctx.field({id:nodeId,value:next,label,element:e.target,kind:as});
 };
 if(isCheck)return React.createElement('span',{...props,className:(className||'')+' control-check',role:'checkbox','aria-label':label,'aria-checked':checked,tabIndex:0,
  onClick:e=>{e.stopPropagation();setChecked(!checked);ctx.field({id:nodeId,value:!checked,label,element:e.currentTarget,kind:'checkbox'});},
  onKeyDown:e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();e.stopPropagation();setChecked(current=>!current);ctx.field({id:nodeId,value:!checked,label,element:e.currentTarget,kind:'checkbox'});}}
 },children,checked&&React.createElement('span',{className:'check-mark','aria-hidden':true},'✓'));
 const readOnly=hints.includes('readonly')&&!isPlaceholder;
 const isSelect=as==='select';
 let options=isSelect?optionsFor(text,ctx.group):[];
 if(isSelect&&!options.includes(value||text))options.unshift(value||text);
 const nativeProps={className:'design-native-control',value:isSelect?(value||text):value,onChange,'aria-label':label,'data-field-id':nodeId,'data-required':label.includes('*')?'true':undefined,'data-placeholder':isPlaceholder?'true':undefined,ref:ownRef,readOnly,
  onClick:e=>e.stopPropagation(),onFocus:e=>e.currentTarget.parentElement?.classList.add('field-focused'),onBlur:e=>e.currentTarget.parentElement?.classList.remove('field-focused'),
  style:{paddingLeft:/nhập mã phiếu|tìm |tìm kiếm|mật khẩu|tra cứu/i.test(text)?40:14}
 };
 if(!isSelect){nativeProps.placeholder=isPlaceholder?text:undefined;nativeProps.type=password?'password':'text';}
 const ghost=React.createElement('div',{className:'control-geometry','aria-hidden':true},children);
 return React.createElement('div',{...props,className:(className||'')+' design-field','data-field-label':label},ghost,
  React.createElement(isSelect?'select':as,nativeProps,isSelect?options.map((o,i)=>React.createElement('option',{key:o+'-'+i,value:o},o)):undefined));
}
function Action({designProps,children,kind}){
 const ctx=useContext(InteractionContext);
 const {className,...props}=designProps;
 const label=textOf(children).replace(/\s+/g,' ').trim();
 const name=props['data-name']||'';
 const disabled=/disabled|skeleton/i.test(name);
 const onClick=e=>{
  e.stopPropagation();
  if(!disabled)ctx.action({label,name,id:props['data-node-id'],element:e.currentTarget,event:e,kind,
   inNavigation:!!e.currentTarget.closest('[data-name*="Aside"],[data-name*="Sidebar"],[data-name="Nav"]')});
 };
 return React.createElement('div',{...props,className:(className||'')+' design-action',role:'button',tabIndex:disabled?-1:0,'aria-disabled':disabled||undefined,
  'aria-label':label||name.replace(/Button\s*[-→]?\s*/i,'')||'Thao tác',onClick,onKeyDown:e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();onClick(e);}}
 },children);
}
function SavedRows({template}){
 const ctx=useContext(InteractionContext);
 const records=(ctx.records||[]).filter(r=>r.group===ctx.group);
 if(!ctx.isList||!records.length)return template;
 return React.createElement(React.Fragment,null,records.map(record=>React.createElement('div',{className:'saved-record-row',key:record.id},
  React.createElement('button',{className:'saved-record-code',onClick:e=>ctx.action({label:'Xem chi tiết',name:'Button',element:e.currentTarget})},record.code),
  React.createElement('span',null,Object.entries(record.fields||{}).find(([key])=>/tên tài sản|họ.*tên|người nhận/i.test(key))?.[1]||'Yêu cầu vừa tạo'),
  React.createElement('span',{className:'saved-record-status'},record.status))),template);
}
/** JSX factory: design presentation stays static; controls use shared accessible React components. */
export function h(type,props,...children){
 if(typeof type!=='string'||type!=='div'||!props?.['data-name'])return React.createElement(type,props,...children);
 const name=props['data-name'],text=textOf(children).trim();
 if(name==='Row 1')return React.createElement(SavedRows,{key:props['data-node-id'],template:React.createElement(type,props,...children)});
 if(/^(Input|Options|Textarea|Text Area)(?:$|\s*[-→])/i.test(name)&&!/section|label|container|icon|wrapper/i.test(name)){
  return React.createElement(Field,{key:props['data-node-id'],designProps:props,as:/options/i.test(name)?'select':/textarea|text area/i.test(name)?'textarea':'input'},...children);
 }
 const brand=/app brand|brand logo|logo section/i.test(name);
 const button=/^(Button|Link)(?:$|\s*[-→])/i.test(name)&&!/:margin|buttons|button group/i.test(name);
 const pageButton=/^(Previous Button|Next Button|Refresh Table Button|Action Button|Menu Item|Tab -)/i.test(name);
 const code=/^(CP|DC|TL|TT|BBBG|BB|TS)-[\w\s-]+$/.test(text)&&text.length<45;
 if(brand||button||pageButton||code)return React.createElement(Action,{key:props['data-node-id'],designProps:props,kind:brand?'workspace':undefined},...children);
 return React.createElement(type,props,...children);
}
