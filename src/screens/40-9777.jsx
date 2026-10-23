/** Screen 40:9777 — Danh sách tài sản - Quyền chỉ xem và in QR (State C). Presentation adapted from Figma. */
import { h } from "../design-runtime.jsx";
const imgQltsLogo = "/assets/238383a8-623f-43cb-98f2-f810af25742f.png";
const imgContainer = "/assets/28d1a9de-044e-4936-bdc0-3169442d70c1.svg";
const imgContainer1 = "/assets/b92c609b-ebbb-40e7-a5e5-59e8d277a2b7.svg";
const imgContainer2 = "/assets/d3b47f4b-2216-4532-b75d-db475f61cfe0.svg";
const imgContainer3 = "/assets/c9887061-d72a-461c-9166-5dc44f5cb4ac.svg";
const imgContainer4 = "/assets/231d47ab-9f4c-4aba-97d3-f2b0f5b495a4.svg";
const imgContainer5 = "/assets/8a26f7d2-075e-4f7d-beb8-79dd5bc5ba04.svg";
const imgContainer6 = "/assets/d1a850b1-9faa-400a-bcc3-e708e71f15a0.svg";
const imgIcon = "/assets/6ad75d7b-3373-4a52-9330-f045740f5c4d.svg";
const imgIcon1 = "/assets/97e83423-d061-434d-814c-2d7fdbfd1946.svg";
const imgContainer7 = "/assets/ead73278-9cf3-4eef-bb72-4d21fee8f501.svg";
const imgIcon2 = "/assets/996862db-59e1-4453-a068-2ab511684602.svg";
const imgIcon3 = "/assets/ca99b238-40bb-418f-b461-76b22198a7f6.svg";
const imgContainer8 = "/assets/46675ba8-74c8-48d6-821b-83ad12d33c9b.svg";
const imgContainer9 = "/assets/0b64c725-9f40-476a-bfc5-4a5212854d88.svg";
const imgContainer10 = "/assets/9cb2250b-3283-4023-8ec6-e8cd6dd2a7dc.svg";
const imgContainer11 = "/assets/92b308d4-a05c-4b86-92e5-ec17312ca7bd.svg";
const imgContainer12 = "/assets/4f8b08f5-5adc-4fc3-8783-ed0dbe8ed08a.svg";
const imgContainer13 = "/assets/1282e21d-20c4-4656-a904-6b189a886e01.svg";
const imgContainer14 = "/assets/5db7064c-b511-4b4a-8f8d-3ca7a785f5fd.svg";
const imgContainer15 = "/assets/96c30b84-a1a2-47f4-95fc-06f5a9f9e2cd.svg";
const imgContainer16 = "/assets/b1778782-dc9a-4513-a1f3-dc8b6cf8921a.svg";
const imgContainer17 = "/assets/740e0306-caf9-4396-9e06-677c377d69aa.svg";
const imgContainer18 = "/assets/3caafb6c-396e-4c87-be40-6fb73a728c0b.svg";
const imgContainer19 = "/assets/f8965873-a9b6-4dc7-9f03-cb5267e38da4.svg";
const imgContainer20 = "/assets/1ca3c2fa-2c36-4917-9d19-e44798f66900.svg";
const imgContainer21 = "/assets/07f16c81-d830-4e42-83c5-80ed44d77c56.svg";
const imgContainer22 = "/assets/d54e8353-5bd3-44ec-879e-cd574641dbe0.svg";
const imgContainer23 = "/assets/6fdbe7a8-2d74-4bd5-ae7c-7c561855800d.svg";
const imgContainer24 = "/assets/8f41b988-e155-4e8a-b7af-a08950a4c970.svg";
const imgContainer25 = "/assets/2539acfe-d564-4e7a-bf75-05d70cff03ed.svg";
const imgContainer26 = "/assets/c403f66e-7a54-4a34-9b52-4f873c8e1b14.svg";
const imgContainer27 = "/assets/7d0b159a-dc38-4586-8693-50698894282d.svg";
const imgContainer28 = "/assets/ece0b493-1163-4ef3-8c4b-d8f0264ae32d.svg";
const imgContainer29 = "/assets/2fce6c5e-374a-43a2-90a3-2e8a86b30f23.svg";
const imgContainer30 = "/assets/a18baa10-8687-4dc4-abcc-5b4bc8a38e56.svg";
const imgContainer31 = "/assets/42f21e99-832a-4abb-8517-9c30c5c2e3aa.svg";
const imgContainer32 = "/assets/9ef8f724-9f62-4856-9192-aac3b79e5a22.svg";
const imgContainer33 = "/assets/058415aa-08d9-404d-b35b-3481e026a440.svg";

