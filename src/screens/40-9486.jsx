/** Screen 40:9486 — LỚP PHỦ BACKDROP (Chặn tương tác form, làm mờ không gian). Presentation adapted from Figma. */
import { h } from "../design-runtime.jsx";
const imgContainer = "/assets/60bb2d32-54b1-4025-b69f-b693d3c57a49.svg";
const imgContainer1 = "/assets/34b5a748-b4bd-4a8d-9117-71db537b5f85.svg";
const imgContainer2 = "/assets/ac580ef8-acab-4600-8e1c-738d62fb6330.svg";
const imgContainer3 = "/assets/bb6ec250-2675-498a-a4ae-07982eeda3ec.svg";
const imgContainer4 = "/assets/2e7f1118-f663-4f94-ad9c-5e29eeb95dc2.svg";

export default function LpPhBackdropChnTngTacFormLamMKhongGian() {
  return (
    <div className="ba-79dd79c6d7" data-node-id="40:9486" data-name="LỚP PHỦ BACKDROP (Chặn tương tác form, làm mờ không gian)">
      <div className="ba-45fc9bd441" data-node-id="40:9487" data-name="Dialog - HỘP THOẠI XÁC NHẬN HỦY (Confirm Cancel Modal)">
        <div className="ba-4d68778dfc" data-node-id="40:9488" data-name="Dialog - HỘP THOẠI XÁC NHẬN HỦY (Confirm Cancel Modal):shadow" />
        <div className="ba-211df08db6" data-node-id="40:9489" data-name="Biểu tượng cảnh báo Hổ phách / Cam">
          <div className="ba-004e5302c1" data-node-id="40:9490" data-name="Container">
            <img alt="" className="ba-8faf267d30" src={imgContainer} />
          </div>
        </div>
        <div className="ba-b71ccc692d" data-node-id="40:9492" data-name="Heading 3 - Tiêu đề hộp thoại">
          <div className="ba-8e64cbcae1" data-node-id="40:9493">
            <p className="ba-6b319aafdd">Hủy thêm mới tài sản?</p>
          </div>
        </div>
        <div className="ba-bd528cdb5d" data-node-id="40:9494" data-name="Nội dung giải thích rủi ro">
          <div className="ba-fb1bdd4ebe" data-node-id="40:9495">
            <p className="ba-6d24bf7828">Mọi dữ liệu chi tiết và chứng từ vừa thiết lập sẽ không được</p>
            <p className="ba-cac1e37ea2">lưu vào hệ thống. Bạn có chắc chắn muốn rời đi?</p>
          </div>
        </div>
        <div className="ba-de4f3e5514" data-node-id="40:9496" data-name="Bảng tóm tắt nhanh dữ liệu sắp mất">
          <div className="ba-c96fe10678" data-node-id="40:9497" data-name="Container">
            <div className="ba-39ca0321a1" data-node-id="40:9498" data-name="Container">
              <div className="ba-b0015a452a" data-node-id="40:9499">
                <p className="ba-bf919b50f6">Mã tài sản đang tạo:</p>
              </div>
            </div>
            <div className="ba-39ca0321a1" data-node-id="40:9500" data-name="Container">
              <div className="ba-df18ffb03a" data-node-id="40:9501">
                <p className="ba-bf919b50f6">TSCD-2024-0892</p>
              </div>
            </div>
          </div>
          <div className="ba-c96fe10678" data-node-id="40:9502" data-name="Container">
            <div className="ba-39ca0321a1" data-node-id="40:9503" data-name="Container">
              <div className="ba-b0015a452a" data-node-id="40:9504">
                <p className="ba-bf919b50f6">Đã nhập thông tin:</p>
              </div>
            </div>
            <div className="ba-39ca0321a1" data-node-id="40:9505" data-name="Container">
              <div className="ba-cc2d00fd2d" data-node-id="40:9506">
                <p className="ba-bf919b50f6">3/3 danh mục</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-2f112dde06" data-node-id="40:9507" data-name="Cụm nút hành động quyết định (2 cột đối xứng)">
          <div className="ba-3d70d2e759" data-node-id="40:9508" data-name="Button - Nút Phụ / Ghost: Ở lại tiếp tục soạn thảo">
            <div className="ba-8a0ff48924" data-node-id="40:9509" data-name="Container">
              <img alt="" className="ba-8faf267d30" src={imgContainer1} />
            </div>
            <div className="ba-9021357745" data-node-id="40:9511" data-name="Container">
              <div className="ba-2aa6e1e924" data-node-id="40:9512">
                <p className="ba-efcc9af6d1">Ở lại form</p>
              </div>
            </div>
          </div>
          <div className="ba-48e84dc1de" data-node-id="40:9513" data-name="Button - Nút Nguy hiểm (Danger): Đồng ý hủy bỏ hoàn toàn">
            <div className="ba-98a62a65cc" data-node-id="40:9514" data-name="Container">
              <img alt="" className="ba-8faf267d30" src={imgContainer2} />
            </div>
            <div className="ba-9021357745" data-node-id="40:9516" data-name="Container">
              <div className="ba-b5300aff3b" data-node-id="40:9517">
                <p className="ba-efcc9af6d1">Đồng ý hủy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ba-046b05961f" data-node-id="40:9518" data-name="Ghi chú bảo mật quy trình phía dưới">
          <div className="ba-9141f4e78e" data-node-id="40:9519" data-name="Container">
            <img alt="" className="ba-8faf267d30" src={imgContainer3} />
          </div>
          <div className="ba-39ca0321a1" data-node-id="40:9521" data-name="Container">
            <div className="ba-f7a79f68bb" data-node-id="40:9522">
              <p className="ba-e9e8a40ea4">Nhật ký tác vụ sẽ tự động ghi nhận phiên thao tác hủy</p>
            </div>
          </div>
        </div>
        <div className="ba-36ff20d2e3" data-node-id="40:9523" data-name="Button - Nút đóng nhanh góc trên bên phải">
          <div className="ba-29b5d1239f" data-node-id="40:9524" data-name="Container">
            <img alt="" className="ba-8faf267d30" src={imgContainer4} />
          </div>
        </div>
      </div>
    </div>
  );
}
