/** Screen 40:13282 — Xóa tài sản - Lỗi hệ thống khi xóa (State E4). Presentation adapted from Figma. */
import { h } from "../design-runtime.jsx";
const imgQltsLogo = "/assets/598e578d-1647-44d4-bd2d-2f366b7b3ffe.png";
const imgContainer = "/assets/e8e64728-81b8-460e-ade0-fe4d79890926.svg";
const imgContainer1 = "/assets/6b7eb2f8-aa4c-4b0d-a891-2287d412e842.svg";
const imgContainer2 = "/assets/44a8a6b4-5323-486e-87c5-dbd45d5ae142.svg";
const imgContainer3 = "/assets/3e0d5c55-a06e-42f4-bdb4-815dd141a295.svg";
const imgContainer4 = "/assets/87c9f574-eb8d-406f-8373-7d12060033bb.svg";
const imgContainer5 = "/assets/87c6394e-1f01-4637-913e-7d49792a3ffc.svg";
const imgContainer6 = "/assets/f5c4595b-17a0-45fe-82b6-1fb15bb33cb9.svg";
const imgContainer7 = "/assets/d35e1265-4a69-4ae1-839c-7fd30c6e63a1.svg";
const imgContainer8 = "/assets/438dc8df-efd7-4357-8d41-6bb0af1c99c7.svg";
const imgContainer9 = "/assets/0f6d2958-9cd0-46f9-9513-dc24c8add78d.svg";
const imgMargin = "/assets/8d6500d6-dbd7-4b9c-a801-df84f0c723aa.svg";
const imgContainer10 = "/assets/cd677c2e-0c62-483c-accc-97a70e4b3276.svg";
const imgContainer11 = "/assets/e980369c-058b-4b0e-b74b-11da99b42e00.svg";
const imgIcon = "/assets/f790693f-4d45-431b-9ad8-58d5f3622c2b.svg";
const imgContainer12 = "/assets/15353fbf-f31c-49f8-a73a-632194bce837.svg";
const imgContainer13 = "/assets/9dca9807-8013-4e10-8731-896662abd84e.svg";
const imgContainer14 = "/assets/201b839d-e7ef-42fa-843f-448b98c36289.svg";
const imgContainer15 = "/assets/3269feb9-135f-4917-8e76-a9a0ac4c3adf.svg";
const imgContainer16 = "/assets/350cdee5-a2e0-42b7-933e-575fc203b8dc.svg";
const imgContainer17 = "/assets/aca1c40d-abbe-468b-914b-0ecf1e1df73d.svg";
const imgContainer18 = "/assets/edeb25fb-19ee-4fc6-9a3c-8a011c0abb04.svg";
const imgContainer19 = "/assets/e4456109-fcac-4c50-9db4-194e3ba53d1f.svg";
const imgContainer20 = "/assets/afaff514-9d0c-472d-9765-d0ab2a44249b.svg";
const imgContainer21 = "/assets/afc171e1-4717-4ea1-a890-eea935fdd0f5.svg";
const imgContainer22 = "/assets/785b76ae-0bae-41c5-b8d1-56ffd74e48f3.svg";
const imgContainer23 = "/assets/ed546d58-93cc-4aa3-a17e-b4274304a453.svg";
const imgContainer24 = "/assets/7fec0fdb-0465-44e5-bad7-b9b6ffcbbf23.svg";
const imgContainer25 = "/assets/e466d472-650c-4e02-a80e-0da9443b139d.svg";
const imgContainer26 = "/assets/d7dd1c2e-120d-46ff-a667-6ccce25580c8.svg";
const imgContainer27 = "/assets/a66689bf-c904-4df2-8f1e-f412f7ccce5c.svg";
const imgContainer28 = "/assets/74b92e68-3ed4-4672-9f4a-a37c98f50847.svg";
const imgContainer29 = "/assets/86f22ba8-e064-4dc2-b38b-d15901dc41d3.svg";
const imgContainer30 = "/assets/09881137-2ed6-4618-8e9f-04b57b034c64.svg";
const imgIcon1 = "/assets/a57a65da-c0c4-483e-b916-491c082ef5e1.svg";
const imgContainer31 = "/assets/33152da1-54c1-4622-9429-ef48f1391bbb.svg";
const imgContainer32 = "/assets/dc52156a-e584-4305-be25-a6399177df35.svg";
const imgContainer33 = "/assets/1b0fde20-e69a-4001-bb9d-ba1d7d30de28.svg";
const imgContainer34 = "/assets/78488587-85ce-45b2-a8ad-332ca4157736.svg";
const imgContainer35 = "/assets/5f9e5c92-0209-4976-be01-f02d98dc0fec.svg";
const imgContainer36 = "/assets/c90ccf86-61a2-47dc-acd3-6bac87e999de.svg";
const imgContainer37 = "/assets/0877f0ec-4406-4489-aa3e-b0b1bdaef065.svg";
const imgContainer38 = "/assets/6dbec7b5-c2f1-4fba-813e-bcbf7f4706f8.svg";
const imgContainer39 = "/assets/22f8a046-7b1f-4d8d-bd16-7e57092e23e0.svg";
const imgContainer40 = "/assets/46172879-80ca-41b2-847f-df9e976358ab.svg";
const imgContainer41 = "/assets/247a950f-6743-4ba6-be04-768ca38c4f38.svg";
const imgContainer42 = "/assets/1f08d3c5-7114-4f52-82a6-422f2179985e.svg";
const imgContainer43 = "/assets/c3c6f5dc-a871-4bcb-906a-e52e147ecc0b.svg";
const imgContainer44 = "/assets/9b72174b-84ed-4801-87c1-fe148be2b8ba.svg";
const imgContainer45 = "/assets/5d25cdd8-08f4-40be-a572-42452677be37.svg";
const imgContainer46 = "/assets/6d2c8414-e1e6-43a4-b9f7-edc3ceeee0ac.svg";

