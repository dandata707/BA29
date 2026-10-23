/** Screen 143:25283 — Popup Thêm tài sản vào danh sách đề nghị thanh lý. Presentation adapted from Figma. */
import { h } from "../design-runtime.jsx";
const imgSvg = "/assets/9a5391b0-18ff-48ae-95b0-6c68a54f3994.svg";
const imgSvg1 = "/assets/17cd666b-a051-4b29-b52a-f6c1d8b94a1b.svg";
const imgImage = "/assets/d177a7b2-80ac-4323-a9d9-a769335d702e.svg";
const imgSvg2 = "/assets/4c638f3d-edaf-49e3-9554-ae6cb23041fd.svg";
const imgSvg3 = "/assets/9060d274-30bf-4d3d-8ce6-fec5bb2db2e0.svg";
const imgImage1 = "/assets/f221d3f4-009d-4c11-9a3a-f579622e02af.svg";
const imgImage2 = "/assets/79c70d41-f4fa-4bbf-ab3e-2a6ee057ed13.svg";
const imgSvg4 = "/assets/2bc25a40-db24-4b4c-8f2b-2845d5c93868.svg";
const imgSvg5 = "/assets/2eb51e82-8b44-4d7e-b792-e7323d481e9e.svg";
const imgSvg6 = "/assets/0ef88005-6ce6-42b8-8460-1c8ebcabb529.svg";
const imgSvg7 = "/assets/9e28aedf-f62a-4926-936f-f606120e8f76.svg";

