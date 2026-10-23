/** Screen 40:12041 — Danh sách tài sản - Sau khi xóa thành công (Success Toast). Presentation adapted from Figma. */
import { h } from "../design-runtime.jsx";
const imgQltsLogo = "/assets/405b03fa-d4d7-4ac7-b28c-4c177da9e8d7.png";
const imgContainer = "/assets/7c34143c-0397-4501-840a-702f002384a4.svg";
const imgContainer1 = "/assets/46caabda-bd45-4b11-b5ff-c259fa3f91ec.svg";
const imgContainer2 = "/assets/990dafac-a257-4617-81d5-de97e2bf5b55.svg";
const imgContainer3 = "/assets/efba1b86-5a64-456e-82f2-914ae9879c03.svg";
const imgContainer4 = "/assets/d250c457-1039-4857-b8ee-5bd49ae4fce9.svg";
const imgContainer5 = "/assets/5301744d-66d1-4d7e-83c7-bd27a9c58506.svg";
const imgContainer6 = "/assets/c664024a-f6ad-4287-bd4d-da30ff82fb18.svg";
const imgContainer7 = "/assets/e592d1c5-2370-44ae-a73e-e6ede7d9ec6d.svg";
const imgContainer8 = "/assets/771f218a-4092-4800-b785-194db91942ae.svg";
const imgContainer9 = "/assets/8e8c57ee-73c0-4daf-8ba4-9db7e6864943.svg";
const imgContainer10 = "/assets/f1a94157-83b4-45b4-9fa4-3c1fe43b4314.svg";
const imgIcon = "/assets/1c0275bd-cd28-4293-9b87-396d424b72e3.svg";
const imgContainer11 = "/assets/473b714e-a8fa-4c00-81f7-448359c5ef3e.svg";
const imgContainer12 = "/assets/b30d4610-e590-4825-b539-acb45acc2dbb.svg";
const imgContainer13 = "/assets/6e4e9b60-0c01-4fc4-abf7-869dac7b577f.svg";
const imgContainer14 = "/assets/836a0de6-0504-4bb9-885e-78d84b1b6b31.svg";
const imgContainer15 = "/assets/9c73396e-042c-4f6b-b0c6-cb98e0d3a3db.svg";
const imgContainer16 = "/assets/2ea2c97a-668b-461f-b8d3-9c1c5be108f5.svg";
const imgContainer17 = "/assets/8ea37598-84ee-4337-bda5-030b665b0a99.svg";
const imgContainer18 = "/assets/c26561fd-f0f9-4043-ba53-20d5e3f4ec5c.svg";
const imgContainer19 = "/assets/2e1ba082-1208-4daa-90fb-c7fe3d254f19.svg";
const imgContainer20 = "/assets/8de06eb9-3a5a-4d38-a5f8-5c20b35f6f8d.svg";
const imgContainer21 = "/assets/025709b5-298c-4016-a665-c5f7cc98a46b.svg";
const imgContainer22 = "/assets/d7e91d5d-3d46-4ba0-8373-02d0c1b31843.svg";
const imgContainer23 = "/assets/b0a55bd5-f51a-4fd9-a2df-172e275d109d.svg";
const imgContainer24 = "/assets/91a3e279-8c99-4be9-9b03-dd495469b618.svg";
const imgContainer25 = "/assets/5de39683-6a71-4adb-b778-f8272713d8b8.svg";
const imgContainer26 = "/assets/c6fcdc33-d0cd-4127-881d-c22d4340f91f.svg";
const imgContainer27 = "/assets/dab17bde-87b8-4e88-8991-d9310358634c.svg";
const imgContainer28 = "/assets/9683b0a2-adc6-424d-be35-10818e8331e8.svg";
const imgContainer29 = "/assets/8f78ec25-cee1-42d0-aca6-0c8451b053e6.svg";
const imgIcon1 = "/assets/6eb0f5b7-d28c-489b-a6fd-18e1cc7e6584.svg";
const imgContainer30 = "/assets/5b02cc6e-a0be-4730-ad70-3b1770910242.svg";
const imgContainer31 = "/assets/44f169cd-2037-41ec-8846-f3b1764138ea.svg";
const imgContainer32 = "/assets/fee14d3f-122b-41b6-9d94-5bb479529691.svg";
const imgContainer33 = "/assets/108149a8-3b6e-4746-99b6-afea2ccd1a28.svg";
const imgContainer34 = "/assets/dcdeee0b-4c2a-4f8f-9ed3-45253e4e1549.svg";
const imgContainer35 = "/assets/05a152e4-a82c-4a45-9b76-592cce14d963.svg";
const imgContainer36 = "/assets/888aa264-3cb5-4d39-8c60-73641801872a.svg";
const imgContainer37 = "/assets/b5c6b5e4-f9f8-45cf-8b23-6f3610c46771.svg";
const imgContainer38 = "/assets/ce7178c7-1fbe-49f8-9d53-21e140517ecb.svg";
const imgContainer39 = "/assets/ffbb033d-1ed1-42fe-b40f-770ff7e98bbf.svg";
const imgContainer40 = "/assets/1615e3eb-344e-40b7-a857-c13c7cef9cdd.svg";
const imgContainer41 = "/assets/4dd9aa74-c001-4475-8652-9f2c9a2a0fee.svg";
const imgContainer42 = "/assets/9f1d5fba-7971-4224-8d64-759cc9118565.svg";
const imgContainer43 = "/assets/8f27ee81-8b9a-432a-a964-0c4a3d3ac861.svg";
const imgContainer44 = "/assets/559234f9-8575-4c8a-aaf7-61a7dd7e7c08.svg";
const imgContainer45 = "/assets/2ba2841e-6658-435c-97a6-09d7c5a75d3d.svg";

