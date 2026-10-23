/** Screen 65:404 — 6. Presentation adapted from Figma. */
import { h } from "../design-runtime.jsx";
import { useState } from "react";
const imgSvg = "/assets/72db3681-7e89-478f-8fce-b857198bf438.svg";
const imgSvgCubeHardwareIcon = "/assets/b3adf60a-98b3-4892-9e11-6dc79d0f9fe7.svg";
const imgSvgPaperAirplaneProceedIcon = "/assets/d88bd096-7f90-4458-8ca2-720397b2649d.svg";
const imgSvg3DCubeIcon = "/assets/a5030b71-bf9a-422c-b093-257c5c8c7bec.svg";
const imgSvgDocumentProtocolIcon = "/assets/bb0d3676-f8b5-4a60-ac39-e52c6beb0cb1.svg";
const imgSvg1 = "/assets/66a1e76a-6355-4897-88da-4730376d84ea.svg";

function AssetActions({code,mode,onToggle,onSaved,saved,lostReason}) {
  const [reason,setReason]=useState('');
  const [physical,setPhysical]=useState('');
  const [operation,setOperation]=useState('');
  const [accessories,setAccessories]=useState([]);
  const [note,setNote]=useState('');
  const [condition,setCondition]=useState('');
  const [photo,setPhoto]=useState('');
  const [error,setError]=useState('');
  const toggleAccessory=item=>setAccessories(current=>current.includes(item)?current.filter(value=>value!==item):[...current,item]);
  return <div className="recovery-asset-interaction">
    <div className="recovery-asset-buttons">
      {saved&&<span className="recovery-asset-saved">✓ Đã quét</span>}
      {lostReason&&<span className="recovery-asset-lost">Đã báo mất</span>}
      <button type="button" className="recovery-scan-button" aria-expanded={mode==='scan'} onClick={()=>{setError('');onToggle(mode==='scan'?null:'scan');}}>▦&nbsp; Quét QR</button>
      <button type="button" className="recovery-lost-button" aria-expanded={mode==='lost'} onClick={()=>{setError('');onToggle(mode==='lost'?null:'lost');}}>Báo mất</button>
    </div>
    {mode==='lost'&&<div className="recovery-asset-panel recovery-lost-panel">
      <label htmlFor={'lost-'+code}>Lý do mất <span>*</span></label>
      <div className="recovery-lost-fields"><input id={'lost-'+code} value={reason} onChange={event=>{setReason(event.target.value);setError('');}} placeholder="Nhập lý do mất tài sản..."/><button type="button" onClick={()=>{if(!reason.trim()){setError('Vui lòng nhập lý do mất.');return;}onSaved(code,{status:'lost',reason:reason.trim()});onToggle(null);}}>Xác nhận</button><button type="button" onClick={()=>onToggle(null)}>Hủy</button></div>
      {error&&<small role="alert">{error}</small>}
    </div>}
    {mode==='scan'&&<div className="recovery-asset-panel recovery-scan-panel">
      <div className="recovery-scan-grid"><label>Tình trạng vật lý<select value={physical} onChange={event=>setPhysical(event.target.value)}><option value="">— Chọn —</option><option>Mới</option><option>Tốt</option><option>Đã qua sử dụng</option><option>Hỏng nhẹ</option></select></label><label>Trạng thái hoạt động<select value={operation} onChange={event=>setOperation(event.target.value)}><option value="">— Chọn —</option><option>Hoạt động bình thường</option><option>Cần bảo trì</option><option>Không hoạt động</option></select></label></div>
      <div className="recovery-accessories"><strong>Phụ kiện đi kèm</strong><div>{['Sạc','Cáp','Chuột','Balo','Hộp'].map(item=><button type="button" key={item} aria-pressed={accessories.includes(item)} onClick={()=>toggleAccessory(item)}>{item}</button>)}</div><small>Nếu thiếu phụ kiện, vui lòng ghi chú bên dưới.</small></div>
      <label>Ghi chú phụ kiện (nếu thiếu)<input value={note} onChange={event=>setNote(event.target.value)} placeholder="VD: Thiếu cáp sạc"/></label>
      <label>Ghi chú tình trạng<input value={condition} onChange={event=>setCondition(event.target.value)} placeholder="VD: Vết xước ở góc trái mặt lưng"/></label>
      <label>Hình ảnh hiện trạng<span className="recovery-upload-control"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="3.5"/></svg>Tải ảnh lên</span><input className="recovery-photo-input" type="file" accept="image/*" onChange={event=>setPhoto(event.target.files?.[0]?.name||'')}/>{photo&&<small>{photo}</small>}</label>
      {error&&<small role="alert">{error}</small>}
      <button type="button" className="recovery-save-button" onClick={()=>{if(!physical||!operation){setError('Vui lòng chọn tình trạng vật lý và trạng thái hoạt động.');return;}onSaved(code,{status:'scan',physical,operation,accessories,note,condition,photo});onToggle(null);}}>Lưu tình trạng</button>
    </div>}
    {lostReason&&mode!=='lost'&&<p className="recovery-lost-summary"><strong>Lý do mất:</strong> {lostReason}</p>}
  </div>;
}

