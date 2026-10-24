import test from 'node:test';
import assert from 'node:assert/strict';
import {classifyAction,filterRecords,groups,normalize,routes,validateForm} from '../src/workflows.mjs';
import {declaration,compileStyle} from '../scripts/design-css.mjs';
import {canVisit,groupHomeForRole,groupsForRole,journeyForRole,roleHome,roleInfo} from '../src/roles.mjs';
import manifest from '../src/screen-manifest.json' with {type:'json'};

test('every business route points to an implemented screen',()=>{
 const ids=new Set(manifest.map(f=>f.id));
 for(const [route,id] of Object.entries(routes))assert.ok(ids.has(id),route+' → '+id);
 for(const group of groups)assert.equal(routes[group.path],group.id);
 assert.equal(routes['/cap-phat/dinh-muc'],undefined);
 assert.equal(ids.has('87:1053'),false);
});
test('navigation and primary workflow actions lead to the intended step',()=>{
 const cases=[
  [{label:'Tạo mới',group:'allocation'},'/cap-phat/tao-moi'],
  [{label:'Bàn giao tài sản',group:'allocation',inNavigation:true},'/cap-phat/ban-giao'],
  [{label:'Thu hồi tài sản',group:'allocation',inNavigation:true},'/thu-hoi'],
  [{label:'Tạo yêu cầu điều chuyển',group:'transfer'},'/dieu-chuyen/tao-moi'],
  [{label:'Lập biên bản bàn giao',group:'transfer'},'/dieu-chuyen/ban-giao'],
  [{label:'Lập tờ trình thanh lý',group:'liquidation',inNavigation:true},'/thanh-ly/du-dieu-kien'],
  [{label:'Tạo đề nghị thanh lý',group:'liquidation'},'/thanh-ly/tao-moi'],
  [{label:'Xử lý ngay',group:'liquidation',screen:'/thanh-ly/cho-tiep-nhan'},'/thanh-ly/tham-dinh'],
  [{label:'Tạo tờ trình',group:'liquidation',screen:'/thanh-ly/du-dieu-kien'},'/thanh-ly/lap-to-trinh'],
  [{label:'Xác nhận thanh lý',group:'liquidation',screen:'/thanh-ly/thuc-hien'},'/thanh-ly/quyet-dinh'],
  [{label:'Sửa lại',group:'liquidation',screen:'/thanh-ly'},'/thanh-ly/tao-moi'],
  [{label:'Danh sách biên bản',group:'recovery',screen:'/thu-hoi/kiem-tra'},'/thu-hoi'],
  [{label:'Thêm mới tài sản',group:'assets'},'/tai-san/them-moi'],
  [{label:'Xem',group:'liquidation'},'/thanh-ly/tham-dinh'],
  [{label:'Xem',group:'transfer'},'/dieu-chuyen/chi-tiet'],
  [{label:'Xem',group:'assets'},'/tai-san/chinh-sua']
 ];
 for(const [input,path] of cases)assert.equal(classifyAction(input).path,path,JSON.stringify(input));
 assert.equal(classifyAction({label:'Thêm tài sản',group:'liquidation',screen:'/thanh-ly/tao-moi'}).type,'add-row');
 assert.equal(classifyAction({label:'Thêm tài sản',group:'liquidation',screen:'/thanh-ly/tham-dinh'}).id,'143:25283');
 assert.equal(classifyAction({label:'Lưu nháp',group:'allocation'}).draft,true);
 assert.equal(classifyAction({label:'Gửi phiếu',group:'allocation'}).type,'save');
 assert.equal(classifyAction({label:'Từ chối',group:'allocation'}).kind,'reject');
 assert.equal(classifyAction({label:'Tải ảnh lên',group:'recovery'}).type,'upload');
 assert.equal(classifyAction({label:'Tìm kiếm',name:'Button',group:'assets'}).type,'focus-search');
 assert.equal(classifyAction({label:'Nháp1',name:'Button',group:'recovery',screen:'/thu-hoi'}).type,'status-tab');
 assert.equal(classifyAction({name:'Button - Trợ giúp',group:'assets'}).kind,'help');
 assert.equal(classifyAction({name:'Button - Đóng cửa sổ',group:'allocation',screen:'/man-hinh/87-1419'}).type,'close');
 assert.equal(classifyAction({name:'Button - Xóa từ khóa tìm kiếm',group:'assets'}).type,'clear-query');
 assert.equal(classifyAction({label:'Xuất dữ liệu',group:'assets'}).format,'csv');
 assert.equal(classifyAction({label:'Xuất file',group:'liquidation'}).format,'csv');
 assert.equal(classifyAction({label:'Tải về',group:'liquidation'}).type,'download-attachment');
 assert.equal(classifyAction({label:'Trước',group:'liquidation',screen:'/thanh-ly/tham-dinh'}).direction,-1);
 assert.equal(classifyAction({label:'Sau',group:'liquidation',screen:'/thanh-ly/tham-dinh'}).direction,1);
 assert.equal(classifyAction({label:'In 2 tem',group:'assets'}).format,'print');
 assert.equal(classifyAction({label:'Sạc',name:'Button',group:'recovery',screen:'/thu-hoi/kiem-tra'}).type,'toggle-chip');
 assert.equal(classifyAction({label:'Hợp đồng mua bán',name:'Button',group:'liquidation',screen:'/thanh-ly/thuc-hien'}).type,'section-tab');
});
test('search supports Vietnamese text, status filters and combined conditions',()=>{
 const rows=[{code:'CP-2026-024',name:'Nguyễn Minh Anh',status:'Chờ duyệt',type:'Cho cá nhân'},{code:'CP-2026-023',name:'Trần Hoàng Nam',status:'Đã duyệt',type:'Cho nhân viên mới'}];
 assert.equal(filterRecords(rows,{query:'nguyen minh'}).length,1);
 assert.equal(filterRecords(rows,{status:'Đã duyệt',type:'Cho nhân viên mới'}).length,1);
 assert.equal(filterRecords(rows,{query:'khong-co',status:'Tất cả trạng thái'}).length,0);
 assert.equal(filterRecords(rows,{status:'Tất cả trạng thái'}).length,2);
 assert.equal(filterRecords(rows,{status:'Trạng thái: Tất cả'}).length,2);
 assert.equal(normalize('Điều CHUYỂN'),'dieu chuyen');
});
test('required fields and unselected dropdowns prevent submission',()=>{
 const result=validateForm([{id:'a',label:'Tên tài sản *',required:true,value:' '},{id:'b',label:'Danh mục *',required:true,value:'Chọn danh mục'},{id:'c',label:'Mã tự sinh',required:true,readOnly:true,value:''},{id:'d',label:'Ghi chú',required:false,value:''}]);
 assert.deepEqual(result.map(f=>f.id),['a','b']);
});
test('prototype roles expose only their intended business screens',()=>{
 assert.equal(roleInfo('missing').key,'asset-manager');
 assert.deepEqual(groupsForRole('employee').map(g=>g.key),['allocation','recovery','liquidation']);
 assert.deepEqual(groupsForRole('director').map(g=>g.key),['liquidation']);
 assert.equal(groupHomeForRole('employee',{key:'recovery'}),'/thu-hoi/nhan-vien-xac-nhan');
 assert.equal(groupHomeForRole('asset-manager',{key:'allocation'}),'/cap-phat/yeu-cau');
 assert.equal(groupHomeForRole('employee',{key:'liquidation'}),'/thanh-ly');
 assert.equal(roleHome('asset-manager'),'/cap-phat/yeu-cau');
 assert.deepEqual(journeyForRole('employee','allocation',[]).map(([label])=>label),['Yêu cầu cấp phát','Biên bản bàn giao']);
 assert.deepEqual(journeyForRole('asset-manager','allocation',[['Phiếu của tôi','/cap-phat'],['Tạo yêu cầu','/cap-phat/tao-moi'],['Danh sách yêu cầu','/cap-phat/yeu-cau'],['Chi tiết yêu cầu','/cap-phat/chi-tiet'],['Đã duyệt','/cap-phat/da-duyet'],['Biên bản bàn giao','/cap-phat/ban-giao'],['Tạo biên bản','/cap-phat/ban-giao/tao-moi']]),[['Danh sách yêu cầu cấp phát','/cap-phat/yeu-cau'],['Biên bản bàn giao','/cap-phat/ban-giao']]);
 assert.deepEqual(journeyForRole('asset-manager','recovery',[['Danh sách thu hồi','/thu-hoi'],['Tạo biên bản','/thu-hoi/tao-moi'],['Chọn nhân viên','/thu-hoi/chon-nhan-vien'],['Chi tiết biên bản','/thu-hoi/chi-tiet']]),[['Danh sách thu hồi','/thu-hoi'],['Tạo biên bản thu hồi','/thu-hoi/tao-moi']]);
 assert.deepEqual(journeyForRole('asset-manager','transfer',[['Danh sách điều chuyển','/dieu-chuyen'],['Tạo yêu cầu','/dieu-chuyen/tao-moi'],['Chi tiết yêu cầu','/dieu-chuyen/chi-tiet']]),[]);
 assert.equal(groupHomeForRole('asset-manager',{key:'transfer',path:'/dieu-chuyen'}),'/dieu-chuyen');
 assert.deepEqual(journeyForRole('asset-manager','liquidation',[]),[
  ['Kiểm tra và thẩm định tài sản','/thanh-ly/cho-tiep-nhan'],
  ['Lập tờ trình thanh lý tài sản','/thanh-ly/du-dieu-kien'],
  ['Thực hiện thanh lý tài sản','/thanh-ly/thuc-hien'],
  ['Cập nhật dữ liệu và lưu hồ sơ thanh lý','/thanh-ly/luu-ho-so']
 ]);
 assert.deepEqual(journeyForRole('employee','liquidation',[]),[['Danh sách đề nghị thanh lý','/thanh-ly']]);
 assert.equal(canVisit('employee','/thanh-ly'),true);
 assert.deepEqual(journeyForRole('asset-manager','assets',[['Danh sách tài sản','/tai-san'],['Thêm mới tài sản','/tai-san/them-moi'],['Chỉnh sửa tài sản','/tai-san/chinh-sua']]),[]);
 assert.equal(groupHomeForRole('asset-manager',{key:'assets',path:'/tai-san'}),'/tai-san');
 assert.deepEqual(journeyForRole('employee','recovery',[]).map(([label])=>label),['Giao diện nhân viên xác nhận']);
 assert.equal(roleHome('director'),'/thanh-ly/cho-phe-duyet');
 assert.equal(canVisit('employee','/cap-phat/ban-giao'),true);
 assert.equal(canVisit('employee','/thanh-ly/tao-moi'),true);
 assert.equal(canVisit('employee','/cap-phat/ban-giao/chi-tiet'),true);
 assert.equal(canVisit('employee','/thu-hoi/nhan-vien-xac-nhan'),true);
 assert.equal(canVisit('employee','/thu-hoi/quet-tai-san'),false);
 assert.equal(canVisit('employee','/cap-phat/ban-giao/tao-moi'),false);
 assert.equal(canVisit('employee','/tai-san'),false);
 assert.equal(canVisit('director','/thanh-ly/phe-duyet'),true);
 assert.equal(canVisit('director','/thanh-ly/tao-moi'),false);
 assert.equal(canVisit('asset-manager','/thanh-ly/phe-duyet'),false);
 assert.deepEqual(journeyForRole('director','liquidation',[['Chờ phê duyệt','/thanh-ly/cho-phe-duyet'],['Phê duyệt','/thanh-ly/phe-duyet']]),[['Chờ phê duyệt','/thanh-ly/cho-phe-duyet'],['Phê duyệt','/thanh-ly/phe-duyet']]);
 assert.equal(canVisit('asset-manager','/man-hinh/143-26779'),false);
 assert.deepEqual(journeyForRole('asset-manager','liquidation',[]).map(([label])=>label),['Kiểm tra và thẩm định tài sản','Lập tờ trình thanh lý tài sản','Thực hiện thanh lý tài sản','Cập nhật dữ liệu và lưu hồ sơ thanh lý']);
});
test('CSS conversion preserves geometry, transforms, fonts and grid placement',()=>{
 assert.equal(declaration('inset-[-1px_0_0_0]'),'inset:-1px 0 0 0');
 assert.equal(declaration('top-[calc(50%-24px)]'),'top:calc(50% - 24px)');
 assert.equal(declaration('col-[4/span_4]'),'grid-column:4/span 4');
 assert.match(declaration("font-['Inter:Semi_Bold']"),/Inter Variable/);
 assert.equal(compileStyle('flex w-full px-[24px] min-h-px').unknown.length,0);
});
