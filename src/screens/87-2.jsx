/** Screen 87:2 — Quản lý tài sản - Phiếu yêu cầu cấp phát của tôi. Presentation adapted from Figma. */
import {useContext} from 'react';
import { h,InteractionContext } from "../design-runtime.jsx";
const imgSvg = "/assets/1a33c488-8ed8-48d4-b83b-ec580d00d8f4.svg";
const imgSvg1 = "/assets/9b68eb15-64f5-4232-92a0-93980baec438.svg";
const imgSvg2 = "/assets/20a34a44-cf97-4e31-9b91-243cbb6a8e79.svg";
const imgSvg3 = "/assets/c9acbd2f-398a-42a1-ad57-dbba519a35a8.svg";
const imgSvg4 = "/assets/63e6c108-4ea6-45cf-bddf-552172b615ff.svg";
const imgSvg5 = "/assets/d15b0223-8646-454a-a81c-203b94feafe1.svg";
const imgSvg6 = "/assets/61d3f3c5-1007-4b82-8eb3-ba5f55b05c31.svg";
const imgSvg7 = "/assets/c772481b-20a0-436c-9341-920724c35c6f.svg";
const imgVector = "/assets/1ffc0d36-d50c-4599-97f8-dc238009fd74.svg";
const imgLinkSvg = "/assets/bff2b909-3791-4003-95af-696cb6bf4459.svg";
const imgSvg8 = "/assets/578e6e2e-e4cd-477b-a440-7d46730b1882.svg";
const imgSvg9 = "/assets/08889211-9318-4a43-8ca3-156196d1a217.svg";
const imgSvg10 = "/assets/20af2e3c-a167-467f-881f-43ad0bae601c.svg";
const imgImage = "/assets/bced8c70-d31d-4022-b3ca-0427805eec21.svg";
const imgSvg11 = "/assets/9af5790c-0403-4228-a43e-c32c1e70211d.svg";
const imgSvg12 = "/assets/c8694d2d-30bb-4efc-a6f2-be071c70ebd2.svg";
const imgSvg13 = "/assets/e848fd25-d9f0-4692-8790-b18277495f98.svg";
const imgButtonSvg = "/assets/ee1fa477-fd87-484b-9e96-32fb93a486f4.svg";
const imgImage1 = "/assets/f7d9bae2-046d-41bd-b79a-8eb511b285a1.svg";
const imgSvg14 = "/assets/004dca6c-510f-44e1-9cd5-22ac7e4fedca.svg";
const imgSvg15 = "/assets/11c7ab1b-82f2-4a02-a63a-c8f509316551.svg";
const imgSvg16 = "/assets/6a11e683-157b-4e3e-bfec-50db0b29049c.svg";

