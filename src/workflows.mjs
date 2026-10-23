export const groups = [
 {key:'assets',label:'Danh sách tài sản',path:'/tai-san',id:'40:12'},
 {key:'allocation',label:'Cấp phát tài sản',path:'/cap-phat',id:'87:2'},
 {key:'recovery',label:'Thu hồi tài sản',path:'/thu-hoi',id:'70:1485'},
 {key:'transfer',label:'Điều chuyển tài sản',path:'/dieu-chuyen',id:'55:6'},
 {key:'liquidation',label:'Thanh lý tài sản',path:'/thanh-ly',id:'145:27645'}
];
export const routes = {
 '/cap-phat':'87:2', '/cap-phat/tao-moi':'87:707',
 '/cap-phat/yeu-cau':'87:2907', '/cap-phat/chi-tiet':'87:3277', '/cap-phat/da-duyet':'123:414',
 '/cap-phat/ban-giao':'123:1142', '/cap-phat/ban-giao/tao-moi':'123:801',
 '/thu-hoi':'70:1485', '/thu-hoi/tao-moi':'32:292', '/thu-hoi/chon-nhan-vien':'34:384',
 '/thu-hoi/chi-tiet':'64:2', '/thu-hoi/da-thong-bao':'67:1153', '/thu-hoi/quet-tai-san':'65:404',
 '/thu-hoi/kiem-tra':'66:575', '/thu-hoi/xac-nhan':'67:898', '/thu-hoi/hoan-tat':'67:1291', '/thu-hoi/nhan-vien-xac-nhan':'133:2',
 '/dieu-chuyen':'55:6', '/dieu-chuyen/tao-moi':'55:312', '/dieu-chuyen/chi-tiet':'55:516',
 '/dieu-chuyen/ban-giao':'55:740', '/dieu-chuyen/tiep-nhan':'55:1077',
 '/thanh-ly':'145:27645', '/thanh-ly/tao-moi':'145:27928', '/thanh-ly/cho-tiep-nhan':'143:27216',
 '/thanh-ly/tham-dinh':'149:28340', '/thanh-ly/du-dieu-kien':'143:25496', '/thanh-ly/lap-to-trinh':'143:24897',
 '/thanh-ly/cho-phe-duyet':'143:24657', '/thanh-ly/phe-duyet':'143:26779',
 '/thanh-ly/thuc-hien':'143:26280', '/thanh-ly/quyet-dinh':'143:23696', '/thanh-ly/luu-ho-so':'143:24000',
 '/tai-san':'40:12', '/tai-san/them-moi':'40:7095', '/tai-san/chinh-sua':'40:10728',
 '/tai-san/in-qr':'40:14479', '/tai-san/xoa':'40:11112'
};
export const primaryRoutes=Object.fromEntries(Object.entries(routes).map(([path,id])=>[id,path]));
export const normalize = value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replaceAll('đ','d').replaceAll('Đ','D').toLowerCase().replace(/\s+/g,' ').trim();
export function groupFor(page){return ({'40:2':'assets','79:2':'allocation','28:6':'recovery','55:2':'transfer','90:2':'liquidation'})[page]||'allocation';}
export function classifyAction({label='',name='',id='',group='allocation',screen='',inNavigation=false}){
 const t=normalize(label),n=normalize(name),all=t+' '+n;
 const go=path=>({type:'navigate',path}); const modal=kind=>({type:'modal',kind});
 if(/dong modal|close window|close button|nut dong nhanh|hien.an mat khau/.test(n))return {type:/mat khau/.test(n)?'password':'close'};
 if(/dong hop thoai|dong canh bao|^button - close$/.test(n))return {type:'close'};
 if(/tro giup|ho tro/.test(n))return modal('help');
 if(/xoa tu khoa tim kiem/.test(all))return {type:'clear-query'};
 if(/bo chon/.test(all))return {type:'clear-selection'};
 if(/xuat du lieu|xuat excel/.test(t))return {type:'export',format:'csv'};
 if(/^xuat file$/.test(t))return {type:'export',format:'csv'};
 if(/^tai ve$/.test(t))return {type:'download-attachment'};
 if(/^(truoc|sau)$/.test(t)&&/thanh-ly\/tham-dinh/.test(screen))return {type:'page',direction:t==='truoc'?-1:1};
 if(/^in \d+ tem$/.test(t))return {type:'export',format:'print'};
 if(/^(trang chu|quan ly tai san|danh sach tai san)$/.test(t))return go('/tai-san');
 if(/danh sach bien ban/.test(t)&&group==='recovery')return go('/thu-hoi');
 if(/tai anh len|tai tep len/.test(t))return {type:'upload'};
 if(/^(tim kiem|tra cuu)$/.test(t)&&/button/i.test(name))return {type:'focus-search'};
 if(/notification|thong bao/.test(n)&&!t)return modal('notifications');
 if(/refresh|lam moi|tai lai|thu lai/.test(all))return {type:'refresh'};
 if(/xoa bo loc|xoa loc|dat lai bo loc|clear all|reset filter|bo loc mac dinh/.test(all))return {type:'clear-filters'};
 if(/page|pagination|previous|next|trang truoc|trang sau/.test(n)&&(/button|trang/.test(n)))return {type:'page',direction:/previous|truoc/.test(n)?-1:1,page:/^\d+$/.test(t)?+t:undefined};
 if(/^\d+$/.test(t)&&/button/.test(n))return {type:'page',page:+t};
 if(/giam|tang/.test(n))return {type:'quantity',delta:/giam/.test(n)?-1:1};
 if(/xoa.*dong|remove row|remove asset/.test(all))return {type:'remove-row'};
 if(/hien.an mat khau/.test(n))return {type:'password'};
 if(inNavigation){
  if(/tai san|trang thiet bi/.test(t)&&/danh sach|cua toi|quan ly|tong quan/.test(t)&&!(/cap phat|thu hoi|dieu chuyen|thanh ly/.test(t)))return go('/tai-san');
  if(/dieu chuyen/.test(t))return go('/dieu-chuyen');
  if(/thu hoi/.test(t))return go('/thu-hoi');
  if(/ban giao/.test(t))return go('/cap-phat/ban-giao');
  if(/phieu yeu cau|cap phat/.test(t))return go(/danh sach/.test(t)?'/cap-phat/yeu-cau':'/cap-phat');
  if(/thanh ly|de nghi|to trinh|tham dinh|ho so/.test(t)){
   if(/tiep nhan|kiem tra|tham dinh/.test(t))return go('/thanh-ly/cho-tiep-nhan');
   if(/lap to trinh/.test(t))return go('/thanh-ly/du-dieu-kien');
   if(/phe duyet/.test(t))return go('/thanh-ly/cho-phe-duyet');
   if(/thuc hien/.test(t))return go('/thanh-ly/thuc-hien');
   if(/ho so|luu/.test(t))return go('/thanh-ly/luu-ho-so');
   return go('/thanh-ly');
  }
  if(/tong quan|dashboard/.test(t))return go('/tai-san');
  if(/tro giup|ho tro/.test(t))return modal('help');
 }
 if(/quay lai|tro ve|ve danh sach|^dong$|^huy$|^huy bo$|^bo qua$|^huy thao tac$/.test(t))return {type:'back',confirm:/them-moi|tao-moi|chinh-sua/.test(screen)};
 if(/xem ly do|ly do tu choi/.test(t))return {type:'screen',id:'87:1419'};
 if(/luu nhap/.test(t))return {type:'save',draft:true};
 if(/in qr|in tem|cau hinh tem/.test(t))return go('/tai-san/in-qr');
 if(/xuat.*pdf|in pdf|tai.*pdf|xuat word|tai.*tep|tai xuong|xuat excel/.test(t))return {type:'export',format:/word/.test(t)?'word':/excel/.test(t)?'csv':'print'};
 if(/^in$|in ngay|in tem ngay/.test(t))return {type:'export',format:'print'};
 if(/^xem$/.test(t)){
  const detailPath={assets:'/tai-san/chinh-sua',allocation:'/cap-phat/chi-tiet',recovery:'/thu-hoi/chi-tiet',transfer:'/dieu-chuyen/chi-tiet',liquidation:'/thanh-ly/tham-dinh'}[group];
  if(detailPath)return go(detailPath);
 }
 if(/hien thi|xem tat ca/.test(t)&&/thong bao/.test(all))return modal('notifications');
 if(group==='allocation'){
  if(/tao moi|tao phieu|sua phieu|chinh sua/.test(t))return go('/cap-phat/tao-moi');
  if(/tao bien ban|lap bien ban/.test(t))return go('/cap-phat/ban-giao/tao-moi');
  if(/xem chi tiet|xem phieu/.test(t)||/^cp-/.test(t))return go('/cap-phat/chi-tiet');
  if(/tu choi/.test(t))return modal('reject');
  if(/phe duyet|duyet phieu/.test(t))return {type:'approve',path:'/cap-phat/da-duyet'};
  if(/ky|xac nhan/.test(t)&&/ban-giao/.test(screen))return {type:'screen',id:'123:1530'};
  if(/gui phieu|gui yeu cau/.test(t))return {type:'save',path:'/cap-phat'};
  if(/luu|hoan tat/.test(t))return {type:'save',path:'/cap-phat/ban-giao'};
  if(/huy phieu/.test(t))return modal('cancel-record');
 }
 if(group==='recovery'){
  if(['/thu-hoi/kiem-tra','/thu-hoi/xac-nhan'].includes(screen)&&/^(sac|cap|chuot|balo|hop)$/.test(t))return {type:'toggle-chip'};
  if(screen==='/thu-hoi'&&/^(tat ca|nhap|cho ban giao|dang ban giao)\s*\d*$/.test(t))return {type:'status-tab',status:/^tat ca/.test(t)?'':t.replace(/\d+$/,'').trim()};
  if(/tao bien ban|tao moi/.test(t))return go('/thu-hoi/tao-moi');
  if(/gui.*thong bao/.test(t))return {type:'approve',path:'/thu-hoi/da-thong-bao'};
  if(/tiep nhan|thu hoi|bat dau/.test(t)&&!/^thu hoi tai san$/.test(t))return go('/thu-hoi/quet-tai-san');
  if(/quet|scan/.test(t))return {type:'scan'};
  if(/hoan tat|xac nhan thu hoi/.test(t))return {type:'save',path:'/thu-hoi/hoan-tat'};
  if(/tiep tuc|tiep theo/.test(t))return go(screen.includes('kiem-tra')?'/thu-hoi/xac-nhan':'/thu-hoi/kiem-tra');
  if(/xac nhan/.test(t))return {type:'save',path:'/thu-hoi/chi-tiet'};
  if(/luu|tao bien ban/.test(t))return {type:'save',path:'/thu-hoi/chi-tiet'};
  if(/chi tiet|^th\d|^th-/.test(t))return go('/thu-hoi/chi-tiet');
 }
 if(group==='transfer'){
  if(/tao yeu cau|tao moi/.test(t))return go('/dieu-chuyen/tao-moi');
  if(/gui yeu cau|gui de nghi/.test(t))return {type:'save',path:'/dieu-chuyen/chi-tiet'};
  if(/tiep nhan|phe duyet|chap thuan/.test(t))return {type:'approve',path:'/dieu-chuyen/ban-giao'};
  if(/lap bien ban/.test(t))return go('/dieu-chuyen/ban-giao');
  if(/xac nhan|hoan tat|ghi nhan/.test(t))return {type:'save',path:'/dieu-chuyen/tiep-nhan'};
  if(/luu|tao bien ban/.test(t))return {type:'save',path:'/dieu-chuyen/tiep-nhan'};
  if(/tu choi|bo sung/.test(t))return modal('reject');
  if(/^dc-|xem chi tiet/.test(t))return go('/dieu-chuyen/chi-tiet');
 }
 if(group==='liquidation'){
  if(['/thanh-ly/thuc-hien','/thanh-ly/phe-duyet'].includes(screen)&&/^(thong tin chung|hop dong mua ban|bien ban ban giao|danh muc tai san)$/.test(t))return {type:'section-tab',label:t};
  if(/sua lai/.test(t))return go('/thanh-ly/tao-moi');
  if(/xem lai/.test(t))return go('/thanh-ly/phe-duyet');
  if(/xu ly ngay/.test(t))return go('/thanh-ly/tham-dinh');
  if(/them tai san/.test(t))return screen==='/thanh-ly/tao-moi'?{type:'add-row'}:{type:'screen',id:'143:25283'};
  if(/them vao danh sach/.test(t))return {type:'select-assets'};
  if(/lap de nghi|tao de nghi|tao moi/.test(t))return go('/thanh-ly/tao-moi');
  if(/gui de nghi|luu de nghi/.test(t))return {type:'save',path:'/thanh-ly'};
  if(/tiep nhan|kiem tra|tham dinh/.test(t))return go('/thanh-ly/tham-dinh');
  if(/lap to trinh|tao to trinh/.test(t))return go('/thanh-ly/lap-to-trinh');
  if(/gui to trinh/.test(t))return {type:'save',path:'/thanh-ly/cho-phe-duyet'};
  if(/phe duyet/.test(t))return screen.includes('phe-duyet')?{type:'approve',path:'/thanh-ly/thuc-hien'}:go('/thanh-ly/phe-duyet');
  if(/bo sung|tra lai|tu choi/.test(t))return modal('reject');
  if(screen==='/thanh-ly/thuc-hien'&&/xac nhan thanh ly/.test(t))return go('/thanh-ly/quyet-dinh');
  if(/thuc hien|chi tiet quyet dinh/.test(t))return go('/thanh-ly/quyet-dinh');
  if(/dong ho so|luu ho so/.test(t))return {type:'save',path:'/thanh-ly/luu-ho-so'};
  if(/hoan tat|cap nhat|luu ket qua|xac nhan/.test(t))return {type:'save',path:'/thanh-ly/du-dieu-kien'};
  if(/^tl-|^tt-|xem chi tiet/.test(t))return go('/thanh-ly/tham-dinh');
 }
 if(group==='assets'){
  if(/^(moi|tot|da qua su dung|hong nhe)(?: \(\d+%\))?$/.test(t))return {type:'toggle-chip'};
  if(/them.*tai san|them moi|khai bao|tao tai san/.test(t))return go('/tai-san/them-moi');
  if(/sua|chinh sua|cap nhat thong tin/.test(t))return go('/tai-san/chinh-sua');
  if(/xoa tai san|^xoa$/.test(t))return go('/tai-san/xoa');
  if(/xac nhan xoa|xoa vinh vien|dong y xoa/.test(t))return {type:'delete'};
  if(/luu va them/.test(t))return {type:'save',another:true,path:'/tai-san/them-moi'};
  if(/luu|xac nhan/.test(t))return {type:'save',path:'/tai-san'};
  if(/^ts-/.test(t))return go('/tai-san/chinh-sua');
 }
 if(/them dong|them.*tai san|them moi/.test(t))return {type:'add-row'};
 if(/chon tep|tai tep|dinh kem|upload|chon file/.test(t))return {type:'upload'};
 if(/thong bao/.test(t))return modal('notifications');
 if(/tro giup|ho tro/.test(t))return modal('help');
 return {type:'menu'};
}

export function filterRecords(records,filters){
 const query=normalize(filters.query);
 return records.filter(row=>{
  const text=normalize(typeof row==='string'?row:Object.values(row).join(' '));
  const all=value=>/(?:^|:\s*)tat ca/.test(normalize(value));
  return (!query||text.includes(query))&&(!filters.status||all(filters.status)||text.includes(normalize(filters.status)))&&(!filters.type||all(filters.type)||text.includes(normalize(filters.type)));
 });
}
export function validateForm(fields){
 return fields.filter(f=>f.required&&!f.readOnly&&(!String(f.value??'').trim()||/^chon |^--/.test(normalize(f.value)))).map(f=>({id:f.id,message:'Vui lòng nhập '+f.label.toLowerCase().replaceAll('*','').trim()+'.'}));
}
