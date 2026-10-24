export const handoverStatuses={'BBBG-2024-0325':'Chờ ký','BBBG-2024-0324':'Hoàn tất','BBBG-2024-0323':'Nháp','BBBG-2024-0322':'Chờ ký','BBBG-2024-0321':'Hoàn tất','BBBG-2024-0320':'Hoàn tất'};
export const isHandoverLocked=code=>['Chờ ký','Hoàn tất'].includes(handoverStatuses[code]);
export const handoverCatalog=[
 {id:'laptop-dell-7440',name:'Laptop Dell Latitude 7440',type:'Thiết bị CNTT',unit:'Chiếc',price:25000000,notes:'Còn tốt, kèm sạc'},
 {id:'monitor-dell-27',name:'Màn hình Dell 27 inch',type:'Thiết bị CNTT',unit:'Chiếc',price:6500000,notes:'Đã qua sử dụng'},
 {id:'office-desk',name:'Bàn làm việc văn phòng',type:'Nội thất',unit:'Chiếc',price:2800000,notes:'Màu nâu, còn tốt'},
 {id:'office-chair',name:'Ghế xoay văn phòng',type:'Nội thất',unit:'Chiếc',price:1200000,notes:'Còn tốt'},
 {id:'ip-phone',name:'Điện thoại IP',type:'Thiết bị văn phòng',unit:'Chiếc',price:1500000,notes:'Đã qua sử dụng'}
];
export const initialHandoverRows=()=>handoverCatalog.map(asset=>({id:asset.id,assetId:asset.id,quantity:1,notes:asset.notes}));
export function handoverTotals(rows){
 return rows.reduce((total,row)=>{
  const asset=handoverCatalog.find(item=>item.id===row.assetId);
  const quantity=asset?Number(row.quantity)||0:0;
  return {quantity:total.quantity+quantity,amount:total.amount+quantity*(asset?.price||0)};
 },{quantity:0,amount:0});
}
export const formatVnd=value=>new Intl.NumberFormat('vi-VN').format(value);

const digits=['không','một','hai','ba','bốn','năm','sáu','bảy','tám','chín'];
function readHundreds(value,full){
 const hundred=Math.floor(value/100),ten=Math.floor(value%100/10),unit=value%10,parts=[];
 if(hundred||full)parts.push(digits[hundred],'trăm');
 if(ten>1)parts.push(digits[ten],'mươi');
 else if(ten===1)parts.push('mười');
 else if(unit&&(hundred||full))parts.push('lẻ');
 if(unit)parts.push(unit===1&&ten>1?'mốt':unit===5&&ten>0?'lăm':digits[unit]);
 return parts.join(' ');
}
export function vndInWords(amount){
 if(!amount)return 'Không đồng.';
 const groups=[],units=['','nghìn','triệu','tỷ','nghìn tỷ','triệu tỷ'];
 for(let remaining=amount;remaining>0;remaining=Math.floor(remaining/1000))groups.push(remaining%1000);
 const parts=[];
 for(let index=groups.length-1;index>=0;index--)if(groups[index]){
  parts.push(readHundreds(groups[index],index<groups.length-1&&groups[index]<100));
  if(units[index])parts.push(units[index]);
 }
 const words=parts.join(' ');
 return words[0].toLocaleUpperCase('vi-VN')+words.slice(1)+' đồng chẵn.';
}
