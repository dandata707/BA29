# BA29 — BA Asset UI

Giao diện React/CSS được triển khai từ file [BA29-Group2 trên Figma](https://www.figma.com/design/MySGK8FpRuC8vEG71rhMG7/BA29-Group2?node-id=79-2).

Bao gồm **77 frame Figma** cùng các màn hình yêu cầu cấp phát được bổ sung bằng React, thuộc 5 phân hệ: tài sản, cấp phát, thu hồi, điều chuyển và thanh lý. Mỗi màn hình tải theo nhu cầu. Ảnh và SVG gốc được lưu trong `public/assets`; font được đóng gói cùng ứng dụng. Không phụ thuộc Tailwind hay liên kết ảnh Figma tạm thời khi chạy.

## Chạy dự án

Yêu cầu Node.js 20.19+ hoặc 22.12+ và npm.

```powershell
npm install
npm run dev
```

Mở **http://localhost:5173/**. Vai trò mặc định là nhân viên quản lý tài sản và màn hình đầu tiên là **Danh sách yêu cầu cấp phát**. Cổng 5173 được cố định; nếu cổng đang được dùng, dừng tiến trình cũ trước khi chạy lại.

```powershell
npm run build
npm run preview
npm test
```

Bản production nằm trong `dist/`. Khi dùng máy chủ khác, phục vụ thư mục `dist` tại đường dẫn gốc. Điều hướng dùng hash nên không cần cấu hình rewrite trên hosting tĩnh.

## Điều hướng

Sidebar chung bên trái kết nối năm phân hệ và các bước nghiệp vụ theo SRS/URD. Chọn bước trong sidebar hoặc dùng nút **Trước/Tiếp** trên thanh chỉ dẫn để xem liền mạch các màn hình. Có thể thu gọn sidebar; lựa chọn này được ghi nhớ trong trình duyệt. Chuyển màn hình có hiệu ứng nhẹ và tôn trọng cài đặt giảm chuyển động của hệ điều hành.

Nút **Chuyển vai trò** ở cuối sidebar cho phép xem prototype dưới ba vai trò. **Nhân viên thông thường** thấy đúng hai mục con của Cấp phát tài sản: **Yêu cầu cấp phát** và **Biên bản bàn giao**; trong Thu hồi tài sản chỉ thấy **Giao diện nhân viên xác nhận**. Nút tạo phiếu trong màn yêu cầu vẫn mở biểu mẫu. **Giám đốc** thấy danh sách chờ và màn **Phê duyệt** thanh lý. **Nhân viên quản lý tài sản** thấy năm phân hệ, trừ màn phê duyệt dành cho Giám đốc. Vai trò được ghi nhớ trên trình duyệt; đây là mô phỏng giao diện, không phải cơ chế phân quyền máy chủ.

Nhấn **Ctrl + K** hoặc bấm thương hiệu BA Asset để mở menu chuyển phân hệ và xem các trạng thái Figma bổ sung. **Ctrl + S** lưu nháp; **Esc** đóng hộp thoại/menu.

| Phân hệ | Đường dẫn |
| --- | --- |
| Tài sản | `/#/tai-san` |
| Thêm mới tài sản | `/#/tai-san/them-moi` |
| Chỉnh sửa tài sản | `/#/tai-san/chinh-sua` |
| In QR | `/#/tai-san/in-qr` |
| Phiếu cấp phát của tôi | `/#/cap-phat` |
| Tạo phiếu cấp phát | `/#/cap-phat/tao-moi` |
| Danh sách phiếu chờ xử lý | `/#/cap-phat/yeu-cau` |
| Chi tiết phiếu yêu cầu cấp phát | `/#/cap-phat/chi-tiet` |
| Biên bản bàn giao | `/#/cap-phat/ban-giao` |
| Thu hồi tài sản | `/#/thu-hoi` |
| Điều chuyển tài sản | `/#/dieu-chuyen` |
| Thanh lý tài sản | `/#/thanh-ly` |
| Danh mục tất cả màn hình/trạng thái | `/#/man-hinh` |

Tất cả các bước nghiệp vụ có trong `src/workflows.mjs`. Để mở một frame/trạng thái Figma cụ thể, dùng `/#/man-hinh/ID`, thay dấu `:` bằng `-`. Ví dụ `/#/man-hinh/40-6328` hiển thị trạng thái danh sách tài sản không có kết quả. File `src/screen-manifest.json` đối chiếu đầy đủ ID, tên và kích thước với thiết kế.

## Tương tác và dữ liệu

- Điều hướng giữa các bước tạo phiếu, xử lý, phê duyệt và bàn giao.
- Ô nhập, danh sách chọn, tìm kiếm và lọc bảng; xác thực trường bắt buộc.
- Lưu nháp, lưu thông tin biểu mẫu và nhật ký thao tác trên `localStorage` của trình duyệt.
- Chọn tệp đính kèm và kiểm tra giới hạn 20 MB; tệp chỉ nằm trong phiên hiện tại, chưa tải lên máy chủ.
- Hộp thoại xác nhận, từ chối, thông báo và menu thao tác; xuất dữ liệu dạng CSV/Word đơn giản và mở hộp thoại in của trình duyệt. Có thể chọn “Save as PDF” trong hộp thoại in.

Đây là **frontend với dữ liệu mẫu**, chưa kết nối API, đăng nhập, phân quyền hay ký điện tử thực. Bước xác nhận mật khẩu mô phỏng thao tác giao diện; mật khẩu không được lưu vào `localStorage`. Dữ liệu danh sách ban đầu lấy từ Figma; các bản ghi vừa tạo được lưu cục bộ. Các trạng thái lỗi, quyền xem và lỗi máy in là màn hình mẫu để xem xét thiết kế.

Thanh điều hướng chuyển thành menu mở/đóng trên màn hình hẹp. Danh sách và chi tiết yêu cầu cấp phát tự sắp xếp lại các bộ lọc, thẻ và nút theo chiều rộng thiết bị; bảng dữ liệu có vùng cuộn ngang riêng. Các màn hình Figma còn lại giữ bố cục gốc 1280 px, tự thu nhỏ đến mức vẫn đọc được và cho cuộn ngang trên điện thoại. Hộp thoại co theo chiều rộng thiết bị. Hiệu ứng hover và chuyển màn hình tôn trọng thiết lập giảm chuyển động của hệ điều hành.

## Cấu trúc

```text
src/screens/              Màn hình React, CSS class thông thường
src/design.css           CSS trình bày được chuyển từ thiết kế
src/design-runtime.jsx   Ô nhập, lựa chọn và thao tác dùng chung
src/main.jsx             Điều hướng, hộp thoại và tích hợp tương tác
src/prototype-nav.jsx    Sidebar chung và chỉ dẫn bước nghiệp vụ
src/workflows.mjs        Quy tắc điều hướng, lọc và xác thực
src/storage.mjs          Dữ liệu cục bộ
public/assets/           1.713 ảnh/SVG xuất từ Figma
tests/                   Kiểm thử render, tương tác và quy tắc nghiệp vụ
```

Các file `src/screens` và `src/design.css` đã sẵn sàng chạy và chỉnh sửa, không cần truy cập Figma khi cài đặt hoặc build. Mã xuất ban đầu và công cụ chuyển đổi trong `.design/` và `scripts/` là dữ liệu hỗ trợ của phiên triển khai; không nằm trong bundle ứng dụng. Nếu chỉnh trực tiếp `src/screens`, không chạy lại `design:prepare` vì lệnh đó ghi lại các màn hình từ bản xuất ban đầu.

## Kiểm chứng

- Kiểm thử render tất cả 77 frame Figma và kiểm tra ảnh dùng file cục bộ có nội dung.
- Kiểm tra route, tiếng Việt trong tìm kiếm, bộ lọc, xác thực biểu mẫu, lưu nháp và chuyển phân hệ bằng JSDOM.
- Kiểm tra build production bằng Vite.

Đã xem bản chạy thật ở khung desktop 1440 px và điện thoại 390 px; các bộ kiểm thử tự động xác nhận cấu trúc và luồng chính, không xác nhận độ khớp từng pixel với Figma. Một vài frame trạng thái thành công/hủy trong Figma chỉ chứa header hoặc lớp phủ, với phần `Main`/`Aside` được đặt rời ngoài frame; bản xem frame giữ cấu trúc đó theo nguồn thiết kế.
