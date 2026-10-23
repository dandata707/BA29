/** Screen 123:801 — Biên bản bàn giao tài sản - AssetFlow. Presentation adapted from Figma. */
import { h } from "../design-runtime.jsx";
const imgSvg = "/assets/0b0ac171-2941-482b-9716-f6da558cde18.svg";
const imgSvg1 = "/assets/8dcfa8fd-088e-4c0f-bf8b-454da5bf29fa.svg";
const imgSvg2 = "/assets/d1571034-aac7-423e-958f-68aed9429416.svg";
const imgSvg3 = "/assets/f18f35a3-e27b-4152-a34a-c7baaf4a59e5.svg";
const imgSvg4 = "/assets/345ae881-af0a-486d-9226-5262c62ce9ae.svg";
const imgSvg5 = "/assets/8c0d75d3-3a1a-4c91-bdb3-52ed2286c090.svg";
const imgSvg6 = "/assets/a2681ece-e069-42be-9685-0321cf4f28cd.svg";
const imgSvg7 = "/assets/14bab1a6-286e-4b19-a37e-acf9f94b6d4e.svg";
const imgSvg8 = "/assets/9896f7ff-7478-492c-8938-bf85b8d8f739.svg";
const imgSvg9 = "/assets/920e3308-3db5-412e-b1b2-45e17686ea98.svg";
const imgSvg10 = "/assets/ffa595b5-4bc2-4dda-9fd0-187ba3829fea.svg";
const imgSvg11 = "/assets/3e262f43-308a-48fa-a036-5de1b28cf913.svg";
const imgSvg12 = "/assets/04e00aaa-154d-4d74-b36d-1446138249cd.svg";
const imgSvg13 = "/assets/d480da45-1404-4b26-b9b3-8e69362e0a84.svg";