export default function PopupThemTaiSnVaoDanhSachDNghThanhLy() {
  return (
    <div className="ba-acfebd299b" data-node-id="143:25283" style={{ backgroundImage: "linear-gradient(90deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Popup Thêm tài sản vào danh sách đề nghị thanh lý">
      <div className="ba-ae434b33ac" data-node-id="143:25284" data-name="Dialog - ModalContainer">
        <div className="ba-925cd91da6" data-node-id="143:25285" data-name="ModalHeader">
          <div className="ba-a7bb602c78">
            <div className="ba-d452ad70ec" data-node-id="143:25286" data-name="Heading 2">
              <div className="ba-4ed85d2730">
                <div className="ba-5eea874494" data-node-id="143:25287">
                  <p className="ba-f62dcabf0a">Thêm tài sản vào danh sách đề nghị thanh lý</p>
                </div>
              </div>
            </div>
            <div className="ba-9f32def6f4" data-node-id="143:25288" data-name="Button - Đóng hộp thoại">
              <div className="ba-a9852c0fe8">
                <div className="ba-b2a182ecf4" data-node-id="143:25289" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-1ed410a10c" data-node-id="143:25291" data-name="Main - ModalBody">
          <div className="ba-435a042d02">
            <div className="ba-ee16f1eff3" data-node-id="143:25292" data-name="Section - FilterToolbar (With Status Filter)">
              <div className="ba-a380d72c0f" data-node-id="143:25293" data-name="Search Keyword Input">
                <div className="ba-153c0a1809" data-node-id="143:25294" data-name="Label">
                  <div className="ba-420eca1f8f" data-node-id="143:25295">
                    <p className="ba-bf919b50f6">Từ khóa</p>
                  </div>
                </div>
                <div className="ba-94b3a11809" data-node-id="143:25296" data-name="Overlay+Shadow">
                  <div className="ba-cdbe9fa1c0" data-node-id="143:25297" data-name="Input" data-field-hints="">
                    <div className="ba-67366dcb7c" data-node-id="143:25298" data-name="Container">
                      <div className="ba-09c6898323">
                        <div className="ba-3a1c5436b9" data-node-id="143:25299">
                          <p className="ba-32bd4c7660">Nhập mã tài sản, tên tài sản...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-4de5094447" data-node-id="143:25300" data-name="Container">
                    <div className="ba-c51752dc8c" data-node-id="143:25301" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-17189c3e00" data-node-id="143:25303" data-name="Asset Type Dropdown Filter">
                <div className="ba-153c0a1809" data-node-id="143:25304" data-name="Label">
                  <div className="ba-420eca1f8f" data-node-id="143:25305">
                    <p className="ba-bf919b50f6">Loại tài sản</p>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="143:25306" data-name="Container">
                  <div className="ba-2d50f00e98" data-node-id="143:25307" data-name="Options" data-field-hints="">
                    <div className="ba-d29f1b8582" data-node-id="143:25308" data-name="image clip">
                      <div className="ba-f47f499fe7">
                        <div className="ba-84cf76711d" data-node-id="143:25309" data-name="image">
                          <img alt="" className="ba-8faf267d30" src={imgImage} />
                        </div>
                      </div>
                    </div>
                    <div className="ba-67366dcb7c" data-node-id="143:25311" data-name="Container">
                      <div className="ba-4ed85d2730">
                        <div className="ba-e3832d5e2e" data-node-id="143:25312">
                          <p className="ba-efcc9af6d1">Tất cả</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-87fe906a5a" data-node-id="143:25313" data-name="Container">
                    <div className="ba-c51752dc8c" data-node-id="143:25314" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-dbb43a93c7" data-node-id="143:25316" data-name="Asset Status Dropdown Filter">
                <div className="ba-153c0a1809" data-node-id="143:25317" data-name="Label">
                  <div className="ba-420eca1f8f" data-node-id="143:25318">
                    <p className="ba-bf919b50f6">Trạng thái tài sản</p>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="143:25319" data-name="Container">
                  <div className="ba-2d50f00e98" data-node-id="143:25320" data-name="Options" data-field-hints="">
                    <div className="ba-d29f1b8582" data-node-id="143:25321" data-name="image clip">
                      <div className="ba-e6df81aeb5">
                        <div className="ba-84cf76711d" data-node-id="143:25322" data-name="image">
                          <img alt="" className="ba-8faf267d30" src={imgImage} />
                        </div>
                      </div>
                    </div>
                    <div className="ba-67366dcb7c" data-node-id="143:25324" data-name="Container">
                      <div className="ba-4ed85d2730">
                        <div className="ba-e3832d5e2e" data-node-id="143:25325">
                          <p className="ba-efcc9af6d1">Tất cả</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-87fe906a5a" data-node-id="143:25326" data-name="Container">
                    <div className="ba-c51752dc8c" data-node-id="143:25327" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-84d27093af" data-node-id="143:25329" data-name="Reset Button → Button">
                <div className="ba-c51752dc8c" data-node-id="143:25330" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg3} />
                </div>
                <div className="ba-82d588d455" data-node-id="143:25332">
                  <p className="ba-efcc9af6d1">Đặt lại</p>
                </div>
              </div>
            </div>
            <div className="ba-4a60026a8a" data-node-id="143:25333" data-name="Section - AssetDataTable">
              <div className="ba-67366dcb7c" data-node-id="143:25334" data-name="Container">
                <div className="ba-5cb97d0813">
                  <div className="ba-04e554d6cf" data-node-id="143:25335" data-name="Table">
                    <div className="ba-ba9822f98f" data-node-id="143:25336" data-name="Header">
                      <div className="ba-e520bea30b" data-node-id="143:25337" data-name="Row">
                        <div className="ba-e92ff0e2c2" data-node-id="143:25338" data-name="Cell - Selection Checkbox Header">
                          <div className="ba-93f4960706" data-node-id="143:25339" data-name="Input - Chọn tất cả tài sản" data-field-hints="check " />
                        </div>
                        <div className="ba-63dbf2f248" data-node-id="143:25340" data-name="Cell - STT Column">
                          <div className="ba-744a5f188d" data-node-id="143:25341">
                            <p className="ba-bf919b50f6">STT</p>
                          </div>
                        </div>
                        <div className="ba-0c2d1079ad" data-node-id="143:25342" data-name="Cell - Asset Code Column">
                          <div className="ba-0882c6bf4a" data-node-id="143:25343">
                            <p className="ba-bf919b50f6">Mã tài sản</p>
                          </div>
                        </div>
                        <div className="ba-88ef00fae1" data-node-id="143:25344" data-name="Cell - Asset Name Column">
                          <div className="ba-0882c6bf4a" data-node-id="143:25345">
                            <p className="ba-bf919b50f6">Tên tài sản</p>
                          </div>
                        </div>
                        <div className="ba-e474c5eb91" data-node-id="143:25346" data-name="Cell - Asset Type Column">
                          <div className="ba-0882c6bf4a" data-node-id="143:25347">
                            <p className="ba-bf919b50f6">Loại tài sản</p>
                          </div>
                        </div>
                        <div className="ba-5ccb840828" data-node-id="143:25348" data-name="Cell - Original Price Column">
                          <div className="ba-d0546bd14d" data-node-id="143:25349">
                            <p className="ba-bf919b50f6">Nguyên giá (VNĐ)</p>
                          </div>
                        </div>
                        <div className="ba-c72652a67d" data-node-id="143:25350" data-name="Cell - Remaining Value Column">
                          <div className="ba-d0546bd14d" data-node-id="143:25351">
                            <p className="ba-bf919b50f6">Giá trị còn lại (VNĐ)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-021055fc28" data-node-id="143:25352" data-name="Body">
                      <div className="ba-5cf53ef857" data-node-id="143:25353" data-name="Row 1">
                        <div className="ba-9d6b10ed9e">
                          <div className="ba-46c69e18a8" data-node-id="143:25354" data-name="Data">
                            <div className="ba-022618d683" data-node-id="143:25355" data-name="Input" data-field-hints="check ">
                              <div className="ba-c51752dc8c" data-node-id="143:25356" data-name="image">
                                <img alt="" className="ba-8faf267d30" src={imgImage1} />
                              </div>
                            </div>
                          </div>
                          <div className="ba-d789ec7c56" data-node-id="143:25358" data-name="Data">
                            <div className="ba-df8fa2183e" data-node-id="143:25359">
                              <p className="ba-bf919b50f6">1</p>
                            </div>
                          </div>
                          <div className="ba-3cdefb830f" data-node-id="143:25360" data-name="Data">
                            <div className="ba-fe41aecdc2" data-node-id="143:25361">
                              <p className="ba-efcc9af6d1">TS-00128</p>
                            </div>
                          </div>
                          <div className="ba-7563ba3796" data-node-id="143:25362" data-name="Data">
                            <div className="ba-393dd59a79" data-node-id="143:25363">
                              <p className="ba-efcc9af6d1">Máy in Canon LBP</p>
                            </div>
                          </div>
                          <div className="ba-503d1e21cc" data-node-id="143:25364" data-name="Data">
                            <div className="ba-fc4bf78675" data-node-id="143:25365">
                              <p className="ba-efcc9af6d1">CCDC</p>
                            </div>
                          </div>
                          <div className="ba-946380484b" data-node-id="143:25366" data-name="Data">
                            <div className="ba-823d090a88" data-node-id="143:25367">
                              <p className="ba-efcc9af6d1">15,030,000</p>
                            </div>
                          </div>
                          <div className="ba-70418abab5" data-node-id="143:25368" data-name="Data">
                            <div className="ba-6bafa35661" data-node-id="143:25369">
                              <p className="ba-efcc9af6d1">8,500,000</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-9e453049c4" data-node-id="143:25370" data-name="Row 2">
                        <div className="ba-4849dab4c0">
                          <div className="ba-afae1125ec" data-node-id="143:25371" data-name="Data">
                            <div className="ba-1cf48f9e81">
                              <div className="ba-022618d683" data-node-id="143:25372" data-name="Input" data-field-hints="check ">
                                <div className="ba-c51752dc8c" data-node-id="143:25373" data-name="image">
                                  <img alt="" className="ba-8faf267d30" src={imgImage1} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ba-58bf993401" data-node-id="143:25375" data-name="Data">
                            <div className="ba-bc4667f356">
                              <div className="ba-df8fa2183e" data-node-id="143:25376">
                                <p className="ba-bf919b50f6">2</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-3ee31be11d" data-node-id="143:25377" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-fe41aecdc2" data-node-id="143:25378">
                                <p className="ba-efcc9af6d1">TS-00076</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-b599b064e5" data-node-id="143:25379" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-393dd59a79" data-node-id="143:25380">
                                <p className="ba-efcc9af6d1">Máy tính để bàn Dell</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-bbf9242d2e" data-node-id="143:25381" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-fc4bf78675" data-node-id="143:25382">
                                <p className="ba-efcc9af6d1">TSCĐ</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-deba0273a0" data-node-id="143:25383" data-name="Data">
                            <div className="ba-0e96b5de26">
                              <div className="ba-823d090a88" data-node-id="143:25384">
                                <p className="ba-efcc9af6d1">18,000,000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-84bbb9214c" data-node-id="143:25385" data-name="Data">
                            <div className="ba-0e96b5de26">
                              <div className="ba-6bafa35661" data-node-id="143:25386">
                                <p className="ba-efcc9af6d1">4,500,000</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-f1606cc753" data-node-id="143:25387" data-name="Row 3">
                        <div className="ba-4849dab4c0">
                          <div className="ba-afae1125ec" data-node-id="143:25388" data-name="Data">
                            <div className="ba-cc34e00cc4">
                              <div className="ba-93f4960706" data-node-id="143:25389" data-name="Input" data-field-hints="check " />
                            </div>
                          </div>
                          <div className="ba-58bf993401" data-node-id="143:25390" data-name="Data">
                            <div className="ba-bc4667f356">
                              <div className="ba-df8fa2183e" data-node-id="143:25391">
                                <p className="ba-bf919b50f6">3</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-3ee31be11d" data-node-id="143:25392" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-fe41aecdc2" data-node-id="143:25393">
                                <p className="ba-efcc9af6d1">TS-00086</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-b599b064e5" data-node-id="143:25394" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-393dd59a79" data-node-id="143:25395">
                                <p className="ba-efcc9af6d1">Điện thoại IP</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-bbf9242d2e" data-node-id="143:25396" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-fc4bf78675" data-node-id="143:25397">
                                <p className="ba-efcc9af6d1">CCDC</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-deba0273a0" data-node-id="143:25398" data-name="Data">
                            <div className="ba-0e96b5de26">
                              <div className="ba-823d090a88" data-node-id="143:25399">
                                <p className="ba-efcc9af6d1">5,200,000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-84bbb9214c" data-node-id="143:25400" data-name="Data">
                            <div className="ba-0e96b5de26">
                              <div className="ba-6bafa35661" data-node-id="143:25401">
                                <p className="ba-efcc9af6d1">1,800,000</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-9e453049c4" data-node-id="143:25402" data-name="Row 4">
                        <div className="ba-4849dab4c0">
                          <div className="ba-afae1125ec" data-node-id="143:25403" data-name="Data">
                            <div className="ba-1cf48f9e81">
                              <div className="ba-022618d683" data-node-id="143:25404" data-name="Input" data-field-hints="check ">
                                <div className="ba-c51752dc8c" data-node-id="143:25405" data-name="image">
                                  <img alt="" className="ba-8faf267d30" src={imgImage1} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ba-58bf993401" data-node-id="143:25407" data-name="Data">
                            <div className="ba-bc4667f356">
                              <div className="ba-df8fa2183e" data-node-id="143:25408">
                                <p className="ba-bf919b50f6">4</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-3ee31be11d" data-node-id="143:25409" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-fe41aecdc2" data-node-id="143:25410">
                                <p className="ba-efcc9af6d1">TS-00102</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-b599b064e5" data-node-id="143:25411" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-393dd59a79" data-node-id="143:25412">
                                <p className="ba-efcc9af6d1">Bàn làm việc gỗ</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-bbf9242d2e" data-node-id="143:25413" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-fc4bf78675" data-node-id="143:25414">
                                <p className="ba-efcc9af6d1">TSCĐ</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-deba0273a0" data-node-id="143:25415" data-name="Data">
                            <div className="ba-0e96b5de26">
                              <div className="ba-823d090a88" data-node-id="143:25416">
                                <p className="ba-efcc9af6d1">12,500,000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-84bbb9214c" data-node-id="143:25417" data-name="Data">
                            <div className="ba-0e96b5de26">
                              <div className="ba-6bafa35661" data-node-id="143:25418">
                                <p className="ba-efcc9af6d1">6,200,000</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-f1606cc753" data-node-id="143:25419" data-name="Row 5">
                        <div className="ba-4849dab4c0">
                          <div className="ba-afae1125ec" data-node-id="143:25420" data-name="Data">
                            <div className="ba-cc34e00cc4">
                              <div className="ba-93f4960706" data-node-id="143:25421" data-name="Input" data-field-hints="check " />
                            </div>
                          </div>
                          <div className="ba-58bf993401" data-node-id="143:25422" data-name="Data">
                            <div className="ba-bc4667f356">
                              <div className="ba-df8fa2183e" data-node-id="143:25423">
                                <p className="ba-bf919b50f6">5</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-3ee31be11d" data-node-id="143:25424" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-fe41aecdc2" data-node-id="143:25425">
                                <p className="ba-efcc9af6d1">TS-00115</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-b599b064e5" data-node-id="143:25426" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-393dd59a79" data-node-id="143:25427">
                                <p className="ba-efcc9af6d1">Điều hòa 12000BTU</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-bbf9242d2e" data-node-id="143:25428" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-fc4bf78675" data-node-id="143:25429">
                                <p className="ba-efcc9af6d1">TSCĐ</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-deba0273a0" data-node-id="143:25430" data-name="Data">
                            <div className="ba-0e96b5de26">
                              <div className="ba-823d090a88" data-node-id="143:25431">
                                <p className="ba-efcc9af6d1">14,800,000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-84bbb9214c" data-node-id="143:25432" data-name="Data">
                            <div className="ba-0e96b5de26">
                              <div className="ba-6bafa35661" data-node-id="143:25433">
                                <p className="ba-efcc9af6d1">7,400,000</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-603f00b5b0" data-node-id="143:25434" data-name="Row 6">
                        <div className="ba-4849dab4c0">
                          <div className="ba-afae1125ec" data-node-id="143:25435" data-name="Data">
                            <div className="ba-40282d5dc8">
                              <div className="ba-93f4960706" data-node-id="143:25436" data-name="Input" data-field-hints="check " />
                            </div>
                          </div>
                          <div className="ba-58bf993401" data-node-id="143:25437" data-name="Data">
                            <div className="ba-c5d453b335">
                              <div className="ba-df8fa2183e" data-node-id="143:25438">
                                <p className="ba-bf919b50f6">6</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-3ee31be11d" data-node-id="143:25439" data-name="Data">
                            <div className="ba-34ebb6131f">
                              <div className="ba-fe41aecdc2" data-node-id="143:25440">
                                <p className="ba-efcc9af6d1">TS-00127</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-b599b064e5" data-node-id="143:25441" data-name="Data">
                            <div className="ba-34ebb6131f">
                              <div className="ba-393dd59a79" data-node-id="143:25442">
                                <p className="ba-efcc9af6d1">Tủ hồ sơ sắt</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-bbf9242d2e" data-node-id="143:25443" data-name="Data">
                            <div className="ba-34ebb6131f">
                              <div className="ba-fc4bf78675" data-node-id="143:25444">
                                <p className="ba-efcc9af6d1">CCDC</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-deba0273a0" data-node-id="143:25445" data-name="Data">
                            <div className="ba-78ec73a141">
                              <div className="ba-823d090a88" data-node-id="143:25446">
                                <p className="ba-efcc9af6d1">3,600,000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-84bbb9214c" data-node-id="143:25447" data-name="Data">
                            <div className="ba-78ec73a141">
                              <div className="ba-6bafa35661" data-node-id="143:25448">
                                <p className="ba-efcc9af6d1">1,200,000</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-8b609d2d91" data-node-id="143:25449" data-name="PaginationControls">
                <div className="ba-92b2ef5332">
                  <div className="ba-d452ad70ec" data-node-id="143:25450" data-name="Total Count Display">
                    <div className="ba-9de4ff48ea">
                      <div className="ba-5102c3369e" data-node-id="143:25451">
                        <p>
                          <span className="ba-bf919b50f6">{`Hiển thị `}</span>
                          <span className="ba-09eb037133">1–6</span>
                          <span className="ba-bf919b50f6">{` trên `}</span>
                          <span className="ba-09eb037133">24</span>
                          <span className="ba-bf919b50f6">{` tài sản `}</span>
                        </p>
                      </div>
                      <div className="ba-66cdb64d37" data-node-id="143:25452">
                        <p className="ba-bf919b50f6">|</p>
                      </div>
                      <div className="ba-fb8406cbda" data-node-id="143:25453" data-name="Background+Border">
                        <div className="ba-3d0d6a2a2f" data-node-id="143:25454">
                          <p className="ba-bf919b50f6">Đã chọn 3 tài sản</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-d452ad70ec" data-node-id="143:25455" data-name="Pagination Navigation & Page Size">
                    <div className="ba-a5bb95be96">
                      <div className="ba-ded5c85101" data-node-id="143:25456" data-name="Items Per Page Selector → Options">
                        <div className="ba-d29f1b8582" data-node-id="143:25457" data-name="image clip">
                          <div className="ba-b3a5ef65bc">
                            <div className="ba-58d29b27c0" data-node-id="143:25458" data-name="image">
                              <img alt="" className="ba-8faf267d30" src={imgImage2} />
                            </div>
                          </div>
                        </div>
                        <div className="ba-d452ad70ec" data-node-id="143:25460" data-name="Container">
                          <div className="ba-e2c284853f">
                            <div className="ba-bfe32bcfaf" data-node-id="143:25461">
                              <p className="ba-bf919b50f6">6 / trang</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-eb30f36306" data-node-id="143:25462" data-name="Nav - Pagination">
                        <div className="ba-57fe3d2cc4" data-node-id="143:25463" data-name="Button - Trang trước">
                          <div className="ba-456e512c32">
                            <div className="ba-c51752dc8c" data-node-id="143:25464" data-name="SVG">
                              <img alt="" className="ba-8faf267d30" src={imgSvg4} />
                            </div>
                          </div>
                        </div>
                        <div className="ba-57fe3d2cc4" data-node-id="143:25466" data-name="Button - Page 1 (Active):margin">
                          <div className="ba-4ed85d2730">
                            <div className="ba-a8e1cee01b" data-node-id="143:25467" data-name="Button - Page 1 (Active)">
                              <div className="ba-635aa8129a" data-node-id="143:25468">
                                <p className="ba-bf919b50f6">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-57fe3d2cc4" data-node-id="143:25469" data-name="Button - Page 2:margin">
                          <div className="ba-4ed85d2730">
                            <div className="ba-fa27c50405" data-node-id="143:25470" data-name="Button - Page 2">
                              <div className="ba-37db6b5a07" data-node-id="143:25471">
                                <p className="ba-bf919b50f6">2</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-57fe3d2cc4" data-node-id="143:25472" data-name="Button - Page 3:margin">
                          <div className="ba-4ed85d2730">
                            <div className="ba-fa27c50405" data-node-id="143:25473" data-name="Button - Page 3">
                              <div className="ba-37db6b5a07" data-node-id="143:25474">
                                <p className="ba-bf919b50f6">3</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-57fe3d2cc4" data-node-id="143:25475" data-name="Button - Page 4:margin">
                          <div className="ba-4ed85d2730">
                            <div className="ba-fa27c50405" data-node-id="143:25476" data-name="Button - Page 4">
                              <div className="ba-37db6b5a07" data-node-id="143:25477">
                                <p className="ba-bf919b50f6">4</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-d452ad70ec" data-node-id="143:25478" data-name="Button - Trang tiếp theo:margin">
                          <div className="ba-4ed85d2730">
                            <div className="ba-62914e63f1" data-node-id="143:25479" data-name="Button - Trang tiếp theo">
                              <div className="ba-c51752dc8c" data-node-id="143:25480" data-name="SVG">
                                <img alt="" className="ba-8faf267d30" src={imgSvg5} />
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
        <div className="ba-61b2a4c4af" data-node-id="143:25482" data-name="ModalFooter">
          <div className="ba-b7615c2fdd">
            <div className="ba-702395851d" data-node-id="143:25483" data-name="Margin">
              <div className="ba-37c6f079ee">
                <div className="ba-9eae8902b4" data-node-id="143:25484" data-name="Container">
                  <div className="ba-c51752dc8c" data-node-id="143:25485" data-name="SVG">
                    <img alt="" className="ba-8faf267d30" src={imgSvg6} />
                  </div>
                  <div className="ba-39ca0321a1" data-node-id="143:25487" data-name="Container">
                    <div className="ba-7bc6da7c40" data-node-id="143:25488">
                      <p className="ba-bf919b50f6">Tài sản được chọn sẽ được đưa vào bảng đề nghị để chọn lý do thanh lý</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-d452ad70ec" data-node-id="143:25489" data-name="Container">
              <div className="ba-a5bb95be96">
                <div className="ba-2c730cfdd4" data-node-id="143:25490" data-name="Button">
                  <div className="ba-645b6d0c79" data-node-id="143:25491">
                    <p className="ba-efcc9af6d1">Hủy</p>
                  </div>
                </div>
                <div className="ba-a688bd6912" data-node-id="143:25492" data-name="Button">
                  <div className="ba-c51752dc8c" data-node-id="143:25493" data-name="SVG">
                    <img alt="" className="ba-8faf267d30" src={imgSvg7} />
                  </div>
                  <div className="ba-b5300aff3b" data-node-id="143:25495">
                    <p className="ba-efcc9af6d1">Thêm vào danh sách (3)</p>
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
