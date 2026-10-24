/** Screen 87:707 — Tạo phiếu yêu cầu cấp phát - AssetFlow. Presentation adapted from Figma. */
import React,{useContext} from "react";
import { h, Fragment, InteractionContext } from "../design-runtime.jsx";
const imgSvg = "/assets/8568e0d3-4069-4cb8-98f6-838fe5258097.svg";
const imgSvg1 = "/assets/17873e3b-4bc6-45c3-b83a-56b7bf644c8d.svg";
const imgSvg2 = "/assets/7f2919b8-84d1-4cc9-9826-94e4d708d7f9.svg";
const imgSvg3 = "/assets/e4ac0c50-8f7c-44e9-90fd-c126c6749cd9.svg";
const imgSvg4 = "/assets/106c0e68-92d3-478b-89f1-f68aabdab4d7.svg";
const imgImage = "/assets/6e2246f1-c56a-469b-869f-ec2a7356ef96.svg";
const imgImage1 = "/assets/8b5edc3a-aa0d-4e12-b71d-253bdfa13f32.svg";
const imgSvg5 = "/assets/4b446aec-d477-4ed0-8fc0-c0b31995c456.svg";
const imgSvg6 = "/assets/36ee70c3-9ebd-467e-bc00-63dc827da549.svg";
const imgSvg7 = "/assets/818d24d7-42a3-46ca-ae82-6b8a0855b2cc.svg";
const imgSvg8 = "/assets/1fb358c9-6684-49fe-8b3c-b17b5a3f7571.svg";
const imgSvg9 = "/assets/4ebc11e0-a633-4d98-8aed-6542c279a023.svg";
const imgSvg10 = "/assets/871cd2e8-04f7-4d2e-9c0c-9b4d3db38536.svg";
const imgSvg11 = "/assets/d886804a-4ede-4dba-bd01-c23c5f20d809.svg";
const imgSvg12 = "/assets/c8461130-e1f4-4e6d-af4b-306e6c91c62d.svg";
const imgSvg13 = "/assets/efd4b098-52bd-4358-b513-06c1f70bd1da.svg";
const imgSvg14 = "/assets/1f4389f5-5142-449e-9c1d-6bc06fee73aa.svg";
const imgSvg15 = "/assets/07bb7a01-d6f2-4c0c-9af3-593a665e70c4.svg";
const imgSvg16 = "/assets/5707ecb6-f7f0-4ef7-8021-b45189a76faf.svg";
const imgSvg17 = "/assets/ea389c25-c92a-421b-b5d4-6356762fceba.svg";
const imgSvg18 = "/assets/41258f2d-f935-4ca9-8e2f-d17a08da46ce.svg";

function QuotaAssetSelection(){
 const assets=[['Laptop','Core i5, RAM 16GB, SSD 512GB','1 chiếc','Kèm balo, chuột kit'],['Màn hình rời 24 inch','Full HD, IPS, 75Hz','1 chiếc','Theo nhu cầu vị trí'],['Điện thoại bàn','Yealink SIP-T31P kèm nguồn','1 chiếc','Cấp số nội bộ khi bàn giao']];
 return <section className="allocation-quota-panel" aria-label="Tài sản theo định mức">
  <label className="allocation-quota-select">Chọn gói định mức áp dụng *<select defaultValue="sales"><option value="sales">Định mức Tiêu chuẩn - Nhân viên kinh doanh (Sales Executive) - Áp dụng từ 01/2026</option></select></label>
  <p>Phòng ban áp dụng: Phòng Kinh doanh (KD) · Cập nhật lần cuối: 15/01/2026</p>
  <div className="allocation-quota-table" role="table" aria-label="Danh sách tài sản định mức"><div className="allocation-quota-row allocation-quota-head" role="row"><span>Loại tài sản *</span><span>Mô tả</span><span>Số lượng *</span><span>Ghi chú</span><span/></div>{assets.map(([name,description,quantity,note])=><div className="allocation-quota-row" role="row" key={name}><strong>{name}</strong><span>{description}</span><b>{quantity}</b><span>{note}</span><i aria-label="Được khóa theo định mức">♧</i></div>)}</div>
  <small>Các tài sản trong định mức đã được khóa số lượng chuẩn theo chính sách.</small>
 </section>;
}

function AssetRequestRows(){
 const context=useContext(InteractionContext),allocationAssets=context.allocationAssets??[{id:1,type:'',description:'',quantity:0,note:''}],updateAllocationAsset=context.updateAllocationAsset??(()=>{}),removeAllocationAsset=context.removeAllocationAsset??(()=>{});
 return <div className="allocation-asset-table" aria-label="Danh sách tài sản cần cấp">
  <div className="allocation-asset-header"><span>Loại tài sản *</span><span>Mô tả</span><span>Số lượng *</span><span>Ghi chú</span><span/></div>
  {allocationAssets.map((asset,index)=><div className="allocation-asset-row" key={asset.id} data-allocation-asset-row={index+1}>
   <select aria-label={'Loại tài sản dòng '+(index+1)} value={asset.type} onChange={event=>updateAllocationAsset(asset.id,{type:event.target.value})}><option value="">Chọn loại tài sản</option><option>Thiết bị công nghệ thông tin</option><option>Thiết bị văn phòng</option><option>Máy tính xách tay</option><option>Màn hình</option></select>
   <input aria-label={'Mô tả dòng '+(index+1)} value={asset.description} onChange={event=>updateAllocationAsset(asset.id,{description:event.target.value})} placeholder="Nhập mô tả"/>
   <div className="allocation-asset-quantity"><button type="button" onClick={()=>updateAllocationAsset(asset.id,{quantity:Math.max(0,asset.quantity-1)})} aria-label={'Giảm số lượng dòng '+(index+1)}>−</button><output>{asset.quantity}</output><button type="button" onClick={()=>updateAllocationAsset(asset.id,{quantity:asset.quantity+1})} aria-label={'Tăng số lượng dòng '+(index+1)}>+</button></div>
   <input aria-label={'Ghi chú dòng '+(index+1)} value={asset.note} onChange={event=>updateAllocationAsset(asset.id,{note:event.target.value})} placeholder="Nhập ghi chú"/>
   <button type="button" className="allocation-asset-remove" aria-label={'Xóa dòng '+(index+1)} disabled={allocationAssets.length===1} onClick={()=>removeAllocationAsset(asset.id)}>♧</button>
  </div>)}
 </div>;
}