export default function DanhSachTaiSnQuynChXemVaInQrStateC() {
  return (
    <div className="ba-73b1803b70" data-node-id="40:9777" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Danh sách tài sản - Quyền chỉ xem và in QR (State C)">
      <div className="ba-a542ee762d" data-node-id="40:9778" data-name="Main">
        <div className="ba-153c0a1809" data-node-id="40:9779" data-name="Container">
          <div className="ba-9b32794cdf" data-node-id="40:9780" data-name="Subtle Notice Banner for Read-only Access State:margin">
            <div className="ba-4286f83a4b" data-node-id="40:9781" data-name="Subtle Notice Banner for Read-only Access State">
              <div className="ba-9eae8902b4" data-node-id="40:9782" data-name="Container">
                <div className="ba-dba18f8fcf" data-node-id="40:9783" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer} />
                </div>
                <div className="ba-370eb179df" data-node-id="40:9785" data-name="Container">
                  <div className="ba-73820a4170" data-node-id="40:9786">
                    <p className="ba-5a4fd449fe">
                      <span className="ba-bf919b50f6">{`Tài khoản phân quyền: `}</span>
                      <span className="ba-d7c32c0359">{`Nhân viên QLTS (Chỉ xem & Tra cứu)`}</span>
                      <span className="ba-bf919b50f6">. Chức năng tạo mới, hiệu chỉnh hoặc xóa dữ liệu bị vô hiệu hóa theo chính sách bảo mật</span>
                    </p>
                    <p className="ba-bf919b50f6">nội bộ.</p>
                  </div>
                </div>
              </div>
              <div className="ba-5d9effcfb8" data-node-id="40:9787" data-name="Background">
                <div className="ba-7bab7780cf" data-node-id="40:9788">
                  <p className="ba-9d0b9e8d4b">CHẾ ĐỘ</p>
                  <p className="ba-e9e8a40ea4">XEM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-009c993968" data-node-id="40:9789" data-name="Page Header (NO '+ Thêm mới tài sản' button):margin">
            <div className="ba-c96fe10678" data-node-id="40:9790" data-name="Page Header (NO '+ Thêm mới tài sản' button)">
              <div className="ba-39ca0321a1" data-node-id="40:9791" data-name="Container">
                <div className="ba-df264a64f2" data-node-id="40:9792" data-name="Container">
                  <div className="ba-39ca0321a1" data-node-id="40:9793" data-name="Heading 1">
                    <div className="ba-29a97d689a" data-node-id="40:9794">
                      <p className="ba-a0118ea47e">Danh sách tài sản</p>
                    </div>
                  </div>
                  <div className="ba-30ab5b1a18" data-node-id="40:9795" data-name="Background">
                    <div className="ba-8ed656b6ec" data-node-id="40:9796">
                      <p className="ba-bf919b50f6">248 mục</p>
                    </div>
                  </div>
                </div>
                <div className="ba-6f61d99fdb" data-node-id="40:9797" data-name="Margin">
                  <div className="ba-153c0a1809" data-node-id="40:9798" data-name="Container">
                    <div className="ba-0ffaaa5e85" data-node-id="40:9799">
                      <p className="ba-bf919b50f6">Tổng số: 248 tài sản • Quản lý định danh, tình trạng vòng đời, cấp phát và hồ sơ thiết bị toàn viện</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-64febdaf12" data-node-id="40:9800" data-name="Header Action Buttons: Explicitly NO New/Create Button">
                <div className="ba-bef06c8670" data-node-id="40:9801" data-name="Button">
                  <div className="ba-8a0ff48924" data-node-id="40:9802" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer1} />
                  </div>
                  <div className="ba-9021357745" data-node-id="40:9804" data-name="Container">
                    <div className="ba-eee0a3fbb7" data-node-id="40:9805">
                      <p className="ba-efcc9af6d1">Xuất Excel</p>
                    </div>
                  </div>
                </div>
                <div className="ba-bef06c8670" data-node-id="40:9806" data-name="Button">
                  <div className="ba-b784803253" data-node-id="40:9807" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer2} />
                  </div>
                  <div className="ba-9021357745" data-node-id="40:9809" data-name="Container">
                    <div className="ba-ac16a1a656" data-node-id="40:9810">
                      <p className="ba-efcc9af6d1">In mã QR hàng loạt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-009c993968" data-node-id="40:9811" data-name="Quick Lifecycle KPI Summary Strip:margin">
            <div className="ba-1a9dbaca21" data-node-id="40:9812" data-name="Quick Lifecycle KPI Summary Strip">
              <div className="ba-ba594ec86e" data-node-id="40:9813" data-name="Background+Shadow">
                <div className="ba-39ca0321a1" data-node-id="40:9814" data-name="Container">
                  <div className="ba-153c0a1809" data-node-id="40:9815" data-name="Container">
                    <div className="ba-77f40fa01d" data-node-id="40:9816">
                      <p className="ba-bf919b50f6">ĐANG SỬ DỤNG</p>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:9817" data-name="Margin">
                    <div className="ba-153c0a1809" data-node-id="40:9818" data-name="Container">
                      <div className="ba-5cfceeb71a" data-node-id="40:9819">
                        <p className="ba-a0118ea47e">182</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-1c13e42c70" data-node-id="40:9820" data-name="Background">
                  <div className="ba-6561bd9151" data-node-id="40:9821" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer3} />
                  </div>
                </div>
              </div>
              <div className="ba-ba594ec86e" data-node-id="40:9823" data-name="Background+Shadow">
                <div className="ba-39ca0321a1" data-node-id="40:9824" data-name="Container">
                  <div className="ba-153c0a1809" data-node-id="40:9825" data-name="Container">
                    <div className="ba-77f40fa01d" data-node-id="40:9826">
                      <p className="ba-bf919b50f6">CHƯA CẤP PHÁT</p>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:9827" data-name="Margin">
                    <div className="ba-153c0a1809" data-node-id="40:9828" data-name="Container">
                      <div className="ba-5cfceeb71a" data-node-id="40:9829">
                        <p className="ba-a0118ea47e">45</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-ba3f2be4c5" data-node-id="40:9830" data-name="Background">
                  <div className="ba-2acdb214d2" data-node-id="40:9831" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer4} />
                  </div>
                </div>
              </div>
              <div className="ba-ba594ec86e" data-node-id="40:9833" data-name="Background+Shadow">
                <div className="ba-39ca0321a1" data-node-id="40:9834" data-name="Container">
                  <div className="ba-153c0a1809" data-node-id="40:9835" data-name="Container">
                    <div className="ba-77f40fa01d" data-node-id="40:9836">
                      <p className="ba-bf919b50f6">ĐÃ THANH LÝ</p>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:9837" data-name="Margin">
                    <div className="ba-153c0a1809" data-node-id="40:9838" data-name="Container">
                      <div className="ba-5cfceeb71a" data-node-id="40:9839">
                        <p className="ba-a0118ea47e">17</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-fc3ca40829" data-node-id="40:9840" data-name="Overlay">
                  <div className="ba-d8ba86efb3" data-node-id="40:9841" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer5} />
                  </div>
                </div>
              </div>
              <div className="ba-79bed44844" data-node-id="40:9843" data-name="Background+Shadow">
                <div className="ba-39ca0321a1" data-node-id="40:9844" data-name="Container">
                  <div className="ba-153c0a1809" data-node-id="40:9845" data-name="Container">
                    <div className="ba-77f40fa01d" data-node-id="40:9846">
                      <p className="ba-bf919b50f6">TỔNG GIÁ TRỊ ĐỊNH MỨC</p>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:9847" data-name="Margin">
                    <div className="ba-153c0a1809" data-node-id="40:9848" data-name="Container">
                      <div className="ba-3a295e4c8c" data-node-id="40:9849">
                        <p className="ba-6b319aafdd">3.480.000.000 ₫</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-1c13e42c70" data-node-id="40:9850" data-name="Background">
                  <div className="ba-79a583a788" data-node-id="40:9851" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer6} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-009c993968" data-node-id="40:9853" data-name="Filter Card:margin">
            <div className="ba-0bf33f89a0" data-node-id="40:9854" data-name="Filter Card">
              <div className="ba-1a9dbaca21" data-node-id="40:9855" data-name="Container">
                <div className="ba-1e0456ea49" data-node-id="40:9856" data-name="Search Keyword">
                  <div className="ba-153c0a1809" data-node-id="40:9857" data-name="Label">
                    <div className="ba-c0a2253b54" data-node-id="40:9858">
                      <p className="ba-bf919b50f6">Từ khóa tìm kiếm</p>
                    </div>
                  </div>
                  <div className="ba-63d16fb724" data-node-id="40:9859" data-name="Container">
                    <div className="ba-bb82d5a703" data-node-id="40:9860" data-name="Input" data-field-hints="">
                      <div className="ba-c475d979ca" data-node-id="40:9861" data-name="Container">
                        <div className="ba-cba26a844b" data-node-id="40:9862">
                          <p className="ba-32bd4c7660">Mã tài sản, tên, serial, phòng ban...</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-0992c6488e" data-node-id="40:9863" data-name="Icon">
                      <img alt="" className="ba-8faf267d30" src={imgIcon} />
                    </div>
                  </div>
                </div>
                <div className="ba-1e0456ea49" data-node-id="40:9864" data-name="Category Filter">
                  <div className="ba-153c0a1809" data-node-id="40:9865" data-name="Label">
                    <div className="ba-c0a2253b54" data-node-id="40:9866">
                      <p className="ba-bf919b50f6">Danh mục</p>
                    </div>
                  </div>
                  <div className="ba-63d16fb724" data-node-id="40:9867" data-name="Container">
                    <div className="ba-8eb5190831" data-node-id="40:9868" data-name="Options" data-field-hints="">
                      <div className="ba-153c0a1809" data-node-id="40:9869" data-name="Container">
                        <div className="ba-3ab3284779" data-node-id="40:9870">
                          <p className="ba-efcc9af6d1">Tất cả danh mục</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-9cc4844672" data-node-id="40:9871" data-name="Icon">
                      <img alt="" className="ba-8faf267d30" src={imgIcon1} />
                    </div>
                    <div className="ba-c0ff714558" data-node-id="40:9872" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer7} />
                    </div>
                  </div>
                </div>
                <div className="ba-1e0456ea49" data-node-id="40:9874" data-name="Lifecycle Status Filter">
                  <div className="ba-153c0a1809" data-node-id="40:9875" data-name="Label">
                    <div className="ba-c0a2253b54" data-node-id="40:9876">
                      <p className="ba-bf919b50f6">Trạng thái</p>
                    </div>
                  </div>
                  <div className="ba-63d16fb724" data-node-id="40:9877" data-name="Container">
                    <div className="ba-8eb5190831" data-node-id="40:9878" data-name="Options" data-field-hints="">
                      <div className="ba-153c0a1809" data-node-id="40:9879" data-name="Container">
                        <div className="ba-3ab3284779" data-node-id="40:9880">
                          <p className="ba-efcc9af6d1">Tất cả trạng thái</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-0992c6488e" data-node-id="40:9881" data-name="Icon">
                      <img alt="" className="ba-8faf267d30" src={imgIcon2} />
                    </div>
                    <div className="ba-c0ff714558" data-node-id="40:9882" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer7} />
                    </div>
                  </div>
                </div>
                <div className="ba-1e0456ea49" data-node-id="40:9884" data-name="Date Range Filter">
                  <div className="ba-153c0a1809" data-node-id="40:9885" data-name="Label">
                    <div className="ba-c0a2253b54" data-node-id="40:9886">
                      <p className="ba-bf919b50f6">Khoảng ngày tạo / tiếp nhận</p>
                    </div>
                  </div>
                  <div className="ba-63d16fb724" data-node-id="40:9887" data-name="Container">
                    <div className="ba-bb82d5a703" data-node-id="40:9888" data-name="Input" data-field-hints="">
                      <div className="ba-c475d979ca" data-node-id="40:9889" data-name="Container">
                        <div className="ba-1277d79d31" data-node-id="40:9890">
                          <p className="ba-32bd4c7660">01/01/2026 - 31/12/2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-b3b2ded11b" data-node-id="40:9891" data-name="Icon">
                      <img alt="" className="ba-8faf267d30" src={imgIcon3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-9295463a4a" data-node-id="40:9892" data-name="Filter Actions & Secondary Toggle">
                <div className="ba-9eae8902b4" data-node-id="40:9893" data-name="Label">
                  <div className="ba-0d07265000" data-node-id="40:9894" data-name="Input" data-field-hints="check " />
                  <div className="ba-39ca0321a1" data-node-id="40:9895" data-name="Container">
                    <div className="ba-73820a4170" data-node-id="40:9896">
                      <p className="ba-bf919b50f6">Hiển thị cả tài sản đã xóa</p>
                    </div>
                  </div>
                </div>
                <div className="ba-f347fe4af4" data-node-id="40:9897" data-name="Container">
                  <div className="ba-ce98d57c8b" data-node-id="40:9898" data-name="Button">
                    <div className="ba-d0e28ebaa6" data-node-id="40:9899" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer8} />
                    </div>
                    <div className="ba-9021357745" data-node-id="40:9901" data-name="Container">
                      <div className="ba-39efc03e11" data-node-id="40:9902">
                        <p className="ba-efcc9af6d1">Xóa bộ lọc</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-4339f8d94d" data-node-id="40:9903" data-name="Button">
                    <div className="ba-97e8208e5c" data-node-id="40:9904" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer9} />
                    </div>
                    <div className="ba-9021357745" data-node-id="40:9906" data-name="Container">
                      <div className="ba-4b42a60017" data-node-id="40:9907">
                        <p className="ba-efcc9af6d1">Tìm kiếm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-ae800a5576" data-node-id="40:9908" data-name="Asset Table Card">
            <div className="ba-106c224dfb" data-node-id="40:9909" data-name="Table">
              <div className="ba-66fe33b3df" data-node-id="40:9910" data-name="Table Header → Row">
                <div className="ba-fd381b90fc" data-node-id="40:9911" data-name="Cell">
                  <div className="ba-0d07265000" data-node-id="40:9912" data-name="Input" data-field-hints="check " />
                </div>
                <div className="ba-f332f7de33" data-node-id="40:9913" data-name="Cell">
                  <div className="ba-1ad2633a25" data-node-id="40:9914">
                    <p className="ba-8a3ede2ed5">MÃ TÀI</p>
                    <p className="ba-e32ac1aeb2">SẢN</p>
                  </div>
                </div>
                <div className="ba-809020abac" data-node-id="40:9915" data-name="Cell">
                  <div className="ba-1ad2633a25" data-node-id="40:9916">
                    <p className="ba-e32ac1aeb2">TÊN TÀI SẢN</p>
                  </div>
                </div>
                <div className="ba-3398329ea8" data-node-id="40:9917" data-name="Cell">
                  <div className="ba-1ad2633a25" data-node-id="40:9918">
                    <p className="ba-e32ac1aeb2">DANH MỤC</p>
                  </div>
                </div>
                <div className="ba-e0d7606605" data-node-id="40:9919" data-name="Cell">
                  <div className="ba-1ad2633a25" data-node-id="40:9920">
                    <p className="ba-e32ac1aeb2">SỐ SERIAL</p>
                  </div>
                </div>
                <div className="ba-90fdfbbec5" data-node-id="40:9921" data-name="Cell">
                  <div className="ba-1ad2633a25" data-node-id="40:9922">
                    <p className="ba-8a3ede2ed5">TRẠNG</p>
                    <p className="ba-e32ac1aeb2">THÁI</p>
                  </div>
                </div>
                <div className="ba-b0c4589f18" data-node-id="40:9923" data-name="Cell">
                  <div className="ba-1ad2633a25" data-node-id="40:9924">
                    <p className="ba-8a3ede2ed5">NGÀY</p>
                    <p className="ba-e32ac1aeb2">TẠO</p>
                  </div>
                </div>
                <div className="ba-70d95cb51d" data-node-id="40:9925" data-name="Cell">
                  <div className="ba-1ad2633a25" data-node-id="40:9926">
                    <p className="ba-8a3ede2ed5">NGƯỜI</p>
                    <p className="ba-e32ac1aeb2">TẠO</p>
                  </div>
                </div>
                <div className="ba-675097e4ea" data-node-id="40:9927" data-name="Cell">
                  <div className="ba-f7b0eb45d3" data-node-id="40:9928">
                    <p className="ba-8a3ede2ed5">TỆP</p>
                    <p className="ba-8a3ede2ed5">ĐÍNH</p>
                    <p className="ba-e32ac1aeb2">KÈM</p>
                  </div>
                </div>
                <div className="ba-7290175a04" data-node-id="40:9929" data-name="Cell - Thao tác: strictly no edit or delete icons">
                  <div className="ba-f7b0eb45d3" data-node-id="40:9930">
                    <p className="ba-8a3ede2ed5">THAO</p>
                    <p className="ba-e32ac1aeb2">TÁC</p>
                  </div>
                </div>
              </div>
              <div className="ba-153c0a1809" data-node-id="40:9931" data-name="Table Body">
                <div className="ba-56c053f05d" data-node-id="40:9932" data-name="Row 1">
                  <div className="ba-241fdebfdc" data-node-id="40:9933" data-name="Data">
                    <div className="ba-0d07265000" data-node-id="40:9934" data-name="Input" data-field-hints="check " />
                  </div>
                  <div className="ba-c0087de02e" data-node-id="40:9935" data-name="Data">
                    <div className="ba-40b11d8495" data-node-id="40:9936">
                      <p className="ba-8a3ede2ed5">TS-LAP-</p>
                      <p className="ba-8a3ede2ed5">2026-</p>
                      <p className="ba-e32ac1aeb2">00012</p>
                    </div>
                  </div>
                  <div className="ba-08ca51e63d" data-node-id="40:9937" data-name="Data">
                    <div className="ba-153c0a1809" data-node-id="40:9938" data-name="Container">
                      <div className="ba-3bbb063dae" data-node-id="40:9939">
                        <p className="ba-8a3ede2ed5">Laptop Dell</p>
                        <p className="ba-8a3ede2ed5">Latitude 7440 Core</p>
                        <p className="ba-e32ac1aeb2">i7</p>
                      </div>
                    </div>
                    <div className="ba-153c0a1809" data-node-id="40:9940" data-name="Container">
                      <div className="ba-5f0fcc3a35" data-node-id="40:9941">
                        <p className="ba-8a3ede2ed5">Phòng Kế toán - Tầng</p>
                        <p className="ba-e32ac1aeb2">4</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-6e3ba387d3" data-node-id="40:9942" data-name="Data">
                    <div className="ba-3536005f7f" data-node-id="40:9943" data-name="Container">
                      <div className="ba-327509c50a" data-node-id="40:9944" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer10} />
                      </div>
                      <div className="ba-efd201e877" data-node-id="40:9946" data-name="Container">
                        <div className="ba-4053065f4f" data-node-id="40:9947">
                          <p className="ba-8a3ede2ed5">Máy tính</p>
                          <p className="ba-e32ac1aeb2">xách tay</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-d6ca5d49a8" data-node-id="40:9948" data-name="Data">
                    <div className="ba-83e9db92e9" data-node-id="40:9949">
                      <p className="ba-8a3ede2ed5">DL-7440-</p>
                      <p className="ba-e32ac1aeb2">K9812A</p>
                    </div>
                  </div>
                  <div className="ba-29f6c6e160" data-node-id="40:9950" data-name="Data">
                    <div className="ba-01992bfb22" data-node-id="40:9951" data-name="Background">
                      <div className="ba-cca048a771" data-node-id="40:9952" data-name="Background" />
                      <div className="ba-b6b1c90686" data-node-id="40:9953" data-name="Container">
                        <div className="ba-a1ea8385dd" data-node-id="40:9954">
                          <p className="ba-c22b989642">Đang sử</p>
                          <p className="ba-bf919b50f6">dụng</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-6b8c5006c9" data-node-id="40:9955" data-name="Data">
                    <div className="ba-4053065f4f" data-node-id="40:9956">
                      <p className="ba-e32ac1aeb2">15/01/2026</p>
                    </div>
                  </div>
                  <div className="ba-e5ff213080" data-node-id="40:9957" data-name="Data">
                    <div className="ba-f6e9dbdd51" data-node-id="40:9958">
                      <p className="ba-8a3ede2ed5">Trần Hữu</p>
                      <p className="ba-e32ac1aeb2">Nam</p>
                    </div>
                  </div>
                  <div className="ba-8ba5d0cb43" data-node-id="40:9959" data-name="Data">
                    <div className="ba-bee0d685fc" data-node-id="40:9960" data-name="Button">
                      <div className="ba-a2495991bf" data-node-id="40:9961" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer11} />
                      </div>
                      <div className="ba-de6d3021ed" data-node-id="40:9963" data-name="Margin">
                        <div className="ba-9021357745" data-node-id="40:9964" data-name="Container">
                          <div className="ba-77fcca7c73" data-node-id="40:9965">
                            <p className="ba-e32ac1aeb2">2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-03a24a530a" data-node-id="40:9966" data-name="Data - Action Column: ONLY QR Code Icon, NO EDIT, NO TRASH">
                    <div className="ba-1b6c197d4f" data-node-id="40:9967" data-name="Button">
                      <div className="ba-97e8208e5c" data-node-id="40:9968" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer12} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-3c4785bdf2" data-node-id="40:9970" data-name="Row 2">
                  <div className="ba-afae1125ec" data-node-id="40:9971" data-name="Data">
                    <div className="ba-0ba900d631">
                      <div className="ba-0d07265000" data-node-id="40:9972" data-name="Input" data-field-hints="check " />
                    </div>
                  </div>
                  <div className="ba-a61e97327b" data-node-id="40:9973" data-name="Data">
                    <div className="ba-3c5a684d20">
                      <div className="ba-40b11d8495" data-node-id="40:9974">
                        <p className="ba-8a3ede2ed5">TS-MON-</p>
                        <p className="ba-8a3ede2ed5">2026-</p>
                        <p className="ba-e32ac1aeb2">00031</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e8547e2eaf" data-node-id="40:9975" data-name="Data">
                    <div className="ba-a86d6f6cd4">
                      <div className="ba-153c0a1809" data-node-id="40:9976" data-name="Container">
                        <div className="ba-3bbb063dae" data-node-id="40:9977">
                          <p className="ba-8a3ede2ed5">Màn hình LG</p>
                          <p className="ba-8a3ede2ed5">UltraFine 27 inch</p>
                          <p className="ba-e32ac1aeb2">4K</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="40:9978" data-name="Container">
                        <div className="ba-5f0fcc3a35" data-node-id="40:9979">
                          <p className="ba-e32ac1aeb2">Kho Kỹ thuật IT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9ca9d0f7ee" data-node-id="40:9980" data-name="Data">
                    <div className="ba-abe5cf796e">
                      <div className="ba-3536005f7f" data-node-id="40:9981" data-name="Container">
                        <div className="ba-24926b3b2f" data-node-id="40:9982" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer13} />
                        </div>
                        <div className="ba-b5426c2b09" data-node-id="40:9984" data-name="Container">
                          <div className="ba-4053065f4f" data-node-id="40:9985">
                            <p className="ba-8a3ede2ed5">Màn hình</p>
                            <p className="ba-e32ac1aeb2">hiển thị</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-1c3c34055a" data-node-id="40:9986" data-name="Data">
                    <div className="ba-e1dd14a182">
                      <div className="ba-83e9db92e9" data-node-id="40:9987">
                        <p className="ba-8a3ede2ed5">LG-27UL-</p>
                        <p className="ba-e32ac1aeb2">89421B</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-bfa3cae561" data-node-id="40:9988" data-name="Data">
                    <div className="ba-e528146eee">
                      <div className="ba-35804a1335" data-node-id="40:9989" data-name="Background">
                        <div className="ba-57c2eb8f23" data-node-id="40:9990" data-name="Background" />
                        <div className="ba-0435da15c7" data-node-id="40:9991" data-name="Container">
                          <div className="ba-a2ab47fd19" data-node-id="40:9992">
                            <p className="ba-c22b989642">Chưa</p>
                            <p className="ba-bf919b50f6">cấp phát</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e3e29b7846" data-node-id="40:9993" data-name="Data">
                    <div className="ba-236ff71469">
                      <div className="ba-4053065f4f" data-node-id="40:9994">
                        <p className="ba-e32ac1aeb2">22/01/2026</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-70bc2a6cf2" data-node-id="40:9995" data-name="Data">
                    <div className="ba-e528146eee">
                      <div className="ba-f6e9dbdd51" data-node-id="40:9996">
                        <p className="ba-8a3ede2ed5">Lê Mai</p>
                        <p className="ba-e32ac1aeb2">Hương</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9f303bf574" data-node-id="40:9997" data-name="Data">
                    <div className="ba-df2d75cb00">
                      <div className="ba-bee0d685fc" data-node-id="40:9998" data-name="Button">
                        <div className="ba-a2495991bf" data-node-id="40:9999" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer11} />
                        </div>
                        <div className="ba-de6d3021ed" data-node-id="40:10001" data-name="Margin">
                          <div className="ba-9021357745" data-node-id="40:10002" data-name="Container">
                            <div className="ba-77fcca7c73" data-node-id="40:10003">
                              <p className="ba-e32ac1aeb2">1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-31266569be" data-node-id="40:10004" data-name="Data - Action Column: ONLY QR Code Icon">
                    <div className="ba-9c93c2e435">
                      <div className="ba-1b6c197d4f" data-node-id="40:10005" data-name="Button">
                        <div className="ba-97e8208e5c" data-node-id="40:10006" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-3c4785bdf2" data-node-id="40:10008" data-name="Row 3">
                  <div className="ba-afae1125ec" data-node-id="40:10009" data-name="Data">
                    <div className="ba-0ba900d631">
                      <div className="ba-0d07265000" data-node-id="40:10010" data-name="Input" data-field-hints="check " />
                    </div>
                  </div>
                  <div className="ba-a61e97327b" data-node-id="40:10011" data-name="Data">
                    <div className="ba-3c5a684d20">
                      <div className="ba-40b11d8495" data-node-id="40:10012">
                        <p className="ba-8a3ede2ed5">TS-PRT-</p>
                        <p className="ba-8a3ede2ed5">2026-</p>
                        <p className="ba-e32ac1aeb2">00004</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e8547e2eaf" data-node-id="40:10013" data-name="Data">
                    <div className="ba-a86d6f6cd4">
                      <div className="ba-153c0a1809" data-node-id="40:10014" data-name="Container">
                        <div className="ba-3bbb063dae" data-node-id="40:10015">
                          <p className="ba-8a3ede2ed5">Máy in Canon</p>
                          <p className="ba-8a3ede2ed5">LBP2900 Laser</p>
                          <p className="ba-e32ac1aeb2">Đơn năng</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="40:10016" data-name="Container">
                        <div className="ba-5f0fcc3a35" data-node-id="40:10017">
                          <p className="ba-e32ac1aeb2">Ban Quản lý Dự án</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9ca9d0f7ee" data-node-id="40:10018" data-name="Data">
                    <div className="ba-abe5cf796e">
                      <div className="ba-3536005f7f" data-node-id="40:10019" data-name="Container">
                        <div className="ba-24926b3b2f" data-node-id="40:10020" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer14} />
                        </div>
                        <div className="ba-99056bf636" data-node-id="40:10022" data-name="Container">
                          <div className="ba-4053065f4f" data-node-id="40:10023">
                            <p className="ba-8a3ede2ed5">{`Máy in &`}</p>
                            <p className="ba-e32ac1aeb2">Văn phòng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-1c3c34055a" data-node-id="40:10024" data-name="Data">
                    <div className="ba-82ad439aa8">
                      <div className="ba-83e9db92e9" data-node-id="40:10025">
                        <p className="ba-e32ac1aeb2">CN-LBP-004812</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-bfa3cae561" data-node-id="40:10026" data-name="Data">
                    <div className="ba-e528146eee">
                      <div className="ba-01992bfb22" data-node-id="40:10027" data-name="Background">
                        <div className="ba-cca048a771" data-node-id="40:10028" data-name="Background" />
                        <div className="ba-b6b1c90686" data-node-id="40:10029" data-name="Container">
                          <div className="ba-a1ea8385dd" data-node-id="40:10030">
                            <p className="ba-c22b989642">Đang sử</p>
                            <p className="ba-bf919b50f6">dụng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e3e29b7846" data-node-id="40:10031" data-name="Data">
                    <div className="ba-236ff71469">
                      <div className="ba-4053065f4f" data-node-id="40:10032">
                        <p className="ba-e32ac1aeb2">03/02/2026</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-70bc2a6cf2" data-node-id="40:10033" data-name="Data">
                    <div className="ba-e528146eee">
                      <div className="ba-f6e9dbdd51" data-node-id="40:10034">
                        <p className="ba-8a3ede2ed5">Đỗ Văn</p>
                        <p className="ba-e32ac1aeb2">Minh</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9f303bf574" data-node-id="40:10035" data-name="Data">
                    <div className="ba-3e541794dd">
                      <div className="ba-187a2dc063" data-node-id="40:10036">
                        <p className="ba-e32ac1aeb2">-</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-31266569be" data-node-id="40:10037" data-name="Data - Action Column: ONLY QR Code Icon">
                    <div className="ba-9c93c2e435">
                      <div className="ba-1b6c197d4f" data-node-id="40:10038" data-name="Button">
                        <div className="ba-97e8208e5c" data-node-id="40:10039" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-3c4785bdf2" data-node-id="40:10041" data-name="Row 4">
                  <div className="ba-afae1125ec" data-node-id="40:10042" data-name="Data">
                    <div className="ba-6121cd2036">
                      <div className="ba-0d07265000" data-node-id="40:10043" data-name="Input" data-field-hints="check " />
                    </div>
                  </div>
                  <div className="ba-a61e97327b" data-node-id="40:10044" data-name="Data">
                    <div className="ba-c2ba67cd44">
                      <div className="ba-40b11d8495" data-node-id="40:10045">
                        <p className="ba-8a3ede2ed5">TS-FUR-</p>
                        <p className="ba-8a3ede2ed5">2026-</p>
                        <p className="ba-e32ac1aeb2">00087</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e8547e2eaf" data-node-id="40:10046" data-name="Data">
                    <div className="ba-a86d6f6cd4">
                      <div className="ba-153c0a1809" data-node-id="40:10047" data-name="Container">
                        <div className="ba-3bbb063dae" data-node-id="40:10048">
                          <p className="ba-8a3ede2ed5">Bàn họp gỗ sồi cao</p>
                          <p className="ba-e32ac1aeb2">cấp Oval 3.2m</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="40:10049" data-name="Container">
                        <div className="ba-5f0fcc3a35" data-node-id="40:10050">
                          <p className="ba-e32ac1aeb2">Phòng họp Hội đồng A</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9ca9d0f7ee" data-node-id="40:10051" data-name="Data">
                    <div className="ba-97056c730d">
                      <div className="ba-3536005f7f" data-node-id="40:10052" data-name="Container">
                        <div className="ba-76a1d0ee26" data-node-id="40:10053" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer15} />
                        </div>
                        <div className="ba-516a28c3f7" data-node-id="40:10055" data-name="Container">
                          <div className="ba-4053065f4f" data-node-id="40:10056">
                            <p className="ba-8a3ede2ed5">{`Bàn ghế &`}</p>
                            <p className="ba-e32ac1aeb2">Nội thất</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-1c3c34055a" data-node-id="40:10057" data-name="Data">
                    <div className="ba-742f3e16e7">
                      <div className="ba-83e9db92e9" data-node-id="40:10058">
                        <p className="ba-8a3ede2ed5">HP-SO-2026-</p>
                        <p className="ba-e32ac1aeb2">087</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-bfa3cae561" data-node-id="40:10059" data-name="Data">
                    <div className="ba-3c5a684d20">
                      <div className="ba-01992bfb22" data-node-id="40:10060" data-name="Background">
                        <div className="ba-cca048a771" data-node-id="40:10061" data-name="Background" />
                        <div className="ba-b6b1c90686" data-node-id="40:10062" data-name="Container">
                          <div className="ba-a1ea8385dd" data-node-id="40:10063">
                            <p className="ba-c22b989642">Đang sử</p>
                            <p className="ba-bf919b50f6">dụng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e3e29b7846" data-node-id="40:10064" data-name="Data">
                    <div className="ba-e528146eee">
                      <div className="ba-4053065f4f" data-node-id="40:10065">
                        <p className="ba-e32ac1aeb2">10/02/2026</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-70bc2a6cf2" data-node-id="40:10066" data-name="Data">
                    <div className="ba-3c5a684d20">
                      <div className="ba-f6e9dbdd51" data-node-id="40:10067">
                        <p className="ba-8a3ede2ed5">Nguyễn</p>
                        <p className="ba-e32ac1aeb2">Quốc Thái</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9f303bf574" data-node-id="40:10068" data-name="Data">
                    <div className="ba-6effc760ad">
                      <div className="ba-bee0d685fc" data-node-id="40:10069" data-name="Button">
                        <div className="ba-a2495991bf" data-node-id="40:10070" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer11} />
                        </div>
                        <div className="ba-de6d3021ed" data-node-id="40:10072" data-name="Margin">
                          <div className="ba-9021357745" data-node-id="40:10073" data-name="Container">
                            <div className="ba-77fcca7c73" data-node-id="40:10074">
                              <p className="ba-e32ac1aeb2">4</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-31266569be" data-node-id="40:10075" data-name="Data - Action Column: ONLY QR Code Icon">
                    <div className="ba-9c93c2e435">
                      <div className="ba-1b6c197d4f" data-node-id="40:10076" data-name="Button">
                        <div className="ba-97e8208e5c" data-node-id="40:10077" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-3c4785bdf2" data-node-id="40:10079" data-name="Row 5">
                  <div className="ba-afae1125ec" data-node-id="40:10080" data-name="Data">
                    <div className="ba-0ba900d631">
                      <div className="ba-0d07265000" data-node-id="40:10081" data-name="Input" data-field-hints="check " />
                    </div>
                  </div>
                  <div className="ba-a61e97327b" data-node-id="40:10082" data-name="Data">
                    <div className="ba-3c5a684d20">
                      <div className="ba-40b11d8495" data-node-id="40:10083">
                        <p className="ba-8a3ede2ed5">TS-LAP-</p>
                        <p className="ba-8a3ede2ed5">2026-</p>
                        <p className="ba-e32ac1aeb2">00009</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e8547e2eaf" data-node-id="40:10084" data-name="Data">
                    <div className="ba-a86d6f6cd4">
                      <div className="ba-153c0a1809" data-node-id="40:10085" data-name="Container">
                        <div className="ba-3bbb063dae" data-node-id="40:10086">
                          <p className="ba-8a3ede2ed5">MacBook Pro 16</p>
                          <p className="ba-e32ac1aeb2">inch M3 Max 36GB</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="40:10087" data-name="Container">
                        <div className="ba-5f0fcc3a35" data-node-id="40:10088">
                          <p className="ba-8a3ede2ed5">Phòng Phát triển Hệ</p>
                          <p className="ba-e32ac1aeb2">thống</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9ca9d0f7ee" data-node-id="40:10089" data-name="Data">
                    <div className="ba-abe5cf796e">
                      <div className="ba-3536005f7f" data-node-id="40:10090" data-name="Container">
                        <div className="ba-327509c50a" data-node-id="40:10091" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer10} />
                        </div>
                        <div className="ba-efd201e877" data-node-id="40:10093" data-name="Container">
                          <div className="ba-4053065f4f" data-node-id="40:10094">
                            <p className="ba-8a3ede2ed5">Máy tính</p>
                            <p className="ba-e32ac1aeb2">xách tay</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-1c3c34055a" data-node-id="40:10095" data-name="Data">
                    <div className="ba-82ad439aa8">
                      <div className="ba-83e9db92e9" data-node-id="40:10096">
                        <p className="ba-e32ac1aeb2">C02GH894P7QM</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-bfa3cae561" data-node-id="40:10097" data-name="Data">
                    <div className="ba-e528146eee">
                      <div className="ba-01992bfb22" data-node-id="40:10098" data-name="Background">
                        <div className="ba-cca048a771" data-node-id="40:10099" data-name="Background" />
                        <div className="ba-b6b1c90686" data-node-id="40:10100" data-name="Container">
                          <div className="ba-a1ea8385dd" data-node-id="40:10101">
                            <p className="ba-c22b989642">Đang sử</p>
                            <p className="ba-bf919b50f6">dụng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e3e29b7846" data-node-id="40:10102" data-name="Data">
                    <div className="ba-236ff71469">
                      <div className="ba-4053065f4f" data-node-id="40:10103">
                        <p className="ba-e32ac1aeb2">18/02/2026</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-70bc2a6cf2" data-node-id="40:10104" data-name="Data">
                    <div className="ba-e528146eee">
                      <div className="ba-f6e9dbdd51" data-node-id="40:10105">
                        <p className="ba-8a3ede2ed5">Trần Hữu</p>
                        <p className="ba-e32ac1aeb2">Nam</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9f303bf574" data-node-id="40:10106" data-name="Data">
                    <div className="ba-df2d75cb00">
                      <div className="ba-bee0d685fc" data-node-id="40:10107" data-name="Button">
                        <div className="ba-a2495991bf" data-node-id="40:10108" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer11} />
                        </div>
                        <div className="ba-de6d3021ed" data-node-id="40:10110" data-name="Margin">
                          <div className="ba-9021357745" data-node-id="40:10111" data-name="Container">
                            <div className="ba-77fcca7c73" data-node-id="40:10112">
                              <p className="ba-e32ac1aeb2">1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-31266569be" data-node-id="40:10113" data-name="Data - Action Column: ONLY QR Code Icon">
                    <div className="ba-9c93c2e435">
                      <div className="ba-1b6c197d4f" data-node-id="40:10114" data-name="Button">
                        <div className="ba-97e8208e5c" data-node-id="40:10115" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-3c4785bdf2" data-node-id="40:10117" data-name="Row 6">
                  <div className="ba-afae1125ec" data-node-id="40:10118" data-name="Data">
                    <div className="ba-26e91c38de">
                      <div className="ba-0d07265000" data-node-id="40:10119" data-name="Input" data-field-hints="check " />
                    </div>
                  </div>
                  <div className="ba-a61e97327b" data-node-id="40:10120" data-name="Data">
                    <div className="ba-e528146eee">
                      <div className="ba-40b11d8495" data-node-id="40:10121">
                        <p className="ba-8a3ede2ed5">TS-MON-</p>
                        <p className="ba-8a3ede2ed5">2026-</p>
                        <p className="ba-e32ac1aeb2">00027</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e8547e2eaf" data-node-id="40:10122" data-name="Data">
                    <div className="ba-a86d6f6cd4">
                      <div className="ba-153c0a1809" data-node-id="40:10123" data-name="Container">
                        <div className="ba-3bbb063dae" data-node-id="40:10124">
                          <p className="ba-8a3ede2ed5">Màn hình Dell</p>
                          <p className="ba-8a3ede2ed5">P2422H 23.8 inch</p>
                          <p className="ba-e32ac1aeb2">IPS</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="40:10125" data-name="Container">
                        <div className="ba-5f0fcc3a35" data-node-id="40:10126">
                          <p className="ba-8a3ede2ed5">Phòng Hành chính -</p>
                          <p className="ba-e32ac1aeb2">Tổng hợp</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9ca9d0f7ee" data-node-id="40:10127" data-name="Data">
                    <div className="ba-bcd3af9014">
                      <div className="ba-3536005f7f" data-node-id="40:10128" data-name="Container">
                        <div className="ba-24926b3b2f" data-node-id="40:10129" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer13} />
                        </div>
                        <div className="ba-b5426c2b09" data-node-id="40:10131" data-name="Container">
                          <div className="ba-4053065f4f" data-node-id="40:10132">
                            <p className="ba-8a3ede2ed5">Màn hình</p>
                            <p className="ba-e32ac1aeb2">hiển thị</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-1c3c34055a" data-node-id="40:10133" data-name="Data">
                    <div className="ba-82ad439aa8">
                      <div className="ba-83e9db92e9" data-node-id="40:10134">
                        <p className="ba-8a3ede2ed5">CN-0N23K1-</p>
                        <p className="ba-e32ac1aeb2">72872</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-bfa3cae561" data-node-id="40:10135" data-name="Data">
                    <div className="ba-236ff71469">
                      <div className="ba-01992bfb22" data-node-id="40:10136" data-name="Background">
                        <div className="ba-cca048a771" data-node-id="40:10137" data-name="Background" />
                        <div className="ba-b6b1c90686" data-node-id="40:10138" data-name="Container">
                          <div className="ba-a1ea8385dd" data-node-id="40:10139">
                            <p className="ba-c22b989642">Đang sử</p>
                            <p className="ba-bf919b50f6">dụng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e3e29b7846" data-node-id="40:10140" data-name="Data">
                    <div className="ba-9a51b34862">
                      <div className="ba-4053065f4f" data-node-id="40:10141">
                        <p className="ba-e32ac1aeb2">25/02/2026</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-70bc2a6cf2" data-node-id="40:10142" data-name="Data">
                    <div className="ba-236ff71469">
                      <div className="ba-f6e9dbdd51" data-node-id="40:10143">
                        <p className="ba-8a3ede2ed5">Lê Mai</p>
                        <p className="ba-e32ac1aeb2">Hương</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9f303bf574" data-node-id="40:10144" data-name="Data">
                    <div className="ba-0624d94998">
                      <div className="ba-187a2dc063" data-node-id="40:10145">
                        <p className="ba-e32ac1aeb2">-</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-31266569be" data-node-id="40:10146" data-name="Data - Action Column: ONLY QR Code Icon">
                    <div className="ba-9c93c2e435">
                      <div className="ba-1b6c197d4f" data-node-id="40:10147" data-name="Button">
                        <div className="ba-97e8208e5c" data-node-id="40:10148" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-b22f1877fc" data-node-id="40:10150" data-name="Row 7">
                  <div className="ba-afae1125ec" data-node-id="40:10151" data-name="Data">
                    <div className="ba-1e4e27f035">
                      <div className="ba-0d07265000" data-node-id="40:10152" data-name="Input" data-field-hints="check " />
                    </div>
                  </div>
                  <div className="ba-a61e97327b" data-node-id="40:10153" data-name="Data">
                    <div className="ba-e5b35ebc70">
                      <div className="ba-39bb17b47a" data-node-id="40:10154">
                        <p className="ba-8a3ede2ed5">TS-FUR-</p>
                        <p className="ba-8a3ede2ed5">2026-</p>
                        <p className="ba-e32ac1aeb2">00080</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e8547e2eaf" data-node-id="40:10155" data-name="Data">
                    <div className="ba-a86d6f6cd4">
                      <div className="ba-153c0a1809" data-node-id="40:10156" data-name="Container">
                        <div className="ba-aa7d238bed" data-node-id="40:10157">
                          <p className="ba-75fb47d1fd">Tủ hồ sơ thép 4</p>
                          <p className="ba-579c544ce5">cánh Hòa Phát</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="40:10158" data-name="Container">
                        <div className="ba-5f0fcc3a35" data-node-id="40:10159">
                          <p className="ba-e32ac1aeb2">Kho thanh lý tài sản cũ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9ca9d0f7ee" data-node-id="40:10160" data-name="Data">
                    <div className="ba-d630c6ab09">
                      <div className="ba-3536005f7f" data-node-id="40:10161" data-name="Container">
                        <div className="ba-c74d3ef2d9" data-node-id="40:10162" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                        </div>
                        <div className="ba-516a28c3f7" data-node-id="40:10164" data-name="Container">
                          <div className="ba-4053065f4f" data-node-id="40:10165">
                            <p className="ba-8a3ede2ed5">{`Bàn ghế &`}</p>
                            <p className="ba-e32ac1aeb2">Nội thất</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-1c3c34055a" data-node-id="40:10166" data-name="Data">
                    <div className="ba-7be99d6b42">
                      <div className="ba-83e9db92e9" data-node-id="40:10167">
                        <p className="ba-e32ac1aeb2">HP-THS-0080X</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-bfa3cae561" data-node-id="40:10168" data-name="Data">
                    <div className="ba-17833abccd">
                      <div className="ba-65ea6bdb00" data-node-id="40:10169" data-name="Overlay">
                        <div className="ba-16cd7e11af" data-node-id="40:10170" data-name="Background" />
                        <div className="ba-b0a5722357" data-node-id="40:10171" data-name="Container">
                          <div className="ba-e8535a02c0" data-node-id="40:10172">
                            <p className="ba-c22b989642">Đã</p>
                            <p className="ba-bf919b50f6">thanh lý</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e3e29b7846" data-node-id="40:10173" data-name="Data">
                    <div className="ba-e214698270">
                      <div className="ba-4053065f4f" data-node-id="40:10174">
                        <p className="ba-e32ac1aeb2">02/03/2026</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-70bc2a6cf2" data-node-id="40:10175" data-name="Data">
                    <div className="ba-17833abccd">
                      <div className="ba-f6e9dbdd51" data-node-id="40:10176">
                        <p className="ba-8a3ede2ed5">Đỗ Văn</p>
                        <p className="ba-e32ac1aeb2">Minh</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9f303bf574" data-node-id="40:10177" data-name="Data">
                    <div className="ba-24a143c2cc">
                      <div className="ba-bee0d685fc" data-node-id="40:10178" data-name="Button">
                        <div className="ba-a2495991bf" data-node-id="40:10179" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer11} />
                        </div>
                        <div className="ba-de6d3021ed" data-node-id="40:10181" data-name="Margin">
                          <div className="ba-9021357745" data-node-id="40:10182" data-name="Container">
                            <div className="ba-77fcca7c73" data-node-id="40:10183">
                              <p className="ba-e32ac1aeb2">3</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-31266569be" data-node-id="40:10184" data-name="Data - Action Column: ONLY QR Code Icon">
                    <div className="ba-9c93c2e435">
                      <div className="ba-1b6c197d4f" data-node-id="40:10185" data-name="Button">
                        <div className="ba-97e8208e5c" data-node-id="40:10186" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-67908b0f5f" data-node-id="40:10188" data-name="Table Pagination & Footer Controls">
              <div className="ba-d452ad70ec" data-node-id="40:10189" data-name="Records count & selector">
                <div className="ba-244c842be0">
                  <div className="ba-39ca0321a1" data-node-id="40:10190" data-name="Container">
                    <div className="ba-73820a4170" data-node-id="40:10191">
                      <p>
                        <span className="ba-bf919b50f6">{`Hiển thị `}</span>
                        <span className="ba-d7c32c0359">1–20</span>
                        <span className="ba-bf919b50f6">{` trên `}</span>
                        <span className="ba-d7c32c0359">248</span>
                        <span className="ba-bf919b50f6">{` bản ghi`}</span>
                      </p>
                    </div>
                  </div>
                  <div className="ba-3536005f7f" data-node-id="40:10192" data-name="Container">
                    <div className="ba-39ca0321a1" data-node-id="40:10193" data-name="Label">
                      <div className="ba-73820a4170" data-node-id="40:10194">
                        <p className="ba-bf919b50f6">Số hàng:</p>
                      </div>
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="40:10195" data-name="Container">
                      <div className="ba-fc99949f2a" data-node-id="40:10196" data-name="Options" data-field-hints="">
                        <div className="ba-c5360e6705" data-node-id="40:10197" data-name="Container">
                          <div className="ba-df18ffb03a" data-node-id="40:10198">
                            <p className="ba-bf919b50f6">20</p>
                          </div>
                        </div>
                      </div>
                      <div className="ba-7ff7ddd3c7" data-node-id="40:10199" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer17} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-d452ad70ec" data-node-id="40:10201" data-name="Pagination Buttons">
                <div className="ba-bbe7baeddc">
                  <div className="ba-b5ae9bf0e4" data-node-id="40:10202" data-name="Button">
                    <div className="ba-7ec7ac8b0d" data-node-id="40:10203" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer18} />
                    </div>
                  </div>
                  <div className="ba-c4cf5e5400" data-node-id="40:10205" data-name="Button">
                    <div className="ba-dc9a3c1fb4" data-node-id="40:10206">
                      <p className="ba-bf919b50f6">1</p>
                    </div>
                  </div>
                  <div className="ba-050d0ec49d" data-node-id="40:10207" data-name="Button">
                    <div className="ba-90bd582a61" data-node-id="40:10208">
                      <p className="ba-bf919b50f6">2</p>
                    </div>
                  </div>
                  <div className="ba-050d0ec49d" data-node-id="40:10209" data-name="Button">
                    <div className="ba-90bd582a61" data-node-id="40:10210">
                      <p className="ba-bf919b50f6">3</p>
                    </div>
                  </div>
                  <div className="ba-a452c11bd2" data-node-id="40:10211" data-name="Container">
                    <div className="ba-73820a4170" data-node-id="40:10212">
                      <p className="ba-bf919b50f6">…</p>
                    </div>
                  </div>
                  <div className="ba-050d0ec49d" data-node-id="40:10213" data-name="Button">
                    <div className="ba-90bd582a61" data-node-id="40:10214">
                      <p className="ba-bf919b50f6">13</p>
                    </div>
                  </div>
                  <div className="ba-4698a4ac84" data-node-id="40:10215" data-name="Button">
                    <div className="ba-7ec7ac8b0d" data-node-id="40:10216" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer19} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-9bbb452a7f" data-node-id="40:10218" data-name="Header">
        <div className="ba-d452ad70ec" data-node-id="40:10219" data-name="Container">
          <div className="ba-bbe7baeddc">
            <div className="ba-39ca0321a1" data-node-id="40:10220" data-name="Link">
              <div className="ba-73820a4170" data-node-id="40:10221">
                <p className="ba-bf919b50f6">Trang chủ</p>
              </div>
            </div>
            <div className="ba-0dbdb9e0f7" data-node-id="40:10222" data-name="Container">
              <img alt="" className="ba-8faf267d30" src={imgContainer20} />
            </div>
            <div className="ba-39ca0321a1" data-node-id="40:10224" data-name="Link">
              <div className="ba-73820a4170" data-node-id="40:10225">
                <p className="ba-bf919b50f6">Quản lý tài sản</p>
              </div>
            </div>
            <div className="ba-0dbdb9e0f7" data-node-id="40:10226" data-name="Container">
              <img alt="" className="ba-8faf267d30" src={imgContainer20} />
            </div>
            <div className="ba-39ca0321a1" data-node-id="40:10228" data-name="Container">
              <div className="ba-df18ffb03a" data-node-id="40:10229">
                <p className="ba-bf919b50f6">Danh sách tài sản</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-d452ad70ec" data-node-id="40:10230" data-name="Container">
          <div className="ba-244c842be0">
            <div className="ba-e8210ba625" data-node-id="40:10231" data-name="Container">
              <div className="ba-148fb4d559" data-node-id="40:10232" data-name="Input" data-field-hints="">
                <div className="ba-67366dcb7c" data-node-id="40:10233" data-name="Container">
                  <div className="ba-09c6898323">
                    <div className="ba-eae6c1d9d6" data-node-id="40:10234">
                      <p className="ba-32bd4c7660">Tìm kiếm nhanh tài sản...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-b5342f5a83" data-node-id="40:10235" data-name="Icon">
                <img alt="" className="ba-8faf267d30" src={imgIcon} />
              </div>
            </div>
            <div className="ba-adf912547c" data-node-id="40:10236" data-name="Button - Thông báo">
              <div className="ba-b88463e588" data-node-id="40:10237" data-name="Container">
                <img alt="" className="ba-8faf267d30" src={imgContainer21} />
              </div>
              <div className="ba-c808de177b" data-node-id="40:10239" data-name="Background">
                <div className="ba-0b2d9fc41b" data-node-id="40:10240">
                  <p className="ba-1b6a18879c">3</p>
                </div>
              </div>
            </div>
            <div className="ba-adf912547c" data-node-id="40:10241" data-name="Button - Trợ giúp">
              <div className="ba-6561bd9151" data-node-id="40:10242" data-name="Container">
                <img alt="" className="ba-8faf267d30" src={imgContainer22} />
              </div>
            </div>
            <div className="ba-100ca17654" data-node-id="40:10244" data-name="Vertical Divider" />
            <div className="ba-9eae8902b4" data-node-id="40:10245" data-name="Container">
              <div className="ba-e5f422648d" data-node-id="40:10246" data-name="Background">
                <div className="ba-8a0ff48924" data-node-id="40:10247" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer23} />
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="40:10249" data-name="Container">
                <div className="ba-153c0a1809" data-node-id="40:10250" data-name="Container">
                  <div className="ba-cd3f9b7aa8" data-node-id="40:10251">
                    <p className="ba-080b7c55f9">Nguyễn Văn An</p>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="40:10252" data-name="Container">
                  <div className="ba-73820a4170" data-node-id="40:10253">
                    <p className="ba-1b6a18879c">Nhân viên QLTS</p>
                  </div>
                </div>
              </div>
              <div className="ba-3d39f28566" data-node-id="40:10254" data-name="Container">
                <img alt="" className="ba-8faf267d30" src={imgContainer24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-b80f11b636" data-node-id="40:10256" data-name="Aside">
        <div className="ba-67366dcb7c" data-node-id="40:10257" data-name="Container">
          <div className="ba-4ed85d2730">
            <div className="ba-009c993968" data-node-id="40:10258" data-name="Margin">
              <div className="ba-a37cb2f707" data-node-id="40:10259" data-name="Container">
                <div className="ba-0b496d0988" data-node-id="40:10260" data-name="QLTS Logo">
                  <div className="ba-fb97e384f1">
                    <img alt="" className="ba-3407971055" src={imgQltsLogo} />
                  </div>
                </div>
                <div className="ba-55a8c62265" data-node-id="40:10261" data-name="Container">
                  <div className="ba-e0822dd18c" data-node-id="40:10262" data-name="Container">
                    <div className="ba-bdaf12a71f" data-node-id="40:10263">
                      <p className="ba-5f33bcd61f">QLTS</p>
                    </div>
                  </div>
                  <div className="ba-9ad1c5c501" data-node-id="40:10264" data-name="Container">
                    <div className="ba-92b02279e2" data-node-id="40:10265">
                      <p className="ba-bf919b50f6">Quản Lý Tài Sản</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-f737562fde" data-node-id="40:10266" data-name="Nav">
              <div className="ba-557153ff70" data-node-id="40:10267" data-name="Link">
                <div className="ba-b784803253" data-node-id="40:10268" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer25} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:10270" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:10271">
                    <p className="ba-efcc9af6d1">Tổng quan</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:10272" data-name="Link">
                <div className="ba-0e5557a34c" data-node-id="40:10273" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer26} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:10275" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:10276">
                    <p className="ba-efcc9af6d1">Quản lý tài sản</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:10277" data-name="Link">
                <div className="ba-8d9eb16724" data-node-id="40:10278" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer27} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:10280" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:10281">
                    <p className="ba-efcc9af6d1">Cấp phát</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:10282" data-name="Link">
                <div className="ba-64dfebc1ac" data-node-id="40:10283" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer28} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:10285" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:10286">
                    <p className="ba-efcc9af6d1">Điều chuyển</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:10287" data-name="Link">
                <div className="ba-b784803253" data-node-id="40:10288" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer29} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:10290" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:10291">
                    <p className="ba-efcc9af6d1">Bảo trì</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:10292" data-name="Link">
                <div className="ba-64dfebc1ac" data-node-id="40:10293" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer30} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:10295" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:10296">
                    <p className="ba-efcc9af6d1">Kiểm kê</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:10297" data-name="Link">
                <div className="ba-b784803253" data-node-id="40:10298" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer31} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:10300" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:10301">
                    <p className="ba-efcc9af6d1">Thanh lý</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:10302" data-name="Link">
                <div className="ba-c74d3ef2d9" data-node-id="40:10303" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer32} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:10305" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:10306">
                    <p className="ba-efcc9af6d1">Báo cáo</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:10307" data-name="Link">
                <div className="ba-2acf92dda9" data-node-id="40:10308" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer33} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:10310" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:10311">
                    <p className="ba-efcc9af6d1">Quản trị</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-b55647e14b" data-node-id="40:10312" data-name="HorizontalBorder">
          <div className="ba-a725867360">
            <div className="ba-67366dcb7c" data-node-id="40:10313" data-name="Container">
              <div className="ba-4ed85d2730">
                <div className="ba-1d6344f4d0" data-node-id="40:10314">
                  <p className="ba-bf919b50f6">v2.4.0 Enterprise</p>
                </div>
              </div>
            </div>
            <div className="ba-67366dcb7c" data-node-id="40:10315" data-name="Container">
              <div className="ba-4ed85d2730">
                <div className="ba-7523cf9e1d" data-node-id="40:10316">
                  <p className="ba-bf919b50f6">© 2024 QLTS Corporation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
