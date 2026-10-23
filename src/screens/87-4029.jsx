/** Screen 87:4029 — Xác nhận xử lý phiếu. Presentation adapted from Figma. */
import { h } from "../design-runtime.jsx";
const imgSvg = "/assets/2edbc0ec-657f-43ef-bc92-825ad67abb69.svg";

export default function HpThoiModalTrungTam() {
  return (
    <div className="ba-a70ccabe7c" data-node-id="87:4029" data-name="Hộp thoại Modal trung tâm">
      <div className="ba-8d52439ba5" data-node-id="87:4030" data-name="Modal Header (Tiêu đề + Nút đóng '✕')">
        <div className="ba-10350a6899">
          <div className="ba-d452ad70ec" data-node-id="87:4031" data-name="Heading 3">
            <div className="ba-4ed85d2730">
              <div className="ba-6523e6cbdb" data-node-id="87:4032">
                <p className="ba-f62dcabf0a">Từ chối yêu cầu cấp phát</p>
              </div>
            </div>
          </div>
          <div className="ba-9f32def6f4" data-node-id="87:4033" data-name="Button">
            <div className="ba-04cc6fcd31">
              <div className="ba-b2a182ecf4" data-node-id="87:4034" data-name="SVG">
                <img alt="" className="ba-8faf267d30" src={imgSvg} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-67366dcb7c" data-node-id="87:4036" data-name="Form - Modal Body">
        <div className="ba-12d8c70272">
          <div className="ba-62f39da6b2" data-node-id="87:4037" data-name="Container">
            <div className="ba-153c0a1809" data-node-id="87:4038" data-name="Label bắt buộc với dấu sao">
              <div className="ba-d282e49e2e" data-node-id="87:4039">
                <p>
                  <span className="ba-efcc9af6d1">{`Lý do từ chối `}</span>
                  <span className="ba-22f1e8f264">*</span>
                </p>
              </div>
            </div>
            <div className="ba-9b4a752c63" data-node-id="87:4040" data-name="Vùng nhập lý do và bộ đếm ký t">
              <div className="ba-299434e302" data-node-id="87:4041" data-name="Textarea" data-field-hints="">
                <div className="ba-4a9b73a3b7" data-node-id="87:4042" data-name="Container">
                  <div className="ba-4ed85d2730">
                    <div className="ba-3a1c5436b9" data-node-id="87:4043">
                      <p className="ba-efcc9af6d1">Nhập lý do từ chối yêu cầu cấp phát tài sản...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-011ffa3256" data-node-id="87:4044" data-name="m ký tự (0/500) ở góc phải dưới textarea">
                <div className="ba-c10afc6eec" data-node-id="87:4045">
                  <p className="ba-bf919b50f6">0/500</p>
                </div>
              </div>
            </div>
            <div className="ba-153c0a1809" data-node-id="87:4046" data-name="Dòng chú thích trợ giúp">
              <div className="ba-380a733d22" data-node-id="87:4047">
                <p className="ba-bf919b50f6">Vui lòng nhập lý do để người yêu cầu có thể điều chỉnh.</p>
              </div>
            </div>
          </div>
          <div className="ba-d976ca56c8" data-node-id="87:4048" data-name="Modal Footer: Hủy và Xác nhận từ chối">
            <div className="ba-61b334b320" data-node-id="87:4049" data-name="Button">
              <div className="ba-48f3d66d50">
                <div className="ba-645b6d0c79" data-node-id="87:4050">
                  <p className="ba-efcc9af6d1">Hủy</p>
                </div>
              </div>
            </div>
            <div className="ba-d452ad70ec" data-node-id="87:4051" data-name="Button:margin">
              <div className="ba-a86d6f6cd4">
                <div className="ba-8fd6556ed0" data-node-id="87:4052" data-name="Button">
                  <div className="ba-b5300aff3b" data-node-id="87:4053">
                    <p className="ba-efcc9af6d1">Xác nhận từ chối</p>
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
