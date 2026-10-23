import {groups,primaryRoutes} from './workflows.mjs';

export const roles=[
 {key:'director',label:'Giám đốc',short:'GD',description:'Phê duyệt thanh lý',home:'/thanh-ly/cho-phe-duyet'},
 {key:'asset-manager',label:'Nhân viên quản lý tài sản',short:'TS',description:'Quản lý nghiệp vụ',home:'/cap-phat/yeu-cau'},
 {key:'employee',label:'Nhân viên thông thường',short:'NV',description:'Yêu cầu và xác nhận',home:'/cap-phat'}
];
const restrictedPaths={
 director:new Set(['/thanh-ly/cho-phe-duyet','/thanh-ly/phe-duyet']),
 employee:new Set(['/cap-phat','/cap-phat/tao-moi','/cap-phat/chi-tiet','/cap-phat/ban-giao','/cap-phat/ban-giao/chi-tiet','/thu-hoi/nhan-vien-xac-nhan','/thanh-ly','/thanh-ly/tao-moi','/man-hinh/87-1419','/man-hinh/123-1530'])
};
const specialJourneys={
 employee:{
  allocation:[['Yêu cầu cấp phát','/cap-phat'],['Biên bản bàn giao','/cap-phat/ban-giao']],
  recovery:[['Giao diện nhân viên xác nhận','/thu-hoi/nhan-vien-xac-nhan']],
  liquidation:[['Danh sách đề nghị thanh lý','/thanh-ly']]
 },
 director:{liquidation:[['Chờ phê duyệt','/thanh-ly/cho-phe-duyet'],['Phê duyệt','/thanh-ly/phe-duyet']]}
};
export const roleInfo=role=>roles.find(item=>item.key===role)||roles[1];
export const roleHome=role=>roleInfo(role).home;
export function canVisit(role,path){
 const canonical=path.startsWith('/man-hinh/')?primaryRoutes[path.slice('/man-hinh/'.length).replace('-',':')]||path:path;
 if(role==='asset-manager')return canonical!=='/thanh-ly/phe-duyet';
 return !!restrictedPaths[role]?.has(canonical);
}
export function groupsForRole(role){return groups.filter(group=>role==='asset-manager'||(role==='employee'?['allocation','recovery','liquidation'].includes(group.key):group.key==='liquidation'));}
export function groupHomeForRole(role,group){if(role==='employee'&&group.key==='recovery')return '/thu-hoi/nhan-vien-xac-nhan';if(role==='employee'&&group.key==='liquidation')return '/thanh-ly';if(role==='asset-manager'&&group.key==='allocation')return '/cap-phat/yeu-cau';if(role==='asset-manager'&&group.key==='liquidation')return '/thanh-ly/cho-tiep-nhan';return role==='asset-manager'?group.path:roleHome(role);}
export function journeyForRole(role,group,fullJourney){
 if(specialJourneys[role]?.[group])return specialJourneys[role][group];
 if(role==='asset-manager'&&group==='allocation')return fullJourney.filter(([,path])=>['/cap-phat/yeu-cau','/cap-phat/ban-giao'].includes(path)).map(([label,path])=>[path==='/cap-phat/yeu-cau'?'Danh sách yêu cầu cấp phát':label,path]);
 if(role==='asset-manager'&&group==='recovery')return fullJourney.filter(([,path])=>['/thu-hoi','/thu-hoi/tao-moi'].includes(path)).map(([label,path])=>[path==='/thu-hoi/tao-moi'?'Tạo biên bản thu hồi':label,path]);
 if(role==='asset-manager'&&group==='liquidation')return [
  ['Kiểm tra và thẩm định tài sản','/thanh-ly/cho-tiep-nhan'],
  ['Lập tờ trình thanh lý tài sản','/thanh-ly/du-dieu-kien'],
  ['Thực hiện thanh lý tài sản','/thanh-ly/thuc-hien'],
  ['Cập nhật dữ liệu và lưu hồ sơ thanh lý','/thanh-ly/luu-ho-so']
 ];
 if(role==='asset-manager'&&group==='assets')return [];
 if(role==='asset-manager'&&group==='transfer')return [];
 return fullJourney.filter(([,path])=>canVisit(role,path));
}