export default function XoaTaiSnLiHThngKhiXoaStateE4() {
  return (
    <div className="ba-73b1803b70" data-node-id="40:13282" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Xóa tài sản - Lỗi hệ thống khi xóa (State E4)">
      <div className="ba-a542ee762d" data-node-id="40:13283" data-name="Main">
        <div className="ba-153c0a1809" data-node-id="40:13284" data-name="Container">
          <div className="ba-009c993968" data-node-id="40:13285" data-name="Page Header Actions & Context Title:margin">
            <div className="ba-c96fe10678" data-node-id="40:13286" data-name="Page Header Actions & Context Title">
              <div className="ba-ab7becbfcb" data-node-id="40:13287" data-name="Container">
                <div className="ba-df264a64f2" data-node-id="40:13288" data-name="Container">
                  <div className="ba-39ca0321a1" data-node-id="40:13289" data-name="Heading 1">
                    <div className="ba-43aaae64d9" data-node-id="40:13290">
                      <p className="ba-a0118ea47e">Danh sách tài sản</p>
                    </div>
                  </div>
                  <div className="ba-523c98bf78" data-node-id="40:13291" data-name="Background">
                    <div className="ba-e678671df5" data-node-id="40:13292">
                      <p className="ba-bf919b50f6">Tổng cộng: 248 tài sản</p>
                    </div>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="40:13293" data-name="Container">
                  <div className="ba-cf8b7510ee" data-node-id="40:13294">
                    <p className="ba-4b6563eac3">Quản lý vòng đời tài sản, hiện trạng bàn giao và hồ sơ kiểm định kỹ thuật</p>
                    <p className="ba-76aad9ca0a">số</p>
                  </div>
                </div>
              </div>
              <div className="ba-9eae8902b4" data-node-id="40:13295" data-name="Container">
                <div className="ba-bef06c8670" data-node-id="40:13296" data-name="Button">
                  <div className="ba-8a0ff48924" data-node-id="40:13297" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer} />
                  </div>
                  <div className="ba-311bf97a65" data-node-id="40:13299" data-name="Container">
                    <div className="ba-2aa6e1e924" data-node-id="40:13300">
                      <p className="ba-1bcf9b724d">Xuất</p>
                      <p className="ba-efcc9af6d1">Excel</p>
                    </div>
                  </div>
                </div>
                <div className="ba-bef06c8670" data-node-id="40:13301" data-name="Button">
                  <div className="ba-b784803253" data-node-id="40:13302" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer1} />
                  </div>
                  <div className="ba-f0f740cfcb" data-node-id="40:13304" data-name="Container">
                    <div className="ba-2aa6e1e924" data-node-id="40:13305">
                      <p className="ba-1bcf9b724d">Quét mã</p>
                      <p className="ba-efcc9af6d1">QR</p>
                    </div>
                  </div>
                </div>
                <div className="ba-c865abeae5" data-node-id="40:13306" data-name="Button">
                  <div className="ba-b784803253" data-node-id="40:13307" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer2} />
                  </div>
                  <div className="ba-39b4401f39" data-node-id="40:13309" data-name="Container">
                    <div className="ba-b5300aff3b" data-node-id="40:13310">
                      <p className="ba-1bcf9b724d">Thêm tài sản</p>
                      <p className="ba-efcc9af6d1">mới</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-009c993968" data-node-id="40:13311" data-name="Metric Overview Cards:margin">
            <div className="ba-1a9dbaca21" data-node-id="40:13312" data-name="Metric Overview Cards">
              <div className="ba-ba594ec86e" data-node-id="40:13313" data-name="Background+Shadow">
                <div className="ba-39ca0321a1" data-node-id="40:13314" data-name="Container">
                  <div className="ba-153c0a1809" data-node-id="40:13315" data-name="Container">
                    <div className="ba-73820a4170" data-node-id="40:13316">
                      <p className="ba-bf919b50f6">Tổng nguyên giá</p>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:13317" data-name="Margin">
                    <div className="ba-153c0a1809" data-node-id="40:13318" data-name="Container">
                      <div className="ba-5cfceeb71a" data-node-id="40:13319">
                        <p className="ba-fd19851b66">4.892.400.000</p>
                        <p className="ba-a0118ea47e">₫</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:13320" data-name="Margin">
                    <div className="ba-fc2bbc1ac8" data-node-id="40:13321" data-name="Container">
                      <div className="ba-b9931dece1" data-node-id="40:13322" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer3} />
                      </div>
                      <div className="ba-39ca0321a1" data-node-id="40:13324" data-name="Container">
                        <div className="ba-791674cd08" data-node-id="40:13325">
                          <p className="ba-bf919b50f6">+4.2% so với quý trước</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-6349cb98ce" data-node-id="40:13326" data-name="Background">
                  <div className="ba-6b69cf8f95" data-node-id="40:13327" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer4} />
                  </div>
                </div>
              </div>
              <div className="ba-222796aed1" data-node-id="40:13329" data-name="Background+Shadow">
                <div className="ba-39ca0321a1" data-node-id="40:13330" data-name="Container">
                  <div className="ba-153c0a1809" data-node-id="40:13331" data-name="Container">
                    <div className="ba-73820a4170" data-node-id="40:13332">
                      <p className="ba-bf919b50f6">Đang sử dụng</p>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:13333" data-name="Margin">
                    <div className="ba-153c0a1809" data-node-id="40:13334" data-name="Container">
                      <div className="ba-5cfceeb71a" data-node-id="40:13335">
                        <p className="ba-a0118ea47e">184 / 248</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:13336" data-name="Margin">
                    <div className="ba-63d16fb724" data-node-id="40:13337" data-name="Container">
                      <div className="ba-7c219a7f79" data-node-id="40:13338" data-name="Container">
                        <div className="ba-0ffaaa5e85" data-node-id="40:13339">
                          <p className="ba-bf919b50f6">Tỷ lệ phân bổ 74.2%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-0b53bb4d1b" data-node-id="40:13340" data-name="Background">
                  <div className="ba-fe94654b7c" data-node-id="40:13341" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer5} />
                  </div>
                </div>
              </div>
              <div className="ba-222796aed1" data-node-id="40:13343" data-name="Background+Shadow">
                <div className="ba-39ca0321a1" data-node-id="40:13344" data-name="Container">
                  <div className="ba-153c0a1809" data-node-id="40:13345" data-name="Container">
                    <div className="ba-73820a4170" data-node-id="40:13346">
                      <p className="ba-bf919b50f6">Chưa cấp phát (Sẵn sàng)</p>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:13347" data-name="Margin">
                    <div className="ba-153c0a1809" data-node-id="40:13348" data-name="Container">
                      <div className="ba-5cfceeb71a" data-node-id="40:13349">
                        <p className="ba-a0118ea47e">46 tài sản</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:13350" data-name="Margin">
                    <div className="ba-63d16fb724" data-node-id="40:13351" data-name="Container">
                      <div className="ba-7c219a7f79" data-node-id="40:13352" data-name="Container">
                        <div className="ba-0ffaaa5e85" data-node-id="40:13353">
                          <p className="ba-bf919b50f6">Kho trung tâm: 38 chiếc</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-0b53bb4d1b" data-node-id="40:13354" data-name="Background">
                  <div className="ba-b2a182ecf4" data-node-id="40:13355" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer6} />
                  </div>
                </div>
              </div>
              <div className="ba-86270a3b83" data-node-id="40:13357" data-name="Background+Shadow">
                <div className="ba-39ca0321a1" data-node-id="40:13358" data-name="Container">
                  <div className="ba-153c0a1809" data-node-id="40:13359" data-name="Container">
                    <div className="ba-73820a4170" data-node-id="40:13360">
                      <p className="ba-bf919b50f6">Cần kiểm định / Sửa chữa</p>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:13361" data-name="Margin">
                    <div className="ba-153c0a1809" data-node-id="40:13362" data-name="Container">
                      <div className="ba-5cfceeb71a" data-node-id="40:13363">
                        <p className="ba-a0118ea47e">18 tài sản</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-6f61d99fdb" data-node-id="40:13364" data-name="Margin">
                    <div className="ba-fc2bbc1ac8" data-node-id="40:13365" data-name="Container">
                      <div className="ba-f1d82e366c" data-node-id="40:13366" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer7} />
                      </div>
                      <div className="ba-d2ff606296" data-node-id="40:13368" data-name="Container">
                        <div className="ba-6ce9d21d2a" data-node-id="40:13369">
                          <p className="ba-c22b989642">4 thiết bị quá hạn bảo</p>
                          <p className="ba-bf919b50f6">dưỡng</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ba-a6b22c2b46" data-node-id="40:13370" data-name="Overlay">
                  <div className="ba-fe94654b7c" data-node-id="40:13371" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer8} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-9b32794cdf" data-node-id="40:13373" data-name="Filter & Utility Toolbar Panel:margin">
            <div className="ba-f76d147fdc" data-node-id="40:13374" data-name="Filter & Utility Toolbar Panel">
              <div className="ba-6b0253d2b5" data-node-id="40:13375" data-name="Container">
                <div className="ba-dc4fa85625" data-node-id="40:13376" data-name="Category Filter">
                  <div className="ba-f1ca5c6c03" data-node-id="40:13377" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer9} />
                  </div>
                  <div className="ba-39ca0321a1" data-node-id="40:13379" data-name="Container">
                    <div className="ba-7d6e09b066" data-node-id="40:13380">
                      <p className="ba-efcc9af6d1">Nhóm: Tất cả</p>
                    </div>
                  </div>
                  <div className="ba-88343fa739" data-node-id="40:13381" data-name="Margin">
                    <img alt="" className="ba-8faf267d30" src={imgMargin} />
                  </div>
                </div>
                <div className="ba-705ceba11b" data-node-id="40:13383" data-name="Department Filter">
                  <div className="ba-89a417b2dd" data-node-id="40:13384" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer10} />
                  </div>
                  <div className="ba-39ca0321a1" data-node-id="40:13386" data-name="Container">
                    <div className="ba-7d6e09b066" data-node-id="40:13387">
                      <p className="ba-efcc9af6d1">Phòng ban: Toàn bộ</p>
                    </div>
                  </div>
                  <div className="ba-88343fa739" data-node-id="40:13388" data-name="Margin">
                    <img alt="" className="ba-8faf267d30" src={imgMargin} />
                  </div>
                </div>
                <div className="ba-6a78dfdb66" data-node-id="40:13390" data-name="Status Filter">
                  <div className="ba-97e8208e5c" data-node-id="40:13391" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer11} />
                  </div>
                  <div className="ba-39ca0321a1" data-node-id="40:13393" data-name="Container">
                    <div className="ba-7d6e09b066" data-node-id="40:13394">
                      <p className="ba-efcc9af6d1">Trạng thái: Tất cả</p>
                    </div>
                  </div>
                  <div className="ba-88343fa739" data-node-id="40:13395" data-name="Margin">
                    <img alt="" className="ba-8faf267d30" src={imgMargin} />
                  </div>
                </div>
                <div className="ba-b639fbb0f4" data-node-id="40:13397" data-name="Search Input">
                  <div className="ba-c67671aa1f" data-node-id="40:13398" data-name="Input" data-field-hints="">
                    <div className="ba-2cccba0c37" data-node-id="40:13399" data-name="Container">
                      <div className="ba-cba26a844b" data-node-id="40:13400">
                        <p className="ba-32bd4c7660">Tìm theo mã tài sản, tên thiết bị, người dùng...</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-05301eeec3" data-node-id="40:13401" data-name="Icon">
                    <img alt="" className="ba-8faf267d30" src={imgIcon} />
                  </div>
                </div>
              </div>
              <div className="ba-9eae8902b4" data-node-id="40:13402" data-name="Container">
                <div className="ba-39ca0321a1" data-node-id="40:13403" data-name="Container">
                  <div className="ba-73820a4170" data-node-id="40:13404">
                    <p className="ba-bf919b50f6">Hiển thị 1 - 8 của 248 tài sản</p>
                  </div>
                </div>
                <div className="ba-b5f1fca2c5" data-node-id="40:13405" data-name="Background">
                  <div className="ba-1e28b83b91" data-node-id="40:13406" data-name="Button">
                    <div className="ba-d419f223f2" data-node-id="40:13407" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer12} />
                    </div>
                  </div>
                  <div className="ba-df0844eea3" data-node-id="40:13409" data-name="Button">
                    <div className="ba-97e8208e5c" data-node-id="40:13410" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer13} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-9b32794cdf" data-node-id="40:13412" data-name="Primary Asset Data Table Canvas:margin">
            <div className="ba-ae800a5576" data-node-id="40:13413" data-name="Primary Asset Data Table Canvas">
              <div className="ba-106c224dfb" data-node-id="40:13414" data-name="Table">
                <div className="ba-66fe33b3df" data-node-id="40:13415" data-name="Header → Row">
                  <div className="ba-8128d41bdf" data-node-id="40:13416" data-name="Cell">
                    <div className="ba-50aea53f6b" data-node-id="40:13417" data-name="Input" data-field-hints="" />
                  </div>
                  <div className="ba-8ad89e8b5d" data-node-id="40:13418" data-name="Cell">
                    <div className="ba-1ad2633a25" data-node-id="40:13419">
                      <p className="ba-8a3ede2ed5">MÃ TÀI</p>
                      <p className="ba-e32ac1aeb2">SẢN</p>
                    </div>
                  </div>
                  <div className="ba-022280d585" data-node-id="40:13420" data-name="Cell">
                    <div className="ba-1ad2633a25" data-node-id="40:13421">
                      <p className="ba-e32ac1aeb2">{`TÊN TÀI SẢN & CẤU HÌNH`}</p>
                    </div>
                  </div>
                  <div className="ba-096ca41c9d" data-node-id="40:13422" data-name="Cell">
                    <div className="ba-1ad2633a25" data-node-id="40:13423">
                      <p className="ba-8a3ede2ed5">LOẠI</p>
                      <p className="ba-8a3ede2ed5">TÀI</p>
                      <p className="ba-e32ac1aeb2">SẢN</p>
                    </div>
                  </div>
                  <div className="ba-1de132fdae" data-node-id="40:13424" data-name="Cell">
                    <div className="ba-1ad2633a25" data-node-id="40:13425">
                      <p className="ba-8a3ede2ed5">BỘ PHẬN</p>
                      <p className="ba-e32ac1aeb2">SỬ DỤNG</p>
                    </div>
                  </div>
                  <div className="ba-486409de08" data-node-id="40:13426" data-name="Cell">
                    <div className="ba-1ad2633a25" data-node-id="40:13427">
                      <p className="ba-8a3ede2ed5">NGƯỜI</p>
                      <p className="ba-8a3ede2ed5">TIẾP</p>
                      <p className="ba-e32ac1aeb2">NHẬN</p>
                    </div>
                  </div>
                  <div className="ba-5a7380a863" data-node-id="40:13428" data-name="Cell">
                    <div className="ba-8f3407fefc" data-node-id="40:13429">
                      <p className="ba-e32ac1aeb2">NGUYÊN GIÁ</p>
                    </div>
                  </div>
                  <div className="ba-666d47ce4d" data-node-id="40:13430" data-name="Cell">
                    <div className="ba-f7b0eb45d3" data-node-id="40:13431">
                      <p className="ba-8a3ede2ed5">TRẠNG</p>
                      <p className="ba-e32ac1aeb2">THÁI</p>
                    </div>
                  </div>
                  <div className="ba-a2a42cd45a" data-node-id="40:13432" data-name="Cell">
                    <div className="ba-8f3407fefc" data-node-id="40:13433">
                      <p className="ba-e32ac1aeb2">THAO TÁC</p>
                    </div>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="40:13434" data-name="Body">
                  <div className="ba-aac9e0ea19" data-node-id="40:13435" data-name="Highlighted Row: The asset targeted by the failed deletion attempt">
                    <div className="ba-6a1e0e0549" data-node-id="40:13436" data-name="Data">
                      <div className="ba-50aea53f6b" data-node-id="40:13437" data-name="Input" data-field-hints="" />
                    </div>
                    <div className="ba-2583ae8274" data-node-id="40:13438" data-name="Data">
                      <div className="ba-da51872ec1" data-node-id="40:13439" data-name="Container">
                        <div className="ba-3b6824fb01" data-node-id="40:13440">
                          <p className="ba-1bcf9b724d">TS-</p>
                          <p className="ba-1bcf9b724d">FUR-</p>
                          <p className="ba-1bcf9b724d">2026-</p>
                          <p className="ba-efcc9af6d1">00087</p>
                        </div>
                      </div>
                      <div className="ba-f9e3c3e04f" data-node-id="40:13441" data-name="Background" />
                    </div>
                    <div className="ba-d4bbce4875" data-node-id="40:13442" data-name="Data">
                      <div className="ba-c475d979ca" data-node-id="40:13443" data-name="Container">
                        <div className="ba-3ab3284779" data-node-id="40:13444">
                          <p className="ba-efcc9af6d1">Bộ Bàn Ghế Hội Nghị Hòa Phát Luxury</p>
                        </div>
                      </div>
                      <div className="ba-c475d979ca" data-node-id="40:13445" data-name="Container">
                        <div className="ba-9a40ec7ff9" data-node-id="40:13446">
                          <p className="ba-bf919b50f6">Gỗ sồi nhập khẩu 3.2m x 1.4m • 12 ghế bọc da</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-b14a8b127a" data-node-id="40:13447" data-name="Data">
                      <div className="ba-f6e9dbdd51" data-node-id="40:13448">
                        <p className="ba-8a3ede2ed5">Nội thất</p>
                        <p className="ba-8a3ede2ed5">văn</p>
                        <p className="ba-e32ac1aeb2">phòng</p>
                      </div>
                    </div>
                    <div className="ba-414d3ab0d1" data-node-id="40:13449" data-name="Data">
                      <div className="ba-8a0ff48924" data-node-id="40:13450" data-name="Container">
                        <img alt="" className="ba-8faf267d30" src={imgContainer14} />
                      </div>
                      <div className="ba-7616478a30" data-node-id="40:13452" data-name="Container">
                        <div className="ba-f6e9dbdd51" data-node-id="40:13453">
                          <p className="ba-8a3ede2ed5">Ban</p>
                          <p className="ba-8a3ede2ed5">Tổng</p>
                          <p className="ba-8a3ede2ed5">Giám</p>
                          <p className="ba-e32ac1aeb2">Đốc</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-eb6e913dfe" data-node-id="40:13454" data-name="Data">
                      <div className="ba-0ff8208f2f" data-node-id="40:13455" data-name="Background">
                        <div className="ba-202cd1c05c" data-node-id="40:13456">
                          <p className="ba-1b6a18879c">TH</p>
                        </div>
                      </div>
                      <div className="ba-54535706e6" data-node-id="40:13457" data-name="Container">
                        <div className="ba-f6e9dbdd51" data-node-id="40:13458">
                          <p className="ba-8a3ede2ed5">Trần</p>
                          <p className="ba-8a3ede2ed5">Đình</p>
                          <p className="ba-e32ac1aeb2">Hùng</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-7550971c2c" data-node-id="40:13459" data-name="Data">
                      <div className="ba-dfd73ca2d8" data-node-id="40:13460">
                        <p className="ba-e32ac1aeb2">45.600.000 ₫</p>
                      </div>
                    </div>
                    <div className="ba-560b0903f0" data-node-id="40:13461" data-name="Data">
                      <div className="ba-4801c031b2" data-node-id="40:13462" data-name="Background">
                        <div className="ba-8d9fd54e3e" data-node-id="40:13463">
                          <p className="ba-c22b989642">Đang</p>
                          <p className="ba-c22b989642">sử</p>
                          <p className="ba-bf919b50f6">dụng</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-9dc5e7c92f" data-node-id="40:13464" data-name="Data">
                      <div className="ba-31cae755f8" data-node-id="40:13465" data-name="Button">
                        <div className="ba-9d58e7df2d" data-node-id="40:13466" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer15} />
                        </div>
                      </div>
                      <div className="ba-31cae755f8" data-node-id="40:13468" data-name="Button">
                        <div className="ba-97e8208e5c" data-node-id="40:13469" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                        </div>
                      </div>
                      <div className="ba-31cae755f8" data-node-id="40:13471" data-name="Button">
                        <div className="ba-98a62a65cc" data-node-id="40:13472" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer17} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-3c4785bdf2" data-node-id="40:13474" data-name="Row 2">
                    <div className="ba-de7614ee50" data-node-id="40:13475" data-name="Data">
                      <div className="ba-582ad7e744">
                        <div className="ba-50aea53f6b" data-node-id="40:13476" data-name="Input" data-field-hints="" />
                      </div>
                    </div>
                    <div className="ba-0040ee0a42" data-node-id="40:13477" data-name="Data">
                      <div className="ba-b440107d3f">
                        <div className="ba-ee04976b52" data-node-id="40:13478">
                          <p className="ba-efcc9af6d1">TS-IT-</p>
                        </div>
                        <div className="ba-ee04976b52" data-node-id="40:13479">
                          <p className="ba-efcc9af6d1">2026-</p>
                        </div>
                        <div className="ba-ee04976b52" data-node-id="40:13480">
                          <p className="ba-efcc9af6d1">00102</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-7bc4eeec93" data-node-id="40:13481" data-name="Data">
                      <div className="ba-039bb865a1">
                        <div className="ba-c475d979ca" data-node-id="40:13482" data-name="Container">
                          <div className="ba-3ab3284779" data-node-id="40:13483">
                            <p className="ba-efcc9af6d1">Máy tính xách tay Dell XPS 15 9530</p>
                          </div>
                        </div>
                        <div className="ba-c475d979ca" data-node-id="40:13484" data-name="Container">
                          <div className="ba-9a40ec7ff9" data-node-id="40:13485">
                            <p className="ba-bf919b50f6">i9-13900H / 32GB RAM / 1TB SSD / RTX 4070</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-8efd10c228" data-node-id="40:13486" data-name="Data">
                      <div className="ba-46ac6899e3">
                        <div className="ba-f6e9dbdd51" data-node-id="40:13487">
                          <p className="ba-8a3ede2ed5">Thiết bị</p>
                          <p className="ba-e32ac1aeb2">CNTT</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-e8047950f7" data-node-id="40:13488" data-name="Data">
                      <div className="ba-119f3d2484">
                        <div className="ba-a5b6e0485c" data-node-id="40:13489" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer18} />
                        </div>
                        <div className="ba-2f5a757b43" data-node-id="40:13491" data-name="Container">
                          <div className="ba-f6e9dbdd51" data-node-id="40:13492">
                            <p className="ba-8a3ede2ed5">Khối</p>
                            <p className="ba-8a3ede2ed5">Công</p>
                            <p className="ba-8a3ede2ed5">{`nghệ &`}</p>
                            <p className="ba-e32ac1aeb2">AI</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-86306ebeb8" data-node-id="40:13493" data-name="Data">
                      <div className="ba-05517a66d1">
                        <div className="ba-5f3c259fa0" data-node-id="40:13494" data-name="Background">
                          <div className="ba-c944d3ebf0" data-node-id="40:13495">
                            <p className="ba-1b6a18879c">LA</p>
                          </div>
                        </div>
                        <div className="ba-ce23d2af62" data-node-id="40:13496" data-name="Container">
                          <div className="ba-f6e9dbdd51" data-node-id="40:13497">
                            <p className="ba-8a3ede2ed5">Lê</p>
                            <p className="ba-8a3ede2ed5">Hoàng</p>
                            <p className="ba-e32ac1aeb2">Anh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-c5dc8c417c" data-node-id="40:13498" data-name="Data">
                      <div className="ba-099f5909c7">
                        <div className="ba-dfd73ca2d8" data-node-id="40:13499">
                          <p className="ba-e32ac1aeb2">68.500.000 ₫</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-a405f1ab1c" data-node-id="40:13500" data-name="Data">
                      <div className="ba-a682213380">
                        <div className="ba-4801c031b2" data-node-id="40:13501" data-name="Background">
                          <div className="ba-8d9fd54e3e" data-node-id="40:13502">
                            <p className="ba-c22b989642">Đang</p>
                            <p className="ba-c22b989642">sử</p>
                            <p className="ba-bf919b50f6">dụng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-1e3da26f59" data-node-id="40:13503" data-name="Data">
                      <div className="ba-857511783b">
                        <div className="ba-31cae755f8" data-node-id="40:13504" data-name="Button">
                          <div className="ba-9d58e7df2d" data-node-id="40:13505" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer15} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:13507" data-name="Button">
                          <div className="ba-97e8208e5c" data-node-id="40:13508" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:13510" data-name="Button">
                          <div className="ba-98a62a65cc" data-node-id="40:13511" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer19} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-3c4785bdf2" data-node-id="40:13513" data-name="Row 3">
                    <div className="ba-de7614ee50" data-node-id="40:13514" data-name="Data">
                      <div className="ba-a2ba00f552">
                        <div className="ba-50aea53f6b" data-node-id="40:13515" data-name="Input" data-field-hints="" />
                      </div>
                    </div>
                    <div className="ba-0040ee0a42" data-node-id="40:13516" data-name="Data">
                      <div className="ba-d06f1db5be">
                        <div className="ba-ee04976b52" data-node-id="40:13517">
                          <p className="ba-efcc9af6d1">TS-PRT-</p>
                        </div>
                        <div className="ba-ee04976b52" data-node-id="40:13518">
                          <p className="ba-efcc9af6d1">2026-</p>
                        </div>
                        <div className="ba-ee04976b52" data-node-id="40:13519">
                          <p className="ba-efcc9af6d1">00004</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-7bc4eeec93" data-node-id="40:13520" data-name="Data">
                      <div className="ba-3f403c2041">
                        <div className="ba-c475d979ca" data-node-id="40:13521" data-name="Container">
                          <div className="ba-6efa5a440c" data-node-id="40:13522">
                            <p className="ba-efcc9af6d1">Máy Photocopy Canon imageRUNNER 2630i</p>
                          </div>
                        </div>
                        <div className="ba-c475d979ca" data-node-id="40:13523" data-name="Container">
                          <div className="ba-0ffaaa5e85" data-node-id="40:13524">
                            <p className="ba-bf919b50f6">Khổ A3 đa chức năng, in đảo mặt tự động</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-8efd10c228" data-node-id="40:13525" data-name="Data">
                      <div className="ba-46ac6899e3">
                        <div className="ba-f6e9dbdd51" data-node-id="40:13526">
                          <p className="ba-8a3ede2ed5">Máy</p>
                          <p className="ba-8a3ede2ed5">văn</p>
                          <p className="ba-e32ac1aeb2">phòng</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-e8047950f7" data-node-id="40:13527" data-name="Data">
                      <div className="ba-119f3d2484">
                        <div className="ba-c74d3ef2d9" data-node-id="40:13528" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer20} />
                        </div>
                        <div className="ba-b6e164f34f" data-node-id="40:13530" data-name="Container">
                          <div className="ba-f6e9dbdd51" data-node-id="40:13531">
                            <p className="ba-8a3ede2ed5">Phòng</p>
                            <p className="ba-8a3ede2ed5">Hành</p>
                            <p className="ba-8a3ede2ed5">chính -</p>
                            <p className="ba-8a3ede2ed5">Nhân</p>
                            <p className="ba-e32ac1aeb2">sự</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-86306ebeb8" data-node-id="40:13532" data-name="Data">
                      <div className="ba-05517a66d1">
                        <div className="ba-fc9e9954f5" data-node-id="40:13533" data-name="Background">
                          <div className="ba-57090980e1" data-node-id="40:13534">
                            <p className="ba-1b6a18879c">MN</p>
                          </div>
                        </div>
                        <div className="ba-7603e0315a" data-node-id="40:13535" data-name="Container">
                          <div className="ba-f6e9dbdd51" data-node-id="40:13536">
                            <p className="ba-8a3ede2ed5">Mai Thị</p>
                            <p className="ba-e32ac1aeb2">Ngọc</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-c5dc8c417c" data-node-id="40:13537" data-name="Data">
                      <div className="ba-551a1ab1c6">
                        <div className="ba-dfd73ca2d8" data-node-id="40:13538">
                          <p className="ba-e32ac1aeb2">52.000.000 ₫</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-a405f1ab1c" data-node-id="40:13539" data-name="Data">
                      <div className="ba-b5caebb5e1">
                        <div className="ba-3f1652f97d" data-node-id="40:13540" data-name="Background">
                          <div className="ba-744a5f188d" data-node-id="40:13541">
                            <p className="ba-c22b989642">Chưa</p>
                            <p className="ba-c22b989642">cấp</p>
                            <p className="ba-bf919b50f6">phát</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-1e3da26f59" data-node-id="40:13542" data-name="Data">
                      <div className="ba-857511783b">
                        <div className="ba-31cae755f8" data-node-id="40:13543" data-name="Button">
                          <div className="ba-9d58e7df2d" data-node-id="40:13544" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer15} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:13546" data-name="Button">
                          <div className="ba-97e8208e5c" data-node-id="40:13547" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:13549" data-name="Button">
                          <div className="ba-98a62a65cc" data-node-id="40:13550" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer19} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-3c4785bdf2" data-node-id="40:13552" data-name="Row 4">
                    <div className="ba-de7614ee50" data-node-id="40:13553" data-name="Data">
                      <div className="ba-582ad7e744">
                        <div className="ba-50aea53f6b" data-node-id="40:13554" data-name="Input" data-field-hints="" />
                      </div>
                    </div>
                    <div className="ba-0040ee0a42" data-node-id="40:13555" data-name="Data">
                      <div className="ba-b440107d3f">
                        <div className="ba-ee04976b52" data-node-id="40:13556">
                          <p className="ba-efcc9af6d1">TS-SRV-</p>
                        </div>
                        <div className="ba-ee04976b52" data-node-id="40:13557">
                          <p className="ba-efcc9af6d1">2025-</p>
                        </div>
                        <div className="ba-ee04976b52" data-node-id="40:13558">
                          <p className="ba-efcc9af6d1">00019</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-7bc4eeec93" data-node-id="40:13559" data-name="Data">
                      <div className="ba-039bb865a1">
                        <div className="ba-c475d979ca" data-node-id="40:13560" data-name="Container">
                          <div className="ba-3ab3284779" data-node-id="40:13561">
                            <p className="ba-efcc9af6d1">Máy Chủ HPE ProLiant DL380 Gen10</p>
                          </div>
                        </div>
                        <div className="ba-c475d979ca" data-node-id="40:13562" data-name="Container">
                          <div className="ba-9a40ec7ff9" data-node-id="40:13563">
                            <p className="ba-bf919b50f6">2x Intel Xeon Gold 5218 / 128GB ECC / 8x 1.2TB SAS</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-8efd10c228" data-node-id="40:13564" data-name="Data">
                      <div className="ba-882347ee4f">
                        <div className="ba-f6e9dbdd51" data-node-id="40:13565">
                          <p className="ba-8a3ede2ed5">Hạ tầng</p>
                          <p className="ba-8a3ede2ed5">Trung</p>
                          <p className="ba-8a3ede2ed5">tâm dữ</p>
                          <p className="ba-e32ac1aeb2">liệu</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-e8047950f7" data-node-id="40:13566" data-name="Data">
                      <div className="ba-119f3d2484">
                        <div className="ba-356b72b269" data-node-id="40:13567" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer21} />
                        </div>
                        <div className="ba-7346871b6d" data-node-id="40:13569" data-name="Container">
                          <div className="ba-f6e9dbdd51" data-node-id="40:13570">
                            <p className="ba-8a3ede2ed5">Trung</p>
                            <p className="ba-8a3ede2ed5">tâm</p>
                            <p className="ba-8a3ede2ed5">Data</p>
                            <p className="ba-e32ac1aeb2">Center</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-86306ebeb8" data-node-id="40:13571" data-name="Data">
                      <div className="ba-05517a66d1">
                        <div className="ba-a9906c32f9" data-node-id="40:13572" data-name="Background">
                          <div className="ba-8567c0700c" data-node-id="40:13573">
                            <p className="ba-1b6a18879c">VT</p>
                          </div>
                        </div>
                        <div className="ba-d5fddcfd98" data-node-id="40:13574" data-name="Container">
                          <div className="ba-f6e9dbdd51" data-node-id="40:13575">
                            <p className="ba-8a3ede2ed5">Vũ</p>
                            <p className="ba-8a3ede2ed5">Thành</p>
                            <p className="ba-e32ac1aeb2">Toàn</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-c5dc8c417c" data-node-id="40:13576" data-name="Data">
                      <div className="ba-099f5909c7">
                        <div className="ba-dfd73ca2d8" data-node-id="40:13577">
                          <p className="ba-e32ac1aeb2">185.000.000 ₫</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-a405f1ab1c" data-node-id="40:13578" data-name="Data">
                      <div className="ba-a682213380">
                        <div className="ba-4801c031b2" data-node-id="40:13579" data-name="Background">
                          <div className="ba-8d9fd54e3e" data-node-id="40:13580">
                            <p className="ba-c22b989642">Đang</p>
                            <p className="ba-c22b989642">sử</p>
                            <p className="ba-bf919b50f6">dụng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-1e3da26f59" data-node-id="40:13581" data-name="Data">
                      <div className="ba-857511783b">
                        <div className="ba-31cae755f8" data-node-id="40:13582" data-name="Button">
                          <div className="ba-9d58e7df2d" data-node-id="40:13583" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer15} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:13585" data-name="Button">
                          <div className="ba-97e8208e5c" data-node-id="40:13586" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:13588" data-name="Button">
                          <div className="ba-98a62a65cc" data-node-id="40:13589" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer19} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-3c4785bdf2" data-node-id="40:13591" data-name="Row 5">
                    <div className="ba-de7614ee50" data-node-id="40:13592" data-name="Data">
                      <div className="ba-582ad7e744">
                        <div className="ba-50aea53f6b" data-node-id="40:13593" data-name="Input" data-field-hints="" />
                      </div>
                    </div>
                    <div className="ba-0040ee0a42" data-node-id="40:13594" data-name="Data">
                      <div className="ba-b440107d3f">
                        <div className="ba-ee04976b52" data-node-id="40:13595">
                          <p className="ba-efcc9af6d1">TS-AUT-</p>
                        </div>
                        <div className="ba-ee04976b52" data-node-id="40:13596">
                          <p className="ba-efcc9af6d1">2024-</p>
                        </div>
                        <div className="ba-ee04976b52" data-node-id="40:13597">
                          <p className="ba-efcc9af6d1">00002</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-7bc4eeec93" data-node-id="40:13598" data-name="Data">
                      <div className="ba-039bb865a1">
                        <div className="ba-c475d979ca" data-node-id="40:13599" data-name="Container">
                          <div className="ba-6efa5a440c" data-node-id="40:13600">
                            <p className="ba-efcc9af6d1">Xe ô tô 7 chỗ Toyota Fortuner Legender</p>
                          </div>
                        </div>
                        <div className="ba-c475d979ca" data-node-id="40:13601" data-name="Container">
                          <div className="ba-9a40ec7ff9" data-node-id="40:13602">
                            <p className="ba-bf919b50f6">Biển số: 29A-899.23 • Động cơ Diesel 2.8L 4x4</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-8efd10c228" data-node-id="40:13603" data-name="Data">
                      <div className="ba-d55d96d63b">
                        <div className="ba-f6e9dbdd51" data-node-id="40:13604">
                          <p className="ba-8a3ede2ed5">Phương</p>
                          <p className="ba-8a3ede2ed5">tiện vận</p>
                          <p className="ba-e32ac1aeb2">tải</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-e8047950f7" data-node-id="40:13605" data-name="Data">
                      <div className="ba-119f3d2484">
                        <div className="ba-9e6786ebd7" data-node-id="40:13606" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer22} />
                        </div>
                        <div className="ba-f29bad779a" data-node-id="40:13608" data-name="Container">
                          <div className="ba-f6e9dbdd51" data-node-id="40:13609">
                            <p className="ba-8a3ede2ed5">Đội xe</p>
                            <p className="ba-8a3ede2ed5">Văn</p>
                            <p className="ba-e32ac1aeb2">phòng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-86306ebeb8" data-node-id="40:13610" data-name="Data">
                      <div className="ba-05517a66d1">
                        <div className="ba-5bea77b3b9" data-node-id="40:13611" data-name="Background">
                          <div className="ba-202cd1c05c" data-node-id="40:13612">
                            <p className="ba-1b6a18879c">ĐD</p>
                          </div>
                        </div>
                        <div className="ba-a9a279a0ab" data-node-id="40:13613" data-name="Container">
                          <div className="ba-f6e9dbdd51" data-node-id="40:13614">
                            <p className="ba-8a3ede2ed5">Đặng</p>
                            <p className="ba-8a3ede2ed5">Đức</p>
                            <p className="ba-e32ac1aeb2">Duy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-c5dc8c417c" data-node-id="40:13615" data-name="Data">
                      <div className="ba-5b3310fd93">
                        <div className="ba-dfd73ca2d8" data-node-id="40:13616">
                          <p className="ba-8a3ede2ed5">1.250.000.000</p>
                          <p className="ba-e32ac1aeb2">₫</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-a405f1ab1c" data-node-id="40:13617" data-name="Data">
                      <div className="ba-a682213380">
                        <div className="ba-4801c031b2" data-node-id="40:13618" data-name="Background">
                          <div className="ba-8d9fd54e3e" data-node-id="40:13619">
                            <p className="ba-c22b989642">Đang</p>
                            <p className="ba-c22b989642">sử</p>
                            <p className="ba-bf919b50f6">dụng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-1e3da26f59" data-node-id="40:13620" data-name="Data">
                      <div className="ba-857511783b">
                        <div className="ba-31cae755f8" data-node-id="40:13621" data-name="Button">
                          <div className="ba-9d58e7df2d" data-node-id="40:13622" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer15} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:13624" data-name="Button">
                          <div className="ba-97e8208e5c" data-node-id="40:13625" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:13627" data-name="Button">
                          <div className="ba-98a62a65cc" data-node-id="40:13628" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer19} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-65ac5d7a1c" data-node-id="40:13630" data-name="Row 6">
                    <div className="ba-de7614ee50" data-node-id="40:13631" data-name="Data">
                      <div className="ba-a6ce9adeb4">
                        <div className="ba-50aea53f6b" data-node-id="40:13632" data-name="Input" data-field-hints="" />
                      </div>
                    </div>
                    <div className="ba-0040ee0a42" data-node-id="40:13633" data-name="Data">
                      <div className="ba-b35736674b">
                        <div className="ba-ee04976b52" data-node-id="40:13634">
                          <p className="ba-efcc9af6d1">TS-AC-</p>
                        </div>
                        <div className="ba-ee04976b52" data-node-id="40:13635">
                          <p className="ba-efcc9af6d1">2022-</p>
                        </div>
                        <div className="ba-ee04976b52" data-node-id="40:13636">
                          <p className="ba-efcc9af6d1">00031</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-7bc4eeec93" data-node-id="40:13637" data-name="Data">
                      <div className="ba-779df1e7a2">
                        <div className="ba-c475d979ca" data-node-id="40:13638" data-name="Container">
                          <div className="ba-3ab3284779" data-node-id="40:13639">
                            <p className="ba-efcc9af6d1">Điều hòa âm trần Daikin 36.000 BTU</p>
                          </div>
                        </div>
                        <div className="ba-c475d979ca" data-node-id="40:13640" data-name="Container">
                          <div className="ba-9a40ec7ff9" data-node-id="40:13641">
                            <p className="ba-bf919b50f6">Model FCNQ36MV1/RNQ36MV1 • Inverter R410A</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-8efd10c228" data-node-id="40:13642" data-name="Data">
                      <div className="ba-336292013b">
                        <div className="ba-f6e9dbdd51" data-node-id="40:13643">
                          <p className="ba-8a3ede2ed5">Điện</p>
                          <p className="ba-8a3ede2ed5">máy -</p>
                          <p className="ba-8a3ede2ed5">Công</p>
                          <p className="ba-e32ac1aeb2">trình</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-e8047950f7" data-node-id="40:13644" data-name="Data">
                      <div className="ba-119f3d2484">
                        <div className="ba-8a0ff48924" data-node-id="40:13645" data-name="Container">
                          <img alt="" className="ba-8faf267d30" src={imgContainer23} />
                        </div>
                        <div className="ba-cba4a158f2" data-node-id="40:13647" data-name="Container">
                          <div className="ba-f6e9dbdd51" data-node-id="40:13648">
                            <p className="ba-8a3ede2ed5">Hội</p>
                            <p className="ba-8a3ede2ed5">trường</p>
                            <p className="ba-e32ac1aeb2">Tầng 5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-86306ebeb8" data-node-id="40:13649" data-name="Data">
                      <div className="ba-05517a66d1">
                        <div className="ba-6880ca7bad" data-node-id="40:13650" data-name="Background">
                          <div className="ba-57090980e1" data-node-id="40:13651">
                            <p className="ba-1b6a18879c">PQ</p>
                          </div>
                        </div>
                        <div className="ba-8cc73fac0f" data-node-id="40:13652" data-name="Container">
                          <div className="ba-f6e9dbdd51" data-node-id="40:13653">
                            <p className="ba-8a3ede2ed5">Phạm</p>
                            <p className="ba-8a3ede2ed5">Quang</p>
                            <p className="ba-e32ac1aeb2">Quân</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-c5dc8c417c" data-node-id="40:13654" data-name="Data">
                      <div className="ba-ac05362075">
                        <div className="ba-dfd73ca2d8" data-node-id="40:13655">
                          <p className="ba-e32ac1aeb2">34.200.000 ₫</p>
                        </div>
                      </div>
                    </div>
                    <div className="ba-a405f1ab1c" data-node-id="40:13656" data-name="Data">
                      <div className="ba-ce71339ddc">
                        <div className="ba-6c4ccb45fb" data-node-id="40:13657" data-name="Background">
                          <div className="ba-7142b74faf" data-node-id="40:13658">
                            <p className="ba-c22b989642">Đã</p>
                            <p className="ba-c22b989642">thanh</p>
                            <p className="ba-bf919b50f6">lý</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ba-1e3da26f59" data-node-id="40:13659" data-name="Data">
                      <div className="ba-857511783b">
                        <div className="ba-31cae755f8" data-node-id="40:13660" data-name="Button">
                          <div className="ba-9d58e7df2d" data-node-id="40:13661" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer15} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:13663" data-name="Button">
                          <div className="ba-97e8208e5c" data-node-id="40:13664" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer16} />
                          </div>
                        </div>
                        <div className="ba-31cae755f8" data-node-id="40:13666" data-name="Button">
                          <div className="ba-98a62a65cc" data-node-id="40:13667" data-name="Container">
                            <img alt="" className="ba-8faf267d30" src={imgContainer19} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-60ec4d18bb" data-node-id="40:13669" data-name="Table Pagination Footer">
                <div className="ba-9eae8902b4" data-node-id="40:13670" data-name="Container">
                  <div className="ba-39ca0321a1" data-node-id="40:13671" data-name="Container">
                    <div className="ba-73820a4170" data-node-id="40:13672">
                      <p className="ba-bf919b50f6">Hiển thị</p>
                    </div>
                  </div>
                  <div className="ba-22470180e9" data-node-id="40:13673" data-name="Options" data-field-hints="">
                    <div className="ba-5ddba78f67" data-node-id="40:13674" data-name="Container">
                      <div className="ba-df18ffb03a" data-node-id="40:13675">
                        <p className="ba-1b6a18879c">10 dòng / trang</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-39ca0321a1" data-node-id="40:13676" data-name="Container">
                    <div className="ba-73820a4170" data-node-id="40:13677">
                      <p>
                        <span className="ba-bf919b50f6">{`trên tổng số `}</span>
                        <span className="ba-d7c32c0359">248</span>
                        <span className="ba-bf919b50f6">{` bản ghi`}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ba-3536005f7f" data-node-id="40:13678" data-name="Container">
                  <div className="ba-9546c8cdc4" data-node-id="40:13679" data-name="Button">
                    <div className="ba-a4bca39163" data-node-id="40:13680" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer24} />
                    </div>
                  </div>
                  <div className="ba-9546c8cdc4" data-node-id="40:13682" data-name="Button">
                    <div className="ba-7ec7ac8b0d" data-node-id="40:13683" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer25} />
                    </div>
                  </div>
                  <div className="ba-8544d5c6f4" data-node-id="40:13685" data-name="Button">
                    <div className="ba-dc9a3c1fb4" data-node-id="40:13686">
                      <p className="ba-bf919b50f6">1</p>
                    </div>
                  </div>
                  <div className="ba-9bd2b745fe" data-node-id="40:13687" data-name="Button">
                    <div className="ba-90bd582a61" data-node-id="40:13688">
                      <p className="ba-bf919b50f6">2</p>
                    </div>
                  </div>
                  <div className="ba-9bd2b745fe" data-node-id="40:13689" data-name="Button">
                    <div className="ba-90bd582a61" data-node-id="40:13690">
                      <p className="ba-bf919b50f6">3</p>
                    </div>
                  </div>
                  <div className="ba-a452c11bd2" data-node-id="40:13691" data-name="Container">
                    <div className="ba-b0015a452a" data-node-id="40:13692">
                      <p className="ba-bf919b50f6">...</p>
                    </div>
                  </div>
                  <div className="ba-9bd2b745fe" data-node-id="40:13693" data-name="Button">
                    <div className="ba-90bd582a61" data-node-id="40:13694">
                      <p className="ba-bf919b50f6">25</p>
                    </div>
                  </div>
                  <div className="ba-a42c3a2acd" data-node-id="40:13695" data-name="Button">
                    <div className="ba-7ec7ac8b0d" data-node-id="40:13696" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer26} />
                    </div>
                  </div>
                  <div className="ba-a42c3a2acd" data-node-id="40:13698" data-name="Button">
                    <div className="ba-a4bca39163" data-node-id="40:13699" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer27} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-1a9dbaca21" data-node-id="40:13701" data-name="Operational Diagnostics & Log Activity (Sub-canvas)">
            <div className="ba-92238057f8" data-node-id="40:13702" data-name="Background+Shadow">
              <div className="ba-62f39da6b2" data-node-id="40:13703" data-name="Container">
                <div className="ba-c96fe10678" data-node-id="40:13704" data-name="Container">
                  <div className="ba-39ca0321a1" data-node-id="40:13705" data-name="Heading 3">
                    <div className="ba-4f439b0e64" data-node-id="40:13706">
                      <p className="ba-76aad9ca0a">Nhật ký tác vụ gần đây</p>
                    </div>
                  </div>
                  <div className="ba-39ca0321a1" data-node-id="40:13707" data-name="Container">
                    <div className="ba-cc2d00fd2d" data-node-id="40:13708">
                      <p className="ba-bf919b50f6">Xem tất cả</p>
                    </div>
                  </div>
                </div>
                <div className="ba-24081ceef5" data-node-id="40:13709" data-name="Container">
                  <div className="ba-c4fde51420" data-node-id="40:13710" data-name="Container">
                    <div className="ba-0f784ca540" data-node-id="40:13711" data-name="Margin">
                      <div className="ba-32dd705e31" data-node-id="40:13712" data-name="Background" />
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="40:13713" data-name="Container">
                      <div className="ba-153c0a1809" data-node-id="40:13714" data-name="Container">
                        <div className="ba-df18ffb03a" data-node-id="40:13715">
                          <p className="ba-bf919b50f6">Lỗi xóa: TS-FUR-2026-00087</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="40:13716" data-name="Container">
                        <div className="ba-a14ddb5451" data-node-id="40:13717">
                          <p className="ba-c22b989642">Yêu cầu xóa bị hủy do hết thời gian kết nối máy chủ</p>
                          <p className="ba-bf919b50f6">RPC (14:32)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-c4fde51420" data-node-id="40:13718" data-name="Container">
                    <div className="ba-0f784ca540" data-node-id="40:13719" data-name="Margin">
                      <div className="ba-d56a5f7154" data-node-id="40:13720" data-name="Background" />
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="40:13721" data-name="Container">
                      <div className="ba-153c0a1809" data-node-id="40:13722" data-name="Container">
                        <div className="ba-df18ffb03a" data-node-id="40:13723">
                          <p className="ba-bf919b50f6">Cấp phát thành công: TS-IT-2026-00102</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="40:13724" data-name="Container">
                        <div className="ba-a14ddb5451" data-node-id="40:13725">
                          <p className="ba-bf919b50f6">Bàn giao cho nhân viên Lê Hoàng Anh (13:15)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ba-c4fde51420" data-node-id="40:13726" data-name="Container">
                    <div className="ba-0f784ca540" data-node-id="40:13727" data-name="Margin">
                      <div className="ba-276f3c6e53" data-node-id="40:13728" data-name="Background" />
                    </div>
                    <div className="ba-39ca0321a1" data-node-id="40:13729" data-name="Container">
                      <div className="ba-153c0a1809" data-node-id="40:13730" data-name="Container">
                        <div className="ba-df18ffb03a" data-node-id="40:13731">
                          <p className="ba-bf919b50f6">Cập nhật kiểm kê tháng 5/2026</p>
                        </div>
                      </div>
                      <div className="ba-153c0a1809" data-node-id="40:13732" data-name="Container">
                        <div className="ba-a14ddb5451" data-node-id="40:13733">
                          <p className="ba-bf919b50f6">Hoàn tất đối soát 45 tài sản khối Văn phòng (10:48)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-063662110c" data-node-id="40:13734" data-name="Background+Shadow">
              <div className="ba-62f39da6b2" data-node-id="40:13735" data-name="Container">
                <div className="ba-c96fe10678" data-node-id="40:13736" data-name="Container">
                  <div className="ba-4d637326a7" data-node-id="40:13737" data-name="Heading 3">
                    <div className="ba-4f439b0e64" data-node-id="40:13738">
                      <p className="ba-4b6563eac3">Tình trạng kết nối máy</p>
                      <p className="ba-76aad9ca0a">chủ</p>
                    </div>
                  </div>
                  <div className="ba-5b635ecd9d" data-node-id="40:13739" data-name="Background">
                    <div className="ba-e3be91e524" data-node-id="40:13740">
                      <p className="ba-c22b989642">Gián đoạn</p>
                      <p className="ba-bf919b50f6">phụ</p>
                    </div>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="40:13741" data-name="Container">
                  <div className="ba-0ffaaa5e85" data-node-id="40:13742">
                    <p className="ba-c22b989642">Hệ thống ghi nhận độ trễ vượt ngưỡng 4500ms tại</p>
                    <p className="ba-bf919b50f6">cụm quản trị kho vật lý Cầu Giấy.</p>
                  </div>
                </div>
                <div className="ba-c3fa84a74b" data-node-id="40:13743" data-name="Container">
                  <div className="ba-33a96cd610" data-node-id="40:13744" data-name="Container">
                    <div className="ba-42982ffa2e" data-node-id="40:13745" data-name="Container">
                      <div className="ba-a14ddb5451" data-node-id="40:13746">
                        <p className="ba-e9e8a40ea4">Gateway Microservices (Core API)</p>
                      </div>
                    </div>
                    <div className="ba-42982ffa2e" data-node-id="40:13747" data-name="Container">
                      <div className="ba-53c51618e6" data-node-id="40:13748">
                        <p className="ba-e9e8a40ea4">Bình thường (42ms)</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-7e5d3caf75" data-node-id="40:13749" data-name="Background">
                    <div className="ba-e9ae5061b9" data-node-id="40:13750" data-name="Background" />
                  </div>
                  <div className="ba-e1734d75a4" data-node-id="40:13751" data-name="Container">
                    <div className="ba-83e2f929d7" data-node-id="40:13752" data-name="Container">
                      <div className="ba-a14ddb5451" data-node-id="40:13753">
                        <p className="ba-9d0b9e8d4b">Dịch vụ xác thực phân quyền xóa</p>
                        <p className="ba-e9e8a40ea4">(Auth RPC)</p>
                      </div>
                    </div>
                    <div className="ba-e9d3a3ec1e" data-node-id="40:13754" data-name="Container">
                      <div className="ba-be7efcc3e7" data-node-id="40:13755">
                        <p className="ba-9d0b9e8d4b">Timeout</p>
                        <p className="ba-e9e8a40ea4">(4500ms+)</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-c4fef91ec8" data-node-id="40:13756" data-name="Background">
                    <div className="ba-9b0a215d88" data-node-id="40:13757" data-name="Background" />
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-8f9c805118" data-node-id="40:13758" data-name="Background+Shadow">
              <div className="ba-62f39da6b2" data-node-id="40:13759" data-name="Container">
                <div className="ba-c96fe10678" data-node-id="40:13760" data-name="Container">
                  <div className="ba-39ca0321a1" data-node-id="40:13761" data-name="Heading 3">
                    <div className="ba-4f439b0e64" data-node-id="40:13762">
                      <p className="ba-76aad9ca0a">Trợ giúp vận hành</p>
                    </div>
                  </div>
                  <div className="ba-9a42cefb5d" data-node-id="40:13763" data-name="Container">
                    <img alt="" className="ba-8faf267d30" src={imgContainer28} />
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="40:13765" data-name="Container">
                  <div className="ba-0ffaaa5e85" data-node-id="40:13766">
                    <p className="ba-c22b989642">Nếu lỗi kết nối máy chủ tiếp tục xảy ra khi xóa</p>
                    <p className="ba-c22b989642">hoặc cập nhật bản ghi, vui lòng liên hệ nhóm Hỗ</p>
                    <p className="ba-bf919b50f6">trợ Kỹ thuật Nội bộ.</p>
                  </div>
                </div>
              </div>
              <div className="ba-d82f0f0d0c" data-node-id="40:13767" data-name="Margin">
                <div className="ba-9b5dc38ea3" data-node-id="40:13768" data-name="Container">
                  <div className="ba-39ca0321a1" data-node-id="40:13769" data-name="Container">
                    <div className="ba-73820a4170" data-node-id="40:13770">
                      <p className="ba-bf919b50f6">Hotline: Ext 8892</p>
                    </div>
                  </div>
                  <div className="ba-286aa83552" data-node-id="40:13771" data-name="Button">
                    <div className="ba-e3cf9ba763" data-node-id="40:13772">
                      <p className="ba-bf919b50f6">Gửi Ticket Sự Cố</p>
                    </div>
                    <div className="ba-0082061c23" data-node-id="40:13773" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer29} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-9bbb452a7f" data-node-id="40:13775" data-name="Header">
        <div className="ba-d452ad70ec" data-node-id="40:13776" data-name="Container">
          <div className="ba-bbe7baeddc">
            <div className="ba-39ca0321a1" data-node-id="40:13777" data-name="Link">
              <div className="ba-73820a4170" data-node-id="40:13778">
                <p className="ba-bf919b50f6">Trang chủ</p>
              </div>
            </div>
            <div className="ba-0dbdb9e0f7" data-node-id="40:13779" data-name="Container">
              <img alt="" className="ba-8faf267d30" src={imgContainer30} />
            </div>
            <div className="ba-39ca0321a1" data-node-id="40:13781" data-name="Link">
              <div className="ba-73820a4170" data-node-id="40:13782">
                <p className="ba-bf919b50f6">Quản lý tài sản</p>
              </div>
            </div>
            <div className="ba-0dbdb9e0f7" data-node-id="40:13783" data-name="Container">
              <img alt="" className="ba-8faf267d30" src={imgContainer30} />
            </div>
            <div className="ba-39ca0321a1" data-node-id="40:13785" data-name="Container">
              <div className="ba-df18ffb03a" data-node-id="40:13786">
                <p className="ba-bf919b50f6">Danh sách tài sản</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-d452ad70ec" data-node-id="40:13787" data-name="Container">
          <div className="ba-244c842be0">
            <div className="ba-e8210ba625" data-node-id="40:13788" data-name="Container">
              <div className="ba-148fb4d559" data-node-id="40:13789" data-name="Input" data-field-hints="">
                <div className="ba-67366dcb7c" data-node-id="40:13790" data-name="Container">
                  <div className="ba-09c6898323">
                    <div className="ba-eae6c1d9d6" data-node-id="40:13791">
                      <p className="ba-32bd4c7660">Tìm kiếm nhanh tài sản...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-b5342f5a83" data-node-id="40:13792" data-name="Icon">
                <img alt="" className="ba-8faf267d30" src={imgIcon1} />
              </div>
            </div>
            <div className="ba-adf912547c" data-node-id="40:13793" data-name="Button - Thông báo">
              <div className="ba-b88463e588" data-node-id="40:13794" data-name="Container">
                <img alt="" className="ba-8faf267d30" src={imgContainer31} />
              </div>
              <div className="ba-c808de177b" data-node-id="40:13796" data-name="Background">
                <div className="ba-0b2d9fc41b" data-node-id="40:13797">
                  <p className="ba-1b6a18879c">3</p>
                </div>
              </div>
            </div>
            <div className="ba-adf912547c" data-node-id="40:13798" data-name="Button - Trợ giúp">
              <div className="ba-6561bd9151" data-node-id="40:13799" data-name="Container">
                <img alt="" className="ba-8faf267d30" src={imgContainer32} />
              </div>
            </div>
            <div className="ba-100ca17654" data-node-id="40:13801" data-name="Vertical Divider" />
            <div className="ba-9eae8902b4" data-node-id="40:13802" data-name="Container">
              <div className="ba-e5f422648d" data-node-id="40:13803" data-name="Background">
                <div className="ba-8a0ff48924" data-node-id="40:13804" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer33} />
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="40:13806" data-name="Container">
                <div className="ba-153c0a1809" data-node-id="40:13807" data-name="Container">
                  <div className="ba-cd3f9b7aa8" data-node-id="40:13808">
                    <p className="ba-080b7c55f9">Nguyễn Văn An</p>
                  </div>
                </div>
                <div className="ba-153c0a1809" data-node-id="40:13809" data-name="Container">
                  <div className="ba-73820a4170" data-node-id="40:13810">
                    <p className="ba-1b6a18879c">Nhân viên QLTS</p>
                  </div>
                </div>
              </div>
              <div className="ba-3d39f28566" data-node-id="40:13811" data-name="Container">
                <img alt="" className="ba-8faf267d30" src={imgContainer34} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-b80f11b636" data-node-id="40:13813" data-name="Aside">
        <div className="ba-67366dcb7c" data-node-id="40:13814" data-name="Container">
          <div className="ba-4ed85d2730">
            <div className="ba-009c993968" data-node-id="40:13815" data-name="Margin">
              <div className="ba-a37cb2f707" data-node-id="40:13816" data-name="Container">
                <div className="ba-0b496d0988" data-node-id="40:13817" data-name="QLTS Logo">
                  <div className="ba-fb97e384f1">
                    <img alt="" className="ba-3407971055" src={imgQltsLogo} />
                  </div>
                </div>
                <div className="ba-55a8c62265" data-node-id="40:13818" data-name="Container">
                  <div className="ba-e0822dd18c" data-node-id="40:13819" data-name="Container">
                    <div className="ba-bdaf12a71f" data-node-id="40:13820">
                      <p className="ba-5f33bcd61f">QLTS</p>
                    </div>
                  </div>
                  <div className="ba-9ad1c5c501" data-node-id="40:13821" data-name="Container">
                    <div className="ba-92b02279e2" data-node-id="40:13822">
                      <p className="ba-bf919b50f6">Quản Lý Tài Sản</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba-f737562fde" data-node-id="40:13823" data-name="Nav">
              <div className="ba-557153ff70" data-node-id="40:13824" data-name="Link">
                <div className="ba-b784803253" data-node-id="40:13825" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer35} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:13827" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:13828">
                    <p className="ba-efcc9af6d1">Tổng quan</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:13829" data-name="Link">
                <div className="ba-0e5557a34c" data-node-id="40:13830" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer36} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:13832" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:13833">
                    <p className="ba-efcc9af6d1">Quản lý tài sản</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:13834" data-name="Link">
                <div className="ba-8d9eb16724" data-node-id="40:13835" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer37} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:13837" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:13838">
                    <p className="ba-efcc9af6d1">Cấp phát</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:13839" data-name="Link">
                <div className="ba-64dfebc1ac" data-node-id="40:13840" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer38} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:13842" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:13843">
                    <p className="ba-efcc9af6d1">Điều chuyển</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:13844" data-name="Link">
                <div className="ba-b784803253" data-node-id="40:13845" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer39} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:13847" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:13848">
                    <p className="ba-efcc9af6d1">Bảo trì</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:13849" data-name="Link">
                <div className="ba-64dfebc1ac" data-node-id="40:13850" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer40} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:13852" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:13853">
                    <p className="ba-efcc9af6d1">Kiểm kê</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:13854" data-name="Link">
                <div className="ba-b784803253" data-node-id="40:13855" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer41} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:13857" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:13858">
                    <p className="ba-efcc9af6d1">Thanh lý</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:13859" data-name="Link">
                <div className="ba-c74d3ef2d9" data-node-id="40:13860" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer42} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:13862" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:13863">
                    <p className="ba-efcc9af6d1">Báo cáo</p>
                  </div>
                </div>
              </div>
              <div className="ba-557153ff70" data-node-id="40:13864" data-name="Link">
                <div className="ba-2acf92dda9" data-node-id="40:13865" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer43} />
                </div>
                <div className="ba-39ca0321a1" data-node-id="40:13867" data-name="Container">
                  <div className="ba-3682001bac" data-node-id="40:13868">
                    <p className="ba-efcc9af6d1">Quản trị</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-b55647e14b" data-node-id="40:13869" data-name="HorizontalBorder">
          <div className="ba-a725867360">
            <div className="ba-67366dcb7c" data-node-id="40:13870" data-name="Container">
              <div className="ba-4ed85d2730">
                <div className="ba-1d6344f4d0" data-node-id="40:13871">
                  <p className="ba-bf919b50f6">v2.4.0 Enterprise</p>
                </div>
              </div>
            </div>
            <div className="ba-67366dcb7c" data-node-id="40:13872" data-name="Container">
              <div className="ba-4ed85d2730">
                <div className="ba-7523cf9e1d" data-node-id="40:13873">
                  <p className="ba-bf919b50f6">© 2024 QLTS Corporation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-faaf1e1719" data-node-id="40:13874" data-name="Fixed Toast Notification Container (Top Right: State C / E4 - System error)">
        <div className="ba-4ce198b08f" data-node-id="40:13875" data-name="Fixed Toast Notification Container (Top Right: State C / E4 - System error):shadow" />
        <div className="ba-8811c6cfd5" data-node-id="40:13876" data-name="Container">
          <div className="ba-92b7da7864" data-node-id="40:13877" data-name="Container">
            <div className="ba-47a952f0bc" data-node-id="40:13878" data-name="Margin">
              <div className="ba-363ce89964" data-node-id="40:13879" data-name="Overlay">
                <div className="ba-0e5557a34c" data-node-id="40:13880" data-name="Container">
                  <img alt="" className="ba-8faf267d30" src={imgContainer44} />
                </div>
              </div>
            </div>
            <div className="ba-39ca0321a1" data-node-id="40:13882" data-name="Container">
              <div className="ba-fc2bbc1ac8" data-node-id="40:13883" data-name="Container">
                <div className="ba-39ca0321a1" data-node-id="40:13884" data-name="Heading 4">
                  <div className="ba-4f439b0e64" data-node-id="40:13885">
                    <p className="ba-76aad9ca0a">Không thể xóa tài sản</p>
                  </div>
                </div>
                <div className="ba-898e4c4c93" data-node-id="40:13886" data-name="Background">
                  <div className="ba-c64a38cfa4" data-node-id="40:13887">
                    <p className="ba-1b6a18879c">E4</p>
                  </div>
                </div>
              </div>
              <div className="ba-cca7920792" data-node-id="40:13888" data-name="Margin">
                <div className="ba-643fbbeb9f" data-node-id="40:13889" data-name="Container">
                  <div className="ba-b8071c3276" data-node-id="40:13890">
                    <p className="ba-c22b989642">Không thể xóa tài sản, vui lòng thử lại hoặc liên hệ</p>
                    <p className="ba-bf919b50f6">{`quản trị viên. `}</p>
                  </div>
                  <div className="ba-7ffc1ddadf" data-node-id="40:13891" data-name="Button">
                    <div className="ba-e3cf9ba763" data-node-id="40:13892">
                      <p className="ba-bf919b50f6">Thử lại</p>
                    </div>
                    <div className="ba-3ff24f0abb" data-node-id="40:13893" data-name="Container">
                      <img alt="" className="ba-8faf267d30" src={imgContainer45} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-225bb69d04" data-node-id="40:13895" data-name="Button">
            <div className="ba-0082061c23" data-node-id="40:13896" data-name="Container">
              <img alt="" className="ba-8faf267d30" src={imgContainer46} />
            </div>
          </div>
        </div>
        <div className="ba-69b7c5b1e8" data-node-id="40:13898" data-name="Secondary Technical Error Code Strip:margin">
          <div className="ba-3710ec75c1" data-node-id="40:13899" data-name="Secondary Technical Error Code Strip">
            <div className="ba-88cb7a7b81" data-node-id="40:13900" data-name="Container">
              <div className="ba-f471ebbecd" data-node-id="40:13901" data-name="Background" />
              <div className="ba-39ca0321a1" data-node-id="40:13902" data-name="Container">
                <div className="ba-7d3e8dc91c" data-node-id="40:13903">
                  <p className="ba-e9e8a40ea4">Mã lỗi: ERR_DELETE_TIMEOUT</p>
                </div>
              </div>
              <div className="ba-39ca0321a1" data-node-id="40:13904" data-name="Container">
                <div className="ba-f7a79f68bb" data-node-id="40:13905">
                  <p className="ba-e9e8a40ea4">•</p>
                </div>
              </div>
              <div className="ba-3f77332371" data-node-id="40:13906" data-name="Container">
                <div className="ba-1751e72d6e" data-node-id="40:13907">
                  <p className="ba-e9e8a40ea4">Kết nối máy chủ bị gián đoạn</p>
                </div>
              </div>
            </div>
            <div className="ba-39ca0321a1" data-node-id="40:13908" data-name="Container">
              <div className="ba-e607062853" data-node-id="40:13909">
                <p className="ba-1b6a18879c">14:32:08</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-464ed97b3c" data-node-id="40:13910" data-name="Visual 4px solid left indicator simulated via inner structure and elevation" />
      </div>
    </div>
  );
}