export default function QunLyTaiSnPhiuYeuCuCpPhatCaToi() {
  const {role}=useContext(InteractionContext);
  return (
    <div className="ba-49709471ed" data-node-id="87:2" style={{ backgroundImage: "linear-gradient(90deg, rgb(240, 244, 249) 0%, rgb(240, 244, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Quản lý tài sản - Phiếu yêu cầu cấp phát của tôi">
      <div className="ba-9f413983b8" data-node-id="87:3" data-name="Aside - Sidebar">
        <div className="ba-67366dcb7c" data-node-id="87:4" data-name="Top Sidebar Content">
          <div className="ba-4ed85d2730">
            <div className="ba-fd2ac50346" data-node-id="87:5" data-name="App Brand Logo">
              <div className="ba-ab7becbfcb" data-node-id="87:6" data-name="Container">
                <div className="ba-153c0a1809" data-node-id="87:7" data-name="Container">
                  <div className="ba-203c2db2e3" data-node-id="87:8">
                    <p className="ba-4120bb12fd">BA Asset</p>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="87:9" data-name="Container">
                  <div className="ba-d2f0dd21c6" data-node-id="87:10">
                    <p className="ba-6107fb35a1">QUẢN LÝ TÀI SẢN</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-b018956573" data-node-id="87:11" data-name="Navigation Section:margin">
              <div className="ba-9f1bdd5eeb" data-node-id="87:12" data-name="Navigation Section">
                <div className="ba-f58a362996" data-node-id="87:13" data-name="Container">
                  <div className="ba-c55053c05b" data-node-id="87:14">
                    <p className="ba-e9e8a40ea4">KHÔNG GIAN LÀM VIỆC</p>
                  </div>
                </div>
                <div className="ba-4c62e33c8f" data-node-id="87:15" data-name="Nav">
                  <div className="ba-29d9c57634" data-node-id="87:16" data-name="Link - Tổng quan">
                    <div className="ba-b2a182ecf4" data-node-id="87:17" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg} />
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="87:19" data-name="Container">
                      <div className="ba-faf8ad9e01" data-node-id="87:20">
                        <p className="ba-c3dc13096a">Tổng quan</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-29d9c57634" data-node-id="87:21" data-name="Link - Tài sản của tôi">
                    <div className="ba-b2a182ecf4" data-node-id="87:22" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg1} />
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="87:24" data-name="Container">
                      <div className="ba-faf8ad9e01" data-node-id="87:25">
                        <p className="ba-c3dc13096a">Tài sản của tôi</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-297f60158d" data-node-id="87:26" data-name="Cấp phát tài sản (Active Group)">
                    <div className="ba-9e9200f417" data-node-id="87:27" data-name="Link">
                      <div className="ba-ad50363799" data-node-id="87:28" data-name="Container">
                        <div className="ba-b2a182ecf4" data-node-id="87:29" data-name="SVG">
                          <img alt="" className="ba-8faf267d30" src={imgSvg2} />
                        </div>
                        <div className="ba-39ca0321a1" data-node-id="87:31" data-name="Container">
                          <div className="ba-d7caf6f713" data-node-id="87:32">
                            <p className="ba-c3dc13096a">Cấp phát tài sản</p>
                          </div>
                        </div>
                      </div>
                      <div className="ba-c51752dc8c" data-node-id="87:33" data-name="SVG">
                        <img alt="" className="ba-8faf267d30" src={imgSvg3} />
                      </div>
                    </div>
                    <div className="ba-31dd767dfe" data-node-id="87:35" data-name="Submenu → Link">
                      <div className="ba-fc4bf78675" data-node-id="87:36">
                        <p className="ba-c3dc13096a">Bàn giao tài sản</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-29d9c57634" data-node-id="87:37" data-name="Link - Thu hồi tài sản">
                    <div className="ba-b2a182ecf4" data-node-id="87:38" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg4} />
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="87:40" data-name="Container">
                      <div className="ba-faf8ad9e01" data-node-id="87:41">
                        <p className="ba-c3dc13096a">Thu hồi tài sản</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-29d9c57634" data-node-id="87:42" data-name="Link - iều chuyển tài sản">
                    <div className="ba-b2a182ecf4" data-node-id="87:43" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg5} />
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="87:45" data-name="Container">
                      <div className="ba-faf8ad9e01" data-node-id="87:46">
                        <p className="ba-c3dc13096a">Điều chuyển tài sản</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-29d9c57634" data-node-id="87:47" data-name="Link - Báo hỏng / Bảo tr">
                    <div className="ba-b2a182ecf4" data-node-id="87:48" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg6} />
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="87:51" data-name="Container">
                      <div className="ba-faf8ad9e01" data-node-id="87:52">
                        <p className="ba-c3dc13096a">Báo hỏng / Bảo trì</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-67366dcb7c" data-node-id="87:53" data-name="Bottom Sidebar Section (Help & Profile)">
          <div className="ba-8bad1f84d4">
            <div className="ba-29d9c57634" data-node-id="87:54" data-name="Link - Trợ giúp">
              <div className="ba-b2a182ecf4" data-node-id="87:55" data-name="SVG">
                <img alt="" className="ba-8faf267d30" src={imgSvg7} />
              </div>
              <div className="ba-39ca0321a1" data-node-id="87:58" data-name="Container">
                <div className="ba-faf8ad9e01" data-node-id="87:59">
                  <p className="ba-c3dc13096a">Trợ giúp</p>
                </div>
              </div>
            </div>
            <div className="ba-0b35354bbd" data-node-id="87:60" data-name="User Profile Card">
              <div className="ba-d452ad70ec" data-node-id="87:61" data-name="Container">
                <div className="ba-a5bb95be96">
                  <div className="ba-1663cb6d4e" data-node-id="87:62" data-name="Background">
                    <div className="ba-414d716530" data-node-id="87:63">
                      <p className="ba-efcc9af6d1">NA</p>
                    </div>
                  </div>
                  <div className="ba-118dfa32fd" data-node-id="87:64" data-name="Container">
                    <div className="ba-c475d979ca" data-node-id="87:65" data-name="Container">
                      <div className="ba-7d1d240cc8" data-node-id="87:66">
                        <p className="ba-080b7c55f9">Nguyễn Minh Anh</p>
                      </div>
                    </div>
                    <div className="ba-c475d979ca" data-node-id="87:67" data-name="Container">
                      <div className="ba-7bc6da7c40" data-node-id="87:68">
                        <p className="ba-1b6a18879c">Nhân viên</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-fe94654b7c" data-node-id="87:69" data-name="SVG:margin">
                <div className="ba-f424406421">
                  <div className="ba-6d2c232dfa" data-node-id="87:70" data-name="SVG">
                    <div className="ba-2f0c4dcbb0" data-node-id="87:71" data-name="SVG">
                      <div className="ba-c8236fc448" data-node-id="87:72" data-name="Vector">
                        <div className="ba-1792f934bf">
                          <img alt="" className="ba-acc3667e96" src={imgVector} />
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
      <div className="ba-bf5b3605b1" data-node-id="87:73" data-name="Main Area">
        <div className="ba-2453677cc5" data-node-id="87:74" data-name="Top Navigation Header">
          <div className="ba-d452ad70ec" data-node-id="87:75" data-name="Nav - Breadcrumbs">
            <div className="ba-d85f0a0f5e">
              <div className="ba-c51752dc8c" data-node-id="87:76" data-name="Link → SVG">
                <img alt="" className="ba-8faf267d30" src={imgLinkSvg} />
              </div>
              <div className="ba-89a67e3f1f" data-node-id="87:78" data-name="Container">
                <div className="ba-c6e9e113dd" data-node-id="87:79">
                  <p className="ba-0543b847c7">/</p>
                </div>
              </div>
              <div className="ba-c19e406596" data-node-id="87:80" data-name="Link">
                <div className="ba-bd61330c98" data-node-id="87:81">
                  <p className="ba-0543b847c7">Cấp phát tài sản</p>
                </div>
              </div>
              <div className="ba-89a67e3f1f" data-node-id="87:82" data-name="Container">
                <div className="ba-c6e9e113dd" data-node-id="87:83">
                  <p className="ba-0543b847c7">/</p>
                </div>
              </div>
              <div className="ba-97b55c19cd" data-node-id="87:84" data-name="Container">
                <div className="ba-7da5d0c80b" data-node-id="87:85">
                  <p className="ba-0543b847c7">Phiếu yêu cầu của tôi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-d452ad70ec" data-node-id="87:86" data-name="Right Header Tools">
            <div className="ba-244c842be0">
              <div className="ba-48d5a83bc6" data-node-id="87:87" data-name="Button - Notification Bell">
                <div className="ba-b2a182ecf4" data-node-id="87:88" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg8} />
                </div>
                <div className="ba-7f43b6c9ab" data-node-id="87:90" data-name="Background">
                  <div className="ba-9b25313a38" data-node-id="87:91" data-name="Overlay+Shadow" />
                </div>
              </div>
              <div className="ba-b6eea00f02" data-node-id="87:92" data-name="Mini Avatar">
                <div className="ba-80af321d1a" data-node-id="87:93">
                  <p className="ba-bf919b50f6">NA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-34de7e9e23" data-node-id="87:94" data-name="Main Content Body">
          <div className="ba-c96fe10678" data-node-id="87:95" data-name="Page Title & Action Bar">
            <div className="ba-ab7becbfcb" data-node-id="87:96" data-name="Container">
              <div className="ba-153c0a1809" data-node-id="87:97" data-name="Heading 1">
                <div className="ba-3ad8b9bd8f" data-node-id="87:98">
                  <p className="ba-cbcef4fed1">{role==='asset-manager'?'Danh sách yêu cầu cấp phát':'Phiếu yêu cầu cấp phát của tôi'}</p>
                </div>
              </div>
              <div className="ba-153c0a1809" data-node-id="87:99" data-name="Container">
                <div className="ba-1b1e980650" data-node-id="87:100">
                  <p className="ba-c3dc13096a">Theo dõi các phiếu yêu cầu bạn đã tạo và tiến độ cấp phát tài sản.</p>
                </div>
              </div>
            </div>
            <div className="ba-bc2804000a" data-node-id="87:101" data-name="Button">
              <div className="ba-c51752dc8c" data-node-id="87:102" data-name="SVG">
                <img alt="" className="ba-8faf267d30" src={imgSvg9} />
              </div>
              <div className="ba-9021357745" data-node-id="87:104" data-name="Container">
                <div className="ba-b5300aff3b" data-node-id="87:105">
                  <p className="ba-c3dc13096a">Tạo mới</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-16208042ef" data-node-id="87:106" data-name="Filters Section Container">
            <div className="ba-67366dcb7c" data-node-id="87:107" data-name="Container">
              <div className="ba-99e311a5fe">
                <div className="ba-d8b237b5d4" data-node-id="87:108" data-name="Mã phiếu">
                  <div className="ba-153c0a1809" data-node-id="87:109" data-name="Label">
                    <div className="ba-27397b7d50" data-node-id="87:110">
                      <p className="ba-0543b847c7">Mã phiếu</p>
                    </div>
                  </div>
                  <div className="ba-153c0a1809" data-node-id="87:111" data-name="Container">
                    <div className="ba-e648a53ef6" data-node-id="87:112" data-name="Input" data-field-hints="">
                      <div className="ba-4a9b73a3b7" data-node-id="87:113" data-name="Container">
                        <div className="ba-09c6898323">
                          <div className="ba-3a1c5436b9" data-node-id="87:114">
                            <p className="ba-32bd4c7660">Nhập mã phiếu</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-59a7d74a64" data-node-id="87:115" data-name="Container">
                      <div className="ba-c51752dc8c" data-node-id="87:116" data-name="SVG">
                        <img alt="" className="ba-8faf267d30" src={imgSvg10} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-67c36bf524" data-node-id="87:118" data-name="Trạng thái">
                  <div className="ba-153c0a1809" data-node-id="87:119" data-name="Label">
                    <div className="ba-27397b7d50" data-node-id="87:120">
                      <p className="ba-0543b847c7">Trạng thái</p>
                    </div>
                  </div>
                  <div className="ba-153c0a1809" data-node-id="87:121" data-name="Container">
                    <div className="ba-77c874a9a4" data-node-id="87:122" data-name="Options" data-field-hints="">
                      <div className="ba-d29f1b8582" data-node-id="87:123" data-name="image clip">
                        <div className="ba-dcf08588c7">
                          <div className="ba-84cf76711d" data-node-id="87:124" data-name="image">
                            <img alt="" className="ba-8faf267d30" src={imgImage} />
                          </div>
                        </div>
                      </div>
                      <div className="ba-4a9b73a3b7" data-node-id="87:126" data-name="Container">
                        <div className="ba-4ed85d2730">
                          <div className="ba-e3832d5e2e" data-node-id="87:127">
                            <p className="ba-76aad9ca0a">Tất cả trạng thái</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-8ca6c53b8b" data-node-id="87:128" data-name="Container">
                      <div className="ba-c51752dc8c" data-node-id="87:129" data-name="SVG">
                        <img alt="" className="ba-8faf267d30" src={imgSvg11} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-cedb613f08" data-node-id="87:131" data-name="Loại yêu cầu">
                  <div className="ba-153c0a1809" data-node-id="87:132" data-name="Label">
                    <div className="ba-27397b7d50" data-node-id="87:133">
                      <p className="ba-0543b847c7">Loại yêu cầu</p>
                    </div>
                  </div>
                  <div className="ba-153c0a1809" data-node-id="87:134" data-name="Container">
                    <div className="ba-77c874a9a4" data-node-id="87:135" data-name="Options" data-field-hints="">
                      <div className="ba-d29f1b8582" data-node-id="87:136" data-name="image clip">
                        <div className="ba-dcf08588c7">
                          <div className="ba-84cf76711d" data-node-id="87:137" data-name="image">
                            <img alt="" className="ba-8faf267d30" src={imgImage} />
                          </div>
                        </div>
                      </div>
                      <div className="ba-4a9b73a3b7" data-node-id="87:139" data-name="Container">
                        <div className="ba-4ed85d2730">
                          <div className="ba-e3832d5e2e" data-node-id="87:140">
                            <p className="ba-76aad9ca0a">Tất cả loại yêu cầu</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-8ca6c53b8b" data-node-id="87:141" data-name="Container">
                      <div className="ba-c51752dc8c" data-node-id="87:142" data-name="SVG">
                        <img alt="" className="ba-8faf267d30" src={imgSvg11} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-a7057c6cbc" data-node-id="87:144" data-name="Xóa bộ lọc">
                  <div className="ba-860c2f1554" data-node-id="87:145" data-name="Button">
                    <div className="ba-c51752dc8c" data-node-id="87:146" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg12} />
                    </div>
                    <div className="ba-9021357745" data-node-id="87:148" data-name="Container">
                      <div className="ba-414d716530" data-node-id="87:149">
                        <p className="ba-c3dc13096a">Xóa bộ lọc</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-1a1cd5d60f" data-node-id="87:150" data-name="Data Table Card Container">
            <div className="ba-8d52439ba5" data-node-id="87:151" data-name="Table Header Toolbar">
              <div className="ba-5c02c68539">
                <div className="ba-d452ad70ec" data-node-id="87:152" data-name="Container">
                  <div className="ba-05a97fbc9f">
                    <div className="ba-bc1e341046" data-node-id="87:153" data-name="Heading 2">
                      <div className="ba-dd03ca6ea8" data-node-id="87:154">
                        <p className="ba-28a3b58435">Danh sách phiếu</p>
                      </div>
                    </div>
                    <div className="ba-96b721f794" data-node-id="87:155" data-name="Background">
                      <div className="ba-3e598eb42c" data-node-id="87:156">
                        <p className="ba-e32ac1aeb2">24 phiếu</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-9f32def6f4" data-node-id="87:157" data-name="Refresh Table Button">
                  <div className="ba-a9852c0fe8">
                    <div className="ba-b2a182ecf4" data-node-id="87:158" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg13} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-67366dcb7c" data-node-id="87:160" data-name="Table Element → Table">
              <div className="ba-5cb97d0813">
                <div className="ba-d8169103c9" data-node-id="87:161" data-name="Header → Row">
                  <div className="ba-c3bed6a1db" data-node-id="87:162" data-name="Cell">
                    <div className="ba-d976dca1b9">
                      <div className="ba-7c71b9452e" data-node-id="87:163">
                        <p className="ba-0543b847c7">STT</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-52246ddd04" data-node-id="87:164" data-name="Cell">
                    <div className="ba-d976dca1b9">
                      <div className="ba-7c71b9452e" data-node-id="87:165">
                        <p className="ba-0543b847c7">Mã phiếu</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-6bd7092710" data-node-id="87:166" data-name="Cell">
                    <div className="ba-d976dca1b9">
                      <div className="ba-7c71b9452e" data-node-id="87:167">
                        <p className="ba-0543b847c7">Loại yêu cầu</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-511ac7a841" data-node-id="87:168" data-name="Cell">
                    <div className="ba-7097f09fc2">
                      <div className="ba-7c71b9452e" data-node-id="87:169">
                        <p className="ba-e89739fa88">Người nhận tài</p>
                        <p className="ba-0543b847c7">sản</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-cf50ac87dd" data-node-id="87:170" data-name="Cell">
                    <div className="ba-d976dca1b9">
                      <div className="ba-7c71b9452e" data-node-id="87:171">
                        <p className="ba-0543b847c7">Ngày tạo</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-96e8d164d7" data-node-id="87:172" data-name="Cell">
                    <div className="ba-7097f09fc2">
                      <div className="ba-7c71b9452e" data-node-id="87:173">
                        <p className="ba-e89739fa88">Ngày cần sử</p>
                        <p className="ba-0543b847c7">dụng</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-3a8b446d4f" data-node-id="87:174" data-name="Cell">
                    <div className="ba-87374ecf35">
                      <div className="ba-c90a0499f3" data-node-id="87:175">
                        <p className="ba-0543b847c7">Trạng thái</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e79d811d98" data-node-id="87:176" data-name="Cell">
                    <div className="ba-fbe3b0aa39">
                      <div className="ba-c90a0499f3" data-node-id="87:177">
                        <p className="ba-e89739fa88">Thao</p>
                        <p className="ba-0543b847c7">tác</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="87:178" data-name="Body">
                  <div className="ba-acc3096632" data-node-id="87:179" data-name="Row 1">
                    <div className="ba-7957770369" data-node-id="87:180" data-name="Data">
                      <div className="ba-1b1e980650" data-node-id="87:181">
                        <p className="ba-c3dc13096a">1</p>
                      </div>
                    </div>
                    <div className="ba-d4f2995d3d" data-node-id="87:182" data-name="Data">
                      <div className="ba-d7caf6f713" data-node-id="87:183">
                        <p className="ba-abe3331891">CP-2026-</p>
                        <p className="ba-c3dc13096a">024</p>
                      </div>
                    </div>
                    <div className="ba-db62c02799" data-node-id="87:184" data-name="Data">
                      <div className="ba-05038235ac" data-node-id="87:185">
                        <p className="ba-c3dc13096a">Cho cá nhân</p>
                      </div>
                    </div>
                    <div className="ba-bc44fd146d" data-node-id="87:186" data-name="Data">
                      <div className="ba-be85475462" data-node-id="87:187">
                        <p className="ba-abe3331891">Nguyễn Minh</p>
                        <p className="ba-c3dc13096a">Anh</p>
                      </div>
                    </div>
                    <div className="ba-7bf623a959" data-node-id="87:188" data-name="Data">
                      <div className="ba-fc4bf78675" data-node-id="87:189">
                        <p className="ba-c3dc13096a">20/10/2026</p>
                      </div>
                    </div>
                    <div className="ba-fce3e15867" data-node-id="87:190" data-name="Data">
                      <div className="ba-fc4bf78675" data-node-id="87:191">
                        <p className="ba-c3dc13096a">25/10/2026</p>
                      </div>
                    </div>
                    <div className="ba-aabbb711e7" data-node-id="87:192" data-name="Data">
                      <div className="ba-19da2dcba8" data-node-id="87:193" data-name="Background+Border">
                        <div className="ba-f73fc59a3f" data-node-id="87:194">
                          <p className="ba-e32ac1aeb2">Chờ duyệt</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-0963d29f71" data-node-id="87:195" data-name="Data">
                      <div className="ba-b2a182ecf4" data-node-id="87:196" data-name="Button → SVG">
                        <img alt="" className="ba-8faf267d30" src={imgButtonSvg} />
                      </div>
                    </div>
                  </div>
                  <div className="ba-5992115602" data-node-id="87:200" data-name="Row 2">
                    <div className="ba-c3bed6a1db" data-node-id="87:201" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-1b1e980650" data-node-id="87:202">
                          <p className="ba-c3dc13096a">2</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-52246ddd04" data-node-id="87:203" data-name="Data">
                      <div className="ba-dfd0d734e2">
                        <div className="ba-d7caf6f713" data-node-id="87:204">
                          <p className="ba-abe3331891">CP-2026-</p>
                          <p className="ba-c3dc13096a">023</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-6bd7092710" data-node-id="87:205" data-name="Data">
                      <div className="ba-dfd0d734e2">
                        <div className="ba-05038235ac" data-node-id="87:206">
                          <p className="ba-abe3331891">Cho nhân viên</p>
                          <p className="ba-c3dc13096a">mới</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-511ac7a841" data-node-id="87:207" data-name="Data">
                      <div className="ba-dfd0d734e2">
                        <div className="ba-be85475462" data-node-id="87:208">
                          <p className="ba-abe3331891">Trần Hoàng</p>
                          <p className="ba-c3dc13096a">Nam</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-cf50ac87dd" data-node-id="87:209" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-fc4bf78675" data-node-id="87:210">
                          <p className="ba-c3dc13096a">19/10/2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-96e8d164d7" data-node-id="87:211" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-fc4bf78675" data-node-id="87:212">
                          <p className="ba-c3dc13096a">24/10/2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-3a8b446d4f" data-node-id="87:213" data-name="Data">
                      <div className="ba-748fb39641">
                        <div className="ba-19da2dcba8" data-node-id="87:214" data-name="Background+Border">
                          <div className="ba-f73fc59a3f" data-node-id="87:215">
                            <p className="ba-e32ac1aeb2">Chờ duyệt</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-e79d811d98" data-node-id="87:216" data-name="Data">
                      <div className="ba-7eed892b71">
                        <div className="ba-b2a182ecf4" data-node-id="87:217" data-name="Button → SVG">
                          <img alt="" className="ba-8faf267d30" src={imgButtonSvg} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-5992115602" data-node-id="87:221" data-name="Row 3">
                    <div className="ba-c3bed6a1db" data-node-id="87:222" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-1b1e980650" data-node-id="87:223">
                          <p className="ba-c3dc13096a">3</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-52246ddd04" data-node-id="87:224" data-name="Data">
                      <div className="ba-dfd0d734e2">
                        <div className="ba-d7caf6f713" data-node-id="87:225">
                          <p className="ba-abe3331891">CP-2026-</p>
                          <p className="ba-c3dc13096a">022</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-6bd7092710" data-node-id="87:226" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-05038235ac" data-node-id="87:227">
                          <p className="ba-c3dc13096a">Cho cá nhân</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-511ac7a841" data-node-id="87:228" data-name="Data">
                      <div className="ba-dfd0d734e2">
                        <div className="ba-be85475462" data-node-id="87:229">
                          <p className="ba-abe3331891">Nguyễn Minh</p>
                          <p className="ba-c3dc13096a">Anh</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-cf50ac87dd" data-node-id="87:230" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-fc4bf78675" data-node-id="87:231">
                          <p className="ba-c3dc13096a">18/10/2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-96e8d164d7" data-node-id="87:232" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-fc4bf78675" data-node-id="87:233">
                          <p className="ba-c3dc13096a">23/10/2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-3a8b446d4f" data-node-id="87:234" data-name="Data">
                      <div className="ba-748fb39641">
                        <div className="ba-4fe90bcfd5" data-node-id="87:235" data-name="Background+Border">
                          <div className="ba-311f7dcf66" data-node-id="87:236">
                            <p className="ba-e32ac1aeb2">Đã duyệt</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-e79d811d98" data-node-id="87:237" data-name="Data">
                      <div className="ba-7eed892b71">
                        <div className="ba-b2a182ecf4" data-node-id="87:238" data-name="Button → SVG">
                          <img alt="" className="ba-8faf267d30" src={imgButtonSvg} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-5992115602" data-node-id="87:242" data-name="Row 4">
                    <div className="ba-c3bed6a1db" data-node-id="87:243" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-1b1e980650" data-node-id="87:244">
                          <p className="ba-c3dc13096a">4</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-52246ddd04" data-node-id="87:245" data-name="Data">
                      <div className="ba-dfd0d734e2">
                        <div className="ba-d7caf6f713" data-node-id="87:246">
                          <p className="ba-abe3331891">CP-2026-</p>
                          <p className="ba-c3dc13096a">021</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-6bd7092710" data-node-id="87:247" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-05038235ac" data-node-id="87:248">
                          <p className="ba-c3dc13096a">Cho cá nhân</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-511ac7a841" data-node-id="87:249" data-name="Data">
                      <div className="ba-dfd0d734e2">
                        <div className="ba-be85475462" data-node-id="87:250">
                          <p className="ba-abe3331891">Nguyễn Minh</p>
                          <p className="ba-c3dc13096a">Anh</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-cf50ac87dd" data-node-id="87:251" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-fc4bf78675" data-node-id="87:252">
                          <p className="ba-c3dc13096a">17/10/2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-96e8d164d7" data-node-id="87:253" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-fc4bf78675" data-node-id="87:254">
                          <p className="ba-c3dc13096a">22/10/2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-3a8b446d4f" data-node-id="87:255" data-name="Data">
                      <div className="ba-748fb39641">
                        <div className="ba-5a4a35b6b1" data-node-id="87:256" data-name="Background+Border">
                          <div className="ba-37db6b5a07" data-node-id="87:257">
                            <p className="ba-e32ac1aeb2">Nháp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-e79d811d98" data-node-id="87:258" data-name="Data">
                      <div className="ba-7eed892b71">
                        <div className="ba-b2a182ecf4" data-node-id="87:259" data-name="Button → SVG">
                          <img alt="" className="ba-8faf267d30" src={imgButtonSvg} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-5992115602" data-node-id="87:263" data-name="Row 5">
                    <div className="ba-c3bed6a1db" data-node-id="87:264" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-1b1e980650" data-node-id="87:265">
                          <p className="ba-c3dc13096a">5</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-52246ddd04" data-node-id="87:266" data-name="Data">
                      <div className="ba-dfd0d734e2">
                        <div className="ba-d7caf6f713" data-node-id="87:267">
                          <p className="ba-abe3331891">CP-2026-</p>
                          <p className="ba-c3dc13096a">020</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-6bd7092710" data-node-id="87:268" data-name="Data">
                      <div className="ba-dfd0d734e2">
                        <div className="ba-05038235ac" data-node-id="87:269">
                          <p className="ba-abe3331891">Cho nhân viên</p>
                          <p className="ba-c3dc13096a">mới</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-511ac7a841" data-node-id="87:270" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-be85475462" data-node-id="87:271">
                          <p className="ba-c3dc13096a">Vũ Ngọc Mai</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-cf50ac87dd" data-node-id="87:272" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-fc4bf78675" data-node-id="87:273">
                          <p className="ba-c3dc13096a">16/10/2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-96e8d164d7" data-node-id="87:274" data-name="Data">
                      <div className="ba-72b7aedf8a">
                        <div className="ba-fc4bf78675" data-node-id="87:275">
                          <p className="ba-c3dc13096a">21/10/2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-3a8b446d4f" data-node-id="87:276" data-name="Data">
                      <div className="ba-748fb39641">
                        <div className="ba-b2ccf0e7b2" data-node-id="87:277" data-name="Background+Border">
                          <div className="ba-0ff76d7d2f" data-node-id="87:278">
                            <p className="ba-e32ac1aeb2">Từ chối</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-e79d811d98" data-node-id="87:279" data-name="Data">
                      <div className="ba-7eed892b71">
                        <div className="ba-b2a182ecf4" data-node-id="87:280" data-name="Button → SVG">
                          <img alt="" className="ba-8faf267d30" src={imgButtonSvg} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-986d340296" data-node-id="87:284" data-name="Row 6">
                    <div className="ba-c3bed6a1db" data-node-id="87:285" data-name="Data">
                      <div className="ba-058e78c0f7">
                        <div className="ba-1b1e980650" data-node-id="87:286">
                          <p className="ba-c3dc13096a">6</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-52246ddd04" data-node-id="87:287" data-name="Data">
                      <div className="ba-ef5eb90e62">
                        <div className="ba-d7caf6f713" data-node-id="87:288">
                          <p className="ba-abe3331891">CP-2026-</p>
                          <p className="ba-c3dc13096a">019</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-6bd7092710" data-node-id="87:289" data-name="Data">
                      <div className="ba-058e78c0f7">
                        <div className="ba-05038235ac" data-node-id="87:290">
                          <p className="ba-c3dc13096a">Cho cá nhân</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-511ac7a841" data-node-id="87:291" data-name="Data">
                      <div className="ba-ef5eb90e62">
                        <div className="ba-be85475462" data-node-id="87:292">
                          <p className="ba-abe3331891">Nguyễn Minh</p>
                          <p className="ba-c3dc13096a">Anh</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-cf50ac87dd" data-node-id="87:293" data-name="Data">
                      <div className="ba-058e78c0f7">
                        <div className="ba-fc4bf78675" data-node-id="87:294">
                          <p className="ba-c3dc13096a">15/10/2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-96e8d164d7" data-node-id="87:295" data-name="Data">
                      <div className="ba-058e78c0f7">
                        <div className="ba-fc4bf78675" data-node-id="87:296">
                          <p className="ba-c3dc13096a">20/10/2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-3a8b446d4f" data-node-id="87:297" data-name="Data">
                      <div className="ba-fbe3b0aa39">
                        <div className="ba-bbe8e5b87d" data-node-id="87:298" data-name="Background+Border">
                          <div className="ba-c22c170657" data-node-id="87:299">
                            <p className="ba-8a3ede2ed5">Đã cấp</p>
                            <p className="ba-e32ac1aeb2">phát</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-e79d811d98" data-node-id="87:300" data-name="Data">
                      <div className="ba-ce713602aa">
                        <div className="ba-b2a182ecf4" data-node-id="87:301" data-name="Button → SVG">
                          <img alt="" className="ba-8faf267d30" src={imgButtonSvg} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-599a3518a5" data-node-id="87:305" data-name="Pagination Bar">
              <div className="ba-a01eb4e7aa">
                <div className="ba-d787677df3" data-node-id="87:306" data-name="Container">
                  <div className="ba-435a042d02">
                    <div className="ba-bd61330c98" data-node-id="87:307">
                      <p>
                        <span className="ba-0543b847c7">{`Hiển thị `}</span>
                        <span className="ba-110dccd8fd">1–6</span>
                        <span className="ba-0543b847c7">{` trên `}</span>
                        <span className="ba-110dccd8fd">24</span>
                        <span className="ba-0543b847c7">{` phiếu`}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ba-d452ad70ec" data-node-id="87:308" data-name="Container">
                  <div className="ba-a5bb95be96">
                    <div className="ba-39ca0321a1" data-node-id="87:309" data-name="Page Size Selector">
                      <div className="ba-55f2889669" data-node-id="87:310" data-name="Options" data-field-hints="">
                        <div className="ba-d29f1b8582" data-node-id="87:311" data-name="image clip">
                          <div className="ba-9d18a21e53">
                            <div className="ba-209efaf4e6" data-node-id="87:312" data-name="image">
                              <img alt="" className="ba-8faf267d30" src={imgImage1} />
                            </div>
                          </div>
                        </div>
                        <div className="ba-d452ad70ec" data-node-id="87:314" data-name="Container">
                          <div className="ba-9e17303043">
                            <div className="ba-0e9840a4a7" data-node-id="87:315">
                              <p className="ba-76aad9ca0a">6 / trang</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-8159e3c74a" data-node-id="87:316" data-name="Container">
                        <div className="ba-5cca20e57d" data-node-id="87:317" data-name="SVG">
                          <img alt="" className="ba-8faf267d30" src={imgSvg14} />
                        </div>
                      </div>
                    </div>
                    <div className="ba-e8210ba625" data-node-id="87:319" data-name="Page Buttons">
                      <div className="ba-002637b866" data-node-id="87:320" data-name="Previous Button">
                        <div className="ba-c51752dc8c" data-node-id="87:321" data-name="SVG">
                          <img alt="" className="ba-8faf267d30" src={imgSvg15} />
                        </div>
                      </div>
                      <div className="ba-ae2a8202f5" data-node-id="87:323" data-name="Button - Active Page:margin">
                        <div className="ba-287ec304cb" data-node-id="87:324" data-name="Button - Active Page">
                          <div className="ba-6ca1f3b94d" data-node-id="87:325">
                            <p className="ba-0543b847c7">1</p>
                          </div>
                        </div>
                      </div>
                      <div className="ba-ae2a8202f5" data-node-id="87:326" data-name="Button - Other Pages:margin">
                        <div className="ba-a95d303b78" data-node-id="87:327" data-name="Button - Other Pages">
                          <div className="ba-ce2961d883" data-node-id="87:328">
                            <p className="ba-0543b847c7">2</p>
                          </div>
                        </div>
                      </div>
                      <div className="ba-ae2a8202f5" data-node-id="87:329" data-name="Button:margin">
                        <div className="ba-a95d303b78" data-node-id="87:330" data-name="Button">
                          <div className="ba-ce2961d883" data-node-id="87:331">
                            <p className="ba-0543b847c7">3</p>
                          </div>
                        </div>
                      </div>
                      <div className="ba-ae2a8202f5" data-node-id="87:332" data-name="Button:margin">
                        <div className="ba-a95d303b78" data-node-id="87:333" data-name="Button">
                          <div className="ba-ce2961d883" data-node-id="87:334">
                            <p className="ba-0543b847c7">4</p>
                          </div>
                        </div>
                      </div>
                      <div className="ba-ae2a8202f5" data-node-id="87:335" data-name="Next Button:margin">
                        <div className="ba-002637b866" data-node-id="87:336" data-name="Next Button">
                          <div className="ba-c51752dc8c" data-node-id="87:337" data-name="SVG">
                            <img alt="" className="ba-8faf267d30" src={imgSvg16} />
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
      </div>
    </div>
  );
}