export default function ToPhiuYeuCuCpPhatAssetFlow() {
  const {allocationAssetMode,allocationRecordMode=false}=useContext(InteractionContext);
  return (
    <div className="ba-511f990318" data-node-id="87:707" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Tạo phiếu yêu cầu cấp phát - AssetFlow">
      <div className="ba-24b1752d62" data-node-id="87:708" data-name="MainContent">
        <div className="ba-2476842f9d" data-node-id="87:709" data-name="Footer - Bottom Fixed Action Bar">
          <div className="ba-c3abe31a32" data-node-id="87:710" data-name="Footer - Bottom Fixed Action Bar:shadow" />
          <div className="ba-d452ad70ec" data-node-id="87:711" data-name="Container">
            <div className="ba-4ed85d2730">
              <div className="ba-2c821a81a6" data-node-id="87:712">
                <p className="ba-bf919b50f6">Vui lòng kiểm tra thông tin trước khi gửi phiếu.</p>
              </div>
            </div>
          </div>
          <div className="ba-d452ad70ec" data-node-id="87:713" data-name="Container">
            <div className="ba-8572055d47">
              <div className="ba-d281dd3e68" data-node-id="87:714" data-name="Button - Nút Lưu nháp">
                <div className="ba-0a72fb634f" data-node-id="87:715">
                  <p className="ba-bf919b50f6">Lưu nháp</p>
                </div>
              </div>
              <div className="ba-58df6e9d34" data-node-id="87:716" data-name="Button - Nút Gửi phiếu">
                <div className="ba-1ea7c61f22" data-node-id="87:717" data-name="SVG:css-transform">
                  <div className="ba-f617430308" data-node-id="87:718">
                    <div className="ba-e986ba6fb8">
                      <div className="ba-f14442793f" data-name="SVG">
                        <img alt="" className="ba-8faf267d30" src={imgSvg} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-d928a3799f" data-node-id="87:720">
                  <p className="ba-bf919b50f6">Gửi phiếu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-4fc63f8a28" data-node-id="87:721" data-name="Header - TopBar">
          <div className="ba-d452ad70ec" data-node-id="87:722" data-name="Nav - Breadcrumb">
            <div className="ba-d85f0a0f5e">
              <div className="ba-39ca0321a1" data-node-id="87:723" data-name="Link - Trang chủ">
                <div className="ba-c51752dc8c" data-node-id="87:724" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg1} />
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="87:726" data-name="Container">
                <div className="ba-3babd7367b" data-node-id="87:727">
                  <p className="ba-bf919b50f6">/</p>
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="87:728" data-name="Link">
                <div className="ba-61d1c9ad5e" data-node-id="87:729">
                  <p className="ba-bf919b50f6">Cấp phát tài sản</p>
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="87:730" data-name="Container">
                <div className="ba-3babd7367b" data-node-id="87:731">
                  <p className="ba-bf919b50f6">/</p>
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="87:732" data-name="Container">
                <div className="ba-34aae23746" data-node-id="87:733">
                  <p className="ba-bf919b50f6">Tạo phiếu yêu cầu</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-d452ad70ec" data-node-id="87:734" data-name="Right Actions (Notification + User Avatar)">
            <div className="ba-244c842be0">
              <div className="ba-62f8ff98c9" data-node-id="87:735" data-name="Button - Thông báo">
                <div className="ba-b2a182ecf4" data-node-id="87:736" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg2} />
                </div>
                <div className="ba-87b4cbb850" data-node-id="87:738" data-name="Background+Border" />
              </div>
              <div className="ba-b6eea00f02" data-node-id="87:739" data-name="Background">
                <div className="ba-4923c67858" data-node-id="87:740" data-name="Overlay+Shadow" />
                <div className="ba-c6dfe7cf2d" data-node-id="87:741">
                  <p className="ba-bf919b50f6">NA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-eb1d627e8c" data-node-id="87:742" data-name="Form Container">
          <div className="ba-20ebe81d3e" data-node-id="87:743" data-name="Back Link & Page Title Header">
            <div className="ba-9eae8902b4" data-node-id="87:744" data-name="Link">
              <div className="ba-5cca20e57d" data-node-id="87:745" data-name="SVG">
                <img alt="" className="ba-8faf267d30" src={imgSvg3} />
              </div>
              <div className="ba-e7216dfdf3" data-node-id="87:747">
                <p className="ba-bf919b50f6">Quay lại danh sách</p>
              </div>
            </div>
            <div className="ba-e88575f9f9" data-node-id="87:748" data-name="Container">
              <div className="ba-ab7becbfcb" data-node-id="87:749" data-name="Container">
                <div className="ba-153c0a1809" data-node-id="87:750" data-name="Heading 1">
                  <div className="ba-53e5a58ea1" data-node-id="87:751">
                    <p className="ba-a0118ea47e">{allocationRecordMode?'Chi tiết phiếu yêu cầu cấp phát':'Tạo phiếu yêu cầu cấp phát'}</p>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="87:752" data-name="Container">
                  <div className="ba-82d809da87" data-node-id="87:753">
                    <p className="ba-bf919b50f6">Điền thông tin để gửi yêu cầu cấp phát tài sản.</p>
                  </div>
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="87:754" data-name="Container">
                <div className="ba-f293a52e65" data-node-id="87:755">
                  <p className="ba-bf919b50f6">* Thông tin bắt buộc</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-373ad2abb2" data-node-id="87:756" data-name="Main Form Sheet">
            <div className="ba-67366dcb7c" data-node-id="87:757" data-name="Section Thông tin người lập">
              <div className="ba-0a871adaed">
                <div className="ba-c96fe10678" data-node-id="87:758" data-name="Container">
                  <div className="ba-39ca0321a1" data-node-id="87:759" data-name="Heading 2">
                    <div className="ba-ffa16ea7e2" data-node-id="87:760">
                      <p className="ba-efcc9af6d1">Thông tin người lập</p>
                    </div>
                  </div>
                  <div className="ba-860c2f1554" data-node-id="87:761" data-name="Container">
                    <div className="ba-5cca20e57d" data-node-id="87:762" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg4} />
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="87:764" data-name="Container">
                      <div className="ba-879c176ac4" data-node-id="87:765">
                        <p className="ba-bf919b50f6">Tự động điền • Chỉ đọc</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-1e8748ed88" data-node-id="87:766" data-name="Container">
                  <div className="ba-8ff15c1e81" data-node-id="87:767" data-name="Container">
                    <div className="ba-153c0a1809" data-node-id="87:768" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:769">
                        <p className="ba-bf919b50f6">Họ tên</p>
                      </div>
                    </div>
                    <div className="ba-d7a39caa9d" data-node-id="87:770" data-name="Input" data-field-hints="readonly ">
                      <div className="ba-4a9b73a3b7" data-node-id="87:771" data-name="Container">
                        <div className="ba-5cb97d0813">
                          <div className="ba-461cf74f35" data-node-id="87:772">
                            <p className="ba-bf919b50f6">Nguyễn Minh Anh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-bde75389ad" data-node-id="87:773" data-name="Container">
                    <div className="ba-153c0a1809" data-node-id="87:774" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:775">
                        <p className="ba-bf919b50f6">Mã nhân viên</p>
                      </div>
                    </div>
                    <div className="ba-d7a39caa9d" data-node-id="87:776" data-name="Input" data-field-hints="readonly ">
                      <div className="ba-4a9b73a3b7" data-node-id="87:777" data-name="Container">
                        <div className="ba-5cb97d0813">
                          <div className="ba-461cf74f35" data-node-id="87:778">
                            <p className="ba-bf919b50f6">NV-0025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-4d8fcf720f" data-node-id="87:779" data-name="Container">
                    <div className="ba-153c0a1809" data-node-id="87:780" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:781">
                        <p className="ba-bf919b50f6">Phòng ban</p>
                      </div>
                    </div>
                    <div className="ba-d7a39caa9d" data-node-id="87:782" data-name="Input" data-field-hints="readonly ">
                      <div className="ba-4a9b73a3b7" data-node-id="87:783" data-name="Container">
                        <div className="ba-5cb97d0813">
                          <div className="ba-461cf74f35" data-node-id="87:784">
                            <p className="ba-bf919b50f6">Nhân sự</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-0110221e77" data-node-id="87:785" data-name="Container">
                    <div className="ba-153c0a1809" data-node-id="87:786" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:787">
                        <p className="ba-bf919b50f6">Chức danh</p>
                      </div>
                    </div>
                    <div className="ba-d7a39caa9d" data-node-id="87:788" data-name="Input" data-field-hints="readonly ">
                      <div className="ba-4a9b73a3b7" data-node-id="87:789" data-name="Container">
                        <div className="ba-5cb97d0813">
                          <div className="ba-461cf74f35" data-node-id="87:790">
                            <p className="ba-bf919b50f6">Chuyên viên nhân sự</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-829a653b03" data-node-id="87:791" data-name="Container">
                    <div className="ba-153c0a1809" data-node-id="87:792" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:793">
                        <p className="ba-bf919b50f6">Mã phiếu</p>
                      </div>
                    </div>
                    <div className="ba-d7a39caa9d" data-node-id="87:794" data-name="Input" data-field-hints="readonly ">
                      <div className="ba-4a9b73a3b7" data-node-id="87:795" data-name="Container">
                        <div className="ba-5cb97d0813">
                          <div className="ba-461cf74f35" data-node-id="87:796">
                            <p className="ba-bf919b50f6">CP-2026-30</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e33a2578ae" data-node-id="87:797" data-name="Container">
                    <div className="ba-153c0a1809" data-node-id="87:798" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:799">
                        <p className="ba-bf919b50f6">Ngày lập</p>
                      </div>
                    </div>
                    <div className="ba-d7a39caa9d" data-node-id="87:800" data-name="Input" data-field-hints="readonly ">
                      <div className="ba-4a9b73a3b7" data-node-id="87:801" data-name="Container">
                        <div className="ba-5cb97d0813">
                          <div className="ba-461cf74f35" data-node-id="87:802">
                            <p className="ba-bf919b50f6">20/10/2026</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-67366dcb7c" data-node-id="87:803" data-name="Section Loại yêu cầu">
              <div className="ba-03fcfb3097">
                <div className="ba-153c0a1809" data-node-id="87:804" data-name="Label">
                  <div className="ba-8008bf8e07" data-node-id="87:805">
                    <p>
                      <span className="ba-efcc9af6d1">{`Loại yêu cầu `}</span>
                      <span className="ba-90a353ab30">*</span>
                    </p>
                  </div>
                </div>
                <div className="ba-1a9dbaca21" data-node-id="87:806" data-name="Container">
                  <div className="ba-c388486bdc" data-node-id="87:807" data-name="Label - Cho cá nhân card">
                    <div className="ba-e425417b05" data-node-id="87:808" data-name="Input" data-field-hints="check " />
                    <div className="ba-d452ad70ec" data-node-id="87:809" data-name="Container">
                      <div className="ba-4ed85d2730">
                        <div className="ba-153c0a1809" data-node-id="87:810" data-name="Container">
                          <div className="ba-0be8b3d1fa" data-node-id="87:811">
                            <p className="ba-bf919b50f6">Cho cá nhân</p>
                          </div>
                        </div>
                        <div className="ba-cca7920792" data-node-id="87:812" data-name="Margin">
                          <div className="ba-153c0a1809" data-node-id="87:813" data-name="Container">
                            <div className="ba-12a4c64258" data-node-id="87:814">
                              <p className="ba-e9e8a40ea4">Yêu cầu tài sản cho bản thân</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-ff6dc76777" data-node-id="87:815" data-name="Label - Cho nhân viên mới card">
                    <div className="ba-6f52b08d85" data-node-id="87:816" data-name="Input" data-field-hints="check ">
                      <div className="ba-efeb874d39">
                        <div className="ba-c51752dc8c" data-node-id="87:817" data-name="image">
                          <img alt="" className="ba-8faf267d30" src={imgImage} />
                        </div>
                      </div>
                    </div>
                    <div className="ba-d452ad70ec" data-node-id="87:819" data-name="Container">
                      <div className="ba-4ed85d2730">
                        <div className="ba-153c0a1809" data-node-id="87:820" data-name="Container">
                          <div className="ba-0be8b3d1fa" data-node-id="87:821">
                            <p className="ba-bf919b50f6">Cho nhân viên mới</p>
                          </div>
                        </div>
                        <div className="ba-cca7920792" data-node-id="87:822" data-name="Margin">
                          <div className="ba-153c0a1809" data-node-id="87:823" data-name="Container">
                            <div className="ba-12a4c64258" data-node-id="87:824">
                              <p className="ba-e9e8a40ea4">Đề nghị cấp phát cho nhân sự mới</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-67366dcb7c" data-node-id="87:825" data-name="Section Người nhận tài sản">
              <div className="ba-0a871adaed">
                <div className="ba-153c0a1809" data-node-id="87:826" data-name="Heading 2">
                  <div className="ba-8008bf8e07" data-node-id="87:827">
                    <p className="ba-efcc9af6d1">Người nhận tài sản</p>
                  </div>
                </div>
                <div className="ba-583328a1ad" data-node-id="87:828" data-name="Container">
                  <div className="ba-8ff15c1e81" data-node-id="87:829" data-name="Container">
                    <div className="ba-153c0a1809" data-node-id="87:830" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:831">
                        <p>
                          <span className="ba-bf919b50f6">{`Họ tên `}</span>
                          <span className="ba-153aa7557b">*</span>
                        </p>
                      </div>
                    </div>
                    <div className="ba-3db06faa5f" data-node-id="87:832" data-name="Input" data-field-hints="">
                      <div className="ba-4a9b73a3b7" data-node-id="87:833" data-name="Container">
                        <div className="ba-5cb97d0813">
                          <div className="ba-8b4a909b44" data-node-id="87:834">
                            <p className="ba-bf919b50f6">Trần Hoàng Nam</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-bde75389ad" data-node-id="87:835" data-name="Container">
                    <div className="ba-153c0a1809" data-node-id="87:836" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:837">
                        <p className="ba-bf919b50f6">Mã nhân viên</p>
                      </div>
                    </div>
                    <div className="ba-3db06faa5f" data-node-id="87:838" data-name="Input" data-field-hints="">
                      <div className="ba-4a9b73a3b7" data-node-id="87:839" data-name="Container">
                        <div className="ba-5cb97d0813">
                          <div className="ba-8b4a909b44" data-node-id="87:840">
                            <p className="ba-bf919b50f6">NV-0089</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-505ba29375" data-node-id="87:841" data-name="Container">
                    <div className="ba-153c0a1809" data-node-id="87:842" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:843">
                        <p>
                          <span className="ba-bf919b50f6">{`Chức danh `}</span>
                          <span className="ba-153aa7557b">*</span>
                        </p>
                      </div>
                    </div>
                    <div className="ba-3db06faa5f" data-node-id="87:844" data-name="Input" data-field-hints="">
                      <div className="ba-4a9b73a3b7" data-node-id="87:845" data-name="Container">
                        <div className="ba-5cb97d0813">
                          <div className="ba-8b4a909b44" data-node-id="87:846">
                            <p className="ba-bf919b50f6">Nhân viên kinh doanh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-4149f908d9" data-node-id="87:847" data-name="Container">
                    <div className="ba-153c0a1809" data-node-id="87:848" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:849">
                        <p>
                          <span className="ba-bf919b50f6">{`Phòng ban `}</span>
                          <span className="ba-153aa7557b">*</span>
                        </p>
                      </div>
                    </div>
                    <div className="ba-cca7920792" data-node-id="87:850" data-name="Container">
                      <div className="ba-83fa62410b" data-node-id="87:851" data-name="Options" data-field-hints="">
                        <div className="ba-d29f1b8582" data-node-id="87:852" data-name="image clip">
                          <div className="ba-26eb3edefd">
                            <div className="ba-58d29b27c0" data-node-id="87:853" data-name="image">
                              <img alt="" className="ba-8faf267d30" src={imgImage1} />
                            </div>
                          </div>
                        </div>
                        <div className="ba-4a9b73a3b7" data-node-id="87:855" data-name="Container">
                          <div className="ba-4ed85d2730">
                            <div className="ba-ca45602aef" data-node-id="87:856">
                              <p className="ba-bf919b50f6">Chọn phòng ban</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-8289025fd5" data-node-id="87:857" data-name="Container">
                        <div className="ba-c51752dc8c" data-node-id="87:858" data-name="SVG">
                          <img alt="" className="ba-8faf267d30" src={imgSvg5} />
                        </div>
                      </div>
                    </div>
                    <div className="ba-153c0a1809" data-node-id="87:860" data-name="Container">
                      <div className="ba-20f849a890" data-node-id="87:861">
                        <p className="ba-e9e8a40ea4">Vui lòng chọn phòng ban</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-b65588a77c" data-node-id="87:862" data-name="Container">
                    <div className="ba-153c0a1809" data-node-id="87:863" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:864">
                        <p>
                          <span className="ba-bf919b50f6">{`Ngày bắt đầu làm việc `}</span>
                          <span className="ba-153aa7557b">*</span>
                        </p>
                      </div>
                    </div>
                    <div className="ba-153c0a1809" data-node-id="87:865" data-name="Container">
                      <div className="ba-213d38aa04" data-node-id="87:866" data-name="Input" data-field-hints="">
                        <div className="ba-4a9b73a3b7" data-node-id="87:867" data-name="Container">
                          <div className="ba-5cb97d0813">
                            <div className="ba-8b4a909b44" data-node-id="87:868">
                              <p className="ba-bf919b50f6">25/10/2026</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-934cc90fa5" data-node-id="87:869" data-name="Container">
                        <div className="ba-c51752dc8c" data-node-id="87:870" data-name="SVG">
                          <img alt="" className="ba-8faf267d30" src={imgSvg6} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-67366dcb7c" data-node-id="87:872" data-name="Section Tài sản cần cấp">
              <div className="ba-03fcfb3097">
                <div className="ba-c96fe10678" data-node-id="87:873" data-name="Container">
                  <div className="ba-39ca0321a1" data-node-id="87:874" data-name="Heading 2">
                    <div className="ba-ffa16ea7e2" data-node-id="87:875">
                      <p className="ba-efcc9af6d1">Tài sản cần cấp</p>
                    </div>
                  </div>
                  <div className="ba-572a575f01" data-node-id="87:876" data-name="Background">
                    <div className="ba-bfe213c0f2" data-node-id="87:877">
                      <p className="ba-bf919b50f6">2 tài sản</p>
                    </div>
                  </div>
                </div>
                <div className="ba-1a9dbaca21" data-node-id="87:878" data-name="Container">
                  <div className="ba-f5b4ed7c56" data-node-id="87:879" data-name="Label">
                    <div className="ba-e425417b05" data-node-id="87:880" data-name="Input" data-field-hints="check " />
                    <div className="ba-d452ad70ec" data-node-id="87:881" data-name="Container">
                      <div className="ba-4ed85d2730">
                        <div className="ba-153c0a1809" data-node-id="87:882" data-name="Container">
                          <div className="ba-0be8b3d1fa" data-node-id="87:883">
                            <p className="ba-bf919b50f6">Chọn theo định mức</p>
                          </div>
                        </div>
                        <div className="ba-cca7920792" data-node-id="87:884" data-name="Margin">
                          <div className="ba-153c0a1809" data-node-id="87:885" data-name="Container">
                            <div className="ba-12a4c64258" data-node-id="87:886">
                              <p className="ba-e9e8a40ea4">Cấp phát theo tiêu chuẩn/định mức vị trí phòng ban</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-91cb739ae3" data-node-id="87:887" data-name="Label">
                    <div className="ba-6f52b08d85" data-node-id="87:888" data-name="Input" data-field-hints="check ">
                      <div className="ba-efeb874d39">
                        <div className="ba-c51752dc8c" data-node-id="87:889" data-name="image">
                          <img alt="" className="ba-8faf267d30" src={imgImage} />
                        </div>
                      </div>
                    </div>
                    <div className="ba-d452ad70ec" data-node-id="87:891" data-name="Container">
                      <div className="ba-4ed85d2730">
                        <div className="ba-153c0a1809" data-node-id="87:892" data-name="Container">
                          <div className="ba-0be8b3d1fa" data-node-id="87:893">
                            <p className="ba-bf919b50f6">Yêu cầu mới</p>
                          </div>
                        </div>
                        <div className="ba-cca7920792" data-node-id="87:894" data-name="Margin">
                          <div className="ba-153c0a1809" data-node-id="87:895" data-name="Container">
                            <div className="ba-12a4c64258" data-node-id="87:896">
                              <p className="ba-e9e8a40ea4">Tùy chọn danh sách tài sản phát sinh theo nhu cầu</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {allocationAssetMode==='quota'&&<QuotaAssetSelection/>}
                {allocationAssetMode!=='quota'&&<AssetRequestRows/>}
                <div className="ba-2648fa4a12" data-node-id="87:897" data-name="Table Container" style={{display:'none'}}>
                  <div className="ba-3a49d0b1bc" data-node-id="87:898" data-name="Background+HorizontalBorder">
                    <div className="ba-c311cb44ba">
                      <div className="ba-7af780aba1" data-node-id="87:899" data-name="Container">
                        <div className="ba-4ed85d2730">
                          <div className="ba-f3093b65ac" data-node-id="87:900">
                            <p>
                              <span className="ba-e9e8a40ea4">{`Loại tài sản `}</span>
                              <span className="ba-effd611262">*</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ba-b33c8ffd3e" data-node-id="87:901" data-name="Container">
                        <div className="ba-4ed85d2730">
                          <div className="ba-f3093b65ac" data-node-id="87:902">
                            <p className="ba-e9e8a40ea4">Mô tả</p>
                          </div>
                        </div>
                      </div>
                      <div className="ba-cd97a110c7" data-node-id="87:903" data-name="Container">
                        <div className="ba-d1b974de61">
                          <div className="ba-4aa52eea12" data-node-id="87:904">
                            <p>
                              <span className="ba-e9e8a40ea4">{`Số lượng `}</span>
                              <span className="ba-effd611262">*</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ba-c7e32176f9" data-node-id="87:905" data-name="Container">
                        <div className="ba-4ed85d2730">
                          <div className="ba-f3093b65ac" data-node-id="87:906">
                            <p className="ba-e9e8a40ea4">Ghi chú</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-67366dcb7c" data-node-id="87:907" data-name="Assets Row List">
                    <div className="ba-4ed85d2730">
                      <div className="ba-a4495f5a0e" data-node-id="87:908" data-name="Item 1">
                        <div className="ba-0e78029f8f" data-node-id="87:909" data-name="Input" data-field-hints="">
                          <div className="ba-4a9b73a3b7" data-node-id="87:910" data-name="Container">
                            <div className="ba-5cb97d0813">
                              <div className="ba-9d0ff22f9f" data-node-id="87:911">
                                <p className="ba-bf919b50f6">RAM 16GB, SSD 512GB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-c37c0e0f23" data-node-id="87:912" data-name="Container">
                          <div className="ba-4cac78b36b" data-node-id="87:913" data-name="Border">
                            <div className="ba-d452ad70ec" data-node-id="87:914" data-name="Button - Giảm">
                              <div className="ba-4d8a96e2d5">
                                <div className="ba-5bfa9619f4" data-node-id="87:915">
                                  <p className="ba-bf919b50f6">-</p>
                                </div>
                              </div>
                            </div>
                            <div className="ba-69658da8c2" data-node-id="87:916" data-name="Input" data-field-hints="">
                              <div className="ba-21de86fe97">
                                <div className="ba-b8af279b02" data-node-id="87:917" data-name="Container">
                                  <div className="ba-d163931076" data-node-id="87:918">
                                    <p className="ba-bf919b50f6">1</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ba-d452ad70ec" data-node-id="87:919" data-name="Button - Tăng">
                              <div className="ba-4d8a96e2d5">
                                <div className="ba-5bfa9619f4" data-node-id="87:920">
                                  <p className="ba-bf919b50f6">+</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-f63741ebd9" data-node-id="87:921" data-name="Input" data-field-hints="">
                          <div className="ba-4a9b73a3b7" data-node-id="87:922" data-name="Container">
                            <div className="ba-5cb97d0813">
                              <div className="ba-9d0ff22f9f" data-node-id="87:923">
                                <p className="ba-bf919b50f6">Kèm bộ sạc</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-2b2ceccb73" data-node-id="87:924" data-name="Container">
                          <div className="ba-62f8ff98c9" data-node-id="87:925" data-name="Button">
                            <div className="ba-c51752dc8c" data-node-id="87:926" data-name="SVG">
                              <img alt="" className="ba-8faf267d30" src={imgSvg7} />
                            </div>
                          </div>
                        </div>
                        <div className="ba-1e4388caf3" data-node-id="87:928" data-name="Options" data-field-hints="">
                          <div className="ba-d29f1b8582" data-node-id="87:929" data-name="image clip">
                            <div className="ba-f80f4ed9cb">
                              <div className="ba-58d29b27c0" data-node-id="87:930" data-name="image">
                                <img alt="" className="ba-8faf267d30" src={imgImage1} />
                              </div>
                            </div>
                          </div>
                          <div className="ba-4a9b73a3b7" data-node-id="87:932" data-name="Container">
                            <div className="ba-4ed85d2730">
                              <div className="ba-9d0ff22f9f" data-node-id="87:933">
                                <p className="ba-bf919b50f6">Máy tính xách tay</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-0138d9a50a" data-node-id="87:934" data-name="Item 2" hidden>
                        <div className="ba-9bbe0965ac" data-node-id="87:935" data-name="Input" data-field-hints="">
                          <div className="ba-0a68f81371">
                            <div className="ba-4a9b73a3b7" data-node-id="87:936" data-name="Container">
                              <div className="ba-5cb97d0813">
                                <div className="ba-9d0ff22f9f" data-node-id="87:937">
                                  <p className="ba-bf919b50f6">24 inch, Full HD</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-2ed6c85268" data-node-id="87:938" data-name="Container">
                          <div className="ba-f24af748b4">
                            <div className="ba-4cac78b36b" data-node-id="87:939" data-name="Border">
                              <div className="ba-d452ad70ec" data-node-id="87:940" data-name="Button - Giảm">
                                <div className="ba-4d8a96e2d5">
                                  <div className="ba-5bfa9619f4" data-node-id="87:941">
                                    <p className="ba-bf919b50f6">-</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ba-69658da8c2" data-node-id="87:942" data-name="Input" data-field-hints="">
                                <div className="ba-21de86fe97">
                                  <div className="ba-b8af279b02" data-node-id="87:943" data-name="Container">
                                    <div className="ba-d163931076" data-node-id="87:944">
                                      <p className="ba-bf919b50f6">1</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ba-d452ad70ec" data-node-id="87:945" data-name="Button - Tăng">
                                <div className="ba-4d8a96e2d5">
                                  <div className="ba-5bfa9619f4" data-node-id="87:946">
                                    <p className="ba-bf919b50f6">+</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-d855e40f03" data-node-id="87:947" data-name="Input" data-field-hints="">
                          <div className="ba-0a68f81371">
                            <div className="ba-4a9b73a3b7" data-node-id="87:948" data-name="Container">
                              <div className="ba-09c6898323">
                                <div className="ba-22fd58dadd" data-node-id="87:949">
                                  <p className="ba-32bd4c7660">Nhập ghi chú</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-e23f5b86d0" data-node-id="87:950" data-name="Container">
                          <div className="ba-9d6b10ed9e">
                            <div className="ba-62f8ff98c9" data-node-id="87:951" data-name="Button">
                              <div className="ba-c51752dc8c" data-node-id="87:952" data-name="SVG">
                                <img alt="" className="ba-8faf267d30" src={imgSvg7} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-615104094b" data-node-id="87:954" data-name="Options" data-field-hints="">
                          <div className="ba-fe08b58b33">
                            <div className="ba-d29f1b8582" data-node-id="87:955" data-name="image clip">
                              <div className="ba-f80f4ed9cb">
                                <div className="ba-58d29b27c0" data-node-id="87:956" data-name="image">
                                  <img alt="" className="ba-8faf267d30" src={imgImage1} />
                                </div>
                              </div>
                            </div>
                            <div className="ba-4a9b73a3b7" data-node-id="87:958" data-name="Container">
                              <div className="ba-4ed85d2730">
                                <div className="ba-9d0ff22f9f" data-node-id="87:959">
                                  <p className="ba-bf919b50f6">Màn hình</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-ed33b5617d" data-node-id="87:960" data-name="Add Asset Button & Hint" style={allocationAssetMode==='quota'?{display:'none'}:undefined}>
                  <div className="ba-22d496be9c" data-node-id="87:961" data-name="Button">
                    <div className="ba-5cca20e57d" data-node-id="87:962" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg8} />
                    </div>
                    <div className="ba-0a72fb634f" data-node-id="87:964">
                      <p className="ba-bf919b50f6">Thêm tài sản</p>
                    </div>
                  </div>
                  <div className="ba-39ca0321a1" data-node-id="87:965" data-name="Container">
                    <div className="ba-75ed9d7396" data-node-id="87:966">
                      <p className="ba-e9e8a40ea4">Số lượng phải là số nguyên dương.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-67366dcb7c" data-node-id="87:967" data-name="Section Lý do & thời gian">
              <div className="ba-0a871adaed">
                <div className="ba-153c0a1809" data-node-id="87:968" data-name="Heading 2">
                  <div className="ba-8008bf8e07" data-node-id="87:969">
                    <p className="ba-efcc9af6d1">{`Lý do & thời gian`}</p>
                  </div>
                </div>
                <div className="ba-310adc8ef1" data-node-id="87:970" data-name="Container">
                  <div className="ba-f77352222a" data-node-id="87:971" data-name="Lý do yêu cầu textarea (2 cols)">
                    <div className="ba-153c0a1809" data-node-id="87:972" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:973">
                        <p>
                          <span className="ba-bf919b50f6">{`Lý do yêu cầu `}</span>
                          <span className="ba-153aa7557b">*</span>
                        </p>
                      </div>
                    </div>
                    <div className="ba-1d30665d2c" data-node-id="87:974" data-name="Textarea" data-field-hints="">
                      <div className="ba-4a9b73a3b7" data-node-id="87:975" data-name="Container">
                        <div className="ba-4ed85d2730">
                          <div className="ba-22fd58dadd" data-node-id="87:976">
                            <p className="ba-bf919b50f6">Nhập lý do yêu cầu cấp phát tài sản</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-6f61d99fdb" data-node-id="87:977" data-name="Container">
                      <div className="ba-20f849a890" data-node-id="87:978">
                        <p className="ba-e9e8a40ea4">Vui lòng nhập lý do yêu cầu</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-4d8fcf720f" data-node-id="87:979" data-name="Ngày cần sử dụng date (1 col)">
                    <div className="ba-153c0a1809" data-node-id="87:980" data-name="Label">
                      <div className="ba-9f8a9b868b" data-node-id="87:981">
                        <p>
                          <span className="ba-bf919b50f6">{`Ngày cần sử dụng `}</span>
                          <span className="ba-153aa7557b">*</span>
                        </p>
                      </div>
                    </div>
                    <div className="ba-153c0a1809" data-node-id="87:982" data-name="Container">
                      <div className="ba-213d38aa04" data-node-id="87:983" data-name="Input" data-field-hints="">
                        <div className="ba-4a9b73a3b7" data-node-id="87:984" data-name="Container">
                          <div className="ba-5cb97d0813">
                            <div className="ba-8b4a909b44" data-node-id="87:985">
                              <p className="ba-bf919b50f6">25/10/2026</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-934cc90fa5" data-node-id="87:986" data-name="Container">
                        <div className="ba-c51752dc8c" data-node-id="87:987" data-name="SVG">
                          <img alt="" className="ba-8faf267d30" src={imgSvg6} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-fcc89ea3b6" data-node-id="87:989" data-name="Aside - Sidebar">
        <div className="ba-67366dcb7c" data-node-id="87:990" data-name="Top Branding & Navigation">
          <div className="ba-4ed85d2730">
            <div className="ba-3be9fc2649" data-node-id="87:991" data-name="App Brand Logo">
              <div className="ba-78e13d11d6" data-node-id="87:992" style={{ backgroundImage: "linear-gradient(45.00000000000001deg, rgb(29, 78, 216) 0%, rgb(37, 99, 235) 50%, rgb(34, 211, 238) 100%)" }} data-name="Background">
                <div className="ba-b281d78eb5" data-node-id="87:993" data-name="Overlay+Shadow" />
                <div className="ba-eaa60f1c42" data-node-id="87:994" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg9} />
                </div>
              </div>
              <div className="ba-fd819212d7" data-node-id="87:996" data-name="Container">
                <div className="ba-e0822dd18c" data-node-id="87:997" data-name="Container">
                  <div className="ba-b79046b2ab" data-node-id="87:998">
                    <p className="ba-5f33bcd61f">AssetFlow</p>
                  </div>
                </div>
                <div className="ba-9ad1c5c501" data-node-id="87:999" data-name="Container">
                  <div className="ba-5262130623" data-node-id="87:1000">
                    <p className="ba-1b6a18879c">QUẢN LÝ TÀI SẢN</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-e8c26026c5" data-node-id="87:1001" data-name="Section Label:margin">
              <div className="ba-d0fb1366d5" data-node-id="87:1002" data-name="Section Label">
                <div className="ba-ece824acd3" data-node-id="87:1003">
                  <p className="ba-e9e8a40ea4">KHÔNG GIAN LÀM VIỆC</p>
                </div>
              </div>
            </div>
            <div className="ba-febf40c1f2" data-node-id="87:1004" data-name="Navigation Menu">
              <div className="ba-29d9c57634" data-node-id="87:1005" data-name="Link - Tổng quan">
                <div className="ba-b2a182ecf4" data-node-id="87:1006" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg10} />
                </div>
                <div className="ba-831a97fea0" data-node-id="87:1008">
                  <p className="ba-efcc9af6d1">Tổng quan</p>
                </div>
              </div>
              <div className="ba-29d9c57634" data-node-id="87:1009" data-name="Link - Tài sản của tôi">
                <div className="ba-b2a182ecf4" data-node-id="87:1010" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg11} />
                </div>
                <div className="ba-831a97fea0" data-node-id="87:1012">
                  <p className="ba-efcc9af6d1">Tài sản của tôi</p>
                </div>
              </div>
              <div className="ba-677c3559bc" data-node-id="87:1013" data-name="Cấp phát tài sản (Active accordion)">
                <div className="ba-7ca833152c" data-node-id="87:1014" data-name="Button">
                  <div className="ba-ad50363799" data-node-id="87:1015" data-name="Container">
                    <div className="ba-b2a182ecf4" data-node-id="87:1016" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg12} />
                    </div>
                    <div className="ba-292637bcb3" data-node-id="87:1018">
                      <p className="ba-efcc9af6d1">Cấp phát tài sản</p>
                    </div>
                  </div>
                  <div className="ba-15cc5ceed7" data-node-id="87:1019">
                    <div className="ba-c23fd9c194">
                      <div className="ba-f14442793f" data-name="SVG">
                        <img alt="" className="ba-8faf267d30" src={imgSvg13} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-0ccc267b66" data-node-id="87:1021" data-name="Sub menu → Link">
                  <div className="ba-a09ffe6a37" data-node-id="87:1022">
                    <p className="ba-efcc9af6d1">Bàn giao tài sản</p>
                  </div>
                </div>
              </div>
              <div className="ba-29d9c57634" data-node-id="87:1023" data-name="Link - Thu hồi tài sản">
                <div className="ba-b2a182ecf4" data-node-id="87:1024" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg14} />
                </div>
                <div className="ba-831a97fea0" data-node-id="87:1026">
                  <p className="ba-efcc9af6d1">Thu hồi tài sản</p>
                </div>
              </div>
              <div className="ba-29d9c57634" data-node-id="87:1027" data-name="Link - iều chuyển tài sản">
                <div className="ba-b2a182ecf4" data-node-id="87:1028" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg15} />
                </div>
                <div className="ba-831a97fea0" data-node-id="87:1030">
                  <p className="ba-efcc9af6d1">Điều chuyển tài sản</p>
                </div>
              </div>
              <div className="ba-29d9c57634" data-node-id="87:1031" data-name="Link - Báo hỏng / Bảo tr">
                <div className="ba-b2a182ecf4" data-node-id="87:1032" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg16} />
                </div>
                <div className="ba-831a97fea0" data-node-id="87:1035">
                  <p className="ba-efcc9af6d1">Báo hỏng / Bảo trì</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-603f00b5b0" data-node-id="87:1036" data-name="Bottom Help & User Profile">
          <div className="ba-3f4226b7bc">
            <div className="ba-9f22247bfe" data-node-id="87:1037" data-name="Link">
              <div className="ba-86fdd127d3">
                <div className="ba-b2a182ecf4" data-node-id="87:1038" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg17} />
                </div>
                <div className="ba-831a97fea0" data-node-id="87:1040">
                  <p className="ba-efcc9af6d1">Trợ giúp</p>
                </div>
              </div>
            </div>
            <div className="ba-599a3518a5" data-node-id="87:1041" data-name="User Info Card">
              <div className="ba-74859c9b16">
                <div className="ba-d452ad70ec" data-node-id="87:1042" data-name="Container">
                  <div className="ba-a5bb95be96">
                    <div className="ba-4156da2bac" data-node-id="87:1043" data-name="Background">
                      <div className="ba-0a72fb634f" data-node-id="87:1044">
                        <p className="ba-bf919b50f6">NA</p>
                      </div>
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="87:1045" data-name="Container">
                      <div className="ba-153c0a1809" data-node-id="87:1046" data-name="Container">
                        <div className="ba-f63413d5f1" data-node-id="87:1047">
                          <p className="ba-bf919b50f6">Nguyễn Minh Anh</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="87:1048" data-name="Container">
                        <div className="ba-75ed9d7396" data-node-id="87:1049">
                          <p className="ba-e9e8a40ea4">Nhân viên</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-d452ad70ec" data-node-id="87:1050" data-name="Button - Tùy chọn tài khoản">
                  <div className="ba-4ed85d2730">
                    <div className="ba-c51752dc8c" data-node-id="87:1051" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