export default function Component6() {
  const [openAsset,setOpenAsset]=useState(null);
  const [completed,setCompleted]=useState({});
  const [lostReasons,setLostReasons]=useState({});
  const saveAsset=(code,details)=>{setCompleted(current=>({...current,[code]:details}));setLostReasons(current=>({...current,[code]:details.status==='lost'?details.reason:''}));};
  const remaining=2-Object.keys(completed).length;
  return (
    <div className="ba-aa95289e30" data-node-id="65:404" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="6">
      <div className="ba-2d83a6a8b2" data-node-id="65:405" data-name="MainContent">
        <div className="ba-929b211fbc" data-node-id="65:406" data-name="Breadcrumb & Back Link">
          <div className="ba-9eae8902b4" data-node-id="65:407" data-name="Link">
            <div className="ba-c51752dc8c" data-node-id="65:408" data-name="SVG">
              <img alt="" className="ba-8faf267d30" src={imgSvg} />
            </div>
            <div className="ba-905db53b01" data-node-id="65:410">
              <p className="ba-bf919b50f6">Danh sách biên bản</p>
            </div>
          </div>
        </div>
        <div className="ba-c76f840cc1" data-node-id="65:411" data-name="Document Header Info (Without Cancel button as per requirement)">
          <div className="ba-373cb678ef" data-node-id="65:412" data-name="Container">
            <div className="ba-39ca0321a1" data-node-id="65:413" data-name="Heading 2">
              <div className="ba-1f7112b652" data-node-id="65:414">
                <p className="ba-20c602949a">TH01/2026</p>
              </div>
            </div>
            <div className="ba-3b2a30c4a1" data-node-id="65:415" data-name="Background+Border">
              <div className="ba-3a30b990de" data-node-id="65:416">
                <p className="ba-bf919b50f6">Đang bàn giao</p>
              </div>
            </div>
          </div>
          <div className="ba-e22ed6b29d" data-node-id="65:417" data-name="Paragraph">
            <div className="ba-e51d88aaaf" data-node-id="65:418">
              <p className="ba-efcc9af6d1">{`Nguyễn Văn An `}</p>
            </div>
            <div className="ba-6f564517f9" data-node-id="65:419">
              <p className="ba-efcc9af6d1">•</p>
            </div>
            <div className="ba-e51d88aaaf" data-node-id="65:420">
              <p className="ba-efcc9af6d1">{` Phòng Kỹ thuật `}</p>
            </div>
            <div className="ba-6f564517f9" data-node-id="65:421">
              <p className="ba-efcc9af6d1">•</p>
            </div>
            <div className="ba-e51d88aaaf" data-node-id="65:422">
              <p className="ba-efcc9af6d1">{` nghỉ việc`}</p>
            </div>
          </div>
        </div>
        <div className="ba-9498c5dcbb" data-node-id="65:423" data-name="Section - Information Summary Card">
          <div className="ba-67366dcb7c" data-node-id="65:424" data-name="Container">
            <div className="ba-a75988e6c0">
              <div className="ba-0d5e8d9feb" data-node-id="65:425" data-name="Schedule Date">
                <div className="ba-153c0a1809" data-node-id="65:426" data-name="Container">
                  <div className="ba-618d4e5ed6" data-node-id="65:427">
                    <p className="ba-bf919b50f6">Lịch bàn giao</p>
                  </div>
                </div>
                <div className="ba-7d1d240cc8" data-node-id="65:428">
                  <p className="ba-efcc9af6d1">3095-07-08</p>
                </div>
              </div>
              <div className="ba-7ef18efa5b" data-node-id="65:429" data-name="Creator">
                <div className="ba-67366dcb7c" data-node-id="65:430" data-name="Container">
                  <div className="ba-4ed85d2730">
                    <div className="ba-618d4e5ed6" data-node-id="65:431">
                      <p className="ba-bf919b50f6">Người tạo</p>
                    </div>
                  </div>
                </div>
                <div className="ba-7d1d240cc8" data-node-id="65:432">
                  <p className="ba-efcc9af6d1">Phòng HCNS</p>
                </div>
              </div>
              <div className="ba-ca94c64339" data-node-id="65:433" data-name="Employee Email">
                <div className="ba-67366dcb7c" data-node-id="65:434" data-name="Container">
                  <div className="ba-4ed85d2730">
                    <div className="ba-618d4e5ed6" data-node-id="65:435">
                      <p className="ba-bf919b50f6">Email nhân viên</p>
                    </div>
                  </div>
                </div>
                <div className="ba-67366dcb7c" data-node-id="65:436" data-name="Container">
                  <div className="ba-09c6898323">
                    <div className="ba-bedf7d2902" data-node-id="65:437">
                      <p className="ba-efcc9af6d1">nguyenvanan@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-92aca936a6" data-node-id="65:438" data-name="Asset List Section">
          <div className="ba-c96fe10678" data-node-id="65:439" data-name="Container">
            <div className="ba-39ca0321a1" data-node-id="65:440" data-name="Heading 3">
              <div className="ba-b9fa027efa" data-node-id="65:441">
                <p className="ba-76aad9ca0a">Danh sách tài sản (2)</p>
              </div>
            </div>
            <div className="ba-56309cfd91" data-node-id="65:442" data-name="Background">
              <div className="ba-6d0607a31f" data-node-id="65:443">
                <p className="ba-bf919b50f6">{Object.keys(completed).length}/2 đã xử lý</p>
              </div>
            </div>
          </div>
          <div className="ba-1f6eb8bc67" data-node-id="65:444" data-name="Article - Asset Card 1">
            <div className="ba-67366dcb7c" data-node-id="65:445" data-name="Container">
              <div className="ba-34afd785b0">
                <div className="ba-9c6c6c92c0" data-node-id="65:446" data-name="Left: Icon & Details">
                  <div className="ba-17d697070d" data-node-id="65:447" data-name="Margin">
                    <div className="ba-aaf0068b30" data-node-id="65:448" data-name="Background+Border">
                      <div className="ba-eaa60f1c42" data-node-id="65:449" data-name="SVG - Cube / Hardware Icon">
                        <img alt="" className="ba-8faf267d30" src={imgSvgCubeHardwareIcon} />
                      </div>
                    </div>
                  </div>
                  <div className="ba-118dfa32fd" data-node-id="65:451" data-name="Container">
                    <div className="ba-6dc5f46fc4" data-node-id="65:452" data-name="Container">
                      <div className="ba-0d05332ee8" data-node-id="65:453">
                        <p className="ba-efcc9af6d1">BBBG_01</p>
                      </div>
                    </div>
                    <div className="ba-153c0a1809" data-node-id="65:454" data-name="Container">
                      <div className="ba-3e598eb42c" data-node-id="65:455">
                        <p className="ba-bf919b50f6">MacBook Pro 13inch · SN: C02XK1ABC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-599a3518a5" data-node-id="65:461" data-name="Card Meta Footer">
              <div className="ba-67fe0d315b">
                <div className="ba-d452ad70ec" data-node-id="65:462" data-name="Container">
                  <div className="ba-4ed85d2730">
                    <div className="ba-7bc6da7c40" data-node-id="65:463">
                      <p>
                        <span className="ba-bf919b50f6">{`Người dùng hiện tại: `}</span>
                        <span className="ba-cb955e2f2c">Nguyễn Văn An</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ba-d452ad70ec" data-node-id="65:464" data-name="Container">
                  <div className="ba-4ed85d2730">
                    <div className="ba-7bc6da7c40" data-node-id="65:465">
                      <p>
                        <span className="ba-bf919b50f6">{`Ngày bắt đầu: `}</span>
                        <span className="ba-cb955e2f2c">2025-03-15</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <AssetActions code="BBBG_01" mode={openAsset?.code==='BBBG_01'?openAsset.mode:null} onToggle={mode=>setOpenAsset(mode?{code:'BBBG_01',mode}:null)} onSaved={saveAsset} saved={completed.BBBG_01?.status==='scan'} lostReason={lostReasons.BBBG_01}/>
          </div>
          <div className="ba-1f6eb8bc67" data-node-id="65:466" data-name="Article - Asset Card 2">
            <div className="ba-67366dcb7c" data-node-id="65:467" data-name="Container">
              <div className="ba-34afd785b0">
                <div className="ba-9c6c6c92c0" data-node-id="65:468" data-name="Left: Icon & Details">
                  <div className="ba-17d697070d" data-node-id="65:469" data-name="Margin">
                    <div className="ba-aaf0068b30" data-node-id="65:470" data-name="Background+Border">
                      <div className="ba-eaa60f1c42" data-node-id="65:471" data-name="SVG - Cube / Hardware Icon">
                        <img alt="" className="ba-8faf267d30" src={imgSvgCubeHardwareIcon} />
                      </div>
                    </div>
                  </div>
                  <div className="ba-118dfa32fd" data-node-id="65:473" data-name="Container">
                    <div className="ba-6dc5f46fc4" data-node-id="65:474" data-name="Container">
                      <div className="ba-0d05332ee8" data-node-id="65:475">
                        <p className="ba-efcc9af6d1">BBBG_02</p>
                      </div>
                    </div>
                    <div className="ba-153c0a1809" data-node-id="65:476" data-name="Container">
                      <div className="ba-3e598eb42c" data-node-id="65:477">
                        <p className="ba-bf919b50f6">Màn hình Dell U2723QE · SN: CN0XK2DEF</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-599a3518a5" data-node-id="65:483" data-name="Card Meta Footer">
              <div className="ba-67fe0d315b">
                <div className="ba-d452ad70ec" data-node-id="65:484" data-name="Container">
                  <div className="ba-4ed85d2730">
                    <div className="ba-7bc6da7c40" data-node-id="65:485">
                      <p>
                        <span className="ba-bf919b50f6">{`Người dùng hiện tại: `}</span>
                        <span className="ba-cb955e2f2c">Nguyễn Văn An</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ba-d452ad70ec" data-node-id="65:486" data-name="Container">
                  <div className="ba-4ed85d2730">
                    <div className="ba-7bc6da7c40" data-node-id="65:487">
                      <p>
                        <span className="ba-bf919b50f6">{`Ngày bắt đầu: `}</span>
                        <span className="ba-cb955e2f2c">2025-03-15</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <AssetActions code="BBBG_02" mode={openAsset?.code==='BBBG_02'?openAsset.mode:null} onToggle={mode=>setOpenAsset(mode?{code:'BBBG_02',mode}:null)} onSaved={saveAsset} saved={completed.BBBG_02?.status==='scan'} lostReason={lostReasons.BBBG_02}/>
          </div>
        </div>
        <div className="ba-e0b38c2fb8" data-node-id="65:488" data-name="Bottom Actions Container">
          <div className="ba-9520559980" data-node-id="65:529" data-name="Button">
            <div className="ba-cc2c7a9a1f" data-node-id="65:530"><p className="ba-efcc9af6d1">Hủy</p></div>
          </div>
          <button type="button" className="ba-f4e79b6354 recovery-complete-button" data-node-id="65:489" disabled={remaining>0} onClick={()=>{sessionStorage.setItem('ba29-recovery-complete',JSON.stringify({completedAt:new Date().toISOString(),assets:completed}));window.location.hash='/thu-hoi/hoan-tat';}}>
            <div className="ba-5c9ca2c0ec">
              <div className="ba-c51752dc8c" data-node-id="65:490" data-name="SVG - Paper Airplane / Proceed Icon">
                <img alt="" className="ba-8faf267d30" src={imgSvgPaperAirplaneProceedIcon} />
              </div>
              <div className="ba-9021357745" data-node-id="65:492" data-name="Container">
                <div className="ba-9bd3d6efa7" data-node-id="65:493">
                  <p className="ba-bf919b50f6">{remaining>0?`Cần quét đủ ${remaining} tài sản nữa`:'Hoàn tất'}</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="ba-c4e5b29669" data-node-id="65:500" data-name="Aside - LeftSidebar">
        <div className="ba-67366dcb7c" data-node-id="65:501" data-name="Top Brand & Single Navigation Menu">
          <div className="ba-766eacfa88">
            <div className="ba-47aacf6d1d" data-node-id="65:502" data-name="Brand Logo & Header">
              <div className="ba-e097534217" data-node-id="65:503" data-name="Background+Shadow">
                <div className="ba-eaa60f1c42" data-node-id="65:504" data-name="SVG - 3D Cube Icon">
                  <img alt="" className="ba-8faf267d30" src={imgSvg3DCubeIcon} />
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="65:506" data-name="Container">
                <div className="ba-153c0a1809" data-node-id="65:507" data-name="Heading 1">
                  <div className="ba-21e8f21922" data-node-id="65:508">
                    <p className="ba-080b7c55f9">Thu hồi tài sản</p>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="65:509" data-name="Container">
                  <div className="ba-6d0607a31f" data-node-id="65:510">
                    <p className="ba-bf919b50f6">Quản lý nội bộ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-7d6283319c" data-node-id="65:511" data-name="Nav - Menu chính → Link">
              <div className="ba-b2a182ecf4" data-node-id="65:512" data-name="SVG - Document / Protocol Icon">
                <img alt="" className="ba-8faf267d30" src={imgSvgDocumentProtocolIcon} />
              </div>
              <div className="ba-d452ad70ec" data-node-id="65:514" data-name="Container">
                <div className="ba-4ed85d2730">
                  <div className="ba-b82204c1d1" data-node-id="65:515">
                    <p className="ba-efcc9af6d1">Thu hồi tài sản</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-ebce6fa6d8" data-node-id="65:516" data-name="Sidebar Bottom User Profile">
          <div className="ba-a40cc42ad7">
            <div className="ba-67366dcb7c" data-node-id="65:517" data-name="Container">
              <div className="ba-a5bb95be96">
                <div className="ba-db74867096" data-node-id="65:518" data-name="Background+Shadow">
                  <div className="ba-5d1fe42e00" data-node-id="65:519">
                    <p className="ba-bf919b50f6">HC</p>
                  </div>
                </div>
                <div className="ba-5bf551fee8" data-node-id="65:520" data-name="Container">
                  <div className="ba-c475d979ca" data-node-id="65:521" data-name="Container">
                    <div className="ba-d0c317a98b" data-node-id="65:522">
                      <p className="ba-bf919b50f6">Phòng HCNS</p>
                    </div>
                  </div>
                  <div className="ba-c475d979ca" data-node-id="65:523" data-name="Container">
                    <div className="ba-8b252c5332" data-node-id="65:524">
                      <p className="ba-e9e8a40ea4">Quản trị viên</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-9520559980" data-node-id="66:863" data-name="Button">
        <div className="ba-cc2c7a9a1f" data-node-id="66:864">
          <p className="ba-efcc9af6d1">Hủy</p>
        </div>
      </div>
      <div className="ba-b427ba331f" data-node-id="66:843" data-name="Top Right Action Buttons">
        <div className="ba-5662a8e02a" data-node-id="66:844" data-name="Scan QR Button">
          <div className="ba-c51752dc8c" data-node-id="66:845" data-name="SVG">
            <img alt="" className="ba-8faf267d30" src={imgSvg1} />
          </div>
          <div className="ba-4a0e1aaebd" data-node-id="66:848" data-name="Container">
            <div className="ba-2bc6a04cec" data-node-id="66:849">
              <p className="ba-0543b847c7">Quét QR</p>
            </div>
          </div>
        </div>
        <div className="ba-98a44c62a5" data-node-id="66:850" data-name="Report Lost Button">
          <div className="ba-09edf4d824" data-node-id="66:851">
            <p className="ba-0543b847c7">Báo mất</p>
          </div>
        </div>
      </div>
      <div className="ba-d8a92b9bd7" data-node-id="66:853" data-name="Top Right Action Buttons">
        <div className="ba-5662a8e02a" data-node-id="66:854" data-name="Scan QR Button">
          <div className="ba-c51752dc8c" data-node-id="66:855" data-name="SVG">
            <img alt="" className="ba-8faf267d30" src={imgSvg1} />
          </div>
          <div className="ba-4a0e1aaebd" data-node-id="66:858" data-name="Container">
            <div className="ba-2bc6a04cec" data-node-id="66:859">
              <p className="ba-0543b847c7">Quét QR</p>
            </div>
          </div>
        </div>
        <div className="ba-98a44c62a5" data-node-id="66:860" data-name="Report Lost Button">
          <div className="ba-09edf4d824" data-node-id="66:861">
            <p className="ba-0543b847c7">Báo mất</p>
          </div>
        </div>
      </div>
    </div>
  );
}
