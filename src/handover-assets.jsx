import {useEffect,useRef,useState} from 'react';
import {h,Fragment} from './design-runtime.jsx';
import {readStore,writeStore} from './storage.mjs';
import {handoverCatalog,initialHandoverRows,handoverTotals,formatVnd,vndInWords} from './handover-assets.mjs';

export default function HandoverAssets({recordCode,readOnly=false}){
 const [rows,setRows]=useState(()=>readStore().handoverAssets?.[recordCode]??initialHandoverRows());
 const lastSelect=useRef(null),focusAdded=useRef(false);
 const totals=handoverTotals(rows);
 useEffect(()=>{if(focusAdded.current){lastSelect.current?.focus();focusAdded.current=false;}},[rows.length]);
 const update=next=>{
  if(readOnly)return;
  const state=readStore();
  state.handoverAssets={...state.handoverAssets,[recordCode]:next};
  writeStore(state);setRows(next);
 };
 const change=(id,patch)=>update(rows.map(row=>row.id===id?{...row,...patch}:row));
 const add=()=>{
  focusAdded.current=true;
  update([...rows,{id:globalThis.crypto?.randomUUID?.()||String(Date.now()),assetId:'',quantity:'',notes:''}]);
 };
 return <>
  <section className="handover-assets" data-node-id="123:999" aria-labelledby="handover-assets-heading">
   <header className="handover-assets-heading">
    <h3 id="handover-assets-heading">Danh sách tài sản bàn giao</h3>
    {!readOnly&&<button type="button" className="handover-add" data-node-id="123:1003" onClick={add}><span aria-hidden="true">＋</span> Thêm tài sản vào</button>}
   </header>
   <div className="handover-assets-scroll">
    <table className="handover-assets-table">
     <caption className="handover-sr-only">Danh sách tài sản bàn giao</caption>
     <thead><tr>{['STT','Tên tài sản','Loại tài sản','Đơn vị tính','Số lượng','Đơn giá','Thành tiền','Ghi chú',...(!readOnly?['Thao tác']:[])].map(label=><th key={label} scope="col">{label}</th>)}</tr></thead>
     <tbody>{rows.map((row,index)=>{
      const asset=handoverCatalog.find(item=>item.id===row.assetId);
      return <tr key={row.id} data-handover-row={row.id}>
       <td>{index+1}</td>
       <td>{readOnly?asset?.name||'':<select ref={index===rows.length-1?lastSelect:undefined} aria-label={`Tên tài sản dòng ${index+1}`} value={row.assetId} onChange={event=>{
        const selected=handoverCatalog.find(item=>item.id===event.target.value);
        change(row.id,{assetId:selected?.id||'',quantity:selected?1:'',notes:selected?.notes||''});
       }}><option value="">Chọn tài sản</option>{handoverCatalog.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}</select>}</td>
       <td>{asset?.type||''}</td><td>{asset?.unit||''}</td>
       <td>{readOnly?(asset?row.quantity:''):<input type="number" min="1" max="9999" step="1" disabled={!asset} aria-label={`Số lượng dòng ${index+1}`} value={row.quantity} onChange={event=>change(row.id,{quantity:event.target.value===''?'':Math.min(9999,Math.max(1,Math.floor(Number(event.target.value)||1)))})}/>}</td>
       <td className="handover-money">{asset?formatVnd(asset.price):''}</td>
       <td className="handover-money" data-row-amount>{asset&&row.quantity!==''?formatVnd(asset.price*Number(row.quantity)):''}</td>
       <td>{readOnly?row.notes:<input aria-label={`Ghi chú dòng ${index+1}`} value={row.notes} disabled={!asset} onChange={event=>change(row.id,{notes:event.target.value})}/>}</td>
       {!readOnly&&<td><button type="button" className="handover-remove" aria-label={`Xóa dòng ${index+1}`} onClick={()=>update(rows.filter(item=>item.id!==row.id))}><i className="fa-solid fa-trash-can" aria-hidden="true"/><span>Xóa</span></button></td>}
      </tr>;
     })}</tbody>
     <tfoot><tr><th scope="row" colSpan="4">Tổng cộng</th><td data-handover-total-quantity>{totals.quantity}</td><td/><td className="handover-money" data-handover-total-amount>{formatVnd(totals.amount)}</td><td colSpan={readOnly?1:2}/></tr></tfoot>
    </table>
    {!rows.length&&<p className="handover-empty">Chưa có tài sản bàn giao.{!readOnly&&' Nhấn “Thêm tài sản vào” để thêm dòng mới.'}</p>}
   </div>
  </section>
  <section className="handover-total-card" data-node-id="123:1117" aria-live="polite" aria-atomic="true">
   <h4>Tổng giá trị tài sản bàn giao</h4>
   <div><p>Tổng giá trị (bằng số): <strong data-handover-value>{formatVnd(totals.amount)} VNĐ</strong></p><p>Tổng giá trị (bằng chữ): <strong data-handover-words>{vndInWords(totals.amount)}</strong></p></div>
  </section>
 </>;
}