export default function BienBnBanGiaoTaiSnAssetFlow({ isDetail = false, recordCode = "BBBG-2024-0325", role }) {
  return (
    <div className="ba-49709471ed" data-node-id="123:801" style={{ backgroundImage: "linear-gradient(90deg, rgb(240, 244, 249) 0%, rgb(240, 244, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Biên bản bàn giao tài sản - AssetFlow">
      <div className="ba-725ae3b38c" data-node-id="123:802" data-name="Aside - LeftSidebar">
        <div className="ba-10552d7368" data-node-id="123:803" data-name="Container">
          <div className="ba-5cb97d0813">
            <div className="ba-3be9fc2649" data-node-id="123:804" data-name="Logo thương hiệu AssetFlow">
              <div className="ba-78e13d11d6" data-node-id="123:805" style={{ backgroundImage: "linear-gradient(45.00000000000001deg, rgb(29, 78, 216) 0%, rgb(37, 99, 235) 50%, rgb(34, 211, 238) 100%)" }} data-name="Background">
                <div className="ba-b281d78eb5" data-node-id="123:806" data-name="Overlay+Shadow" />
                <div className="ba-b2a182ecf4" data-node-id="123:807" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg} />
                </div>
              </div>
              <div className="ba-ab7becbfcb" data-node-id="123:809" data-name="Container">
                <div className="ba-153c0a1809" data-node-id="123:810" data-name="Heading 1">
                  <div className="ba-4a2d5f3f1e" data-node-id="123:811">
                    <p className="ba-e32ac1aeb2">AssetFlow</p>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="123:812" data-name="Container">
                  <div className="ba-e364c02543" data-node-id="123:813">
                    <p className="ba-1b6a18879c">QUẢN LÝ TÀI SẢN</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-ac7e052dc4" data-node-id="123:814" data-name="Tiêu đề nhóm menu">
              <div className="ba-c55053c05b" data-node-id="123:815">
                <p className="ba-e9e8a40ea4">QUẢN LÝ NGHIỆP VỤ</p>
              </div>
            </div>
            <div className="ba-febf40c1f2" data-node-id="123:816" data-name="Nav - Menu Items">
              <div className="ba-30f703129e" data-node-id="123:817" data-name="Link - Tổng quan">
                <div className="ba-b2a182ecf4" data-node-id="123:818" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg1} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="123:820" data-name="Container">
                  <div className="ba-99ea7dd38d" data-node-id="123:821">
                    <p className="ba-efcc9af6d1">Tổng quan</p>
                  </div>
                </div>
              </div>
              <div className="ba-30f703129e" data-node-id="123:822" data-name="Link - Danh mục tài sản">
                <div className="ba-b2a182ecf4" data-node-id="123:823" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg2} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="123:825" data-name="Container">
                  <div className="ba-99ea7dd38d" data-node-id="123:826">
                    <p className="ba-efcc9af6d1">Danh mục tài sản</p>
                  </div>
                </div>
              </div>
              <div className="ba-4c62e33c8f" data-node-id="123:827" data-name="Cấp phát tài sản (Active / Dropdown Mở)">
                <div className="ba-a96dc3f7bb" data-node-id="123:828" data-name="Button">
                  <div className="ba-ad50363799" data-node-id="123:829" data-name="Container">
                    <div className="ba-b2a182ecf4" data-node-id="123:830" data-name="SVG">
                      <img alt="" className="ba-8faf267d30" src={imgSvg3} />
                    </div>
                    <div className="ba-9021357745" data-node-id="123:832" data-name="Container">
                      <div className="ba-ac26f26f76" data-node-id="123:833">
                        <p className="ba-efcc9af6d1">Cấp phát tài sản</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-c51752dc8c" data-node-id="123:834" data-name="SVG">
                    <img alt="" className="ba-8faf267d30" src={imgSvg4} />
                  </div>
                </div>
                <div className="ba-d82e35db30" data-node-id="123:836" data-name="Sub-menu">
                  <div className="ba-e1c468c93a" data-node-id="123:837" data-name="Link">
                    <div className="ba-65a86d28df" data-node-id="123:838" data-name="Background" />
                    <div className="ba-39ca0321a1" data-node-id="123:839" data-name="Container">
                      <div className="ba-3e598eb42c" data-node-id="123:840">
                        <p className="ba-bf919b50f6">Yêu cầu cấp phát</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-e1c468c93a" data-node-id="123:841" data-name="Link">
                    <div className="ba-65a86d28df" data-node-id="123:842" data-name="Background" />
                    <div className="ba-39ca0321a1" data-node-id="123:843" data-name="Container">
                      <div className="ba-3e598eb42c" data-node-id="123:844">
                        <p className="ba-bf919b50f6">Định mức tài sản</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-9be6af4037" data-node-id="123:845" data-name="Link">
                    <div className="ba-b0d7e229bb" data-node-id="123:846" data-name="Background" />
                    <div className="ba-39ca0321a1" data-node-id="123:847" data-name="Container">
                      <div className="ba-3d0d6a2a2f" data-node-id="123:848">
                        <p className="ba-bf919b50f6">Bàn giao tài sản</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-30f703129e" data-node-id="123:849" data-name="Link - Thu hồi tài sản">
                <div className="ba-b2a182ecf4" data-node-id="123:850" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg5} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="123:852" data-name="Container">
                  <div className="ba-99ea7dd38d" data-node-id="123:853">
                    <p className="ba-efcc9af6d1">Thu hồi tài sản</p>
                  </div>
                </div>
              </div>
              <div className="ba-30f703129e" data-node-id="123:854" data-name="Link - iều chuyển tài sản">
                <div className="ba-b2a182ecf4" data-node-id="123:855" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg6} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="123:857" data-name="Container">
                  <div className="ba-99ea7dd38d" data-node-id="123:858">
                    <p className="ba-efcc9af6d1">Điều chuyển tài sản</p>
                  </div>
                </div>
              </div>
              <div className="ba-30f703129e" data-node-id="123:859" data-name="Link - Bảo trì tài sản">
                <div className="ba-b2a182ecf4" data-node-id="123:860" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg7} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="123:863" data-name="Container">
                  <div className="ba-99ea7dd38d" data-node-id="123:864">
                    <p className="ba-efcc9af6d1">Bảo trì tài sản</p>
                  </div>
                </div>
              </div>
              <div className="ba-30f703129e" data-node-id="123:865" data-name="Link - Kiểm kê tài sản">
                <div className="ba-b2a182ecf4" data-node-id="123:866" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg8} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="123:868" data-name="Container">
                  <div className="ba-99ea7dd38d" data-node-id="123:869">
                    <p className="ba-efcc9af6d1">Kiểm kê tài sản</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-603f00b5b0" data-node-id="123:870" data-name="Bottom User & Help Section">
          <div className="ba-86a1c0abc6">
            <div className="ba-9f22247bfe" data-node-id="123:871" data-name="Link - Trợ giúp">
              <div className="ba-86fdd127d3">
                <div className="ba-b2a182ecf4" data-node-id="123:872" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg9} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="123:874" data-name="Container">
                  <div className="ba-99ea7dd38d" data-node-id="123:875">
                    <p className="ba-efcc9af6d1">Trợ giúp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-d7b3270ef4" data-node-id="123:876" data-name="Thông tin User">
              <div className="ba-a976c58ae7">
                <div className="ba-d452ad70ec" data-node-id="123:877" data-name="Container">
                  <div className="ba-b78d3db766">
                    <div className="ba-4156da2bac" data-node-id="123:878" data-name="Background">
                      <div className="ba-672223f3e0" data-node-id="123:879">
                        <p className="ba-bf919b50f6">LP</p>
                      </div>
                    </div>
                    <div className="ba-5bf551fee8" data-node-id="123:880" data-name="Container">
                      <div className="ba-c475d979ca" data-node-id="123:881" data-name="Heading 4">
                        <div className="ba-e318b6eeca" data-node-id="123:882">
                          <p className="ba-bf919b50f6">Lê Hoàng Phúc</p>
                        </div>
                      </div>
                      <div className="ba-c475d979ca" data-node-id="123:883" data-name="Container">
                        <div className="ba-b2dd19a1b7" data-node-id="123:884">
                          <p className="ba-b30c265199">Nhân viên quản lý tài sản</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-c51752dc8c" data-node-id="123:885" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg10} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-b00285a837" data-node-id="123:887" data-name="MainContentArea">
        <div className="ba-63dd554861" data-node-id="123:888" data-name="TopHeader">
          <div className="ba-d452ad70ec" data-node-id="123:889" data-name="Nav - Breadcrumb">
            <div className="ba-d85f0a0f5e">
              <div className="ba-39ca0321a1" data-node-id="123:890" data-name="Link">
                <div className="ba-c51752dc8c" data-node-id="123:891" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg11} />
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="123:893" data-name="Container">
                <div className="ba-61132f2181" data-node-id="123:894">
                  <p className="ba-bf919b50f6">/</p>
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="123:895" data-name="Link">
                <div className="ba-6d0607a31f" data-node-id="123:896">
                  <p className="ba-bf919b50f6">Cấp phát tài sản</p>
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="123:897" data-name="Container">
                <div className="ba-61132f2181" data-node-id="123:898">
                  <p className="ba-bf919b50f6">/</p>
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="123:899" data-name="Link">
                <div className="ba-6d0607a31f" data-node-id="123:900">
                  <p className="ba-bf919b50f6">Yêu cầu cấp phát</p>
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="123:901" data-name="Container">
                <div className="ba-61132f2181" data-node-id="123:902">
                  <p className="ba-bf919b50f6">/</p>
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="123:903" data-name="Container">
                <div className="ba-d0c317a98b" data-node-id="123:904">
                  <p className="ba-bf919b50f6">Biên bản bàn giao tài sản</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-d452ad70ec" data-node-id="123:905" data-name="Right Actions: Notifications & Avatar">
            <div className="ba-244c842be0">
              <div className="ba-7832b65c44" data-node-id="123:906" data-name="Button - Thông báo">
                <div className="ba-b2a182ecf4" data-node-id="123:907" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg12} />
                </div>
                <div className="ba-8985025eff" data-node-id="123:909" data-name="Background">
                  <div className="ba-36bddc26bf" data-node-id="123:910" data-name="Overlay+Shadow" />
                  <div className="ba-0b2d9fc41b" data-node-id="123:911">
                    <p className="ba-1b6a18879c">3</p>
                  </div>
                </div>
              </div>
              <div className="ba-860c2f1554" data-node-id="123:912" data-name="Profile Avatar NT">
                <div className="ba-06adc2cc49" data-node-id="123:913" data-name="Background+Shadow">
                  <div className="ba-597a0874a8" data-node-id="123:914">
                    <p className="ba-bf919b50f6">NT</p>
                  </div>
                </div>
                <div className="ba-5cca20e57d" data-node-id="123:915" data-name="SVG">
                  <img alt="" className="ba-8faf267d30" src={imgSvg13} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-9cd583f246" data-node-id="123:917" data-name="Main - ScrollableBodyContent">
          <div className="ba-275c7c03e7" data-node-id="123:918" data-name="FormContainerCard">
            <div className="ba-67366dcb7c" data-node-id="123:919" data-name="Header Tiêu đề & Thông tin số biên bản">
              <div className="ba-638611f77a">
                <div className="ba-ab7becbfcb" data-node-id="123:920" data-name="Container">
                  <div className="ba-153c0a1809" data-node-id="123:921" data-name="Heading 2">
                    <div className="ba-7996cb8755" data-node-id="123:922">
                      <p className="ba-a0118ea47e">{isDetail ? "Chi tiết biên bản bàn giao tài sản" : "Biên bản bàn giao tài sản"}</p>
                    </div>
                  </div>
                  <div className="ba-153c0a1809" data-node-id="123:923" data-name="Container">
                    <div className="ba-7bc6da7c40" data-node-id="123:924">
                      <p className="ba-bf919b50f6">Lập biên bản bàn giao tài sản giữa các cá nhân/đơn vị trong tổ chức</p>
                    </div>
                  </div>
                </div>
                <div className="ba-8193e618e1" data-node-id="123:925" data-name="Khối 2 ô thông tin biên bản bên góc phải">
                  <div className="ba-a8f6458469" data-node-id="123:926" data-name="Số biên bản">
                    <div className="ba-33d650114e" data-node-id="123:927">
                      <p className="ba-e9e8a40ea4">Số biên bản</p>
                    </div>
                    <div className="ba-b5a8f4370b" data-node-id="123:928">
                      <p className="ba-efcc9af6d1">{recordCode}</p>
                    </div>
                  </div>
                  <div className="ba-fb2fd2ae36" data-node-id="123:929" data-name="Ngày lập biên bản">
                    <div className="ba-33d650114e" data-node-id="123:930">
                      <p className="ba-e9e8a40ea4">Ngày lập biên bản</p>
                    </div>
                    <div className="ba-b5a8f4370b" data-node-id="123:931">
                      <p className="ba-efcc9af6d1">25/03/2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-67366dcb7c" data-node-id="123:932" data-name="2 Card: Bên giao & Bên nhận">
              <div className="ba-a75988e6c0">
                <div className="ba-7928d86b49" data-node-id="123:933" data-name="Card: Bên giao">
                  <div className="ba-67366dcb7c" data-node-id="123:934" data-name="Container">
                    <div className="ba-63fa0627b7">
                      <div className="ba-153c0a1809" data-node-id="123:935" data-name="Heading 3">
                        <div className="ba-dcc2e6663b" data-node-id="123:936">
                          <p className="ba-bf919b50f6">Bên giao</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="123:937" data-name="Container">
                        <div className="ba-380a733d22" data-node-id="123:938">
                          <p className="ba-bf919b50f6">Thông tin người bàn giao tài sản</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-67366dcb7c" data-node-id="123:939" data-name="Container">
                    <div className="ba-d7e7d619f8">
                      <div className="ba-b2d1dcb9c4" data-node-id="123:940" data-name="Hàng 1">
                        <div className="ba-1e0456ea49" data-node-id="123:941" data-name="Container">
                          <div className="ba-153c0a1809" data-node-id="123:942" data-name="Label">
                            <div className="ba-775083b055" data-node-id="123:943">
                              <p>
                                <span className="ba-bf919b50f6">{`Họ và tên `}</span>
                                <span className="ba-dad454b1f4">*</span>
                              </p>
                            </div>
                          </div>
                          <div className="ba-f1383e6f30" data-node-id="123:944" data-name="Input" data-field-hints="">
                            <div className="ba-4a9b73a3b7" data-node-id="123:945" data-name="Container">
                              <div className="ba-5cb97d0813">
                                <div className="ba-05fc614f04" data-node-id="123:946">
                                  <p className="ba-bf919b50f6">Trần Văn Minh</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-1e0456ea49" data-node-id="123:947" data-name="Container">
                          <div className="ba-153c0a1809" data-node-id="123:948" data-name="Label">
                            <div className="ba-775083b055" data-node-id="123:949">
                              <p>
                                <span className="ba-bf919b50f6">{`Mã nhân viên `}</span>
                                <span className="ba-dad454b1f4">*</span>
                              </p>
                            </div>
                          </div>
                          <div className="ba-f1383e6f30" data-node-id="123:950" data-name="Input" data-field-hints="">
                            <div className="ba-4a9b73a3b7" data-node-id="123:951" data-name="Container">
                              <div className="ba-5cb97d0813">
                                <div className="ba-05fc614f04" data-node-id="123:952">
                                  <p className="ba-bf919b50f6">NV00123</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-b2d1dcb9c4" data-node-id="123:953" data-name="Hàng 2">
                        <div className="ba-1e0456ea49" data-node-id="123:954" data-name="Container">
                          <div className="ba-153c0a1809" data-node-id="123:955" data-name="Label">
                            <div className="ba-775083b055" data-node-id="123:956">
                              <p className="ba-bf919b50f6">Phòng ban</p>
                            </div>
                          </div>
                          <div className="ba-f1383e6f30" data-node-id="123:957" data-name="Input" data-field-hints="">
                            <div className="ba-4a9b73a3b7" data-node-id="123:958" data-name="Container">
                              <div className="ba-5cb97d0813">
                                <div className="ba-05fc614f04" data-node-id="123:959">
                                  <p className="ba-bf919b50f6">Phòng Hành chính</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-1e0456ea49" data-node-id="123:960" data-name="Container">
                          <div className="ba-153c0a1809" data-node-id="123:961" data-name="Label">
                            <div className="ba-775083b055" data-node-id="123:962">
                              <p className="ba-bf919b50f6">Chức vụ</p>
                            </div>
                          </div>
                          <div className="ba-f1383e6f30" data-node-id="123:963" data-name="Input" data-field-hints="">
                            <div className="ba-4a9b73a3b7" data-node-id="123:964" data-name="Container">
                              <div className="ba-5cb97d0813">
                                <div className="ba-05fc614f04" data-node-id="123:965">
                                  <p className="ba-bf919b50f6">Chuyên viên</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-c4e469bff8" data-node-id="123:966" data-name="Card: Bên nhận">
                  <div className="ba-67366dcb7c" data-node-id="123:967" data-name="Container">
                    <div className="ba-63fa0627b7">
                      <div className="ba-153c0a1809" data-node-id="123:968" data-name="Heading 3">
                        <div className="ba-7e414fbdaa" data-node-id="123:969">
                          <p className="ba-bf919b50f6">Bên nhận</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="123:970" data-name="Container">
                        <div className="ba-380a733d22" data-node-id="123:971">
                          <p className="ba-bf919b50f6">Thông tin người nhận tài sản</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-67366dcb7c" data-node-id="123:972" data-name="Container">
                    <div className="ba-d7e7d619f8">
                      <div className="ba-b2d1dcb9c4" data-node-id="123:973" data-name="Hàng 1">
                        <div className="ba-1e0456ea49" data-node-id="123:974" data-name="Container">
                          <div className="ba-153c0a1809" data-node-id="123:975" data-name="Label">
                            <div className="ba-775083b055" data-node-id="123:976">
                              <p>
                                <span className="ba-bf919b50f6">{`Họ và tên `}</span>
                                <span className="ba-dad454b1f4">*</span>
                              </p>
                            </div>
                          </div>
                          <div className="ba-f1383e6f30" data-node-id="123:977" data-name="Input" data-field-hints="">
                            <div className="ba-4a9b73a3b7" data-node-id="123:978" data-name="Container">
                              <div className="ba-5cb97d0813">
                                <div className="ba-05fc614f04" data-node-id="123:979">
                                  <p className="ba-bf919b50f6">Nguyễn Thị Mai</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-1e0456ea49" data-node-id="123:980" data-name="Container">
                          <div className="ba-153c0a1809" data-node-id="123:981" data-name="Label">
                            <div className="ba-775083b055" data-node-id="123:982">
                              <p>
                                <span className="ba-bf919b50f6">{`Mã nhân viên `}</span>
                                <span className="ba-dad454b1f4">*</span>
                              </p>
                            </div>
                          </div>
                          <div className="ba-f1383e6f30" data-node-id="123:983" data-name="Input" data-field-hints="">
                            <div className="ba-4a9b73a3b7" data-node-id="123:984" data-name="Container">
                              <div className="ba-5cb97d0813">
                                <div className="ba-05fc614f04" data-node-id="123:985">
                                  <p className="ba-bf919b50f6">NV00456</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-b2d1dcb9c4" data-node-id="123:986" data-name="Hàng 2">
                        <div className="ba-1e0456ea49" data-node-id="123:987" data-name="Container">
                          <div className="ba-153c0a1809" data-node-id="123:988" data-name="Label">
                            <div className="ba-775083b055" data-node-id="123:989">
                              <p className="ba-bf919b50f6">Phòng ban</p>
                            </div>
                          </div>
                          <div className="ba-f1383e6f30" data-node-id="123:990" data-name="Input" data-field-hints="">
                            <div className="ba-4a9b73a3b7" data-node-id="123:991" data-name="Container">
                              <div className="ba-5cb97d0813">
                                <div className="ba-05fc614f04" data-node-id="123:992">
                                  <p className="ba-bf919b50f6">Phòng Kinh doanh</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-1e0456ea49" data-node-id="123:993" data-name="Container">
                          <div className="ba-153c0a1809" data-node-id="123:994" data-name="Label">
                            <div className="ba-775083b055" data-node-id="123:995">
                              <p className="ba-bf919b50f6">Chức vụ</p>
                            </div>
                          </div>
                          <div className="ba-f1383e6f30" data-node-id="123:996" data-name="Input" data-field-hints="">
                            <div className="ba-4a9b73a3b7" data-node-id="123:997" data-name="Container">
                              <div className="ba-5cb97d0813">
                                <div className="ba-05fc614f04" data-node-id="123:998">
                                  <p className="ba-bf919b50f6">Trưởng phòng</p>
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
            <div className="ba-67366dcb7c" data-node-id="123:999" data-name="AssetListSection">
              <div className="ba-d7e7d619f8">
                <div className="ba-c96fe10678" data-node-id="123:1000" data-name="Container">
                  <div className="ba-39ca0321a1" data-node-id="123:1001" data-name="Heading 3">
                    <div className="ba-b9fa027efa" data-node-id="123:1002">
                      <p className="ba-76aad9ca0a">Danh sách tài sản bàn giao</p>
                    </div>
                  </div>
                  <div className="ba-b0476147a5" data-node-id="123:1003" data-name="Button">
                    <div className="ba-80af321d1a" data-node-id="123:1004">
                      <p className="ba-bf919b50f6">Thêm tài sản vào</p>
                    </div>
                  </div>
                </div>
                <div className="ba-74369b06ae" data-node-id="123:1005" data-name="Table">
                  <div className="ba-67366dcb7c" data-node-id="123:1006" data-name="Table">
                    <div className="ba-4ed85d2730">
                      <div className="ba-a2827de01d" data-node-id="123:1007" data-name="Header → Row">
                        <div className="ba-afae1125ec" data-node-id="123:1008" data-name="Cell">
                          <div className="ba-32478d93f1">
                            <div className="ba-21a52d6817" data-node-id="123:1009">
                              <p className="ba-bf919b50f6">STT</p>
                            </div>
                          </div>
                        </div>
                        <div className="ba-a03733d488" data-node-id="123:1010" data-name="Cell">
                          <div className="ba-34ebb6131f">
                            <div className="ba-0dc1307d6d" data-node-id="123:1011">
                              <p className="ba-bf919b50f6">Tên tài sản</p>
                            </div>
                          </div>
                        </div>
                        <div className="ba-bca5fb090d" data-node-id="123:1012" data-name="Cell">
                          <div className="ba-34ebb6131f">
                            <div className="ba-0dc1307d6d" data-node-id="123:1013">
                              <p className="ba-bf919b50f6">Loại tài sản</p>
                            </div>
                          </div>
                        </div>
                        <div className="ba-a4b3767b16" data-node-id="123:1014" data-name="Cell">
                          <div className="ba-32478d93f1">
                            <div className="ba-21a52d6817" data-node-id="123:1015">
                              <p className="ba-bf919b50f6">Đơn vị tính</p>
                            </div>
                          </div>
                        </div>
                        <div className="ba-0c27a26e09" data-node-id="123:1016" data-name="Cell">
                          <div className="ba-32478d93f1">
                            <div className="ba-21a52d6817" data-node-id="123:1017">
                              <p className="ba-bf919b50f6">Số lượng</p>
                            </div>
                          </div>
                        </div>
                        <div className="ba-da3530a6b5" data-node-id="123:1018" data-name="Cell">
                          <div className="ba-78ec73a141">
                            <div className="ba-2cd774dd25" data-node-id="123:1019">
                              <p className="ba-bf919b50f6">Đơn giá</p>
                            </div>
                          </div>
                        </div>
                        <div className="ba-da3530a6b5" data-node-id="123:1020" data-name="Cell">
                          <div className="ba-78ec73a141">
                            <div className="ba-2cd774dd25" data-node-id="123:1021">
                              <p className="ba-bf919b50f6">Thành tiền</p>
                            </div>
                          </div>
                        </div>
                        <div className="ba-585dbaba91" data-node-id="123:1022" data-name="Cell">
                          <div className="ba-34ebb6131f">
                            <div className="ba-0dc1307d6d" data-node-id="123:1023">
                              <p className="ba-bf919b50f6">Ghi chú</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ba-435987ed6b" data-node-id="123:1024" data-name="Body">
                        <div className="ba-acc3096632" data-node-id="123:1025" data-name="Row 1">
                          <div className="ba-bdbfa4e035" data-node-id="123:1026" data-name="Data">
                            <div className="ba-793fbba130" data-node-id="123:1027">
                              <p className="ba-bf919b50f6">1</p>
                            </div>
                          </div>
                          <div className="ba-28f7e30890" data-node-id="123:1028" data-name="Data">
                            <div className="ba-ccd61e0869" data-node-id="123:1029">
                              <p className="ba-bf919b50f6">Laptop Dell Latitude 7440</p>
                            </div>
                          </div>
                          <div className="ba-6b57e9a215" data-node-id="123:1030" data-name="Data">
                            <div className="ba-5102c3369e" data-node-id="123:1031">
                              <p className="ba-bf919b50f6">Thiết bị CNTT</p>
                            </div>
                          </div>
                          <div className="ba-a63342c0f6" data-node-id="123:1032" data-name="Data">
                            <div className="ba-7d8bcb43a5" data-node-id="123:1033">
                              <p className="ba-bf919b50f6">Chiếc</p>
                            </div>
                          </div>
                          <div className="ba-18c8eba31c" data-node-id="123:1034" data-name="Data">
                            <div className="ba-793fbba130" data-node-id="123:1035">
                              <p className="ba-bf919b50f6">1</p>
                            </div>
                          </div>
                          <div className="ba-c6497b9cd0" data-node-id="123:1036" data-name="Data">
                            <div className="ba-1c20392ae1" data-node-id="123:1037">
                              <p className="ba-bf919b50f6">25.000.000</p>
                            </div>
                          </div>
                          <div className="ba-c6497b9cd0" data-node-id="123:1038" data-name="Data">
                            <div className="ba-627c3c20ef" data-node-id="123:1039">
                              <p className="ba-bf919b50f6">25.000.000</p>
                            </div>
                          </div>
                          <div className="ba-5095c7c8eb" data-node-id="123:1040" data-name="Data">
                            <div className="ba-7bc6da7c40" data-node-id="123:1041">
                              <p className="ba-bf919b50f6">Còn tốt, kèm sạc</p>
                            </div>
                          </div>
                        </div>
                        <div className="ba-5992115602" data-node-id="123:1042" data-name="Row 2">
                          <div className="ba-afae1125ec" data-node-id="123:1043" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-793fbba130" data-node-id="123:1044">
                                <p className="ba-bf919b50f6">2</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-a03733d488" data-node-id="123:1045" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-ccd61e0869" data-node-id="123:1046">
                                <p className="ba-bf919b50f6">Màn hình Dell 27 inch</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-bca5fb090d" data-node-id="123:1047" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-5102c3369e" data-node-id="123:1048">
                                <p className="ba-bf919b50f6">Thiết bị CNTT</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-a4b3767b16" data-node-id="123:1049" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-7d8bcb43a5" data-node-id="123:1050">
                                <p className="ba-bf919b50f6">Chiếc</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-0c27a26e09" data-node-id="123:1051" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-793fbba130" data-node-id="123:1052">
                                <p className="ba-bf919b50f6">1</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-da3530a6b5" data-node-id="123:1053" data-name="Data">
                            <div className="ba-774660592b">
                              <div className="ba-1c20392ae1" data-node-id="123:1054">
                                <p className="ba-bf919b50f6">6.500.000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-da3530a6b5" data-node-id="123:1055" data-name="Data">
                            <div className="ba-774660592b">
                              <div className="ba-627c3c20ef" data-node-id="123:1056">
                                <p className="ba-bf919b50f6">6.500.000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-585dbaba91" data-node-id="123:1057" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-7bc6da7c40" data-node-id="123:1058">
                                <p className="ba-bf919b50f6">Đã qua sử dụng</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-5992115602" data-node-id="123:1059" data-name="Row 3">
                          <div className="ba-afae1125ec" data-node-id="123:1060" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-793fbba130" data-node-id="123:1061">
                                <p className="ba-bf919b50f6">3</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-a03733d488" data-node-id="123:1062" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-ccd61e0869" data-node-id="123:1063">
                                <p className="ba-bf919b50f6">Bàn làm việc văn phòng</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-bca5fb090d" data-node-id="123:1064" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-5102c3369e" data-node-id="123:1065">
                                <p className="ba-bf919b50f6">Nội thất</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-a4b3767b16" data-node-id="123:1066" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-7d8bcb43a5" data-node-id="123:1067">
                                <p className="ba-bf919b50f6">Chiếc</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-0c27a26e09" data-node-id="123:1068" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-793fbba130" data-node-id="123:1069">
                                <p className="ba-bf919b50f6">1</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-da3530a6b5" data-node-id="123:1070" data-name="Data">
                            <div className="ba-774660592b">
                              <div className="ba-1c20392ae1" data-node-id="123:1071">
                                <p className="ba-bf919b50f6">2.800.000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-da3530a6b5" data-node-id="123:1072" data-name="Data">
                            <div className="ba-774660592b">
                              <div className="ba-627c3c20ef" data-node-id="123:1073">
                                <p className="ba-bf919b50f6">2.800.000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-585dbaba91" data-node-id="123:1074" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-7bc6da7c40" data-node-id="123:1075">
                                <p className="ba-bf919b50f6">Màu nâu, còn tốt</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-5992115602" data-node-id="123:1076" data-name="Row 4">
                          <div className="ba-afae1125ec" data-node-id="123:1077" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-793fbba130" data-node-id="123:1078">
                                <p className="ba-bf919b50f6">4</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-a03733d488" data-node-id="123:1079" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-ccd61e0869" data-node-id="123:1080">
                                <p className="ba-bf919b50f6">Ghế xoay văn phòng</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-bca5fb090d" data-node-id="123:1081" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-5102c3369e" data-node-id="123:1082">
                                <p className="ba-bf919b50f6">Nội thất</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-a4b3767b16" data-node-id="123:1083" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-7d8bcb43a5" data-node-id="123:1084">
                                <p className="ba-bf919b50f6">Chiếc</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-0c27a26e09" data-node-id="123:1085" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-793fbba130" data-node-id="123:1086">
                                <p className="ba-bf919b50f6">1</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-da3530a6b5" data-node-id="123:1087" data-name="Data">
                            <div className="ba-774660592b">
                              <div className="ba-1c20392ae1" data-node-id="123:1088">
                                <p className="ba-bf919b50f6">1.200.000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-da3530a6b5" data-node-id="123:1089" data-name="Data">
                            <div className="ba-774660592b">
                              <div className="ba-627c3c20ef" data-node-id="123:1090">
                                <p className="ba-bf919b50f6">1.200.000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-585dbaba91" data-node-id="123:1091" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-7bc6da7c40" data-node-id="123:1092">
                                <p className="ba-bf919b50f6">Còn tốt</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-5992115602" data-node-id="123:1093" data-name="Row 5">
                          <div className="ba-afae1125ec" data-node-id="123:1094" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-793fbba130" data-node-id="123:1095">
                                <p className="ba-bf919b50f6">5</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-a03733d488" data-node-id="123:1096" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-ccd61e0869" data-node-id="123:1097">
                                <p className="ba-bf919b50f6">Điện thoại IP</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-bca5fb090d" data-node-id="123:1098" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-5102c3369e" data-node-id="123:1099">
                                <p className="ba-bf919b50f6">Thiết bị văn phòng</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-a4b3767b16" data-node-id="123:1100" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-7d8bcb43a5" data-node-id="123:1101">
                                <p className="ba-bf919b50f6">Chiếc</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-0c27a26e09" data-node-id="123:1102" data-name="Data">
                            <div className="ba-2074ea3b56">
                              <div className="ba-793fbba130" data-node-id="123:1103">
                                <p className="ba-bf919b50f6">1</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-da3530a6b5" data-node-id="123:1104" data-name="Data">
                            <div className="ba-774660592b">
                              <div className="ba-1c20392ae1" data-node-id="123:1105">
                                <p className="ba-bf919b50f6">1.500.000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-da3530a6b5" data-node-id="123:1106" data-name="Data">
                            <div className="ba-774660592b">
                              <div className="ba-627c3c20ef" data-node-id="123:1107">
                                <p className="ba-bf919b50f6">1.500.000</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-585dbaba91" data-node-id="123:1108" data-name="Data">
                            <div className="ba-ed6328429b">
                              <div className="ba-7bc6da7c40" data-node-id="123:1109">
                                <p className="ba-bf919b50f6">Đã qua sử dụng</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ba-99c336ca02" data-node-id="123:1110" data-name="Summary Row: Tổng cộng">
                          <div className="ba-fa42ba53cd" data-node-id="123:1111" data-name="Data">
                            <div className="ba-dac535b11e">
                              <div className="ba-e318b6eeca" data-node-id="123:1112">
                                <p className="ba-bf919b50f6">Tổng cộng</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-0c27a26e09" data-node-id="123:1113" data-name="Data">
                            <div className="ba-5e62f22588">
                              <div className="ba-85bd07d089" data-node-id="123:1114">
                                <p className="ba-bf919b50f6">5</p>
                              </div>
                            </div>
                          </div>
                          <div className="ba-f32a26f5fa" data-node-id="123:1115" data-name="Data">
                            <div className="ba-808fbb14fc">
                              <div className="ba-9fc1d1f3ac" data-node-id="123:1116">
                                <p className="ba-bf919b50f6">37.000.000</p>
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
            <div className="ba-3e3e71f359" data-node-id="123:1117" data-name="TotalValueCard">
              <div className="ba-eb7bb2f729">
                <div className="ba-67366dcb7c" data-node-id="123:1118" data-name="Heading 4">
                  <div className="ba-4ed85d2730">
                    <div className="ba-2e20f7f78d" data-node-id="123:1119">
                      <p className="ba-efcc9af6d1">Tổng giá trị tài sản bàn giao</p>
                    </div>
                  </div>
                </div>
                <div className="ba-67366dcb7c" data-node-id="123:1120" data-name="Container">
                  <div className="ba-b3efde1783">
                    <div className="ba-9eae8902b4" data-node-id="123:1121" data-name="Bằng s">
                      <div className="ba-39ca0321a1" data-node-id="123:1122" data-name="Container">
                        <div className="ba-7bc6da7c40" data-node-id="123:1123">
                          <p className="ba-bf919b50f6">Tổng giá trị (bằng số):</p>
                        </div>
                      </div>
                      <div className="ba-39ca0321a1" data-node-id="123:1124" data-name="Container">
                        <div className="ba-ebfe19ec39" data-node-id="123:1125">
                          <p className="ba-f62dcabf0a">37.000.000 VNĐ</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-bdf582aba6" data-node-id="123:1126" data-name="Vạch phân cách" />
                    <div className="ba-9eae8902b4" data-node-id="123:1127" data-name="Bằng ch">
                      <div className="ba-39ca0321a1" data-node-id="123:1128" data-name="Container">
                        <div className="ba-7bc6da7c40" data-node-id="123:1129">
                          <p className="ba-bf919b50f6">Tổng giá trị (bằng chữ):</p>
                        </div>
                      </div>
                      <div className="ba-39ca0321a1" data-node-id="123:1130" data-name="Container">
                        <div className="ba-e34a30c380" data-node-id="123:1131">
                          <p className="ba-efcc9af6d1">Ba mươi bảy triệu đồng chẵn.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-13c59fe49b" data-node-id="123:1132" data-name="CommitmentBox">
              <div className="ba-8f0973998a">
                <div className="ba-67366dcb7c" data-node-id="123:1133" data-name="Heading 4">
                  <div className="ba-4ed85d2730">
                    <div className="ba-5c0ba7cf62" data-node-id="123:1134">
                      <p className="ba-bf919b50f6">Cam kết bàn giao</p>
                    </div>
                  </div>
                </div>
                <div className="ba-67366dcb7c" data-node-id="123:1135" data-name="Container">
                  <div className="ba-4ed85d2730">
                    <div className="ba-d9f274c65b" data-node-id="123:1136">
                      <p>
                        <span className="ba-0543b847c7">{`Kể từ ngày `}</span>
                        <span className="ba-49e2e8a570">25/03/2024</span>
                        <span className="ba-0543b847c7">{`, số tài sản trên sẽ do `}</span>
                        <span className="ba-49e2e8a570">Nguyễn Thị Mai</span>
                        <span className="ba-0543b847c7">{` chịu trách nhiệm sử dụng và quản lý.`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-67366dcb7c" data-node-id="123:1137" data-name="FormActionButtons">
              <div className="ba-ffcf98c483">
                {!(isDetail && role === "employee") && <div className="ba-946aba25b3" data-node-id="123:1138" data-name="Button">
                  <div className="ba-645b6d0c79" data-node-id="123:1139">
                    <p className="ba-efcc9af6d1">Lưu nháp</p>
                  </div>
                </div>}
                <div className="ba-0515dea0f2" data-node-id="123:1140" data-name="Button">
                  <div className="ba-b5300aff3b" data-node-id="123:1141">
                    <p className="ba-efcc9af6d1">{isDetail && role === "employee" ? "Xác nhận" : "Gửi"}</p>
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