export default function DanhSachTaiSnSauKhiXoaThanhCongSuccessToast() {
  return (
    <div className="ba-73b1803b70" data-node-id="40:12041" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Danh sách tài sản - Sau khi xóa thành công (Success Toast)">
      <div className="ba-5498020b0d" data-node-id="40:12042" data-name="Main">
        <div className="ba-153c0a1809" data-node-id="40:12043" data-name="Container">
          <div className="ba-009c993968" data-node-id="40:12044" data-name="Header - Top Action & Title Bar:margin">
            <div className="ba-c96fe10678" data-node-id="40:12045" data-name="Header - Top Action & Title Bar">
              <div className="ba-ab7becbfcb" data-node-id="40:12046" data-name="Container">
                <div className="ba-84dcddd9c3" data-node-id="40:12047" data-name="Container">
                  <div className="ba-39ca0321a1" data-node-id="40:12048" data-name="Heading 1">
                    <div className="ba-29a97d689a" data-node-id="40:12049">
                      <p className="ba-a0118ea47e">Danh sách tài sản</p>
                    </div>
                  </div>
                  <div className="ba-be3f306e17" data-node-id="40:12050" data-name="Background+Border">
                    <div className="ba-ce9e26b7ac" data-node-id="40:12051" data-name="Background" />
                    <div className="ba-d452ad70ec" data-node-id="40:12052" data-name="Container">
                      <div className="ba-4ed85d2730">
                        <div className="ba-9d9e62f620" data-node-id="40:12053">
                          <p className="ba-bf919b50f6">247 mục</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-c1cd117578" data-node-id="40:12054" data-name="Overlay">
                    <div className="ba-4dd7a1f293" data-node-id="40:12055" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer} />
                    </div>
                    <div className="ba-791674cd08" data-node-id="40:12057">
                      <p className="ba-bf919b50f6">Đã đồng bộ số liệu</p>
                    </div>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="40:12058" data-name="Container">
                  <div className="ba-73820a4170" data-node-id="40:12059">
                    <p className="ba-5a4fd449fe">
                      <span className="ba-bf919b50f6">{`Tổng số: `}</span>
                      <span className="ba-2c3d593e9d">247 tài sản</span>
                      <span className="ba-bf919b50f6">{` • Quản lý định danh, tình trạng vòng đời, cấp phát và hồ sơ thiết`}</span>
                    </p>
                    <p className="ba-bf919b50f6">bị toàn viện.</p>
                  </div>
                </div>
              </div>
              <div className="ba-9eae8902b4" data-node-id="40:12060" data-name="Quick Toolbars">
                <div className="ba-7a7b414c43" data-node-id="40:12061" data-name="Button">
                  <div className="ba-8a0ff48924" data-node-id="40:12062" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer1} />
                  </div>
                  <div className="ba-d452ad70ec" data-node-id="40:12064" data-name="Container">
                    <div className="ba-d1b974de61">
                      <div className="ba-2aa6e1e924" data-node-id="40:12065">
                        <p className="ba-efcc9af6d1">Xuất dữ liệu</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-7a7b414c43" data-node-id="40:12066" data-name="Button">
                  <div className="ba-97e8208e5c" data-node-id="40:12067" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer2} />
                  </div>
                  <div className="ba-d452ad70ec" data-node-id="40:12069" data-name="Container">
                    <div className="ba-d1b974de61">
                      <div className="ba-2aa6e1e924" data-node-id="40:12070">
                        <p className="ba-efcc9af6d1">Nhật ký xóa</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-7b76de4240" data-node-id="40:12071" data-name="Button">
                  <div className="ba-0082061c23" data-node-id="40:12072" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer3} />
                  </div>
                  <div className="ba-9021357745" data-node-id="40:12074" data-name="Container">
                    <div className="ba-b5300aff3b" data-node-id="40:12075">
                      <p className="ba-efcc9af6d1">Khai báo tài sản mới</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-009c993968" data-node-id="40:12076" data-name="Section - Thống kê tài sản hiện tại:margin">
            <div className="ba-1a9dbaca21" data-node-id="40:12077" data-name="Section - Thống kê tài sản hiện tại">
              <div className="ba-d5a08c7d31" data-node-id="40:12078" data-name="Stat 1: Đang sử dụng">
                <div className="ba-d452ad70ec" data-node-id="40:12079" data-name="Container">
                  <div className="ba-4ed85d2730">
                    <div className="ba-153c0a1809" data-node-id="40:12080" data-name="Container">
                      <div className="ba-cff34b1d7a" data-node-id="40:12081">
                        <p className="ba-bf919b50f6">ĐANG SỬ DỤNG</p>
                      </div>
                    </div>
                    <div className="ba-6f61d99fdb" data-node-id="40:12082" data-name="Margin">
                      <div className="ba-ff071c5494" data-node-id="40:12083" data-name="Paragraph">
                        <div className="ba-c7daac5463" data-node-id="40:12084">
                          <p className="ba-a0118ea47e">182</p>
                        </div>
                        <div className="ba-f47bba4274" data-node-id="40:12085">
                          <p className="ba-bf919b50f6">/ 247 máy</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-6f61d99fdb" data-node-id="40:12086" data-name="Margin">
                      <div className="ba-18f0a528a0" data-node-id="40:12087" data-name="Container">
                        <div className="ba-b9931dece1" data-node-id="40:12088" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer4} />
                        </div>
                        <div className="ba-791674cd08" data-node-id="40:12090">
                          <p className="ba-bf919b50f6">73.7% công suất</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-bc97ac614e" data-node-id="40:12091" data-name="Overlay">
                  <div className="ba-f24af748b4">
                    <div className="ba-fe94654b7c" data-node-id="40:12092" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-bb445a041d" data-node-id="40:12094" data-name="Stat 2: Chưa cấp phát (Cập nhật từ 45 -> 44 sau khi xóa HP120)">
                <div className="ba-d452ad70ec" data-node-id="40:12095" data-name="Container">
                  <div className="ba-4ed85d2730">
                    <div className="ba-6a233c377e" data-node-id="40:12096" data-name="Container">
                      <div className="ba-39ca0321a1" data-node-id="40:12097" data-name="Container">
                        <div className="ba-cff34b1d7a" data-node-id="40:12098">
                          <p className="ba-bf919b50f6">CHƯA CẤP PHÁT</p>
                        </div>
                      </div>
                      <div className="ba-3b647527b2" data-node-id="40:12099" data-name="Background" />
                    </div>
                    <div className="ba-6f61d99fdb" data-node-id="40:12100" data-name="Margin">
                      <div className="ba-ff071c5494" data-node-id="40:12101" data-name="Paragraph">
                        <div className="ba-c7daac5463" data-node-id="40:12102">
                          <p className="ba-a0118ea47e">44</p>
                        </div>
                        <div className="ba-1f9b4e707d" data-node-id="40:12103">
                          <p className="ba-18dc402091">45</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-6f61d99fdb" data-node-id="40:12104" data-name="Margin">
                      <div className="ba-18f0a528a0" data-node-id="40:12105" data-name="Container">
                        <div className="ba-0082061c23" data-node-id="40:12106" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer6} />
                        </div>
                        <div className="ba-73820a4170" data-node-id="40:12108">
                          <p className="ba-bf919b50f6">Đã trừ 1 vừa xóa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-502acc3273" data-node-id="40:12109" data-name="Background">
                  <div className="ba-f24af748b4">
                    <div className="ba-a5f8770df9" data-node-id="40:12110" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-d5a08c7d31" data-node-id="40:12112" data-name="Stat 3: Đã thanh l">
                <div className="ba-d452ad70ec" data-node-id="40:12113" data-name="Container">
                  <div className="ba-4ed85d2730">
                    <div className="ba-153c0a1809" data-node-id="40:12114" data-name="Container">
                      <div className="ba-cff34b1d7a" data-node-id="40:12115">
                        <p className="ba-bf919b50f6">ĐÃ THANH LÝ</p>
                      </div>
                    </div>
                    <div className="ba-6f61d99fdb" data-node-id="40:12116" data-name="Margin">
                      <div className="ba-ff071c5494" data-node-id="40:12117" data-name="Paragraph">
                        <div className="ba-c7daac5463" data-node-id="40:12118">
                          <p className="ba-a0118ea47e">17</p>
                        </div>
                        <div className="ba-f47bba4274" data-node-id="40:12119">
                          <p className="ba-bf919b50f6">thiết bị</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-6f61d99fdb" data-node-id="40:12120" data-name="Margin">
                      <div className="ba-18f0a528a0" data-node-id="40:12121" data-name="Container">
                        <div className="ba-0082061c23" data-node-id="40:12122" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer8} />
                        </div>
                        <div className="ba-b0015a452a" data-node-id="40:12124">
                          <p className="ba-bf919b50f6">Q1/2026 hoàn tất</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-62640bae74" data-node-id="40:12125" data-name="Background">
                  <div className="ba-f24af748b4">
                    <div className="ba-a9fa66c77c" data-node-id="40:12126" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-01b2e5093e" data-node-id="40:12128" data-name="Stat 4: Định mức nguyên gi">
                <div className="ba-64ec8b5d8b" data-node-id="40:12129" data-name="Container">
                  <div className="ba-153c0a1809" data-node-id="40:12130" data-name="Container">
                    <div className="ba-cff34b1d7a" data-node-id="40:12131">
                      <p className="ba-bf919b50f6">TỔNG GIÁ TRỊ ĐỊNH MỨC</p>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:12132" data-name="Margin">
                    <div className="ba-ff071c5494" data-node-id="40:12133" data-name="Paragraph">
                      <div className="ba-10f343155c" data-node-id="40:12134">
                        <p className="ba-a0118ea47e">4.829.400.000</p>
                      </div>
                      <div className="ba-10b58381a4" data-node-id="40:12135">
                        <p className="ba-bf919b50f6">₫</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:12136" data-name="Margin">
                    <div className="ba-18f0a528a0" data-node-id="40:12137" data-name="Container">
                      <div className="ba-73820a4170" data-node-id="40:12138">
                        <p className="ba-bf919b50f6">Khấu hao lũy kế:</p>
                      </div>
                      <div className="ba-39ca0321a1" data-node-id="40:12139" data-name="Strong">
                        <div className="ba-df18ffb03a" data-node-id="40:12140">
                          <p className="ba-bf919b50f6">28.4%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-5af4f5fc39" data-node-id="40:12141" data-name="Background">
                  <div className="ba-6b69cf8f95" data-node-id="40:12142" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer10} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-9b32794cdf" data-node-id="40:12144" data-name="Section - Bộ lọc tìm kiếm tài sản:margin">
            <div className="ba-6a45bf5dae" data-node-id="40:12145" data-name="Section - Bộ lọc tìm kiếm tài sản">
              <div className="ba-6b0253d2b5" data-node-id="40:12146" data-name="Container">
                <div className="ba-435a042d02">
                  <div className="ba-3b7f3aa2f8" data-node-id="40:12147" data-name="Search Input">
                    <div className="ba-92f239ea0e" data-node-id="40:12148" data-name="Input" data-field-hints="">
                      <div className="ba-4a9b73a3b7" data-node-id="40:12149" data-name="Container">
                        <div className="ba-09c6898323">
                          <div className="ba-eae6c1d9d6" data-node-id="40:12150">
                            <p className="ba-32bd4c7660">Tìm theo mã định danh, tên thiết bị, serial...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-05301eeec3" data-node-id="40:12151" data-name="Icon">
                      <img alt="" className="ba-8faf267d30" src={imgIcon} />
                    </div>
                  </div>
                  <div className="ba-7ed05c1f75" data-node-id="40:12152" data-name="Category Filter">
                    <div className="ba-ee12983199" data-node-id="40:12153" data-name="Options" data-field-hints="">
                      <div className="ba-d452ad70ec" data-node-id="40:12154" data-name="Container">
                        <div className="ba-4ed85d2730">
                          <div className="ba-df18ffb03a" data-node-id="40:12155">
                            <p className="ba-bf919b50f6">Tất cả phân nhóm tài sản</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-5245795e47" data-node-id="40:12156" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer11} />
                    </div>
                  </div>
                  <div className="ba-e524fb8f70" data-node-id="40:12158" data-name="Status Filter">
                    <div className="ba-ee12983199" data-node-id="40:12159" data-name="Options" data-field-hints="">
                      <div className="ba-d452ad70ec" data-node-id="40:12160" data-name="Container">
                        <div className="ba-f0a48fa095">
                          <div className="ba-df18ffb03a" data-node-id="40:12161">
                            <p className="ba-bf919b50f6">Tất cả trạng thái</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-19c488e323" data-node-id="40:12162" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer11} />
                    </div>
                  </div>
                  <div className="ba-fec0c4a1c4" data-node-id="40:12164" data-name="Department Filter">
                    <div className="ba-ee12983199" data-node-id="40:12165" data-name="Options" data-field-hints="">
                      <div className="ba-d452ad70ec" data-node-id="40:12166" data-name="Container">
                        <div className="ba-60c7b36ad7">
                          <div className="ba-df18ffb03a" data-node-id="40:12167">
                            <p className="ba-bf919b50f6">Phòng ban / Kho</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-19c488e323" data-node-id="40:12168" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-d452ad70ec" data-node-id="40:12170" data-name="Right Controls">
                <div className="ba-bbe7baeddc">
                  <div className="ba-adf912547c" data-node-id="40:12171" data-name="Button">
                    <div className="ba-f4f987cbae" data-node-id="40:12172" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer12} />
                    </div>
                  </div>
                  <div className="ba-843ac3923d" data-node-id="40:12174" data-name="Vertical Divider" />
                  <div className="ba-4d72c79c5d" data-node-id="40:12175" data-name="Button">
                    <div className="ba-0536c76293" data-node-id="40:12176" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer13} />
                    </div>
                  </div>
                  <div className="ba-adf912547c" data-node-id="40:12178" data-name="Button">
                    <div className="ba-b784803253" data-node-id="40:12179" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-35b38ac7ea" data-node-id="40:12181" data-name="Section - Asset Data Table">
            <div className="ba-67366dcb7c" data-node-id="40:12182" data-name="Table">
              <div className="ba-f077e70e9e">
                <div className="ba-d67b8af893" data-node-id="40:12183" data-name="Table Header">
                  <div className="ba-67366dcb7c" data-node-id="40:12184" data-name="Row">
                    <div className="ba-9d6b10ed9e">
                      <div className="ba-72d5c4a914" data-node-id="40:12185" data-name="Cell">
                        <div className="ba-0d07265000" data-node-id="40:12186" data-name="Input - Chọn tất cả" data-field-hints="check " />
                      </div>
                      <div className="ba-f95c6fe1d0" data-node-id="40:12187" data-name="Cell">
                        <div className="ba-179eedba81" data-node-id="40:12188">
                          <p className="ba-e32ac1aeb2">Mã tài sản</p>
                        </div>
                      </div>
                      <div className="ba-e7b08e5058" data-node-id="40:12189" data-name="Cell">
                        <div className="ba-179eedba81" data-node-id="40:12190">
                          <p className="ba-e32ac1aeb2">Tên tài sản / Thông số</p>
                        </div>
                      </div>
                      <div className="ba-629d9c6e66" data-node-id="40:12191" data-name="Cell">
                        <div className="ba-179eedba81" data-node-id="40:12192">
                          <p className="ba-e32ac1aeb2">Loại tài sản</p>
                        </div>
                      </div>
                      <div className="ba-fab7f7cc17" data-node-id="40:12193" data-name="Cell">
                        <div className="ba-179eedba81" data-node-id="40:12194">
                          <p className="ba-e32ac1aeb2">Trạng thái</p>
                        </div>
                      </div>
                      <div className="ba-1814e0cb40" data-node-id="40:12195" data-name="Cell">
                        <div className="ba-179eedba81" data-node-id="40:12196">
                          <p className="ba-8a3ede2ed5">Vị trí / Người</p>
                          <p className="ba-e32ac1aeb2">sử dụng</p>
                        </div>
                      </div>
                      <div className="ba-97d75c9ff8" data-node-id="40:12197" data-name="Cell">
                        <div className="ba-1c51625fe7" data-node-id="40:12198">
                          <p className="ba-e32ac1aeb2">Nguyên giá</p>
                        </div>
                      </div>
                      <div className="ba-50af7e49cb" data-node-id="40:12199" data-name="Cell">
                        <div className="ba-969c92f1e2" data-node-id="40:12200">
                          <p className="ba-e32ac1aeb2">Thao tác</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-131ede8ea7" data-node-id="40:12201" data-name="Table Body (TS-FUR-2026-00087 REMOVED)">
                  <div className="ba-27f6021ad1" data-node-id="40:12202" data-name="Row 1: Laptop Dell Latitude 7440">
                    <div className="ba-754b2eafdf" data-node-id="40:12203" data-name="Data">
                      <div className="ba-0d07265000" data-node-id="40:12204" data-name="Input - Chọn dòng" data-field-hints="check " />
                    </div>
                    <div className="ba-8046ab244f" data-node-id="40:12205" data-name="Data">
                      <div className="ba-327509c50a" data-node-id="40:12206" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer15} />
                      </div>
                      <div className="ba-8070ad07b2" data-node-id="40:12208" data-name="Container">
                        <div className="ba-6322b78a5f" data-node-id="40:12209">
                          <p className="ba-8a3ede2ed5">TS-LAP-</p>
                          <p className="ba-e32ac1aeb2">2026-00012</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-3768040c29" data-node-id="40:12210" data-name="Data">
                      <div className="ba-153c0a1809" data-node-id="40:12211" data-name="Container">
                        <div className="ba-801fff445a" data-node-id="40:12212">
                          <p className="ba-1766101d9b">Laptop Dell Latitude 7440 Core</p>
                          <p className="ba-1b6a18879c">i7</p>
                        </div>
                      </div>
                      <div className="ba-4e78ab70f2" data-node-id="40:12213" data-name="Margin">
                        <div className="ba-38a8c7a682" data-node-id="40:12214" data-name="Container">
                          <div className="ba-5f0fcc3a35" data-node-id="40:12215">
                            <p className="ba-65796af702">RAM 16GB • SSD 512GB NVMe •</p>
                            <p className="ba-e06bc76970">SN: 8J2K9L2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-82cd109a48" data-node-id="40:12216" data-name="Data">
                      <div className="ba-fdf46ddda5" data-node-id="40:12217">
                        <p className="ba-8a3ede2ed5">Máy tính</p>
                        <p className="ba-e32ac1aeb2">xách tay</p>
                      </div>
                    </div>
                    <div className="ba-ef795935ab" data-node-id="40:12218" data-name="Data">
                      <div className="ba-8e787a5285" data-node-id="40:12219" data-name="Background+Border">
                        <div className="ba-b19b87c965" data-node-id="40:12220" data-name="Background" />
                        <div className="ba-a795768da5" data-node-id="40:12221">
                          <p className="ba-c22b989642">Đang sử</p>
                          <p className="ba-bf919b50f6">dụng</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-b57a5c6f06" data-node-id="40:12222" data-name="Data">
                      <div className="ba-e1bc67190d" data-node-id="40:12223" data-name="Container">
                        <div className="ba-78f7a069cf" data-node-id="40:12224">
                          <p className="ba-1766101d9b">Nguyễn Thu</p>
                          <p className="ba-1b6a18879c">Thảo</p>
                        </div>
                      </div>
                      <div className="ba-38a8c7a682" data-node-id="40:12225" data-name="Container">
                        <div className="ba-5f0fcc3a35" data-node-id="40:12226">
                          <p className="ba-65796af702">Phòng Tài chính</p>
                          <p className="ba-e06bc76970">Kế toán</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-28ac40d3bc" data-node-id="40:12227" data-name="Data">
                      <div className="ba-dfd73ca2d8" data-node-id="40:12228">
                        <p className="ba-8a3ede2ed5">26.800.000</p>
                        <p className="ba-e32ac1aeb2">₫</p>
                      </div>
                    </div>
                    <div className="ba-1dfca9a1af" data-node-id="40:12229" data-name="Data">
                      <div className="ba-3536005f7f" data-node-id="40:12230" data-name="Container">
                        <div className="ba-31cae755f8" data-node-id="40:12231" data-name="Button">
                          <div className="ba-9d58e7df2d" data-node-id="40:12232" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:12234" data-name="Button">
                          <div className="ba-97e8208e5c" data-node-id="40:12235" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer17} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:12237" data-name="Button">
                          <div className="ba-c0d2692864" data-node-id="40:12238" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer18} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-cd3c636a00" data-node-id="40:12240" data-name="Row 2: Màn hình LG UltraFine 27 inch 4K">
                    <div className="ba-afae1125ec" data-node-id="40:12241" data-name="Data">
                      <div className="ba-066bcdb6d2">
                        <div className="ba-0d07265000" data-node-id="40:12242" data-name="Input - Chọn dòng" data-field-hints="check " />
                      </div>
                    </div>
                    <div className="ba-af3765e3fd" data-node-id="40:12243" data-name="Data">
                      <div className="ba-2d2cac9c54">
                        <div className="ba-24926b3b2f" data-node-id="40:12244" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer19} />
                        </div>
                        <div className="ba-08b19c79cb" data-node-id="40:12246" data-name="Container">
                          <div className="ba-6322b78a5f" data-node-id="40:12247">
                            <p className="ba-8a3ede2ed5">TS-MON-</p>
                            <p className="ba-e32ac1aeb2">2026-00031</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-3579fe91be" data-node-id="40:12248" data-name="Data">
                      <div className="ba-406d4c2a6f">
                        <div className="ba-153c0a1809" data-node-id="40:12249" data-name="Container">
                          <div className="ba-801fff445a" data-node-id="40:12250">
                            <p className="ba-1766101d9b">Màn hình LG UltraFine 27 inch</p>
                            <p className="ba-1b6a18879c">4K</p>
                          </div>
                        </div>
                        <div className="ba-4e78ab70f2" data-node-id="40:12251" data-name="Margin">
                          <div className="ba-38a8c7a682" data-node-id="40:12252" data-name="Container">
                            <div className="ba-5f0fcc3a35" data-node-id="40:12253">
                              <p className="ba-65796af702">IPS • HDR400 • Type-C 90W •</p>
                              <p className="ba-e06bc76970">SN: LG992144</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-43caa6caf5" data-node-id="40:12254" data-name="Data">
                      <div className="ba-7fd7be2ffb">
                        <div className="ba-fdf46ddda5" data-node-id="40:12255">
                          <p className="ba-8a3ede2ed5">Màn hình</p>
                          <p className="ba-e32ac1aeb2">hiển thị</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-f040af1656" data-node-id="40:12256" data-name="Data">
                      <div className="ba-37923fedd3">
                        <div className="ba-6016af0036" data-node-id="40:12257" data-name="Background+Border">
                          <div className="ba-473d98e27f" data-node-id="40:12258" data-name="Background" />
                          <div className="ba-0882c6bf4a" data-node-id="40:12259">
                            <p className="ba-c22b989642">Chưa cấp</p>
                            <p className="ba-bf919b50f6">phát</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-2293703e8d" data-node-id="40:12260" data-name="Data">
                      <div className="ba-25c638ed2a">
                        <div className="ba-43d9aeada6" data-node-id="40:12261" data-name="Container">
                          <div className="ba-78f7a069cf" data-node-id="40:12262">
                            <p className="ba-1766101d9b">Kho thiết bị tầng</p>
                            <p className="ba-1b6a18879c">2</p>
                          </div>
                        </div>
                        <div className="ba-6b5f306d6c" data-node-id="40:12263" data-name="Container">
                          <div className="ba-5f0fcc3a35" data-node-id="40:12264">
                            <p className="ba-e06bc76970">Vị trí kệ: K-04-B</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-a48efe2475" data-node-id="40:12265" data-name="Data">
                      <div className="ba-24a5bf0bce">
                        <div className="ba-dfd73ca2d8" data-node-id="40:12266">
                          <p className="ba-8a3ede2ed5">14.200.000</p>
                          <p className="ba-e32ac1aeb2">₫</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-729ddb7861" data-node-id="40:12267" data-name="Data">
                      <div className="ba-3acb51e73e">
                        <div className="ba-3536005f7f" data-node-id="40:12268" data-name="Container">
                          <div className="ba-31cae755f8" data-node-id="40:12269" data-name="Button">
                            <div className="ba-9d58e7df2d" data-node-id="40:12270" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                            </div>
                          </div>
                          <div className="ba-31cae755f8" data-node-id="40:12272" data-name="Button">
                            <div className="ba-c97c8fe2d2" data-node-id="40:12273" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer20} />
                            </div>
                          </div>
                          <div className="ba-31cae755f8" data-node-id="40:12275" data-name="Button">
                            <div className="ba-c0d2692864" data-node-id="40:12276" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer18} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-cd3c636a00" data-node-id="40:12278" data-name="Row 3: Máy in Canon LBP2900 Laser">
                    <div className="ba-afae1125ec" data-node-id="40:12279" data-name="Data">
                      <div className="ba-c4ef7ddb3d">
                        <div className="ba-0d07265000" data-node-id="40:12280" data-name="Input - Chọn dòng" data-field-hints="check " />
                      </div>
                    </div>
                    <div className="ba-af3765e3fd" data-node-id="40:12281" data-name="Data">
                      <div className="ba-2d2cac9c54">
                        <div className="ba-24926b3b2f" data-node-id="40:12282" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer21} />
                        </div>
                        <div className="ba-770fc10801" data-node-id="40:12284" data-name="Container">
                          <div className="ba-6322b78a5f" data-node-id="40:12285">
                            <p className="ba-8a3ede2ed5">TS-PRT-</p>
                            <p className="ba-e32ac1aeb2">2026-00004</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-3579fe91be" data-node-id="40:12286" data-name="Data">
                      <div className="ba-406d4c2a6f">
                        <div className="ba-153c0a1809" data-node-id="40:12287" data-name="Container">
                          <div className="ba-801fff445a" data-node-id="40:12288">
                            <p className="ba-1b6a18879c">Máy in Canon LBP2900 Laser</p>
                          </div>
                        </div>
                        <div className="ba-4e78ab70f2" data-node-id="40:12289" data-name="Margin">
                          <div className="ba-38a8c7a682" data-node-id="40:12290" data-name="Container">
                            <div className="ba-5f0fcc3a35" data-node-id="40:12291">
                              <p className="ba-65796af702">Khổ A4 • Đơn sắc • USB 2.0 • SN:</p>
                              <p className="ba-e06bc76970">CN41029</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-43caa6caf5" data-node-id="40:12292" data-name="Data">
                      <div className="ba-d44e585726">
                        <div className="ba-fdf46ddda5" data-node-id="40:12293">
                          <p className="ba-8a3ede2ed5">{`Máy in &`}</p>
                          <p className="ba-e32ac1aeb2">Văn phòng</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-f040af1656" data-node-id="40:12294" data-name="Data">
                      <div className="ba-d9f543abf1">
                        <div className="ba-8e787a5285" data-node-id="40:12295" data-name="Background+Border">
                          <div className="ba-b19b87c965" data-node-id="40:12296" data-name="Background" />
                          <div className="ba-a795768da5" data-node-id="40:12297">
                            <p className="ba-c22b989642">Đang sử</p>
                            <p className="ba-bf919b50f6">dụng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-2293703e8d" data-node-id="40:12298" data-name="Data">
                      <div className="ba-25c638ed2a">
                        <div className="ba-e1bc67190d" data-node-id="40:12299" data-name="Container">
                          <div className="ba-78f7a069cf" data-node-id="40:12300">
                            <p className="ba-1766101d9b">Văn thư - Lưu</p>
                            <p className="ba-1b6a18879c">trữ</p>
                          </div>
                        </div>
                        <div className="ba-38a8c7a682" data-node-id="40:12301" data-name="Container">
                          <div className="ba-5f0fcc3a35" data-node-id="40:12302">
                            <p className="ba-65796af702">Bàn tiếp nhận</p>
                            <p className="ba-e06bc76970">P.102</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-a48efe2475" data-node-id="40:12303" data-name="Data">
                      <div className="ba-428389a213">
                        <div className="ba-dfd73ca2d8" data-node-id="40:12304">
                          <p className="ba-e32ac1aeb2">3.750.000 ₫</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-729ddb7861" data-node-id="40:12305" data-name="Data">
                      <div className="ba-28126f4342">
                        <div className="ba-3536005f7f" data-node-id="40:12306" data-name="Container">
                          <div className="ba-31cae755f8" data-node-id="40:12307" data-name="Button">
                            <div className="ba-9d58e7df2d" data-node-id="40:12308" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                            </div>
                          </div>
                          <div className="ba-31cae755f8" data-node-id="40:12310" data-name="Button">
                            <div className="ba-97e8208e5c" data-node-id="40:12311" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer17} />
                            </div>
                          </div>
                          <div className="ba-31cae755f8" data-node-id="40:12313" data-name="Button">
                            <div className="ba-c0d2692864" data-node-id="40:12314" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer18} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-cd3c636a00" data-node-id="40:12316" data-name="Row 4: MacBook Pro 16 inch M3 Max">
                    <div className="ba-afae1125ec" data-node-id="40:12317" data-name="Data">
                      <div className="ba-c4ef7ddb3d">
                        <div className="ba-0d07265000" data-node-id="40:12318" data-name="Input - Chọn dòng" data-field-hints="check " />
                      </div>
                    </div>
                    <div className="ba-af3765e3fd" data-node-id="40:12319" data-name="Data">
                      <div className="ba-2d2cac9c54">
                        <div className="ba-327509c50a" data-node-id="40:12320" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer22} />
                        </div>
                        <div className="ba-74a1a99ad5" data-node-id="40:12322" data-name="Container">
                          <div className="ba-6322b78a5f" data-node-id="40:12323">
                            <p className="ba-8a3ede2ed5">TS-LAP-</p>
                            <p className="ba-e32ac1aeb2">2026-00009</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-3579fe91be" data-node-id="40:12324" data-name="Data">
                      <div className="ba-406d4c2a6f">
                        <div className="ba-153c0a1809" data-node-id="40:12325" data-name="Container">
                          <div className="ba-801fff445a" data-node-id="40:12326">
                            <p className="ba-1b6a18879c">MacBook Pro 16 inch M3 Max</p>
                          </div>
                        </div>
                        <div className="ba-4e78ab70f2" data-node-id="40:12327" data-name="Margin">
                          <div className="ba-38a8c7a682" data-node-id="40:12328" data-name="Container">
                            <div className="ba-5f0fcc3a35" data-node-id="40:12329">
                              <p className="ba-65796af702">36GB Unified RAM • SSD 1TB •</p>
                              <p className="ba-e06bc76970">Space Black</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-43caa6caf5" data-node-id="40:12330" data-name="Data">
                      <div className="ba-d44e585726">
                        <div className="ba-fdf46ddda5" data-node-id="40:12331">
                          <p className="ba-8a3ede2ed5">Máy tính</p>
                          <p className="ba-e32ac1aeb2">xách tay</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-f040af1656" data-node-id="40:12332" data-name="Data">
                      <div className="ba-d9f543abf1">
                        <div className="ba-8e787a5285" data-node-id="40:12333" data-name="Background+Border">
                          <div className="ba-b19b87c965" data-node-id="40:12334" data-name="Background" />
                          <div className="ba-a795768da5" data-node-id="40:12335">
                            <p className="ba-c22b989642">Đang sử</p>
                            <p className="ba-bf919b50f6">dụng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-2293703e8d" data-node-id="40:12336" data-name="Data">
                      <div className="ba-25c638ed2a">
                        <div className="ba-e1bc67190d" data-node-id="40:12337" data-name="Container">
                          <div className="ba-78f7a069cf" data-node-id="40:12338">
                            <p className="ba-1766101d9b">Trần Đình</p>
                            <p className="ba-1b6a18879c">Khang</p>
                          </div>
                        </div>
                        <div className="ba-38a8c7a682" data-node-id="40:12339" data-name="Container">
                          <div className="ba-5f0fcc3a35" data-node-id="40:12340">
                            <p className="ba-65796af702">Trưởng phòng</p>
                            <p className="ba-e06bc76970">CNTT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-a48efe2475" data-node-id="40:12341" data-name="Data">
                      <div className="ba-0a53d200f0">
                        <div className="ba-dfd73ca2d8" data-node-id="40:12342">
                          <p className="ba-8a3ede2ed5">88.500.000</p>
                          <p className="ba-e32ac1aeb2">₫</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-729ddb7861" data-node-id="40:12343" data-name="Data">
                      <div className="ba-28126f4342">
                        <div className="ba-3536005f7f" data-node-id="40:12344" data-name="Container">
                          <div className="ba-31cae755f8" data-node-id="40:12345" data-name="Button">
                            <div className="ba-9d58e7df2d" data-node-id="40:12346" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                            </div>
                          </div>
                          <div className="ba-31cae755f8" data-node-id="40:12348" data-name="Button">
                            <div className="ba-97e8208e5c" data-node-id="40:12349" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer17} />
                            </div>
                          </div>
                          <div className="ba-31cae755f8" data-node-id="40:12351" data-name="Button">
                            <div className="ba-c0d2692864" data-node-id="40:12352" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer18} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-cd3c636a00" data-node-id="40:12354" data-name="Row 5: Màn hình Dell P2422H 23.8 inch IPS">
                    <div className="ba-afae1125ec" data-node-id="40:12355" data-name="Data">
                      <div className="ba-066bcdb6d2">
                        <div className="ba-0d07265000" data-node-id="40:12356" data-name="Input - Chọn dòng" data-field-hints="check " />
                      </div>
                    </div>
                    <div className="ba-af3765e3fd" data-node-id="40:12357" data-name="Data">
                      <div className="ba-2d2cac9c54">
                        <div className="ba-24926b3b2f" data-node-id="40:12358" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer19} />
                        </div>
                        <div className="ba-cac782240a" data-node-id="40:12360" data-name="Container">
                          <div className="ba-6322b78a5f" data-node-id="40:12361">
                            <p className="ba-8a3ede2ed5">TS-MON-</p>
                            <p className="ba-e32ac1aeb2">2026-00027</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-3579fe91be" data-node-id="40:12362" data-name="Data">
                      <div className="ba-406d4c2a6f">
                        <div className="ba-153c0a1809" data-node-id="40:12363" data-name="Container">
                          <div className="ba-801fff445a" data-node-id="40:12364">
                            <p className="ba-1766101d9b">Màn hình Dell P2422H 23.8</p>
                            <p className="ba-1b6a18879c">inch IPS</p>
                          </div>
                        </div>
                        <div className="ba-4e78ab70f2" data-node-id="40:12365" data-name="Margin">
                          <div className="ba-38a8c7a682" data-node-id="40:12366" data-name="Container">
                            <div className="ba-5f0fcc3a35" data-node-id="40:12367">
                              <p className="ba-65796af702">FHD 1080p • Chân xoay Pivot •</p>
                              <p className="ba-e06bc76970">HDMI/DP/VGA</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-43caa6caf5" data-node-id="40:12368" data-name="Data">
                      <div className="ba-7fd7be2ffb">
                        <div className="ba-fdf46ddda5" data-node-id="40:12369">
                          <p className="ba-8a3ede2ed5">Màn hình</p>
                          <p className="ba-e32ac1aeb2">hiển thị</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-f040af1656" data-node-id="40:12370" data-name="Data">
                      <div className="ba-37923fedd3">
                        <div className="ba-8e787a5285" data-node-id="40:12371" data-name="Background+Border">
                          <div className="ba-b19b87c965" data-node-id="40:12372" data-name="Background" />
                          <div className="ba-a795768da5" data-node-id="40:12373">
                            <p className="ba-c22b989642">Đang sử</p>
                            <p className="ba-bf919b50f6">dụng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-2293703e8d" data-node-id="40:12374" data-name="Data">
                      <div className="ba-25c638ed2a">
                        <div className="ba-e1bc67190d" data-node-id="40:12375" data-name="Container">
                          <div className="ba-78f7a069cf" data-node-id="40:12376">
                            <p className="ba-1b6a18879c">Lê Hoàng Nam</p>
                          </div>
                        </div>
                        <div className="ba-38a8c7a682" data-node-id="40:12377" data-name="Container">
                          <div className="ba-5f0fcc3a35" data-node-id="40:12378">
                            <p className="ba-65796af702">Phòng Hành</p>
                            <p className="ba-e06bc76970">chính Tổng hợp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-a48efe2475" data-node-id="40:12379" data-name="Data">
                      <div className="ba-30915fddaf">
                        <div className="ba-dfd73ca2d8" data-node-id="40:12380">
                          <p className="ba-e32ac1aeb2">4.650.000 ₫</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-729ddb7861" data-node-id="40:12381" data-name="Data">
                      <div className="ba-3acb51e73e">
                        <div className="ba-3536005f7f" data-node-id="40:12382" data-name="Container">
                          <div className="ba-31cae755f8" data-node-id="40:12383" data-name="Button">
                            <div className="ba-9d58e7df2d" data-node-id="40:12384" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                            </div>
                          </div>
                          <div className="ba-31cae755f8" data-node-id="40:12386" data-name="Button">
                            <div className="ba-97e8208e5c" data-node-id="40:12387" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer17} />
                            </div>
                          </div>
                          <div className="ba-31cae755f8" data-node-id="40:12389" data-name="Button">
                            <div className="ba-c0d2692864" data-node-id="40:12390" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer18} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-0b2297aeef" data-node-id="40:12392" data-name="Row 6: Tủ hồ sơ thép 4 cánh Hòa Phát">
                    <div className="ba-afae1125ec" data-node-id="40:12393" data-name="Data">
                      <div className="ba-a3a16d93cd">
                        <div className="ba-0d07265000" data-node-id="40:12394" data-name="Input - Chọn dòng" data-field-hints="check " />
                      </div>
                    </div>
                    <div className="ba-af3765e3fd" data-node-id="40:12395" data-name="Data">
                      <div className="ba-2d2cac9c54">
                        <div className="ba-c74d3ef2d9" data-node-id="40:12396" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer23} />
                        </div>
                        <div className="ba-74a1a99ad5" data-node-id="40:12398" data-name="Container">
                          <div className="ba-6322b78a5f" data-node-id="40:12399">
                            <p className="ba-8a3ede2ed5">TS-FUR-</p>
                            <p className="ba-e32ac1aeb2">2026-00080</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-3579fe91be" data-node-id="40:12400" data-name="Data">
                      <div className="ba-406d4c2a6f">
                        <div className="ba-153c0a1809" data-node-id="40:12401" data-name="Container">
                          <div className="ba-801fff445a" data-node-id="40:12402">
                            <p className="ba-1b6a18879c">Tủ hồ sơ thép 4 cánh Hòa Phát</p>
                          </div>
                        </div>
                        <div className="ba-4e78ab70f2" data-node-id="40:12403" data-name="Margin">
                          <div className="ba-38a8c7a682" data-node-id="40:12404" data-name="Container">
                            <div className="ba-5f0fcc3a35" data-node-id="40:12405">
                              <p className="ba-65796af702">Kích thước 1830x1000x450mm •</p>
                              <p className="ba-e06bc76970">Sơn tĩnh điện ghi</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-43caa6caf5" data-node-id="40:12406" data-name="Data">
                      <div className="ba-1be1a34fcc">
                        <div className="ba-fdf46ddda5" data-node-id="40:12407">
                          <p className="ba-8a3ede2ed5">{`Bàn ghế &`}</p>
                          <p className="ba-e32ac1aeb2">Nội thất</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-f040af1656" data-node-id="40:12408" data-name="Data">
                      <div className="ba-4a61c017b5">
                        <div className="ba-44fb051708" data-node-id="40:12409" data-name="Background+Border">
                          <div className="ba-5e75d867d7" data-node-id="40:12410" data-name="Background" />
                          <div className="ba-2cf6680fb4" data-node-id="40:12411">
                            <p className="ba-c22b989642">Đã thanh</p>
                            <p className="ba-bf919b50f6">lý</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-2293703e8d" data-node-id="40:12412" data-name="Data">
                      <div className="ba-25c638ed2a">
                        <div className="ba-e1bc67190d" data-node-id="40:12413" data-name="Container">
                          <div className="ba-b33be44db2" data-node-id="40:12414">
                            <p className="ba-1766101d9b">Đã xuất biên</p>
                            <p className="ba-1b6a18879c">bản #TL-09</p>
                          </div>
                        </div>
                        <div className="ba-38a8c7a682" data-node-id="40:12415" data-name="Container">
                          <div className="ba-6530cff199" data-node-id="40:12416">
                            <p className="ba-65796af702">Hội đồng thanh lý</p>
                            <p className="ba-e06bc76970">2026</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-a48efe2475" data-node-id="40:12417" data-name="Data">
                      <div className="ba-dbbb2a0483">
                        <div className="ba-57a2856eb2" data-node-id="40:12418">
                          <p className="ba-579c544ce5">3.200.000 ₫</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-729ddb7861" data-node-id="40:12419" data-name="Data">
                      <div className="ba-a852cf96bc">
                        <div className="ba-3536005f7f" data-node-id="40:12420" data-name="Container">
                          <div className="ba-31cae755f8" data-node-id="40:12421" data-name="Button">
                            <div className="ba-c97c8fe2d2" data-node-id="40:12422" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer24} />
                            </div>
                          </div>
                          <div className="ba-31cae755f8" data-node-id="40:12424" data-name="Button">
                            <div className="ba-c0d2692864" data-node-id="40:12425" data-name="Container">
                              <img alt="" className="ba-8faf267d30" src={imgContainer18} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-0c3eb02f12" data-node-id="40:12427" data-name="Table Pagination Footer">
              <div className="ba-761294a800">
                <div className="ba-d452ad70ec" data-node-id="40:12428" data-name="Container">
                  <div className="ba-d85f0a0f5e">
                    <div className="ba-39ca0321a1" data-node-id="40:12429" data-name="Container">
                      <div className="ba-73820a4170" data-node-id="40:12430">
                        <p className="ba-bf919b50f6">Hiển thị</p>
                      </div>
                    </div>
                    <div className="ba-cda2cc543f" data-node-id="40:12431" data-name="Options" data-field-hints="">
                      <div className="ba-d452ad70ec" data-node-id="40:12432" data-name="Container">
                        <div className="ba-c25d905fd2">
                          <div className="ba-df18ffb03a" data-node-id="40:12433">
                            <p className="ba-1b6a18879c">20</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="40:12434" data-name="Container">
                      <div className="ba-73820a4170" data-node-id="40:12435">
                        <p className="ba-bf919b50f6">bản ghi mỗi trang</p>
                      </div>
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="40:12436" data-name="Container">
                      <div className="ba-92b02279e2" data-node-id="40:12437">
                        <p className="ba-bf919b50f6">|</p>
                      </div>
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="40:12438" data-name="Container">
                      <div className="ba-df18ffb03a" data-node-id="40:12439">
                        <p className="ba-bf919b50f6">Hiển thị 1–20 trên 247 bản ghi</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-d452ad70ec" data-node-id="40:12440" data-name="Nav - Phân trang">
                  <div className="ba-bbe7baeddc">
                    <div className="ba-b96cef6f20" data-node-id="40:12441" data-name="Button">
                      <div className="ba-a4bca39163" data-node-id="40:12442" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer25} />
                      </div>
                    </div>
                    <div className="ba-b96cef6f20" data-node-id="40:12444" data-name="Button">
                      <div className="ba-7ec7ac8b0d" data-node-id="40:12445" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer26} />
                      </div>
                    </div>
                    <div className="ba-c4cf5e5400" data-node-id="40:12447" data-name="Button">
                      <div className="ba-9bd3d6efa7" data-node-id="40:12448">
                        <p className="ba-bf919b50f6">1</p>
                      </div>
                    </div>
                    <div className="ba-065da07950" data-node-id="40:12449" data-name="Button">
                      <div className="ba-90bd582a61" data-node-id="40:12450">
                        <p className="ba-bf919b50f6">2</p>
                      </div>
                    </div>
                    <div className="ba-065da07950" data-node-id="40:12451" data-name="Button">
                      <div className="ba-90bd582a61" data-node-id="40:12452">
                        <p className="ba-bf919b50f6">3</p>
                      </div>
                    </div>
                    <div className="ba-a452c11bd2" data-node-id="40:12453" data-name="Container">
                      <div className="ba-18f951ca5b" data-node-id="40:12454">
                        <p className="ba-76aad9ca0a">...</p>
                      </div>
                    </div>
                    <div className="ba-065da07950" data-node-id="40:12455" data-name="Button">
                      <div className="ba-90bd582a61" data-node-id="40:12456">
                        <p className="ba-bf919b50f6">13</p>
                      </div>
                    </div>
                    <div className="ba-0df533aec2" data-node-id="40:12457" data-name="Button">
                      <div className="ba-7ec7ac8b0d" data-node-id="40:12458" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer27} />
                      </div>
                    </div>
                    <div className="ba-0df533aec2" data-node-id="40:12460" data-name="Button">
                      <div className="ba-a4bca39163" data-node-id="40:12461" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer28} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-9bbb452a7f" data-node-id="40:12463" data-name="Header">
        <div className="ba-d452ad70ec" data-node-id="40:12464" data-name="Container">
          <div className="ba-bbe7baeddc">
            <div className="ba-39ca0321a1" data-node-id="40:12465" data-name="Link">
              <div className="ba-73820a4170" data-node-id="40:12466">
                <p className="ba-bf919b50f6">Trang chủ</p>
              </div>
            </div>
            <div className="ba-0dbdb9e0f7" data-node-id="40:12467" data-name="Container">
              <img alt="" className="ba-8faf267d30" src={imgContainer29} />
            </div>
            <div className="ba-39ca0321a1" data-node-id="40:12469" data-name="Link">
              <div className="ba-73820a4170" data-node-id="40:12470">
                <p className="ba-bf919b50f6">Quản lý tài sản</p>
              </div>
            </div>
            <div className="ba-0dbdb9e0f7" data-node-id="40:12471" data-name="Container">
              <img alt="" className="ba-8faf267d30" src={imgContainer29} />
            </div>
            <div className="ba-39ca0321a1" data-node-id="40:12473" data-name="Container">
              <div className="ba-df18ffb03a" data-node-id="40:12474">
                <p className="ba-bf919b50f6">Danh sách tài sản</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-d452ad70ec" data-node-id="40:12475" data-name="Container">
          <div className="ba-244c842be0">
            <div className="ba-e8210ba625" data-node-id="40:12476" data-name="Container">
              <div className="ba-148fb4d559" data-node-id="40:12477" data-name="Input" data-field-hints="">
                <div className="ba-67366dcb7c" data-node-id="40:12478" data-name="Container">
                  <div className="ba-09c6898323">
                    <div className="ba-eae6c1d9d6" data-node-id="40:12479">
                      <p className="ba-32bd4c7660">Tìm kiếm nhanh tài sản...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-b5342f5a83" data-node-id="40:12480" data-name="Icon">
                <img alt="" className="ba-8faf267d30" src={imgIcon1} />
              </div>
            </div>
            <div className="ba-adf912547c" data-node-id="40:12481" data-name="Button - Thông báo">
              <div className="ba-b88463e588" data-node-id="40:12482" data-name="Container">
                <img alt="" className="ba-8faf267d30" src={imgContainer30} />
              </div>
              <div className="ba-c808de177b" data-node-id="40:12484" data-name="Background">
                <div className="ba-0b2d9fc41b" data-node-id="40:12485">
                  <p className="ba-1b6a18879c">3</p>
                </div>
              </div>
            </div>
            <div className="ba-adf912547c" data-node-id="40:12486" data-name="Button - Trợ giúp">
              <div className="ba-6561bd9151" data-node-id="40:12487" data-name="Container">
                <img alt="" className="ba-8faf267d30" src={imgContainer31} />
              </div>
            </div>
            <div className="ba-100ca17654" data-node-id="40:12489" data-name="Vertical Divider" />
            <div className="ba-9eae8902b4" data-node-id="40:12490" data-name="Container">
              <div className="ba-e5f422648d" data-node-id="40:12491" data-name="Background">
                <div className="ba-8a0ff48924" data-node-id="40:12492" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer32} />
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="40:12494" data-name="Container">
                <div className="ba-153c0a1809" data-node-id="40:12495" data-name="Container">
                  <div className="ba-cd3f9b7aa8" data-node-id="40:12496">
                    <p className="ba-080b7c55f9">Nguyễn Văn An</p>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="40:12497" data-name="Container">
                  <div className="ba-73820a4170" data-node-id="40:12498">
                    <p className="ba-1b6a18879c">Nhân viên QLTS</p>
                  </div>
                </div>
              </div>
              <div className="ba-3d39f28566" data-node-id="40:12499" data-name="Container">
                <img alt="" className="ba-8faf267d30" src={imgContainer33} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-c6e32eaa27" data-node-id="40:12501" data-name="Aside">
        <div className="ba-67366dcb7c" data-node-id="40:12502" data-name="Container">
          <div className="ba-4ed85d2730">
            <div className="ba-009c993968" data-node-id="40:12503" data-name="Margin">
              <div className="ba-a37cb2f707" data-node-id="40:12504" data-name="Container">
                <div className="ba-0b496d0988" data-node-id="40:12505" data-name="QLTS Logo">
                  <div className="ba-fb97e384f1">
                    <img alt="" className="ba-3407971055" src={imgQltsLogo} />
                  </div>
                </div>
                <div className="ba-55a8c62265" data-node-id="40:12506" data-name="Container">
                  <div className="ba-e0822dd18c" data-node-id="40:12507" data-name="Container">
                    <div className="ba-bdaf12a71f" data-node-id="40:12508">
                      <p className="ba-5f33bcd61f">QLTS</p>
                    </div>
                  </div>
                  <div className="ba-9ad1c5c501" data-node-id="40:12509" data-name="Container">
                    <div className="ba-92b02279e2" data-node-id="40:12510">
                      <p className="ba-bf919b50f6">Quản Lý Tài Sản</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-f737562fde" data-node-id="40:12511" data-name="Nav">
              <div className="ba-557153ff70" data-node-id="40:12512" data-name="Link">
                <div className="ba-b784803253" data-node-id="40:12513" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer34} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:12515" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:12516">
                    <p className="ba-efcc9af6d1">Tổng quan</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:12517" data-name="Link">
                <div className="ba-0e5557a34c" data-node-id="40:12518" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer35} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:12520" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:12521">
                    <p className="ba-efcc9af6d1">Quản lý tài sản</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:12522" data-name="Link">
                <div className="ba-8d9eb16724" data-node-id="40:12523" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer36} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:12525" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:12526">
                    <p className="ba-efcc9af6d1">Cấp phát</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:12527" data-name="Link">
                <div className="ba-64dfebc1ac" data-node-id="40:12528" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer37} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:12530" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:12531">
                    <p className="ba-efcc9af6d1">Điều chuyển</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:12532" data-name="Link">
                <div className="ba-b784803253" data-node-id="40:12533" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer38} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:12535" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:12536">
                    <p className="ba-efcc9af6d1">Bảo trì</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:12537" data-name="Link">
                <div className="ba-64dfebc1ac" data-node-id="40:12538" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer39} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:12540" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:12541">
                    <p className="ba-efcc9af6d1">Kiểm kê</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:12542" data-name="Link">
                <div className="ba-b784803253" data-node-id="40:12543" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer40} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:12545" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:12546">
                    <p className="ba-efcc9af6d1">Thanh lý</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:12547" data-name="Link">
                <div className="ba-c74d3ef2d9" data-node-id="40:12548" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer41} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:12550" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:12551">
                    <p className="ba-efcc9af6d1">Báo cáo</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:12552" data-name="Link">
                <div className="ba-2acf92dda9" data-node-id="40:12553" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer42} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:12555" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:12556">
                    <p className="ba-efcc9af6d1">Quản trị</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-b55647e14b" data-node-id="40:12557" data-name="HorizontalBorder">
          <div className="ba-a725867360">
            <div className="ba-67366dcb7c" data-node-id="40:12558" data-name="Container">
              <div className="ba-4ed85d2730">
                <div className="ba-1d6344f4d0" data-node-id="40:12559">
                  <p className="ba-bf919b50f6">v2.4.0 Enterprise</p>
                </div>
              </div>
            </div>
            <div className="ba-67366dcb7c" data-node-id="40:12560" data-name="Container">
              <div className="ba-4ed85d2730">
                <div className="ba-7523cf9e1d" data-node-id="40:12561">
                  <p className="ba-bf919b50f6">© 2024 QLTS Corporation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-041cb11cfe" data-node-id="40:12562" data-name="Status - Floating Toast Notification (Level 4 Elevation - Success State)">
        <div className="ba-f7e6c49286" data-node-id="40:12563" data-name="Status - Floating Toast Notification (Level 4 Elevation - Success State):shadow" />
        <div className="ba-8e5c2d3d71" data-node-id="40:12564" data-name="Overlay">
          <div className="ba-f24af748b4">
            <div className="ba-0e5557a34c" data-node-id="40:12565" data-name="Container">
              <img alt="" className="ba-8faf267d30" src={imgContainer43} />
            </div>
          </div>
        </div>
        <div className="ba-d452ad70ec" data-node-id="40:12567" data-name="Container">
          <div className="ba-477f405a52">
            <div className="ba-fc2bbc1ac8" data-node-id="40:12568" data-name="Container">
              <div className="ba-39ca0321a1" data-node-id="40:12569" data-name="Container">
                <div className="ba-eaf0679d4e" data-node-id="40:12570">
                  <p className="ba-efcc9af6d1">Đã xóa tài sản</p>
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="40:12571" data-name="Container">
                <div className="ba-73820a4170" data-node-id="40:12572">
                  <p className="ba-bf919b50f6">• Vừa xong</p>
                </div>
              </div>
            </div>
            <div className="ba-ce4c845bed" data-node-id="40:12573" data-name="Margin">
              <div className="ba-6b5f306d6c" data-node-id="40:12574" data-name="Container">
                <div className="ba-1cadd5face" data-node-id="40:12575">
                  <p className="ba-5a4fd449fe">
                    <span className="ba-e9e8a40ea4">{`Tài sản `}</span>
                    <span className="ba-aae28f2598">TS-FUR-2026-00087</span>
                    <span className="ba-e9e8a40ea4">{` đã được chuyển vào mục`}</span>
                  </p>
                  <p className="ba-e9e8a40ea4">lưu trữ đã xóa thành công.</p>
                </div>
              </div>
            </div>
            <div className="ba-6f61d99fdb" data-node-id="40:12576" data-name="Margin">
              <div className="ba-f913b1a7dc" data-node-id="40:12577" data-name="Container">
                <div className="ba-9a54db74c4" data-node-id="40:12578" data-name="Button">
                  <div className="ba-9021357745" data-node-id="40:12579" data-name="Container">
                    <div className="ba-e678671df5" data-node-id="40:12580">
                      <p className="ba-bf919b50f6">Xem thùng rác</p>
                    </div>
                  </div>
                  <div className="ba-3533a420ee" data-node-id="40:12581" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer44} />
                  </div>
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:12583" data-name="Container">
                  <div className="ba-b17f4151ae" data-node-id="40:12584">
                    <p className="ba-1b6a18879c">|</p>
                  </div>
                </div>
                <div className="ba-03d41414ac" data-node-id="40:12585" data-name="Button">
                  <div className="ba-7cf3433fd6" data-node-id="40:12586">
                    <p className="ba-bf919b50f6">Hoàn tác (10s)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-4efab29a13" data-node-id="40:12587" data-name="Button - Đóng thông báo">
          <div className="ba-7cdd87dc50">
            <div className="ba-0082061c23" data-node-id="40:12588" data-name="Container">
              <img alt="" className="ba-8faf267d30" src={imgContainer45} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
