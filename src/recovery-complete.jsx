import React from 'react';
import {h} from './design-runtime.jsx';
import './recovery-complete.css';

const assets=[
 {code:'BBBG_01',name:'MacBook Pro 13inch',serial:'C02XK1ABC'},
 {code:'BBBG_02',name:'Màn hình Dell U2723QE',serial:'CN0XK2DEF'}
];
function readCompleted(){try{return JSON.parse(sessionStorage.getItem('ba29-recovery-complete')||'{}');}catch{return {};}}
const dateTime=value=>value?new Intl.DateTimeFormat('vi-VN',{dateStyle:'short',timeStyle:'short'}).format(new Date(value)):'—';
function downloadWord(){const html='<!doctype html><meta charset="utf-8"><h1>Biên bản thu hồi TH01/2026</h1>'+document.querySelector('.recovery-complete')?.innerHTML;const url=URL.createObjectURL(new Blob([html],{type:'application/msword;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='TH01-2026.doc';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}

export default function RecoveryComplete(){
 const data=readCompleted(),details=data.assets||{},processed=assets.filter(asset=>details[asset.code]);
 return <div className="recovery-complete"><div className="recovery-complete-inner">
  <button className="recovery-complete-back" onClick={()=>{location.hash='/thu-hoi';}}>← &nbsp;Danh sách biên bản</button>
  <header className="recovery-complete-header"><div><h1>TH01/2026 <span>✓ Đã hoàn tất</span></h1><p>Nguyễn Văn An · Phòng Kỹ thuật · nghỉ việc</p></div><div className="recovery-complete-actions"><button onClick={()=>window.print()}><i className="fa-solid fa-print recovery-pdf-icon" aria-hidden="true"/>In PDF</button><button onClick={downloadWord}><i className="fa-solid fa-file-word recovery-word-icon" aria-hidden="true"/>Xuất Word</button></div></header>
  <section className="recovery-complete-summary"><div><small>LỊCH BÀN GIAO</small><strong>2026-03-20 · 09:30</strong></div><div><small>NGÀY HOÀN TẤT</small><strong>{dateTime(data.completedAt)}</strong></div><div><small>NGƯỜI NHẬN TÀI SẢN</small><strong>Phòng HCNS</strong></div><div><small>EMAIL NHÂN VIÊN</small><strong>nguyenvanan@example.com</strong></div></section>
  <div className="recovery-complete-section-title"><h2>Danh sách tài sản đã thu hồi ({processed.length})</h2><span>✓ Đã xử lý {processed.length}/2 tài sản</span></div>
  {assets.map(asset=>{const item=details[asset.code];return <article className="recovery-complete-card" key={asset.code}><div className="recovery-complete-asset-head"><div className="recovery-complete-cube">◇</div><div><strong>{asset.code}</strong> <span className={item?.status==='lost'?'is-lost':''}>{item?.status==='lost'?'Đã báo mất':item?.status==='scan'?'✓ Đã thu hồi':'Chưa xử lý'}</span><small>{asset.name} · SN: {asset.serial}</small></div>{item?.status==='scan'&&<small className="recovery-complete-qr">▦ Mã QR đã khớp</small>}</div>
   {item?.status==='lost'?<div className="recovery-complete-lost"><strong>Lý do mất:</strong> {item.reason}</div>:item?.status==='scan'?<div className="recovery-complete-detail"><div className="recovery-complete-fields"><div><small>Tình trạng vật lý:</small><strong>{item.physical}</strong></div><div><small>Trạng thái hoạt động:</small><strong>{item.operation}</strong></div><div><small>Phụ kiện đi kèm bàn giao:</small><strong>{item.accessories?.length?item.accessories.join(', '):'Không ghi nhận'}</strong></div></div>{item.note&&<p>Ghi chú phụ kiện: {item.note}</p>}{item.condition&&<p>Ghi chú hiện trạng: {item.condition}</p>}{item.photo&&<p>Hình ảnh hiện trạng: {item.photo}</p>}</div>:null}
   <footer><span>Người bàn giao: <strong>Nguyễn Văn An</strong></span><span>Ngày nhận bàn giao: <strong>{dateTime(data.completedAt)}</strong></span></footer>
  </article>;})}
  <section className="recovery-complete-signatures"><div><small>BÊN BÀN GIAO (NHÂN VIÊN)</small><strong>Nguyễn Văn An</strong></div><div><small>BÊN NHẬN BÀN GIAO (ĐẠI DIỆN HCNS)</small><strong>Phòng HCNS</strong></div></section>
 </div></div>;
}
