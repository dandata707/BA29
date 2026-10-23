**BA ASSET**

**Tài liệu đặc tả yêu cầu phần mềm**

**Phiên bản v1.0**

# Phiên bản tài liệu

|     |     |     |     |
| --- | --- | --- | --- |
| **Ngày phát hành** | **Phiên bản** | **Mô tả** | **Tác giả** |
| 20/10/2026 | 1.0 |     | Nhóm 2 |
|     |     |     |     |
|     |     |     |     |

MỤC LỤC

[1\. Giới thiệu 12](#_Toc243586040)

[1.1 Mục đích 12](#_Toc243586041)

[1.2 Phạm vi 12](#_Toc243586042)

[1.3 Các định nghĩa và từ viết tắt 12](#_Toc243586043)

[1.4 Tài liệu tham khảo 13](#_Toc243586044)

[1.5 Đối tượng sử dụng tài liệu 13](#_Toc243586045)

[1.6 Mô tả tài liệu 13](#_Toc243586046)

[1.7 Quy ước đánh số và mã định danh 13](#_Toc243586047)

[2\. Mô tả tổng quan 14](#_Toc243586048)

[2.1 Đặc điểm phần mềm 14](#_Toc243586049)

[2.2 Chức năng chính 14](#_Toc243586050)

[2.3 Đặc điểm người dùng 15](#_Toc243586051)

[2.4 Ràng buộc và điều kiện phụ thuộc 15](#_Toc243586052)

[2.5 Ràng buộc thiết kế và triển khai 15](#_Toc243586053)

[2.6 Tài liệu người dùng 16](#_Toc243586054)

[3\. Chức năng hệ thống 16](#_Toc243586055)

[3.1 Quy trình nghiệp vụ được tin học hóa 16](#_Toc243586056)

[3.1.1 NV-01 Ghi nhận tài sản mới 16](#_Toc243586057)

[3.1.2 NV-02 Cấp phát tài sản 17](#_Toc243586058)

[3.1.3 NV-03 Thu hồi tài sản 17](#_Toc243586059)

[3.1.4 NV-04 Điều chuyển tài sản 18](#_Toc243586060)

[3.1.5 NV-05 Thanh lý tài sản 19](#_Toc243586061)

[3.1.6 Quy tắc nghiệp vụ 21](#_Toc243586062)

[3.2 Danh sách tác nhân hệ thống 27](#_Toc243586063)

[3.3 Danh sách chức năng và đặc tả chi tiết 29](#_Toc243586064)

[3.3.1 Sơ đồ use case theo nhóm 33](#_Toc243586065)

[3.3.2 CN-01.1 Thêm mới tài sản 36](#_Toc243586066)

[3.3.3 CN-01.2 Sửa thông tin tài sản 53](#_Toc243586067)

[3.3.4 CN-01.3 Xóa tài sản 59](#_Toc243586068)

[3.3.5 CN-01.4 In QR tài sản 71](#_Toc243586069)

[3.3.6 CN-01.5 Xem danh sách tài sản 82](#_Toc243586070)

[3.3.7 CN-01.6 Tìm kiếm và lọc tài sản 93](#_Toc243586071)

[3.3.8 CN-02.1 Lập phiếu yêu cầu cấp phát tài sản 103](#_Toc243586072)

[3.3.9 CN-02.2 Phê duyệt yêu cầu cấp phát tài sản 126](#_Toc243586073)

[3.3.10 CN-02.3 Lập và xác nhận biên bản bàn giao tài sản 143](#_Toc243586074)

[3.3.11 NV-03 Sơ đồ hoạt động dùng chung 170](#_Toc243586075)

[3.3.12 CN-03.1 Tạo biên bản thu hồi 171](#_Toc243586076)

[3.3.13 CN-03.2 Gửi thông báo thu hồi 172](#_Toc243586077)

[3.3.14 CN-03.4 và CN-03.5 Ghi nhận bàn giao, khóa và lưu biên bản 173](#_Toc243586078)

[3.3.15 CN-03.3 Xác nhận đã đọc và đồng ý bàn giao 204](#_Toc243586079)

[3.3.16 CN-03.6 Cập nhật trạng thái tài sản sau thu hồi 204](#_Toc243586080)

[3.3.17 CN-04.1 đến CN-04.6 Điều chuyển tài sản 205](#_Toc243586081)

[3.3.18 CN-05.1 Lập đề nghị thanh lý tài sản 226](#_Toc243586082)

[3.3.19 CN-05.2 Kiểm tra và thẩm định tài sản 231](#_Toc243586083)

[3.3.20 CN-05.3 Lập tờ trình thanh lý tài sản 236](#_Toc243586084)

[3.3.21 CN-05.4 Phê duyệt thanh lý tài sản 240](#_Toc243586085)

[3.3.22 CN-05.5 Thực hiện thanh lý tài sản 245](#_Toc243586086)

[3.3.23 CN-05.6 Cập nhật dữ liệu và lưu hồ sơ thanh lý 247](#_Toc243586087)

[4\. Yêu cầu về thông tin dữ liệu 253](#_Toc243586088)

[4.1 Yêu cầu về đối tượng cần quản lý 253](#_Toc243586089)

[4.2 Liên kết giữa các đối tượng 264](#_Toc243586090)

[5\. Yêu cầu phi chức năng 271](#_Toc243586091)

[5.1 Yêu cầu hiệu năng 271](#_Toc243586092)

[5.1.1 Thời gian phản hồi 271](#_Toc243586093)

[5.1.2 Khả năng chịu tải và xử lý đồng thời 271](#_Toc243586094)

[5.2 An toàn và kiểm soát truy cập 271](#_Toc243586095)

[5.3 Yêu cầu chất lượng 272](#_Toc243586096)

[5.3.1 Tính sẵn sàng và khôi phục 272](#_Toc243586097)

[5.3.2 Tính chính xác 273](#_Toc243586098)

[5.3.3 Tính dễ sử dụng 273](#_Toc243586099)

[5.4 Yêu cầu khác 274](#_Toc243586100)

[PHỤ LỤC A ĐỐI CHIẾU MÃ VÀ TRUY VẾT 275](#_Toc243586101)

[A.1 Đối chiếu mã nghiệp vụ và use case 275](#_Toc243586102)

[A.2 Đối chiếu mã sơ đồ hoạt động 276](#_Toc243586103)

[A.3 Danh mục và đối chiếu mã màn hình 277](#_Toc243586104)

[A.4 Truy vết chức năng và giao diện 279](#_Toc243586105)

[A.5 Đối chiếu quy tắc 280](#_Toc243586106)

# DANH MỤC HÌNH ẢNH

[Hình 1. NV-01 – Sơ đồ use case ghi nhận tài sản mới](#fig1) 33

[Hình 2. NV-03 – Sơ đồ use case thu hồi tài sản](#fig2) 34

[Hình 3. NV-04 – Sơ đồ use case điều chuyển tài sản](#fig3) 35

[Hình 4. NV-05 – Sơ đồ use case thanh lý tài sản](#fig4) 36

[Hình 5. AD-01.1 – Thêm mới tài sản](#fig5) 39

[Hình 6. MH-01.01 – Thêm mới tài sản](#fig6) 40

[Hình 7. MH-01.02 – Lỗi thêm mới tài sản](#fig7) 44

[Hình 8. MH-01.03 – Thêm mới tài sản thành công](#fig8) 48

[Hình 9. MH-01.04 – Xác nhận hủy thêm mới tài sản](#fig9) 51

[Hình 10. AD-01.2 – Sửa thông tin tài sản](#fig10) 55

[Hình 11. MH-01.05 – Sửa thông tin tài sản](#fig11) 56

[Hình 12. AD-01.3 – Xóa tài sản](#fig12) 62

[Hình 13. MH-01.06 – Xóa tài sản](#fig13) 63

[Hình 14. MH-01.07 – Xóa tài sản đã nhập lý do](#fig14) 65

[Hình 15. MH-01.08 – Xóa tài sản lỗi thiếu lý do](#fig15) 67

[Hình 16. MH-01.09 – Không thể xóa tài sản](#fig16) 69

[Hình 17. AD-01.4 – In QR tài sản](#fig17) 73

[Hình 18. MH-01.10 – In QR tài sản](#fig18) 74

[Hình 19. MH-01.11 – Xuất PDF tem QR thành công](#fig19) 77

[Hình 20. MH-01.12 – In QR lỗi máy in](#fig20) 80

[Hình 21. AD-01.5 – Xem danh sách tài sản](#fig21) 85

[Hình 22. MH-01.13 – Danh sách tài sản](#fig22) 86

[Hình 23. MH-01.14 – Danh sách tài sản trống](#fig23) 88

[Hình 24. MH-01.15 – Lỗi tải danh sách tài sản](#fig24) 90

[Hình 25. AD-01.6 – Tìm kiếm và lọc tài sản](#fig25) 95

[Hình 26. MH-01.16 – Tìm kiếm và lọc tài sản](#fig26) 96

[Hình 27. MH-01.17 – Tìm kiếm không có kết quả](#fig27) 99

[Hình 28. MH-01.18 – Tìm kiếm lỗi khoảng ngày](#fig28) 101

[Hình 29. AD-02.1 – Lập phiếu yêu cầu cấp phát](#fig29) 107

[Hình 30. MH-02.01 – Danh sách phiếu yêu cầu của nhân viên](#fig30) 107

[Hình 31. MH-02.02 – Menu thao tác trên phiếu yêu cầu](#fig31) 114

[Hình 32. MH-02.03 – Tạo mới phiếu yêu cầu cấp phát](#fig32) 116

[Hình 33. MH-02.04 – Xem lý do từ chối phiếu yêu cầu](#fig33) 123

[Hình 34. AD-02.2 – Phê duyệt yêu cầu cấp phát](#fig34) 128

[Hình 35. MH-02.05 – Danh sách yêu cầu dành cho người phê duyệt](#fig35) 129

[Hình 36. MH-02.06 – Chi tiết phiếu yêu cầu cấp phát](#fig36) 136

[Hình 37. MH-02.07 – Nhập lý do từ chối phiếu yêu cầu](#fig37) 142

[Hình 38. AD-02.3 – Lập và xác nhận biên bản bàn giao](#fig38) 147

[Hình 39. MH-02.08 – Tạo biên bản bàn giao tài sản](#fig39) 147

[Hình 40. MH-02.09 – Xác nhận ký biên bản bằng mật khẩu](#fig40) 154

[Hình 41. MH-02.10 – Danh sách biên bản bàn giao](#fig41) 158

[Hình 42. MH-02.11 – Thông báo](#fig42) 166

[Hình 43. AD-03.1 – Tạo biên bản, gửi thông báo và xác nhận lịch bàn giao](#fig43) 170

[Hình 44. AD-03.2 – Ghi nhận bàn giao, hoàn tất và cập nhật tài sản](#fig44) 171

[Hình 45. MH-03.01 – Danh sách biên bản thu hồi](#fig45) 177

[Hình 46. MH-03.02 – Tạo biên bản chưa chọn nhân viên](#fig46) 179

[Hình 47. MH-03.03 – Tạo biên bản đã chọn nhân viên](#fig47) 181

[Hình 48. MH-03.04 – Chi tiết biên bản ở trạng thái Nháp](#fig48) 184

[Hình 49. MH-03.05 – Chi tiết biên bản ở trạng thái Chờ bàn giao](#fig49) 186

[Hình 50. MH-03.06 – Đang bàn giao chưa quét tài sản](#fig50) 189

[Hình 51. MH-03.07 – Đang bàn giao ghi tình trạng và báo mất](#fig51) 191

[Hình 52. MH-03.08 – Đang bàn giao chọn trạng thái hoạt động và hoàn tất](#fig52) 195

[Hình 53. MH-03.09 – Chi tiết biên bản đã hoàn tất](#fig53) 199

[Hình 54. MH-03.10 – Xác nhận biên bản thu hồi](#fig54) 202

[Hình 55. AD-04.1 – Điều chuyển tài sản toàn quy trình](#fig55) 211

[Hình 56. MH-04.02 – Tạo và gửi yêu cầu điều chuyển](#fig56) 212

[Hình 57. MH-04.01 – Danh sách và theo dõi yêu cầu điều chuyển](#fig57) 214

[Hình 58. MH-04.03 – Chi tiết và xử lý yêu cầu điều chuyển](#fig58) 216

[Hình 59. MH-04.04 – Lập biên bản bàn giao điều chuyển](#fig59) 219

[Hình 60. MH-04.05 – Ghi nhận xác nhận bàn giao và tiếp nhận](#fig60) 222

[Hình 61. AD-05.1 – Lập đề nghị thanh lý](#fig61) 228

[Hình 62. MH-05.01 – Lập đề nghị thanh lý tài sản](#fig62) 229

[Hình 63. AD-05.2 – Kiểm tra và thẩm định tài sản](#fig63) 233

[Hình 64. MH-05.02 – Kiểm tra và thẩm định tài sản](#fig64) 234

[Hình 65. MH-05.03 – Lập tờ trình đề nghị thanh lý](#fig65) 238

[Hình 66. AD-05.3 – Lập tờ trình và phê duyệt thanh lý](#fig66) 242

[Hình 67. MH-05.04 – Phê duyệt thanh lý tài sản](#fig67) 243

[Hình 68. MH-05.05 – Thực hiện thanh lý tài sản](#fig68) 246

[Hình 69. AD-05.4 – Thực hiện thanh lý và lưu hồ sơ](#fig69) 251

[Hình 70. MH-05.06 – Cập nhật tài sản thanh lý và lưu hồ sơ](#fig70) 251

# DANH MỤC BẢNG

[Bảng 1. Thuật ngữ và từ viết tắt](#tbl1) 12

[Bảng 2. Tài liệu tham khảo](#tbl2) 13

[Bảng 3. Đối tượng sử dụng tài liệu](#tbl3) 13

[Bảng 4. Quy ước mã và đánh số](#tbl4) 14

[Bảng 5. Tóm tắt các nhóm chức năng](#tbl5) 14

[Bảng 6. Đặc điểm người dùng](#tbl6) 15

[Bảng 7. Ràng buộc và điều kiện phụ thuộc](#tbl7) 15

[Bảng 8. Quy trình tin học hóa NV-01 – Ghi nhận tài sản mới](#tbl8) 16

[Bảng 9. Quy trình tin học hóa NV-02 – Cấp phát tài sản](#tbl9) 17

[Bảng 10. Quy trình tin học hóa NV-03 – Thu hồi tài sản](#tbl10) 18

[Bảng 11. Quy trình tin học hóa NV-04 – Điều chuyển tài sản](#tbl11) 19

[Bảng 12. Quy trình tin học hóa NV-05 – Thanh lý tài sản](#tbl12) 20

[Bảng 13. Quy tắc nghiệp vụ NV-01 – Ghi nhận tài sản mới](#tbl13) 22

[Bảng 14. Quy tắc nghiệp vụ NV-02 – Cấp phát tài sản](#tbl14) 24

[Bảng 15. Quy tắc nghiệp vụ NV-03 – Thu hồi tài sản](#tbl15) 24

[Bảng 16. Quy tắc nghiệp vụ NV-04 – Điều chuyển tài sản](#tbl16) 25

[Bảng 17. Quy tắc nghiệp vụ NV-05 – Thanh lý tài sản](#tbl17) 27

[Bảng 18. Vòng đời trạng thái biên bản thu hồi](#tbl18) 27

[Bảng 19. Tác nhân và phạm vi quyền NV-01 – Ghi nhận tài sản mới](#tbl19) 27

[Bảng 20. Tác nhân và phạm vi quyền NV-02 – Cấp phát tài sản](#tbl20) 28

[Bảng 21. Tác nhân và phạm vi quyền NV-03 – Thu hồi tài sản](#tbl21) 28

[Bảng 22. Tác nhân và phạm vi quyền NV-04 – Điều chuyển tài sản](#tbl22) 28

[Bảng 23. Tác nhân và phạm vi quyền NV-05 – Thanh lý tài sản](#tbl23) 29

[Bảng 24. Danh sách chức năng NV-01](#tbl24) 29

[Bảng 25. Danh sách chức năng NV-02](#tbl25) 29

[Bảng 26. Chức năng con NV-02](#tbl26) 30

[Bảng 27. Danh sách chức năng NV-03](#tbl27) 31

[Bảng 28. Danh sách chức năng NV-04](#tbl28) 31

[Bảng 29. Danh sách chức năng NV-05](#tbl29) 32

[Bảng 30. Chức năng con NV-05](#tbl30) 33

[Bảng 31. Đặc tả UC-01.1 – Thêm mới tài sản](#tbl31) 38

[Bảng 32. Mô tả thành phần màn hình MH-01.01](#tbl32) 43

[Bảng 33. Quy tắc màn hình MH-01.01](#tbl33) 43

[Bảng 34. Mô tả thành phần màn hình MH-01.02](#tbl34) 47

[Bảng 35. Quy tắc màn hình MH-01.02](#tbl35) 47

[Bảng 36. Mô tả thành phần màn hình MH-01.03](#tbl36) 50

[Bảng 37. Quy tắc màn hình MH-01.03](#tbl37) 50

[Bảng 38. Mô tả thành phần màn hình MH-01.04](#tbl38) 52

[Bảng 39. Quy tắc màn hình MH-01.04](#tbl39) 53

[Bảng 40. Đặc tả UC-01.2 – Sửa thông tin tài sản](#tbl40) 55

[Bảng 41. Mô tả thành phần màn hình MH-01.05](#tbl41) 59

[Bảng 42. Quy tắc màn hình MH-01.05](#tbl42) 59

[Bảng 43. Đặc tả UC-01.3 – Xóa tài sản](#tbl43) 61

[Bảng 44. Mô tả thành phần màn hình MH-01.06](#tbl44) 64

[Bảng 45. Quy tắc màn hình MH-01.06](#tbl45) 65

[Bảng 46. Mô tả thành phần màn hình MH-01.07](#tbl46) 66

[Bảng 47. Quy tắc màn hình MH-01.07](#tbl47) 67

[Bảng 48. Mô tả thành phần màn hình MH-01.08](#tbl48) 68

[Bảng 49. Quy tắc màn hình MH-01.08](#tbl49) 69

[Bảng 50. Mô tả thành phần màn hình MH-01.09](#tbl50) 70

[Bảng 51. Quy tắc màn hình MH-01.09](#tbl51) 71

[Bảng 52. Đặc tả UC-01.4 – In QR tài sản](#tbl52) 73

[Bảng 53. Mô tả thành phần màn hình MH-01.10](#tbl53) 75

[Bảng 54. Quy tắc màn hình MH-01.10](#tbl54) 76

[Bảng 55. Mô tả thành phần màn hình MH-01.11](#tbl55) 79

[Bảng 56. Quy tắc màn hình MH-01.11](#tbl56) 79

[Bảng 57. Mô tả thành phần màn hình MH-01.12](#tbl57) 81

[Bảng 58. Quy tắc màn hình MH-01.12](#tbl58) 82

[Bảng 59. Đặc tả UC-01.5 – Xem danh sách tài sản](#tbl59) 84

[Bảng 60. Mô tả thành phần màn hình MH-01.13](#tbl60) 87

[Bảng 61. Quy tắc màn hình MH-01.13](#tbl61) 88

[Bảng 62. Mô tả thành phần màn hình MH-01.14](#tbl62) 89

[Bảng 63. Quy tắc màn hình MH-01.14](#tbl63) 90

[Bảng 64. Mô tả thành phần màn hình MH-01.15](#tbl64) 92

[Bảng 65. Quy tắc màn hình MH-01.15](#tbl65) 93

[Bảng 66. Đặc tả UC-01.6 – Tìm kiếm và lọc tài sản](#tbl66) 94

[Bảng 67. Mô tả thành phần màn hình MH-01.16](#tbl67) 98

[Bảng 68. Quy tắc màn hình MH-01.16](#tbl68) 98

[Bảng 69. Mô tả thành phần màn hình MH-01.17](#tbl69) 100

[Bảng 70. Quy tắc màn hình MH-01.17](#tbl70) 101

[Bảng 71. Mô tả thành phần màn hình MH-01.18](#tbl71) 103

[Bảng 72. Quy tắc màn hình MH-01.18](#tbl72) 103

[Bảng 73. Đặc tả UC-02.1 – Lập phiếu yêu cầu cấp phát tài sản](#tbl73) 105

[Bảng 74. Mô tả thành phần màn hình MH-02.01](#tbl74) 114

[Bảng 75. Quy tắc màn hình MH-02.01](#tbl75) 114

[Bảng 76. Mô tả thành phần màn hình MH-02.02](#tbl76) 115

[Bảng 77. Mô tả thành phần màn hình MH-02.03](#tbl77) 122

[Bảng 78. Quy tắc màn hình MH-02.03](#tbl78) 123

[Bảng 79. Mô tả thành phần màn hình MH-02.04](#tbl79) 125

[Bảng 80. Quy tắc màn hình MH-02.04](#tbl80) 126

[Bảng 81. Đặc tả UC-02.2 – Phê duyệt yêu cầu cấp phát tài sản](#tbl81) 127

[Bảng 82. Mô tả thành phần màn hình MH-02.05](#tbl82) 134

[Bảng 83. Quy tắc màn hình MH-02.05](#tbl83) 135

[Bảng 84. Mô tả thành phần màn hình MH-02.06](#tbl84) 141

[Bảng 85. Quy tắc màn hình MH-02.06](#tbl85) 141

[Bảng 86. Mô tả thành phần màn hình MH-02.07](#tbl86) 143

[Bảng 87. Quy tắc màn hình MH-02.07](#tbl87) 143

[Bảng 88. Đặc tả UC-02.3 – Lập và xác nhận biên bản bàn giao tài sản](#tbl88) 145

[Bảng 89. Mô tả thành phần màn hình MH-02.08](#tbl89) 153

[Bảng 90. Quy tắc màn hình MH-02.08](#tbl90) 154

[Bảng 91. Mô tả thành phần màn hình MH-02.09](#tbl91) 157

[Bảng 92. Quy tắc màn hình MH-02.09](#tbl92) 158

[Bảng 93. Mô tả thành phần màn hình MH-02.10](#tbl93) 164

[Bảng 94. Quy tắc màn hình MH-02.10](#tbl94) 165

[Bảng 95. Mô tả thành phần màn hình MH-02.11](#tbl95) 168

[Bảng 96. Quy tắc màn hình MH-02.11](#tbl96) 169

[Bảng 97. Đặc tả UC-03.1 – Tạo biên bản thu hồi](#tbl97) 172

[Bảng 98. Đặc tả UC-03.2 – Gửi thông báo thu hồi](#tbl98) 173

[Bảng 99. Đặc tả UC-03.4 và UC-03.5 – Ghi nhận bàn giao tài sản](#tbl99) 175

[Bảng 100. Danh sách màn hình NV-03](#tbl100) 175

[Bảng 101. Thành phần giao diện dùng chung NV-03](#tbl101) 176

[Bảng 102. Mô tả thành phần màn hình MH-03.01](#tbl102) 179

[Bảng 103. Mô tả thành phần màn hình MH-03.02](#tbl103) 181

[Bảng 104. Mô tả thành phần màn hình MH-03.03](#tbl104) 183

[Bảng 105. Mô tả thành phần màn hình MH-03.04](#tbl105) 186

[Bảng 106. Mô tả thành phần màn hình MH-03.05](#tbl106) 188

[Bảng 107. Mô tả thành phần màn hình MH-03.06](#tbl107) 191

[Bảng 108. Mô tả thành phần màn hình MH-03.07](#tbl108) 194

[Bảng 109. Mô tả thành phần màn hình MH-03.08](#tbl109) 198

[Bảng 110. Mô tả thành phần màn hình MH-03.09](#tbl110) 201

[Bảng 111. Mô tả thành phần màn hình MH-03.10](#tbl111) 204

[Bảng 112. Mô tả UC-03.3](#tbl112) 204

[Bảng 113. Mô tả UC-03.6](#tbl113) 205

[Bảng 114. Đặc tả UC-04.1 – Điều chuyển tài sản](#tbl114) 205

[Bảng 115. Luồng chính UC-04.1](#tbl115) 206

[Bảng 116. Luồng thay thế UC-04.1](#tbl116) 207

[Bảng 117. Luồng ngoại lệ UC-04.1](#tbl117) 208

[Bảng 118. Quy tắc áp dụng UC-04.1](#tbl118) 208

[Bảng 119. Tham chiếu AD và màn hình UC-04.1](#tbl119) 209

[Bảng 120. Thành phần giao diện dùng chung NV-04](#tbl120) 211

[Bảng 121. Mô tả thành phần màn hình MH-04.02](#tbl121) 213

[Bảng 122. Quy tắc màn hình MH-04.02](#tbl122) 214

[Bảng 123. Mô tả thành phần màn hình MH-04.01](#tbl123) 215

[Bảng 124. Quy tắc màn hình MH-04.01](#tbl124) 215

[Bảng 125. Mô tả thành phần màn hình MH-04.03](#tbl125) 218

[Bảng 126. Quy tắc màn hình MH-04.03](#tbl126) 218

[Bảng 127. Mô tả thành phần màn hình MH-04.04](#tbl127) 221

[Bảng 128. Quy tắc màn hình MH-04.04](#tbl128) 222

[Bảng 129. Mô tả thành phần màn hình MH-04.05](#tbl129) 224

[Bảng 130. Quy tắc màn hình MH-04.05](#tbl130) 225

[Bảng 131. Quy tắc giao diện dùng chung NV-04](#tbl131) 225

[Bảng 132. Đặc tả UC-05.1 – Lập đề nghị thanh lý tài sản](#tbl132) 227

[Bảng 133. Mô tả thành phần màn hình MH-05.01](#tbl133) 230

[Bảng 134. Quy tắc màn hình MH-05.01](#tbl134) 230

[Bảng 135. Đặc tả UC-05.2 – Kiểm tra và thẩm định tài sản](#tbl135) 232

[Bảng 136. Mô tả thành phần màn hình MH-05.02](#tbl136) 236

[Bảng 137. Quy tắc màn hình MH-05.02](#tbl137) 236

[Bảng 138. Đặc tả UC-05.3 – Lập tờ trình thanh lý tài sản](#tbl138) 237

[Bảng 139. Mô tả thành phần màn hình MH-05.03](#tbl139) 239

[Bảng 140. Quy tắc màn hình MH-05.03](#tbl140) 240

[Bảng 141. Đặc tả UC-05.4 – Phê duyệt thanh lý tài sản](#tbl141) 241

[Bảng 142. Mô tả thành phần màn hình MH-05.04](#tbl142) 244

[Bảng 143. Quy tắc màn hình MH-05.04](#tbl143) 244

[Bảng 144. Đặc tả UC-05.5 – Thực hiện thanh lý tài sản](#tbl144) 245

[Bảng 145. Mô tả thành phần màn hình MH-05.05](#tbl145) 247

[Bảng 146. Quy tắc màn hình MH-05.05](#tbl146) 247

[Bảng 147. Đặc tả UC-05.6 – Cập nhật dữ liệu và lưu hồ sơ thanh lý](#tbl147) 248

[Bảng 148. Mô tả thành phần màn hình MH-05.06](#tbl148) 251

[Bảng 149. Quy tắc màn hình MH-05.06](#tbl149) 252

[Bảng 150: Bảng danh sách đối tượng dữ liệu cần quản lý](#tbl150) 264

[Bảng 151: Bảng mối liên hệ giữa các đối tượng dữ liệu](#tbl151) 269

[Bảng 152. Yêu cầu thời gian phản hồi](#tbl152) 271

[Bảng 153. Yêu cầu tải và xử lý đồng thời](#tbl153) 271

[Bảng 154. Yêu cầu kiểm soát truy cập và toàn vẹn](#tbl154) 272

[Bảng 155. Yêu cầu ổn định và khôi phục](#tbl155) 272

[Bảng 156. Thời gian xử lý sự cố theo URD](#tbl156) 272

[Bảng 157. Yêu cầu chính xác và nhất quán](#tbl157) 273

[Bảng 158. Yêu cầu sử dụng và trình bày](#tbl158) 273

[Bảng 159. Yêu cầu tương thích](#tbl159) 274

[Bảng 160. Đối chiếu mã chức năng và UC](#tbl160) 276

[Bảng 161. Đối chiếu mã AD](#tbl161) 277

[Bảng 162. Đối chiếu mã màn hình và popup](#tbl162) 279

[Bảng 163. Ma trận truy vết UC và giao diện](#tbl163) 280

[Bảng 164. Đối chiếu mã quy tắc nghiệp vụ và quy tắc chung](#tbl164) 281

[Bảng 165. Đối chiếu dải mã quy tắc màn hình](#tbl165) 282

# 1\. Giới thiệu

## 1.1 Mục đích

Tài liệu đặc tả yêu cầu phần mềm BA Asset xác định chức năng, quy tắc nghiệp vụ, giao diện và yêu cầu chất lượng cho năm phân hệ quản lý tài sản. Tài liệu là căn cứ để phân tích, thiết kế, phát triển, kiểm thử và thống nhất kết quả bàn giao.

## 1.2 Phạm vi

Phạm vi đặc tả gồm ghi nhận tài sản mới, cấp phát, thu hồi, điều chuyển và thanh lý tài sản trong doanh nghiệp vừa và nhỏ. Các quy trình được mô tả từ thao tác của người dùng đến phản hồi của hệ thống, trạng thái xử lý và kết quả ghi nhận.

Các nghiệp vụ khấu hao, kiểm kê, bảo trì, sửa chữa, báo cáo tổng hợp và quản trị danh mục độc lập không được đặc tả chi tiết trong phạm vi năm phân hệ này. Các trường dữ liệu và thao tác tra cứu liên quan vẫn được mô tả tại giao diện sử dụng chúng.

## 1.3 Các định nghĩa và từ viết tắt

| **Thuật ngữ** | **Giải thích** |
| --- | --- |
| SRS | Tài liệu đặc tả yêu cầu phần mềm |
| URD | Tài liệu yêu cầu người dùng |
| NV QLTS / NVQLTS | Nhân viên quản lý tài sản |
| HCNS | Hành chính – Nhân sự; vai trò xử lý điều chuyển theo phân quyền |
| BPSDTS | Bộ phận sử dụng tài sản |
| KTTS / TCKT | Kế toán tài sản / Tài chính kế toán |
| TSCĐ / CCDC | Tài sản cố định / Công cụ dụng cụ |
| UC / AD | Use case / Sơ đồ hoạt động |
| MH / I / O / I/O | Màn hình / Dữ liệu hoặc thao tác đầu vào / Thông tin đầu ra / Kết hợp đầu vào và đầu ra |
| QR  | Mã nhận diện dùng để tra cứu và đối chiếu tài sản |
| Hash nội dung | Giá trị băm dùng kiểm tra tính toàn vẹn nội dung biên bản trong quy trình xác nhận cấp phát |

Bảng 1. Thuật ngữ và từ viết tắt

## 1.4 Tài liệu tham khảo

| **Mã** | **Tài liệu** | **Vai trò** |
| --- | --- | --- |
| TL-01 | BA29_URD.docx | Nhu cầu tổng quan, người dùng và yêu cầu chất lượng |

Bảng 2. Tài liệu tham khảo

## 1.5 Đối tượng sử dụng tài liệu

| **Đối tượng** | **Mục đích sử dụng** | **Nội dung trọng tâm** |
| --- | --- | --- |
| Chủ nghiệp vụ và đại diện người dùng | Xác nhận phạm vi, quyền hạn, luồng xử lý và giao diện | Phần 2, 3 và phụ lục B |
| BA và thiết kế giao diện | Phân tích, đối chiếu nghiệp vụ và thiết kế | Phần 3 và phụ lục A |
| Nhóm phát triển | Triển khai chức năng, kiểm soát trạng thái và giao diện | Phần 3, 4 |
| Nhóm kiểm thử | Xây dựng tình huống kiểm thử, đối chiếu quy tắc và tiêu chí chất lượng | Phần 3, 4 và các điểm cần xác nhận |

Bảng 3. Đối tượng sử dụng tài liệu

## 1.6 Mô tả tài liệu

Phần 1 giới thiệu mục đích, phạm vi và quy ước mã. Phần 2 mô tả tổng quan phần mềm, chức năng và đặc điểm người dùng. Phần 3 trình bày quy trình tin học hóa, tác nhân, quy tắc nghiệp vụ, đặc tả UC, sơ đồ hoạt động và giao diện. Phần 4 quy định yêu cầu phi chức năng. Phụ lục A cung cấp bảng đối chiếu mã và truy vết; phụ lục B tập hợp các điểm cần xác nhận giữa các nội dung đặc tả.

## 1.7 Quy ước đánh số và mã định danh

| **Đối tượng** | **Quy ước** | **Ví dụ** |
| --- | --- | --- |
| Đề mục | Đánh số phân cấp, gắn với Heading trong Word | 3; 3.3; 3.3.2; 3.3.2.1 |
| Nhóm nghiệp vụ | NV-gg; gg là số thứ tự nhóm | NV-01 đến NV-05 |
| Chức năng | CN-gg.f; chức năng con dùng CN-gg.f.s | CN-02.1; CN-02.1.1 |
| Use case | UC-gg.u; một UC có thể bao quát nhiều chức năng | UC-04.1 bao quát CN-04.1 đến CN-04.6 |
| Sơ đồ hoạt động | AD-gg.a; một hình có thể mô tả nhiều UC | AD-05.3 dùng cho UC-05.3 và UC-05.4 |
| Màn hình và popup | MH-gg.nn; duy nhất trong nhóm nghiệp vụ | MH-02.09 |
| Quy tắc nghiệp vụ | BR-gg.nn | BR-01.01 |
| Quy tắc màn hình | QT-gg.nn; tăng liên tục trong nhóm | QT-02.01 |
| Yêu cầu phi chức năng | NFR-nn; đánh số xuyên suốt phần 4 | NFR-01 |
| Hình và bảng | Hai dãy số độc lập, liên tục toàn tài liệu | Hình 1…; Bảng 1… |

Bảng 4. Quy ước mã và đánh số

# 2\. Mô tả tổng quan

## 2.1 Đặc điểm phần mềm

BA Asset là phần mềm quản lý tài sản dành cho doanh nghiệp SME, triển khai dưới dạng website có giao diện thích ứng với thiết bị. Hệ thống tập trung thông tin tài sản, hỗ trợ theo dõi người sử dụng, vị trí, tình trạng và hồ sơ xử lý qua các nghiệp vụ ghi nhận, cấp phát, thu hồi, điều chuyển và thanh lý.

## 2.2 Chức năng chính

| **Mã** | **Nhóm nghiệp vụ** | **Phạm vi chức năng** |
| --- | --- | --- |
| NV-01 | Ghi nhận tài sản mới | Thêm mới tài sản; Sửa thông tin tài sản; Xóa tài sản; In QR tài sản; Xem danh sách tài sản; Tìm kiếm và lọc tài sản |
| NV-02 | Cấp phát tài sản | Lập phiếu yêu cầu cấp phát tài sản; Phê duyệt yêu cầu cấp phát tài sản; Lập và xác nhận biên bản bàn giao tài sản |
| NV-03 | Thu hồi tài sản | Tạo biên bản thu hồi; Gửi thông báo thu hồi; Xác nhận đã đọc và đồng ý bàn giao; Ghi nhận bàn giao tài sản; Khóa, lưu trữ và in biên bản; Cập nhật trạng thái tài sản sau thu hồi |
| NV-04 | Điều chuyển tài sản | Tạo và gửi yêu cầu điều chuyển; Theo dõi yêu cầu điều chuyển; Kiểm tra hồ sơ và điều kiện điều chuyển; Phê duyệt yêu cầu điều chuyển; Lập và xác nhận biên bản bàn giao; Cập nhật sổ sách và lưu hồ sơ |
| NV-05 | Thanh lý tài sản | Lập đề nghị thanh lý tài sản; Kiểm tra và thẩm định tài sản; Lập tờ trình thanh lý tài sản; Phê duyệt thanh lý tài sản; Thực hiện thanh lý tài sản; Cập nhật dữ liệu và lưu hồ sơ thanh lý |

Bảng 5. Tóm tắt các nhóm chức năng

## 2.3 Đặc điểm người dùng

| **Người dùng** | **Đặc điểm sử dụng** | **Yêu cầu đối với hệ thống** |
| --- | --- | --- |
| Nhân viên và người đề nghị | Lập yêu cầu, theo dõi hồ sơ và xác nhận tài sản liên quan tới mình | Phân quyền theo người lập, người nhận và phạm vi hồ sơ |
| Nhân viên nhân sự | Lập yêu cầu cấp phát cho nhân viên mới | Thông tin nhân sự, chức danh và bộ phận phải rõ ràng |
| Nhân viên quản lý tài sản và HCNS | Xử lý nghiệp vụ xuyên suốt, kiểm tra và cập nhật hồ sơ | Danh sách, tìm kiếm, trạng thái và lịch sử xử lý đầy đủ |
| Bộ phận sử dụng tài sản | Đề nghị thanh lý và phối hợp kiểm tra hiện trạng | Chỉ truy cập tài sản và hồ sơ trong phạm vi bộ phận |
| Giám đốc | Xem xét tờ trình và phê duyệt thanh lý | Hiển thị đầy đủ hồ sơ và căn cứ phê duyệt |
| Kế toán tài sản | Phối hợp kiểm tra hiện trạng trong nghiệp vụ thanh lý | Vai trò phối hợp nghiệp vụ; quyền thao tác trực tiếp theo đặc tả phân hệ |

Bảng 6. Đặc điểm người dùng

## 2.4 Ràng buộc và điều kiện phụ thuộc

| **Mã** | **Nội dung** |
| --- | --- |
| RB-01 | Người dùng phải đăng nhập và được phân quyền trước khi thực hiện chức năng tương ứng. |
| RB-02 | Danh mục tài sản, nhân sự, phòng ban, địa điểm và định mức cần có dữ liệu để phục vụ lựa chọn và đối chiếu trên biểu mẫu. |
| RB-03 | Kiểm tra hiện trạng, bàn giao vật lý và bán thanh lý được thực hiện theo quy trình thực tế; hệ thống ghi nhận kết quả và chứng từ. |
| RB-04 | Mỗi tài sản có mã duy nhất; lịch sử biến động và chứng từ liên quan cần được lưu để tra cứu. |
| RB-05 | Chỉ hoàn tất nghiệp vụ khi các điều kiện xác nhận và cập nhật trạng thái của phân hệ tương ứng được đáp ứng. |

Bảng 7. Ràng buộc và điều kiện phụ thuộc

## 2.5 Ràng buộc thiết kế và triển khai

Giao diện sử dụng tiếng Việt, phân chia menu theo nghiệp vụ, hỗ trợ các trình duyệt và thiết bị theo phần 4. Tài sản và chứng từ chỉ được chỉnh sửa trong trạng thái cho phép; trường dữ liệu tự sinh hoặc lấy từ hồ sơ đã xác nhận được hiển thị chỉ đọc theo từng màn hình.

## 2.6 Tài liệu người dùng

Bàn giao tài liệu hướng dẫn theo vai trò dưới dạng PDF hoặc MP4; cung cấp chú thích ngắn cho trường khó hiểu. Người dùng nghiệp vụ được hướng dẫn để thực hiện thành thạo sau hai buổi đào tạo; nhân viên thông thường được cung cấp tài liệu hướng dẫn sử dụng theo URD.

# 3\. Chức năng hệ thống

## 3.1 Quy trình nghiệp vụ được tin học hóa

### 3.1.1 NV-01 Ghi nhận tài sản mới

| **Tên bước được tin học hóa** | **Tác nhân** | **Tên chức năng hỗ trợ** | **Đầu vào** | **Đầu ra** | **Mã UC** |
| --- | --- | --- | --- | --- | --- |
| Tra cứu tài sản hiện có trước khi ghi nhận | Nhân viên QLTS | Xem danh sách; Tìm kiếm/lọc | Mã, tên, số seri, loại và điều kiện lọc | Danh sách kết quả để đối chiếu | UC-01.5, UC-01.6 |
| Ghi nhận tài sản đã tiếp nhận và kiểm tra thực tế | Nhân viên QLTS | Thêm mới tài sản | Thông tin nhận diện, loại, nguồn gốc, ngày nhập, giá trị, tình trạng, chứng từ | Hồ sơ tài sản có mã duy nhất, trạng thái Chưa cấp phát | UC-01.1 |
| Tạo tem nhận diện để gắn lên tài sản | Nhân viên QLTS | In QR tài sản | Tài sản đã lưu, mã tài sản | Mã QR và mẫu tem phục vụ in | UC-01.4 |
| Điều chỉnh thông tin ghi nhận sai | Nhân viên QLTS | Sửa thông tin tài sản | Tài sản được chọn và thông tin cần sửa | Hồ sơ cập nhật và lịch sử thay đổi | UC-01.2 |
| Loại bỏ hồ sơ tài sản ghi nhận nhầm | Nhân viên QLTS | Xóa tài sản | Tài sản được chọn, lý do xóa | Hồ sơ được đánh dấu đã xóa và ghi nhật ký | UC-01.3 |
| Theo dõi, tra cứu hồ sơ tài sản | Nhân viên QLTS | Xem danh sách; Tìm kiếm/lọc | Danh sách tài sản, từ khóa và bộ lọc | Danh sách tài sản phù hợp với tiêu chí | UC-01.5, UC-01.6 |

Bảng 8. Quy trình tin học hóa NV-01 – Ghi nhận tài sản mới

### 3.1.2 NV-02 Cấp phát tài sản

| **Tên bước được tin học hóa** | **Tác nhân** | **Tên chức năng hỗ trợ** | **Đầu vào** | **Đầu ra** | **Mã UC** |
| --- | --- | --- | --- | --- | --- |
| Tạo phiếu yêu cầu cấp phát tài sản | Nhân viên | Tạo phiếu đề nghị cấp phát Lưu nháp, sửa, hủy phiếu In phiếu | Nhu cầu sử dụng tài sản (loại tài sản, số lượng, mục đích); với nhân sự mới: họ tên, bộ phận, vị trí, ngày bắt đầu | Phiếu đề nghị ở trạng thái "Đã tiếp nhận"; thông báo gửi tới nhân viên QLTS | UC-02.1 |
| Kiểm tra yêu cầu cấp phát tài sản | Nhân viên QLTS | Phê duyệt yêu cầu cấp phát | Phiếu đề nghị, định mức cấp phát | Phiếu "Đã duyệt"; hoặc "Từ chối" kèm lý do khi không có tài sản phù hợp | UC-02.2 |
| Lập biên bản bàn giao tài sản | Nhân viên QLTS | Tạo biên bản bàn giao tài sản Sửa biên bản bàn giao tài sản Lưu nháp biên bản bàn giao tài sản | Phiếu đã duyệt, tài sản và phụ kiện đi kèm | Biên bản bàn giao (chưa xác nhận) | UC-02.3 |
| Ký biên bản bàn giao | Nhân viên QLTS; Nhân viên nhận tài sản | Xác nhận bàn giao, in biên bản | Biên bản bàn giao; kết quả kiểm tra tài sản của bên nhận | Biên bản đã xác nhận; phiếu chuyển "Đã bàn giao" | UC-02.3 |

Bảng 9. Quy trình tin học hóa NV-02 – Cấp phát tài sản

### 3.1.3 NV-03 Thu hồi tài sản

| **Mã UC** | **Tên bước** | **Tác nhân** | **Đầu vào** | **Đầu ra** |
| --- | --- | --- | --- | --- |
| UC-03.1 | B1. Tạo biên bản thu hồi | NVQLTS | Nhân viên hoặc bộ phận cần thu hồi, lý do, lịch bàn giao | Biên bản thu hồi (Nháp) kèm danh sách tài sản |
| UC-03.2 | B2. Gửi thông báo | NVQLTS, Nhân viên có tài sản cần thu hồi | Biên bản Nháp | Thông báo đến nhân viên; biên bản “Chờ bàn giao” |
| UC-03.3 | B3. Xác nhận đã đọc và đồng ý bàn giao | Nhân viên có tài sản cần thu hồi | Dữ liệu, mẫu biên bản | Biên bản điện tử; xác nhận biên bản |
| UC-03.4 | B4. Ghi nhận bàn giao tài sản | NVQLTS, Nhân viên có tài sản cần thu hồi | Tài sản thực tế, mã QR, phụ kiện | Tình trạng tài sản, phụ kiện, biên bản “Đang bàn giao”, “Hoàn tất” |
| UC-03.5 | B5. Khóa, lưu trữ, in biên bản | NVQLTS | “Hoàn tất” | PDF/Word |
| UC-03.6 | B6. Hệ thống tự động cập nhật trạng thái tài sản | Hệ thống | Biên bản thu hồi hoàn thành | Trạng thái tài sản “Đã thu hồi” |

Bảng 10. Quy trình tin học hóa NV-03 – Thu hồi tài sản

### 3.1.4 NV-04 Điều chuyển tài sản

| **Tên bước được tin học hóa** | **Tác nhân** | **Tên chức năng hỗ trợ** | **Đầu vào** | **Đầu ra** |
| --- | --- | --- | --- | --- |
| 1\. Lập và gửi yêu cầu điều chuyển | Người đề nghị | Tạo và gửi yêu cầu | Mã tài sản, lý do điều chuyển, vị trí nhận, người dự kiến tiếp nhận | Hiển thị tên tài sản và vị trí hiện tại theo mã tài sản; yêu cầu được lưu, tạo mã yêu cầu, chuyển sang trạng thái “Chờ tiếp nhận” |
| 2\. Theo dõi yêu cầu | Người đề nghị | Theo dõi yêu cầu | Mã yêu cầu hoặc điều kiện tìm kiếm | Danh sách yêu cầu, trạng thái và kết quả xử lý |
| 3\. Tiếp nhận, kiểm tra hồ sơ và điều kiện điều chuyển | HCNS | Kiểm tra hồ sơ và điều kiện điều chuyển | Thông tin yêu cầu, hồ sơ đính kèm, thông tin tài sản đối chiếu với sổ theo dõi | Kết quả kiểm tra; trạng thái xử lý (đạt, “Chờ bổ sung” hoặc “Từ chối”); lý do bổ sung hoặc từ chối nếu có |
| 4\. Phê duyệt yêu cầu | HCNS | Phê duyệt yêu cầu | Yêu cầu đã kiểm tra đạt, kết quả đánh giá điều kiện điều chuyển | Kết quả phê duyệt, người duyệt, thời gian duyệt, trạng thái “Đã phê duyệt” |
| 5\. Lập biên bản bàn giao | HCNS | Lập biên bản bàn giao | Yêu cầu đã phê duyệt, thông tin tài sản, bên giao, bên nhận, thời gian và địa điểm bàn giao | Biên bản bàn giao được lập và lưu, trạng thái “Chờ xác nhận bàn giao” |
| 6\. Xác nhận bàn giao và tiếp nhận | Bên giao, Bên nhận (xác nhận trên biên bản); HCNS ghi nhận | Lập biên bản bàn giao | Biên bản bàn giao, tình trạng thực tế của tài sản và phụ kiện | Kết quả xác nhận bàn giao và tiếp nhận được ghi nhận; sai lệch tình trạng nếu có |
| 7\. Cập nhật thông tin tài sản | HCNS | Cập nhật sổ sách và lưu hồ sơ | Biên bản đã được hai bên xác nhận đầy đủ; vị trí, bộ phận sử dụng và người quản lý mới | Thông tin tài sản được cập nhật |
| 8\. Lưu hồ sơ điều chuyển | HCNS | Cập nhật sổ sách và lưu hồ sơ | Yêu cầu, biên bản bàn giao, kết quả xác nhận, thông tin đã cập nhật | Hồ sơ và lịch sử điều chuyển được lưu trữ; yêu cầu chuyển sang trạng thái “Hoàn tất” |

Bảng 11. Quy trình tin học hóa NV-04 – Điều chuyển tài sản

### 3.1.5 NV-05 Thanh lý tài sản

| **Tên bước được tin học hóa** | **Tác nhân** | **Tên chức năng hỗ trợ** | **Đầu vào** | **Đầu ra** | **Ghi chú** |
| --- | --- | --- | --- | --- | --- |
| Bước 1. Lập đề nghị thanh lý tài sản | BPSDTS | CN-05.1.1, CN-05.1.2 | Thông tin tài sản đang sử dụng; tình trạng, lý do thanh lý | Đề nghị thanh lý tài sản; Danh mục TS đề nghị thanh lý | Tài sản hết hạn sử dụng hoặc chưa hết hạn nhưng hư hỏng, không thể sửa chữa / sửa chữa không hiệu quả |
| Bước 2. Tiếp nhận đề nghị và thẩm định tài sản | NVQLTS, BPSDTS, KTTS | CN-05.2.1, CN-05.2.2 | Đề nghị thanh lý và danh mục tài sản | Đề nghị được tiếp nhận hoặc trả lại BPSDTS. Lịch kiểm tra, Biên bản kiểm tra hiện trạng | Nếu trả lại, NVQLTS ghi nội dung phản hồi hoặc lý do cần bổ sung nếu có. BPSDTS bổ sung và gửi lại trên hệ thống. NVQLTS thông báo thời gian kiểm tra cho BPSDTS và mời TCKT tham gia. Sau khi kiểm tra xong đẩy hồ sơ lên hệ thống |
| Bước 3. Lập tờ trình thanh lý tài sản | NVQLTS | CN-05.3.1, CN-05.3.2 | Đề nghị thanh lý; Biên bản kiểm tra hiện trạng | Tờ trình đề nghị thanh lý tài sản | Chỉ đưa vào tờ trình các TS đủ điều kiện thanh lý. Kết luận đủ/chưa đủ điều kiện theo từng tài sản; hướng xử lý tương ứng |
| Bước 4. Xem xét và phê duyệt thanh lý | Giám đốc | CN-05.4.1, CN-05.4.2, CN-05.4.3 | Tờ trình đã gửi; biên bản kiểm tra; hồ sơ kèm theo | Quyết định thanh lý đã ký hoặc hồ sơ được trả lại để chỉnh sửa | Giám đốc xem hồ sơ trên hệ thống, in và ký văn bản theo quy trình nội bộ. Bản đã ký được tải lên hệ thống. Nếu trả lại, NVQLTS chỉnh sửa và gửi lại. |
| Bước 5: Thực hiện thanh lý tài sản | NVQLTS | CN-05.5.1,12 | Quyết định thanh lý | Hợp đồng mua bán, biên bản bàn giao |     |
| Bước 6. Cập nhật dữ liệu và lưu hồ sơ thanh lý | NVQLTS | CN-05.6.1, CN-05.6.2 | Quyết định, hợp đồng, biên bản bàn giao hàng thanh lý | Hồ sơ thanh lý hoàn tất |     |

Bảng 12. Quy trình tin học hóa NV-05 – Thanh lý tài sản

### 3.1.6 Quy tắc nghiệp vụ

| **Mã** | **Nội dung** | **Áp dụng cho chức năng** |
| --- | --- | --- |
| BR-01.01 | Mỗi tài sản có một mã tài sản duy nhất. Hệ thống sinh mã khi lưu hồ sơ mới theo mã loại tài sản và số thứ tự; mã không được sửa và không được cấp lại cho tài sản khác. | Thêm mới; Sửa; In QR |
| BR-01.02 | Thông tin bắt buộc khi thêm mới gồm: tên tài sản, loại tài sản, nguồn gốc, ngày nhập, giá trị tài sản và tình trạng ban đầu. Số seri, nhà cung cấp, thời hạn bảo hành, đặc điểm, phụ kiện và chứng từ được ghi nhận khi có thông tin phù hợp. | Thêm mới; Sửa |
| BR-01.03 | Số seri nếu được nhập phải không trùng với số seri của tài sản chưa bị xóa; khi sửa tài sản không so trùng với chính bản ghi đang sửa. | Thêm mới; Sửa |
| BR-01.04 | Ngày nhập phải là ngày hợp lệ và không lớn hơn ngày hiện tại; giá trị tài sản phải là số không âm; thời hạn bảo hành nếu nhập phải là ngày hợp lệ. | Thêm mới; Sửa |
| BR-01.05 | Tài sản sau khi ghi nhận được đặt trạng thái Chưa cấp phát. Trạng thái sử dụng được cập nhật qua nghiệp vụ cấp phát, thu hồi hoặc điều chuyển, không chỉnh trực tiếp bằng Sửa thông tin tài sản. | Thêm mới; Sửa; Xóa |
| BR-01.06 | Chỉ Nhân viên QLTS có quyền phù hợp mới được thêm, sửa, xóa và in QR. Các chức năng xem danh sách, tìm kiếm và lọc chỉ trả dữ liệu thuộc phạm vi quyền truy cập. | Tất cả |
| BR-01.07 | Khi sửa, mã tài sản và trạng thái sử dụng được giữ nguyên. Chỉ các trường thông tin thay đổi mới được cập nhật; hệ thống lưu giá trị trước và sau khi sửa, người sửa và thời điểm sửa. | Sửa |
| BR-01.08 | Chỉ được xóa tài sản đang Chưa cấp phát và chưa có giao dịch cấp phát, thu hồi, điều chuyển hoặc nghiệp vụ phụ thuộc. Việc xóa là xóa mềm, yêu cầu xác nhận và lý do; hồ sơ và lịch sử vẫn được lưu. | Xóa |
| BR-01.09 | Chức năng In QR chỉ áp dụng cho tài sản đã ghi nhận và chưa bị xóa. Nội dung mã QR xác định đúng mã tài sản; không tự sửa thông tin hoặc trạng thái tài sản. | In QR |
| BR-01.10 | Danh sách mặc định không hiển thị hồ sơ đã xóa. Thông tin trạng thái trên danh sách phải phản ánh trạng thái hiện tại của tài sản. | Xem danh sách; Tìm kiếm/lọc |
| BR-01.11 | Tìm kiếm theo mã tài sản, tên tài sản hoặc số seri; hỗ trợ lọc theo loại, trạng thái, thời gian ghi nhận. Điều kiện từ ngày không được lớn hơn đến ngày; không có kết quả là kết quả tra cứu hợp lệ. | Tìm kiếm/lọc |
| BR-01.12 | Các thao tác tạo, sửa, xóa và tạo tem đều được lưu vết người thực hiện, thời điểm, tài sản và nội dung thao tác. Thao tác thất bại không được làm xuất hiện hồ sơ tài sản cập nhật dở dang. | Thêm mới; Sửa; Xóa; In QR |
| BR-01.13 | Khi cùng sửa một tài sản, hệ thống không được ghi đè dữ liệu vừa được người khác cập nhật. Một yêu cầu thêm mới bị gửi lặp lại không được tạo trùng bản ghi. | Thêm mới; Sửa; Xóa |
| BR-01.14 | Dữ liệu tài sản được dùng chung cho cấp phát, thu hồi, điều chuyển và khấu hao; các nghiệp vụ sau dùng cùng mã tài sản đã được ghi nhận. | Thêm mới; Sửa; Xóa; Xem danh sách |
| BR-01.15 | Thông báo cho người dùng hiển thị bằng tiếng Việt và chỉ rõ trường hợp lỗi. Ngày hiển thị theo định dạng dd/MM/yyyy và giá trị tiền theo đơn vị VNĐ. | Tất cả |

Bảng 13. Quy tắc nghiệp vụ NV-01 – Ghi nhận tài sản mới

| **Mã** | **Nội dung** | **Áp dụng cho chức năng** |
| --- | --- | --- |
| BR-02.01 | Mỗi phiếu đề nghị có số phiếu duy nhất, hệ thống tự sinh khi tạo mới (định dạng CP-YYYY-NN). Người lập, đơn vị, ngày lập được tự điền từ tài khoản đăng nhập, không sửa được. | UC-02.1 |
| BR-02.02 | Các trường bắt buộc của phiếu đề nghị: loại tài sản, số lượng, mục đích sử dụng. Số lượng là số nguyên dương. Thiếu trường bắt buộc thì không cho gửi phiếu. | UC-02.1 |
| BR-02.03 | Đề nghị cho nhân sự mới do bộ phận Nhân sự lập, bắt buộc có họ tên, bộ phận, vị trí công việc, ngày bắt đầu làm việc của nhân sự mới. | UC-02.1 |
| BR-02.04 | Phiếu đề nghị có các trạng thái: Nháp, Đã tiếp nhận, Đã duyệt, Từ chối, Đã bàn giao, Đã thu hồi. Trạng thái chỉ chuyển theo đúng luồng quy trình, không được chuyển tùy ý. | UC-02.1 |
| BR-02.05 | Chỉ người lập phiếu được sửa, phiếu ở trạng thái Nháp hoặc từ chối; được thu hồi phiếu khi phiếu chưa được nhân viên QLTS xử lý. Sau khi gửi, phiếu bị khóa sửa, trừ khi bị từ chối | UC-02.1 |
| BR-02.06 | Nhân viên chỉ xem được phiếu do mình lập hoặc phiếu cấp cho mình; Nhân sự chỉ xem phiếu do bộ phận Nhân sự lập cấp cho nhân viên mới; nhân viên QLTS xem được toàn bộ phiếu. | UC-02.1 |
| BR-02.07 | Khi xem xét phiếu, hệ thống đối chiếu yêu cầu với định mức cấp phát theo vị trí/bộ phận. Nếu vượt định mức, hệ thống cảnh báo và nhân viên QLTS phải ghi rõ lý do nếu vẫn phê duyệt. | UC-02.2 |
| BR-02.08 | Khi từ chối hoặc yêu cầu bổ sung, bắt buộc nhập lý do/nội dung cần bổ sung. Trường hợp không có tài sản phù hợp thì từ chối kèm lý do và ghi nhận tình trạng xử lý. | UC-02.2 |
| BR-02.09 | Mỗi phiếu chỉ được phê duyệt một lần; quyết định đã đưa ra (Đã duyệt, Từ chối) không được sửa, nếu cần xem xét lại thì người đề nghị lập phiếu mới. | UC-02.2 |
| BR-02.10 | Biên bản bàn giao chỉ được lập từ phiếu ở trạng thái Đã duyệt. Số biên bản tự sinh, duy nhất (định dạng BBBG-YYYY-NNNN). Thông tin chung, bên giao, bên nhận lấy từ phiếu đề nghị và danh mục nhân sự. | UC-02.3 |
| BR-02.11 | Chỉ chọn được tài sản có tình trạng "Sẵn sàng cấp". Một tài sản tại một thời điểm chỉ được bàn giao cho một người; tài sản đã đưa vào biên bản được giữ chỗ, không chọn lại ở biên bản khác. Thứ tự ưu tiên khi cấp tài sản: Đã thu hồi trước đó>nhập kho lâu ngày> nhập kho mới | UC-02.3 |
| BR-02.12 | Thành tiền = số lượng × đơn giá; Tổng giá trị = tổng các thành tiền, hiển thị bằng số và bằng chữ. Hệ thống tự tính, không cho nhập tay. | UC-02.3 |
| BR-02.13 | Khi bên nhận phát hiện sai lệch hoặc hư hỏng, hai bên phải ghi nhận vào biên bản trước khi xác nhận bàn giao. | UC-02.3 |
| BR-02.14 | Chỉ khi hai bên đã xác nhận biên bản, hệ thống mới chuyển phiếu sang Đã bàn giao, chuyển tài sản sang "Đang sử dụng" và tự cập nhật sổ quản lý (người sử dụng, bộ phận, ngày cấp phát, tình trạng, vị trí). Biên bản đã xác nhận không được sửa. | UC-02.3 |
| BR-02.15 | Hệ thống gửi thông báo tới người liên quan mỗi khi phiếu đổi trạng thái; mọi thay đổi được lưu vào lịch sử xử lý của phiếu. | UC-02.3 |

Bảng 14. Quy tắc nghiệp vụ NV-02 – Cấp phát tài sản

| **Mã** | **Nội dung** |
| --- | --- |
| BR-03.01 | Mỗi biên bản thu hồi gắn với một nhân viên và có ít nhất một tài sản. |
| BR-03.02 | Chỉ được chọn tài sản đang ở trạng thái “Đang sử dụng” và đang do chính đối tượng đã chọn giữ. |
| BR-03.03 | Mỗi tài sản chỉ có tối đa một biên bản thu hồi đang xử lý (chưa Hoàn tất hoặc Hủy). |
| BR-03.04 | Số biên bản tự sinh theo dạng TH{số thứ tự 2 chữ số}/{năm} (VD: TH01/2026); không được trùng. |
| BR-03.06 | Bắt buộc bàn giao vật lý, biên bản không thể Hoàn tất nếu chưa có bàn giao, trừ trạng thái “Mất”. |
| BR-03.07 | Mỗi tài sản bắt buộc có tình trạng khi thu hồi và phụ kiện đi kèm nếu có. |
| BR-03.08 | Trạng thái “Mất” bắt buộc nhập lý do, được miễn quét QR. |
| BR-03.09 | NVQLTS chỉ xác nhận biên bản khi biên bản đã ở trạng thái “Đang bàn giao”. |
| BR-03.10 | Quá hạn N ngày (mặc định 03 ngày làm việc) chưa bàn giao hoặc chưa phản hồi thì hệ thống nhắc NVQLTS nhắc nhân viên có tài sản cần thu hồi. |
| BR-03.11 | Biên bản Hoàn tất khi NVQLTS đã xác nhận “Hoàn tất”. |
| BR-03.12 | Khi biên bản Hoàn tất, hệ thống tự động gỡ người dùng, đổi trạng thái tài sản thành “Đã thu hồi”. |
| BR-03.13 | Nhân viên có tài sản cần thu hồi chỉ xem được biên bản của mình; NVQLTS xem tất cả |

Bảng 15. Quy tắc nghiệp vụ NV-03 – Thu hồi tài sản

| **Mã** | **Nội dung** | **Áp dụng cho chức năng** |
| --- | --- | --- |
| BR-04.01 | Yêu cầu phải có đầy đủ thông tin bắt buộc trước khi gửi. | Tạo và gửi yêu cầu |
| BR-04.02 | Thông tin tài sản phải được đối chiếu với sổ theo dõi hoặc nguồn dữ liệu tài sản của tổ chức. | Kiểm tra hồ sơ và điều kiện điều chuyển |
| BR-04.03 | Chỉ HCNS có quyền mới được kiểm tra và xử lý yêu cầu. | Kiểm tra hồ sơ và điều kiện điều chuyển; phê duyệt yêu cầu |
| BR-04.04 | Yêu cầu chỉ được phê duyệt khi hồ sơ đầy đủ và tài sản đáp ứng điều kiện điều chuyển. | Kiểm tra hồ sơ và điều kiện điều chuyển; phê duyệt yêu cầu |
| BR-04.05 | Chỉ yêu cầu đã được phê duyệt mới được chuyển sang bước bàn giao chính thức. | Lập biên bản bàn giao |
| BR-04.06 | Biên bản bàn giao phải ghi nhận thông tin tài sản, bên giao, bên nhận, thời gian và địa điểm bàn giao. | Lập biên bản bàn giao |
| BR-04.07 | Việc hoàn tất điều chuyển yêu cầu có xác nhận bàn giao và tiếp nhận theo quy định của tổ chức. | Quản lý bàn giao |
| BR-04.08 | Chỉ cập nhật vị trí và người quản lý mới sau khi bàn giao, tiếp nhận được xác nhận đầy đủ. | Cập nhật sổ sách và lưu hồ sơ |
| BR-04.09 | Hồ sơ và lịch sử điều chuyển phải được lưu trữ để phục vụ tra cứu. | Cập nhật sổ sách và lưu hồ sơ |
| BR-04.10 | Chỉ chuyển yêu cầu sang trạng thái “Hoàn tất” khi cập nhật thông tin tài sản và lưu hồ sơ thành công. | Cập nhật sổ sách và lưu hồ sơ |

Bảng 16. Quy tắc nghiệp vụ NV-04 – Điều chuyển tài sản

| **Mã** | **Nội dung** | **Áp dụng cho chức năng** |
| --- | --- | --- |
| BR-05.01 | Chỉ những tài sản (TSCĐ, CCDC) đang ở trạng thái "Đang sử dụng" và thuộc bộ phận của người lập mới được đưa vào đề nghị thanh lý. Mỗi tài sản chỉ thuộc một đề nghị thanh lý đang xử lý tại một thời điểm. | CN-05.1.1, CN-05.1.2 |
| BR-05.02 | Lý do thanh lý hợp lệ gồm: (1) tài sản hết hạn sử dụng; (2) chưa hết hạn sử dụng nhưng hư hỏng, không thể sửa chữa; (3) chưa hết hạn sử dụng nhưng sửa chữa không hiệu quả. Phải ghi rõ lý do và mô tả cho từng tài sản. | CN-05.1.1, CN-05.1.2 |
| BR-05.03 | Đề nghị chỉ được gửi khi có ít nhất 01 tài sản và đã nhập đủ các thông tin bắt buộc. Sau khi gửi, BPSDTS không được tùy ý chỉnh sửa hồ sơ đang xử lý. Trường hợp cần bổ sung, đề nghị phải được trả lại hoặc xử lý theo quyền được cấp | CN-05.1.2 |
| BR-05.13 | NVQLTS có trách nhiệm kiểm tra, phê duyệt đề nghị trước khi tiếp nhận xử lý. Nếu hồ sơ chưa phù hợp, NVQLTS được trả lại cho BPSDTS và nhập nội dung phản hồi hoặc lý do trả lại nếu cần. Hệ thống lưu người trả lại, thời điểm và nội dung phản hồi. |     |
| BR-05.04 | NVQLTS phải kiểm tra thực tế tại bộ phận sử dụng tài sản (có đại diện BPSDTS và kế toán TS) và ghi nhận hiện trạng, mức độ hư hỏng, khả năng tiếp tục sử dụng cho từng tài sản trước khi đề xuất thanh lý. Mọi tài sản trong đề nghị đều phải có kết luận trong biên bản kiểm tra hiện trạng. | CN-05.2.1, CN-05.2.2 |
| BR-05.05 | Tài sản đủ điều kiện thanh lý khi: đã hết thời gian sử dụng, hoặc chưa hết thời gian sử dụng nhưng hư hỏng không thể sửa chữa / sửa chữa không hiệu quả. Kết luận do NVQLTS đưa ra, ghi trong biên bản kiểm tra hiện trạng và xin xác nhận của Phòng ban sử dụng tài sản ngay tại chỗ. | CN-05.2.2 |
| BR-05.06 | Tài sản chưa hết thời gian sử dụng, chưa đủ điều kiện thanh lý được xử lý theo một trong ba hướng: (1) phản hồi để bộ phận tiếp tục sử dụng; (2) điều chuyển cho đơn vị khác có nhu cầu theo quy trình Điều chuyển tài sản; (3) nếu không có đơn vị nhận điều chuyển và bộ phận yêu cầu trả tài sản thì lập kế hoạch thu hồi, chờ đủ điều kiện thanh lý. | CN-05.2.3 |
| BR-05.07 | Tờ trình chỉ gồm các tài sản có kết luận "Đủ điều kiện thanh lý" và phải đính kèm đề nghị thanh lý, biên bản kiểm tra hiện trạng. Mỗi tài sản chỉ nằm trong một tờ trình đang xử lý. | CN-05.3.1, CN-05.3.2 |
| BR-05.08 | Giám đốc quyết định phê duyệt hoặc không phê duyệt. Phê duyệt phải có số, ngày quyết định thanh lý. Không phê duyệt phải nêu lý do; hồ sơ được trả cho NVQLTS để bổ sung, sửa đổi và gửi lại. | CN-05.4.1, CN-05.4.2, CN-05.4.3 |
| BR-05.09 | Chỉ thực hiện thanh lý khi đã có quyết định phê duyệt. Hình thức thanh lý là bán và được thực hiện thủ công ngoài hệ thống; hệ thống chỉ ghi nhận hợp đồng mua bán, biên bản bàn giao và lưu chứng từ. | CN-05.5.1, CN-05.5.2 |
| BR-05.10 | Hồ sơ thanh lý gồm đề nghị thanh lý, danh mục tài sản, biên bản kiểm tra hiện trạng, tờ trình, quyết định đã ký, hợp đồng mua bán, biên bản bàn giao và các tài liệu liên quan theo trường hợp thực tế. Hồ sơ chỉ được đóng khi các thành phần bắt buộc đã đầy đủ và tài sản đã được cập nhật đã thanh lý. | CN-05.6.1 |
| BR-05.11 | Hồ sơ thanh lý gồm: đề nghị, danh mục TS, biên bản kiểm tra hiện trạng, tờ trình, quyết định, hợp đồng mua bán, biên bản bàn giao hàng thanh lý. Sau khi đóng hồ sơ không được sửa, chỉ được xem và in. | CN-05.6.2 |
| BR-05.12 | Hệ thống tự sinh số đề nghị, số biên bản và số tờ trình theo quy tắc đánh số thống nhất của doanh nghiệp. Số quyết định được ghi nhận theo văn bản thực tế đã ký. Hệ thống ghi nhật ký người thực hiện, thời gian và thao tác xử lý. | Tất cả chức năng |

Bảng 17. Quy tắc nghiệp vụ NV-05 – Thanh lý tài sản

| **Trạng thái** | **Khi nào** | **Chuyển sang** |
| --- | --- | --- |
| Nháp | NVQLTS tạo biên bản bàn giao, gửi thông báo | Chờ bàn giao |
| Chờ bàn giao | NV xác nhận đã đọc và đồng ý lịch bàn giao | Đang bàn giao |
| Đang bàn giao | NVQLTS quét/nhập mã tài sản, thực hiện ghi lại thông tin | Đã hoàn tất |
| Đã hoàn tất | Đã lưu thông tin bàn giao |     |

Bảng 18. Vòng đời trạng thái biên bản thu hồi

## 3.2 Danh sách tác nhân hệ thống

| **STT** | **Tên tác nhân** | **Vai trò, quyền hạn và chức năng được truy cập** |
| --- | --- | --- |
| 1   | Nhân viên quản lý tài sản (NV QLTS) | Ghi nhận, sửa thông tin, xóa hồ sơ nhập nhầm, in QR, xem danh sách và tìm kiếm/lọc tài sản; thực hiện các UC-01.1 đến UC-01.6 theo quyền được cấp. |

Bảng 19. Tác nhân và phạm vi quyền NV-01 – Ghi nhận tài sản mới

| **STT** | **Tên tác nhân** | **Vai trò, quyền hạn, chức năng được truy cập** |
| --- | --- | --- |
| 1   | Nhân viên | Nhân viên nội bộ có nhu cầu sử dụng tài sản hoặc là người nhận tài sản. - Tạo, lưu nháp, sửa, thu hồi, gửi phiếu đề nghị của mình - Theo dõi trạng thái, lịch sử phiếu của mình - Xem lý do từ chối phiếu của mình - Xác nhận nhận bàn giao với vai trò bên nhận - Xem danh sách tài sản mình đang sử dụng - Không được xem phiếu của người khác. |
| 2   | Nhân sự | Nhân viên bộ phận Nhân sự, đại diện đề nghị cấp phát tài sản cho nhân sự mới. - Tạo, lưu nháp, sửa, thu hồi, gửi phiếu đề nghị của mình và cho nhân viên chuẩn bị vào làm - Theo dõi trạng thái, lịch sử phiếu của mình - Xem lý do từ chối phiếu của mình - Xác nhận nhận bàn giao với vai trò bên nhận - Xem danh sách tài sản mình đang sử dụng |
| 3   | Nhân viên quản lý tài sản | Nhân viên chịu trách nhiệm tiếp nhận, phê duyệt, bàn giao và quản lý tài sản. - Xem toàn bộ phiếu đề nghị - Phê duyệt, từ chối phiếu đề nghị - Lập biên bản bàn giao - Xác nhận bàn giao với vai trò là bên bàn giao |

Bảng 20. Tác nhân và phạm vi quyền NV-02 – Cấp phát tài sản

| **STT** | **Tên tác nhân** | **Vai trò, quyền hạn, chức năng được truy cập** |
| --- | --- | --- |
| 1   | NVQLTS | Tạo/Hủy/In biên bản thu hồi, gửi thông báo, ghi nhận bàn giao, xác nhận đã nhận tài sản, xem toàn bộ các biên bản |
| 2   | Nhân viên có tài sản cần thu hồi | Chỉ xem biên bản của mình và xác nhận. |

Bảng 21. Tác nhân và phạm vi quyền NV-03 – Thu hồi tài sản

| **STT** | **Tên tác nhân** | **Vai trò, quyền hạn, chức năng được truy cập** |
| --- | --- | --- |
| 1   | Người đề nghị | Tạo và gửi yêu cầu điều chuyển; theo dõi trạng thái, xem kết quả xử lý và bổ sung thông tin khi được yêu cầu. Truy cập CN-04.1, CN-04.2. |
| 2   | HCNS | Tiếp nhận, kiểm tra hồ sơ và điều kiện điều chuyển; phê duyệt hoặc từ chối yêu cầu; lập biên bản bàn giao và ghi nhận xác nhận của Bên giao, Bên nhận; cập nhật sổ sách tài sản; lưu hồ sơ và lịch sử điều chuyển. Truy cập CN-04.3, CN-04.4, CN-04.5, CN-04.6. |

Bảng 22. Tác nhân và phạm vi quyền NV-04 – Điều chuyển tài sản

| **STT** | **Tên tác nhân** | **Vai trò, quyền hạn, chức năng được truy cập** |
| --- | --- | --- |
| 1   | BPSDTS (Bộ phận sử dụng tài sản) | Kiểm tra tình trạng tài sản; lập, sửa (khi còn nháp) và gửi đề nghị thanh lý; nhận thông báo lịch kiểm tra; xác nhận kết quả kiểm tra hiện trạng tại chỗ; nhận phản hồi của NVQLTS. Chỉ xem được tài sản và hồ sơ của bộ phận mình. Truy cập: CN-05.1.1, CN-05.1.2; xem CN-05.2.1–CN-05.2.3. |
| 2   | NVQLTS (Nhân viên quản lý tài sản) | Tiếp nhận, thẩm định, lập biên bản kiểm tra; xử lý TS chưa đủ điều kiện; lập tờ trình; thực hiện thanh lý, cập nhật hợp đồng, biên bản bàn giao; tập hợp và lưu hồ sơ. Truy cập: CN-05.2.1–CN-05.3.2, CN-05.5.1–CN-05.6.2. |
| 3   | Giám đốc | Xem xét tờ trình; phê duyệt (ban hành quyết định thanh lý) hoặc không phê duyệt và trả hồ sơ. Truy cập: CN-05.4.1, CN-05.4.2, CN-05.4.3; xem toàn bộ hồ sơ thanh lý. |

Bảng 23. Tác nhân và phạm vi quyền NV-05 – Thanh lý tài sản

## 3.3 Danh sách chức năng và đặc tả chi tiết

| **Mã chức năng** | **Chức năng** | **Mã UC** | **Mã AD** |
| --- | --- | --- | --- |
| CN-01.1 | Thêm mới tài sản | UC-01.1 | AD-01.1 |
| CN-01.2 | Sửa thông tin tài sản | UC-01.2 | AD-01.2 |
| CN-01.3 | Xóa tài sản | UC-01.3 | AD-01.3 |
| CN-01.4 | In QR tài sản | UC-01.4 | AD-01.4 |
| CN-01.5 | Xem danh sách tài sản | UC-01.5 | AD-01.5 |
| CN-01.6 | Tìm kiếm và lọc tài sản | UC-01.6 | AD-01.6 |

Bảng 24. Danh sách chức năng NV-01

| **Mã chức năng** | **Chức năng** | **Mã UC** | **Mã AD** |
| --- | --- | --- | --- |
| CN-02.1 | Lập phiếu yêu cầu cấp phát tài sản | UC-02.1 | AD-02.1 |
| CN-02.2 | Phê duyệt yêu cầu cấp phát tài sản | UC-02.2 | AD-02.2 |
| CN-02.3 | Lập và xác nhận biên bản bàn giao tài sản | UC-02.3 | AD-02.3 |

Bảng 25. Danh sách chức năng NV-02

| **Mã chức năng con** | **Nhóm chức năng** | **Chức năng con** | **Mã UC** | **Mã AD** |
| --- | --- | --- | --- | --- |
| CN-02.1.1 | Lập phiếu yêu cầu cấp phát tài sản | Tạo phiếu yêu cầu cấp phát tài sản | UC-02.1 | AD-02.1 |
| CN-02.1.2 | Lập phiếu yêu cầu cấp phát tài sản | Lưu nháp phiếu yêu cầu cấp phát | UC-02.1 | AD-02.1 |
| CN-02.1.3 | Lập phiếu yêu cầu cấp phát tài sản | Sửa phiếu yêu cầu cấp phát tài sản | UC-02.1 | AD-02.1 |
| CN-02.1.4 | Lập phiếu yêu cầu cấp phát tài sản | Xem chi tiết phiếu yêu cầu cấp phát tài sản | UC-02.1 | AD-02.1 |
| CN-02.1.5 | Lập phiếu yêu cầu cấp phát tài sản | Thu hồi phiếu yêu cầu cấp phát tài sản | UC-02.1 | AD-02.1 |
| CN-02.1.6 | Lập phiếu yêu cầu cấp phát tài sản | In phiếu yêu cầu cấp phát tài sản | UC-02.1 | AD-02.1 |
| CN-02.2.1 | Phê duyệt yêu cầu cấp phát tài sản | Phê duyệt yêu cầu cấp phát tài sản | UC-02.2 | AD-02.2 |
| CN-02.3.1 | Lập biên bản bàn giao tài sản | Tạo biên bản bàn giao tài sản | UC-02.3 | AD-02.3 |
| CN-02.3.2 | Lập biên bản bàn giao tài sản | Sửa biên bản bàn giao tài sản | UC-02.3 | AD-02.3 |
| CN-02.3.3 | Lập biên bản bàn giao tài sản | Lưu nháp biên bản bàn giao tài sản | UC-02.3 | AD-02.3 |
| CN-02.3.4 | Lập biên bản bàn giao tài sản | Xem chi tiết biên bản bàn giao tài sản | UC-02.3 | AD-02.3 |
| CN-02.3.5 | Lập biên bản bàn giao tài sản | Xác nhận biên bản bàn giao tài sản | UC-02.3 | AD-02.3 |
| CN-02.3.6 | Lập biên bản bàn giao tài sản | In biên bản bàn giao tài sản | UC-02.3 | AD-02.3 |

Bảng 26. Chức năng con NV-02

| **Mã chức năng** | **Chức năng** | **Mã UC** | **Mã AD** |
| --- | --- | --- | --- |
| CN-03.1 | Tạo biên bản thu hồi | UC-03.1 | AD-03.1 |
| CN-03.2 | Gửi thông báo thu hồi | UC-03.2 | AD-03.1 |
| CN-03.3 | Xác nhận đã đọc và đồng ý bàn giao | UC-03.3 | AD-03.1 |
| CN-03.4 | Ghi nhận bàn giao tài sản | UC-03.4 | AD-03.2 |
| CN-03.5 | Khóa, lưu trữ và in biên bản | UC-03.5 | AD-03.2 |
| CN-03.6 | Cập nhật trạng thái tài sản sau thu hồi | UC-03.6 | AD-03.2 |

Bảng 27. Danh sách chức năng NV-03

| **Mã chức năng** | **Chức năng** | **Mã UC** | **Mã AD** |
| --- | --- | --- | --- |
| CN-04.1 | Tạo và gửi yêu cầu điều chuyển | UC-04.1 | AD-04.1 |
| CN-04.2 | Theo dõi yêu cầu điều chuyển | UC-04.1 | AD-04.1 |
| CN-04.3 | Kiểm tra hồ sơ và điều kiện điều chuyển | UC-04.1 | AD-04.1 |
| CN-04.4 | Phê duyệt yêu cầu điều chuyển | UC-04.1 | AD-04.1 |
| CN-04.5 | Lập và xác nhận biên bản bàn giao | UC-04.1 | AD-04.1 |
| CN-04.6 | Cập nhật sổ sách và lưu hồ sơ | UC-04.1 | AD-04.1 |

Bảng 28. Danh sách chức năng NV-04

| **Mã chức năng** | **Chức năng** | **Mã UC** | **Mã AD** |
| --- | --- | --- | --- |
| CN-05.1 | Lập đề nghị thanh lý tài sản | UC-05.1 | AD-05.1 |
| CN-05.2 | Kiểm tra và thẩm định tài sản | UC-05.2 | AD-05.2 |
| CN-05.3 | Lập tờ trình thanh lý tài sản | UC-05.3 | AD-05.3 |
| CN-05.4 | Phê duyệt thanh lý tài sản | UC-05.4 | AD-05.3 |
| CN-05.5 | Thực hiện thanh lý tài sản | UC-05.5 | AD-05.4 |
| CN-05.6 | Cập nhật dữ liệu và lưu hồ sơ thanh lý | UC-05.6 | AD-05.4 |

Bảng 29. Danh sách chức năng NV-05

| **Mã chức năng con** | **Nhóm chức năng** | **Chức năng con** | **Mã UC** | **Mã AD** |
| --- | --- | --- | --- | --- |
| CN-05.1.1 | CN-05.1 - Lập đề nghị thanh lý tài sản | Tạo đề nghị thanh lý và danh mục tài sản đề nghị thanh lý | UC-05.1 | AD-05.1 |
| CN-05.1.2 | CN-05.1 - Lập đề nghị thanh lý tài sản | Gửi đề nghị thanh lý đến NVQLTS | UC-05.1 | AD-05.1 |
| CN-05.2.1 | CN-05.2 - Kiểm tra và thẩm định tài sản | Tiếp nhận đề nghị và thông báo lịch kiểm tra | UC-05.2 | AD-05.2 |
| CN-05.2.2 | CN-05.2 - Kiểm tra và thẩm định tài sản | Cập nhật kết quả kiểm tra hiện trạng và kết luận thẩm định | UC-05.2 | AD-05.2 |
| CN-05.2.3 | CN-05.2 - Kiểm tra và thẩm định tài sản | Xử lý tài sản chưa đủ điều kiện thanh lý (phản hồi / điều chuyển / thu hồi) | UC-05.2 | AD-05.2 |
| CN-05.3.1 | CN-05.3 - Lập tờ trình thanh lý tài sản | Tổng hợp thông tin và lập tờ trình đề nghị thanh lý | UC-05.3 | AD-05.3 |
| CN-05.3.2 | CN-05.3 - Lập tờ trình thanh lý tài sản | Gửi tờ trình đến Giám đốc | UC-05.3 | AD-05.3 |
| CN-05.4.1 | CN-05.4 - Phê duyệt thanh lý tài sản | Xem xét tờ trình đề nghị thanh lý | UC-05.4 | AD-05.3 |
| CN-05.4.2 | CN-05.4 - Phê duyệt thanh lý tài sản | Phê duyệt và ban hành quyết định thanh lý | UC-05.4 | AD-05.3 |
| CN-05.4.3 | CN-05.4 - Phê duyệt thanh lý tài sản | Không phê duyệt và trả hồ sơ bổ sung | UC-05.4 | AD-05.3 |
| CN-05.5.1 | CN-05.5 - Thực hiện thanh lý tài sản | Ghi nhận thông tin thanh lý, hợp đồng và chứng từ | UC-05.5 | AD-05.4 |
| CN-05.5.2 | CN-05.5 - Thực hiện thanh lý tài sản | Cập nhật kết quả bàn giao theo từng tài sản | UC-05.5 | AD-05.4 |
| CN-05.6.1 | CN-05.6 – Kiểm tra và đóng Hồ sơ thanh lý | Kiểm tra và đóng hồ sơ thanh lý | UC-05.6 | AD-05.4 |
| CN-05.6.2 | CN-05.6 - Cập nhật dữ liệu và lưu hồ sơ thanh lý | Lưu hồ sơ thanh lý | UC-05.6 | AD-05.4 |

Bảng 30. Chức năng con NV-05

### 3.3.1 Sơ đồ use case theo nhóm

Hình 1. NV-01 – Sơ đồ use case ghi nhận tài sản mới

Hình 2. NV-02 - Sơ đồ use case cấp phát tài sản

Hình 2. NV-03 – Sơ đồ use case thu hồi tài sản

Hình 3. NV-04 – Sơ đồ use case điều chuyển tài sản

Hình 4. NV-05 – Sơ đồ use case thanh lý tài sản

### 3.3.2 CN-01.1 Thêm mới tài sản

#### 3.3.2.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-01.1 |     |     |
| Tên UC | Thêm mới tài sản |     |     |
| Mô tả UC | Ghi nhận hồ sơ tài sản mới đã được tiếp nhận và kiểm tra thực tế vào hệ thống, tạo mã tài sản riêng và đưa tài sản vào danh sách chờ cấp phát. |     |     |
| Tác nhân chính | Nhân viên quản lý tài sản |     |     |
| Điều kiện kích hoạt | Mở mục Quản lý danh sách tài sản. |     |     |
| Tiền điều kiện | Nhân viên QLTS đã đăng nhập và có quyền thêm tài sản; tài sản đã được tiếp nhận và đối chiếu thông tin với hồ sơ liên quan; có danh mục loại tài sản để lựa chọn. |     |     |
| Hậu điều kiện | Thành công: hệ thống lưu một hồ sơ tài sản mới có mã duy nhất, trạng thái Chưa cấp phát và thông tin người ghi nhận. Thất bại: không tạo bản ghi mới. |     |     |
| Luồng chính | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng chính | 1   | Mở mục Quản lý danh sách tài sản. | Hiển thị danh sách tài sản và chức năng Thêm mới theo quyền truy cập. |
| Luồng chính | 2   | Chọn Thêm mới tài sản. | Hiển thị biểu mẫu ghi nhận mới; mã tài sản sẽ được tạo khi lưu; trạng thái ban đầu là Chưa cấp phát. |
| Luồng chính | 3   | Nhập tên, loại, đặc điểm, seri, nguồn gốc, ngày nhập, nhà cung cấp, giá trị, bảo hành, tình trạng ban đầu và thông tin chứng từ phù hợp. | Tiếp nhận dữ liệu và kiểm tra định dạng các trường đã nhập. |
| Luồng chính | 4   | Nhấn Lưu. | Kiểm tra các trường bắt buộc, ngày, giá trị và số seri trùng; đồng thời kiểm tra quyền lưu. |
| Luồng chính | 5   | —   | Nếu dữ liệu hợp lệ, sinh mã duy nhất, lưu hồ sơ với trạng thái Chưa cấp phát và ghi lịch sử tạo. |
| Luồng chính | 6   | Xem kết quả lưu. | Thông báo thêm mới thành công và đưa tài sản vào danh sách để tiếp tục in QR hoặc cấp phát về sau. |
| Luồng thay thế | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng thay thế | A1  | Hủy nhập. Tại bước 3 hoặc trước khi lưu ở bước 4, nhân viên chọn Hủy; hệ thống xác nhận khi đã có dữ liệu và quay về danh sách nếu đồng ý, không lưu hồ sơ. |     |
| Luồng thay thế | A2  | Tiếp tục thêm tài sản. Sau bước 6, nhân viên chọn thêm tài sản khác; hệ thống mở biểu mẫu mới và thực hiện lại từ bước 3. |     |
| Luồng thay thế | A3  | In QR sau khi thêm. Sau bước 6, nhân viên chọn In QR; hệ thống mở UC-01.4 cho tài sản vừa lưu, không làm thay đổi kết quả tạo hồ sơ. |     |
| Luồng ngoại lệ | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng ngoại lệ | E1  | Thiếu hoặc sai dữ liệu. Bước 4: thông báo cụ thể trường thiếu hoặc sai, giữ dữ liệu để sửa và quay lại bước 3. |     |
| Luồng ngoại lệ | E2  | Trùng số seri. Bước 4: hiển thị thông báo số seri đã tồn tại; không lưu và quay lại bước 3. |     |
| Luồng ngoại lệ | E3  | Không có quyền. Bước 2 hoặc 4: từ chối truy cập hoặc lưu và không tạo bản ghi. |     |
| Luồng ngoại lệ | E4  | Lỗi lưu hoặc mất kết nối. Bước 5: thông báo không lưu được, không tạo hồ sơ dở dang; giữ dữ liệu biểu mẫu để người dùng thử lại. |     |
| Luồng ngoại lệ | E5  | Gửi yêu cầu lưu lặp. Bước 4–5: cùng một yêu cầu ghi nhận chỉ được tạo một hồ sơ; hệ thống trả kết quả đã xử lý. |     |
| Quy tắc nghiệp vụ | BR-01.01, BR-01.02, BR-01.03, BR-01.04, BR-01.05, BR-01.06, BR-01.12, BR-01.13, BR-01.14, BR-01.15 |     |     |
| Mã AD | AD-01.1 |     |     |
| Mã giao diện | MH-01.01, MH-01.02, MH-01.03, MH-01.04 |     |     |

Bảng 31. Đặc tả UC-01.1 – Thêm mới tài sản

#### 3.3.2.2 Sơ đồ hoạt động

Hình 5. AD-01.1 – Thêm mới tài sản

#### 3.3.2.3 Giao diện

**MH-01.01 – Thêm mới tài sản**

Hình 6. MH-01.01 – Thêm mới tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Điều hướng quay lại | Liên kết | I   | N/A | Chọn để quay lại danh sách tài sản. |
| 2   | Tiêu đề màn hình | Nhãn văn bản | O   | N/A | Hiển thị “Thêm mới tài sản” và hướng dẫn ghi nhận tài sản sau khi đối chiếu hóa đơn hoặc phiếu giao hàng thực tế. |
| 3   | Thông báo tự sinh mã và trạng thái | Thông báo | O   | N/A | Cho biết mã tài sản do hệ thống tự sinh sau khi lưu và trạng thái ban đầu của tài sản là “Chưa cấp phát”. |
| 4   | Mã tài sản | Trường chỉ đọc | O   | Tự sinh sau khi lưu | Hiển thị mã tài sản được hệ thống tự sinh khi lưu; không cho người dùng nhập hoặc sửa ở màn hình này. Giao diện nêu quy cách \[DM\]-\[YYYY\]-\[INDEX\]. |
| 5   | Trạng thái | Trường chỉ đọc | O   | Chưa cấp phát | Hiển thị trạng thái ban đầu “Chưa cấp phát”; không cho chỉnh sửa. Hướng dẫn trên màn hình nêu chuyển sang “Đang sử dụng” khi tạo phiếu bàn giao. |
| 6   | Danh mục \* | Danh sách chọn | I   | Chọn danh mục tài sản | Bắt buộc chọn danh mục tài sản. Dòng hướng dẫn cho biết danh mục quyết định chu kỳ khấu hao mặc định. |
| 7   | Tên tài sản \* | Ô nhập văn bản \[200\] | I   | N/A | Bắt buộc nhập tên tài sản; giới hạn 200 ký tự theo bộ đếm 0/200. Gợi ý nhập tên đầy đủ theo nhãn nhà sản xuất. |
| 8   | Số serial / Số máy | Ô nhập văn bản | I   | N/A | Nhập số serial/số máy từ tem sản phẩm. Theo hướng dẫn trên màn hình: bắt buộc đối với thiết bị IT & Điện tử và không được trùng tài sản khác. Độ dài tối đa: N/A. |
| 9   | Tình trạng ban đầu \* | Nhóm lựa chọn | I   | Mới | Bắt buộc chọn một trong 3 tình trạng: “Mới”, “Tốt”, “Đã qua sử dụng”. Giao diện đang chọn “Mới”. |
| 10  | Nguồn tài sản \* | Danh sách chọn | I   | Mua mới tập trung | Bắt buộc chọn nguồn tài sản. Giá trị đang hiển thị là “Mua mới tập trung”; chú thích cho biết nguồn kinh phí phục vụ sổ sách kế toán. |
| 11  | Nhà cung cấp \* | Ô tìm kiếm/chọn | I   | N/A | Bắt buộc chọn hoặc tìm nhà cung cấp theo giao diện; gợi ý “Chọn hoặc nhập tên nhà cung cấp...”. Không có thông tin giới hạn ký tự trên ảnh. |
| 12  | Ngày mua/nhận \* | Ô chọn ngày | I   | 24/05/2024 (trên ảnh) | Bắt buộc có ngày mua/nhận. Giao diện quy định không được lớn hơn ngày hiện tại; có nút chọn lịch. |
| 13  | Nguyên giá (VND) \* | Ô nhập số/tiền | I   | 24.500.000 đ (trên ảnh) | Bắt buộc nhập nguyên giá bằng VND; giao diện mô tả giá trị sau thuế VAT theo hóa đơn tài chính. Các giới hạn số cụ thể: N/A. |
| 14  | Hạn bảo hành | Ô chọn ngày | I   | 24/05/2026 (trên ảnh) | Nhập ngày hết hạn bảo hành nếu có; không nhỏ hơn ngày mua/nhận. Hướng dẫn nêu hỗ trợ cảnh báo sắp hết hạn. |
| 15  | Số chứng từ | Ô nhập văn bản | I   | N/A | Nhập số hóa đơn/phiếu giao hàng; gợi ý số hóa đơn điện tử GTGT hoặc số biên bản bàn giao. Không hiển thị độ dài tối đa. |
| 16  | Phụ kiện đi kèm | Ô nhập nhiều dòng \[500\] | I   | N/A | Nhập danh sách phụ kiện được bàn giao cùng tài sản; giới hạn 500 ký tự theo bộ đếm 0/500. |
| 17  | Vị trí lưu kho ban đầu | Ô nhập văn bản | I   | N/A | Nhập vị trí lưu kho ban đầu; giao diện đưa ví dụ “Kho tầng 2 - Dãy B Kệ 04”. Không hiển thị độ dài tối đa. |
| 18  | Đơn vị quản lý trực tiếp | Khu vực hiển thị | O   | Phòng Hành chính - Quản trị Tòa nhà (trên ảnh) | Hiển thị đơn vị quản lý trực tiếp trong khu vực thông tin bên dưới ô vị trí lưu kho. Nguồn trường dữ liệu cụ thể: N/A. |
| 19  | Ghi chú bổ sung | Ô nhập nhiều dòng \[500\] | I   | N/A | Nhập ghi chú bổ sung về thông số, cấu hình, tình trạng đóng gói hoặc hồ sơ bàn giao; giới hạn 500 ký tự. |
| 20  | Thông tin ghi nhận | Nhãn thông tin | O   | Nguyễn Văn An; 24/05/2024 - 10:45 (trên ảnh) | Hiển thị người ghi nhận và thời gian ghi nhận (tự động) theo phần thông tin dưới biểu mẫu. |
| 21  | Hủy bỏ | Nút lệnh | I   | N/A | Chọn để hủy thao tác thêm mới. Việc xác nhận hủy khi có dữ liệu được xử lý theo luồng thay thế A1 của UC-01.1. |
| 22  | Lưu & Thêm tài sản khác | Nút lệnh | I   | N/A | Lưu tài sản hiện tại và tiếp tục thêm tài sản mới theo luồng A2 của UC-01.1; chỉ lưu khi dữ liệu đáp ứng quy tắc hợp lệ. |
| 23  | Lưu tài sản | Nút lệnh | I   | N/A | Thực hiện kiểm tra dữ liệu và lưu bản ghi tài sản mới. Khi thành công, mã tài sản được tự sinh và trạng thái ban đầu là “Chưa cấp phát”. |

Bảng 32. Mô tả thành phần màn hình MH-01.01

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.01 | Các trường có dấu \* là thông tin bắt buộc nhập hoặc chọn trước khi lưu. |
| QT-01.02 | Mã tài sản do hệ thống tự sinh sau khi lưu; trạng thái ban đầu là “Chưa cấp phát”; hai trường hiển thị chỉ đọc. |
| QT-01.03 | Tên tài sản tối đa 200 ký tự; Phụ kiện đi kèm và Ghi chú bổ sung tối đa 500 ký tự, theo bộ đếm trên giao diện. |
| QT-01.04 | Số serial/số máy bắt buộc với thiết bị IT & Điện tử và không được trùng với tài sản khác. |
| QT-01.05 | Ngày mua/nhận không được lớn hơn ngày hiện tại; hạn bảo hành không được nhỏ hơn ngày mua/nhận. |
| QT-01.06 | Tình trạng ban đầu được chọn trong ba giá trị “Mới”, “Tốt”, “Đã qua sử dụng”. |
| QT-01.07 | Nếu dữ liệu không hợp lệ hoặc lưu lỗi, xử lý theo các ngoại lệ E1, E2, E4 của UC-01.1; yêu cầu lưu lặp theo E5. |
| QT-01.08 | Hủy bỏ thực hiện theo A1; Lưu & Thêm tài sản khác thực hiện theo A2 của UC-01.1. |

Bảng 33. Quy tắc màn hình MH-01.01

**MH-01.02 – Lỗi thêm mới tài sản**

Hình 7. MH-01.02 – Lỗi thêm mới tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Quay lại danh sách tài sản | Liên kết | I   | N/A | Điều hướng về danh sách tài sản. |
| 2   | Thông báo lỗi tổng | Thông báo | O   | Không thể lưu | Thông báo không thể lưu vì thiếu thông tin bắt buộc; nêu 6 trường chưa nhập/chọn hợp lệ. |
| 3   | Mã lỗi | Nhãn văn bản | O   | VAL_ERR_REQ | Hiển thị mã lỗi của lần kiểm tra dữ liệu bắt buộc. |
| 4   | Chỉ báo số lỗi | Nhãn trạng thái | O   | 6 lỗi cần xử lý | Hiển thị tổng số lỗi cần xử lý ở đầu biểu mẫu. |
| 5   | Cảnh báo nhóm Thông tin chung | Nhãn cảnh báo | O   | 3 mục chưa hoàn tất | Báo số trường bắt buộc chưa hợp lệ trong nhóm Thông tin chung. |
| 6   | Mã tài sản | Trường chỉ đọc | O   | Tự sinh sau khi lưu | Hệ thống sinh mã sau khi lưu thành công; hiện đang khóa, chưa có mã. |
| 7   | Trạng thái cấp phát ban đầu | Trường chỉ đọc | O   | Chưa cấp phát | Hiển thị trạng thái ban đầu Chưa cấp phát; không cho sửa tại đây. |
| 8   | Danh mục tài sản | Danh sách chọn | I   | Chọn danh mục tài sản | Bắt buộc (\*). Chưa chọn; viền đỏ và hiển thị “Vui lòng chọn Danh mục”. Giá trị chọn từ danh mục tài sản. |
| 9   | Tên tài sản | Ô nhập văn bản \[200 ký tự\] | I   | N/A | Bắt buộc (\*), tối đa 200 ký tự theo chỉ báo 0/200. Khi bỏ trống hiển thị “Vui lòng nhập Tên tài sản”. |
| 10  | Số serial / Số máy | Ô nhập văn bản | I   | N/A | Nhập số serial/số máy; ghi chú trên giao diện: bắt buộc với thiết bị IT & Điện tử. Độ dài và kiểm tra trùng không thể xác nhận riêng từ ảnh. |
| 11  | Tình trạng ban đầu | Nhóm chọn một | I   | N/A | Bắt buộc (\*). Chọn một trong: Mới 100%, Đã qua sử dụng, Cần sửa chữa. Chưa chọn hiển thị lỗi tương ứng. |
| 12  | Cảnh báo nhóm Nguồn gốc và giá trị | Nhãn cảnh báo | O   | 3 mục chưa hoàn tất | Hiển thị số trường thiếu hoặc chưa hợp lệ của nhóm Nguồn gốc và giá trị. |
| 13  | Nguồn tài sản | Danh sách chọn | I   | Chọn nguồn tài sản | Bắt buộc (\*). Khi chưa chọn hiển thị “Vui lòng chọn Nguồn tài sản”. |
| 14  | Nhà cung cấp / Đối tác giao dịch | Danh sách chọn/nhập | I   | N/A | Chọn hoặc nhập nhà cung cấp; giao diện gợi ý mã số thuế hoặc tên pháp nhân. Không có dấu (\*). |
| 15  | Ngày mua/nhận | Ô chọn ngày | I   | N/A | Bắt buộc (\*). Giao diện hiển thị mm/dd/yyyy; khi để trống có thông báo “Vui lòng nhập Ngày mua/nhận”. |
| 16  | Nguyên giá (VND) | Ô nhập số | I   | 0   | Bắt buộc (\*), đơn vị VND; khi thiếu/không hợp lệ báo “Vui lòng nhập Nguyên giá”. Giới hạn giá trị: N/A. |
| 17  | Hạn bảo hành | Ô chọn ngày | I   | N/A | Nhập/chọn hạn bảo hành; chú thích định dạng ngày/tháng/năm, ô đang hiện mm/dd/yyyy. Không có dấu (\*). |
| 18  | Số chứng từ / Số hóa đơn GTGT | Ô nhập văn bản | I   | N/A | Nhập mã chứng từ/hóa đơn; ví dụ HD-2024-00918 hoặc BBGN/05. Không có dấu (\*). |
| 19  | Chỉ báo nhóm Thông tin bổ sung | Nhãn trạng thái | O   | Trường tùy chọn | Cho biết các trường của nhóm này là tùy chọn. |
| 20  | Phụ kiện đi kèm | Ô nhập văn bản | I   | N/A | Nhập mô tả phụ kiện kèm theo; giao diện nêu phân tách các phụ kiện bằng dấu phẩy. |
| 21  | Vị trí lưu kho ban đầu | Ô nhập văn bản | I   | N/A | Nhập vị trí thực tế đặt tài sản trước bàn giao. |
| 22  | Ghi chú nghiệp vụ | Ô nhập nhiều dòng | I   | N/A | Nhập lưu ý về bảo quản, tình trạng thẩm định hoặc hướng dẫn cấp phát. |
| 23  | Người ghi nhận | Nhãn văn bản | O   | Nguyễn Văn An (Nhân viên QLTS) | Hiển thị người ghi nhận theo thông tin tài khoản đang thao tác. |
| 24  | Thời gian khởi tạo | Nhãn thời gian | O   | 24/05/2024 - 10:45 (Tự động) | Hiển thị thời gian khởi tạo tự động theo nội dung trên giao diện. |
| 25  | Chú thích trường bắt buộc | Nhãn cảnh báo | O   | N/A | Nhắc người dùng: các trường có dấu (\*) là thông tin bắt buộc nhập. |
| 26  | Hủy bỏ | Nút bấm | I   | N/A | Hủy thao tác thêm mới tài sản. |
| 27  | Lưu & Thêm tài sản khác | Nút bấm | I   | N/A | Yêu cầu lưu tài sản hiện tại và tiếp tục thêm tài sản khác khi dữ liệu hợp lệ. |
| 28  | Lưu tài sản | Nút bấm | I   | N/A | Gửi yêu cầu lưu tài sản; ở trạng thái ảnh đang báo lỗi bắt buộc, chưa thể lưu hợp lệ. |

Bảng 34. Mô tả thành phần màn hình MH-01.02

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.09 | Khi lưu thiếu trường bắt buộc, hệ thống hiển thị thông báo lỗi tổng, mã VAL_ERR_REQ và số lượng trường lỗi; không ghi nhận tài sản mới. |
| QT-01.10 | Các trường thiếu được viền đỏ và hiển thị thông báo ngay bên dưới; trong ảnh có 6 trường lỗi: Danh mục, Tên, Tình trạng ban đầu, Nguồn, Ngày mua/nhận, Nguyên giá. |
| QT-01.11 | Tên tài sản có bộ đếm 0/200; trường có dấu (\*) là bắt buộc. |
| QT-01.12 | Mã tài sản tự sinh sau khi lưu thành công; trạng thái ban đầu hiển thị “Chưa cấp phát”. |
| QT-01.13 | Người dùng có thể sửa các trường đang lỗi và thử Lưu tài sản hoặc Lưu & Thêm tài sản khác. |
| QT-01.14 | Nhóm Thông tin bổ sung hiển thị là tùy chọn. |

Bảng 35. Quy tắc màn hình MH-01.02

**MH-01.03 – Thêm mới tài sản thành công**

Hình 8. MH-01.03 – Thêm mới tài sản thành công

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Thanh điều hướng bên trái | Nhóm điều hướng \[N/A\] | O   | N/A | Hiển thị các phân hệ; mục Quản lý tài sản nằm trong menu. |
| 2   | Đường dẫn điều hướng | Breadcrumb \[N/A\] | I/O | N/A | Hiển thị đường dẫn Trang chủ / Quản lý tài sản / Danh sách tài sản / Thêm mới tài sản. |
| 3   | Thông báo lưu thành công | Toast \[N/A\] | O   | N/A | Hiển thị 'Đã ghi nhận thành công' và mã tài sản vừa lưu; có nút đóng. |
| 4   | Biểu tượng hoàn tất | Icon \[N/A\] | O   | N/A | Biểu tượng dấu tích màu trắng trên nền xanh, biểu thị hoàn tất. |
| 5   | Nhãn hoàn tất thủ tục | Badge \[N/A\] | O   | N/A | Hiển thị 'HOÀN TẤT THỦ TỤC NHẬP KHO'. |
| 6   | Tiêu đề thành công | Text \[N/A\] | O   | N/A | Hiển thị 'Thêm mới tài sản thành công' và thông điệp xác nhận bên dưới. |
| 7   | Mã tài sản | Text \[N/A\] | O   | N/A | Mã tài sản được hệ thống cấp sau khi lưu; ví dụ TS-LAP-2026-00013. |
| 8   | Nhãn tự động sinh | Badge \[N/A\] | O   | Tự động sinh | Cho biết mã tài sản được hệ thống tự sinh. |
| 9   | Sao chép mã | Button \[N/A\] | I   | N/A | Nhấn để sao chép mã tài sản hiển thị. |
| 10  | Tóm tắt hồ sơ thiết bị | Section \[N/A\] | O   | N/A | Hiển thị các thông tin tóm tắt hồ sơ tài sản vừa ghi nhận. |
| 11  | Tên tài sản | Text \[N/A\] | O   | N/A | Hiển thị tên tài sản đã lưu; trên ảnh: Laptop Dell Latitude 5440. |
| 12  | Danh mục quản lý | Text \[N/A\] | O   | N/A | Hiển thị danh mục tài sản đã chọn; trên ảnh: Thiết bị CNTT / Laptop. |
| 13  | Trạng thái định danh | Badge \[N/A\] | O   | Chưa cấp phát | Hiển thị trạng thái 'Chưa cấp phát' với nhãn nền xanh nhạt. |
| 14  | Thời điểm ghi nhận | Text \[N/A\] | O   | N/A | Hiển thị thời điểm ghi nhận; trên ảnh: 20/10/2026 09:15. |
| 15  | Người thực hiện | Text \[N/A\] | O   | N/A | Hiển thị tên và mã người ghi nhận; trên ảnh: Nguyễn Văn An (NV-0248). |
| 16  | Vị trí lưu kho | Text \[N/A\] | O   | N/A | Hiển thị vị trí kho đã lưu; trên ảnh: Kho Tổng A – Tầng 2 (Kệ 04). |
| 17  | In tem nhãn QR | Button \[N/A\] | I   | N/A | Chọn để thực hiện in tem nhãn QR cho tài sản vừa tạo. |
| 18  | Thêm tài sản khác | Button \[N/A\] | I   | N/A | Chọn để tiếp tục tạo hồ sơ tài sản khác. |
| 19  | Về danh sách | Button \[N/A\] | I   | N/A | Chọn để quay về màn hình danh sách tài sản. |
| 20  | Thông tin kiểm toán / mã vạch | Text \[N/A\] | O   | N/A | Hiển thị nhật ký kiểm toán #7819 và thông tin xác thực mã vạch ISO/IEC 18004. |
| 21  | Cấp phát ngay | Action card \[N/A\] | I   | N/A | Thẻ thao tác 'Cấp phát ngay', có mô tả bàn giao thiết bị cho nhân sự phòng ban. |
| 22  | Xuất phiếu kho | Action card \[N/A\] | I   | N/A | Thẻ thao tác 'Xuất phiếu kho', có mô tả in biên bản bàn giao và nhập kho lưu trữ. |
| 23  | Chia sẻ liên kết | Action card \[N/A\] | I   | N/A | Thẻ thao tác 'Chia sẻ liên kết', có mô tả gửi đường dẫn chi tiết cho kế toán phụ trách. |

Bảng 36. Mô tả thành phần màn hình MH-01.03

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.15 | Màn hình xuất hiện sau khi thao tác thêm mới tài sản được ghi nhận thành công. |
| QT-01.16 | Mã tài sản do hệ thống tự động sinh và được hiển thị trong vùng mã tài sản và thông báo thành công. |
| QT-01.17 | Thông tin tóm tắt phản ánh hồ sơ vừa lưu: tên, danh mục, trạng thái, thời điểm, người thực hiện và vị trí lưu kho. |
| QT-01.18 | Trạng thái hiển thị trên màn hình là “Chưa cấp phát”. |
| QT-01.19 | Người dùng có thể chọn “In tem nhãn QR”, “Thêm tài sản khác” hoặc “Về danh sách”. |
| QT-01.20 | Các thẻ “Cấp phát ngay”, “Xuất phiếu kho”, “Chia sẻ liên kết” được hiển thị theo ảnh; chi tiết xử lý thuộc chức năng tương ứng, không xác định thêm từ ảnh. |

Bảng 37. Quy tắc màn hình MH-01.03

**MH-01.04 – Xác nhận hủy thêm mới tài sản**

Hình 9. MH-01.04 – Xác nhận hủy thêm mới tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Hộp thoại xác nhận hủy | Modal \[N/A\] | O   | N/A | Hộp thoại nằm giữa màn hình; nền phía sau được làm mờ để tập trung vào xác nhận hủy. |
| 2   | Biểu tượng cảnh báo | Icon \[N/A\] | O   | N/A | Biểu tượng tam giác dấu chấm than màu cam trên nền vàng nhạt. |
| 3   | Nút đóng hộp thoại | Button \[N/A\] | I   | N/A | Biểu tượng X ở góc phải; thao tác đóng hộp thoại. |
| 4   | Tiêu đề xác nhận | Text \[N/A\] | O   | N/A | Hiển thị “Hủy thêm mới tài sản?”. |
| 5   | Nội dung cảnh báo | Text \[N/A\] | O   | N/A | Thông báo dữ liệu chi tiết và chứng từ vừa thiết lập sẽ không được lưu nếu rời đi; hỏi người dùng có chắc chắn hay không. |
| 6   | Mã tài sản đang tạo | Text \[N/A\] | O   | N/A | Hiển thị nhãn và mã “TSCD-2024-0892” trên ảnh; đây là giá trị minh họa đang hiển thị, chưa đủ căn cứ xác định quy tắc sinh mã. |
| 7   | Tiến độ nhập thông tin | Text \[N/A\] | O   | N/A | Hiển thị “Đã nhập thông tin: 3/3 danh mục” theo trạng thái hiện tại trên ảnh. |
| 8   | Ở lại form | Button \[N/A\] | I   | N/A | Chọn để không hủy và tiếp tục ở biểu mẫu thêm mới tài sản. |
| 9   | Đồng ý hủy | Button \[N/A\] | I   | N/A | Nút nền đỏ; xác nhận hủy thao tác thêm mới và không lưu dữ liệu đang nhập. |
| 10  | Thông tin nhật ký tác vụ | Text \[N/A\] | O   | N/A | Hiển thị thông báo “Nhật ký tác vụ sẽ tự động ghi nhận phiên thao tác hủy”. |
| 11  | Đường dẫn điều hướng | Breadcrumb \[N/A\] | O   | N/A | Hiển thị Trang chủ / Quản lý tài sản / Danh sách tài sản / Thêm mới tài sản ở nền phía sau hộp thoại. |
| 12  | Menu Quản lý tài sản | Menu \[N/A\] | I   | N/A | Mục Quản lý tài sản trên thanh điều hướng trái; nằm phía sau lớp phủ hộp thoại. |

Bảng 38. Mô tả thành phần màn hình MH-01.04

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.21 | Hộp thoại xuất hiện khi người dùng yêu cầu hủy thao tác thêm mới tài sản trong trạng thái đã nhập dữ liệu. |
| QT-01.22 | Chọn “Ở lại form” để đóng xác nhận và tiếp tục nhập; dữ liệu đang nhập được giữ nguyên. |
| QT-01.23 | Chọn “Đồng ý hủy” để hủy việc thêm mới, không lưu dữ liệu đang nhập và trở về danh sách tài sản. |
| QT-01.24 | Hộp thoại hiển thị cảnh báo về việc dữ liệu chi tiết và chứng từ vừa thiết lập không được lưu nếu rời đi. |
| QT-01.25 | Mã tài sản đang tạo và tiến độ nhập thông tin được hiển thị theo dữ liệu trên màn hình; quy tắc tính/sinh giá trị không thể xác định chỉ từ ảnh. |
| QT-01.26 | Giao diện hiển thị thông báo nhật ký tác vụ tự động ghi nhận phiên thao tác hủy. |

Bảng 39. Quy tắc màn hình MH-01.04

### 3.3.3 CN-01.2 Sửa thông tin tài sản

#### 3.3.3.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-01.2 |     |     |
| Tên UC | Sửa thông tin tài sản |     |     |
| Mô tả UC | Cho phép Nhân viên QLTS cập nhật thông tin hồ sơ đã ghi nhận khi phát hiện sai sót hoặc thay đổi thông tin, đồng thời lưu lịch sử chỉnh sửa. |     |     |
| Tác nhân chính | Nhân viên quản lý tài sản |     |     |
| Điều kiện kích hoạt | Mở danh sách và chọn tài sản cần sửa. |     |     |
| Tiền điều kiện | Nhân viên đã đăng nhập, có quyền sửa; tài sản được chọn tồn tại, chưa bị xóa và thông tin hiện tại đã được tải. |     |     |
| Hậu điều kiện | Thành công: trường hợp lệ được cập nhật, mã và trạng thái tài sản giữ nguyên, lịch sử thay đổi được lưu. Thất bại: dữ liệu trước khi sửa được giữ nguyên. |     |     |
| Luồng chính | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng chính | 1   | Mở danh sách và chọn tài sản cần sửa. | Kiểm tra quyền và tải hồ sơ tài sản hiện tại. |
| Luồng chính | 2   | Nhấn Sửa thông tin tài sản. | Hiển thị biểu mẫu có sẵn dữ liệu; mã tài sản và trạng thái sử dụng ở chế độ chỉ đọc. |
| Luồng chính | 3   | Thay đổi một hoặc nhiều trường thông tin được phép sửa. | Tiếp nhận giá trị mới; giữ các giá trị không thay đổi. |
| Luồng chính | 4   | Nhấn Lưu. | Kiểm tra dữ liệu bắt buộc, ngày, giá trị, số seri trùng với tài sản khác và phiên bản hồ sơ hiện tại. |
| Luồng chính | 5   | —   | Cập nhật những trường thực sự thay đổi, lưu giá trị cũ–mới, người sửa và thời gian trong nhật ký. |
| Luồng chính | 6   | Xem kết quả cập nhật. | Thông báo cập nhật thành công và hiển thị dữ liệu mới. |
| Luồng thay thế | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng thay thế | A1  | Hủy sửa. Ở bước 3–4, nhân viên chọn Hủy; hệ thống xác nhận khi có thay đổi chưa lưu và quay về danh sách, không cập nhật. |     |
| Luồng thay thế | A2  | Không có trường thay đổi. Ở bước 4, nếu giá trị mới giống hoàn toàn dữ liệu hiện tại, hệ thống thông báo không có thay đổi để lưu và kết thúc, không ghi thêm lịch sử sửa. |     |
| Luồng ngoại lệ | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng ngoại lệ | E1  | Dữ liệu không hợp lệ. Bước 4: thông báo trường cần sửa và quay về bước 3; chưa cập nhật dữ liệu. |     |
| Luồng ngoại lệ | E2  | Số seri trùng. Bước 4: từ chối lưu và yêu cầu thay số seri; bỏ qua chính tài sản đang được sửa khi đối chiếu. |     |
| Luồng ngoại lệ | E3  | Hồ sơ đã thay đổi bởi người khác. Bước 4: không ghi đè, thông báo dữ liệu đã thay đổi và yêu cầu tải lại bản mới. |     |
| Luồng ngoại lệ | E4  | Tài sản không tồn tại hoặc đã xóa. Bước 1: thông báo không thể sửa và quay về danh sách. |     |
| Luồng ngoại lệ | E5  | Lỗi hệ thống. Bước 5: không cập nhật dở dang; thông báo lỗi và giữ nội dung vừa nhập để thử lại. |     |
| Quy tắc nghiệp vụ | BR-01.01, BR-01.02, BR-01.03, BR-01.04, BR-01.05, BR-01.06, BR-01.07, BR-01.12, BR-01.13, BR-01.14, BR-01.15 |     |     |
| Mã AD | AD-01.2 |     |     |
| Mã giao diện | MH-01.05 |     |     |

Bảng 40. Đặc tả UC-01.2 – Sửa thông tin tài sản

#### 3.3.3.2 Sơ đồ hoạt động

Hình 10. AD-01.2 – Sửa thông tin tài sản

#### 3.3.3.3 Giao diện

**MH-01.05 – Sửa thông tin tài sản**

Hình 11. MH-01.05 – Sửa thông tin tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Tiêu đề màn hình | Text \[N/A\] | O   | N/A | Hiển thị 'Sửa thông tin tài sản' và nhãn 'Đang chỉnh sửa'. |
| 2   | Thông tin tài sản đang sửa | Text \[N/A\] | O   | N/A | Hiển thị mã TS-LAP-2026-00012, tên Laptop Dell Latitude 5440, phiên bản dữ liệu 3, thời điểm cập nhật và người cập nhật. |
| 3   | Xem lịch sử thay đổi | Button \[N/A\] | I   | N/A | Mở thông tin lịch sử thay đổi của tài sản. |
| 4   | Thông báo hiệu lực thay đổi | Text \[N/A\] | O   | N/A | Hiển thị thông tin thay đổi có hiệu lực sau khi lưu và được ghi vào nhật ký kiểm toán. |
| 5   | Nhóm Thông tin chung | Section \[N/A\] | O   | N/A | Tiêu đề nhóm thông tin chung. |
| 6   | Mã tài sản | Text field (read-only) \[N/A\] | O   | TS-LAP-2026-00012 | Mã định danh tài sản, có biểu tượng khóa; không cho chỉnh sửa. |
| 7   | Trạng thái hiện tại | Badge (read-only) \[N/A\] | O   | Chưa cấp phát | Hiển thị trạng thái hiện tại; chú thích trạng thái thay đổi qua quy trình cấp phát/thu hồi. |
| 8   | Danh mục tài sản | Dropdown \[N/A\] | I   | Laptop / Máy tính xách tay | Trường bắt buộc (\*); danh mục hiện tại, có chú thích việc đổi danh mục không thay đổi mã đã gán. |
| 9   | Số serial / Service Tag | Text input \[N/A\] | I   | SN-DL5440-88213 | Nhập số serial/Service Tag; giao diện ghi bắt buộc với thiết bị IT & Điện tử; kiểm tra trùng theo đặc tả UC-01.2. |
| 10  | Tên tài sản | Text input \[200\] | I   | Laptop Dell Latitude 5440 (i7) | Trường bắt buộc (\*), hiển thị 30/200 ký tự và nhãn 'Đã thay đổi'; giá trị cũ được gạch ngang bên dưới. |
| 11  | Tình trạng thực tế | Segmented control \[N/A\] | I   | Mới (100%) | Trường bắt buộc (\*); các lựa chọn Mới (100%), Tốt, Đã qua sử dụng. |
| 12  | Nhóm Nguồn gốc và giá trị | Section \[N/A\] | O   | N/A | Tiêu đề nhóm nguồn gốc và giá trị. |
| 13  | Nguồn hình thành | Dropdown \[N/A\] | I   | Mua mới tập trung | Trường bắt buộc (\*); chọn nguồn hình thành tài sản. |
| 14  | Đơn vị cung cấp | Text input \[N/A\] | I   | Công ty TNHH Thiết bị Số Việt | Hiển thị/cho chỉnh sửa tên đơn vị cung cấp. |
| 15  | Ngày bàn giao / Nhập kho | Date input \[N/A\] | I   | 10/10/2026 | Trường bắt buộc (\*); chọn/nhập ngày theo định dạng ngày đang hiển thị dd/mm/yyyy. |
| 16  | Nguyên giá (VND) | Currency input \[N/A\] | I   | 26.500.000 đ | Trường bắt buộc (\*); nhãn Đã thay đổi; giá cũ 24.500.000 đ, chênh lệch +2.000.000 đ (+8,16%) hiển thị bên dưới; ghi chú đã gồm VAT. |
| 17  | Hạn bảo hành chính hãng | Date input \[N/A\] | I   | 10/10/2029 | Ngày hết bảo hành; hiển thị 'Còn hiệu lực: 36 tháng' theo ảnh. |
| 18  | Số hóa đơn / Hợp đồng | Text input \[N/A\] | I   | HD-0012345 | Nhập hoặc sửa số hóa đơn/hợp đồng, có chú thích đối chiếu sổ sách kế toán. |
| 19  | Nhóm Thông tin bổ sung | Section \[N/A\] | O   | N/A | Tiêu đề nhóm thông tin bổ sung. |
| 20  | Vị trí lưu kho / Bàn giao | Text input \[N/A\] | I   | Kho tầng 2 - Tòa nhà Central Plaza | Hiển thị vị trí lưu kho/bàn giao hiện tại. |
| 21  | Phụ kiện đi kèm | Textarea \[500\] | I   | Sạc, chuột không dây | Cho chỉnh sửa danh sách phụ kiện; bộ đếm trên ảnh 21/500. |
| 22  | Ghi chú nội bộ | Textarea \[500\] | I   | N/A | Nhập ghi chú nội bộ; bộ đếm trên ảnh 0/500; chú thích chỉ hiển thị cho bộ phận quản trị cơ sở vật chất. |
| 23  | Thông tin khởi tạo hồ sơ | Text \[N/A\] | O   | N/A | Hiển thị người ghi nhận ban đầu Nguyễn Văn An (NV-0419) và thời gian khởi tạo 15/10/2026 08:40. |
| 24  | Số trường đã thay đổi | Status text \[N/A\] | O   | 2 trường đã thay đổi | Hiển thị số trường đã sửa và thông báo chưa lưu vào cơ sở dữ liệu. |
| 25  | Hủy | Button \[N/A\] | I   | N/A | Hủy thao tác sửa; xử lý xác nhận nếu có thay đổi chưa lưu theo UC-01.2. |
| 26  | Lưu thay đổi | Button \[N/A\] | I   | N/A | Gửi yêu cầu kiểm tra và lưu các thay đổi; nếu hợp lệ thì cập nhật hồ sơ và lịch sử sửa. |

Bảng 41. Mô tả thành phần màn hình MH-01.05

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.27 | Màn hình hiển thị dữ liệu hiện tại của tài sản được chọn; mã tài sản và trạng thái chỉ đọc, không chỉnh sửa trực tiếp. |
| QT-01.28 | Các trường có dấu \* là bắt buộc; dữ liệu được kiểm tra hợp lệ trước khi cập nhật. |
| QT-01.29 | Số serial/Service Tag cần kiểm tra trùng với các tài sản khác, loại trừ chính tài sản đang sửa. |
| QT-01.30 | Các trường thay đổi được đánh dấu “Đã thay đổi”; màn hình có thể hiển thị giá trị cũ và giá trị mới để đối chiếu. |
| QT-01.31 | Nếu người dùng chọn Hủy khi có thay đổi chưa lưu, thực hiện luồng xác nhận hủy theo UC-01.2. |
| QT-01.32 | Nếu không có thay đổi, không ghi nhận cập nhật mới; xử lý theo luồng A2 của UC-01.2. |
| QT-01.33 | Khi chọn Lưu thay đổi, hệ thống kiểm tra dữ liệu và xung đột phiên bản hồ sơ trước khi cập nhật; ghi lịch sử thay đổi nếu thành công. |
| QT-01.34 | Nếu dữ liệu không hợp lệ, trùng serial, xung đột hoặc lỗi hệ thống, thực hiện luồng ngoại lệ tương ứng E1–E5 của UC-01.2. |

Bảng 42. Quy tắc màn hình MH-01.05

### 3.3.4 CN-01.3 Xóa tài sản

#### 3.3.4.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-01.3 |     |     |
| Tên UC | Xóa tài sản |     |     |
| Mô tả UC | Xóa mềm hồ sơ tài sản được ghi nhận nhầm khi tài sản chưa được cấp phát và chưa có nghiệp vụ phụ thuộc, bảo toàn dữ liệu lịch sử. |     |     |
| Tác nhân chính | Nhân viên quản lý tài sản |     |     |
| Điều kiện kích hoạt | Mở danh sách và chọn tài sản cần xóa. |     |     |
| Tiền điều kiện | Nhân viên đã đăng nhập và có quyền xóa; tài sản tồn tại, chưa bị xóa và có thể kiểm tra lịch sử nghiệp vụ. |     |     |
| Hậu điều kiện | Thành công: hồ sơ được đánh dấu đã xóa, không còn xuất hiện trong danh sách mặc định; ghi nhận lý do, người xóa và thời điểm. Thất bại: hồ sơ không thay đổi. |     |     |
| Luồng chính | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng chính | 1   | Mở danh sách và chọn tài sản cần xóa. | Tải thông tin mã tài sản, trạng thái và lịch sử liên quan. |
| Luồng chính | 2   | Nhấn Xóa tài sản. | Kiểm tra điều kiện: tài sản Chưa cấp phát và chưa có giao dịch nghiệp vụ phụ thuộc. |
| Luồng chính | 3   | —   | Nếu đủ điều kiện, hiển thị xác nhận xóa kèm mã, tên tài sản và yêu cầu nhập lý do. |
| Luồng chính | 4   | Nhập lý do và chọn Xác nhận xóa. | Kiểm tra lại quyền, lý do và điều kiện xóa tại thời điểm xác nhận. |
| Luồng chính | 5   | —   | Đánh dấu hồ sơ đã xóa, lưu người thực hiện, thời gian, lý do và nhật ký thao tác; không xóa vật lý dữ liệu. |
| Luồng chính | 6   | Xem kết quả. | Thông báo xóa thành công và cập nhật danh sách tài sản. |
| Luồng thay thế | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng thay thế | A1  | Hủy xóa. Ở bước 3–4, người dùng chọn Hủy hoặc đóng hộp thoại; hệ thống không cập nhật tài sản và trở về danh sách. |     |
| Luồng ngoại lệ | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng ngoại lệ | E1  | Đã cấp phát hoặc có lịch sử nghiệp vụ. Bước 2 hoặc 4: từ chối xóa, hiển thị lý do; tài sản giữ nguyên. |     |
| Luồng ngoại lệ | E2  | Thiếu lý do. Bước 4: yêu cầu nhập lý do, không xóa và ở lại hộp xác nhận. |     |
| Luồng ngoại lệ | E3  | Tài sản đã bị xóa bởi người khác. Bước 4: từ chối, thông báo dữ liệu không còn hợp lệ và tải lại danh sách. |     |
| Luồng ngoại lệ | E4  | Không có quyền. Bước 2 hoặc 4: từ chối xóa, không thay đổi hồ sơ. |     |
| Luồng ngoại lệ | E5  | Lỗi lưu. Bước 5: không đánh dấu xóa dở dang; thông báo lỗi và giữ nguyên hồ sơ. |     |
| Quy tắc nghiệp vụ | BR-01.01, BR-01.05, BR-01.06, BR-01.08, BR-01.10, BR-01.12, BR-01.13, BR-01.14, BR-01.15 |     |     |
| Mã AD | AD-01.3 |     |     |
| Mã giao diện | MH-01.06, MH-01.07, MH-01.08, MH-01.09 |     |     |

Bảng 43. Đặc tả UC-01.3 – Xóa tài sản

#### 3.3.4.2 Sơ đồ hoạt động

Hình 12. AD-01.3 – Xóa tài sản

#### 3.3.4.3 Giao diện

**MH-01.06 – Xóa tài sản**

Hình 13. MH-01.06 – Xóa tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Hộp thoại Xóa tài sản | Modal \[N/A\] | O   | N/A | Hộp thoại xác nhận xóa tài sản nằm trên danh sách tài sản; nền phía sau bị làm mờ. |
| 2   | Biểu tượng xóa | Icon \[N/A\] | O   | N/A | Biểu tượng thùng rác màu đỏ nhạt tại đầu hộp thoại. |
| 3   | Tiêu đề và mô tả | Text \[N/A\] | O   | N/A | Hiển thị “Xóa tài sản” và “Xác nhận gỡ bỏ định danh tài sản khỏi hệ thống”. |
| 4   | Nút đóng | Button \[N/A\] | I   | N/A | Nút X ở góc phải; đóng hộp thoại, không thực hiện xóa. |
| 5   | Mã tài sản | Text \[N/A\] | O   | N/A | Hiển thị mã của tài sản đang được chọn: TS-FUR-2026-00087. |
| 6   | Trạng thái tài sản | Badge \[N/A\] | O   | Chưa cấp phát | Hiển thị trạng thái hiện tại của tài sản là “Chưa cấp phát”. |
| 7   | Tên tài sản | Text \[N/A\] | O   | N/A | Hiển thị tên tài sản được chọn: Bàn làm việc Hòa Phát HP120. |
| 8   | Cảnh báo xóa mềm | Text \[N/A\] | O   | N/A | Thông báo tài sản chuyển sang “Đã xóa”, không hiển thị trong danh sách mặc định; mã không cấp lại, số seri được giải phóng. |
| 9   | Lý do xóa | Textarea \[500\] | I   | N/A | Trường bắt buộc (\*), cho nhập lý do xóa; gợi ý “nhập trùng, ghi nhận nhầm”; bộ đếm 0/500 cho biết giới hạn 500 ký tự. |
| 10  | Chú thích và bộ đếm ký tự | Text \[N/A\] | O   | 0/500 | Hiển thị yêu cầu nhập lý do để lưu vết kiểm toán (Audit Trail) và số ký tự đã nhập/tối đa. |
| 11  | Nút Hủy | Button \[N/A\] | I   | N/A | Đóng hộp thoại, không thay đổi hồ sơ tài sản (A1). |
| 12  | Nút Xác nhận xóa | Button \[N/A\] | I   | N/A | Xác nhận xóa sau khi nhập lý do; trong ảnh nút đang bị vô hiệu hóa vì chưa có lý do. |

Bảng 44. Mô tả thành phần màn hình MH-01.06

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.35 | Hộp thoại xuất hiện khi người dùng chọn xóa một tài sản đủ điều kiện; hiển thị mã, tên và trạng thái tài sản để xác nhận. |
| QT-01.36 | Chỉ cho phép xóa khi tài sản ở trạng thái Chưa cấp phát và không có nghiệp vụ phụ thuộc; hệ thống kiểm tra lại quyền và điều kiện tại thời điểm xác nhận (UC-01.3). |
| QT-01.37 | Lý do xóa là trường bắt buộc, tối đa 500 ký tự theo bộ đếm trên màn hình; khi chưa nhập, nút Xác nhận xóa bị vô hiệu hóa. |
| QT-01.38 | Chọn Hủy hoặc đóng hộp thoại thì không cập nhật tài sản (A1). |
| QT-01.39 | Xác nhận hợp lệ thực hiện xóa mềm; ghi lý do, người xóa, thời điểm và nhật ký thao tác; cập nhật danh sách. |
| QT-01.40 | Nếu đã cấp phát/có nghiệp vụ phụ thuộc, thiếu lý do, bị xóa bởi người khác, không có quyền hoặc lỗi lưu, xử lý theo E1–E5 của UC-01.3. |
| QT-01.41 | Giao diện cảnh báo mã tài sản không được cấp lại và số seri được giải phóng; đây là nội dung hiển thị trên màn hình, cần đối chiếu quy tắc dữ liệu của hệ thống trước khi triển khai. |

Bảng 45. Quy tắc màn hình MH-01.06

**MH-01.07 – Xóa tài sản đã nhập lý do**

Hình 14. MH-01.07 – Xóa tài sản đã nhập lý do

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Tiêu đề hộp thoại | Text \[N/A\] | O   | N/A | Hiển thị 'Xóa tài sản' và dòng mô tả hành động thay đổi trạng thái lưu trữ. |
| 2   | Nút đóng hộp thoại | Button \[N/A\] | I   | N/A | Biểu tượng X để đóng hộp thoại mà không xác nhận xóa. |
| 3   | Mã tài sản | Text \[N/A\] | O   | N/A | Hiển thị mã tài sản được chọn: TS-FUR-2026-00087. |
| 4   | Trạng thái tài sản | Badge \[N/A\] | O   | Chưa cấp phát | Hiển thị trạng thái tài sản hiện tại là Chưa cấp phát. |
| 5   | Tên tài sản | Text \[N/A\] | O   | N/A | Hiển thị tên tài sản được chọn: Bàn làm việc Hòa Phát HP120. |
| 6   | Cảnh báo xóa mềm | Text \[N/A\] | O   | N/A | Cảnh báo tài sản chuyển sang trạng thái 'Đã xóa', không hiển thị trong danh sách mặc định; mã không cấp lại, số serial được giải phóng (nội dung giao diện, cần đối chiếu đặc tả nghiệp vụ). |
| 7   | Trường lý do xóa | Textarea \[500\] | I   | Nhập trùng với TS-FUR-2026-00086 | Trường bắt buộc (\*), nhập nội dung lý do xóa. Ảnh đang hiển thị lý do đã nhập; tối đa 500 ký tự. |
| 8   | Bộ đếm ký tự | Text \[N/A\] | O   | 32/500 | Hiển thị số ký tự đã nhập trên giới hạn 500 ký tự. |
| 9   | Chú thích lưu vết | Text \[N/A\] | O   | N/A | Thông báo lý do xóa là bắt buộc để lưu trữ biên bản kiểm toán tài sản công. |
| 10  | Nút Hủy | Button \[N/A\] | I   | N/A | Hủy thao tác, không cập nhật hồ sơ tài sản. |
| 11  | Nút Xác nhận xóa | Button \[N/A\] | I   | N/A | Nút nền đỏ đang khả dụng khi lý do đã được nhập; gửi yêu cầu xóa để hệ thống kiểm tra lại quyền và điều kiện xóa. |

Bảng 46. Mô tả thành phần màn hình MH-01.07

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.42 | Màn hình hiển thị hộp thoại xác nhận xóa cho tài sản được chọn, gồm mã, tên và trạng thái hiện tại. |
| QT-01.43 | Lý do xóa là bắt buộc, tối đa 500 ký tự theo bộ đếm trên giao diện; ảnh thể hiện trường đã được nhập và nút xác nhận có thể nhấn. |
| QT-01.44 | Chọn Hủy hoặc đóng hộp thoại thì không thay đổi hồ sơ (A1). |
| QT-01.45 | Khi chọn Xác nhận xóa, hệ thống kiểm tra lại quyền, lý do, trạng thái Chưa cấp phát và lịch sử nghiệp vụ trước khi xóa mềm. |
| QT-01.46 | Xóa thành công: đánh dấu hồ sơ đã xóa, lưu người xóa, thời gian, lý do và nhật ký; cập nhật danh sách mặc định. |
| QT-01.47 | Xử lý trường hợp không đủ điều kiện, thiếu lý do, hồ sơ đã bị xóa, không có quyền hoặc lỗi lưu theo E1–E5 của UC-01.3. |
| QT-01.48 | Thông báo về việc không cấp lại mã và giải phóng số serial được giữ đúng như ảnh; cần đối chiếu quy tắc dữ liệu trước khi coi là yêu cầu nghiệp vụ chính thức. |

Bảng 47. Quy tắc màn hình MH-01.07

**MH-01.08 – Xóa tài sản lỗi thiếu lý do**

Hình 15. MH-01.08 – Xóa tài sản lỗi thiếu lý do

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Hộp thoại Xóa tài sản | Modal \[N/A\] | O   | N/A | Hộp thoại xác nhận xóa tài sản hiển thị trên nền danh sách bị làm mờ. |
| 2   | Tiêu đề và mô tả | Text \[N/A\] | O   | N/A | Hiển thị 'Xóa tài sản' và 'Xác nhận gỡ bỏ tài sản khỏi danh mục hoạt động'. |
| 3   | Nút đóng | Button \[N/A\] | I   | N/A | Biểu tượng X ở góc phải để đóng hộp thoại mà không xác nhận xóa. |
| 4   | Mã tài sản | Text \[N/A\] | O   | N/A | Hiển thị mã TS-FUR-2026-00087 của tài sản được chọn. |
| 5   | Trạng thái tài sản | Badge \[N/A\] | O   | Chưa cấp phát | Hiển thị trạng thái hiện tại 'Chưa cấp phát'. |
| 6   | Tên tài sản | Text \[N/A\] | O   | N/A | Hiển thị tên Bàn làm việc Hòa Phát HP120. |
| 7   | Cảnh báo xóa mềm | Text \[N/A\] | O   | N/A | Hiển thị cảnh báo tài sản chuyển sang 'Đã xóa', không hiện trong danh sách mặc định, mã không cấp lại và số serial được giải phóng; nội dung cuối cần đối chiếu quy tắc dữ liệu. |
| 8   | Trường Lý do xóa | Textarea \[500\] | I   | N/A | Trường bắt buộc (\*), nhập lý do xóa; gợi ý lý do trong ô; tối đa 500 ký tự theo bộ đếm. |
| 9   | Thông báo lỗi lý do | Text \[N/A\] | O   | N/A | Hiển thị chữ đỏ 'Vui lòng nhập lý do xóa' vì trường đang để trống. |
| 10  | Bộ đếm ký tự | Text \[N/A\] | O   | 0/500 | Hiển thị số ký tự đã nhập và giới hạn tối đa 500. |
| 11  | Nút Hủy | Button \[N/A\] | I   | N/A | Đóng hộp thoại, giữ nguyên hồ sơ tài sản (A1). |
| 12  | Nút Xác nhận xóa | Button \[N/A\] | I   | N/A | Nút đang bị vô hiệu hóa khi thiếu lý do; sau khi nhập hợp lệ, dùng để gửi yêu cầu xóa. |

Bảng 48. Mô tả thành phần màn hình MH-01.08

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.49 | Màn hình là trạng thái lỗi E2 của UC-01.3 khi người dùng chưa nhập lý do xóa. |
| QT-01.50 | Lý do xóa là bắt buộc, tối đa 500 ký tự theo bộ đếm trên ảnh. |
| QT-01.51 | Khi lý do trống, hiển thị “Vui lòng nhập lý do xóa” bằng màu đỏ và không cho xác nhận xóa. |
| QT-01.52 | Người dùng ở lại hộp thoại để nhập bổ sung lý do; hồ sơ chưa bị thay đổi. |
| QT-01.53 | Chọn Hủy hoặc nút đóng để thoát hộp thoại mà không xóa tài sản (A1). |
| QT-01.54 | Khi lý do hợp lệ và người dùng xác nhận, hệ thống kiểm tra lại quyền, trạng thái và lịch sử nghiệp vụ trước khi xóa mềm theo UC-01.3. |
| QT-01.55 | Nội dung cảnh báo về mã tài sản và số serial được ghi theo ảnh; quy tắc giải phóng serial cần xác nhận trong đặc tả nghiệp vụ. |

Bảng 49. Quy tắc màn hình MH-01.08

**MH-01.09 – Không thể xóa tài sản**

Hình 16. MH-01.09 – Không thể xóa tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Hộp thoại thông báo không thể xóa | Modal \[N/A\] | O   | N/A | Hiển thị thông báo lỗi trên nền danh sách tài sản bị làm mờ. |
| 2   | Biểu tượng cảnh báo | Icon \[N/A\] | O   | N/A | Biểu tượng tam giác cảnh báo màu cam ở góc trên bên trái hộp thoại. |
| 3   | Tiêu đề thông báo | Text \[N/A\] | O   | N/A | Hiển thị “Không thể xóa tài sản”. |
| 4   | Mã lỗi hệ thống | Text \[N/A\] | O   | ERR_ASSET_IN_USE | Hiển thị mã lỗi ERR_ASSET_IN_USE ngay dưới tiêu đề. |
| 5   | Nút đóng | Button \[N/A\] | I   | N/A | Biểu tượng X tại góc trên phải để đóng hộp thoại. |
| 6   | Nội dung lỗi và liên kết Thanh lý | Text / Link \[N/A\] | O / I | N/A | Thông báo tài sản đã phát sinh giao dịch nên không thể xóa; có liên kết chữ “Thanh lý” để chuyển sang nghiệp vụ phù hợp. |
| 7   | Mã tài sản | Text \[N/A\] | O   | N/A | Hiển thị mã TS-PRT-2026-00004 của tài sản không thể xóa. |
| 8   | Tên tài sản | Text \[N/A\] | O   | N/A | Hiển thị tên Máy in Canon LBP2900 Laser. |
| 9   | Trạng thái hiện tại | Badge \[N/A\] | O   | Đang sử dụng | Hiển thị trạng thái “Đang sử dụng” dưới dạng nhãn màu xanh. |
| 10  | Giải thích quy định | Info panel \[N/A\] | O   | N/A | Giải thích tài sản có lịch sử bàn giao, cấp phát, khấu hao hoặc nhật ký bảo trì không thể xóa vĩnh viễn để bảo toàn hồ sơ kiểm toán. |
| 11  | Đi tới Thanh lý | Button \[N/A\] | I   | N/A | Nút điều hướng “Đi tới Thanh lý” theo nội dung hiển thị trên giao diện. |
| 12  | Đã hiểu | Button \[N/A\] | I   | N/A | Nút “Đã hiểu” để đóng thông báo và không xóa tài sản. |

Bảng 50. Mô tả thành phần màn hình MH-01.09

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.56 | Hiển thị hộp thoại khi hệ thống từ chối xóa vì tài sản đã phát sinh giao dịch hoặc có lịch sử nghiệp vụ phụ thuộc (E1 của UC-01.3). |
| QT-01.57 | Thông báo hiển thị mã lỗi ERR_ASSET_IN_USE và lý do không thể xóa; tài sản giữ nguyên, không thực hiện xóa mềm. |
| QT-01.58 | Hiển thị mã, tên và trạng thái hiện tại của tài sản bị từ chối xóa để người dùng nhận biết đúng đối tượng. |
| QT-01.59 | Người dùng có thể chọn “Đã hiểu” hoặc nút X để đóng thông báo; không làm thay đổi hồ sơ tài sản. |
| QT-01.60 | Giao diện cung cấp liên kết “Thanh lý” và nút “Đi tới Thanh lý” để điều hướng tới nghiệp vụ thanh lý; quy trình xử lý chi tiết thuộc chức năng khác. |
| QT-01.61 | Thông tin giải thích về lưu giữ lịch sử bàn giao, cấp phát, khấu hao, bảo trì và kiểm toán được hiển thị theo đúng nội dung ảnh. |

Bảng 51. Quy tắc màn hình MH-01.09

### 3.3.5 CN-01.4 In QR tài sản

#### 3.3.5.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-01.4 |     |     |
| Tên UC | In QR tài sản |     |     |
| Mô tả UC | Tạo mã QR thể hiện mã định danh của tài sản đã ghi nhận và chuẩn bị tem để nhân viên quản lý tài sản in, dán lên tài sản. |     |     |
| Tác nhân chính | Nhân viên quản lý tài sản |     |     |
| Điều kiện kích hoạt | Chọn một hoặc nhiều tài sản trên danh sách hoặc mở In QR sau khi thêm thành công. |     |     |
| Tiền điều kiện | Nhân viên đã đăng nhập, có quyền in QR; có ít nhất một tài sản đã ghi nhận, chưa xóa và đã được chọn. |     |     |
| Hậu điều kiện | Thành công: mã QR và nội dung tem được tạo cho các tài sản đã chọn; thông tin và trạng thái tài sản không thay đổi. Thất bại: không làm thay đổi hồ sơ tài sản. |     |     |
| Luồng chính | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng chính | 1   | Chọn một hoặc nhiều tài sản trên danh sách hoặc mở In QR sau khi thêm thành công. | Kiểm tra quyền, tính tồn tại và mã định danh của các tài sản được chọn. |
| Luồng chính | 2   | Chọn In QR tài sản. | Tạo nội dung QR tương ứng từng mã tài sản, hiển thị phần xem trước tem. |
| Luồng chính | 3   | Kiểm tra nội dung tem và chọn In. | Chuẩn bị nội dung tem và gọi cơ chế in của trình duyệt/thiết bị. |
| Luồng chính | 4   | —   | Ghi nhật ký thao tác tạo/gửi yêu cầu in ở phạm vi hệ thống xác định được. |
| Luồng chính | 5   | Trở về danh sách hoặc kết thúc. | Giữ nguyên thông tin và trạng thái của tài sản. |
| Luồng thay thế | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng thay thế | A1  | Xuất tệp tem. Ở bước 3, chọn Xuất PDF thay cho In; hệ thống tạo tệp tem tương ứng và cho phép lưu tệp. |     |
| Luồng thay thế | A2  | Hủy thao tác. Ở bước 2 hoặc 3, chọn Hủy; hệ thống đóng phần in, không thay đổi hồ sơ. |     |
| Luồng thay thế | A3  | In lại tem. Người dùng tiếp tục chọn tài sản đã in trước đó; hệ thống tạo lại QR từ mã tài sản hiện có, không sinh mã tài sản mới. |     |
| Luồng ngoại lệ | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng ngoại lệ | E1  | Chưa chọn hoặc tài sản không hợp lệ. Bước 1: từ chối thao tác, yêu cầu chọn lại tài sản hợp lệ. |     |
| Luồng ngoại lệ | E2  | Lỗi tạo QR hoặc tệp tem. Bước 2–3: thông báo không thể tạo tem; không thay đổi hồ sơ. |     |
| Luồng ngoại lệ | E3  | Không thể gọi chức năng in. Bước 3: thông báo lỗi in, cho phép sử dụng Xuất PDF khi có; không hiển thị là đã in giấy thành công. |     |
| Luồng ngoại lệ | E4  | Không có quyền. Bước 1: từ chối tạo tem, không trả dữ liệu in. |     |
| Quy tắc nghiệp vụ | BR-01.01, BR-01.06, BR-01.09, BR-01.12, BR-01.15 |     |     |
| Mã AD | AD-01.4 |     |     |
| Mã giao diện | MH-01.10, MH-01.11, MH-01.12 |     |     |

Bảng 52. Đặc tả UC-01.4 – In QR tài sản

#### 3.3.5.2 Sơ đồ hoạt động

Hình 17. AD-01.4 – In QR tài sản

#### 3.3.5.3 Giao diện

**MH-01.10 – In QR tài sản**

Hình 18. MH-01.10 – In QR tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Danh sách tài sản chọn in | Danh sách \[N/A\] | O   | N/A | Hiển thị hai tài sản đã chọn với mã, tên rút gọn và loại tem Chuẩn in. |
| 2   | Nút bỏ tài sản khỏi danh sách | Button \[N/A\] | I   | N/A | Dấu X trên từng dòng để bỏ tài sản tương ứng khỏi danh sách tem. |
| 3   | Giới hạn số tem và định dạng mã | Text \[N/A\] | O   | N/A | Hiển thị tối đa 100 tem mỗi lượt in và định dạng mã Code-128 / QR v3. |
| 4   | Tiêu đề khổ tem | Text \[N/A\] | O   | N/A | Nhãn KHỔ TEM CHUẨN có dấu \*. |
| 5   | Tùy chọn khổ 50 × 30 mm | Radio \[N/A\] | I   | 50 × 30 mm | Tùy chọn đang được chọn, có nhãn Khuyên dùng và mô tả phù hợp laptop, linh kiện, thiết bị cầm tay. |
| 6   | Tùy chọn khổ 70 × 40 mm | Radio \[N/A\] | I   | N/A | Tùy chọn tem cho bàn ghế, tủ kệ, máy móc cỡ trung bình. |
| 7   | Tùy chọn A4 (Decal bế sẵn) | Radio \[N/A\] | I   | N/A | Tùy chọn in bằng máy laser văn phòng thông thường, 24 tem/trang theo ảnh. |
| 8   | Số tem mỗi tài sản | Text \[N/A\] | O   | 1 nhãn | Hiển thị 1 nhãn mỗi tài sản và biểu tượng khóa; ảnh không thể hiện quyền thay đổi. |
| 9   | Thông tin mã hóa QR | Info panel \[N/A\] | O   | N/A | Hiển thị URL định danh nội bộ mẫu https://qlts.corp/qr/{ma_ts}; cảnh báo không chứa dữ liệu cá nhân nhạy cảm. |
| 10  | Vùng xem trước tem | Preview \[N/A\] | O   | N/A | Xem trước hai tem QR tương ứng hai tài sản đang chọn. |
| 11  | Nội dung tem tài sản thứ nhất | QR preview \[N/A\] | O   | N/A | Hiển thị QR, mã TS-LAP-2026-00013, tên Laptop Dell Latitude 5440 và thông tin bổ sung trên tem. |
| 12  | Nội dung tem tài sản thứ hai | QR preview \[N/A\] | O   | N/A | Hiển thị QR, mã TS-MON-2026-00031, tên Màn hình LG 27UL500 và thông tin bổ sung trên tem. |
| 13  | Kích thước in thực tế | Text \[N/A\] | O   | 50 × 30 mm (300 DPI) | Hiển thị kích thước tem và độ phân giải tương ứng tùy chọn hiện tại. |
| 14  | Phóng to bản xem trước | Link \[N/A\] | I   | N/A | Chọn Phóng to để xem bản xem trước tem ở kích thước lớn hơn. |
| 15  | Máy in mặc định | Text \[N/A\] | O   | Zebra ZD421 (Thermal Transfer) | Hiển thị tên máy in mặc định trong phần chân hộp thoại. |
| 16  | Nút Hủy | Button \[N/A\] | I   | N/A | Đóng phần in QR, không thay đổi hồ sơ tài sản (A2). |
| 17  | Nút Xuất PDF | Button \[N/A\] | I   | N/A | Xuất tệp tem dạng PDF thay cho in (A1). |
| 18  | Nút In 2 tem | Button \[N/A\] | I   | N/A | Gửi yêu cầu in hai tem tương ứng hai tài sản đã chọn; không đồng nghĩa xác nhận đã in giấy thành công. |

Bảng 53. Mô tả thành phần màn hình MH-01.10

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.62 | Hiển thị các tài sản đã chọn để in QR; chỉ tạo tem cho tài sản tồn tại, chưa xóa và khi người dùng có quyền theo UC-01.4. |
| QT-01.63 | Mỗi mã QR tương ứng mã định danh hiện có của một tài sản; thao tác in lại không sinh mã tài sản mới (A3). |
| QT-01.64 | Người dùng chọn một trong các khổ tem hiển thị: 50 × 30 mm, 70 × 40 mm hoặc A4 (Decal bế sẵn); ảnh đang chọn 50 × 30 mm. |
| QT-01.65 | Vùng xem trước hiển thị nội dung tem tương ứng danh sách tài sản và khổ tem đang chọn. |
| QT-01.66 | Chọn Hủy để đóng phần in; hồ sơ tài sản không thay đổi (A2). |
| QT-01.67 | Chọn Xuất PDF để tạo tệp tem tương ứng và cho phép lưu; nếu lỗi tạo tệp, xử lý E2. |
| QT-01.68 | Chọn In để gọi cơ chế in của trình duyệt/thiết bị; nếu không thể gọi in, thông báo lỗi và có thể dùng Xuất PDF (E3). Không khẳng định giấy đã được in thành công. |
| QT-01.69 | Ghi nhật ký thao tác tạo hoặc gửi yêu cầu in trong phạm vi hệ thống xác định được; không thay đổi thông tin và trạng thái tài sản. |
| QT-01.70 | Giao diện ghi tối đa 100 tem/lượt, định dạng Code-128 / QR v3, 1 nhãn/tài sản và URL định danh nội bộ; đây là các thông tin hiển thị trên ảnh, không suy rộng thêm quy tắc. |

Bảng 54. Quy tắc màn hình MH-01.10

**MH-01.11 – Xuất PDF tem QR thành công**

Hình 19. MH-01.11 – Xuất PDF tem QR thành công

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Tiêu đề Danh sách tài sản | Text \[N/A\] | O   | N/A | Hiển thị tên màn hình và tổng số 1.482 tài sản. |
| 2   | Thanh chọn tài sản | Thông báo \[N/A\] | O   | 2 tài sản | Hiển thị số tài sản đang được chọn và thông báo các tem QR tương ứng đã xuất PDF thành công. |
| 3   | Thông báo tệp PDF hoàn tất | Toast \[N/A\] | O   | N/A | Hiển thị tệp tem-qr-20261026.pdf, dung lượng 142 KB và trạng thái Hoàn tất. |
| 4   | Nút đóng thông báo | Button \[N/A\] | I   | N/A | Biểu tượng X để đóng thông báo hoàn tất. |
| 5   | Mở tệp | Link \[N/A\] | I   | N/A | Mở tệp PDF vừa xuất theo liên kết Mở tệp. |
| 6   | Hiển thị trong thư mục | Link \[N/A\] | I   | N/A | Mở vị trí lưu tệp PDF theo liên kết Hiển thị trong thư mục. |
| 7   | Tổng nguyên giá | Card \[N/A\] | O   | N/A | Hiển thị tổng nguyên giá 38.450.000.000 đ và tỷ lệ so với tháng trước. |
| 8   | Đang sử dụng | Card \[N/A\] | O   | N/A | Hiển thị 1.298/1.482 tài sản đang sử dụng. |
| 9   | Chưa cấp phát | Card \[N/A\] | O   | N/A | Hiển thị 144 thiết bị chưa cấp phát. |
| 10  | Đã in mã QR | Card \[N/A\] | O   | N/A | Hiển thị 1.412 tem (95%) và thông tin vừa in xong 2 tem hôm nay. |
| 11  | Ô tìm kiếm tài sản | Text input \[N/A\] | I   | MacBook Pro M3 | Tìm kiếm tài sản; ảnh đang có nội dung MacBook Pro M3. |
| 12  | Bộ lọc | Button \[N/A\] | I   | N/A | Mở bộ lọc danh sách. |
| 13  | Bộ lọc loại tài sản | Dropdown \[N/A\] | I   | Máy vi tính & Laptop | Hiển thị lựa chọn nhóm Máy vi tính & Laptop. |
| 14  | Bộ lọc trạng thái | Dropdown \[N/A\] | I   | Tất cả trạng thái | Hiển thị lựa chọn Tất cả trạng thái. |
| 15  | Bộ lọc đơn vị quản lý | Dropdown \[N/A\] | I   | Tất cả đơn vị quản lý | Hiển thị lựa chọn Tất cả đơn vị quản lý. |
| 16  | Chọn tất cả trên trang | Checkbox \[N/A\] | I   | Đã chọn | Checkbox đầu bảng; ảnh đang thể hiện trạng thái được chọn. |
| 17  | Bảng danh sách tài sản | Table \[N/A\] | O   | N/A | Hiển thị mã, tên và số seri, loại tài sản, đơn vị/người sử dụng, nguyên giá, ngày đưa vào sử dụng, trạng thái. |
| 18  | Chọn tài sản thứ nhất | Checkbox \[N/A\] | I   | Đã chọn | Chọn tài sản TS-2024-00891 – Laptop Apple MacBook Pro 14 inch M3 Pro. |
| 19  | Chọn tài sản thứ hai | Checkbox \[N/A\] | I   | Đã chọn | Chọn tài sản TS-2024-00892 – Laptop Apple MacBook Pro 16 inch M3 Max. |
| 20  | Các dòng tài sản chưa chọn | Table rows \[N/A\] | O   | N/A | Các dòng tiếp theo không được chọn; hiển thị thông tin tài sản và trạng thái tương ứng. |
| 21  | Số bản ghi mỗi trang | Dropdown \[N/A\] | I   | 25  | Hiển thị 25 bản ghi mỗi trang trên tổng số 1.482 bản ghi. |
| 22  | Phân trang | Pagination \[N/A\] | I   | Trang 1 | Hiển thị điều hướng trang và số trang 1, 2, 3, …, 60. |

Bảng 55. Mô tả thành phần màn hình MH-01.11

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.71 | Sau khi Xuất PDF thành công (A1 của UC-01.4), hiển thị thông báo đã xuất tem QR và tệp PDF hoàn tất. |
| QT-01.72 | Thông báo tệp hiển thị tên tệp, dung lượng, trạng thái Hoàn tất và các thao tác Mở tệp, Hiển thị trong thư mục, Đóng. |
| QT-01.73 | Màn hình thể hiện 2 tài sản đang chọn và thông tin 2 tem QR đã được xuất PDF thành công; không suy ra tem đã được in trên giấy. |
| QT-01.74 | Xuất PDF tem QR không làm thay đổi mã định danh, thông tin hoặc trạng thái tài sản theo UC-01.4. |
| QT-01.75 | Danh sách vẫn cho phép tìm kiếm, lọc, chọn tài sản và phân trang như các điều khiển hiển thị. |
| QT-01.76 | Chỉ số tổng hợp và dữ liệu tài sản là các giá trị hiển thị trong ảnh; quy tắc tính toán và điều kiện lọc không được xác định thêm từ ảnh. |

Bảng 56. Quy tắc màn hình MH-01.11

**MH-01.12 – In QR lỗi máy in**

Hình 20. MH-01.12 – In QR lỗi máy in

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Danh sách tài sản chuẩn bị in | List \[N/A\] | O   | 2 tài sản | Hiển thị hai tài sản đã chọn: TS-LAP-2026-00013 và TS-MON-2026-00031, tên rút gọn và nhãn 'Chuẩn in'. |
| 2   | Bỏ tài sản khỏi danh sách | Button \[N/A\] | I   | N/A | Dấu X ở mỗi dòng dùng để bỏ tài sản tương ứng khỏi danh sách chuẩn bị in. |
| 3   | Giới hạn và định dạng tem | Text \[N/A\] | O   | N/A | Hiển thị 'Tối đa 100 tem mỗi lượt in' và 'Định dạng mã: Code-128 / QR v3'. |
| 4   | Nhóm chọn khổ tem | Label \[N/A\] | O   | N/A | Nhãn 'KHỔ TEM CHUẨN \*'. |
| 5   | Khổ 50 × 30 mm | Radio \[N/A\] | I   | 50 × 30 mm | Khổ đang được chọn, có nhãn 'Khuyên dùng', phù hợp laptop, linh kiện, thiết bị cầm tay. |
| 6   | Khổ 70 × 40 mm | Radio \[N/A\] | I   | N/A | Lựa chọn khổ tem cho bàn ghế, tủ kệ và máy móc cỡ trung bình. |
| 7   | Khổ A4 (Decal bế sẵn) | Radio \[N/A\] | I   | N/A | Lựa chọn in máy laser văn phòng, ghi 24 tem/trang. |
| 8   | Số tem mỗi tài sản | Text / read-only \[N/A\] | O   | 1 nhãn | Hiển thị 1 nhãn/tài sản và biểu tượng khóa. |
| 9   | Thông tin mã hóa QR | Info panel \[N/A\] | O   | N/A | Hiển thị URL định danh nội bộ https://qlts.corp/qr/{ma_ts}; ghi chú không chứa dữ liệu cá nhân nhạy cảm. |
| 10  | Xem trước tem in | Preview \[N/A\] | O   | N/A | Vùng xem trước gồm hai tem QR cho hai tài sản đang chọn. |
| 11  | Tỷ lệ hiển thị | Badge \[N/A\] | O   | 100% | Hiển thị 'Tỉ lệ hiển thị 100%'. |
| 12  | Tem tài sản Laptop | QR label \[N/A\] | O   | N/A | Tem hiển thị mã TS-LAP-2026-00013, tên Laptop Dell Latitude 5440, QR và thông tin phụ trên tem. |
| 13  | Tem tài sản Màn hình | QR label \[N/A\] | O   | N/A | Tem hiển thị mã TS-MON-2026-00031, tên Màn hình LG 27UL500, QR và thông tin phụ trên tem. |
| 14  | Kích thước tem thực | Text \[N/A\] | O   | 50 × 30 mm (300 DPI) | Hiển thị kích thước tem đang chọn và độ phân giải. |
| 15  | Phóng to | Link \[N/A\] | I   | N/A | Mở xem trước ở kích thước lớn hơn. |
| 16  | Trạng thái máy in mặc định | Status text \[N/A\] | O   | Zebra ZD421 | Hiển thị máy in Zebra ZD421 và trạng thái lỗi 'Mất kết nối / Hết giấy' màu đỏ. |
| 17  | Hủy | Button \[N/A\] | I   | N/A | Đóng phần in QR, không thay đổi hồ sơ tài sản (A2). |
| 18  | Xuất PDF | Button \[N/A\] | I   | N/A | Tạo tệp tem PDF để lưu thay cho in (A1). |
| 19  | Thử in lại | Button \[N/A\] | I   | N/A | Gửi lại yêu cầu gọi chức năng in khi máy in đang báo lỗi; không đồng nghĩa đã in giấy thành công. |

Bảng 57. Mô tả thành phần màn hình MH-01.12

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.77 | Màn hình hiển thị các tài sản đã chọn và phần xem trước tem QR tương ứng; mã tài sản hiện có được sử dụng, không sinh mã tài sản mới. |
| QT-01.78 | Người dùng có thể chọn khổ tem 50 × 30 mm, 70 × 40 mm hoặc A4 (Decal bế sẵn); ảnh đang chọn 50 × 30 mm. |
| QT-01.79 | Trạng thái máy in mặc định hiển thị “Zebra ZD421 (Mất kết nối / Hết giấy)” màu đỏ, phản ánh tình huống không thể in (E3). |
| QT-01.80 | Nút “Thử in lại” dùng để thử gửi lại yêu cầu in; hệ thống không được thông báo đã in giấy thành công nếu chưa có căn cứ. |
| QT-01.81 | Người dùng có thể chọn “Xuất PDF” để tạo tệp tem thay thế khi không thể gọi chức năng in (A1/E3). |
| QT-01.82 | Chọn “Hủy” đóng phần in, không thay đổi hồ sơ tài sản (A2). |
| QT-01.83 | Các thao tác tạo/gửi yêu cầu in được ghi nhật ký trong phạm vi hệ thống xác định được; thông tin và trạng thái tài sản không thay đổi. |
| QT-01.84 | Các chỉ số “tối đa 100 tem”, “1 nhãn/tài sản”, Code-128 / QR v3 và URL mã hóa được ghi theo giao diện; không suy diễn thêm quy tắc ngoài ảnh. |

Bảng 58. Quy tắc màn hình MH-01.12

### 3.3.6 CN-01.5 Xem danh sách tài sản

#### 3.3.6.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-01.5 |     |     |
| Tên UC | Xem danh sách tài sản |     |     |
| Mô tả UC | Hiển thị tập hồ sơ tài sản theo phạm vi quyền truy cập, gồm mã nhận diện, tên, loại và trạng thái hiện tại, để theo dõi và chọn tài sản xử lý. |     |     |
| Tác nhân chính | Nhân viên quản lý tài sản |     |     |
| Điều kiện kích hoạt | Chọn mục Quản lý danh sách tài sản. |     |     |
| Tiền điều kiện | Người dùng đã đăng nhập và có quyền xem danh sách tài sản. |     |     |
| Hậu điều kiện | Thành công: danh sách hoặc trạng thái không có dữ liệu được hiển thị; không thay đổi hồ sơ tài sản. |     |     |
| Luồng chính | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng chính | 1   | Chọn mục Quản lý danh sách tài sản. | Kiểm tra quyền xem và truy vấn dữ liệu tài sản chưa bị xóa theo phạm vi quyền. |
| Luồng chính | 2   | Xem danh sách. | Hiển thị các thông tin cơ bản như mã, tên, loại, số seri, trạng thái, ngày nhập và người ghi nhận; phân trang khi cần. |
| Luồng chính | 3   | Chọn trang khác hoặc thay đổi thứ tự sắp xếp. | Trả đúng tập hồ sơ cho trang hoặc thứ tự đã chọn, không sửa dữ liệu nguồn. |
| Luồng chính | 4   | Chọn một dòng hoặc một chức năng được phép thực hiện. | Hiển thị thông tin đã chọn hoặc chuyển đến chức năng tương ứng. |
| Luồng thay thế | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng thay thế | A1  | Danh sách trống. Ở bước 2, không có bản ghi thì hiển thị thông báo chưa có tài sản, không coi là lỗi. |     |
| Luồng thay thế | A2  | Tìm kiếm/lọc. Ở bước 2–3, chọn tìm kiếm/lọc thì chuyển sang UC-01.6 và nhận danh sách kết quả. |     |
| Luồng thay thế | A3  | Đổi trang. Ở bước 3, sau khi xem một trang, người dùng có thể chọn trang khác và lặp lại bước 3. |     |
| Luồng ngoại lệ | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng ngoại lệ | E1  | Không có quyền. Bước 1: báo truy cập bị từ chối; không trả dữ liệu tài sản. |     |
| Luồng ngoại lệ | E2  | Lỗi truy vấn. Bước 1–3: thông báo không tải được danh sách và cho phép thử lại. |     |
| Luồng ngoại lệ | E3  | Dữ liệu thay đổi trong lúc xem. Bước 4: khi thực hiện chức năng tiếp theo, kiểm tra lại tính hợp lệ của bản ghi; nếu không còn hợp lệ thì yêu cầu tải lại. |     |
| Quy tắc nghiệp vụ | BR-01.01, BR-01.05, BR-01.06, BR-01.10, BR-01.14, BR-01.15 |     |     |
| Mã AD | AD-01.5 |     |     |
| Mã giao diện | MH-01.13, MH-01.14, MH-01.15 |     |     |

Bảng 59. Đặc tả UC-01.5 – Xem danh sách tài sản

#### 3.3.6.2 Sơ đồ hoạt động

Hình 21. AD-01.5 – Xem danh sách tài sản

#### 3.3.6.3 Giao diện

**MH-01.13 – Danh sách tài sản**

Hình 22. MH-01.13 – Danh sách tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Thanh điều hướng và người dùng | Navigation \[N/A\] | O   | N/A | Hiển thị đường dẫn Trang chủ / Quản lý tài sản / Danh sách tài sản và tài khoản Nhân viên QLTS. |
| 2   | Tiêu đề và tổng số tài sản | Text \[N/A\] | O   | 248 tài sản | Hiển thị tên màn hình và tổng số tài sản. |
| 3   | In QR (2) | Button \[N/A\] | I   | 2   | In mã QR cho hai tài sản đang chọn (UC-01.4). |
| 4   | Thêm mới tài sản | Button \[N/A\] | I   | N/A | Mở chức năng thêm mới tài sản (UC-01.1). |
| 5   | Tìm theo mã, tên hoặc số serial | Text input \[N/A\] | I   | Trống | Nhập từ khóa tìm kiếm tài sản. |
| 6   | Danh mục | Dropdown \[N/A\] | I   | Tất cả danh mục | Lọc theo danh mục tài sản. |
| 7   | Trạng thái | Dropdown \[N/A\] | I   | Tất cả trạng thái | Lọc theo trạng thái tài sản. |
| 8   | Từ ngày | Date input \[N/A\] | I   | 01/09/2026 | Ngày bắt đầu khoảng ghi nhận. |
| 9   | Đến ngày | Date input \[N/A\] | I   | 15/10/2026 | Ngày kết thúc khoảng ghi nhận. |
| 10  | Tìm kiếm | Button \[N/A\] | I   | N/A | Thực hiện tra cứu theo các tiêu chí đã nhập (UC-01.6). |
| 11  | Xóa lọc | Button \[N/A\] | I   | N/A | Xóa các điều kiện lọc để trở về danh sách mặc định. |
| 12  | Hiển thị cả tài sản đã xóa | Checkbox \[N/A\] | I   | Chưa chọn | Tùy chọn hiển thị tài sản đã xóa, có chú thích chỉ dành cho vai trò được phép. |
| 13  | Thanh thông báo đã chọn | Selection bar \[N/A\] | O   | 2 tài sản | Hiển thị số tài sản được chọn. |
| 14  | In QR cho tài sản đã chọn | Button \[N/A\] | I   | N/A | Thực hiện in QR cho các tài sản được chọn. |
| 15  | Bỏ chọn | Button \[N/A\] | I   | N/A | Bỏ lựa chọn các tài sản đang được chọn. |
| 16  | Chọn tất cả | Checkbox \[N/A\] | I   | Đã chọn | Checkbox ở đầu bảng dùng để chọn các dòng tài sản. |
| 17  | Các cột bảng và sắp xếp | Table header \[N/A\] | I/O | N/A | Hiển thị các trường mã, tên, danh mục, số serial, trạng thái, ngày tạo, người tạo, tệp và thao tác; mã tài sản có điều khiển sắp xếp. |
| 18  | Hai tài sản đang chọn | Checkbox / row \[N/A\] | I/O | 2 dòng | Hai dòng đầu đang được chọn; thông tin hiển thị trong bảng. |
| 19  | Thông tin các dòng tài sản | Table rows \[N/A\] | O   | N/A | Hiển thị hồ sơ tài sản trong phạm vi quyền xem. |
| 20  | Thao tác từng dòng | Icon buttons \[N/A\] | I   | N/A | Các biểu tượng Sửa, In QR và Xóa trên mỗi dòng; quyền thực hiện cần kiểm tra theo UC tương ứng. |
| 21  | Phân trang | Pagination \[N/A\] | I/O | 248 bản ghi | Hiển thị số bản ghi và điều hướng các trang. |

Bảng 60. Mô tả thành phần màn hình MH-01.13

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.85 | Chỉ hiển thị tài sản chưa bị xóa thuộc phạm vi quyền xem của người dùng theo UC-01.5. |
| QT-01.86 | Danh sách hiển thị thông tin mã, tên, loại/danh mục, số serial, trạng thái, ngày ghi nhận và người ghi nhận; phân trang khi cần. |
| QT-01.87 | Cho phép đổi trang hoặc thay đổi thứ tự sắp xếp mà không thay đổi dữ liệu nguồn (A3). |
| QT-01.88 | Người dùng có thể chọn tìm kiếm/lọc để chuyển sang UC-01.6 và xem danh sách kết quả (A2). |
| QT-01.89 | Khi không có bản ghi, hiển thị trạng thái danh sách trống, không coi là lỗi (A1). |
| QT-01.90 | Nếu không có quyền xem, từ chối truy cập (E1); nếu lỗi tải dữ liệu, thông báo và cho phép thử lại (E2). |
| QT-01.91 | Trước khi thực hiện thao tác trên một tài sản, hệ thống kiểm tra lại bản ghi; nếu không còn hợp lệ, yêu cầu tải lại (E3). |
| QT-01.92 | Giao diện thể hiện hai tài sản được chọn, có thể bỏ chọn hoặc gọi chức năng In QR tương ứng. |
| QT-01.93 | Tùy chọn “Hiển thị cả tài sản đã xóa” có trên giao diện nhưng khác với phạm vi mặc định “chưa bị xóa” của UC-01.5; cần thống nhất điều kiện quyền trước khi triển khai. |

Bảng 61. Quy tắc màn hình MH-01.13

**MH-01.14 – Danh sách tài sản trống**

Hình 23. MH-01.14 – Danh sách tài sản trống

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Menu Quản lý tài sản | Navigation item \[N/A\] | I   | Đang chọn | Mục điều hướng tới quản lý danh sách tài sản. |
| 2   | Đường dẫn điều hướng | Breadcrumb \[N/A\] | O   | Trang chủ / Quản lý tài sản / Danh sách tài sản | Hiển thị vị trí màn hình trong hệ thống. |
| 3   | Tài khoản đăng nhập | User information \[N/A\] | O   | Nguyễn Văn An – Nhân viên QLTS | Hiển thị người dùng hiện tại và vai trò. |
| 4   | Thẻ Tổng nguyên giá | Summary card \[N/A\] | O   | 0 ₫ | Hiển thị tổng nguyên giá tài sản trong phạm vi được xem. |
| 5   | Thẻ Đang sử dụng | Summary card \[N/A\] | O   | 0   | Hiển thị số tài sản ở trạng thái đang sử dụng. |
| 6   | Thẻ Chưa cấp phát | Summary card \[N/A\] | O   | 0   | Hiển thị số tài sản chưa cấp phát. |
| 7   | Thẻ Đang sửa chữa / bảo trì | Summary card \[N/A\] | O   | 0   | Hiển thị số tài sản đang sửa chữa hoặc bảo trì. |
| 8   | Tiêu đề Danh sách tài sản | Heading \[N/A\] | O   | Danh sách tài sản | Xác định khu vực hiển thị danh sách tài sản. |
| 9   | Tổng số tài sản | Text \[N/A\] | O   | 0 tài sản | Hiển thị tổng số bản ghi thuộc danh sách. |
| 10  | Biểu tượng trạng thái trống | Icon \[N/A\] | O   | N/A | Biểu tượng minh họa khi chưa có tài sản. |
| 11  | Thông báo chưa có tài sản | Empty-state text \[N/A\] | O   | Chưa có tài sản nào | Thông báo không có tài sản nào được ghi nhận. |
| 12  | Mô tả trạng thái trống | Text \[N/A\] | O   | Hiện chưa có tài sản nào được ghi nhận. | Giải thích trạng thái không có dữ liệu. |
| 13  | Thông báo dữ liệu phân bổ | Information notice \[N/A\] | O   | N/A | Dữ liệu tài sản sẽ tự động hiển thị khi được phân bổ vào đơn vị của bạn. |

Bảng 62. Mô tả thành phần màn hình MH-01.14

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.94 | Khi người dùng có quyền xem nhưng danh sách không có bản ghi, hiển thị trạng thái trống theo luồng A1 của UC-01.5, không coi là lỗi. |
| QT-01.95 | Tổng số tài sản hiển thị 0; các thẻ tổng quan trên màn hình đều hiển thị giá trị 0. |
| QT-01.96 | Hiển thị thông báo “Chưa có tài sản nào” và “Hiện chưa có tài sản nào được ghi nhận.” |
| QT-01.97 | Hiển thị thông tin dữ liệu tài sản sẽ xuất hiện khi được phân bổ vào đơn vị của người dùng, theo đúng nội dung giao diện. |
| QT-01.98 | UC-01.5 chỉ truy vấn các tài sản chưa bị xóa trong phạm vi quyền xem; thao tác xem không làm thay đổi hồ sơ tài sản. |
| QT-01.99 | Nếu không có quyền xem, từ chối truy cập (E1); nếu lỗi truy vấn, thông báo không tải được và cho phép thử lại (E2), không sử dụng trạng thái trống để thay cho thông báo lỗi. |
| QT-01.100 | Ảnh giao diện không có bảng bản ghi, nút thêm mới, tìm kiếm, sắp xếp hoặc phân trang; không bổ sung các thành phần không xuất hiện trong nguồn. |

Bảng 63. Quy tắc màn hình MH-01.14

**MH-01.15 – Lỗi tải danh sách tài sản**

Hình 24. MH-01.15 – Lỗi tải danh sách tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Đường dẫn điều hướng | Breadcrumb \[N/A\] | O   | N/A | Hiển thị đường dẫn đến danh sách tài sản. |
| 2   | Thông tin tài khoản | User information \[N/A\] | O   | Nguyễn Văn An | Hiển thị tài khoản và vai trò Nhân viên QLTS. |
| 3   | Thông báo lỗi kết nối | Error alert \[N/A\] | O   | ERR_NETWORK_TIMEOUT (504) | Hiển thị lỗi kết nối máy chủ và hướng dẫn thử tải lại. |
| 4   | Đóng thông báo lỗi | Icon button \[N/A\] | I   | N/A | Đóng thanh cảnh báo lỗi kết nối. |
| 5   | Tiêu đề màn hình | Heading \[N/A\] | O   | Danh sách tài sản | Tên chức năng hiện tại. |
| 6   | Trạng thái mất kết nối và tổng số | Status text \[N/A\] | O   | \-- tài sản | Báo mất kết nối; tổng số chưa xác định vì lỗi truy vấn. |
| 7   | In mã QR | Button \[N/A\] | I   | N/A | Nút truy cập chức năng In mã QR thể hiện trên giao diện. |
| 8   | Thêm mới tài sản | Button \[N/A\] | I   | N/A | Chuyển đến chức năng thêm mới tài sản. |
| 9   | Ô từ khóa tìm kiếm | Text input \[N/A\] | I   | Trống | Nhập mã hoặc tên tài sản cần tìm. |
| 10  | Danh mục | Dropdown \[N/A\] | I   | Tất cả danh mục | Chọn danh mục để lọc. |
| 11  | Trạng thái | Dropdown \[N/A\] | I   | Tất cả trạng thái | Chọn trạng thái để lọc. |
| 12  | Khoảng ngày mua | Date range \[N/A\] | I   | Trống | Chọn khoảng ngày mua để lọc. |
| 13  | Hiển thị tài sản đã xóa / lưu trữ | Checkbox \[N/A\] | I   | Chưa chọn | Tùy chọn có trên giao diện; cần đối chiếu phạm vi UC-01.5. |
| 14  | Tìm kiếm | Button \[N/A\] | I   | N/A | Gọi chức năng tìm kiếm/lọc UC-01.6. |
| 15  | Đặt lại điều kiện | Icon button \[N/A\] | I   | N/A | Đặt lại các tiêu chí lọc. |
| 16  | Số điều kiện lọc | Status text \[N/A\] | O   | 0 điều kiện | Hiển thị số điều kiện lọc đang áp dụng. |
| 17  | Tiêu đề bảng tài sản | Table header \[N/A\] | O   | N/A | Hiển thị cấu trúc các cột danh sách tài sản, không có dữ liệu dòng. |
| 18  | Trạng thái không tải được dữ liệu | Error empty state \[N/A\] | O   | Không thể tải dữ liệu | Hiển thị thông báo lỗi truy vấn, khác với danh sách trống A1. |
| 19  | Thông tin lỗi kỹ thuật | Error detail \[N/A\] | O   | HTTP 504 | Thông báo Gateway Timeout và máy chủ qlts-prod-node-03. |
| 20  | Tải lại danh sách | Button \[N/A\] | I   | N/A | Thử tải lại danh sách tài sản theo ngoại lệ E2. |
| 21  | Báo cáo sự cố / Nhật ký kiểm tra | Text links \[N/A\] | I   | N/A | Liên kết Báo cáo sự cố cho IT và Xem nhật ký kiểm tra. |

Bảng 64. Mô tả thành phần màn hình MH-01.15

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.101 | Nếu truy vấn danh sách lỗi tại bước 1–3, hiển thị thông báo không tải được danh sách và cho phép thử lại (E2). |
| QT-01.102 | Trường hợp này là lỗi truy vấn, không được hiểu là không có tài sản (A1); tổng số hiển thị “--” thay vì 0. |
| QT-01.103 | Hiển thị mã lỗi ERR_NETWORK_TIMEOUT (504) và chi tiết Gateway Timeout (HTTP 504) như giao diện. |
| QT-01.104 | Chọn Tải lại danh sách để thực hiện lại việc truy vấn; chỉ hiển thị dữ liệu khi tải thành công. |
| QT-01.105 | Dù bảng còn tiêu đề các cột, không hiển thị các bản ghi khi dữ liệu chưa được tải. |
| QT-01.106 | Nếu không có quyền xem, từ chối truy cập và không trả dữ liệu (E1); không thay lỗi quyền bằng thông báo lỗi kết nối. |
| QT-01.107 | Giao diện có tùy chọn tài sản đã xóa/lưu trữ, trong khi UC-01.5 chỉ yêu cầu dữ liệu chưa bị xóa theo phạm vi quyền; cần xác nhận nghiệp vụ. |
| QT-01.108 | Các liên kết Báo cáo sự cố cho IT và Xem nhật ký kiểm tra có trên giao diện nhưng chưa được UC-01.5 đặc tả luồng xử lý chi tiết. |

Bảng 65. Quy tắc màn hình MH-01.15

### 3.3.7 CN-01.6 Tìm kiếm và lọc tài sản

#### 3.3.7.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-01.6 |     |     |
| Tên UC | Tìm kiếm/lọc tài sản |     |     |
| Mô tả UC | Tìm các tài sản thuộc phạm vi quyền xem theo từ khóa và điều kiện lọc, hỗ trợ kiểm tra trùng và chọn đúng tài sản cần thao tác. |     |     |
| Tác nhân chính | Nhân viên quản lý tài sản |     |     |
| Điều kiện kích hoạt | Tại danh sách tài sản, nhập từ khóa và/hoặc chọn bộ lọc loại, trạng thái, khoảng ngày ghi nhận. |     |     |
| Tiền điều kiện | Nhân viên đã đăng nhập, có quyền xem và đang ở danh sách tài sản. |     |     |
| Hậu điều kiện | Thành công: trả về danh sách thỏa điều kiện hoặc thông báo không có kết quả; dữ liệu tài sản không thay đổi. |     |     |
| Luồng chính | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng chính | 1   | Tại danh sách tài sản, nhập từ khóa và/hoặc chọn bộ lọc loại, trạng thái, khoảng ngày ghi nhận. | Tiếp nhận điều kiện tra cứu. |
| Luồng chính | 2   | Chọn Tìm kiếm hoặc Áp dụng bộ lọc. | Kiểm tra các điều kiện, đặc biệt khoảng ngày từ–đến. |
| Luồng chính | 3   | —   | Truy vấn tài sản chưa bị xóa trong phạm vi quyền; kết hợp các điều kiện đã nhập. |
| Luồng chính | 4   | Xem kết quả. | Hiển thị danh sách phù hợp và tổng số kết quả; cho phép chọn tài sản để tiếp tục thao tác. |
| Luồng chính | 5   | Kết thúc hoặc điều chỉnh tiêu chí. | Giữ nguyên hồ sơ tài sản; nếu nhập lại tiêu chí thì thực hiện lại từ bước 1. |
| Luồng thay thế | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng thay thế | A1  | Không có tiêu chí. Ở bước 2, người dùng không nhập từ khóa/bộ lọc; hệ thống trả danh sách mặc định trong phạm vi quyền. |     |
| Luồng thay thế | A2  | Không tìm thấy. Ở bước 4, không có tài sản phù hợp thì hiển thị thông báo không tìm thấy và tổng kết quả bằng 0; cho phép sửa tiêu chí. |     |
| Luồng thay thế | A3  | Xóa bộ lọc. Ở bước 5, chọn Xóa bộ lọc; hệ thống bỏ điều kiện và trở lại danh sách mặc định UC-01.5. |     |
| Luồng ngoại lệ | Bước / Mã | Hành động tác nhân / Tình huống | Phản hồi hệ thống / Xử lý |
| Luồng ngoại lệ | E1  | Khoảng ngày sai. Bước 2: nếu từ ngày lớn hơn đến ngày thì hiển thị lỗi, không truy vấn và yêu cầu sửa tiêu chí. |     |
| Luồng ngoại lệ | E2  | Không truy vấn được dữ liệu. Bước 3: thông báo lỗi tải kết quả, giữ điều kiện tìm kiếm để thử lại. |     |
| Luồng ngoại lệ | E3  | Không có quyền xem. Bước 3: từ chối và không trả dữ liệu ngoài phạm vi quyền. |     |
| Quy tắc nghiệp vụ | BR-01.01, BR-01.06, BR-01.10, BR-01.11, BR-01.14, BR-01.15 |     |     |
| Mã AD | AD-01.6 |     |     |
| Mã giao diện | MH-01.16, MH-01.17, MH-01.18 |     |     |

Bảng 66. Đặc tả UC-01.6 – Tìm kiếm và lọc tài sản

#### 3.3.7.2 Sơ đồ hoạt động

Hình 25. AD-01.6 – Tìm kiếm và lọc tài sản

#### 3.3.7.3 Giao diện

**MH-01.16 – Tìm kiếm và lọc tài sản**

Hình 26. MH-01.16 – Tìm kiếm và lọc tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Tiêu đề và tổng kết quả | Text / Badge \[N/A\] | O   | N/A | Hiển thị Danh sách tài sản; 2 kết quả và số tài sản khớp điều kiện. |
| 2   | Nút In QR | Button \[N/A\] | I   | N/A | Nút In QR đang vô hiệu hóa khi chưa chọn tài sản. |
| 3   | Nút Thêm mới tài sản | Button \[N/A\] | I   | N/A | Đi đến chức năng thêm mới tài sản. |
| 4   | Từ khóa tìm kiếm | Text input \[N/A\] | I   | laptop | Ô nhập từ khóa; đang có giá trị laptop; tra cứu theo mã, tên hoặc số serial theo đặc tả UC-01.6. |
| 5   | Danh mục tài sản | Dropdown \[N/A\] | I   | Laptop | Danh sách chọn danh mục, ảnh đang lọc Laptop. |
| 6   | Trạng thái sử dụng | Dropdown \[N/A\] | I   | Tất cả trạng thái | Danh sách chọn trạng thái sử dụng; ảnh đang chọn Tất cả trạng thái. |
| 7   | Thời gian ghi nhận | Date range \[N/A\] | I   | N/A | Chọn khoảng thời gian ghi nhận từ ngày đến ngày; nếu từ ngày lớn hơn đến ngày thì báo lỗi E1. |
| 8   | Hiển thị cả tài sản đã xóa | Checkbox \[N/A\] | I   | Không chọn | Ô checkbox có nhãn hiển thị cả tài sản đã xóa; ảnh đang để không chọn. Cần đối chiếu đặc tả vì UC chỉ truy vấn tài sản chưa xóa. |
| 9   | Nút Xóa bộ lọc | Button \[N/A\] | I   | N/A | Bỏ các điều kiện lọc và trở về danh sách mặc định (A3). |
| 10  | Nút Tìm kiếm | Button \[N/A\] | I   | N/A | Áp dụng các tiêu chí tìm kiếm/lọc trên màn hình. |
| 11  | Nhãn Đang lọc | Label \[N/A\] | O   | N/A | Hiển thị khu vực tổng hợp các bộ lọc đang áp dụng. |
| 12  | Bộ lọc danh mục đang áp dụng | Filter chip \[N/A\] | I/O | Danh mục: Laptop | Hiển thị nhãn danh mục hiện hành; biểu tượng x trên nhãn cho phép bỏ riêng điều kiện. |
| 13  | Bộ lọc từ khóa đang áp dụng | Filter chip \[N/A\] | I/O | Từ khóa: laptop | Hiển thị nhãn từ khóa hiện hành; biểu tượng x trên nhãn cho phép bỏ riêng điều kiện. |
| 14  | Xóa tất cả điều kiện lọc | Link \[N/A\] | I   | N/A | Xóa toàn bộ tiêu chí đang áp dụng để trở lại danh sách mặc định. |
| 15  | Bảng kết quả tìm kiếm | Table \[N/A\] | O   | N/A | Hiển thị các cột mã, tên, danh mục, serial, trạng thái, ngày ghi nhận, người ghi nhận, số lần in QR và thao tác. |
| 16  | Tài sản kết quả thứ nhất | Table row \[N/A\] | O   | N/A | TS-LAP-2026-00012 – Laptop Dell Latitude 5440; trạng thái Chưa cấp phát. |
| 17  | Tài sản kết quả thứ hai | Table row \[N/A\] | O   | N/A | TS-LAP-2026-00009 – Laptop Lenovo ThinkPad T14; trạng thái Đang sử dụng. |
| 18  | Các nút thao tác từng dòng | Row actions \[N/A\] | I   | N/A | Các thao tác Sửa, In QR, Xóa gắn với từng dòng; khả dụng tùy quyền và trạng thái. |
| 19  | Thông tin phân trang | Text \[N/A\] | O   | 1–2 trên 2 bản ghi | Hiển thị số bản ghi trên trang so với tổng số bản ghi tìm được. |
| 20  | Chuyển trang | Pagination \[N/A\] | I   | Trang 1 | Điều khiển chuyển trang kết quả tìm kiếm. |
| 21  | Thanh điều hướng | Navigation \[N/A\] | I   | Quản lý tài sản | Menu chức năng chính, đang ở Quản lý tài sản. |
| 22  | Đường dẫn điều hướng | Breadcrumb \[N/A\] | O   | N/A | Hiển thị vị trí Trang chủ / Quản lý tài sản / Danh sách tài sản. |

Bảng 67. Mô tả thành phần màn hình MH-01.16

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.109 | Người dùng có quyền xem, nhập từ khóa và/hoặc bộ lọc danh mục, trạng thái, thời gian ghi nhận và áp dụng tìm kiếm. |
| QT-01.110 | Chỉ truy vấn tài sản chưa xóa trong phạm vi quyền theo UC-01.6; checkbox “Hiển thị cả tài sản đã xóa” có mặt trên UI nhưng chưa được UC này quy định, cần đối chiếu trước khi triển khai. |
| QT-01.111 | Nếu không có tiêu chí tìm kiếm, hệ thống trả về danh sách mặc định (A1). |
| QT-01.112 | Nếu khoảng ngày không hợp lệ (từ ngày sau đến ngày), báo lỗi và không truy vấn (E1). |
| QT-01.113 | Nếu không có bản ghi phù hợp, hiển thị 0 kết quả và thông báo không tìm thấy; cho phép chỉnh sửa tiêu chí (A2). |
| QT-01.114 | Nếu lỗi truy vấn, giữ lại điều kiện để thử lại (E2); nếu không có quyền, từ chối trả dữ liệu (E3). |
| QT-01.115 | Xóa bộ lọc hoặc Xóa tất cả để quay lại danh sách mặc định UC-01.5 (A3). |
| QT-01.116 | Kết quả hiển thị thông tin cơ bản và tổng số bản ghi; tìm kiếm/lọc không làm thay đổi hồ sơ tài sản. |

Bảng 68. Quy tắc màn hình MH-01.16

**MH-01.17 – Tìm kiếm không có kết quả**

Hình 27. MH-01.17 – Tìm kiếm không có kết quả

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Tiêu đề và tổng kết quả | Text \[N/A\] | O   | 0 tài sản | Hiển thị Danh sách tài sản và tổng số kết quả hiện tại. |
| 2   | Nút In QR | Button \[N/A\] | I   | Vô hiệu hóa | Không thể in QR khi không có tài sản được chọn. |
| 3   | Nút Thêm mới tài sản | Button \[N/A\] | I   | N/A | Chuyển sang chức năng thêm mới tài sản. |
| 4   | Ô nhập từ khóa | Text input \[N/A\] | I   | xyz123 | Tìm theo mã hoặc tên tài sản. |
| 5   | Danh mục | Dropdown \[N/A\] | I   | Tất cả danh mục | Chọn danh mục cần lọc. |
| 6   | Trạng thái | Dropdown \[N/A\] | I   | Tất cả trạng thái | Chọn trạng thái cần lọc. |
| 7   | Từ ngày | Date input \[N/A\] | I   | N/A | Nhập ngày bắt đầu khoảng ghi nhận. |
| 8   | Đến ngày | Date input \[N/A\] | I   | N/A | Nhập ngày kết thúc khoảng ghi nhận. |
| 9   | Tìm kiếm | Button \[N/A\] | I   | N/A | Áp dụng từ khóa và điều kiện lọc. |
| 10  | Xóa bộ lọc | Button \[N/A\] | I   | N/A | Xóa tiêu chí và quay lại danh sách mặc định. |
| 11  | Hiển thị tài sản đã xóa | Checkbox \[N/A\] | I   | Chưa chọn | Tùy chọn hiển thị tài sản đã xóa có trong giao diện; cần đối chiếu phạm vi UC. |
| 12  | Điều kiện lọc đang áp dụng | Filter chip \[N/A\] | O   | Từ khóa: xyz123 | Hiển thị điều kiện từ khóa đang được áp dụng, có nút bỏ riêng. |
| 13  | Bảng danh sách tài sản | Table \[N/A\] | O   | Không có dòng dữ liệu | Hiển thị các cột mã, tên, danh mục, trạng thái, người sử dụng, bộ phận, nguyên giá và thao tác. |
| 14  | Thông báo không tìm thấy | Empty state \[N/A\] | O   | Không tìm thấy tài sản phù hợp | Hiển thị thông báo khi không có kết quả và gợi ý thay đổi tiêu chí. |
| 15  | Xóa bộ lọc tại trạng thái trống | Button \[N/A\] | I   | N/A | Xóa bộ lọc trực tiếp từ vùng không có kết quả. |
| 16  | Từ khóa gợi ý | Buttons \[N/A\] | I   | MacBook Pro; Dell XPS; Mã TS-2024 | Các nút gợi ý tìm kiếm thể hiện trong giao diện. |
| 17  | Thông tin kết quả và phân trang | Pagination \[N/A\] | O   | 0 kết quả | Hiển thị số kết quả và điều hướng trang. |

Bảng 69. Mô tả thành phần màn hình MH-01.17

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.117 | Khi không có tài sản phù hợp với điều kiện tìm kiếm, hiển thị thông báo không tìm thấy và tổng số kết quả bằng 0 (A2). |
| QT-01.118 | Từ khóa xyz123 đang được áp dụng; các bộ lọc danh mục, trạng thái và ngày ghi nhận vẫn hiển thị để người dùng điều chỉnh. |
| QT-01.119 | Người dùng có thể sửa từ khóa/điều kiện và chọn Tìm kiếm để truy vấn lại trong phạm vi quyền. |
| QT-01.120 | Chọn Xóa bộ lọc để bỏ điều kiện và trở về danh sách mặc định (A3). |
| QT-01.121 | Nếu khoảng ngày từ lớn hơn đến, hiển thị lỗi và không thực hiện truy vấn (E1). |
| QT-01.122 | Nếu lỗi truy vấn, giữ tiêu chí để thử lại (E2); nếu không có quyền xem, từ chối trả dữ liệu (E3). |
| QT-01.123 | Không có kết quả thì bảng không hiển thị bản ghi và nút In QR bị vô hiệu hóa; thao tác tìm kiếm không thay đổi hồ sơ tài sản. |
| QT-01.124 | Giao diện có tùy chọn “Hiển thị cả tài sản đã xóa”; đặc tả UC-01.6 hiện quy định truy vấn tài sản chưa bị xóa, nên cần xác nhận phạm vi tùy chọn này trước khi triển khai. |

Bảng 70. Quy tắc màn hình MH-01.17

**MH-01.18 – Tìm kiếm lỗi khoảng ngày**

Hình 28. MH-01.18 – Tìm kiếm lỗi khoảng ngày

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Thông báo lỗi khoảng ngày | Alert \[N/A\] | O   | N/A | Ngày bắt đầu 31/10/2026 lớn hơn ngày kết thúc 01/10/2026; hệ thống giữ lại kết quả trước đó. |
| 2   | Tiêu đề và tổng số tài sản | Text \[N/A\] | O   | 248 tài sản | Hiển thị Danh sách tài sản và tổng số tài sản. |
| 3   | Nút In mã QR | Button \[N/A\] | I   | N/A | Mở chức năng in mã QR. |
| 4   | Nút Thêm mới tài sản | Button \[N/A\] | I   | N/A | Chuyển sang thêm mới tài sản. |
| 5   | Từ khóa tìm kiếm | Text input \[N/A\] | I   | Trống | Nhập từ khóa tìm kiếm tài sản. |
| 6   | Bộ lọc Danh mục | Dropdown \[N/A\] | I   | Tất cả danh mục | Chọn danh mục tài sản. |
| 7   | Bộ lọc Trạng thái | Dropdown \[N/A\] | I   | Tất cả trạng thái | Chọn trạng thái tài sản. |
| 8   | Từ ngày | Date input \[N/A\] | I   | 31/10/2026 | Ngày bắt đầu không hợp lệ so với ngày kết thúc. |
| 9   | Đến ngày | Date input \[N/A\] | I   | 01/10/2026 | Ngày kết thúc đang nhỏ hơn ngày bắt đầu. |
| 10  | Lỗi kiểm tra khoảng ngày | Validation text \[N/A\] | O   | N/A | Hiển thị lỗi Từ ngày không được lớn hơn Đến ngày. |
| 11  | Hiển thị tài sản đã xóa | Checkbox \[N/A\] | I   | Chưa chọn | Tùy chọn trên giao diện; cần đối chiếu phạm vi đặc tả UC-01.6. |
| 12  | Xóa bộ lọc | Button \[N/A\] | I   | N/A | Xóa điều kiện lọc và về danh sách mặc định (A3). |
| 13  | Tìm kiếm | Button \[N/A\] | I   | N/A | Áp dụng tiêu chí; không truy vấn khi khoảng ngày không hợp lệ (E1). |
| 14  | Tiêu đề bảng và số kết quả | Text \[N/A\] | O   | 8 bản ghi khớp | Kết quả truy vấn trước đó được giữ lại. |
| 15  | Bảng kết quả tài sản | Table \[N/A\] | O   | 8 dòng đang hiển thị | Hiển thị mã, tên, danh mục, serial, trạng thái, ngày tạo, người tạo, tệp và thao tác. |
| 16  | Thao tác trên từng tài sản | Icon buttons \[N/A\] | I   | N/A | Các biểu tượng sửa, QR, xóa xuất hiện trên từng dòng. |
| 17  | Phân trang | Pagination \[N/A\] | I   | 20 hàng/trang | Hiển thị số hàng và điều hướng trang theo dữ liệu trước đó. |

Bảng 71. Mô tả thành phần màn hình MH-01.18

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-01.125 | Nếu Từ ngày (31/10/2026) lớn hơn Đến ngày (01/10/2026), hệ thống thông báo lỗi khoảng ngày và không thực hiện truy vấn mới (E1). |
| QT-01.126 | Thông báo lỗi hiển thị ở đầu màn hình và ngay dưới hai ô nhập ngày; giữ nguyên tiêu chí để người dùng chỉnh sửa. |
| QT-01.127 | Khi tiêu chí ngày không hợp lệ, giao diện tiếp tục hiển thị kết quả tìm kiếm trước đó thay vì coi là kết quả truy vấn mới. |
| QT-01.128 | Người dùng sửa khoảng ngày và chọn Tìm kiếm để thực hiện lại từ bước 1–2 của UC-01.6. |
| QT-01.129 | Chọn Xóa bộ lọc để bỏ điều kiện và trở về danh sách mặc định (A3). |
| QT-01.130 | Bảng hiển thị thông tin các tài sản và các thao tác tương ứng theo quyền; việc tìm kiếm/lọc không thay đổi hồ sơ tài sản. |
| QT-01.131 | Giao diện có lựa chọn hiển thị tài sản đã xóa, trong khi UC-01.6 chỉ quy định truy vấn tài sản chưa bị xóa; cần xác nhận trước khi triển khai. |

Bảng 72. Quy tắc màn hình MH-01.18

### 3.3.8 CN-02.1 Lập phiếu yêu cầu cấp phát tài sản

#### 3.3.8.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-02.1 |     |     |
| Tên UC | Lập phiếu yêu cầu cấp phát tài sản |     |     |
| Mô tả UC | Cho phép nhân viên lập yêu cầu cấp phát tài sản theo nhu cầu cho cá nhân hoặc nhân viên mới |     |     |
| Tác nhân chính | Nhân viên |     |     |
| Điều kiện kích hoạt | Người dùng lựa chọn "Cấp phát tài sản trên thanh sidebar" |     |     |
| Tiền điều kiện | Tác nhân đã đăng nhập vào hệ thống  <br>Tác nhân đã được phân quyền |     |     |
| Hậu điều kiện | Phiếu yêu cầu cấp phát được gửi tới cho nhân viên quản lý tài sản  <br>Hệ thống ghi lại lịch sử thay đổi |     |     |
| Luồng chính | Bước | Hành động tác nhân | Phản hồi hệ thống |
|     | 1   | Người dùng click vào button "Tạo mới" | Hiển thị form tạo phiếu yêu cầu cấp phát tài sản mới |
|     | 2   | Người dùng điền đầy đủ thông tin vào form yêu cầu cấp phát tài sản mới | N/A. |
|     | 3   | Người dùng click vào button "Gửi phiếu" | Hệ thống validate -> Lưu vào database  <br>Gửi thông báo có yêu cầu cấp phát mới cho Người dùng quản lý tài sản |
| Luồng thay thế | 1A  | Người dùng click vào 1 bản ghi phiếu yêu cầu cấp phát | Hiển thị chi tiết thông tin yêu cầu cấp phát |
|     | 1B.1 | Người dùng click vào tùy chọn của 1 bản ghi bất kỳ | Hiển thị các lựa chọn: Sửa phiếu, thu hồi phiếu, in phiếu, xem lý do từ chối, xem chi tiết. |
|     | 1B.1a | Người dùng click vào button "Sửa phiếu" | Hệ thống hiển thị form phiếu yêu cầu cấp phát mới và hiển thị đầy đủ thông tin đã điền trước đó |
|     | 1B.1b | Người dùng click vào button "Thu hồi" | Hệ thống kiểm tra trạng thái hiện phiếu và chuyển đổi trạng thái của thành "Thu hồi" |
|     | 1B.1c | Người dùng click vào button "In phiếu" | Hệ thống xuất phiếu theo mẫu, định dạng PDF |
|     | 1B.1d | Người dùng click vào button "Xem lý do từ chối" | Hệ thống hiển thị PopUp kèm lý do từ chối. |
|     | 1B.1e | Người dùng click vào button "Xem chi tiết" | Hệ thống hiển thị chi tiết phiếu yêu cầu cấp phát |
|     | 3A  | Người dùng điền thiếu thông tin | Hệ thống thông báo ở các trường chưa nhập |
| Luồng ngoại lệ | E1  | Người dùng chọn “Sửa phiếu” nhưng phiếu đã được duyệt, đã thu hồi hoặc đang được xử lý. | Hệ thống từ chối thao tác và thông báo phiếu không còn ở trạng thái cho phép chỉnh sửa. |
|     | E2  | Người dùng chọn “Thu hồi phiếu” nhưng phiếu đã được duyệt hoặc đã hoàn tất cấp phát. | Hệ thống không cho phép thu hồi và thông báo lý do không thể thực hiện thao tác. |
|     | E3  | Người dùng chọn “In phiếu” nhưng xảy ra lỗi khi tạo tệp PDF. | Hệ thống thông báo không thể xuất phiếu tại thời điểm hiện tại; dữ liệu phiếu không bị thay đổi. |
| Quy tắc nghiệp vụ | BR-02.01, BR-02.02, BR-02.03, BR-02.04, BR-02.05, BR-02.06 |     |     |
| Mã AD | AD-02.1 |     |     |
| Mã giao diện | MH-02.01, MH-02.02, MH-02.03, MH-02.04 |     |     |

Bảng 73. Đặc tả UC-02.1 – Lập phiếu yêu cầu cấp phát tài sản

#### 3.3.8.2 Sơ đồ hoạt động

Hình 29. AD-02.1 – Lập phiếu yêu cầu cấp phát

#### 3.3.8.3 Giao diện

**MH-02.01 – Danh sách phiếu yêu cầu của nhân viên**

Hình 30. MH-02.01 – Danh sách phiếu yêu cầu của nhân viên

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Logo và tên phần mềm | Image + Label \[N/A\] | O   | BA Asset; QUẢN LÝ TÀI SẢN | Hiển thị logo, tên và dòng mô tả phần mềm từ cấu hình nhận diện hệ thống. Logo giữ đúng tỷ lệ, không bị kéo giãn. Người dùng không chỉnh sửa tại màn hình này. |
| 2   | Tiêu đề nhóm chức năng | Label \[N/A\] | O   | KHÔNG GIAN LÀM VIỆC | Hiển thị cố định phía trên nhóm menu nghiệp vụ trên sidebar. Không nhận dữ liệu nhập. |
| 3   | Menu “Tổng quan” | Menu item \[N/A\] | I   | Tổng quan | Nhấn để chuyển đến màn hình Tổng quan của nhân viên. Không nhập văn bản; không áp dụng kiểm tra trùng hoặc bắt buộc. |
| 4   | Menu “Tài sản của tôi” | Menu item \[N/A\] | I   | Tài sản của tôi | Nhấn để mở danh sách tài sản được cấp cho nhân viên đang đăng nhập. Phạm vi dữ liệu được xác định theo tài khoản và quyền truy cập. |
| 5   | Menu “Cấp phát tài sản” | Menu item \[N/A\] | I   | Cấp phát tài sản | Nhấn để mở màn hình “Phiếu yêu cầu cấp phát của tôi”. Tại màn hình hiện tại, menu được tô nền xanh nhạt, chữ và biểu tượng màu xanh để thể hiện đang được chọn. |
| 6   | Nút mở/thu gọn menu con | Icon button \[N/A\] | I   | N/A | Nhấn để mở hoặc thu gọn các mục con của “Cấp phát tài sản”. Biểu tượng thay đổi theo trạng thái mở/đóng. Trên ảnh, nhóm đang mở và hiển thị mục “Bàn giao tài sản”. |
| 7   | Menu con “Bàn giao tài sản” | Submenu item \[N/A\] | I   | Bàn giao tài sản | Hiển thị thụt lề dưới “Cấp phát tài sản”. Nhấn để mở màn hình bàn giao tài sản mà nhân viên có quyền truy cập. Chỉ hiển thị khi nhóm menu cha được mở. |
| 8   | Menu “Thu hồi tài sản” | Menu item \[N/A\] | I   | Thu hồi tài sản | Nhấn để chuyển đến màn hình nghiệp vụ thu hồi tài sản. Việc hiển thị menu và truy cập chức năng tuân theo phân quyền tài khoản. |
| 9   | Menu “Điều chuyển tài sản” | Menu item \[N/A\] | I   | Điều chuyển tài sản | Nhấn để chuyển đến màn hình nghiệp vụ điều chuyển tài sản trong phạm vi được phân quyền. Không nhập dữ liệu trực tiếp trên menu. |
| 10  | Menu “Báo hỏng / Bảo trì” | Menu item \[N/A\] | I   | Báo hỏng / Bảo trì | Nhấn để mở chức năng báo hỏng hoặc theo dõi bảo trì tài sản của nhân viên. Các thao tác trong màn hình đích tuân theo quyền người dùng. |
| 11  | Menu “Trợ giúp” | Menu item \[N/A\] | I   | Trợ giúp | Nhấn để mở nội dung hướng dẫn sử dụng hoặc khu vực trợ giúp được cấu hình cho hệ thống. Không yêu cầu nhập dữ liệu trước khi mở. |
| 12  | Khu vực tài khoản trên sidebar | Avatar + Label + Dropdown \[N/A\] | I/O | N/A | Lấy họ tên từ hồ sơ nhân viên liên kết với tài khoản đăng nhập; lấy tên vai trò từ thông tin phân quyền. Ảnh đại diện lấy từ hồ sơ; nếu chưa có ảnh thì hiển thị chữ viết tắt của họ tên. “Nguyễn Minh Anh”, “Nhân viên” và “NA” trên ảnh là dữ liệu minh họa. Nhấn biểu tượng mũi tên để mở menu tài khoản; danh sách mục trong menu chưa được đặc tả. |
| 13  | Thanh điều hướng breadcrumb | Breadcrumb \[N/A\] | I/O | Cấp phát tài sản / Phiếu yêu cầu của tôi | Thể hiện vị trí màn hình hiện tại. Biểu tượng ngôi nhà dẫn về Tổng quan; “Cấp phát tài sản” dẫn đến màn hình danh sách cấp phát. “Phiếu yêu cầu của tôi” là vị trí hiện tại, chỉ hiển thị và không tạo liên kết điều hướng đến chính nó. |
| 14  | Nút thông báo | Icon button + Indicator \[N/A\] | I/O | N/A | Nhấn biểu tượng chuông để mở danh sách thông báo của tài khoản đăng nhập. Dấu chấm đỏ được hiển thị khi tồn tại thông báo chưa đọc, xác định từ trạng thái đọc của thông báo theo người nhận. Không có thông báo chưa đọc thì ẩn dấu chấm. |
| 15  | Ảnh đại diện trên thanh đầu trang | Avatar button \[N/A\] | I/O | N/A | Lấy ảnh đại diện từ hồ sơ tài khoản đăng nhập; nếu chưa có ảnh thì hiển thị chữ viết tắt họ tên. Đồng bộ với tài khoản ở STT 12. Nhấn để mở menu tài khoản. |
| 16  | Tiêu đề trang | Label \[N/A\] | O   | Phiếu yêu cầu cấp phát của tôi | Hiển thị cố định tên màn hình. Danh sách bên dưới chỉ bao gồm các phiếu có người lập là nhân viên đang đăng nhập. |
| 17  | Mô tả trang | Label \[N/A\] | O   | Theo dõi các phiếu yêu cầu bạn đã tạo và tiến độ cấp phát tài sản. | Hiển thị cố định bên dưới tiêu đề trang để giải thích mục đích màn hình. Không nhận dữ liệu nhập. |
| 18  | Nút “Tạo mới” | Button \[N/A\] | I   | Tạo mới | Nhấn để mở màn hình lập phiếu yêu cầu cấp phát. Chỉ cho phép thao tác khi tài khoản có quyền tạo phiếu. Nhấn nút chỉ mở biểu mẫu, chưa tạo bản ghi phiếu cho đến khi thực hiện thao tác lưu hợp lệ. |
| 19  | Nhãn tìm kiếm mã phiếu | Label \[N/A\] | O   | Mã phiếu | Hiển thị cố định phía trên ô tìm kiếm, xác định dữ liệu được dùng để tra cứu. Không có dấu bắt buộc vì tìm kiếm là tùy chọn. |
| 20  | Ô tìm kiếm mã phiếu | Textbox \[50 ký tự \] | I   | N/A | Cho phép nhập hoặc dán mã phiếu đầy đủ hoặc một phần mã phiếu. Không bắt buộc; cho phép chữ, số và dấu phân cách có trong mã, ví dụ CP-2026-024. Loại bỏ khoảng trắng ở đầu/cuối trước khi tra cứu; tìm kiếm không phân biệt chữ hoa/thường. Không kiểm tra trùng vì đây là điều kiện tìm kiếm, không tạo dữ liệu mới. Giới hạn tối đa đề xuất 50 ký tự; không tiếp nhận phần vượt giới hạn. Khi trống, hiển thị placeholder “Nhập mã phiếu” và không áp dụng điều kiện mã phiếu. Kết hợp với các bộ lọc đang chọn; cập nhật kết quả và đưa về trang 1 khi thay đổi từ khóa. |
| 21  | Nhãn bộ lọc trạng thái | Label \[N/A\] | O   | Trạng thái | Hiển thị cố định phía trên danh sách chọn trạng thái phiếu. |
| 22  | Bộ lọc trạng thái | Single-select dropdown \[N/A\] | I   | N/A | Chỉ chọn một giá trị, không nhập tự do. Khởi tạo lựa chọn “Tất cả trạng thái”. Các lựa chọn gồm: Tất cả trạng thái, Nháp, Chờ duyệt, Đã duyệt, Từ chối, Thu hồi, Đã cấp phát. Không có “Đang xử lý” và “Hoàn tất cấp phát”. Không bắt buộc chọn trạng thái cụ thể; không kiểm tra trùng. Khi thay đổi, lọc theo trường “Trạng thái” của phiếu, đồng thời giữ các điều kiện khác và đưa về trang 1. |
| 23  | Nhãn bộ lọc loại yêu cầu | Label \[N/A\] | O   | Loại yêu cầu | Hiển thị cố định phía trên danh sách chọn loại yêu cầu. |
| 24  | Bộ lọc loại yêu cầu | Single-select dropdown \[N/A\] | I   | N/A | Chỉ chọn một giá trị, không nhập tự do. Khởi tạo “Tất cả loại yêu cầu”. Các lựa chọn gồm: Tất cả loại yêu cầu, Cho cá nhân, Cho nhân viên mới. Không bắt buộc chọn loại cụ thể; không kiểm tra trùng. Khi thay đổi, lọc theo trường “Loại yêu cầu” của phiếu, kết hợp với mã phiếu và trạng thái đang chọn; đưa về trang 1. |
| 28  | Nút “Xóa bộ lọc” | Button \[N/A\] | I   | Xóa bộ lọc | Nhấn để xóa từ khóa mã phiếu, đưa bộ lọc trạng thái về “Tất cả trạng thái”, bộ lọc loại yêu cầu về “Tất cả loại yêu cầu” và trở về trang 1. Tải lại danh sách phiếu của nhân viên theo các điều kiện đã đặt lại. Không xóa dữ liệu phiếu trong hệ thống. |
| 29  | Tiêu đề bảng | Label \[N/A\] | O   | Danh sách phiếu | Hiển thị cố định phía trên bảng dữ liệu. Bảng chỉ hiển thị phiếu có trường “Người lập” tương ứng với nhân viên đang đăng nhập. |
| 30  | Tổng số phiếu | Badge / Label \[N/A\] | O   | N/A | Hiển thị dạng “{N} phiếu”, trong đó N là tổng số phiếu của nhân viên đáp ứng toàn bộ điều kiện tìm kiếm, lọc hiện tại, tính trên tất cả các trang. Không phải số dòng riêng của trang đang xem. “24 phiếu” trên ảnh là dữ liệu minh họa. Cập nhật khi lọc, làm mới hoặc thay đổi dữ liệu. |
| 31  | Nút làm mới danh sách | Icon button \[N/A\] | I   | N/A | Nhấn để tải dữ liệu mới nhất của danh sách và tổng số phiếu. Giữ nguyên từ khóa, bộ lọc và số bản ghi/trang. Nếu trang hiện tại không còn tồn tại sau khi tải lại, chuyển về trang hợp lệ gần nhất. Trong lúc tải, ngăn nhấn lặp để tránh gửi nhiều yêu cầu đồng thời. |
| 32  | Mã phiếu tại từng dòng | Link \[N/A\] | I/O | N/A | Lấy từ trường “Mã phiếu” của đối tượng Phiếu yêu cầu cấp phát. Hiển thị màu xanh để nhận biết có thể nhấn. Mã phiếu là mã duy nhất do hệ thống quản lý; không chỉnh sửa trực tiếp tại bảng. Nhấn mã phiếu hoặc vùng dữ liệu của dòng để mở Chi tiết đúng phiếu. Hệ thống kiểm tra quyền truy cập trước khi trả dữ liệu chi tiết. |
| 33  | Nút thao tác “⋮” | Icon button \[N/A\] | I   | N/A | Hiển thị ở mỗi dòng. Nhấn để mở menu thao tác của đúng phiếu tại dòng đó; không đồng thời kích hoạt mở Chi tiết của dòng. Menu gồm Sửa phiếu, Thu hồi phiếu, In phiếu, Xem lý do từ chối và Xem chi tiết. Chỉ mở một menu tại một thời điểm; đóng khi chọn thao tác, nhấn ra ngoài hoặc nhấn Esc. Quy tắc bật/tắt được mô tả ở bảng tiếp theo. |
| 34  | Chọn số bản ghi trên trang | Single-select dropdown \[N/A\] | I   | N/A | Chỉ chọn số nguyên dương trong danh sách cấu hình, không nhập tự do; không kiểm tra trùng. Theo ảnh, khởi tạo 6 bản ghi/trang. Đề xuất các lựa chọn 6, 12, 24 bản ghi/trang. Thay đổi lựa chọn sẽ giữ nguyên điều kiện lọc, tính lại số trang và đưa về trang 1. |
| 35  | Điều hướng phân trang | Pagination \[N/A\] | I/O | N/A | Hiển thị số trang dựa trên tổng số kết quả và số bản ghi/trang; khởi tạo trang 1. Trang đang chọn có nền xanh. Nhấn số trang để chuyển trang tương ứng; nút trái/phải chuyển đến trang liền trước/liền sau. Vô hiệu hóa nút trước ở trang đầu, nút sau ở trang cuối. Giữ nguyên điều kiện lọc khi chuyển trang. Không cho chuyển đến trang ngoài phạm vi. |
| 36  | Cột “STT” | Table column / Label \[N/A\] | O   | STT | Tiêu đề cột cố định. Giá trị từng dòng được hệ thống tính theo vị trí trong kết quả: (Trang hiện tại − 1) × Số bản ghi/trang + Vị trí dòng trên trang. Hiển thị số nguyên dương và đánh lại sau khi lọc. Không lấy STT làm mã định danh phiếu. |
| 37  | Cột “Mã phiếu” | Table column \[N/A\] | O   | Mã phiếu | Hiển thị cố định tiêu đề cột. Dữ liệu trong cột lấy từ trường “Mã phiếu” của từng Phiếu yêu cầu cấp phát. Mỗi ô mã phiếu có hành vi liên kết như STT 32; không cho sửa trực tiếp tại bảng. |
| 38  | Cột “Loại yêu cầu” | Table column / Label \[N/A\] | O   | Loại yêu cầu | Dữ liệu từng dòng lấy từ trường “Loại yêu cầu” của phiếu. Ánh xạ thành “Cho cá nhân” hoặc “Cho nhân viên mới”. Không hiển thị mã kỹ thuật thay cho tên nghiệp vụ; không chỉnh sửa tại bảng. |
| 39  | Cột “Người nhận tài sản” | Table column / Label \[N/A\] | O   | Người nhận tài sản | Lấy từ trường “Họ tên” của nhân viên được liên kết bằng trường “Người nhận tài sản” trên phiếu. Với phiếu cho cá nhân, hiển thị người lập đồng thời là người nhận; với phiếu cho nhân viên mới, hiển thị nhân viên mới được chỉ định. Không tự thay người nhận bằng người đang đăng nhập. Nếu tên dài vượt chiều rộng cột, rút gọn bằng dấu “…”, cho phép xem tên đầy đủ qua tooltip. |
| 40  | Cột “Ngày tạo” | Table column / Date label \[dd/MM/yyyy\] | O   | Ngày tạo | Lấy phần ngày từ trường “Thời điểm tạo” của phiếu, hiển thị theo định dạng dd/MM/yyyy và múi giờ cấu hình của hệ thống. Đây là ngày tạo phiếu gốc, không thay bằng ngày cập nhật gần nhất. Không chỉnh sửa trực tiếp tại bảng. |
| 41  | Cột “Ngày cần sử dụng” | Table column / Date label \[dd/MM/yyyy\] | O   | Ngày cần sử dụng | Lấy từ trường “Ngày cần sử dụng” đã lưu trên phiếu. Hiển thị theo định dạng dd/MM/yyyy. Không tự thay bằng ngày hiện tại hoặc ngày dự kiến bàn giao. Không cho chỉnh sửa trực tiếp tại bảng. |
| 42  | Cột “Trạng thái” | Table column / Badge \[N/A\] | O   | Trạng thái | Lấy từ trường “Trạng thái hiện tại” của phiếu. Hiển thị badge chỉ gồm chữ, không có icon. Quy ước: Nháp — xám; Chờ duyệt — cam/vàng; Đã duyệt — xanh lục nhạt; Từ chối — đỏ; Thu hồi — cam; Đã cấp phát — xanh lục. Luôn có tên trạng thái, không chỉ dùng màu để phân biệt. Cập nhật sau khi thao tác thành công hoặc làm mới dữ liệu. |
| 43  | Cột “Thao tác” | Table column \[N/A\] | O   | Thao tác | Hiển thị cố định tiêu đề cột. Mỗi dòng chứa một nút “⋮” tương ứng với phiếu của dòng đó. Không chứa ô nhập văn bản và không cho chỉnh sửa dữ liệu trực tiếp. |

Bảng 74. Mô tả thành phần màn hình MH-02.01

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-02.01 | Chỉ truy xuất phiếu có Người lập là nhân viên đang đăng nhập, kể cả khi người nhận tài sản là nhân viên mới khác. |
| QT-02.02 | Các điều kiện mã phiếu, trạng thái và loại yêu cầu được kết hợp theo AND. Mặc định sắp xếp theo thời điểm tạo mới nhất trước; nếu trùng thời điểm thì dùng mã định danh phiếu làm tiêu chí phụ để phân trang ổn định. |
| QT-02.03 | Khi chưa từng có phiếu, hiển thị “Bạn chưa có phiếu yêu cầu nào” kèm nút “Tạo mới”. Khi không có kết quả do lọc, hiển thị “Không tìm thấy phiếu yêu cầu phù hợp” và cho phép xóa bộ lọc. Các trạng thái này thay thế phần dữ liệu bảng, không tạo thêm một khu vực bên dưới. |
| QT-02.04 | Dòng thống kê dưới bảng lấy từ kết quả phân trang, hiển thị dạng “Hiển thị {bản ghi đầu}–{bản ghi cuối} trên {tổng số} phiếu”; không cố định theo số liệu minh họa trong ảnh. |

Bảng 75. Quy tắc màn hình MH-02.01

**MH-02.02 – Menu thao tác trên phiếu yêu cầu**

Hình 31. MH-02.02 – Menu thao tác trên phiếu yêu cầu

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 33.1 | Sửa phiếu | Menu item \[N/A\] | I   | Sửa phiếu | Chỉ bật khi phiếu thuộc người lập đang đăng nhập, có trạng thái Nháp hoặc Chờ duyệt và chưa được tiếp nhận xử lý . Nhấn để mở biểu mẫu chỉnh sửa, tải dữ liệu hiện có của đúng phiếu. Các trạng thái còn lại hiển thị vô hiệu hóa. Trước khi mở/lưu, hệ thống kiểm tra lại trạng thái và quyền; nếu không còn đủ điều kiện thì thông báo và cập nhật danh sách. |
| 33.2 | Thu hồi phiếu | Menu item \[N/A\] | I   | Thu hồi phiếu | Chỉ bật khi phiếu thuộc người lập đang đăng nhập, có trạng thái Chờ duyệt và chưa được tiếp nhận xử lý . Nhấn để mở hộp xác nhận; chỉ cập nhật phiếu sang “Thu hồi” khi người dùng xác nhận và hệ thống kiểm tra điều kiện thành công. Hủy xác nhận thì giữ nguyên dữ liệu. Không đồng nghĩa xóa phiếu hoặc thu hồi tài sản đã cấp. |
| 33.3 | In phiếu | Menu item \[N/A\] | I   | In phiếu | Luôn bật với phiếu mà người dùng có quyền xem, không phụ thuộc trạng thái. Nhấn để mở bản xem trước khi in theo mẫu phiếu của hệ thống. Nội dung lấy từ dữ liệu đã lưu của đúng phiếu được chọn, không lấy từ dòng khác hoặc dữ liệu chưa lưu. |
| 33.4 | Xem lý do từ chối | Menu item \[N/A\] | I   | Xem lý do từ chối | Chỉ bật khi trạng thái phiếu là Từ chối. Nhấn để hiển thị lý do từ chối được lưu trong thông tin phê duyệt của phiếu. Nội dung chỉ đọc; hiển thị đầy đủ và cho xuống dòng. Các trạng thái khác hiển thị vô hiệu hóa. Nếu dữ liệu thiếu lý do, thông báo “Chưa có thông tin lý do từ chối”. |
| 33.5 | Xem chi tiết | Menu item \[N/A\] | I   | Xem chi tiết | Luôn bật với phiếu mà người dùng có quyền xem, không phụ thuộc trạng thái. Nhấn để mở màn hình Chi tiết của đúng phiếu, tương tự thao tác tại STT 32. |

Bảng 76. Mô tả thành phần màn hình MH-02.02

**MH-02.03 – Tạo mới phiếu yêu cầu cấp phát**

Hình 32. MH-02.03 – Tạo mới phiếu yêu cầu cấp phát

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Đường dẫn điều hướng | Breadcrumb | O   | Cấp phát tài sản / Tạo phiếu yêu cầu | Hiển thị vị trí màn hình hiện tại trong hệ thống. Thành phần cuối cùng hiển thị tên màn hình đang truy cập. |
| 2   | Biểu tượng thông báo | Button | I   | N/A | Khi người dùng nhấn vào biểu tượng chuông, hệ thống hiển thị danh sách thông báo của tài khoản đang đăng nhập. |
| 3   | Ảnh đại diện tài khoản | Button | I   | N/A | Hiển thị ảnh đại diện hoặc chữ cái viết tắt tên người dùng. Khi nhấn, hệ thống mở menu tài khoản. |
| 4   | Quay lại danh sách | Button | I   | N/A | Khi nhấn, hệ thống điều hướng về màn hình danh sách phiếu yêu cầu cấp phát tài sản. Nếu có dữ liệu chưa lưu, hệ thống hiển thị hộp thoại xác nhận rời màn hình. |
| 5   | Tiêu đề màn hình | Label | O   | Tạo phiếu yêu cầu cấp phát | Hiển thị tên chức năng người dùng đang thực hiện. |
| 6   | Mô tả màn hình | Label | O   | Điền thông tin để gửi yêu cầu cấp phát tài sản. | Hiển thị nội dung hướng dẫn ngay bên dưới tiêu đề màn hình. |
| 7   | Chú thích thông tin bắt buộc | Label | O   | \* Thông tin bắt buộc | Thông báo các trường có dấu (\*) là trường bắt buộc nhập hoặc lựa chọn. |
| 8   | Tiêu đề nhóm thông tin người lập | Label | O   | Thông tin người lập | Phân chia khu vực hiển thị các thông tin của người đang thực hiện lập phiếu. |
| 9   | Chú thích tự động điền | Label | O   | Tự động điền • Chỉ đọc | Thông báo các trường thuộc nhóm Thông tin người lập được hệ thống tự động điền và không cho phép chỉnh sửa trực tiếp. |
| 10  | Họ tên người lập | Textbox \[100\] | O   | N/A | Tự động lấy trường Họ và tên từ hồ sơ nhân viên liên kết với tài khoản đang đăng nhập. Hiển thị đầy đủ họ tên, không cho phép chỉnh sửa. |
| 11  | Mã nhân viên | Textbox \[20\] | O   | N/A | Tự động lấy trường Mã nhân viên từ hồ sơ nhân viên của người lập phiếu. Giá trị duy nhất trong hệ thống, không cho phép chỉnh sửa. |
| 12  | Phòng ban | Textbox \[100\] | O   | N/A | Tự động lấy tên phòng ban hiện tại của người lập thông qua thông tin phòng ban liên kết với hồ sơ nhân viên. Không cho phép chỉnh sửa. |
| 13  | Chức danh | Textbox \[100\] | O   | N/A | Tự động lấy tên chức danh hiện tại từ hồ sơ nhân viên của người lập. Không cho phép chỉnh sửa. |
| 14  | Mã phiếu | Textbox \[30\] | O   | N/A | Hiển thị mã phiếu do hệ thống tự động tạo theo quy tắc mã hóa phiếu cấp phát. Không cho phép chỉnh sửa. Mã phiếu phải duy nhất trong hệ thống. |
| 15  | Ngày lập | Date \[10\] | O   | N/A | Tự động hiển thị ngày lập phiếu theo ngày hệ thống, định dạng DD/MM/YYYY. Không cho phép chỉnh sửa trực tiếp. |
| 16  | Tiêu đề loại yêu cầu | Label | O   | Loại yêu cầu \* | Hiển thị tên nhóm thông tin bắt buộc, yêu cầu người dùng lựa chọn một trong hai loại yêu cầu. |
| 17  | Cho cá nhân | Radio Button | I   | N/A | Cho phép người lập yêu cầu cấp phát tài sản cho chính mình. Khi lựa chọn, hệ thống xác định người nhận là người lập phiếu và tự động sử dụng thông tin nhân viên đang đăng nhập. Chỉ được chọn một loại yêu cầu tại một thời điểm. |
| 18  | Cho nhân viên mới | Radio Button | I   | N/A | Cho phép người lập yêu cầu cấp phát tài sản cho nhân viên mới. Khi lựa chọn, hệ thống hiển thị nhóm Người nhận tài sản để người dùng khai báo thông tin. Chỉ được chọn một loại yêu cầu tại một thời điểm. |
| 19  | Tiêu đề nhóm người nhận | Label | O   | Người nhận tài sản | Hiển thị tên nhóm thông tin xác định nhân viên được cấp phát tài sản. Nhóm này xuất hiện khi lựa chọn loại yêu cầu Cho nhân viên mới. |
| 20  | Họ tên người nhận \* | Textbox \[100\] | I   | N/A | Trường bắt buộc. Cho phép nhập hoặc lựa chọn họ tên nhân viên nhận tài sản. Chấp nhận chữ cái tiếng Việt có dấu, khoảng trắng và các ký tự hợp lệ trong họ tên. Không chấp nhận chuỗi chỉ chứa khoảng trắng. Tối đa 100 ký tự. Không kiểm tra trùng theo họ tên vì nhiều nhân viên có thể trùng tên. Thông tin người nhận cần được đối chiếu với hồ sơ nhân viên. |
| 21  | Mã nhân viên người nhận | Textbox \[20\] | O   | N/A | Hiển thị mã nhân viên tương ứng với người nhận đã được xác định. Dữ liệu lấy từ trường Mã nhân viên trong hồ sơ nhân viên. Không cho phép chỉnh sửa trực tiếp. Mã nhân viên phải tương ứng với đúng người nhận. |
| 22  | Chức danh người nhận \* | Textbox \[100\] | I   | N/A | Trường bắt buộc. Cho phép nhập hoặc lựa chọn chức danh của nhân viên nhận tài sản. Chấp nhận chữ cái tiếng Việt có dấu, chữ số, khoảng trắng và các ký tự hợp lệ. Tối đa 100 ký tự. Không chấp nhận giá trị chỉ gồm khoảng trắng. Thông tin cần phù hợp với hồ sơ nhân viên hoặc danh mục chức danh. |
| 23  | Phòng ban người nhận \* | Combobox | I   | N/A | Trường bắt buộc. Hiển thị placeholder «Chọn phòng ban». Danh sách lựa chọn lấy từ danh mục Phòng ban đang hoạt động trong hệ thống. Chỉ được lựa chọn một phòng ban. Phòng ban được chọn phải phù hợp với thông tin nhân sự của người nhận. |
| 24  | Thông báo lỗi phòng ban | Label | O   | N/A | Hiển thị thông báo «Vui lòng chọn phòng ban» bên dưới trường Phòng ban khi người dùng chưa lựa chọn giá trị bắt buộc. Tự động ẩn khi trường được lựa chọn hợp lệ. |
| 25  | Ngày bắt đầu làm việc \* | Date Picker \[10\] | I   | N/A | Trường bắt buộc. Cho phép lựa chọn hoặc nhập ngày bắt đầu làm việc của người nhận theo định dạng DD/MM/YYYY. Dữ liệu phải là ngày hợp lệ trên lịch. Không chấp nhận ngày không tồn tại hoặc sai định dạng. |
| 26  | Tiêu đề nhóm tài sản cần cấp | Label | O   | Tài sản cần cấp | Hiển thị tên khu vực khai báo danh sách tài sản đề nghị cấp phát. |
| 27  | Tổng số tài sản | Badge/Label | O   | N/A | Hiển thị tổng số loại tài sản trong danh sách yêu cầu. Giá trị được hệ thống tự động tính theo số dòng tài sản đang có trong danh sách và cập nhật khi danh sách thay đổi. |
| 28  | Chọn theo định mức | Radio Button | I   | N/A | Cho phép lựa chọn hình thức cấp phát tài sản theo định mức đã được thiết lập. Khi chọn, hệ thống hiển thị trường chọn gói định mức và danh sách tài sản tương ứng. Các thông tin tài sản thuộc định mức được tự động lấy theo chính sách cấp phát. |
| 29  | Yêu cầu mới | Radio Button | I   | N/A | Cho phép người dùng đề xuất danh sách tài sản phát sinh theo nhu cầu. Khi lựa chọn, hệ thống chuyển sang chế độ khai báo tài sản mới và cho phép nhập các thông tin tài sản theo quy định. |
| 30  | Chọn gói định mức áp dụng \* | Dropdown | I   | N/A | Trường bắt buộc khi lựa chọn hình thức Chọn theo định mức. Danh sách lấy từ các gói định mức đang có hiệu lực trong hệ thống, phù hợp với chức danh và phòng ban của người nhận. Chỉ được lựa chọn một gói định mức. Khi thay đổi gói định mức, hệ thống cập nhật danh sách tài sản tương ứng. |
| 31  | Thông tin gói định mức | Label | O   | N/A | Tự động hiển thị thông tin phòng ban áp dụng và ngày cập nhật gần nhất của gói định mức được chọn. Dữ liệu lấy từ các trường Phòng ban áp dụng và Ngày cập nhật của bản ghi gói định mức trong hệ thống. Không cho phép chỉnh sửa. |
| 32  | Danh sách tài sản | Table | O   | N/A | Hiển thị danh sách tài sản cần cấp với các cột Loại tài sản, Mô tả, Số lượng, Ghi chú và trạng thái khóa. Dữ liệu lấy từ chi tiết gói định mức được chọn hoặc danh sách tài sản do người dùng khai báo tùy theo hình thức yêu cầu. |
| 33  | Loại tài sản | Label | O   | N/A | Hiển thị tên loại tài sản được lấy từ danh mục Loại tài sản trong hệ thống. Đối với hình thức Chọn theo định mức, dữ liệu được lấy từ chi tiết gói định mức đã chọn. Hiển thị nhãn «Định mức chuẩn» đối với các tài sản thuộc gói định mức chuẩn. |
| 34  | Mô tả tài sản | Textbox \[255\] | O   | N/A | Hiển thị thông số kỹ thuật hoặc mô tả của tài sản được lấy từ trường Mô tả trong chi tiết gói định mức. Tối đa 255 ký tự. Không cho phép chỉnh sửa đối với tài sản thuộc định mức đã khóa. |
| 35  | Số lượng tài sản | Textbox \[10\] | O   | N/A | Hiển thị số lượng tài sản tương ứng với từng dòng trong gói định mức. Dữ liệu lấy từ trường Số lượng trong chi tiết định mức. Số lượng phải là số nguyên dương. Không cho phép chỉnh sửa khi thuộc gói định mức đã khóa. |
| 36  | Ghi chú tài sản | Textbox \[255\] | O   | N/A | Hiển thị nội dung ghi chú của từng loại tài sản được lấy từ trường Ghi chú trong chi tiết gói định mức. Tối đa 255 ký tự. Không cho phép chỉnh sửa đối với tài sản thuộc gói định mức đã khóa. |
| 37  | Biểu tượng khóa | Icon | O   | N/A | Hiển thị biểu tượng ổ khóa tại các dòng tài sản thuộc định mức có thông tin không được phép chỉnh sửa. |
| 38  | Chú thích danh sách định mức | Label | O   | Các tài sản trong định mức đã được khóa số lượng chuẩn theo chính sách. | Hiển thị nội dung hướng dẫn về trạng thái khóa số lượng tài sản đối với danh sách thuộc gói định mức. |
| 39  | Tiêu đề nhóm lý do và thời gian | Label | O   | Lý do & thời gian | Hiển thị tên nhóm thông tin khai báo lý do yêu cầu cấp phát và thời gian cần sử dụng tài sản. |
| 40  | Lý do yêu cầu \* | Textarea \[1000\] | I   | N/A | Trường bắt buộc. Hiển thị placeholder «Nhập lý do yêu cầu cấp phát tài sản». Cho phép nhập văn bản tiếng Việt có dấu, chữ số và các dấu câu thông dụng. Tối đa 1000 ký tự. Không chấp nhận nội dung chỉ chứa khoảng trắng. Không kiểm tra trùng nội dung lý do yêu cầu. |
| 41  | Thông báo lỗi lý do yêu cầu | Label | O   | N/A | Hiển thị thông báo «Vui lòng nhập lý do yêu cầu» khi trường Lý do yêu cầu chưa có dữ liệu hợp lệ. Tự động ẩn khi người dùng nhập dữ liệu hợp lệ và hệ thống thực hiện kiểm tra lại. |
| 42  | Ngày cần sử dụng \* | Date Picker \[10\] | I   | N/A | Trường bắt buộc. Cho phép nhập hoặc lựa chọn ngày dự kiến cần sử dụng tài sản theo định dạng DD/MM/YYYY. Phải là ngày hợp lệ trên lịch và không được trước ngày lập phiếu đối với phiếu tạo mới. Không chấp nhận ngày không tồn tại hoặc sai định dạng. |
| 43  | Thông báo hướng dẫn | Label | O   | Vui lòng kiểm tra thông tin trước khi gửi phiếu. | Hiển thị nội dung nhắc nhở người dùng kiểm tra tính chính xác và đầy đủ của thông tin trước khi gửi phiếu yêu cầu. |
| 44  | Lưu nháp | Button | I   | N/A | Khi nhấn, hệ thống lưu thông tin phiếu yêu cầu với trạng thái Nháp. Cho phép lưu khi chưa hoàn thành tất cả các trường bắt buộc, nhưng dữ liệu đã nhập phải đáp ứng yêu cầu về định dạng. Phiếu chưa được chuyển sang quy trình phê duyệt. |
| 45  | Gửi phiếu | Button | I   | N/A | Khi nhấn, hệ thống kiểm tra các trường bắt buộc, tính hợp lệ của dữ liệu, thông tin người nhận và danh sách tài sản. Nếu hợp lệ, hệ thống lưu phiếu và chuyển trạng thái sang Chờ duyệt, đồng thời hiển thị thông báo gửi thành công. Nếu không hợp lệ, hệ thống giữ nguyên dữ liệu đã nhập và hiển thị thông báo lỗi tương ứng. |

Bảng 77. Mô tả thành phần màn hình MH-02.03

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-02.05 | Người dùng phải đăng nhập và có quyền tạo, sửa phiếu cấp phát tài sản. |
| QT-02.06 | Khi tạo mới, hệ thống tự động lấy thông tin người lập, ngày lập và sinh mã phiếu. Khi chỉnh sửa, hiển thị thông tin đã lưu và không thay đổi mã phiếu, người lập, ngày lập. |
| QT-02.07 | Thông tin người lập, mã nhân viên, phòng ban, chức danh, mã phiếu và ngày lập chỉ được xem, không được chỉnh sửa. |
| QT-02.08 | Người nhận phải tồn tại trong danh mục nhân sự, có trạng thái hợp lệ và thuộc phạm vi được phép truy cập. Kiểm tra nhân viên theo mã nhân viên, không theo họ tên. |
| QT-02.09 | Bắt buộc chọn một loại yêu cầu: “Cho cá nhân” hoặc “Cho nhân viên mới”. Khi thay đổi loại yêu cầu, hệ thống cập nhật các thông tin liên quan. |
| QT-02.10 | Khi chọn “Cho cá nhân”, hệ thống tự động lấy thông tin người đăng nhập làm người nhận và không cho phép chỉnh sửa. Không yêu cầu ngày bắt đầu làm việc. |
| QT-02.11 | Khi chọn “Cho nhân viên mới”, bắt buộc có thông tin người nhận, phòng ban và ngày bắt đầu làm việc. Người nhận phải có hồ sơ nhân sự hợp lệ. |

Bảng 78. Quy tắc màn hình MH-02.03

**MH-02.04 – Xem lý do từ chối phiếu yêu cầu**

Hình 33. MH-02.04 – Xem lý do từ chối phiếu yêu cầu

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Tiêu đề popup | Label | O   | Lý do từ chối | Hiển thị cố định tại đầu popup, thể hiện mục đích xem thông tin từ chối của phiếu yêu cầu cấp phát. Không cho chỉnh sửa. |
| 2   | Mô tả popup | Label | O   | Thông tin phản hồi cho phiếu yêu cầu cấp phát. | Hiển thị cố định dưới tiêu đề, hướng dẫn người dùng về nội dung được trình bày trong popup. |
| 3   | Nút đóng “X” | Icon button | I   | N/A | Nhấn để đóng popup và trở lại màn hình đã mở popup. Không thay đổi dữ liệu hoặc trạng thái phiếu. Giữ nguyên điều kiện tìm kiếm, bộ lọc và trang hiện tại của danh sách. Không yêu cầu xác nhận đóng vì popup chỉ hiển thị thông tin. |
| 4   | Mã phiếu | Label | O   | Mã phiếu | Nhãn “Mã phiếu” hiển thị cố định; giá trị lấy từ trường “Mã phiếu” của Phiếu yêu cầu cấp phát đang được chọn. Hiển thị đầy đủ, in đậm, không cho chỉnh sửa. “CP-2026-020” là dữ liệu minh họa, không phải giá trị cố định. |
| 5   | Trạng thái phiếu | Badge | O   | Từ chối | Lấy từ trường “Trạng thái hiện tại” của phiếu được chọn. Popup chỉ hiển thị nội dung từ chối khi trạng thái phù hợp. Badge hiển thị chữ “Từ chối”, nền đỏ nhạt, chữ đỏ, không có icon và không nhận thao tác thay đổi trạng thái. |
| 6   | Người từ chối | Text | O   | Người từ chối | Nhãn hiển thị cố định; giá trị lấy từ họ tên người thực hiện quyết định từ chối trong lịch sử phê duyệt của phiếu. Không lấy thông tin người đang xem popup hoặc người lập phiếu để thay thế. Hiển thị tên đầy đủ, in đậm; tên dài được xuống dòng. “Lê Hoàng Phúc” là dữ liệu minh họa. |
| 7   | Thời điểm từ chối | DateTime | O   | Thời điểm từ chối | Nhãn hiển thị cố định; giá trị lấy từ trường “Thời điểm từ chối” của quyết định phê duyệt tương ứng. Hiển thị theo định dạng dd/MM/yyyy · HH:mm, sử dụng giờ 24 tiếng và múi giờ hệ thống. Không dùng ngày tạo phiếu, thời điểm mở popup hoặc lần cập nhật khác để thay thế. |
| 8   | Lý do từ chối | text | O   | Lý do từ chối | Nhãn hiển thị cố định; nội dung lấy từ trường “Lý do từ chối” của cùng quyết định phê duyệt được sử dụng tại thành phần 6 và 7. Hiển thị toàn bộ nội dung đã lưu, giữ các dấu xuống dòng; tự động ngắt dòng theo chiều rộng vùng hiển thị. Không phải ô nhập liệu; không cho sửa, xóa hoặc gửi lại nội dung. Không cắt nội dung bằng dấu “…”. Nếu dữ liệu trống, hiển thị “Chưa có thông tin lý do từ chối”. |
| 9   | Nút “Đóng” | Button | I   | Đóng | Nhấn để đóng popup, có hành vi tương tự nút “X” tại thành phần 3. Không lưu dữ liệu, không gửi thông báo và không thay đổi trạng thái phiếu. |

Bảng 79. Mô tả thành phần màn hình MH-02.04

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-02.12 | Điều kiện mở: Người dùng đã đăng nhập, có quyền xem phiếu và chọn “Xem lý do từ chối” của phiếu có trạng thái “Từ chối”. Với trạng thái khác, thao tác này bị vô hiệu hóa. Hệ thống kiểm tra lại quyền và trạng thái khi tải dữ liệu popup. |
| QT-02.13 | Dữ liệu đúng phiếu: Truy xuất thông tin bằng mã định danh của phiếu được chọn. Mã phiếu, trạng thái, người từ chối, thời điểm và lý do phải thuộc cùng phiếu; các thông tin từ chối phải lấy từ cùng quyết định phê duyệt. Không sử dụng dữ liệu còn lưu của popup đã mở trước đó. |
| QT-02.14 | Chỉ đọc: Toàn bộ thông tin nghiệp vụ trên popup chỉ để xem. Không cho nhập, chỉnh sửa hoặc thực hiện lại quyết định phê duyệt. Không áp dụng kiểm tra bắt buộc, kiểm tra trùng hoặc giới hạn nhập ký tự tại popup này. |
| QT-02.15 | Hiển thị nội dung dài: Lý do được hiển thị đầy đủ, giữ xuống dòng và ngắt các chuỗi dài để không tràn ngang. Khi nội dung vượt chiều cao cho phép, phần thân popup cuộn dọc; tiêu đề và nút Đóng vẫn dễ tiếp cận. |
| QT-02.16 | Lỗi tải dữ liệu: Khi không tải được thông tin, hiển thị “Không thể tải thông tin từ chối. Vui lòng thử lại”. Không hiển thị nhầm dữ liệu của phiếu khác. Người dùng vẫn có thể đóng popup. |
| QT-02.17 | Đóng popup: Cho phép đóng bằng nút “X”, nút “Đóng” hoặc phím Esc. Đóng popup không thay đổi dữ liệu; giữ nguyên bộ lọc, phân trang và vị trí của màn hình nguồn. |
| QT-02.18 | Tương tác: Khi popup mở, làm tối và chặn thao tác với màn hình phía sau. Tiêu điểm bàn phím nằm trong popup; khi đóng, trả tiêu điểm về thành phần đã mở popup. |

Bảng 80. Quy tắc màn hình MH-02.04

### 3.3.9 CN-02.2 Phê duyệt yêu cầu cấp phát tài sản

#### 3.3.9.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-02.2 |     |     |
| Tên UC | Phê duyệt yêu cầu |     |     |
| Mô tả UC | Cho phép nhân viên quản lý tài sản phê duyệt các yêu cầu cấp phát tài sản của nhân viên |     |     |
| Tác nhân chính | Nhân viên quản lý tài sản |     |     |
| Điều kiện kích hoạt | Người dùng chọn "Cấp phát tài sản" trên thanh sidebar |     |     |
| Tiền điều kiện | Người dùng đã đăng nhập và được phân quyền  <br>Có ít nhất 1 phiếu yêu cầu cấp phát chưa được phê duyệt |     |     |
| Hậu điều kiện | Trạng thái của phiếu yêu cầu là Từ chối hoặc Đã duyệt  <br>Hệ thống ghi lại lịch sử |     |     |
| Luồng chính | Bước | Hành động của tác nhân | Phản hồi hệ thống |
| 1   | Người dùng click vào 1 bản ghi phiếu yêu cầu cấp phát bất kỳ chưa phê duyệt | Hệ thống hiển thị thông tin chi tiết phiếu yêu cầu cấp phát tài sản mới |
| 2   | Người dùng click button "Phê duyệt" | Hệ thống đổi trạng thái của phiếu yêu cầu cấp phát tài sản mới thành "Đã duyệt"  <br>Hệ thống gửi thông báo về cho nhân viên tạo phiếu tương ứng |
| Luồng thay thế | 2A.1 | Người dùng click vào button "Từ chối" | Hệ thống hiển thị PopUp yêu cầu nhập lý do từ chối |
| 2A.2 | Người dùng nhập lý do từ chối | N/A. |
| 2A.3 | Người dùng click vào button "Gửi" trên PopUp | Hệ thống đổi trạng thái của phiếu yêu cầu cấp phát tài sản mới thành "Từ chối"  <br>Hệ thống gửi thông báo về cho nhân viên tạo phiếu tương ứng |
| 2A.3a | Người dùng click vào button "X" trên PopUp | Hệ thống đóng PopUp, vẫn giữ nguyên trạng thái hiện tại của phiếu yêu cầu cấp phát tài sản |
| Luồng ngoại lệ | E1  | Người tạo phiếu đã thu hồi trong lúc xem | Chặn thao tác, thông báo “Phiếu đã bị hủy bởi người tạo”, cập nhật trạng thái hiển thị |
| E2  | Lý do từ chối để trống (hoặc chỉ có khoảng trắng) | Giữ nguyên PopUp, hiển thị lỗi “Vui lòng nhập lý do từ chối” tại ô nhập, không đổi trạng thái |
| E3  | Lý do từ chối vượt quá độ dài tối đa | Giữ nguyên PopUp, hiển thị lỗi “Lý do không được vượt quá ký tự cho phép” |
| Quy tắc nghiệp vụ | BR-02.07, BR-02.08, BR-02.09 |     |     |
| Mã AD | AD-02.2 |     |     |
| Mã giao diện | MH-02.05, MH-02.06, MH-02.07 |     |     |

Bảng 81. Đặc tả UC-02.2 – Phê duyệt yêu cầu cấp phát tài sản

#### 3.3.9.2 Sơ đồ hoạt động

Hình 34. AD-02.2 – Phê duyệt yêu cầu cấp phát

#### 3.3.9.3 Giao diện

**MH-02.05 – Danh sách yêu cầu dành cho người phê duyệt**

Hình 35. MH-02.05 – Danh sách yêu cầu dành cho người phê duyệt

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Thanh điều hướng breadcrumb | Breadcrumb | I/O | Cấp phát tài sản / Danh sách phiếu yêu cầu | Hiển thị vị trí màn hình hiện tại. Nhấn biểu tượng ngôi nhà để về Tổng quan. “Danh sách phiếu yêu cầu” là vị trí hiện tại, không nhận thao tác điều hướng đến chính nó. |
| 2   | Nút thông báo | Icon button + Indicator | I/O | N/A | Nhấn để mở danh sách thông báo của tài khoản đăng nhập. Hiển thị chấm đỏ khi có thông báo chưa đọc, xác định theo người nhận và trạng thái đọc của thông báo. Khi không còn thông báo chưa đọc, ẩn chấm đỏ. |
| 3   | Ảnh đại diện tài khoản | Avatar button | I/O | N/A | Lấy ảnh từ trường “Ảnh đại diện” của hồ sơ tài khoản đăng nhập. Nếu chưa có ảnh, hiển thị chữ viết tắt từ họ tên; “LP” là minh họa. Nhấn để mở menu tài khoản. |
| 4   | Tiêu đề màn hình | Label | O   | Danh sách phiếu yêu cầu cấp phát | Hiển thị cố định tên màn hình danh sách phía quản lý. Danh sách bao gồm các phiếu thuộc phạm vi quản lý được phân quyền, không giới hạn ở phiếu do chính người đang đăng nhập lập. |
| 5   | Mô tả màn hình | Label | O   | Tiếp nhận, xem xét và phê duyệt yêu cầu cấp phát tài sản. | Hiển thị cố định bên dưới tiêu đề, giải thích mục đích màn hình. Không nhận dữ liệu nhập. |
| 6   | Tìm kiếm phiếu yêu cầu | Textbox \[100 ký tự\] | I   | N/A | Cho phép nhập hoặc dán mã phiếu, họ tên hoặc mã nhân viên tạo phiếu. Không bắt buộc; nhận văn bản Unicode một dòng, gồm chữ, số, khoảng trắng và dấu phân cách thông dụng. Loại bỏ khoảng trắng đầu/cuối, không phân biệt chữ hoa/thường khi tìm kiếm. Tìm theo toàn bộ hoặc một phần giá trị; không kiểm tra trùng vì không tạo dữ liệu mới. Tối đa 100 ký tự, không tiếp nhận phần vượt giới hạn. Khi trống, hiển thị placeholder “Mã phiếu, tên hoặc mã nhân viên” và không áp dụng điều kiện từ khóa. Khi thay đổi, cập nhật kết quả và trở về trang 1. |
| 7   | Bộ lọc phòng ban | Single-select dropdown | I   | N/A | Chọn một phòng ban từ danh mục phòng ban trong phạm vi quản lý; không nhập tự do. Hiển thị “Tên phòng ban”, sử dụng mã định danh phòng ban để lọc. Khởi tạo “Tất cả phòng ban”. Không bắt buộc chọn phòng ban cụ thể, không kiểm tra trùng. Lọc theo phòng ban của người tạo phiếu đã ghi nhận trên phiếu, không phải phòng ban người nhận. Khi thay đổi, giữ các điều kiện khác và đưa về trang 1. |
| 8   | Bộ lọc loại yêu cầu | Single-select dropdown | I   | N/A | Chỉ chọn một giá trị trong danh sách: “Tất cả loại yêu cầu”, “Cho cá nhân”, “Cho nhân viên mới”. Khởi tạo “Tất cả loại yêu cầu”. Không nhập tự do, không bắt buộc chọn loại cụ thể, không kiểm tra trùng. Lọc theo trường “Loại yêu cầu” của phiếu; kết hợp với từ khóa, phòng ban và tab trạng thái đang chọn. Thay đổi lựa chọn đưa danh sách về trang 1. |
| 9   | Nút “Xóa bộ lọc” | Button | I   | Xóa bộ lọc | Xóa từ khóa tìm kiếm, đưa phòng ban về “Tất cả phòng ban” và loại yêu cầu về “Tất cả loại yêu cầu”. Giữ nguyên tab trạng thái đang chọn, số bản ghi/trang và kiểu sắp xếp; đưa về trang 1 và tải lại danh sách. Không xóa dữ liệu phiếu. |
| 10  | Tab “Chờ duyệt” và số lượng | Tab + Count badge | I/O | Chờ duyệt | Là tab được chọn khi mở màn hình lần đầu. Nhấn để hiển thị phiếu có trạng thái “Chờ duyệt”. Số lượng lấy từ tổng số phiếu chờ duyệt thỏa mãn từ khóa, phòng ban, loại yêu cầu và phạm vi phân quyền, không phụ thuộc phân trang. “12” là minh họa. Tab đang chọn có chữ xanh, gạch chân xanh; số lượng hiển thị chữ xanh đậm trên nền xanh nhạt. |
| 11  | Tab “Đã duyệt” và số lượng | Tab + Count badge | I/O | Đã duyệt | Nhấn để hiển thị phiếu có trạng thái hiện tại là “Đã duyệt”. Số lượng là tổng số phiếu thuộc trạng thái này, đáp ứng các điều kiện lọc và phân quyền. “28” là minh họa. Phiếu đã chuyển sang “Đã cấp phát” không tiếp tục tính vào số phiếu có trạng thái hiện tại “Đã duyệt”. Chuyển tab đưa về trang 1. |
| 12  | Tab “Từ chối” và số lượng | Tab + Count badge | I/O | Từ chối | Nhấn để hiển thị phiếu có trạng thái “Từ chối”. Số lượng được tính trên tất cả các trang theo điều kiện lọc và phân quyền hiện tại. “5” là minh họa. Giữ nguyên các bộ lọc khi chuyển tab và đưa về trang 1. |
| 13  | Tab “Đã thu hồi” và số lượng | Tab + Count badge | I/O | Đã thu hồi | Nhấn để hiển thị phiếu đã được người lập thu hồi. Ánh xạ với trạng thái phiếu “Thu hồi” đã dùng ở màn hình nhân viên; không phải nghiệp vụ thu hồi tài sản đã cấp. Số lượng lấy từ tổng số phiếu đáp ứng trạng thái, điều kiện lọc và phân quyền. “3” là minh họa. |
| 14  | Tab “Tất cả” và số lượng | Tab + Count badge | I/O | Tất cả | Nhấn để hiển thị toàn bộ phiếu đã gửi thuộc phạm vi quản lý, không giới hạn một trạng thái. Bao gồm phiếu Chờ duyệt, Đã duyệt, Từ chối, Thu hồi và Đã cấp phát. Không hiển thị bản nháp chưa gửi của nhân viên. Số lượng là tổng số phiếu thỏa mãn các bộ lọc; “56” là minh họa. Có thể lớn hơn tổng bốn tab trạng thái vì còn phiếu Đã cấp phát. |
| 15  | Chọn thứ tự sắp xếp | Single-select dropdown | I   | N/A | Khởi tạo “Ngày tạo: Cũ nhất trước”. Cho chọn “Ngày tạo: Cũ nhất trước” hoặc “Ngày tạo: Mới nhất trước”; không nhập tự do. Sắp xếp theo trường thời điểm tạo đầy đủ của phiếu, không chỉ theo chuỗi ngày hiển thị. Giữ nguyên tab và bộ lọc; đổi thứ tự sẽ đưa về trang 1. Không kiểm tra trùng. |
| 16  | Nút làm mới danh sách | Icon button | I   | N/A | Nhấn để tải dữ liệu mới nhất của bảng, tổng số kết quả và số lượng trên các tab. Giữ nguyên từ khóa, bộ lọc, tab, kiểu sắp xếp và số bản ghi/trang. Nếu trang hiện tại không còn tồn tại sau khi cập nhật, chuyển về trang hợp lệ gần nhất. Trong lúc tải, ngăn nhấn lặp. |
| 17  | Cột “STT” | Table column / Label | O   | STT | Giá trị từng dòng được tính theo công thức: (Trang hiện tại − 1) × Số bản ghi/trang + Vị trí dòng trên trang. Hiển thị số nguyên dương, cập nhật theo kết quả lọc và sắp xếp. Không dùng STT làm mã định danh phiếu. |
| 18  | Cột “Mã phiếu” | Table column / Link | I/O | Mã phiếu | Lấy từ trường “Mã phiếu” của Phiếu yêu cầu cấp phát. Hiển thị đầy đủ bằng chữ xanh, có thể nhấn để mở Chi tiết đúng phiếu. Không chỉnh sửa trực tiếp tại bảng. Hệ thống sử dụng mã định danh nội bộ của phiếu để truy xuất và kiểm tra quyền trước khi mở chi tiết. |
| 19  | Cột “Người tạo phiếu” | Table column / Text | O   | Người tạo phiếu | Lấy họ tên của nhân viên được liên kết qua trường “Người lập” trên phiếu. Chỉ hiển thị họ tên, không hiển thị mã nhân viên bên dưới. Mã nhân viên vẫn được sử dụng để tìm kiếm tại thành phần 6. Nếu tên vượt chiều rộng cột, rút gọn bằng dấu “…” và cho xem đầy đủ qua tooltip. |
| 20  | Cột “Phòng ban” | Table column / Text | O   | Phòng ban | Lấy tên phòng ban người lập đã được ghi nhận tại thời điểm tạo phiếu. Không lấy phòng ban của người nhận để thay thế, không tự thay đổi dữ liệu lịch sử theo việc điều chuyển nhân viên sau này. Tên dài được rút gọn bằng dấu “…” và có tooltip đầy đủ. |
| 21  | Cột “Loại yêu cầu” | Table column / Text | O   | Loại yêu cầu | Lấy từ trường “Loại yêu cầu” của phiếu, ánh xạ thành “Cho cá nhân” hoặc “Cho nhân viên mới”. Không hiển thị mã kỹ thuật. Không cho thay đổi loại yêu cầu tại bảng danh sách. |
| 22  | Cột “Người nhận tài sản” | Table column / Text | O   | Người nhận tài sản | Lấy họ tên người nhận đã lưu trong thông tin người nhận của phiếu. Với yêu cầu cá nhân, hiển thị người lập đồng thời là người nhận; với nhân viên mới, hiển thị nhân viên mới được chỉ định. Không mặc định thay bằng người tạo phiếu. Tên dài được rút gọn và cho xem đầy đủ qua tooltip. |
| 23  | Cột “Ngày tạo” | Table column / Date text \[dd/MM/yyyy\] | O   | Ngày tạo | Lấy phần ngày từ trường “Thời điểm tạo” của phiếu, hiển thị theo múi giờ hệ thống và định dạng dd/MM/yyyy. Không thay bằng ngày gửi hoặc ngày cập nhật gần nhất. Biểu tượng mũi tên thể hiện chiều sắp xếp hiện tại, đồng bộ với thành phần 15. |
| 24  | Cột “Ngày cần sử dụng” | Table column / Date text \[dd/MM/yyyy\] | O   | Ngày cần sử dụng | Lấy từ trường “Ngày cần sử dụng” đã lưu trên phiếu. Hiển thị định dạng dd/MM/yyyy; không tự đổi thành ngày hiện tại hoặc ngày bàn giao dự kiến. Không chỉnh sửa trực tiếp tại bảng. |
| 25  | Cột “Trạng thái” | Table column / Badge | O   | Trạng thái | Lấy từ trường “Trạng thái hiện tại” của từng phiếu. Badge chỉ gồm chữ, không có icon. Chờ duyệt: nền cam nhạt, chữ cam; Đã duyệt: nền xanh nhạt, chữ xanh; Từ chối: nền đỏ nhạt, chữ đỏ; Thu hồi: nền xám nhạt, chữ xám; Đã cấp phát: nền xanh lục nhạt, chữ xanh lục. Khi chọn tab Chờ duyệt, các dòng đều phải thuộc trạng thái Chờ duyệt. |
| 26  | Thống kê kết quả đang hiển thị | Label | O   | N/A | Hiển thị dạng “Hiển thị {A}–{B} trên {N} phiếu”. N là tổng số kết quả theo tab, bộ lọc và quyền truy cập; A và B là vị trí bản ghi đầu/cuối của trang hiện tại. B không vượt N. Khi không có kết quả, hiển thị “Hiển thị 0 trên 0 phiếu”. “Hiển thị 1–6 trên 12 phiếu” là minh họa. |
| 27  | Khu vực phân trang | Page-size dropdown + Pagination | I/O | N/A | Gồm chọn số bản ghi/trang, nút trước, số trang và nút sau. Khởi tạo 6 bản ghi/trang; các lựa chọn gồm 6, 12, 24, không nhập tự do. Đổi số bản ghi/trang đưa về trang 1. Nhấn số trang hoặc nút trước/sau để chuyển trang, giữ nguyên bộ lọc, tab và sắp xếp. Trang hiện tại có nền xanh, chữ trắng. Vô hiệu hóa nút trước ở trang đầu và nút sau ở trang cuối; không cho chuyển ngoài phạm vi. |

Bảng 82. Mô tả thành phần màn hình MH-02.05

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-02.19 | Điều kiện truy cập: Người dùng phải đăng nhập và được phân quyền quản lý yêu cầu cấp phát. Kiểm tra quyền ở phía máy chủ khi tải danh sách, thống kê và mở chi tiết; không chỉ dựa vào việc hiển thị menu. |
| QT-02.20 | Phạm vi dữ liệu: Nhân viên quản lý tài sản xem được các phiếu đã gửi trong phạm vi được phân quyền. Không giới hạn theo người lập đang đăng nhập và không hiển thị bản nháp chưa gửi của nhân viên. |
| QT-02.21 | Khởi tạo màn hình: Chọn tab Chờ duyệt; từ khóa trống; phòng ban là “Tất cả phòng ban”; loại yêu cầu là “Tất cả loại yêu cầu”; sắp xếp ngày tạo cũ nhất trước; hiển thị trang 1 với 6 bản ghi/trang. |
| QT-02.22 | Kết hợp điều kiện: Từ khóa được đối chiếu theo quan hệ OR giữa mã phiếu, họ tên người lập và mã nhân viên người lập. Kết quả từ khóa kết hợp theo AND với phòng ban, loại yêu cầu, tab trạng thái và phạm vi phân quyền. |
| QT-02.23 | Chuyển tab: Chỉ chọn một tab tại một thời điểm. Chuyển tab giữ nguyên từ khóa, bộ lọc, số bản ghi/trang và kiểu sắp xếp; đưa danh sách về trang 1. Tab đang chọn được thể hiện bằng màu xanh và gạch chân. |
| QT-02.24 | Sắp xếp: Mặc định phiếu chờ duyệt có thời điểm tạo cũ nhất lên đầu. Dùng thời điểm tạo đầy đủ để so sánh; nếu trùng thời điểm, dùng mã định danh phiếu làm tiêu chí phụ để thứ tự phân trang ổn định. |
| QT-02.25 | Phân trang: Tổng số trang được tính từ tổng kết quả và số bản ghi/trang, làm tròn lên. Khi số kết quả giảm khiến trang hiện tại không còn hợp lệ, chuyển về trang hợp lệ gần nhất. Không thay đổi điều kiện lọc khi chuyển trang. |
| QT-02.26 | Không có dữ liệu: Khi tab Chờ duyệt không có phiếu và không áp dụng điều kiện tìm kiếm/lọc cụ thể, hiển thị “Hiện không có phiếu nào cần phê duyệt”. Nếu không có kết quả do bộ lọc, hiển thị “Không tìm thấy phiếu yêu cầu phù hợp”. Thông báo thay thế phần dữ liệu bảng, không tạo thêm khu vực bên dưới bảng. |
| QT-02.27 | Lỗi tải dữ liệu: Hiển thị “Không thể tải danh sách phiếu. Vui lòng thử lại”. Không diễn giải lỗi tải thành trạng thái không có dữ liệu. Cho phép sử dụng nút làm mới để thử lại; không thay đổi dữ liệu nghiệp vụ. |

Bảng 83. Quy tắc màn hình MH-02.05

**MH-02.06 – Chi tiết phiếu yêu cầu cấp phát**

Hình 36. MH-02.06 – Chi tiết phiếu yêu cầu cấp phát

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Đường dẫn điều hướng | Breadcrumb | O   | Cấp phát tài sản / Yêu cầu cấp phát / Chi tiết phiếu | Hiển thị vị trí màn hình hiện tại trong hệ thống, giúp người dùng xác định chức năng đang truy cập. |
| 2   | Biểu tượng thông báo | Button | I   | N/A | Khi nhấn, hệ thống hiển thị danh sách thông báo của tài khoản đang đăng nhập. |
| 3   | Ảnh đại diện tài khoản | Button | I   | N/A | Hiển thị ảnh đại diện hoặc chữ cái viết tắt của tài khoản đang đăng nhập. Khi nhấn, hệ thống mở menu tài khoản. |
| 4   | Quay lại danh sách | Button | I   | N/A | Khi nhấn, hệ thống điều hướng về màn hình danh sách phiếu yêu cầu cấp phát tài sản. |
| 5   | Tiêu đề màn hình | Label | O   | Chi tiết phiếu yêu cầu cấp phát | Hiển thị tên chức năng đang được thực hiện. |
| 6   | Mã phiếu yêu cầu | Label \[30\] | O   | N/A | Hiển thị mã phiếu yêu cầu cấp phát tài sản đang được xem. Dữ liệu lấy từ trường Mã phiếu của phiếu yêu cầu. Mã phiếu duy nhất trong hệ thống và không cho phép chỉnh sửa. |
| 7   | Tiêu đề nhóm thông tin chung | Label | O   | Thông tin chung | Hiển thị tên khu vực chứa thông tin người tạo phiếu, người nhận tài sản và định mức cấp phát áp dụng. |
| 8   | Thông tin người tạo phiếu | Label | O   | N/A | Hiển thị Họ và tên, Mã nhân viên, Phòng ban và Chức danh của người lập phiếu. Dữ liệu lấy từ hồ sơ nhân viên liên kết với phiếu yêu cầu tại thời điểm lập phiếu. Không cho phép chỉnh sửa. |
| 9   | Thông tin người nhận | Label | O   | N/A | Hiển thị Họ và tên, Mã nhân viên, Phòng ban và Chức danh của người được đề nghị cấp phát tài sản. Dữ liệu lấy từ thông tin người nhận trong phiếu yêu cầu. Không cho phép chỉnh sửa. |
| 10  | Định mức áp dụng | Label \[255\] | O   | N/A | Hiển thị tên gói định mức được áp dụng cho phiếu yêu cầu. Dữ liệu lấy từ thông tin gói định mức liên kết với phiếu. Không cho phép chỉnh sửa. |
| 11  | Tiêu đề nhóm thông tin yêu cầu | Label | O   | Thông tin yêu cầu | Hiển thị tên khu vực chứa lý do yêu cầu cấp phát và thời gian dự kiến sử dụng tài sản. |
| 12  | Lý do yêu cầu | Label \[1000\] | O   | N/A | Hiển thị nội dung lý do cấp phát tài sản do người lập phiếu khai báo. Dữ liệu lấy từ trường Lý do yêu cầu trong phiếu cấp phát. Hiển thị đầy đủ nội dung, không cho phép chỉnh sửa. |
| 13  | Ngày cần sử dụng | Label \[10\] | O   | N/A | Hiển thị ngày dự kiến cần sử dụng tài sản. Dữ liệu lấy từ trường Ngày cần sử dụng trong phiếu yêu cầu. Định dạng DD/MM/YYYY. Không cho phép chỉnh sửa. |
| 14  | Tiêu đề nhóm danh sách tài sản | Label | O   | Danh sách tài sản yêu cầu | Hiển thị tên khu vực chứa danh sách các loại tài sản được đề nghị cấp phát. |
| 15  | Bộ lọc Tất cả | Button | I   | N/A | Khi nhấn, hệ thống hiển thị toàn bộ tài sản thuộc phiếu yêu cầu, không phân biệt trạng thái định mức. Hiển thị tổng số dòng tài sản tương ứng bên cạnh tên bộ lọc. |
| 16  | Bộ lọc Vượt định mức | Button | I   | N/A | Khi nhấn, hệ thống chỉ hiển thị các tài sản có số lượng yêu cầu vượt số lượng được phép cấp theo định mức. Hiển thị tổng số dòng tài sản vượt định mức. |
| 17  | Bộ lọc Trong định mức | Button | I   | N/A | Khi nhấn, hệ thống chỉ hiển thị các tài sản có số lượng yêu cầu nằm trong giới hạn định mức được phép cấp. Hiển thị tổng số dòng tài sản trong định mức. |
| 18  | Bộ lọc Chưa có định mức | Button | I   | N/A | Khi nhấn, hệ thống chỉ hiển thị các tài sản chưa được cấu hình định mức trong gói định mức áp dụng. Hiển thị tổng số dòng tài sản chưa có định mức. |
| 19  | Ưu tiên dòng vượt định mức | Button | I   | N/A | Khi nhấn, hệ thống sắp xếp danh sách tài sản, đưa các dòng có trạng thái Vượt định mức lên đầu. Không làm thay đổi dữ liệu tài sản trong phiếu. |
| 20  | STT | Label | O   | STT | Hiển thị số thứ tự của từng dòng tài sản theo thứ tự đang được trình bày trong bảng. Số thứ tự được cập nhật khi lọc hoặc sắp xếp danh sách. |
| 21  | Loại tài sản | Label \[100\] | O   | N/A | Hiển thị tên loại tài sản được yêu cầu cấp phát. Dữ liệu lấy từ danh mục Loại tài sản thông qua chi tiết phiếu yêu cầu cấp phát. |
| 22  | Mô tả tài sản | Label \[255\] | O   | N/A | Hiển thị mô tả hoặc thông số kỹ thuật của loại tài sản được yêu cầu. Dữ liệu lấy từ trường Mô tả tài sản trong chi tiết phiếu yêu cầu. |
| 23  | Số yêu cầu | Label \[10\] | O   | N/A | Hiển thị số lượng tài sản mà người lập phiếu đề nghị cấp phát. Dữ liệu lấy từ trường Số lượng yêu cầu trong chi tiết phiếu. Giá trị là số nguyên dương, không cho phép chỉnh sửa. |
| 24  | Định mức | Label \[10\] | O   | N/A | Hiển thị số lượng tài sản được phép cấp theo gói định mức áp dụng. Dữ liệu lấy từ chi tiết gói định mức. Nếu loại tài sản chưa được cấu hình định mức, hiển thị N/A. |
| 25  | Đã cấp | Label \[10\] | O   | N/A | Hiển thị số lượng tài sản cùng loại đã được cấp phát cho người nhận và được ghi nhận trong hệ thống theo phạm vi chính sách áp dụng. Dữ liệu lấy từ thông tin cấp phát và tài sản đang được người nhận quản lý, sử dụng. |
| 26  | Trạng thái định mức | Badge/Label | O   | N/A | Hiển thị trạng thái đánh giá định mức của từng loại tài sản, gồm Trong định mức, Vượt định mức hoặc Chưa có định mức. Trạng thái được hệ thống tự động xác định dựa trên dữ liệu số lượng yêu cầu, định mức và số lượng đã cấp. |
| 27  | Ghi chú | Label \[255\] | O   | N/A | Hiển thị nội dung ghi chú của từng loại tài sản do người lập phiếu khai báo. Dữ liệu lấy từ trường Ghi chú trong chi tiết phiếu. Nếu không có dữ liệu, hiển thị N/A. |
| 28  | Tiêu đề cột chi tiết | Label | O   | Chi tiết | Hiển thị tên cột chứa thao tác mở rộng hoặc thu gọn thông tin chi tiết của từng dòng tài sản. |
| 29  | Xem chi tiết tài sản | Button | I   | N/A | Khi nhấn vào biểu tượng mũi tên, hệ thống mở rộng dòng tài sản để hiển thị thông tin tài sản đang giữ cùng loại của người nhận. Khi nhấn lần nữa, hệ thống thu gọn phần thông tin chi tiết. |
| 30  | Tiêu đề danh sách tài sản đang giữ | Label | O   | Tài sản đang giữ cùng loại | Hiển thị tên khu vực chứa danh sách tài sản cùng loại hiện đang được người nhận quản lý, sử dụng. Khu vực xuất hiện khi mở rộng thông tin chi tiết của một dòng tài sản. |
| 31  | Mã tài sản | Label \[30\] | O   | N/A | Hiển thị mã định danh của tài sản đang được người nhận giữ. Dữ liệu lấy từ trường Mã tài sản trong hồ sơ tài sản đã được cấp phát. Mã tài sản là duy nhất trong hệ thống. |
| 32  | Ngày cấp | Label \[10\] | O   | N/A | Hiển thị ngày tài sản được bàn giao hoặc cấp phát cho người nhận. Dữ liệu lấy từ ngày cấp phát được ghi nhận trong biên bản bàn giao hoặc lịch sử cấp phát tài sản. Định dạng DD/MM/YYYY. |
| 33  | Tình trạng | Badge/Label | O   | N/A | Hiển thị tình trạng quản lý hoặc sử dụng hiện tại của tài sản. Dữ liệu lấy từ trường Trạng thái tài sản trong hồ sơ quản lý tài sản. Màu sắc hiển thị tương ứng với trạng thái được cấu hình trong hệ thống. |
| 34  | Mã tài sản chi tiết | Text | I   | N/A | Hiển thị mã tài sản dưới dạng liên kết. Khi nhấn, hệ thống điều hướng đến màn hình chi tiết tài sản tương ứng. Chỉ cho phép truy cập khi người dùng có quyền xem thông tin tài sản. |
| 35  | Ngày cấp tài sản chi tiết | Label \[10\] | O   | N/A | Hiển thị ngày cấp phát của từng tài sản trong danh sách tài sản đang giữ. Dữ liệu lấy từ lịch sử cấp phát tài sản hoặc biên bản bàn giao tương ứng. Định dạng DD/MM/YYYY. |
| 36  | Trạng thái tài sản chi tiết | Badge | O   | N/A | Hiển thị trạng thái hiện tại của từng tài sản đang giữ. Dữ liệu lấy từ hồ sơ quản lý tài sản. Trạng thái được biểu diễn bằng nhãn và màu sắc tương ứng. |
| 37  | Thống kê danh sách tài sản | Label | O   | N/A | Hiển thị tổng số dòng tài sản trong phiếu và số lượng dòng theo từng trạng thái định mức. Dữ liệu được hệ thống tính toán từ toàn bộ danh sách tài sản của phiếu, không phụ thuộc vào bộ lọc đang được chọn. |
| 38  | Quay lại | Button | I   | N/A | Khi nhấn, hệ thống điều hướng về màn hình danh sách phiếu yêu cầu cấp phát tài sản. Không thực hiện thay đổi trạng thái phiếu. |
| 39  | Từ chối | Button | I   | N/A | Khi nhấn, hệ thống mở hộp thoại từ chối phiếu yêu cầu cấp phát. Người dùng phải nhập lý do từ chối trước khi xác nhận. Nếu xử lý thành công, phiếu được cập nhật sang trạng thái Từ chối. |
| 40  | Phê duyệt | Button | I   | N/A | Khi nhấn, hệ thống thực hiện quy trình phê duyệt phiếu yêu cầu. Hệ thống kiểm tra quyền phê duyệt và trạng thái phiếu trước khi xử lý. Nếu đáp ứng điều kiện và người dùng xác nhận, phiếu được cập nhật sang trạng thái Đã duyệt. |

Bảng 84. Mô tả thành phần màn hình MH-02.06

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-02.28 | Chỉ đọc thông tin: Các thông tin hiển thị tại màn hình Chi tiết phiếu yêu cầu cấp phát tài sản không cho phép người dùng chỉnh sửa trực tiếp. |
| QT-02.29 | Xác định trạng thái Trong định mức: Một dòng tài sản được xác định là Trong định mức khi loại tài sản có cấu hình định mức hợp lệ và tổng số lượng đã cấp cùng số lượng đang yêu cầu không vượt quá số lượng cho phép theo chính sách cấp phát. |
| QT-02.30 | Xác định trạng thái Vượt định mức: Một dòng tài sản được xác định là Vượt định mức khi loại tài sản có cấu hình định mức hợp lệ và tổng số lượng đã cấp cùng số lượng đang yêu cầu lớn hơn số lượng được phép cấp theo chính sách. |
| QT-02.31 | Xác định trạng thái Chưa có định mức: Một dòng tài sản được xác định là Chưa có định mức khi không tìm thấy cấu hình định mức áp dụng cho loại tài sản trong gói định mức của người nhận. |
| QT-02.32 | Mở rộng chi tiết tài sản: Khi người dùng nhấn biểu tượng mở rộng tại một dòng tài sản, hệ thống hiển thị danh sách tài sản cùng loại đang được người nhận giữ. Khi nhấn lại, hệ thống thu gọn khu vực chi tiết. |

Bảng 85. Quy tắc màn hình MH-02.06

**MH-02.07 – Nhập lý do từ chối phiếu yêu cầu**

Hình 37. MH-02.07 – Nhập lý do từ chối phiếu yêu cầu

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Tiêu đề popup | Label | O   | Từ chối yêu cầu cấp phát | Hiển thị tiêu đề popup. |
| 2   | Đóng | Icon Button | I   | Biểu tượng X | Cho phép đóng popup và không thực hiện từ chối yêu cầu cấp phát. |
| 3   | Lý do từ chối | Label | O   | Lý do từ chối \* | Hiển thị nhãn trường nhập lý do từ chối. Dấu \* thể hiện trường bắt buộc nhập. |
| 4   | Nhập lý do từ chối | Textarea \[500\] | I   | Rỗng | Cho phép người dùng nhập nội dung lý do từ chối yêu cầu cấp phát tài sản. Placeholder: “Nhập lý do từ chối yêu cầu cấp phát tài sản...”. |
| 5   | Bộ đếm ký tự | Label | O   | 0/500 | Hiển thị số ký tự đã nhập trên tổng số ký tự tối đa cho phép. |
| 6   | Hướng dẫn nhập liệu | Label | O   | Vui lòng nhập lý do để người yêu cầu có thể điều chỉnh. | Hiển thị nội dung hướng dẫn người dùng nhập lý do từ chối. |
| 7   | Hủy | Button | I   | Hủy | Cho phép đóng popup, hủy thao tác từ chối và không lưu nội dung đã nhập. |
| 8   | Xác nhận từ chối | Button | I   | Xác nhận từ chối | Cho phép người dùng xác nhận từ chối phiếu yêu cầu cấp phát tài sản sau khi nhập lý do hợp lệ. |

Bảng 86. Mô tả thành phần màn hình MH-02.07

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-02.33 | Trường Lý do từ chối: Bắt buộc nhập, tối đa 500 ký tự. Không chấp nhận nội dung chỉ chứa khoảng trắng. Khi người dùng để trống hoặc chỉ nhập khoảng trắng và chọn “Xác nhận từ chối”, hệ thống hiển thị thông báo lỗi “Vui lòng nhập lý do từ chối” bên dưới trường nhập liệu. |
| QT-02.34 | Bộ đếm ký tự: Khi người dùng nhập hoặc xóa nội dung trong trường “Lý do từ chối”, bộ đếm ký tự được cập nhật tương ứng theo định dạng “Số ký tự đã nhập/500”. Khi trường nhập liệu trống, hiển thị “0/500”. |

Bảng 87. Quy tắc màn hình MH-02.07

### 3.3.10 CN-02.3 Lập và xác nhận biên bản bàn giao tài sản

#### 3.3.10.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-02.3 |     |     |
| Tên UC | Lập biên bản bàn giao tài sản |     |     |
| Mô tả UC | Cho phép lập biên bản bàn giao tài sản và xác nhận biên bản giữa 2 bên |     |     |
| Tác nhân chính | Nhân viên, Nhân viên quản lý tài sản |     |     |
| Điều kiện kích hoạt | Nhân viên quản lý tài sản đang ở giao diện chi tiết phiếu yêu cầu cấp phát tài sản |     |     |
| Tiền điều kiện | Tài khoản người dùng đã đăng nhập và được phân quyền |     |     |
| Hậu điều kiện | Biên bản bàn giao được xác nhận thành công bởi người sử dụng tài sản  <br>Thông tin được ghi vào nhật ký |     |     |
| Luồng chính | Bước | Hành động của tác nhân | Phản hồi hệ thống |
|     | 1   | Nhân viên quản lý tài sản click vào button "Tạo biên bản" | Hệ thống hiển thị form biên bản bàn giao, tự động điền các thông tin cơ bản |
|     | 2   | Nhân viên quản lý tài sản điền thông tin vào biên bản bàn giao | Kiểm tra dữ liệu theo thời gian thực, đánh dấu trường lỗi |
|     | 3   | Nhân viên quản lý tài sản click button "Gửi" | Hệ thống validate trường thông tin trên biên bản, hiển thị màn hình xem lại nội dung biên bản  <br>Hệ thống hiển thị form nhập mật khẩu xác nhận |
|     | 4   | Nhân viên quản lý tài sản nhập mật khẩu và click button "Xác nhận" | Hệ thống xác thực mật khẩu Nếu đúng, thực hiện chuỗi ký của bên giao trong một giao dịch duy nhất. Trạng thái biên bản: “Chờ bên nhận ký”. Biên bản bị khóa nội dung. Gửi thông báo cho bên nhận. |
|     | 5   | Nhân viên tiếp nhận tài sản mở thông báo, click xem chi tiết biên bản | Hiển thị nội dung biên bản chỉ đọc. Hệ thống tính lại hash nội dung hiện tại, so khớp với hash đã lưu lúc bên giao ký; nếu lệch thì chặn thao tác |
|     | 6   | Nhân viên tiếp nhận tài sản click button "Xác nhận" | Hệ thống hiển thị form nhập mật khẩu xác nhận |
|     | 7   | Nhân viên nhận tài sản click button "Xác nhận" | Hệ thống hiển thị form nhập mật khẩu để xác nhận |
|     | 8   | Nhân viên nhận tài sản nhập mật khẩu và click button "Xác nhận" | Hệ thống xác thực mật khẩu. Nếu đúng, thực hiện chuỗi ký của bên nhận trong một giao dịch duy nhất.  <br>Trạng thái biên bản chuyển sang: “Hoàn tất”  <br>Tài sản tương ứng chuyển sang trạng thái "Đang sử dụng"  <br>Trạng thái phiếu yêu cầu cấp phát tương ứng chuyển sang "Đã cấp phát" |
| Luồng thay thế | 3A  | Nhân viên quản lý tài sản click button "Lưu nháp" | Hệ thống validate trường thông tin trên biên bản. Lưu biên bản trạng thái “Nháp” |
|     | 4A  | Nhân viên quản lý tài sản click button "Hủy" | Hệ thống đóng form nhập mật khẩu |
|     | 4B, 8A | Nhân viên quản lý tài sản nhập sai mật khẩu | Hệ thống thông báo sai mật khẩu |
| Luồng ngoại lệ | E5  | Hash nội dung không khớp | Chặn quyền xác nhận |
|     | E1,4,8 | Phiếu thay đổi trạng thái trong lúc chờ xác nhận | Chặn quyền xác nhận |
|     | E4, E8 | Vượt quá số lần nhập sai mật khẩu | Tạm khóa 15 phút không thể xác nhận |
| Quy tắc nghiệp vụ | BR-02.10, BR-02.11, BR-02.12, BR-02.13, BR-02.14, BR-02.15 |     |     |
| Mã AD | AD-02.3 |     |     |
| Mã giao diện | MH-02.08, MH-02.09, MH-02.10, MH-02.11 |     |     |

Bảng 88. Đặc tả UC-02.3 – Lập và xác nhận biên bản bàn giao tài sản

#### 3.3.10.2 Sơ đồ hoạt động

Hình 38. AD-02.3 – Lập và xác nhận biên bản bàn giao

#### 3.3.10.3 Giao diện

**MH-02.08 – Tạo biên bản bàn giao tài sản**

Hình 39. MH-02.08 – Tạo biên bản bàn giao tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Đường dẫn điều hướng | Breadcrumb | I/O | Cấp phát tài sản / Yêu cầu cấp phát / Biên bản bàn giao tài sản | Hiển thị vị trí màn hình hiện tại trong cấu trúc hệ thống. Người dùng có thể nhấn vào các mục điều hướng phía trước để chuyển đến màn hình tương ứng. Mục “Biên bản bàn giao tài sản” hiển thị là trang hiện tại, không cho phép điều hướng khi nhấn. |
| 2   | Thông báo | Icon Button | I/O | N/A | Hiển thị biểu tượng chuông thông báo. Số lượng thông báo chưa đọc được lấy từ dữ liệu thông báo của tài khoản đang đăng nhập và hiển thị dưới dạng số trên biểu tượng. Khi nhấn, hệ thống mở danh sách thông báo. |
| 3   | Tài khoản người dùng | Icon Button | I   | N/A | Hiển thị ảnh đại diện hoặc chữ viết tắt của người dùng đang đăng nhập. Khi nhấn, hệ thống hiển thị menu tài khoản. Không hiển thị trực tiếp họ tên và vai trò trên thanh điều hướng. |
| 4   | Tiêu đề màn hình | Label | O   | Biên bản bàn giao tài sản | Hiển thị tên màn hình đang truy cập. Nội dung cố định, không cho phép chỉnh sửa. |
| 5   | Mô tả màn hình | Label | O   | Lập biên bản bàn giao tài sản giữa các cá nhân/đơn vị trong tổ chức | Hiển thị nội dung mô tả chức năng của màn hình. Nội dung cố định, không cho phép chỉnh sửa. |
| 6   | Số biên bản | Label | O   | N/A | Hiển thị số biên bản bàn giao do hệ thống tự động sinh, theo định dạng mã biên bản được cấu hình. Mã phải duy nhất trong hệ thống, không cho phép người dùng chỉnh sửa. Với biên bản mới, mã được tạo theo cơ chế đánh số của hệ thống và gắn với bản ghi khi lưu thành công. |
| 7   | Ngày lập biên bản | Label | O   | N/A | Hiển thị ngày lập biên bản theo định dạng dd/MM/yyyy. Giá trị được lấy từ ngày tạo biên bản do hệ thống ghi nhận. Không cho phép người dùng chỉnh sửa trực tiếp. |
| 8   | Bên giao | Label | O   | Bên giao | Hiển thị tiêu đề nhóm thông tin người bàn giao tài sản. Bên dưới có dòng mô tả “Thông tin người bàn giao tài sản”. |
| 9   | Họ và tên bên giao | Textbox \[100\] | O   | N/A | Hiển thị họ và tên của nhân viên thực hiện bàn giao tài sản. Dữ liệu lấy từ trường Họ và tên thuộc hồ sơ nhân viên được xác định là bên giao. Không cho phép chỉnh sửa trực tiếp tại màn hình lập biên bản. Trường bắt buộc có dữ liệu trước khi gửi biên bản. |
| 10  | Mã nhân viên bên giao | Textbox \[20\] | O   | N/A | Hiển thị mã nhân viên của bên giao, lấy từ trường Mã nhân viên thuộc hồ sơ nhân viên. Mã nhân viên phải là duy nhất trong danh mục nhân viên. Không cho phép chỉnh sửa trực tiếp. |
| 11  | Phòng ban bên giao | Textbox \[100\] | O   | N/A | Hiển thị tên phòng ban mà bên giao đang trực thuộc. Dữ liệu được tra cứu từ danh mục phòng ban theo Mã phòng ban trong hồ sơ nhân viên bên giao. Không cho phép chỉnh sửa trực tiếp. |
| 12  | Chức vụ bên giao | Textbox \[100\] | O   | N/A | Hiển thị tên chức vụ hiện tại của bên giao. Dữ liệu được tra cứu từ danh mục chức vụ theo thông tin chức vụ trong hồ sơ nhân viên. Không cho phép chỉnh sửa trực tiếp. |
| 13  | Bên nhận | Label | O   | Bên nhận | Hiển thị tiêu đề nhóm thông tin người nhận tài sản. Bên dưới có dòng mô tả “Thông tin người nhận tài sản”. |
| 14  | Họ và tên bên nhận | Textbox \[100\] | O   | N/A | Hiển thị họ và tên của nhân viên được cấp phát tài sản. Dữ liệu được lấy từ trường Họ và tên thuộc hồ sơ nhân viên có mã trùng với mã người nhận trên phiếu yêu cầu cấp phát đã duyệt. Không cho phép chỉnh sửa trực tiếp. Trường bắt buộc có dữ liệu trước khi gửi. |
| 15  | Mã nhân viên bên nhận | Textbox \[20\] | O   | N/A | Hiển thị mã nhân viên của người nhận tài sản, lấy từ trường Mã nhân viên được xác định trên phiếu yêu cầu cấp phát. Mã phải tồn tại và duy nhất trong danh mục nhân viên. Không cho phép chỉnh sửa trực tiếp. |
| 16  | Phòng ban bên nhận | Textbox \[100\] | O   | N/A | Hiển thị tên phòng ban của người nhận tài sản. Dữ liệu được tra cứu từ danh mục phòng ban dựa trên hồ sơ của nhân viên nhận tài sản. Không cho phép chỉnh sửa trực tiếp. |
| 17  | Chức vụ bên nhận | Textbox \[100\] | O   | N/A | Hiển thị tên chức vụ của nhân viên nhận tài sản. Dữ liệu được tra cứu từ danh mục chức vụ dựa trên hồ sơ nhân viên nhận. Không cho phép chỉnh sửa trực tiếp. |
| 18  | Danh sách tài sản bàn giao | Label | O   | Danh sách tài sản bàn giao | Hiển thị tiêu đề khu vực chứa danh sách các tài sản được bàn giao cho người nhận. |
| 19  | Thêm tài sản vào | Button | I   | N/A | Khi người dùng nhấn, hệ thống mở popup lựa chọn tài sản bàn giao. Cho phép lựa chọn tài sản từ danh sách tài sản đủ điều kiện cấp phát theo phiếu yêu cầu đã duyệt. Sau khi xác nhận lựa chọn, hệ thống bổ sung tài sản vào bảng danh sách bàn giao. Không cho phép thêm trùng cùng một tài sản định danh vào biên bản. |
| 20  | Bảng danh sách tài sản bàn giao | Table | O   | N/A | Hiển thị danh sách tài sản được lựa chọn để bàn giao. Mỗi dòng tương ứng một loại tài sản hoặc một tài sản theo cách quản lý của hệ thống. Dữ liệu được lấy từ các tài sản đã được thêm vào biên bản. Bảng gồm 8 cột: STT, Tên tài sản, Loại tài sản, Đơn vị tính, Số lượng, Đơn giá, Thành tiền, Ghi chú. Chi tiết các cột được đặc tả bên dưới. |
| 20.1 | STT | Integer | O   | N/A | Hiển thị số thứ tự của từng dòng tài sản, bắt đầu từ 1 và tăng liên tiếp theo thứ tự hiển thị. Hệ thống tự động đánh lại số thứ tự khi danh sách thay đổi. |
| 20.2 | Tên tài sản | String \[200\] | O   | N/A | Hiển thị tên tài sản được bàn giao. Dữ liệu lấy từ trường Tên tài sản thuộc danh mục tài sản, thông qua tài sản được lựa chọn trong popup. Không cho phép chỉnh sửa trực tiếp. |
| 20.3 | Loại tài sản | String \[100\] | O   | N/A | Hiển thị tên loại tài sản tương ứng với từng tài sản. Dữ liệu lấy từ danh mục loại tài sản dựa trên Mã loại tài sản của tài sản. |
| 20.4 | Đơn vị tính | String \[50\] | O   | N/A | Hiển thị đơn vị tính của tài sản như Chiếc, Bộ, Cái. Dữ liệu được lấy từ trường Đơn vị tính thuộc thông tin tài sản hoặc danh mục đơn vị tính có liên kết. |
| 20.5 | Số lượng | Integer \[10\] | O   | N/A | Hiển thị số lượng tài sản thực hiện bàn giao. Dữ liệu lấy từ số lượng đã được xác nhận khi lựa chọn tài sản. Giá trị phải là số nguyên dương, không vượt quá số lượng tài sản đủ điều kiện bàn giao và số lượng còn được phép cấp phát theo phiếu yêu cầu. Không cho phép chỉnh sửa trực tiếp trong bảng hiện tại. |
| 20.6 | Đơn giá | Decimal (18,0) | O   | N/A | Hiển thị đơn giá của tài sản theo giá trị được ghi nhận trong hệ thống quản lý tài sản. Định dạng hiển thị: #,##0 với dấu chấm phân cách hàng nghìn theo quy ước Việt Nam, không hiển thị phần thập phân. Không cho phép chỉnh sửa trực tiếp. |
| 20.7 | Thành tiền | Decimal (18,0) | O   | N/A | Hiển thị giá trị của từng dòng tài sản, được tính theo công thức Thành tiền = Số lượng × Đơn giá. Hệ thống tự động tính toán và cập nhật khi số lượng tài sản thay đổi. |
| 20.8 | Ghi chú | String \[500\] | O   | N/A | Hiển thị thông tin ghi chú về tài sản bàn giao, chẳng hạn tình trạng tài sản hoặc phụ kiện đi kèm. Dữ liệu lấy từ ghi chú bàn giao được xác nhận khi thêm tài sản vào biên bản. Nếu không có ghi chú thì hiển thị trống. |
| 21  | Tổng cộng | Table Footer | O   | N/A | Hiển thị dòng tổng cộng cuối bảng. Cột Số lượng thể hiện tổng số lượng tài sản bàn giao; cột Thành tiền thể hiện tổng giá trị của tất cả dòng tài sản trong bảng. Hệ thống tự động tính toán lại khi danh sách tài sản thay đổi. Không cho phép chỉnh sửa trực tiếp. |
| 22  | Tổng giá trị tài sản bàn giao | Label | O   | Tổng giá trị tài sản bàn giao | Hiển thị tiêu đề khu vực tổng hợp giá trị các tài sản được bàn giao. |
| 23  | Tổng giá trị (bằng số) | Label | O   | N/A | Hiển thị tổng giá trị của tất cả tài sản trong biên bản, được lấy từ giá trị tổng cộng tại cột Thành tiền của bảng danh sách tài sản. Định dạng #,##0 VNĐ, ví dụ: 37.000.000 VNĐ. Không cho phép chỉnh sửa trực tiếp. |
| 24  | Tổng giá trị (bằng chữ) | Label | O   | N/A | Hiển thị giá trị tiền bằng chữ tiếng Việt, được hệ thống tự động chuyển đổi từ tổng giá trị bằng số. Ví dụ: “Ba mươi bảy triệu đồng chẵn.” Nội dung phải tương ứng với giá trị bằng số. Không cho phép chỉnh sửa trực tiếp. |
| 25  | Cam kết bàn giao | Label | O   | N/A | Hiển thị nội dung: “Kể từ ngày \[Ngày bàn giao\], số tài sản trên sẽ do \[Họ và tên bên nhận\] chịu trách nhiệm sử dụng và quản lý.” Trong đó, ngày bàn giao được lấy từ ngày bàn giao có hiệu lực do nghiệp vụ xác định; họ tên người nhận được lấy từ trường Họ và tên bên nhận (STT 14). Hệ thống tự động cập nhật nội dung khi dữ liệu nguồn thay đổi. Không cho phép chỉnh sửa trực tiếp. |
| 26  | Lưu nháp | Button | I   | N/A | Khi người dùng nhấn, hệ thống thực hiện lưu thông tin biên bản bàn giao đang lập ở trạng thái “Nháp”. Hệ thống lưu thông tin bên giao, bên nhận, danh sách tài sản và các giá trị liên quan. Cho phép người dùng tiếp tục hoàn thiện biên bản sau khi lưu. Trước khi lưu, hệ thống kiểm tra tính hợp lệ của những dữ liệu đã nhập và các ràng buộc cần thiết cho lưu nháp. |
| 27  | Gửi | Button | I   | N/A | Khi người dùng nhấn, hệ thống kiểm tra tính đầy đủ và hợp lệ của thông tin biên bản. Nếu hợp lệ, hệ thống gửi biên bản đến người nhận theo quy trình xác nhận bàn giao và cập nhật trạng thái tương ứng. Nếu không hợp lệ, hệ thống không gửi và hiển thị thông báo để người dùng điều chỉnh. |

Bảng 89. Mô tả thành phần màn hình MH-02.08

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-02.35 | Thông tin bên giao: Khi hồ sơ nhân viên bên giao không có thông tin phòng ban hoặc chức vụ, trường tương ứng hiển thị “Chưa cập nhật”. Khi không xác định được nhân viên bên giao, hệ thống hiển thị thông báo “Không tìm thấy thông tin bên giao”. |
| QT-02.36 | Thông tin bên nhận: Khi nhân viên nhận tài sản không còn tồn tại trong danh mục nhân viên hoặc không có trạng thái phù hợp để nhận tài sản, hệ thống hiển thị thông báo “Thông tin người nhận không hợp lệ”. |
| QT-02.37 | Danh sách tài sản trống: Khi chưa có tài sản nào được thêm vào biên bản, bảng danh sách hiển thị thông báo “Chưa có tài sản bàn giao”. Dòng tổng cộng hiển thị số lượng bằng 0, tổng giá trị bằng 0. |
| QT-02.38 | Danh sách tài sản có dữ liệu: Khi người dùng thêm tài sản thành công, tài sản được bổ sung vào bảng danh sách và hiển thị đầy đủ thông tin. Số thứ tự được cập nhật theo thứ tự hiển thị của các dòng tài sản. Khi trỏ chuột vào ô tên tài sản, thì hiện ra danh sách tài sản có thể cấp phát (Còn số lượng) |
| QT-02.39 | Tài sản đã tồn tại trong danh sách: Khi người dùng lựa chọn tài sản định danh đã có trong biên bản, hệ thống không bổ sung dòng trùng và hiển thị thông báo “Tài sản đã tồn tại trong danh sách bàn giao”. Với tài sản quản lý theo số lượng, chỉ được cộng dồn số lượng khi đáp ứng các giới hạn nghiệp vụ. |
| QT-02.40 | Cập nhật tổng số lượng: Khi danh sách tài sản được thêm, bớt hoặc thay đổi số lượng thành công, tổng số lượng tại dòng “Tổng cộng” được tính toán lại theo tổng số lượng của tất cả dòng tài sản hiện có. |
| QT-02.41 | Cập nhật tổng giá trị: Khi số lượng, đơn giá hoặc danh sách tài sản thay đổi, hệ thống tự động tính lại thành tiền của từng dòng, tổng thành tiền của bảng và tổng giá trị bằng số. |
| QT-02.42 | Hiển thị tổng giá trị bằng chữ: Khi tổng giá trị bằng số thay đổi, hệ thống tự động chuyển đổi lại tổng giá trị bằng chữ. Trường hợp tổng giá trị bằng 0, hiển thị “Không đồng”. |

Bảng 90. Quy tắc màn hình MH-02.08

**MH-02.09 – Xác nhận ký biên bản bằng mật khẩu**

Hình 40. MH-02.09 – Xác nhận ký biên bản bằng mật khẩu

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Tiêu đề popup | Label | O   | Xác nhận gửi biên bản bàn giao | Hiển thị tiêu đề popup xác nhận gửi biên bản bàn giao tài sản. Nội dung cố định, không cho phép chỉnh sửa. |
| 2   | Đóng popup | Icon Button | I   | N/A | Hiển thị biểu tượng X tại góc trên bên phải popup. Khi người dùng nhấn, hệ thống đóng popup, không thực hiện xác thực và không gửi biên bản bàn giao. |
| 3   | Hướng dẫn xác nhận | Label | O   | Vui lòng nhập mật khẩu tài khoản của bạn để xác thực và hoàn tất ký biên bản bàn giao tài sản. | Hiển thị nội dung hướng dẫn người dùng nhập mật khẩu tài khoản để xác thực trước khi thực hiện ký và gửi biên bản. Nội dung cố định, không cho phép chỉnh sửa. |
| 4   | Nhãn mã biên bản | Label | O   | Mã biên bản: | Hiển thị nhãn thông tin mã biên bản bàn giao đang được xác nhận. |
| 5   | Mã biên bản | Label \[30\] | O   | N/A | Hiển thị mã biên bản bàn giao được lấy từ trường Mã biên bản của biên bản đang thao tác tại màn hình Lập biên bản bàn giao tài sản. Mã biên bản phải tồn tại và duy nhất trong hệ thống. Không cho phép chỉnh sửa trực tiếp. |
| 6   | Nhãn người xác nhận | Label | O   | Người xác nhận: | Hiển thị nhãn thông tin người thực hiện xác nhận ký và gửi biên bản bàn giao. |
| 7   | Người xác nhận | Label \[100\] | O   | N/A | Hiển thị họ và tên người thực hiện xác nhận biên bản. Dữ liệu được lấy từ trường Họ và tên trong hồ sơ nhân viên liên kết với tài khoản đang đăng nhập. Không cho phép chỉnh sửa trực tiếp. |
| 8   | Nhãn mật khẩu xác nhận | Label | O   | Mật khẩu xác nhận \* | Hiển thị nhãn của trường nhập mật khẩu xác thực. Dấu \* màu đỏ thể hiện trường bắt buộc nhập. |
| 9   | Mật khẩu xác nhận | Password Input \[255\] | I   | N/A | Cho phép người dùng nhập mật khẩu của tài khoản đang đăng nhập để xác thực thao tác ký và gửi biên bản. Dữ liệu nhập có kiểu chuỗi ký tự, hỗ trợ các ký tự theo chính sách mật khẩu của hệ thống, tối đa 255 ký tự theo giới hạn giao diện đề xuất. Trường bắt buộc nhập, không chấp nhận giá trị rỗng. Không kiểm tra trùng dữ liệu; hệ thống kiểm tra mật khẩu nhập vào có khớp với thông tin xác thực của tài khoản đang đăng nhập hay không. Mật khẩu được che bằng ký tự đại diện khi nhập và không được hiển thị dưới dạng văn bản thông thường theo mặc định. Placeholder: “Nhập mật khẩu của bạn...”. |
| 10  | Hiển thị/Ẩn mật khẩu | Icon Button | I   | N/A | Hiển thị biểu tượng con mắt tại phía bên phải trường nhập mật khẩu. Khi người dùng nhấn lần đầu, hệ thống chuyển mật khẩu từ trạng thái che sang hiển thị ký tự thực tế. Khi nhấn lần tiếp theo, hệ thống chuyển mật khẩu về trạng thái che. Không làm thay đổi giá trị mật khẩu đã nhập. |
| 11  | Thông tin lưu ý | Label | O   | Mật khẩu dùng để xác nhận tính pháp lý khi hoàn tất biên bản bàn giao điện tử. | Hiển thị nội dung lưu ý về mục đích sử dụng mật khẩu trong quá trình xác nhận biên bản bàn giao. Nội dung cố định, không cho phép chỉnh sửa. |
| 12  | Hủy bỏ | Button | I   | N/A | Khi người dùng nhấn, hệ thống đóng popup và hủy thao tác xác nhận. Không thực hiện kiểm tra mật khẩu, không ký và không gửi biên bản bàn giao. Nội dung mật khẩu đã nhập không được lưu lại. |
| 13  | Xác nhận | Button | I   | N/A | Khi người dùng nhấn, hệ thống kiểm tra dữ liệu trường Mật khẩu xác nhận. Nếu dữ liệu hợp lệ, hệ thống thực hiện xác thực mật khẩu với tài khoản đang đăng nhập. Khi xác thực thành công, hệ thống tiến hành ghi nhận xác nhận điện tử, khóa nội dung biên bản theo quy trình và gửi biên bản đến người nhận. Nếu xác thực thất bại, hệ thống không thực hiện ký hoặc gửi biên bản và hiển thị thông báo lỗi tương ứng. |

Bảng 91. Mô tả thành phần màn hình MH-02.09

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-02.43 | Hiển thị thông tin biên bản: Khi popup được mở, hệ thống hiển thị mã biên bản của biên bản đang được xác nhận. Trường hợp không tìm thấy thông tin biên bản, hệ thống hiển thị thông báo “Không tìm thấy thông tin biên bản bàn giao” và không cho phép thực hiện xác nhận. |
| QT-02.44 | Hiển thị người xác nhận: Khi popup được mở, hệ thống hiển thị họ và tên nhân viên liên kết với tài khoản đang đăng nhập. Trường hợp không xác định được người xác nhận, hiển thị thông báo “Không xác định được thông tin người xác nhận” và không cho phép thực hiện xác nhận. |
| QT-02.45 | Trường Mật khẩu xác nhận: Trường bắt buộc nhập, không chấp nhận giá trị rỗng. Khi người dùng nhấn “Xác nhận” nhưng chưa nhập mật khẩu, hệ thống đánh dấu viền đỏ tại trường nhập và hiển thị thông báo “Vui lòng nhập mật khẩu xác nhận” bên dưới trường. Không thực hiện gửi yêu cầu xác thực. |
| QT-02.46 | Giới hạn ký tự mật khẩu: Khi số ký tự nhập đạt giới hạn tối đa 255 ký tự, hệ thống không cho phép nhập thêm. Người dùng vẫn có thể xóa hoặc chỉnh sửa nội dung đã nhập. Giới hạn này cần thống nhất với chính sách mật khẩu của hệ thống. |
| QT-02.47 | Trạng thái hiển thị mật khẩu: Khi popup được mở, mật khẩu mặc định ở trạng thái ẩn. Khi người dùng chọn biểu tượng con mắt, hệ thống hiển thị các ký tự mật khẩu đã nhập. Khi nhấn lại, hệ thống che mật khẩu bằng ký tự đại diện. |
| QT-02.48 | Mật khẩu không chính xác: Khi người dùng nhập mật khẩu không khớp với tài khoản đang đăng nhập và nhấn “Xác nhận”, hệ thống không thực hiện ký hoặc gửi biên bản. Trường mật khẩu được đánh dấu viền đỏ và hiển thị thông báo “Mật khẩu không chính xác. Vui lòng thử lại”. Popup vẫn mở để người dùng nhập lại. |
| QT-02.49 | Bảo mật trường mật khẩu: Khi người dùng đóng popup và mở lại, trường Mật khẩu xác nhận luôn hiển thị trống. Hệ thống không tự động điền lại mật khẩu đã nhập trong lần xác nhận trước. |
| QT-02.50 | Xử lý xác thực nhiều lần không thành công: Khi số lần nhập sai mật khẩu đạt ngưỡng giới hạn 5 lần theo chính sách bảo mật của hệ thống, hệ thống tạm thời không cho phép tiếp tục xác thực và hiển thị thông báo tương ứng với trạng thái hạn chế xác thực của tài khoản. |
| QT-02.51 | Ghi nhận xác nhận điện tử: Khi xác thực thành công và biên bản được ký, hệ thống ghi nhận người xác nhận, thời điểm xác nhận, mã biên bản và bằng chứng xác nhận gắn với nội dung biên bản. Sau khi ký thành công, nội dung biên bản được khóa theo quy trình; người dùng không được chỉnh sửa trực tiếp nội dung đã ký. |

Bảng 92. Quy tắc màn hình MH-02.09

**MH-02.10 – Danh sách biên bản bàn giao**

Hình 41. MH-02.10 – Danh sách biên bản bàn giao

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Đường dẫn điều hướng | Breadcrumb | I/O | Cấp phát tài sản / Bàn giao tài sản / Danh sách biên bản | Hiển thị vị trí màn hình hiện tại trong cấu trúc hệ thống. Người dùng có thể nhấn vào các mục điều hướng phía trước để chuyển đến màn hình tương ứng. Mục “Danh sách biên bản” là trang hiện tại, không cho phép điều hướng khi nhấn. |
| 2   | Thông báo | Icon Button | I/O | N/A | Hiển thị biểu tượng chuông thông báo. Số lượng thông báo chưa đọc được lấy từ dữ liệu thông báo thuộc tài khoản đang đăng nhập. Khi người dùng nhấn, hệ thống mở popup danh sách thông báo. |
| 3   | Tài khoản người dùng | Icon Button | I   | N/A | Hiển thị ảnh đại diện hoặc chữ viết tắt của người dùng đang đăng nhập. Khi nhấn, hệ thống hiển thị menu tài khoản. |
| 4   | Tiêu đề màn hình | Label | O   | Danh sách biên bản bàn giao | Hiển thị tên màn hình đang truy cập. Nội dung cố định, không cho phép chỉnh sửa. |
| 5   | Mô tả màn hình | Label | O   | Quản lý, theo dõi tiến độ lập và ký nhận biên bản bàn giao tài sản. | Hiển thị nội dung mô tả chức năng của màn hình. Nội dung cố định, không cho phép chỉnh sửa. |
| 6   | Tìm kiếm | Searchbox \[100\] | I   | N/A | Cho phép người dùng nhập từ khóa tìm kiếm biên bản bàn giao. Kiểu dữ liệu String, tối đa 100 ký tự, không bắt buộc nhập. Cho phép nhập chữ cái tiếng Việt có dấu, không dấu, chữ số, khoảng trắng và ký tự đặc biệt. Không kiểm tra trùng dữ liệu. Hệ thống tìm kiếm theo các trường Mã biên bản, Họ và tên bên giao, Họ và tên bên nhận. Không phân biệt chữ hoa, chữ thường. Placeholder: “Tìm kiếm mã biên bản, người giao, người nhận...”. |
| 7   | Phòng ban | Dropdown | I   | N/A | Cho phép người dùng lọc danh sách biên bản theo phòng ban. Dữ liệu lựa chọn được lấy từ trường Tên phòng ban thuộc danh mục phòng ban đang hoạt động trong hệ thống, kèm lựa chọn “Tất cả phòng ban”. Không cho phép nhập giá trị tự do. Khi chọn một phòng ban, hệ thống chỉ hiển thị các biên bản có người nhận thuộc phòng ban đó. |
| 8   | Trạng thái | Dropdown | I   | N/A | Cho phép người dùng lọc danh sách theo trạng thái biên bản. Các giá trị lựa chọn gồm: “Tất cả trạng thái”, “Nháp”, “Chờ ký”, “Hoàn tất”. Không cho phép nhập tự do. Khi chọn một trạng thái, hệ thống chỉ hiển thị các biên bản tương ứng. |
| 9   | Làm mới | Icon Button | I   | N/A | Hiển thị biểu tượng làm mới. Khi nhấn, hệ thống tải lại danh sách biên bản, đồng thời đưa bộ lọc tìm kiếm, phòng ban, trạng thái và sắp xếp về điều kiện mặc định. |
| 10  | Tất cả | Tab Button | I/O | Tất cả | Hiển thị tab “Tất cả” và tổng số biên bản thuộc phạm vi dữ liệu người dùng được phép truy cập. Số lượng được tính từ toàn bộ biên bản, không phân biệt trạng thái. Khi nhấn, hệ thống hiển thị danh sách biên bản thuộc tất cả trạng thái. Đây là tab được chọn mặc định khi mở màn hình. |
| 11  | Nháp | Tab Button | I/O | N/A | Hiển thị tab “Nháp” và số lượng biên bản đang ở trạng thái “Nháp”. Dữ liệu được tính bằng cách đếm các bản ghi biên bản có trạng thái Nháp. Khi nhấn, hệ thống chỉ hiển thị các biên bản có trạng thái tương ứng. |
| 12  | Chờ ký | Tab Button | I/O | N/A | Hiển thị tab “Chờ ký” và số lượng biên bản đang ở trạng thái “Chờ ký”. Dữ liệu được tính bằng cách đếm các bản ghi biên bản có trạng thái Chờ ký. Khi nhấn, hệ thống chỉ hiển thị danh sách biên bản đang chờ xác nhận ký nhận. |
| 13  | Hoàn tất | Tab Button | I/O | N/A | Hiển thị tab “Hoàn tất” và số lượng biên bản đã hoàn tất quá trình ký nhận. Dữ liệu được tính bằng cách đếm các bản ghi biên bản có trạng thái Hoàn tất. Khi nhấn, hệ thống chỉ hiển thị danh sách biên bản đã hoàn tất. |
| 14  | Nhãn sắp xếp | Label | O   | Sắp xếp: | Hiển thị nhãn cho chức năng sắp xếp danh sách biên bản. Nội dung cố định, không cho phép chỉnh sửa. |
| 15  | Sắp xếp | Dropdown | I   | N/A | Cho phép người dùng lựa chọn thứ tự sắp xếp danh sách biên bản. Các giá trị gồm: “Ngày lập: Mới nhất trước”, “Ngày lập: Cũ nhất trước”, “Tổng giá trị: Cao đến thấp”, “Tổng giá trị: Thấp đến cao”. Không cho phép nhập tự do. Khi thay đổi lựa chọn, hệ thống sắp xếp lại danh sách theo tiêu chí tương ứng. |
| 16  | Bảng danh sách biên bản | Table | O   | N/A | Hiển thị danh sách các biên bản bàn giao tài sản thuộc phạm vi người dùng được phép truy cập. Dữ liệu được lấy từ danh sách bản ghi biên bản bàn giao và thông tin liên quan. Bảng gồm 9 cột: STT, Mã biên bản, Bên giao, Bên nhận, Số lượng TS, Tổng giá trị, Ngày lập, Trạng thái, Thao tác. Danh sách được hiển thị theo điều kiện tìm kiếm, bộ lọc, sắp xếp và phân trang hiện tại. |
| 17  | STT | Integer | O   | N/A | Hiển thị số thứ tự của từng biên bản trong danh sách, bắt đầu từ 1 và tăng liên tiếp theo thứ tự hiển thị. Khi chuyển trang, số thứ tự tiếp tục theo vị trí của bản ghi trong toàn bộ danh sách kết quả. Không cho phép chỉnh sửa. |
| 18  | Mã biên bản | Hyperlink \[30\] | I/O | N/A | Hiển thị mã biên bản bàn giao dưới dạng liên kết màu xanh. Dữ liệu được lấy từ trường Mã biên bản thuộc bản ghi biên bản bàn giao. Mã phải duy nhất trong hệ thống. Khi người dùng nhấn vào mã, hệ thống điều hướng đến màn hình Chi tiết biên bản bàn giao tương ứng. |
| 19  | Trạng thái biên bản | Status Badge | O   | N/A | Hiển thị trạng thái hiện tại của biên bản, lấy từ trường Trạng thái thuộc bản ghi biên bản bàn giao. Các trạng thái gồm: “Nháp” hiển thị màu xám, “Chờ ký” hiển thị màu cam và “Hoàn tất” hiển thị màu xanh lá. Không cho phép chỉnh sửa trực tiếp. |
| 20  | Thao tác | Icon Button | I   | N/A | Hiển thị biểu tượng ba chấm dọc tại từng dòng biên bản. Khi người dùng nhấn, hệ thống hiển thị menu gồm ba chức năng: “Xem chi tiết”, “Sửa biên bản”, “In biên bản”. Chức năng “Xem chi tiết” cho phép truy cập màn hình chi tiết biên bản tương ứng. Chức năng “Sửa biên bản” chỉ được phép sử dụng khi biên bản có trạng thái “Nháp” và người dùng có quyền chỉnh sửa; với trạng thái “Chờ ký” hoặc “Hoàn tất”, lựa chọn này bị vô hiệu hóa. Chức năng “In biên bản” cho phép tải bản in của biên bản tương ứng. Nhân viên thông thường không có quyền sửa biên bản |
| 21  | Thông tin kết quả hiển thị | Label | O   | N/A | Hiển thị số lượng biên bản đang được hiển thị trên trang hiện tại và tổng số biên bản thỏa mãn điều kiện tìm kiếm, lọc. Định dạng: “Hiển thị \[Vị trí bắt đầu\]–\[Vị trí kết thúc\] trên \[Tổng số\] biên bản”. Ví dụ: “Hiển thị 1–6 trên 28 biên bản”. |
| 22  | Số bản ghi trên trang | Dropdown | I   | N/A | Cho phép lựa chọn số lượng biên bản hiển thị trên mỗi trang. Các giá trị đề xuất: 6, 10, 20, 50 bản ghi/trang. Không cho phép nhập tự do. Khi thay đổi số lượng bản ghi trên trang, hệ thống tải lại danh sách và cập nhật tổng số trang tương ứng. |
| 23  | Trang trước | Icon Button | I   | N/A | Hiển thị biểu tượng mũi tên sang trái. Khi nhấn, hệ thống chuyển về trang liền trước của danh sách biên bản theo điều kiện lọc hiện tại. |
| 24  | Trang hiện tại | Pagination Button | I/O | N/A | Hiển thị số trang đang được chọn. Trang hiện tại được đánh dấu bằng nền màu xanh và chữ màu trắng. Khi người dùng nhấn vào số trang khác, hệ thống hiển thị dữ liệu thuộc trang tương ứng. |
| 25  | Các trang khác | Pagination Button | I   | N/A | Hiển thị các số trang còn lại trong danh sách phân trang. Khi người dùng nhấn vào một số trang, hệ thống chuyển đến trang được chọn và cập nhật trạng thái trang hiện tại. Khi tổng số trang lớn, hệ thống sử dụng dấu “...” để thu gọn các số trang trung gian. |
| 26  | Trang tiếp theo | Icon Button | I   | N/A | Hiển thị biểu tượng mũi tên sang phải. Khi nhấn, hệ thống chuyển đến trang liền sau của danh sách biên bản theo điều kiện lọc hiện tại. |
| 28  | Cột Mã biên bản | Table Header | O   | Mã biên bản | Hiển thị tiêu đề cột chứa mã định danh của từng biên bản bàn giao. Dữ liệu của cột được lấy từ trường Mã biên bản thuộc bảng dữ liệu biên bản bàn giao. |
| 29  | Cột Bên giao | Table Header | O   | Bên giao | Hiển thị tiêu đề cột chứa họ tên người thực hiện bàn giao tài sản. Dữ liệu được lấy từ trường Họ và tên thuộc hồ sơ nhân viên có mã trùng với Mã nhân viên bên giao trên biên bản bàn giao. |
| 30  | Cột Bên nhận | Table Header | O   | Bên nhận | Hiển thị tiêu đề cột chứa họ tên người nhận tài sản. Dữ liệu được lấy từ trường Họ và tên thuộc hồ sơ nhân viên có mã trùng với Mã nhân viên bên nhận trên biên bản bàn giao. |
| 31  | Cột Số lượng TS | Table Header | O   | Số lượng TS | Hiển thị tiêu đề cột chứa tổng số lượng tài sản được ghi nhận trong từng biên bản bàn giao. Dữ liệu được tính bằng tổng trường Số lượng của các dòng chi tiết tài sản thuộc biên bản tương ứng. Định dạng hiển thị: “\[Số lượng\] tài sản”. |
| 32  | Cột Tổng giá trị | Table Header | O   | Tổng giá trị | Hiển thị tiêu đề cột chứa tổng giá trị tài sản bàn giao. Dữ liệu được lấy từ trường Tổng giá trị của biên bản bàn giao hoặc được tính bằng tổng Thành tiền của các dòng tài sản trong biên bản. Định dạng hiển thị số tiền có dấu chấm phân cách hàng nghìn, đơn vị đồng (đ). |
| 33  | Cột Ngày lập | Table Header | O   | Ngày lập | Hiển thị tiêu đề cột chứa ngày lập biên bản. Dữ liệu được lấy từ trường Ngày lập thuộc bản ghi biên bản bàn giao. Ngày được hiển thị theo định dạng dd/MM/yyyy. |
| 34  | Cột Trạng thái | Table Header | O   | Trạng thái | Hiển thị tiêu đề cột chứa trạng thái xử lý của biên bản bàn giao. Dữ liệu được lấy từ trường Trạng thái của bản ghi biên bản bàn giao. |
| 35  | Cột Thao tác | Table Header | O   | Thao tác | Hiển thị tiêu đề cột chứa các nút thao tác đối với từng biên bản. Mỗi dòng hiển thị một nút ba chấm để mở menu thao tác tương ứng với trạng thái biên bản. |

Bảng 93. Mô tả thành phần màn hình MH-02.10

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-02.52 | Danh sách biên bản trống: Khi hệ thống không có biên bản bàn giao nào thuộc phạm vi người dùng được phép truy cập, bảng danh sách hiển thị thông báo “Chưa có biên bản bàn giao nào”. |
| QT-02.53 | Không có kết quả tìm kiếm: Khi người dùng nhập từ khóa tìm kiếm nhưng không có biên bản nào thỏa mãn, hệ thống hiển thị thông báo “Không tìm thấy biên bản phù hợp”. |
| QT-02.54 | Tìm kiếm không phân biệt chữ hoa, chữ thường: Khi người dùng nhập từ khóa có chữ hoa hoặc chữ thường, hệ thống trả về kết quả phù hợp mà không phân biệt kiểu chữ. Ví dụ: “trần văn minh” và “TRẦN VĂN MINH” cho kết quả tương đương. |
| QT-02.55 | Lọc theo phòng ban: Khi người dùng lựa chọn một phòng ban, hệ thống chỉ hiển thị các biên bản có người nhận thuộc phòng ban được chọn. Khi lựa chọn “Tất cả phòng ban”, hệ thống không áp dụng điều kiện lọc phòng ban. |
| QT-02.56 | Lọc theo trạng thái: Khi người dùng lựa chọn một trạng thái trong Dropdown “Trạng thái”, hệ thống chỉ hiển thị các biên bản có trạng thái tương ứng. Khi chọn “Tất cả trạng thái”, hệ thống không áp dụng điều kiện lọc trạng thái từ Dropdown. |
| QT-02.57 | Số lượng biên bản trên các tab: Khi số lượng biên bản ở một trạng thái thay đổi, hệ thống tự động cập nhật bộ đếm trên các tab “Tất cả”, “Nháp”, “Chờ ký” và “Hoàn tất”. Các bộ đếm được tính theo phạm vi dữ liệu người dùng có quyền truy cập. |
| QT-02.58 | Làm mới danh sách: Khi người dùng nhấn biểu tượng “Làm mới”, hệ thống xóa từ khóa tìm kiếm, đưa Dropdown phòng ban về “Tất cả phòng ban”, Dropdown trạng thái về “Tất cả trạng thái”, chọn tab “Tất cả”, sắp xếp theo ngày lập mới nhất và chuyển về trang đầu tiên. |
| QT-02.59 | Sắp xếp theo ngày lập: Khi người dùng lựa chọn “Ngày lập: Mới nhất trước”, hệ thống sắp xếp danh sách theo ngày lập giảm dần. Khi chọn “Ngày lập: Cũ nhất trước”, danh sách được sắp xếp theo ngày lập tăng dần. |
| QT-02.60 | Sắp xếp theo tổng giá trị: Khi người dùng chọn “Tổng giá trị: Cao đến thấp”, hệ thống sắp xếp các biên bản theo tổng giá trị giảm dần. Khi chọn “Tổng giá trị: Thấp đến cao”, hệ thống sắp xếp theo tổng giá trị tăng dần. |
| QT-02.61 | Hiển thị trạng thái Nháp: Khi biên bản ở trạng thái “Nháp”, cột Trạng thái hiển thị nhãn màu xám với nội dung “Nháp”. |
| QT-02.62 | Hiển thị trạng thái Chờ ký: Khi biên bản ở trạng thái “Chờ ký”, cột Trạng thái hiển thị nhãn màu cam với nội dung “Chờ ký”. |
| QT-02.63 | Hiển thị trạng thái Hoàn tất: Khi biên bản ở trạng thái “Hoàn tất”, cột Trạng thái hiển thị nhãn màu xanh lá với nội dung “Hoàn tất”. |
| QT-02.64 | Hiển thị menu thao tác: Khi người dùng nhấn biểu tượng ba chấm tại một biên bản, hệ thống hiển thị menu gồm ba lựa chọn: “Xem chi tiết”, “Sửa biên bản”, “In biên bản”. Menu được hiển thị tại vị trí tương ứng với dòng biên bản được chọn. |

Bảng 94. Quy tắc màn hình MH-02.10

**MH-02.11 – Thông báo**

Hình 42. MH-02.11 – Thông báo

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Tiêu đề popup | Label | O   | Thông báo | Hiển thị tiêu đề popup danh sách thông báo. Nội dung cố định, không cho phép chỉnh sửa. |
| 2   | Số lượng thông báo chưa đọc | Label | O   | N/A | Hiển thị tổng số thông báo có trạng thái “Chưa đọc” thuộc tài khoản đang đăng nhập. Dữ liệu được lấy từ danh sách thông báo của người dùng, đếm các bản ghi có trạng thái Chưa đọc. Hiển thị theo định dạng “\[Số lượng\] chưa đọc”, ví dụ: “3 chưa đọc”. Số lượng tự động cập nhật khi trạng thái đọc của thông báo thay đổi. |
| 3   | Đánh dấu tất cả đã đọc | Text Button | I   | N/A | Cho phép người dùng đánh dấu tất cả thông báo chưa đọc của tài khoản đang đăng nhập thành trạng thái “Đã đọc”. Khi nhấn, hệ thống cập nhật trạng thái của các thông báo chưa đọc và cập nhật lại số lượng thông báo chưa đọc trên giao diện. Không xóa thông báo khỏi hệ thống. |
| 4   | Tất cả | Tab Button | I   | Tất cả | Cho phép người dùng xem toàn bộ thông báo thuộc tài khoản đang đăng nhập, bao gồm thông báo đã đọc và chưa đọc. Đây là tab được chọn mặc định khi mở popup. |
| 5   | Chưa đọc | Tab Button | I   | N/A | Cho phép người dùng lọc và chỉ hiển thị các thông báo có trạng thái “Chưa đọc”. Khi nhấn, hệ thống cập nhật danh sách thông báo theo điều kiện lọc. |
| 6   | Dấu hiệu thông báo chưa đọc | Icon/Dot | O   | N/A | Hiển thị chấm tròn màu xanh bên cạnh tab “Chưa đọc” khi tài khoản có ít nhất một thông báo chưa đọc. Trạng thái hiển thị phụ thuộc vào tổng số thông báo chưa đọc của người dùng. Không cho phép tương tác trực tiếp. |
| 7   | Tiêu đề thông báo | Label \[200\] | O   | N/A | Hiển thị tiêu đề của từng thông báo. Dữ liệu được lấy từ trường Tiêu đề thông báo thuộc bản ghi thông báo tương ứng. Nội dung được hệ thống tạo theo loại sự kiện phát sinh, ví dụ: “Yêu cầu ký nhận biên bản bàn giao”, “Biên bản bàn giao đã hoàn tất”. Không cho phép chỉnh sửa trực tiếp. |
| 8   | Mã biên bản | Hyperlink \[30\] | I/O | N/A | Hiển thị mã biên bản bàn giao liên quan đến thông báo, được lấy từ trường Mã biên bản của bản ghi biên bản bàn giao có liên kết với thông báo. Mã được hiển thị bằng chữ màu xanh, ví dụ: BBBG-2024-0325. Khi người dùng nhấn, hệ thống điều hướng đến màn hình chi tiết biên bản bàn giao tương ứng nếu người dùng có quyền truy cập. |
| 9   | Trạng thái chưa đọc | Status Dot | O   | N/A | Hiển thị chấm tròn màu xanh ở phía bên phải thông báo khi thông báo có trạng thái “Chưa đọc”. Dữ liệu được xác định từ trường Trạng thái đọc của bản ghi thông báo. Không cho phép chỉnh sửa trực tiếp. |
| 10  | Nội dung thông báo | Label \[500\] | O   | N/A | Hiển thị nội dung mô tả chi tiết của thông báo. Dữ liệu lấy từ trường Nội dung thông báo thuộc bản ghi thông báo. Nội dung được tạo tự động theo sự kiện nghiệp vụ phát sinh và có thể bao gồm họ tên người thực hiện, số lượng tài sản, tên tài sản và hành động cần thực hiện. Ví dụ: “Tên người gửi đã bàn giao \[số tài sản\] (tên tài sản). Vui lòng kiểm tra và xác nhận" |
| 11  | Thời gian thông báo | Label | O   | N/A | Hiển thị thời gian phát sinh thông báo. Dữ liệu được lấy từ trường Thời gian tạo của bản ghi thông báo. Hệ thống tự động chuyển đổi thời gian tạo thành dạng tương đối dựa trên thời gian hiện tại, ví dụ: “10 phút trước”, “2 giờ trước”, “Hôm qua lúc 16:45”. Không cho phép chỉnh sửa trực tiếp. |

Bảng 95. Mô tả thành phần màn hình MH-02.11

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-02.65 | Số lượng thông báo chưa đọc: Khi tài khoản có ít nhất một thông báo chưa đọc, hệ thống hiển thị số lượng theo định dạng “\[Số lượng\] chưa đọc” bên cạnh tiêu đề popup. Khi không còn thông báo chưa đọc, hiển thị “0 chưa đọc”. |
| QT-02.66 | Tab Tất cả: Khi người dùng lựa chọn tab “Tất cả”, hệ thống hiển thị toàn bộ thông báo của tài khoản đang đăng nhập, bao gồm cả trạng thái “Đã đọc” và “Chưa đọc”. Tab “Tất cả” được đánh dấu bằng nền màu xanh và chữ màu trắng để thể hiện trạng thái đang được chọn. |
| QT-02.67 | Tab Chưa đọc: Khi người dùng lựa chọn tab “Chưa đọc”, hệ thống chỉ hiển thị các thông báo có trạng thái “Chưa đọc”. Tab “Chưa đọc” được đánh dấu là đang chọn, đồng thời tab “Tất cả” trở về trạng thái bình thường. |
| QT-02.68 | Dấu hiệu trên tab Chưa đọc: Khi tổng số thông báo chưa đọc lớn hơn 0, hệ thống hiển thị chấm tròn màu xanh bên cạnh tab “Chưa đọc”. Khi tổng số thông báo chưa đọc bằng 0, chấm tròn tự động biến mất. |
| QT-02.69 | Đánh dấu thông báo đã đọc khi truy cập: Khi người dùng nhấn vào một thông báo có trạng thái “Chưa đọc”, hệ thống cập nhật thông báo thành “Đã đọc”, đồng thời cập nhật lại số lượng thông báo chưa đọc và dấu hiệu trạng thái trên giao diện. |
| QT-02.70 | Điều hướng từ thông báo: Khi người dùng nhấn vào mã biên bản hoặc thông báo có liên kết đến biên bản, hệ thống chuyển đến màn hình chi tiết biên bản tương ứng. Trường hợp biên bản không tồn tại hoặc người dùng không có quyền truy cập, hệ thống hiển thị thông báo “Không thể truy cập biên bản bàn giao”. |
| QT-02.71 | Hiển thị thời gian thông báo: Khi thời gian phát sinh thông báo cách thời điểm hiện tại dưới 60 phút, hiển thị theo định dạng “\[Số phút\] phút trước”. Từ 60 phút đến dưới 24 giờ, hiển thị “\[Số giờ\] giờ trước”. Với thông báo được tạo trong ngày hôm trước, hiển thị “Hôm qua lúc HH:mm”. Với thông báo cũ hơn, hiển thị theo định dạng dd/MM/yyyy HH:mm. |
| QT-02.72 | Thông báo có nội dung dài: Khi tiêu đề hoặc nội dung thông báo vượt quá chiều rộng khu vực hiển thị, hệ thống tự động xuống dòng để bảo đảm nội dung không tràn ra ngoài popup. |

Bảng 96. Quy tắc màn hình MH-02.11

### 3.3.11 NV-03 Sơ đồ hoạt động dùng chung

Hình 43. AD-03.1 – Tạo biên bản, gửi thông báo và xác nhận lịch bàn giao

Hình 44. AD-03.2 – Ghi nhận bàn giao, hoàn tất và cập nhật tài sản

### 3.3.12 CN-03.1 Tạo biên bản thu hồi

#### 3.3.12.1 Đặc tả use case

| **Mục** | **Nội dung** |
| --- | --- |
| Mã UC | UC-03.1 |
| Mô tả UC | NVQLTS tạo biên bản thu hồi cho một nhân viên có tài sản cần thu hồi: chọn đối tượng, chọn tài sản cần thu hồi trong danh sách tài sản, nhập lý do và lịch bàn giao, lưu biên bản. |
| Tác nhân chính | NVQLTS |
| Tiền điều kiện | NVQLTS đã đăng nhập và có quyền tạo biên bản thu hồi. Đối tượng được chọn đang giữ ít nhất một tài sản. |
| Hậu điều kiện | Biên bản thu hồi được tạo với số biên bản tự sinh, trạng thái Nháp |
| Luồng chính 1 | 1\. Chọn “Tạo biên bản thu hồi”  <br>2\. Hệ thống mở màn hình tạo biên bản  <br>3\. Chọn nhân viên có tài sản cần thu hồi  <br>4\. Hệ thống Hiển thị danh sách tài sản đang giữ: mã, tên, ngày cấp phát  <br>5\. Tick các tài sản cần thu hồi, Nhập lý do thu hồi, ngày giờ và địa điểm bàn giao, người liên hệ; chọn Đột xuất nếu cần  <br>6\. Bấm “Lưu biên bản”.  <br>7\. Hệ thống Lưu biên bản trạng thái Nháp, sinh số biên bản |
| Luồng thay thế | A1: Tạo biên bản từ màn hình chi tiết tài sản, hệ thống điền sẵn người đang giữ và tài sản.  <br>A2: NVQLTS lưu rồi thoát, biên bản giữ ở trạng thái Nháp để sửa tiếp. |
| Luồng ngoại lệ | E1: Đối tượng không có tài sản đang giữ, hệ thống không cho lưu.  <br>E2: Tài sản đã có biên bản thu hồi đang xử lý, hệ thống báo mã biên bản đó và không cho chọn.  <br>E3: Thiếu trường bắt buộc hoặc ngày bàn giao nhỏ hơn ngày hiện tại, hệ thống báo lỗi tại trường. |
| Quy tắc nghiệp vụ | BR-03.01, BR-03.02, BR-03.03, BR-03.04, BR-03.05 |
| Mã AD | AD-03.1 |
| Mã giao diện | MH-03.01, MH-03.02, MH-03.03, MH-03.04 |

Bảng 97. Đặc tả UC-03.1 – Tạo biên bản thu hồi

### 3.3.13 CN-03.2 Gửi thông báo thu hồi

#### 3.3.13.1 Đặc tả use case

| **Mục** | **Nội dung** |
| --- | --- |
| Mã UC | UC-03.2 |
| Mô tả UC | NVQLTS bấm nút “Gửi thông báo cho nhân viên” trên biên bản Nháp. Hệ thống gửi thông báo đến tài khoản nhân nêu lý do, danh sách tài sản, thời gian bàn giao, người liên hệ, rồi chuyển biên bản sang Chờ bàn giao. |
| Tác nhân chính | NVQLTS |
| Tiền điều kiện | Biên bản ở trạng thái Nháp, có ít nhất một tài sản và lịch bàn giao hợp lệ. |
| Hậu điều kiện | Thông báo đã gửi và ghi nhận thời điểm gửi, biên bản ở trạng thái Chờ bàn giao. |
| Luồng chính | 1\. Mở biên bản Nháp, bấm “Gửi thông báo cho nhân viên”.  <br>2\. Theo dõi trên biên bản.  <br>3\. Hệ thống Hiển thị “Gửi lại thông báo” (trong trường hợp nhân viên có tài sản cần thu hồi chưa xác nhận); cập nhật khi nhân viên có tài sản cần thu hồi xác nhận |
| Quy tắc nghiệp vụ | BR-03.01, BR-03.10 |
| Mã giao diện | MH-03.04, MH-03.05 |
| Mã AD | AD-03.1 |

Bảng 98. Đặc tả UC-03.2 – Gửi thông báo thu hồi

### 3.3.14 CN-03.4 và CN-03.5 Ghi nhận bàn giao, khóa và lưu biên bản

#### 3.3.14.1 Đặc tả use case

| **Mục** | **Nội dung** |
| --- | --- |
| Mã UC | UC-03.4 và UC-03.5 |
| Mô tả UC | NVQLTS mở biên bản thu hồi đang chờ bàn giao, tiếp nhận từng tài sản do nhân viên mang đến: quét QR/nhập mã tài sản, ghi nhận tình trạng thực tế, phụ kiện đi kèm, hình ảnh hoặc báo mất tài sản. Sau đó hoàn tất bàn giao, hệ thống cập nhật trạng thái tài sản và sinh biên bản điện tử PDF. |
| Tác nhân chính | NVQLTS |
| Tiền điều kiện | \- NVQLTS đã đăng nhập và có quyền xử lý bàn giao. - Biên bản thu hồi đã được tạo và ở trạng thái Chờ bàn giao (có lịch bàn giao, danh sách tài sản cần thu hồi). |
| Hậu điều kiện | \- Biên bản chuyển sang trạng thái Hoàn tất. - Trạng thái từng tài sản được cập nhật theo kết quả bàn giao (đã thu hồi / mất). - Hệ thống sinh biên bản bàn giao điện tử dạng PDF. |
| Luồng chính 1 | 1\. NVQLTS mở biên bản đang chờ bàn giao (VD: TH01/2026) từ “Danh sách biên bản”.  <br>2\. Hệ thống hiển thị màn hình chi tiết: trạng thái Đang bàn giao, lịch bàn giao, người tạo, email nhân viên, danh sách tài sản và tiến độ quét (VD: 1/2 đã quét).  <br>3\. Nhân viên mang tài sản đến bàn giao đúng hẹn.  <br>4\. NVQLTS bấm Quét QR (hoặc nhập mã tài sản) cho tài sản đang tiếp nhận.  <br>5\. Hệ thống đối chiếu mã với danh sách tài sản của biên bản, đánh dấu Đã quét và mở form ghi nhận tình trạng.  <br>6\. NVQLTS nhập: Tình trạng vật lý; Trạng thái hoạt động (Hoạt động bình thường / Lỗi màn hình / Không lên nguồn / Khác); Phụ kiện đi kèm (Sạc, Cáp, Chuột, Balo, Hộp); Ghi chú phụ kiện (nếu thiếu); Ghi chú tình trạng; Hình ảnh hiện trạng (Tải ảnh lên).  <br>7\. NVQLTS bấm Lưu tình trạng. Hệ thống lưu thông tin của tài sản đó.  <br>8\. NVQLTS lặp lại bước 4-7 cho các tài sản còn lại.  <br>9\. NVQLTS bấm Hoàn tất.  <br>10\. Hệ thống kiểm tra đủ dữ kiện (mọi tài sản đều đã được ghi nhận tình trạng hoặc báo mất kèm lý do).  <br>11\. Hệ thống lưu biên bản, chuyển trạng thái Hoàn tất.  <br>12\. Hệ thống cập nhật trạng thái tài sản.  <br>13\. Hệ thống sinh biên bản điện tử PDF/Word  <br>14\. NVQLTS có thể in biên bản |
| Luồng thay thế | A1 - Nhân viên có tài sản cần thu hồi không mang tài sản đến đúng hẹn (tại bước 3): NVQLTS gửi thông báo lại cho nhân viên có tài sản cần thu hồi; nhân viên nhận thông báo và mang tài sản đến bàn giao, UC tiếp tục từ bước  <br>4.  <br>A2 - Tài sản bị mất (tại bước 4): NVQLTS bấm Báo mất trên tài sản đó, nhập Lý do mất (bắt buộc), bấm Xác nhận. Hệ thống ghi nhận tài sản ở trạng thái Mất, UC tiếp tục từ bước  <br>8\. Bấm Hủy để quay lại, không báo mất.  <br>A3 - Hủy xử lý: NVQLTS bấm Hủy ở cuối màn hình, hệ thống không hoàn tất biên bản. Thông tin đã lưu bằng “Lưu tình trạng” được giữ, biên bản vẫn ở trạng thái Đang bàn giao để xử lý tiếp. |
| Luồng ngoại lệ | E1: Chưa đủ dữ kiện khi bấm Hoàn tất (còn tài sản chưa quét/chưa báo mất, hoặc thiếu trường bắt buộc): hệ thống báo lỗi, chỉ ra tài sản/trường còn thiếu và không cho hoàn tất.  <br>E2: Mã QR/mã tài sản không thuộc biên bản hiện tại hoặc không tồn tại: hệ thống báo lỗi và không ghi nhận.  <br>E3: Tài sản đã được quét/bàn giao trước đó: hệ thống báo tài sản đã được ghi nhận.  <br>E4: Báo mất nhưng bỏ trống Lý do mất: hệ thống báo lỗi tại trường, không cho Xác nhận.  <br>E5: Chọn Khác ở Trạng thái hoạt động hoặc thiếu phụ kiện mà chưa nhập ghi chú: hệ thống báo lỗi tại trường ghi chú tương ứng.  <br>E6: Ảnh tải lên sai định dạng hoặc vượt dung lượng cho phép: hệ thống báo lỗi và không đính kèm ảnh. |
| Quy tắc nghiệp vụ | BR-03.06, BR-03.07, BR-03.08, BR-03.09, BR-03.10, BR-03.11, BR-03.12 |
| Mã giao diện | MH-03.05, MH-03.06, MH-03.07, MH-03.08, MH-03.09 |
| Mã AD | AD-03.2 |

Bảng 99. Đặc tả UC-03.4 và UC-03.5 – Ghi nhận bàn giao tài sản

#### 3.3.14.3 Giao diện dùng chung của phân hệ thu hồi

| **Mã màn hình** | **Tên màn hình** | **Mục đích** |
| --- | --- | --- |
| MH-03.01 | Danh sách biên bản thu hồi | Xem, tìm kiếm, lọc biên bản theo trạng thái |
| MH-03.02 | Tạo biên bản thu hồi (chưa chọn nhân viên) | Biểu mẫu tạo biên bản ban đầu |
| MH-03.03 | Tạo biên bản thu hồi (đã chọn nhân viên) | Hiển thị tài sản nhân viên đang giữ để chọn |
| MH-03.04 | Chi tiết biên bản - Nháp | Xem biên bản, gửi thông báo cho nhân viên |
| MH-03.05 | Chi tiết biên bản - Chờ bàn giao | Gửi lại thông báo, bắt đầu bàn giao |
| MH-03.06 | Chi tiết biên bản - Đang bàn giao (chưa quét) | Quét QR hoặc báo mất từng tài sản |
| MH-03.07 | Chi tiết biên bản - Đang bàn giao (nhập tình trạng, báo mất) | Ghi nhận tình trạng tài sản đã quét, báo mất tài sản |
| MH-03.08 | Chi tiết biên bản - Đang bàn giao (chọn trạng thái hoạt động, hoàn tất) | Chọn trạng thái hoạt động và hoàn tất biên bản |
| MH-03.09 | Chi tiết biên bản - Đã hoàn tất | Xem kết quả thu hồi, in PDF, xuất Word |
| MH-03.10 | Xác nhận biên bản thu hồi | Xem lại nội dung biên bản và xác nhận sẽ bàn giao tài sản đúng hẹn |

Bảng 100. Danh sách màn hình NV-03

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Thanh điều hướng bên trái (sidebar)** |     |     |     |     |     |
| 1   | Logo ứng dụng | Icon | O   | Icon hình hộp | Biểu tượng nhận diện hệ thống, nền đen. |
| 2   | Tên hệ thống | Label \[50\] | O   | Thu hồi tài sản | Tên ứng dụng, chữ đậm. |
| 3   | Mô tả hệ thống | Label \[50\] | O   | Quản lý nội bộ | Dòng chữ nhỏ phía dưới tên hệ thống. |
| 4   | Menu “Thu hồi tài sản” | Menu item | I   | Được chọn (nền xanh nhạt, chữ xanh) | Click: chuyển về màn hình Danh sách biên bản thu hồi (Màn hình 1). |
| **Thông tin người dùng đăng nhập (cuối sidebar)** |     |     |     |     |     |
| 5   | Avatar | Avatar | O   | 2 ký tự viết tắt | Hiển thị chữ viết tắt của người dùng, VD: “HC”. |
| 6   | Tên người dùng | Label \[100\] | O   |     | Tên đơn vị/người dùng đang đăng nhập, VD: Phòng HCNS. |
| 7   | Vai trò | Label \[50\] | O   |     | Vai trò của người dùng, VD: Quản trị viên. |

Bảng 101. Thành phần giao diện dùng chung NV-03

**MH-03.01 – Danh sách biên bản thu hồi**

Hình 45. MH-03.01 – Danh sách biên bản thu hồi

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Vùng tiêu đề** |     |     |     |     |     |
| 1   | Tiêu đề trang | Label \[100\] | O   | Biên bản thu hồi tài sản | Tiêu đề màn hình, chữ đậm cỡ lớn. |
| 2   | Nút “Tạo biên bản thu hồi” | Button | I   | Enabled | Click: chuyển sang màn hình Tạo biên bản thu hồi (Màn hình 2). Nút nền xanh, có icon “+”. |
| **Vùng tìm kiếm và lọc** |     |     |     |     |     |
| 3   | Ô tìm kiếm | Textbox \[255\] | I   | Rỗng (placeholder: “Tìm theo mã biên bản, nhân viên...”) | Nhập từ khóa để tìm theo mã biên bản hoặc tên nhân viên. Danh sách được lọc theo từ khóa, không phân biệt hoa thường. Có icon kính lúp bên trái. |
| 4   | Bộ lọc trạng thái | Nhóm nút lọc (Tab/Chip) | I   | Chọn “Tất cả” | Chọn 1 trạng thái để lọc danh sách. Mỗi nút kèm số lượng biên bản. Nút đang chọn có nền đen, chữ trắng. |
| 4.1 | Tất cả | Chip | I   | Được chọn | Hiển thị toàn bộ biên bản. Kèm số lượng, VD: 4. |
| 4.2 | Nháp | Chip | I   |     | Lọc biên bản ở trạng thái Nháp. Kèm số lượng, VD: 1. |
| 4.3 | Chờ bàn giao | Chip | I   |     | Lọc biên bản ở trạng thái Chờ bàn giao. Kèm số lượng, VD: 1. |
| 4.4 | Đang bàn giao | Chip | I   |     | Lọc biên bản ở trạng thái Đang bàn giao. Kèm số lượng, VD: 1. |
| 4.5 | Đã hoàn tất | Chip | I   |     | Lọc biên bản ở trạng thái Đã hoàn tất. Kèm số lượng, VD: 1. |
| **Danh sách biên bản** |     |     |     |     |     |
| 5   | Thẻ biên bản (mỗi dòng 1 biên bản) | Card/List | I/O | Theo dữ liệu hệ thống | Mỗi biên bản hiển thị trên 1 thẻ. Click vào thẻ: chuyển sang màn hình Chi tiết biên bản tương ứng với trạng thái hiện tại (Màn hình 4–9). |
| 5.1 | Icon biên bản | Icon | O   | Icon tài liệu | Biểu tượng văn bản ở đầu thẻ. |
| 5.2 | Mã biên bản | Label \[20\] | O   |     | Mã biên bản, VD: TH01/2026. Định dạng TH{số thứ tự}/{năm}. Chữ đậm. |
| 5.3 | Trạng thái | Badge | O   |     | Trạng thái hiện tại của biên bản, nằm cạnh mã biên bản. Giá trị: Nháp (nền xám); Chờ bàn giao (xanh dương); Đang bàn giao (cam); Đã hoàn tất (xanh lá). |
| 5.4 | Tên nhân viên | Label \[100\] | O   |     | Tên nhân viên bị thu hồi tài sản, VD: Nguyễn Văn An. |
| 5.5 | Phòng ban | Label \[100\] | O   |     | Phòng ban của nhân viên, VD: Phòng Kỹ thuật. Ngăn cách với tên bằng dấu chấm tròn. |
| 5.6 | Lý do thu hồi | Label \[500\] | O   |     | Lý do thu hồi, VD: nghỉ việc. Với biên bản Đã hoàn tất, hiển thị thêm tiến độ thu hồi, VD: “nghỉ việc (2/2 tài sản đã nhận)”. |
| 5.7 | Ngày của biên bản | Label (Date) | O   |     | Hiển thị dạng yyyy-mm-dd kèm icon lịch, VD: 2026-03-24, căn phải thẻ. |
| 5.8 | Mũi tên chuyển | Icon | I   |     | Icon “>” ở cuối thẻ, gợi ý click để xem chi tiết. |

Bảng 102. Mô tả thành phần màn hình MH-03.01

**MH-03.02 – Tạo biên bản chưa chọn nhân viên**

Hình 46. MH-03.02 – Tạo biên bản chưa chọn nhân viên

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Vùng tiêu đề** |     |     |     |     |     |
| 1   | Nút “Quay lại” | Link/Button | I   | Enabled | Click: quay về màn hình Danh sách biên bản thu hồi (Màn hình 1), không lưu dữ liệu đã nhập. |
| 2   | Tiêu đề trang | Label \[100\] | O   | Tạo biên bản thu hồi | Tiêu đề màn hình. |
| 3   | Mô tả phụ | Label \[255\] | O   | Chọn nhân viên, hệ thống liệt kê tài sản đang giữ. | Dòng hướng dẫn dưới tiêu đề. |
| **Biểu mẫu tạo biên bản** |     |     |     |     |     |
| 4   | Nhân viên (\*) | Dropdown (Combobox) | I   | — Chọn nhân viên — | Bắt buộc chọn. Danh sách nhân viên hiển thị theo định dạng “Tên nhân viên · Phòng ban”. Sau khi chọn, hệ thống tự động liệt kê các tài sản nhân viên đó đang giữ ngay bên dưới (Màn hình 3). |
| 5   | Lý do thu hồi (\*) | Textarea \[500\] | I   | Rỗng (placeholder: “VD: Nghỉ việc, chuyển phòng ban, hết hạn hợp đồng...”) | Bắt buộc nhập. Nhập lý do thu hồi tài sản (nhiều dòng). |
| 6   | Lịch bàn giao (\*) | Datepicker | I   | Rỗng (placeholder: mm/dd/yyyy) | Bắt buộc chọn. Chọn ngày hẹn nhân viên bàn giao tài sản. Nhập theo định dạng mm/dd/yyyy hoặc chọn từ lịch. |
| 7   | Hộp lưu ý | Info box | O   | Hiển thị | Nền vàng nhạt, nội dung: “Sau khi chọn nhân viên, list danh sách tài sản nhân viên đó đang giữ sẽ được hiển thị trong biên bản.” |
| **Vùng nút thao tác** |     |     |     |     |     |
| 8   | Nút “Hủy” | Button | I   | Enabled | Click: hủy thao tác tạo, quay về màn hình Danh sách biên bản thu hồi (Màn hình 1), không lưu dữ liệu. |
| 9   | Nút “Tạo biên bản” | Button | I   | Enabled | Click: kiểm tra các trường bắt buộc (\*). Hợp lệ: tạo biên bản ở trạng thái Nháp và chuyển sang Chi tiết biên bản – Nháp (Màn hình 4). Không hợp lệ: báo lỗi ở trường thiếu dữ liệu. Nút nền xanh, có icon “+”. |

Bảng 103. Mô tả thành phần màn hình MH-03.02

**MH-03.03 – Tạo biên bản đã chọn nhân viên**

Hình 47. MH-03.03 – Tạo biên bản đã chọn nhân viên

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Vùng tiêu đề** |     |     |     |     |     |
| 1   | Nút “Quay lại” | Link/Button | I   | Enabled | Click: quay về màn hình Danh sách biên bản thu hồi (Màn hình 1), không lưu dữ liệu đã nhập. |
| 2   | Tiêu đề trang | Label \[100\] | O   | Tạo biên bản thu hồi | Tiêu đề màn hình. |
| 3   | Mô tả phụ | Label \[255\] | O   | Chọn nhân viên, hệ thống liệt kê tài sản đang giữ. | Dòng hướng dẫn dưới tiêu đề. |
| **Biểu mẫu tạo biên bản** |     |     |     |     |     |
| 4   | Nhân viên (\*) | Dropdown (Combobox) | I   | Phạm Hoàng Dung · Phòng Tài chính (đã chọn) | Bắt buộc chọn. Danh sách nhân viên hiển thị theo định dạng “Tên nhân viên · Phòng ban”. Sau khi chọn, hệ thống tự động liệt kê các tài sản nhân viên đó đang giữ ngay bên dưới (xem mục tiếp theo). |
| 5   | Tiêu đề “Tài sản đang giữ” | Label | O   | Tài sản đang giữ | Tiêu đề khu vực danh sách tài sản của nhân viên đã chọn. Chỉ hiển thị sau khi đã chọn nhân viên. |
| 5.1 | Số thiết bị tìm thấy | Label | O   |     | Hiển thị tổng số tài sản nhân viên đang giữ, dạng “(n thiết bị được tìm thấy)”, VD: (2 thiết bị được tìm thấy). |
| 5.2 | Số tài sản đã chọn | Label (link xanh) | O   | Đã chọn: n tài sản | Căn phải, tự cập nhật theo số tài sản đang được tích chọn, VD: “Đã chọn: 2 tài sản”. |
| 6   | Danh sách tài sản đang giữ | List (Card) | I/O | Tất cả tài sản được tích chọn | Mỗi tài sản hiển thị trên 1 thẻ. Chỉ các tài sản được tích mới đưa vào biên bản. |
| 6.1 | Icon loại thiết bị | Icon | O   |     | Biểu tượng theo loại tài sản (laptop/màn hình, máy in...). |
| 6.2 | Mã tài sản | Label \[20\] | O   |     | Mã tài sản, VD: BBBG_08. Chữ đậm. |
| 6.3 | Tên tài sản · Số serial | Label \[150\] | O   |     | Tên/model tài sản và số serial, VD: “Laptop Asus ZenBook 14 · SN: ZB14VWX”. |
| 6.4 | Ô chọn tài sản | Checkbox | I   | Đã tích | Tích/bỏ tích để đưa tài sản vào hoặc loại khỏi biên bản. Khi thay đổi, cập nhật “Đã chọn: n tài sản”. |
| 7   | Lý do thu hồi | Textarea \[500\] | I   | Rỗng (placeholder: “VD: Nghỉ việc, chuyển phòng ban, hết hạn hợp đồng...”) | Nhập lý do thu hồi tài sản (nhiều dòng). Lưu ý: ở mockup này nhãn không có dấu (\*) – xem mục “Điểm cần xác nhận”. |
| 8   | Lịch bàn giao | Datepicker | I   | Rỗng (placeholder: mm/dd/yyyy) | Chọn ngày hẹn bàn giao tài sản. Lưu ý: ở mockup này nhãn không có dấu (\*) – xem mục “Điểm cần xác nhận”. |
| **Vùng nút thao tác** |     |     |     |     |     |
| 9   | Nút “Hủy” | Button | I   | Enabled | Click: hủy thao tác tạo, quay về màn hình Danh sách biên bản thu hồi (Màn hình 1), không lưu dữ liệu. |
| 10  | Nút “Tạo biên bản” | Button | I   | Enabled | Click: kiểm tra dữ liệu (Nhân viên, Lý do, Lịch bàn giao, ít nhất 1 tài sản được tích). Hợp lệ: tạo biên bản ở trạng thái Nháp và chuyển sang Chi tiết biên bản – Nháp (Màn hình 4). Không hợp lệ: hiển thị thông báo lỗi ở trường tương ứng. |

Bảng 104. Mô tả thành phần màn hình MH-03.03

**MH-03.04 – Chi tiết biên bản ở trạng thái Nháp**

Hình 48. MH-03.04 – Chi tiết biên bản ở trạng thái Nháp

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Vùng tiêu đề** |     |     |     |     |     |
| 1   | Liên kết “Danh sách biên bản” | Link/Button | I   | Enabled | Click: quay về màn hình Danh sách biên bản thu hồi (Màn hình 1). |
| 2   | Mã biên bản | Label \[20\] | O   |     | Mã biên bản, VD: TH01/2026. Chữ đậm cỡ lớn. |
| 3   | Trạng thái biên bản | Badge | O   | Nháp | Trạng thái hiện tại của biên bản, nằm cạnh mã biên bản. Giá trị: Nháp (nền xám); Chờ bàn giao (xanh dương); Đang bàn giao (cam); Đã hoàn tất (xanh lá). |
| 4   | Thông tin tóm tắt | Label \[255\] | O   |     | Hiển thị: Tên nhân viên · Phòng ban · Lý do thu hồi, VD: Nguyễn Văn An · Phòng Kỹ thuật · nghỉ việc. |
| **Khối thông tin biên bản** |     |     |     |     |     |
| 5   | Lịch bàn giao | Label (Date) | O   |     | Ngày hẹn bàn giao tài sản, định dạng yyyy-mm-dd, VD: 2026-07-08. |
| 6   | Người tạo | Label \[100\] | O   |     | Người/đơn vị tạo biên bản, VD: Phòng HCNS. |
| 7   | Email nhân viên | Label \[100\] | O   |     | Email của nhân viên bị thu hồi tài sản, dùng để gửi thông báo, VD: nguyenvanan@example.com. |
| **Danh sách tài sản** |     |     |     |     |     |
| 8   | Tiêu đề “Danh sách tài sản” | Label | O   | Danh sách tài sản (n) | Kèm tổng số tài sản trong biên bản, VD: (2). |
| 9   | Thẻ tài sản (mỗi dòng 1 tài sản) | Card/List | O   | Theo biên bản | Liệt kê các tài sản được thu hồi trong biên bản. |
| 9.1 | Icon tài sản | Icon | O   | Icon hình hộp | Biểu tượng tài sản. |
| 9.2 | Mã tài sản | Label \[20\] | O   |     | VD: BBBG_01. Chữ đậm. |
| 9.3 | Tên tài sản · Số serial | Label \[150\] | O   |     | VD: “MacBook Pro 13inch · SN: C02XK1ABC”. Số serial hiển thị font đơn cách (monospace). |
| 9.4 | Nút “Quét QR” | Button | I   | Disabled (nền xám) | Chưa dùng được ở trạng thái Nháp. Chỉ kích hoạt khi biên bản chuyển sang Đang bàn giao. |
| 9.5 | Người dùng hiện tại | Label \[100\] | O   |     | Người đang giữ/sử dụng tài sản, VD: Nguyễn Văn An. |
| 9.6 | Ngày bắt đầu | Label (Date) | O   |     | Ngày bắt đầu sử dụng tài sản, định dạng yyyy-MM-dd, VD: 2025-03-15. |
| **Vùng nút thao tác** |     |     |     |     |     |
| 10  | Nút “Hủy” | Button | I   | Enabled | Click: hủy biên bản thu hồi (hiển thị hộp thoại xác nhận trước khi hủy – đề xuất), sau đó quay về Danh sách biên bản. |
| 11  | Nút “Bắt đầu bàn giao” | Button | I   | Disabled (nền xanh nhạt) | Chưa dùng được vì chưa gửi thông báo cho nhân viên. Có icon văn bản. Được kích hoạt sau khi gửi thông báo (xem Màn hình 5). |
| 12  | Nút “Gửi thông báo cho nhân viên” | Button | I   | Enabled | Click: gửi email thông báo thu hồi tới “Email nhân viên”; chuyển trạng thái biên bản từ Nháp sang Chờ bàn giao (Màn hình 5). Nút nền xanh đậm, có icon gửi. |

Bảng 105. Mô tả thành phần màn hình MH-03.04

**MH-03.05 – Chi tiết biên bản ở trạng thái Chờ bàn giao**

Hình 49. MH-03.05 – Chi tiết biên bản ở trạng thái Chờ bàn giao

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Vùng tiêu đề** |     |     |     |     |     |
| 1   | Liên kết “Danh sách biên bản” | Link/Button | I   | Enabled | Click: quay về màn hình Danh sách biên bản thu hồi (Màn hình 1). |
| 2   | Mã biên bản | Label \[20\] | O   |     | Mã biên bản, VD: TH01/2026. Chữ đậm cỡ lớn. |
| 3   | Trạng thái biên bản | Badge | O   | Chờ bàn giao | Trạng thái hiện tại của biên bản, nằm cạnh mã biên bản. Giá trị: Nháp (nền xám) \| Chờ bàn giao (xanh dương) \| Đang bàn giao (cam) \| Đã hoàn tất (xanh lá). |
| 4   | Thông tin tóm tắt | Label \[255\] | O   |     | Hiển thị: Tên nhân viên · Phòng ban · Lý do thu hồi, VD: Nguyễn Văn An · Phòng Kỹ thuật · nghỉ việc. |
| **Khối thông tin biên bản** |     |     |     |     |     |
| 5   | Lịch bàn giao | Label (Date) | O   |     | Ngày hẹn bàn giao tài sản, định dạng yyyy-MM-dd, VD: 2026-07-08. |
| 6   | Người tạo | Label \[100\] | O   |     | Người/đơn vị tạo biên bản, VD: Phòng HCNS. |
| 7   | Email nhân viên | Label \[100\] | O   |     | Email của nhân viên bị thu hồi tài sản, dùng để gửi thông báo, VD: nguyenvanan@example.com. |
| **Danh sách tài sản** |     |     |     |     |     |
| 8   | Tiêu đề “Danh sách tài sản” | Label | O   | Danh sách tài sản (n) | Kèm tổng số tài sản trong biên bản, VD: (2). |
| 9   | Thẻ tài sản (mỗi dòng 1 tài sản) | Card/List | O   | Theo biên bản | Liệt kê các tài sản được thu hồi trong biên bản. |
| 9.1 | Icon tài sản | Icon | O   | Icon hình hộp | Biểu tượng tài sản. |
| 9.2 | Mã tài sản | Label \[20\] | O   |     | VD: BBBG_01. Chữ đậm. |
| 9.3 | Tên tài sản · Số serial | Label \[150\] | O   |     | VD: “MacBook Pro 13inch · SN: C02XK1ABC”. Số serial hiển thị font đơn cách (monospace). |
| 9.4 | Nút “Quét QR” | Button | I   | Disabled (nền xám) | Chưa dùng được ở trạng thái Chờ bàn giao. Chỉ kích hoạt khi biên bản chuyển sang Đang bàn giao. |
| 9.5 | Người dùng hiện tại | Label \[100\] | O   |     | Người đang giữ/sử dụng tài sản, VD: Nguyễn Văn An. |
| 9.6 | Ngày bắt đầu | Label (Date) | O   |     | Ngày bắt đầu sử dụng tài sản, định dạng yyyy-MM-dd, VD: 2025-03-15. |
| **Vùng nút thao tác** |     |     |     |     |     |
| 10  | Nút “Hủy” | Button | I   | Enabled | Click: hủy biên bản thu hồi (hiển thị hộp thoại xác nhận trước khi hủy – đề xuất), sau đó quay về Danh sách biên bản. |
| 11  | Nút “Bắt đầu bàn giao” | Button | I   | Enabled (nền xanh đậm) | Click: chuyển trạng thái từ Chờ bàn giao sang Đang bàn giao, mở chức năng quét QR cho từng tài sản (Màn hình 6). |
| 12  | Nút “Gửi lại thông báo cho nhân viên” | Button | I   | Enabled | Click: gửi lại email thông báo tới “Email nhân viên”, trạng thái giữ nguyên Chờ bàn giao. Nhãn nút đổi từ “Gửi thông báo…” thành “Gửi lại thông báo…”. |

Bảng 106. Mô tả thành phần màn hình MH-03.05

**MH-03.06 – Đang bàn giao chưa quét tài sản**

Hình 50. MH-03.06 – Đang bàn giao chưa quét tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Vùng tiêu đề** |     |     |     |     |     |
| 1   | Liên kết “Danh sách biên bản” | Link/Button | I   | Enabled | Click: quay về màn hình Danh sách biên bản thu hồi (Màn hình 1). |
| 2   | Mã biên bản | Label \[20\] | O   |     | Mã biên bản, VD: TH01/2026. Chữ đậm cỡ lớn. |
| 3   | Trạng thái biên bản | Badge | O   | Đang bàn giao | Trạng thái hiện tại của biên bản, nằm cạnh mã biên bản. Giá trị: Nháp (nền xám) \| Chờ bàn giao (xanh dương) \| Đang bàn giao (cam) \| Đã hoàn tất (xanh lá). |
| 4   | Thông tin tóm tắt | Label \[255\] | O   |     | Hiển thị: Tên nhân viên · Phòng ban · Lý do thu hồi, VD: Nguyễn Văn An · Phòng Kỹ thuật · nghỉ việc. |
| **Khối thông tin biên bản** |     |     |     |     |     |
| 5   | Lịch bàn giao | Label (Date) | O   |     | Ngày hẹn bàn giao tài sản, định dạng yyyy-MM-dd, VD: 2026-07-08. |
| 6   | Người tạo | Label \[100\] | O   |     | Người/đơn vị tạo biên bản, VD: Phòng HCNS. |
| 7   | Email nhân viên | Label \[100\] | O   |     | Email của nhân viên bị thu hồi tài sản, dùng để gửi thông báo, VD: nguyenvanan@example.com. |
| **Danh sách tài sản cần quét** |     |     |     |     |     |
| 8   | Tiêu đề “Danh sách tài sản” | Label | O   | Danh sách tài sản (n) | Kèm tổng số tài sản, VD: (2). |
| 9   | Bộ đếm tiến độ quét | Badge | O   | 0/n đã quét | Hiển thị số tài sản đã quét / tổng số tài sản, VD: 0/2 đã quét. Tự cập nhật sau mỗi lần quét thành công. |
| 10  | Thẻ tài sản chưa quét | Card/List | I/O | Theo biên bản | Mỗi tài sản 1 thẻ. |
| 10.1 | Mã tài sản | Label \[20\] | O   |     | VD: BBBG_01. Chữ đậm. |
| 10.2 | Tên tài sản · Số serial | Label \[150\] | O   |     | VD: “MacBook Pro 13inch · SN: C02XK1ABC”. |
| 10.3 | Nút “Quét QR” | Button | I   | Enabled (nền đen) | Click: mở camera quét mã QR dán trên tài sản. Mã QR khớp với tài sản: đánh dấu “Đã quét” và mở form nhập tình trạng (Màn hình 7). Không khớp: báo lỗi. |
| 10.4 | Nút “Báo mất” | Button | I   | Enabled (viền đỏ) | Click: mở khu vực nhập “Lý do mất” cho tài sản (Màn hình 7). |
| 10.5 | Người dùng hiện tại | Label \[100\] | O   |     | Người đang giữ tài sản, VD: Nguyễn Văn An. Căn trái. |
| 10.6 | Ngày bắt đầu | Label (Date) | O   |     | Ngày bắt đầu sử dụng, yyyy-mm-dd, VD: 2025-03-15. Căn phải. |
| **Vùng nút thao tác** |     |     |     |     |     |
| 11  | Nút “Hủy” | Button | I   | Enabled | Click: hủy thao tác bàn giao và quay lại (hiển thị hộp thoại xác nhận – đề xuất). |
| 12  | Nút “Cần quét đủ n tài sản nữa” | Button | I   | Không cho hoàn tất (có icon cảnh báo) | Hiển thị số tài sản còn phải xử lý, VD: “Cần quét đủ 2 tài sản nữa”. Không thể hoàn tất khi còn tài sản chưa quét hoặc chưa báo mất. Khi xử lý đủ, nhãn đổi thành “Hoàn tất” (Màn hình 8). |

Bảng 107. Mô tả thành phần màn hình MH-03.06

**MH-03.07 – Đang bàn giao ghi tình trạng và báo mất**

Hình 51. MH-03.07 – Đang bàn giao ghi tình trạng và báo mất

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Vùng tiêu đề** |     |     |     |     |     |
| 1   | Liên kết “Danh sách biên bản” | Link/Button | I   | Enabled | Click: quay về màn hình Danh sách biên bản thu hồi (Màn hình 1). |
| 2   | Mã biên bản | Label \[20\] | O   |     | Mã biên bản, VD: TH01/2026. Chữ đậm cỡ lớn. |
| 3   | Trạng thái biên bản | Badge | O   | Đang bàn giao | Trạng thái hiện tại của biên bản, nằm cạnh mã biên bản. Giá trị: Nháp (nền xám) \| Chờ bàn giao (xanh dương) \| Đang bàn giao (cam) \| Đã hoàn tất (xanh lá). |
| 4   | Thông tin tóm tắt | Label \[255\] | O   |     | Hiển thị: Tên nhân viên · Phòng ban · Lý do thu hồi, VD: Nguyễn Văn An · Phòng Kỹ thuật · nghỉ việc. |
| **Khối thông tin biên bản** |     |     |     |     |     |
| 5   | Lịch bàn giao | Label (Date) | O   |     | Ngày hẹn bàn giao tài sản, định dạng yyyy-MM-dd, VD: 2026-07-08. |
| 6   | Người tạo | Label \[100\] | O   |     | Người/đơn vị tạo biên bản, VD: Phòng HCNS. |
| 7   | Email nhân viên | Label \[100\] | O   |     | Email của nhân viên bị thu hồi tài sản, dùng để gửi thông báo, VD: nguyenvanan@example.com. |
| **Danh sách tài sản** |     |     |     |     |     |
| 8   | Tiêu đề “Danh sách tài sản” | Label | O   | Danh sách tài sản (n) | Kèm tổng số tài sản, VD: (2). |
| 9   | Bộ đếm tiến độ quét | Label | O   | n/m đã quét | Số tài sản đã quét / tổng số, VD: 1/2 đã quét. Căn phải. |
| **Thẻ tài sản đã quét (VD: BBBG_01) – form nhập tình trạng** |     |     |     |     |     |
| 10  | Thông tin tài sản | Card header | O   |     | Gồm mã tài sản, tên tài sản · số serial (VD: BBBG_01 – MacBook Pro 13inch · SN: C02XK1ABC). |
| 10.1 | Badge “Đã quét” | Badge | O   | Đã quét (nền xanh lá) | Hiển thị sau khi quét QR thành công, cạnh mã tài sản. |
| 10.2 | Người dùng hiện tại | Label \[100\] | O   |     | VD: Nguyễn Văn An. |
| 10.3 | Ngày bắt đầu | Label (Date) | O   |     | yyyy-MM-dd, VD: 2025-03-15. |
| 11  | Tình trạng vật lý | Dropdown | I   | — Chọn — | Chọn tình trạng ngoại hình của tài sản khi nhận lại. Ví dụ giá trị: Mới / Tốt, Trầy xước nhẹ,... (danh mục cấu hình theo hệ thống). |
| 12  | Trạng thái hoạt động | Dropdown | I   | — Chọn — | Chọn tình trạng hoạt động của tài sản. Các giá trị: Hoạt động bình thường \| Lỗi màn hình \| Không lên nguồn \| Khác. |
| 13  | Phụ kiện đi kèm | Nhóm nút chọn nhiều (Chip toggle) | I   | Không chọn | Chọn các phụ kiện nhân viên bàn giao kèm tài sản: Sạc, Cáp, Chuột, Balo, Hộp. Danh sách phụ kiện phụ thuộc loại tài sản. Phụ kiện không được chọn được hiểu là thiếu. |
| 13.1 | Cảnh báo thiếu phụ kiện | Label | O   | Hiển thị | Chữ cam: “Nếu thiếu phụ kiện, vui lòng ghi chú bên dưới.” |
| 14  | Ghi chú phụ kiện (nếu thiếu) | Textbox \[255\] | I   | Rỗng (placeholder: “VD: Thiếu cáp sạc”) | Nhập ghi chú về phụ kiện còn thiếu. Nên bắt buộc nhập khi có phụ kiện không được chọn (đề xuất). |
| 15  | Ghi chú tình trạng | Textbox \[500\] | I   | Rỗng (placeholder: “VD: Vết xước ở góc trái mặt lưng”) | Nhập mô tả chi tiết hiện trạng tài sản. Không bắt buộc. |
| 16  | Hình ảnh hiện trạng | Nút tải ảnh (File upload) | I   | Chưa có ảnh | Nút “Tải ảnh lên” (có icon camera): chọn ảnh từ thiết bị hoặc chụp ảnh hiện trạng tài sản. Định dạng ảnh jpg, png (đề xuất). |
| 17  | Nút “Lưu tình trạng” | Button | I   | Enabled | Click: lưu tình trạng vật lý, trạng thái hoạt động, phụ kiện, ghi chú và hình ảnh của tài sản. Có icon lưu. |
| **Thẻ tài sản chưa quét (VD: BBBG_02) – báo mất** |     |     |     |     |     |
| 18  | Thông tin tài sản | Card header | O   |     | Mã tài sản và tên · số serial (VD: BBBG_02 – Màn hình Dell U2723QE · SN: CN0XK2DEF). |
| 19  | Nút “Quét QR” | Button | I   | Enabled (nền đen) | Click: mở camera quét mã QR của tài sản. |
| 20  | Nút “Báo mất” | Button | I   | Enabled (viền đỏ) | Click: mở khu vực nhập “Lý do mất” bên dưới để báo mất tài sản. |
| 21  | Lý do mất (\*) | Textbox \[255\] | I   | Rỗng (placeholder: “Nhập lý do mất tài sản...”) | Bắt buộc nhập khi báo mất. Nhãn và viền đỏ khi chưa nhập hoặc không hợp lệ. |
| 21.1 | Nút “Xác nhận” | Button | I   | Enabled (nền đỏ) | Click: kiểm tra đã nhập lý do mất; hợp lệ thì ghi nhận tài sản ở trạng thái Mất, đóng khu vực nhập. |
| 21.2 | Nút “Hủy” | Button | I   | Enabled | Click: đóng khu vực nhập lý do mất, không lưu. |
| 22  | Người dùng hiện tại / Ngày bắt đầu | Label | O   |     | Người dùng hiện tại (VD: Nguyễn Văn An) và Ngày bắt đầu (VD: 2025-03-15). |
| **Vùng nút thao tác** |     |     |     |     |     |
| 23  | Nút “Hủy” | Button | I   | Enabled | Click: hủy thao tác bàn giao và quay lại (hiển thị hộp thoại xác nhận – đề xuất). |
| 24  | Nút “Cần quét đủ n tài sản nữa” | Button | I   | Không cho hoàn tất | Hiển thị số tài sản còn phải xử lý. Chưa thể hoàn tất khi còn tài sản chưa quét/báo mất. Khi đủ, nhãn đổi thành “Hoàn tất”. |

Bảng 108. Mô tả thành phần màn hình MH-03.07

**MH-03.08 – Đang bàn giao chọn trạng thái hoạt động và hoàn tất**

Hình 52. MH-03.08 – Đang bàn giao chọn trạng thái hoạt động và hoàn tất

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Vùng tiêu đề** |     |     |     |     |     |
| 1   | Liên kết “Danh sách biên bản” | Link/Button | I   | Enabled | Click: quay về màn hình Danh sách biên bản thu hồi (Màn hình 1). |
| 2   | Mã biên bản | Label \[20\] | O   |     | Mã biên bản, VD: TH01/2026. Chữ đậm cỡ lớn. |
| 3   | Trạng thái biên bản | Badge | O   | Đang bàn giao | Trạng thái hiện tại của biên bản, nằm cạnh mã biên bản. Giá trị: Nháp (nền xám) \| Chờ bàn giao (xanh dương) \| Đang bàn giao (cam) \| Đã hoàn tất (xanh lá). |
| 4   | Thông tin tóm tắt | Label \[255\] | O   |     | Hiển thị: Tên nhân viên · Phòng ban · Lý do thu hồi, VD: Nguyễn Văn An · Phòng Kỹ thuật · nghỉ việc. |
| **Khối thông tin biên bản** |     |     |     |     |     |
| 5   | Lịch bàn giao | Label (Date) | O   |     | Ngày hẹn bàn giao tài sản, định dạng yyyy-MM-dd, VD: 2026-07-08. |
| 6   | Người tạo | Label \[100\] | O   |     | Người/đơn vị tạo biên bản, VD: Phòng HCNS. |
| 7   | Email nhân viên | Label \[100\] | O   |     | Email của nhân viên bị thu hồi tài sản, dùng để gửi thông báo, VD: nguyenvanan@example.com. |
| **Danh sách tài sản** |     |     |     |     |     |
| 8   | Tiêu đề “Danh sách tài sản” | Label | O   | Danh sách tài sản (n) | Kèm tổng số tài sản, VD: (2). |
| 9   | Bộ đếm tiến độ quét | Label | O   | n/m đã quét | Số tài sản đã quét / tổng số, VD: 1/2 đã quét. Căn phải. |
| **Thẻ tài sản đã quét (VD: BBBG_01) – form nhập tình trạng** |     |     |     |     |     |
| 10  | Thông tin tài sản | Card header | O   |     | Gồm mã tài sản, tên tài sản · số serial (VD: BBBG_01 – MacBook Pro 13inch · SN: C02XK1ABC). |
| 10.1 | Badge “Đã quét” | Badge | O   | Đã quét (nền xanh lá) | Hiển thị sau khi quét QR thành công, cạnh mã tài sản. |
| 10.2 | Người dùng hiện tại | Label \[100\] | O   |     | VD: Nguyễn Văn An. |
| 10.3 | Ngày bắt đầu | Label (Date) | O   |     | yyyy-MM-dd, VD: 2025-03-15. |
| 11  | Tình trạng vật lý | Dropdown | I   |     | Ghi tình trạng ngoại hình của tài sản khi nhận lại. Ví dụ giá trị: Mới / Tốt, Trầy xước nhẹ,... (danh mục cấu hình theo hệ thống). |
| 12  | Trạng thái hoạt động | Dropdown | I   | — Chọn — | Đang mở danh sách. Các giá trị: — Chọn — Hoạt động bình thường / Lỗi màn hình / Không lên nguồn / Khác. Dòng đang trỏ chuột được tô xanh. |
| 13  | Phụ kiện đi kèm | Nhóm nút chọn nhiều (Chip toggle) | I   | Không chọn | Chọn các phụ kiện nhân viên bàn giao kèm tài sản: Sạc, Cáp, Chuột, Balo, Hộp. Danh sách phụ kiện phụ thuộc loại tài sản. Phụ kiện không được chọn được hiểu là thiếu. |
| 13.1 | Cảnh báo thiếu phụ kiện | Label | O   | Hiển thị | Chữ cam: “Nếu thiếu phụ kiện, vui lòng ghi chú bên dưới.” |
| 14  | Ghi chú phụ kiện (nếu thiếu) | Textbox \[255\] | I   | Rỗng (đang hiển thị gợi ý “Thiếu sạc”) | Nhập ghi chú về phụ kiện còn thiếu. Nên bắt buộc nhập khi có phụ kiện không được chọn (đề xuất). |
| 15  | Ghi chú tình trạng | Textbox \[500\] | I   | Rỗng (placeholder: “VD: Vết xước ở góc trái mặt lưng”) | Nhập mô tả chi tiết hiện trạng tài sản. Không bắt buộc. |
| 16  | Hình ảnh hiện trạng | Nút tải ảnh (File upload) | I   | Chưa có ảnh | Nút “Tải ảnh lên” (có icon camera): chọn ảnh từ thiết bị hoặc chụp ảnh hiện trạng tài sản. Định dạng ảnh jpg, png (đề xuất). |
| 17  | Nút “Lưu tình trạng” | Button | I   | Enabled | Click: lưu tình trạng vật lý, trạng thái hoạt động, phụ kiện, ghi chú và hình ảnh của tài sản. Có icon lưu. |
| **Thẻ tài sản chưa quét (VD: BBBG_02) – báo mất** |     |     |     |     |     |
| 18  | Thông tin tài sản | Card header | O   |     | Mã tài sản và tên · số serial (VD: BBBG_02 – Màn hình Dell U2723QE · SN: CN0XK2DEF). |
| 19  | Nút “Quét QR” | Button | I   | Enabled (nền đen) | Click: mở camera quét mã QR của tài sản. |
| 20  | Nút “Báo mất” | Button | I   | Enabled (viền đỏ) | Click: mở khu vực nhập “Lý do mất” bên dưới để báo mất tài sản. |
| 21  | Lý do mất (\*) | Textbox \[255\] | I   | Rỗng (placeholder: “Nhập lý do mất tài sản...”) | Bắt buộc nhập khi báo mất. Nhãn và viền đỏ khi chưa nhập hoặc không hợp lệ. |
| 21.1 | Nút “Xác nhận” | Button | I   | Enabled (nền đỏ) | Click: kiểm tra đã nhập lý do mất; hợp lệ thì ghi nhận tài sản ở trạng thái Mất, đóng khu vực nhập. |
| 21.2 | Nút “Hủy” | Button | I   | Enabled | Click: đóng khu vực nhập lý do mất, không lưu. |
| 22  | Người dùng hiện tại / Ngày bắt đầu | Label | O   |     | Người dùng hiện tại (VD: Nguyễn Văn An) và Ngày bắt đầu (VD: 2025-03-15). |
| **Vùng nút thao tác** |     |     |     |     |     |
| 23  | Nút “Hủy” | Button | I   | Enabled | Click: hủy thao tác bàn giao và quay lại (hiển thị hộp thoại xác nhận – đề xuất). |
| 24  | Nút “Hoàn tất” | Button | I   | Enabled (nền xanh) | Click: hoàn tất biên bản thu hồi, chuyển trạng thái sang Đã hoàn tất (Màn hình 9). Chỉ cho phép khi mọi tài sản đã được quét hoặc báo mất. |

Bảng 109. Mô tả thành phần màn hình MH-03.08

**MH-03.09 – Chi tiết biên bản đã hoàn tất**

Hình 53. MH-03.09 – Chi tiết biên bản đã hoàn tất

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Vùng tiêu đề** |     |     |     |     |     |
| 1   | Liên kết “Danh sách biên bản” | Link/Button | I   | Enabled | Click: quay về màn hình Danh sách biên bản thu hồi (Màn hình 1). |
| 2   | Mã biên bản | Label \[20\] | O   |     | VD: TH01/2026. Chữ đậm cỡ lớn. |
| 3   | Trạng thái biên bản | Badge | O   | Đã hoàn tất (nền xanh lá, có chấm tròn) | Biên bản đã hoàn tất. Giá trị: Nháp (nền xám) / Chờ bàn giao (xanh dương) / Đang bàn giao (cam) / Đã hoàn tất (xanh lá). |
| 4   | Thông tin tóm tắt | Label \[255\] | O   |     | Tên nhân viên · Phòng ban · Lý do thu hồi, VD: Nguyễn Văn An · Phòng Kỹ thuật · nghỉ việc. |
| 5   | Nút “In PDF” | Button | I   | Enabled | Click: xuất và in biên bản dạng PDF. Có icon máy in màu đỏ. |
| 6   | Nút “Xuất Word” | Button | I   | Enabled | Click: tải biên bản về dưới dạng file Word (.docx). Có icon tài liệu màu xanh. |
| **Khối thông tin biên bản** |     |     |     |     |     |
| 7   | Lịch bàn giao | Label (DateTime) | O   |     | Ngày giờ hẹn bàn giao, định dạng yyyy-MM-dd · HH:mm, VD: 2026-03-20 · 09:30. |
| 8   | Ngày hoàn tất | Label (DateTime) | O   |     | Ngày giờ hoàn tất biên bản, định dạng yyyy-MM-dd · HH:mm, VD: 2026-03-20 · 10:15. |
| 9   | Người nhận tài sản | Label \[100\] | O   |     | Người/đơn vị nhận lại tài sản, VD: Phòng HCNS. |
| 10  | Email nhân viên | Label \[100\] | O   |     | VD: nguyenvanan@example.com. |
| **Danh sách tài sản đã thu hồi** |     |     |     |     |     |
| 11  | Tiêu đề “Danh sách tài sản đã thu hồi” | Label | O   | Danh sách tài sản đã thu hồi (n) | Kèm tổng số tài sản, VD: (2). |
| 12  | Badge tiến độ thu hồi | Badge | O   | Đã thu hồi n/m tài sản | Nền xanh lá, có dấu tích. VD: “Đã thu hồi 2/2 tài sản”. |
| 13  | Thẻ tài sản đã thu hồi | Card/List | O   | Theo biên bản | Mỗi tài sản 1 thẻ, chỉ xem (không chỉnh sửa). |
| 13.1 | Mã tài sản | Label \[20\] | O   |     | VD: BBBG_01. Chữ đậm. |
| 13.2 | Badge “Đã thu hồi” | Badge | O   | Đã thu hồi | Nền xanh lá, có dấu tích. |
| 13.3 | Tên tài sản · Số serial | Label \[150\] | O   |     | VD: “MacBook Pro 13inch · SN: C02XK1ABC”. |
| 13.4 | Nút “Mã QR đã khớp” | Button | O   | Disabled (nền xám nhạt) | Chỉ báo mã QR của tài sản đã được quét và khớp. Không thao tác được. |
| 13.5 | Tình trạng vật lý | Label (tag) | O   |     | Tình trạng ngoại hình đã ghi nhận, VD: Trầy xước nhẹ; Mới / Tốt. |
| 13.6 | Trạng thái hoạt động | Label (tag) | O   |     | Trạng thái hoạt động đã ghi nhận, VD: Hoạt động bình thường. |
| 13.7 | Phụ kiện đi kèm bàn giao | Nhóm tag | O   |     | Danh sách phụ kiện đã bàn giao kèm, VD: Sạc, Cáp, Balo (BBBG_01); Dây nguồn, Cáp Type-C, Chân đế (BBBG_02). |
| 13.8 | Ghi chú hiện trạng | Label \[500\] | O   |     | Ghi chú tình trạng đã nhập, VD: “Vết xước mờ ở góc trái mặt lưng kim loại...”. |
| 13.9 | Người bàn giao | Label \[100\] | O   |     | Nhân viên bàn giao tài sản, VD: Nguyễn Văn An. |
| 13.10 | Ngày nhận bàn giao | Label (Date) | O   |     | yyyy-MM-dd, VD: 2026-03-20. |
| **Khối chữ ký các bên** |     |     |     |     |     |
| 14  | Bên bàn giao (nhân viên) | Label | O   |     | Tiêu đề cột bên trái và tên nhân viên bên dưới, VD: Nguyễn Văn An. |
| 15  | Bên nhận bàn giao (đại diện HCNS) | Label | O   |     | Tiêu đề cột bên phải và tên đại diện nhận, VD: Phòng HCNS. |

Bảng 110. Mô tả thành phần màn hình MH-03.09

**MH-03.10 – Xác nhận biên bản thu hồi**

Hình 54. MH-03.10 – Xác nhận biên bản thu hồi

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Vùng tiêu đề** |     |     |     |     |     |
| 1   | Tiêu đề trang | Label \[100\] | O   | Xác nhận biên bản thu hồi | Tiêu đề màn hình, chữ đậm cỡ lớn. |
| 2   | Mã biên bản | Label \[20\] | O   |     | Hiển thị dạng “Mã biên bản: TH01/2026”. Mã theo định dạng TH{số thứ tự}/{năm}. |
| **Thẻ “Biên bản thu hồi tài sản”** |     |     |     |     |     |
| 3   | Tiêu đề thẻ | Label | O   | Biên bản thu hồi tài sản | Tiêu đề của khối nội dung biên bản, có đường kẻ ngăn cách phía dưới. |
| **Thông tin biên bản** |     |     |     |     |     |
| 4   | Nhân viên | Label \[100\] | O   |     | Nhãn “Nhân viên:” và tên nhân viên bị thu hồi tài sản, VD: Phạm Hoàng Dung. Chữ đậm. |
| 5   | Phòng ban | Label \[100\] | O   |     | Nhãn “Phòng ban:” và phòng ban của nhân viên, VD: Phòng Tài chính. Chữ đậm. |
| 6   | Lý do | Label \[500\] | O   |     | Nhãn “Lý do:” và lý do thu hồi đã nhập khi tạo biên bản. |
| 7   | Lịch bàn giao | Label (Date) | O   |     | Nhãn “Lịch bàn giao:” và ngày hẹn bàn giao, định dạng yyyy-MM-dd. |
| **Danh sách tài sản trong biên bản** |     |     |     |     |     |
| 8   | Thẻ tài sản (mỗi dòng 1 tài sản) | Card/List | O   | Theo biên bản | Liệt kê các tài sản trong biên bản, đánh số thứ tự từ 1. Chỉ xem, không chỉnh sửa. |
| 8.1 | Icon tài sản | Icon | O   | Icon hình hộp | Biểu tượng tài sản. |
| 8.2 | Số thứ tự, mã và tên tài sản | Label \[150\] | O   |     | Hiển thị dạng “{STT}. {Mã tài sản} — {Tên tài sản}”, VD: “1. BBBG_08 — Laptop Asus ZenBook 14”. Chữ đậm. |
| 8.3 | Tình trạng | Label \[100\] | O   |     | Nhãn “Tình trạng:” kèm “{Tình trạng vật lý} · {Trạng thái hoạt động}”, VD: “Tốt · Không lên nguồn”. Với tài sản báo mất hiển thị “Mất · -”. |
| 8.4 | Phụ kiện | Label \[255\] | O   | \-  | Nhãn “Phụ kiện:” kèm danh sách phụ kiện đã bàn giao, VD: Cáp. Không có phụ kiện hiển thị “-”. |
| 8.5 | Ghi chú | Label \[500\] | O   |     | Nhãn “Ghi chú:” kèm ghi chú tình trạng đã nhập, VD: POK. Chỉ hiển thị khi tài sản có ghi chú (BBBG_09 không có dòng này). |
| **Vùng xác nhận** |     |     |     |     |     |
| 9   | Ô cam kết bàn giao | Checkbox | I   | Chưa tích | Nội dung: “Tôi đã xem và xác nhận sẽ bàn giao tài sản đúng hẹn”. Người dùng phải tích trước khi xác nhận (đề xuất). |
| 10  | Nút “Xác nhận” | Button | I   | Enabled (nền xanh, có icon dấu tích) | Click: kiểm tra đã tích ô cam kết; nếu chưa tích thì báo lỗi (đề xuất). Hợp lệ: ghi nhận nhân viên đã xác nhận bàn giao đúng hẹn cho biên bản này. |

Bảng 111. Mô tả thành phần màn hình MH-03.10

### 3.3.15 CN-03.3 Xác nhận đã đọc và đồng ý bàn giao

#### 3.3.15.1 Mô tả chức năng và tham chiếu

| **Thuộc tính** | **Nội dung** |
| --- | --- |
| Mã UC | UC-03.3 |
| Mục tiêu | Nhân viên xem biên bản của mình và xác nhận đã đọc, đồng ý lịch bàn giao. |
| Tác nhân | Nhân viên có tài sản cần thu hồi |
| Mô tả xử lý | Mở thông báo hoặc biên bản; xem lý do, danh sách tài sản và lịch bàn giao; thực hiện xác nhận tại MH-03.10. Hệ thống ghi nhận kết quả xác nhận để người quản lý tài sản theo dõi. |
| Tham chiếu | AD-03.1; MH-03.10; BR-03.13 |

Bảng 112. Mô tả UC-03.3

### 3.3.16 CN-03.6 Cập nhật trạng thái tài sản sau thu hồi

#### 3.3.16.1 Mô tả chức năng và tham chiếu

| **Thuộc tính** | **Nội dung** |
| --- | --- |
| Mã UC | UC-03.6 |
| Mục tiêu | Cập nhật trạng thái tài sản theo kết quả thu hồi sau khi biên bản hoàn tất. |
| Tác nhân | Hệ thống |
| Mô tả xử lý | Sau khi người quản lý hoàn tất biên bản, hệ thống cập nhật tài sản theo kết quả đã ghi nhận và lưu biên bản. Các trường hợp thu hồi và báo mất được mô tả trong UC-03.4 và UC-03.5. |
| Tham chiếu | AD-03.2; MH-03.09; BR-03.12 |

Bảng 113. Mô tả UC-03.6

### 3.3.17 CN-04.1 đến CN-04.6 Điều chuyển tài sản

#### 3.3.17.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |
| --- | --- |
| Mã UC | UC-04.1 |
| Mô tả UC | Cho phép Người đề nghị tạo và theo dõi yêu cầu điều chuyển tài sản; HCNS tiếp nhận, kiểm tra, phê duyệt yêu cầu, lập biên bản bàn giao, ghi nhận xác nhận của Bên giao và Bên nhận trên biên bản, sau đó cập nhật sổ sách và lưu hồ sơ khi điều chuyển hoàn tất. |
| Tác nhân chính | Người đề nghị; HCNS |
| Tiền điều kiện | Người đề nghị và HCNS đã đăng nhập hệ thống, có quyền thực hiện các chức năng tương ứng. Tài sản cần điều chuyển có trong sổ theo dõi tài sản của tổ chức. |
| Hậu điều kiện | Thành công: thông tin vị trí, bộ phận sử dụng và người quản lý tài sản được cập nhật, hồ sơ được lưu trữ, yêu cầu chuyển sang “Hoàn tất”. Không thành công: hệ thống lưu trạng thái (“Chờ bổ sung”, “Từ chối” hoặc trạng thái đang xử lý) và lý do tương ứng. |
| Mã AD | AD-04.1 |
| Mã giao diện | MH-04.01, MH-04.02, MH-04.03, MH-04.04, MH-04.05 |

Bảng 114. Đặc tả UC-04.1 – Điều chuyển tài sản

| **Bước** | **Hành động tác nhân** | **Phản hồi hệ thống** |
| --- | --- | --- |
| 1   | Người đề nghị truy cập chức năng điều chuyển tài sản. | Hiển thị danh sách yêu cầu của người đề nghị và chức năng tạo yêu cầu mới (MH-04.01). |
| 2   | Người đề nghị chọn tạo yêu cầu, nhập mã tài sản, lý do điều chuyển, vị trí nhận, người dự kiến tiếp nhận; sau đó gửi yêu cầu (MH-04.02). | Hiển thị tên tài sản và vị trí hiện tại theo mã tài sản; kiểm tra thông tin bắt buộc, lưu yêu cầu, tạo mã yêu cầu và chuyển trạng thái sang “Chờ tiếp nhận”. |
| 3   | HCNS truy cập danh sách yêu cầu và chọn yêu cầu cần xử lý. | Hiển thị chi tiết yêu cầu và thông tin tài sản liên quan (MH-04.03). |
| 4   | HCNS kiểm tra tính đầy đủ của hồ sơ, đối chiếu thông tin tài sản và xác định điều kiện điều chuyển. | Hiển thị thông tin tài sản phục vụ kiểm tra và cho phép ghi nhận kết quả xử lý. |
| 5   | HCNS phê duyệt yêu cầu khi hồ sơ đầy đủ và tài sản đủ điều kiện điều chuyển. | Lưu kết quả phê duyệt, thời gian xử lý; chuyển trạng thái sang “Đã phê duyệt”. |
| 6   | HCNS chọn lập biên bản bàn giao và bổ sung bên giao, bên nhận, thời gian, địa điểm bàn giao (MH-04.04). | Tạo và lưu biên bản bàn giao từ thông tin yêu cầu đã phê duyệt; chuyển trạng thái sang “Chờ xác nhận bàn giao”. |
| 7   | Bên giao kiểm tra tài sản thực tế và xác nhận bàn giao trên biên bản; HCNS ghi nhận kết quả vào hệ thống (MH-04.05). | Lưu kết quả xác nhận bàn giao. |
| 8   | Bên nhận kiểm tra tình trạng tài sản, phụ kiện và xác nhận tiếp nhận trên biên bản; HCNS ghi nhận kết quả vào hệ thống (MH-04.05). | Lưu kết quả xác nhận tiếp nhận. |
| 9   | HCNS kiểm tra hồ sơ bàn giao và xác nhận hoàn tất điều chuyển. | Kiểm tra kết quả xác nhận của hai bên và tính đầy đủ của hồ sơ. Cập nhật vị trí, bộ phận sử dụng và người quản lý mới của tài sản; lưu hồ sơ và lịch sử điều chuyển; chuyển trạng thái yêu cầu sang “Hoàn tất”. |

Bảng 115. Luồng chính UC-04.1

| **Mã** | **Bước liên quan** | **Hành động tác nhân** | **Phản hồi hệ thống** |
| --- | --- | --- | --- |
| A1  | 2   | Người đề nghị nhập thiếu thông tin hoặc dữ liệu chưa hợp lệ. | Thông báo nội dung cần điều chỉnh và yêu cầu bổ sung trước khi gửi. |
| A2  | 4   | HCNS phát hiện hồ sơ chưa đầy đủ. | Ghi nhận lý do, chuyển trạng thái “Chờ bổ sung”; Người đề nghị thấy lý do ở màn Theo dõi yêu cầu. |
| A3  | Sau A2 | Người đề nghị mở yêu cầu “Chờ bổ sung”, cập nhật thông tin và gửi lại. | Lưu thông tin bổ sung, chuyển trạng thái về “Chờ tiếp nhận”; quay lại bước 3. |
| A4  | 4   | HCNS xác định tài sản không đủ điều kiện điều chuyển hoặc không có tài sản phù hợp. | Cho phép ghi nhận lý do từ chối, chuyển trạng thái “Từ chối”, lưu kết quả; Người đề nghị xem kết quả ở màn Theo dõi yêu cầu. Luồng kết thúc. |
| A5  | 8   | Bên nhận phát hiện tình trạng tài sản không đúng như thông tin dự kiến. | Ghi nhận sai lệch, giữ yêu cầu ở “Chờ xác nhận bàn giao” để HCNS phối hợp xử lý (điều chỉnh biên bản, xác nhận lại) rồi tiếp tục bước 7 hoặc 9. |
| A6  | Bất kỳ | Người đề nghị theo dõi yêu cầu đã gửi trước đó. | Hiển thị danh sách, chi tiết, trạng thái hiện tại, kết quả xử lý và lý do bổ sung hoặc từ chối của yêu cầu do chính người đó tạo. |

Bảng 116. Luồng thay thế UC-04.1

| **Mã** | **Bước liên quan** | **Tình huống ngoại lệ** | **Phản hồi hệ thống** |
| --- | --- | --- | --- |
| E1  | 2   | Không thể lưu yêu cầu do lỗi hệ thống. | Thông báo lỗi và không hiển thị thông báo gửi thành công. |
| E2  | 4   | Không tìm thấy tài sản hoặc thông tin tài sản không khớp. | Thông báo vấn đề để HCNS xác minh; không cho phê duyệt khi chưa đủ căn cứ. |
| E3  | 6   | Không thể lập hoặc lưu biên bản bàn giao. | Thông báo lỗi và giữ yêu cầu ở trạng thái “Đã phê duyệt”. |
| E4  | 7–8 | Một trong hai bên chưa xác nhận bàn giao hoặc tiếp nhận. | Giữ trạng thái “Chờ xác nhận bàn giao”, không cho phép hoàn tất điều chuyển. |
| E5  | 10  | Không thể cập nhật thông tin tài sản hoặc lưu hồ sơ. | Thông báo lỗi, ghi nhận tình trạng xử lý và không chuyển yêu cầu sang “Hoàn tất” khi dữ liệu chưa được cập nhật thành công. |

Bảng 117. Luồng ngoại lệ UC-04.1

| **Mã quy tắc** | **Nội dung** |
| --- | --- |
| BR-04.01 | Yêu cầu phải có đầy đủ thông tin bắt buộc (mã tài sản, lý do điều chuyển, vị trí nhận, người dự kiến tiếp nhận) trước khi gửi. |
| BR-04.02 | Thông tin tài sản phải được đối chiếu với sổ theo dõi hoặc nguồn dữ liệu tài sản của tổ chức. |
| BR-04.03 | Chỉ HCNS có quyền mới được kiểm tra, phê duyệt, lập biên bản bàn giao, cập nhật sổ sách và lưu hồ sơ. |
| BR-04.04 | Yêu cầu chỉ được phê duyệt khi hồ sơ đầy đủ và tài sản đáp ứng điều kiện điều chuyển. |
| BR-04.05 | Chỉ yêu cầu đã được phê duyệt mới được chuyển sang bước bàn giao chính thức. |
| BR-04.06 | Biên bản bàn giao phải ghi nhận thông tin tài sản, bên giao, bên nhận, thời gian và địa điểm bàn giao. |
| BR-04.07 | Chỉ hoàn tất điều chuyển khi biên bản có xác nhận bàn giao của Bên giao và xác nhận tiếp nhận của Bên nhận theo quy định của tổ chức. |
| BR-04.08 | Chỉ cập nhật vị trí, bộ phận sử dụng và người quản lý mới sau khi bàn giao, tiếp nhận được xác nhận đầy đủ. |
| BR-04.09 | Hồ sơ và lịch sử điều chuyển phải được lưu trữ để phục vụ tra cứu. |
| BR-04.10 | Chỉ chuyển yêu cầu sang trạng thái “Hoàn tất” khi cập nhật thông tin tài sản và lưu hồ sơ thành công. |

Bảng 118. Quy tắc áp dụng UC-04.1

| **Thuộc tính** | **Nội dung** |
| --- | --- |
| Mã AD | AD-04.1 – Activity Diagram điều chuyển tài sản |
| Mã giao diện | MH-04.01 – Danh sách yêu cầu; MH-04.02 – Tạo yêu cầu; MH-04.03 – Chi tiết và xử lý yêu cầu; MH-04.04 – Lập biên bản bàn giao; MH-04.05 – Ghi nhận xác nhận bàn giao và tiếp nhận |

Bảng 119. Tham chiếu AD và màn hình UC-04.1

#### 3.3.17.2 Sơ đồ hoạt động

Hình 55. AD-04.1 – Điều chuyển tài sản toàn quy trình

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Tên phân hệ / menu trái | Label + Icon | O   | Điều chuyển tài sản | Click về MH-04.01. Mục đang chọn tô nền xanh nhạt. |
| 2   | Ô tra cứu toàn cục | Textbox \[100\] | I   | N/A | Nhập mã tài sản hoặc số phiếu; không bắt buộc; không check trùng; Enter để tra cứu. |
| 3   | Chuông thông báo | Icon button | I/O | N/A | Click mở danh sách thông báo; chấm đỏ khi có thông báo chưa đọc. |
| 4   | Trợ giúp | Icon button | I   | N/A | Click mở hướng dẫn sử dụng. |
| 5   | Avatar | Icon button | I   | N/A | Click mở menu tài khoản (thông tin, đăng xuất). |
| 6   | Người dùng đăng nhập | Label + Avatar | O   | N/A | Lấy từ tài khoản đăng nhập: dòng 1 là phòng ban, dòng 2 là vai trò (Nhân viên / Quản trị viên). |

Bảng 120. Thành phần giao diện dùng chung NV-04

#### 3.3.17.3 Giao diện

**MH-04.02 – Tạo và gửi yêu cầu điều chuyển**

Hình 56. MH-04.02 – Tạo và gửi yêu cầu điều chuyển

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 7   | Nhãn "TẠO YÊU CẦU ĐIỀU CHUYỂN" | Tag | O   | TẠO YÊU CẦU ĐIỀU CHUYỂN | Chữ in hoa, nền xanh nhạt. |
| 8   | Nút quay lại | Icon button | I   | N/A | Click về MH-04.01. |
| 9   | Tiêu đề và mô tả trang | Label | O   | Tạo yêu cầu điều chuyển | Tiêu đề chữ đậm, mô tả chữ xám nhỏ bên dưới. |
| 10  | Mã tài sản \* | Combobox \[30\] | I   | N/A | Bắt buộc. Chọn 1 giá trị trong danh sách. Check trùng: không. Để trống thì viền đỏ, báo "Vui lòng chọn tài sản". |
| 11  | Tên tài sản | Textbox readonly \[150\] | O   | N/A | Lấy từ Tài sản, trường Tên tài sản, theo mã ở ô 10. Nền xám, icon khóa, không sửa. |
| 12  | Vị trí hiện tại | Textbox readonly \[200\] | O   | N/A | Lấy từ Tài sản, trường Vị trí hiện tại, theo mã ở ô 10. Nền xám, không sửa. |
| 13  | Vị trí nhận \* | Dropdown | I   | N/A | Bắt buộc. Chọn 1 giá trị từ danh mục bộ phận/chi nhánh/địa điểm. Phải khác ô 12. |
| 14  | Người dự kiến tiếp nhận \* | Dropdown | I   | N/A | Bắt buộc. Chọn 1 nhân sự thuộc vị trí nhận, hiển thị "Họ tên (Mã NV)". Để trống thì viền đỏ, nền hồng, báo "Vui lòng chọn nhân sự phụ trách tiếp nhận tài sản". |
| 15  | Lý do điều chuyển \* | Textarea \[500\] | I   | N/A | Bắt buộc. Văn bản tự do, tối đa 500 ký tự. Check trùng: không. |
| 16  | Bộ đếm ký tự | Label | O   | N/A | Dạng "x/500", đếm theo ô 15. |
| 17  | Tài liệu / Phiếu đính kèm | File upload | I   | N/A | Không bắt buộc. Chỉ nhận .PDF, .DOCX, .XLSX, tối đa 15MB mỗi tệp. Sau khi tải hiện tên tệp, dung lượng, giờ tải lên, nhãn "ĐÃ TẢI LÊN". |
| 18  | Nút tải xuống tệp | Icon button | I   | N/A | Click tải tệp về máy. |
| 19  | Nút xóa tệp | Icon button | I   | N/A | Click xóa tệp khỏi yêu cầu. |
| 20  | Hủy | Button | I   | Hủy | Click bỏ nhập liệu, về MH-04.01. |
| 21  | Gửi yêu cầu | Button | I   | Gửi yêu cầu | Kiểm tra ô 10, 13, 14, 15. Hợp lệ thì tạo mã yêu cầu, chuyển trạng thái "Chờ tiếp nhận". Không hợp lệ thì báo lỗi đỏ dưới ô tương ứng. |

Bảng 121. Mô tả thành phần màn hình MH-04.02

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-04.01 | Gửi yêu cầu chỉ khi đủ 4 trường bắt buộc (BR-04.01). |
| QT-04.02 | Chọn mã tài sản thì tự điền ô 11, 12; đổi/xóa mã thì cập nhật lại. |
| QT-04.03 | Mã yêu cầu tự sinh dạng DC-YYYY-NNNN, không trùng. |

Bảng 122. Quy tắc màn hình MH-04.02

**MH-04.01 – Danh sách và theo dõi yêu cầu điều chuyển**

Hình 57. MH-04.01 – Danh sách và theo dõi yêu cầu điều chuyển

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 7   | Tiêu đề trang | Label | O   | Danh sách yêu cầu điều chuyển tài sản | Cố định. |
| 8   | Nút "Tạo yêu cầu điều chuyển" | Button | I   | Tạo yêu cầu điều chuyển | Click mở MH-04.02. |
| 9   | Ô tìm kiếm | Textbox \[100\] | I   | N/A | Tìm theo mã yêu cầu, mã tài sản, người đề nghị. Không bắt buộc, không phân biệt hoa/thường, kết hợp AND với ô 10. |
| 10  | Bộ lọc trạng thái | Dropdown | I   | N/A | Chọn 1 trạng thái, mặc định "Tất cả trạng thái". |
| 11  | Danh sách trạng thái | List | I   | N/A | Gồm: Tất cả trạng thái, Chờ tiếp nhận, Chờ bổ sung, Đã phê duyệt, Chờ xác nhận bàn giao, Từ chối, Hoàn tất. Mỗi giá trị có chấm màu như ô 13. |
| 12  | Mã yêu cầu | Label | O   | N/A | Lấy từ Yêu cầu điều chuyển, trường Mã yêu cầu. Chữ đậm, icon bên trái đổi theo trạng thái. |
| 13  | Nhãn trạng thái | Badge | O   | N/A | Lấy từ Yêu cầu điều chuyển, trường Trạng thái. Màu: Chờ tiếp nhận (xám), Chờ bổ sung (cam), Đã phê duyệt (xanh dương), Chờ xác nhận bàn giao (tím), Từ chối (đỏ), Hoàn tất (xanh lá). |
| 14  | Dòng tóm tắt | Label | O   | N/A | Ghép: Tên tài sản • Mã tài sản • Vị trí hiện tại → Vị trí nhận. Chưa có dữ liệu thì hiện "Chưa có thông tin bổ sung" (chữ nghiêng xám). |
| 15  | Ngày | Label | O   | N/A | Lấy từ Yêu cầu điều chuyển, trường Ngày cập nhật gần nhất, định dạng yyyy-MM-dd. Chưa có thì hiện "Chưa cập nhật". |
| 16  | Mũi tên ">" | Icon | I   | N/A | Click mở chi tiết yêu cầu (MH-04.03). |
| 17  | Phân trang | Pagination | I   | N/A | Nút đầu/trước/số trang/sau/cuối. Trang hiện tại nền xanh. |

Bảng 123. Mô tả thành phần màn hình MH-04.01

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-04.04 | Người đề nghị chỉ thấy yêu cầu do mình tạo (A6); HCNS thấy toàn bộ. |
| QT-04.05 | Sắp xếp mới nhất lên đầu; tìm kiếm và lọc áp dụng đồng thời. |
| QT-04.06 | Yêu cầu "Chờ bổ sung" hoặc "Từ chối" thì hiển thị lý do ở chi tiết (A2, A4). |

Bảng 124. Quy tắc màn hình MH-04.01

**MH-04.03 – Chi tiết và xử lý yêu cầu điều chuyển**

Hình 58. MH-04.03 – Chi tiết và xử lý yêu cầu điều chuyển

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 7   | Breadcrumb | Link | I   | N/A | Click cấp đầu về MH-04.01; cấp cuối là trang hiện tại. |
| 8   | Nút quay lại | Icon button | I   | N/A | Click về MH-04.01. |
| 9   | Mã yêu cầu (tiêu đề) | Label | O   | N/A | Lấy từ Yêu cầu điều chuyển, trường Mã yêu cầu. Chữ đậm, cỡ lớn. |
| 10  | Nhãn trạng thái | Badge | O   | N/A | Lấy từ trường Trạng thái; màu như MH-04.01 (ô 13). |
| 11  | Ô phụ góc phải | Pill | O   | N/A | Chưa có nội dung trên mockup. |
| 12  | Mã yêu cầu | Label | O   | N/A | Lấy từ Yêu cầu điều chuyển, trường Mã yêu cầu. |
| 13  | Người đề nghị | Label | O   | N/A | Lấy từ người tạo yêu cầu, dạng "Họ tên (Mã NV) - Phòng ban". |
| 14  | Ngày đề nghị | Label | O   | N/A | Lấy từ trường Ngày gửi, định dạng dd/MM/yyyy - HH:mm. |
| 15  | Vị trí nhận | Label | O   | N/A | Lấy từ trường Vị trí nhận của yêu cầu. |
| 16  | Dự kiến tiếp nhận | Label | O   | N/A | Lấy từ trường Người dự kiến tiếp nhận, dạng "Họ tên (Mã NV) - Chức danh". |
| 17  | Lý do điều chuyển | Label | O   | N/A | Lấy từ trường Lý do điều chuyển. Hiển thị đầy đủ, tự xuống dòng. |
| 18  | Tài liệu đính kèm | Link | I/O | N/A | Hiển thị số tệp đính kèm của yêu cầu; click mở danh sách để xem/tải. |
| 19  | Mã tài sản | Label | O   | N/A | Lấy từ Tài sản, trường Mã tài sản. |
| 20  | Tên tài sản | Label | O   | N/A | Lấy từ Tài sản, trường Tên tài sản (kèm cấu hình). |
| 21  | Tình trạng hiện tại | Label | O   | N/A | Lấy từ Tài sản, trường Tình trạng (trạng thái sử dụng, chất lượng còn lại, kiểm định). |
| 22  | Vị trí hiện tại | Label | O   | N/A | Lấy từ Tài sản, trường Vị trí hiện tại. |
| 23  | Quản lý hiện tại | Label | O   | N/A | Lấy từ Tài sản, trường Người quản lý, dạng "Họ tên (Mã NV)". |
| 24  | S/N và Nguyên giá | Label | O   | N/A | Lấy từ Tài sản, trường Số serial và Nguyên giá. Nguyên giá phân cách hàng nghìn bằng dấu chấm, kèm "VNĐ". |
| 25  | Checkbox "Hồ sơ đầy đủ" | Checkbox | I   | N/A | Mặc định bỏ chọn. Tích khi hồ sơ đầy đủ. |
| 26  | Checkbox "Đủ điều kiện điều chuyển" | Checkbox | I   | N/A | Mặc định bỏ chọn. Tích khi tài sản đủ điều kiện điều chuyển. |
| 27  | Lý do bổ sung / từ chối / ghi chú phê duyệt \* | Textarea \[500\] | I   | N/A | Bắt buộc khi Yêu cầu bổ sung hoặc Từ chối. Văn bản tự do, tối đa 500 ký tự. Check trùng: không. |
| 28  | Bộ đếm ký tự | Label | O   | N/A | Dạng "x/500 ký tự". |
| 29  | Yêu cầu bổ sung | Button | I   | Yêu cầu bổ sung | Kiểm tra ô 27 có nội dung. Chuyển "Chờ bổ sung", gửi lý do cho người đề nghị. |
| 30  | Từ chối | Button | I   | Từ chối | Kiểm tra ô 27 có nội dung. Chuyển "Từ chối", lưu lý do. Nền hồng, chữ đỏ. |
| 31  | Phê duyệt | Button | I   | Phê duyệt | Yêu cầu tích cả ô 25 và 26. Chuyển "Đã phê duyệt", lưu người duyệt và thời gian duyệt. |

Bảng 125. Mô tả thành phần màn hình MH-04.03

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-04.07 | Chỉ HCNS có quyền thao tác ở ô 25–31 (BR-04.03). |
| QT-04.08 | Chỉ phê duyệt khi hồ sơ đầy đủ và tài sản đủ điều kiện (BR-04.04). |
| QT-04.09 | Thông tin yêu cầu và tài sản (ô 12–24) chỉ đọc; thông tin tài sản đối chiếu với sổ theo dõi (BR-04.02). |
| QT-04.10 | Sau khi xử lý, khối xử lý hồ sơ chuyển sang chế độ chỉ xem. |

Bảng 126. Quy tắc màn hình MH-04.03

**MH-04.04 – Lập biên bản bàn giao điều chuyển**

Hình 59. MH-04.04 – Lập biên bản bàn giao điều chuyển

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 7   | Breadcrumb | Link | I   | N/A | Click cấp đầu về MH-04.01, cấp giữa về MH-04.03; cấp cuối là trang hiện tại. |
| 8   | Nút quay lại | Icon button | I   | N/A | Click về MH-04.03. |
| 9   | Tiêu đề trang | Label | O   | Lập biên bản bàn giao tài sản | Cố định. |
| 10  | Nhãn biểu mẫu | Badge | O   | N/A | Lấy từ cấu hình biểu mẫu, dạng "Biểu mẫu số 048/TS-2026". |
| 11  | Số biên bản | Textbox readonly \[20\] | O   | Tự động sinh | Số tự sinh, duy nhất, tăng theo năm. Không sửa. |
| 12  | Mã yêu cầu điều chuyển | Textbox readonly \[20\] | O   | N/A | Lấy từ Yêu cầu điều chuyển, trường Mã yêu cầu. Không sửa. |
| 13  | Liên kết "Xem phiếu" | Link | I   | Xem phiếu | Click mở chi tiết yêu cầu (MH-04.03). |
| 14  | Thời gian bàn giao \* | DateTime picker | I   | N/A | Bắt buộc. Định dạng yyyy-MM-dd HH:mm. Check trùng: không. |
| 15  | Địa điểm bàn giao \* | Textbox \[200\] | I   | N/A | Bắt buộc. Văn bản tự do, tối đa 200 ký tự. Check trùng: không. |
| 16  | Ảnh tài sản | Image | O   | N/A | Lấy từ Tài sản, trường Hình ảnh; kèm nhãn "MÃ: \[Mã tài sản\]" ở góc dưới. |
| 17  | Số Serial | Label | O   | N/A | Lấy từ Tài sản, trường Số serial. |
| 18  | Tên tài sản | Label | O   | N/A | Lấy từ Tài sản, trường Tên tài sản; tag cấu hình chính bên dưới. |
| 19  | Tình trạng hiện tại | Label | O   | N/A | Lấy từ Tài sản, trường Tình trạng. |
| 20  | Phụ kiện kèm theo \* | Textarea \[500\] | I   | N/A | Bắt buộc. Gợi ý ban đầu lấy từ phụ kiện của tài sản, cho sửa. Tối đa 500 ký tự. Check trùng: không. |
| 21  | Tiêu đề thẻ Bên giao | Label | O   | BÊN GIAO TÀI SẢN | Cố định. |
| 22  | Đại diện bên giao | Avatar + Label | O   | N/A | Lấy từ Tài sản, trường Người/bộ phận đang sử dụng: họ tên, mã NV, chức danh. Không sửa. |
| 23  | Bộ phận chuyển đi / Vị trí hiện tại | Label | O   | N/A | Lấy từ bộ phận của bên giao và Tài sản, trường Vị trí hiện tại. Không sửa. |
| 24  | Tiêu đề thẻ Bên nhận | Label | O   | BÊN NHẬN TÀI SẢN | Cố định. |
| 25  | Đại diện bên nhận | Avatar + Label | O   | N/A | Lấy từ Yêu cầu điều chuyển, trường Người dự kiến tiếp nhận: họ tên, mã NV, chức danh. Không sửa. |
| 26  | Bộ phận tiếp nhận / Vị trí tiếp nhận | Label | O   | N/A | Lấy từ Yêu cầu điều chuyển, trường Vị trí nhận. Không sửa. |
| 27  | Khu vực tải tệp | Dropzone | I   | N/A | Không bắt buộc. Nhận PDF, DOCX, JPG, PNG, tối đa 20MB mỗi tệp; cho tải nhiều tệp. |
| 28  | Thẻ tệp đã đính kèm | Card | O   | N/A | Hiển thị tên tệp, dung lượng, nhãn "Đã tải lên" (xanh); kèm dòng "Đã đính kèm n tệp". |
| 29  | Nút xem tệp | Icon button | I   | N/A | Click xem trước tệp. |
| 30  | Nút xóa tệp | Icon button | I   | N/A | Click xóa tệp khỏi biên bản. |
| 31  | "+ Thêm tệp khác" | Link | I   | Thêm tệp khác | Click mở hộp chọn tệp, cùng quy tắc ô 27. |
| 32  | Checkbox xác nhận | Checkbox | I   | N/A | Bắt buộc tích mới được lập biên bản. Mặc định bỏ chọn. |
| 33  | Hủy bỏ | Button | I   | Hủy bỏ | Click thoát không lưu, về MH-04.03. |
| 34  | Lưu nháp | Button | I   | Lưu nháp | Lưu tạm, không kiểm tra bắt buộc. Yêu cầu giữ "Đã phê duyệt". |
| 35  | Lập biên bản | Button | I   | Lập biên bản | Kiểm tra ô 14, 15, 20, 32. Hợp lệ thì lưu biên bản, chuyển "Chờ xác nhận bàn giao". Lỗi thì báo đỏ. |

Bảng 127. Mô tả thành phần màn hình MH-04.04

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-04.11 | Chỉ yêu cầu "Đã phê duyệt" mới lập được biên bản (BR-04.05). |
| QT-04.12 | Biên bản phải có thông tin tài sản, bên giao, bên nhận, thời gian, địa điểm (BR-04.06). |
| QT-04.13 | Thông tin khối 02, 03 lấy từ Tài sản và yêu cầu, chỉ đọc. |
| QT-04.14 | Lập biên bản lỗi thì giữ yêu cầu "Đã phê duyệt" và báo lỗi (E3). |

Bảng 128. Quy tắc màn hình MH-04.04

**MH-04.05 – Ghi nhận xác nhận bàn giao và tiếp nhận**

Hình 60. MH-04.05 – Ghi nhận xác nhận bàn giao và tiếp nhận

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 7   | Breadcrumb | Link | I   | N/A | Click cấp đầu về MH-04.01, cấp giữa mở MH-04.03; cấp cuối là trang hiện tại. |
| 8   | Nút quay lại | Icon button | I   | N/A | Click về MH-04.01. |
| 9   | Tiêu đề trang | Label | O   | Ghi nhận xác nhận bàn giao và tiếp nhận | Cố định. |
| 10  | Tiêu đề khối tệp | Label | O   | Tệp đính kèm biên bản (Đã ký) | Cố định. |
| 11  | Nhãn "Đã ký xác nhận" | Badge | O   | N/A | Hiện khi biên bản có tệp đã ký. |
| 12  | Thông tin tệp biên bản | Card | O   | N/A | Lấy từ tệp đính kèm của biên bản (MH-04.04, ô 28): tên tệp, dung lượng, giờ tải lên. |
| 13  | Xem trước | Button | I   | Xem trước | Click xem tệp biên bản. |
| 14  | Tải xuống | Button | I   | Tải xuống | Click tải tệp về máy. |
| 15  | Mã biên bản và mã yêu cầu | Label | O   | N/A | Lấy từ Biên bản (Số biên bản) và Yêu cầu (Mã yêu cầu), dạng "BB-… (DC-…)". Số biên bản chữ đậm. |
| 16  | Nhãn trạng thái | Badge | O   | N/A | Lấy từ trường Trạng thái; màu tím khi "Chờ xác nhận bàn giao". |
| 17  | Thông tin tài sản | Label | O   | N/A | Ghép: Tên tài sản (số lượng) • Mã tài sản • Vị trí đi → Vị trí đến. |
| 18  | Ngày lập biên bản | Label | O   | NGÀY LẬP BIÊN BẢN | Lấy từ Biên bản, trường Ngày lập, định dạng dd/MM/yyyy HH:mm. |
| 19  | Banner lưu ý | Info banner | O   | Chỉ hoàn tất điều chuyển khi cả hai bên đã xác nhận | Nội dung cố định, nền xanh nhạt. |
| 20  | Tiêu đề thẻ Bên giao | Label | O   | N/A | Lấy từ Biên bản, trường Bộ phận chuyển đi, dạng "Bên giao (tên bộ phận)". |
| 21  | Nhãn ký bên giao | Badge | O   | N/A | Lấy từ trạng thái ký của bên giao trên biên bản. |
| 22  | Thông tin người giao | Avatar + Label | O   | N/A | Lấy từ Biên bản: họ tên, chức danh, mã NV của bên giao. Không sửa. |
| 23  | Checkbox "Đã xác nhận bàn giao trên biên bản" | Checkbox | I   | N/A | Bắt buộc tích mới hoàn tất. Mặc định bỏ chọn. |
| 24  | Ghi chú sai lệch bên giao | Textarea \[500\] | I   | N/A | Không bắt buộc. Văn bản tự do, tối đa 500 ký tự. Check trùng: không. |
| 25  | Tiêu đề thẻ Bên nhận | Label | O   | N/A | Lấy từ Biên bản, trường Bộ phận tiếp nhận, dạng "Bên nhận (tên bộ phận)". |
| 26  | Nhãn ký bên nhận | Badge | O   | N/A | Lấy từ trạng thái ký của bên nhận trên biên bản. |
| 27  | Thông tin người nhận | Avatar + Label | O   | N/A | Lấy từ Biên bản: họ tên, chức danh, mã NV của bên nhận. Không sửa. |
| 28  | Checkbox "Đã tiếp nhận và nghiệm thu tài sản" | Checkbox | I   | N/A | Bắt buộc tích mới hoàn tất. Mặc định bỏ chọn. |
| 29  | Ghi chú hiện trường bên nhận | Textarea \[500\] | I   | N/A | Không bắt buộc. Văn bản tự do, tối đa 500 ký tự. Check trùng: không. |
| 30  | Hoàn tất điều chuyển | Button | I   | Hoàn tất điều chuyển | Chỉ bật khi tích cả ô 23 và 28. Cập nhật vị trí, bộ phận, người quản lý mới của tài sản; lưu hồ sơ; chuyển "Hoàn tất". |

Bảng 129. Mô tả thành phần màn hình MH-04.05

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-04.15 | Chỉ hoàn tất khi có xác nhận của cả bên giao và bên nhận (BR-04.07, E4). |
| QT-04.16 | Chỉ cập nhật vị trí và người quản lý mới sau khi hai bên xác nhận đầy đủ (BR-04.08). |
| QT-04.17 | Chuyển "Hoàn tất" chỉ khi cập nhật tài sản và lưu hồ sơ thành công (BR-04.10, E5). |
| QT-04.18 | Có ghi chú sai lệch thì lưu vào biên bản, yêu cầu giữ "Chờ xác nhận bàn giao" cho HCNS xử lý (A5). |

Bảng 130. Quy tắc màn hình MH-04.05

| **Mã** | **Quy tắc** |
| --- | --- |
| HT-04.01 | Trạng thái yêu cầu đi theo thứ tự: Chờ tiếp nhận → Chờ bổ sung/Từ chối/Đã phê duyệt → Chờ xác nhận bàn giao → Hoàn tất. Màu trạng thái thống nhất ở mọi màn như MH-04.01 (ô 13). |
| HT-04.02 | Người đề nghị chỉ dùng MH-04.01, MH-04.02. HCNS dùng MH-04.03, MH-04.04, MH-04.05 (BR-04.03). Không đủ quyền thì ẩn nút hoặc chỉ cho xem. |
| HT-04.03 | Mỗi màn xử lý chỉ mở khi yêu cầu đúng trạng thái: MH-04.03 (Chờ tiếp nhận), MH-04.04 (Đã phê duyệt), MH-04.05 (Chờ xác nhận bàn giao). |
| HT-04.04 | Trường có dấu \* bắt buộc nhập. Ô lỗi hiển thị viền đỏ, nền hồng, thông báo đỏ ngay dưới ô; khi lỗi thì focus vào ô lỗi đầu tiên. |
| HT-04.05 | Ô tự điền từ dữ liệu có sẵn (nền xám) không cho sửa. Dữ liệu tài sản đối chiếu với sổ theo dõi (BR-04.02). |
| HT-04.06 | Textarea có bộ đếm "x/500" và không cho nhập quá độ dài tối đa. |
| HT-04.07 | Tệp đính kèm sai định dạng hoặc quá dung lượng thì báo lỗi, không tải lên. |
| HT-04.08 | Nút đang xử lý thì khóa để tránh bấm đúp. Lỗi hệ thống thì báo lỗi, không hiện thông báo thành công (E1) và giữ nguyên dữ liệu đã nhập. |
| HT-04.09 | Mọi thay đổi trạng thái đều ghi lại người thao tác, thời gian, lý do và gửi thông báo đến người liên quan (BR-04.09). |
| HT-04.10 | Định dạng hiển thị thống nhất: ngày giờ một kiểu duy nhất, nhân sự "Họ tên (Mã NV)", tiền "74.500.000 VNĐ". |

Bảng 131. Quy tắc giao diện dùng chung NV-04

### 3.3.18 CN-05.1 Lập đề nghị thanh lý tài sản

#### 3.3.18.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-05.1 |     |     |
| Mô tả UC | BPSDTS kiểm tra tình trạng tài sản, xác định tài sản hết hạn sử dụng hoặc chưa hết hạn nhưng hư hỏng, không thể sửa chữa/sửa chữa không hiệu quả; lập đề nghị thanh lý, ghi rõ thông tin tài sản, lý do và gửi NVQLTS. |     |     |
| Tác nhân chính | BPSDTS |     |     |
| Tiền điều kiện | Người dùng đã đăng nhập, có vai trò BPSDTS; bộ phận có tài sản đang ở trạng thái "Đang sử dụng". |     |     |
| Hậu điều kiện | Đề nghị thanh lý ở trạng thái "Chờ tiếp nhận"; NVQLTS nhận thông báo; các tài sản trong đề nghị bị khóa không thể đưa vào đề nghị khác. |     |     |
| Luồng chính | Bước | Hành động tác nhân | Phản hồi hệ thống |
|     | 1   | BPSDTS chọn tạo đề nghị thanh lý | Hiển thị màn hình MH-05.01 với số đề nghị tự sinh, bộ phận và ngày đề nghị. |
|     | 2   | Chọn lý do thanh lý và nhập mô tả chi tiết. | Kiểm tra dữ liệu nhập hợp lệ. |
|     | 3   | Nhấn "Thêm tài sản". | Hiển thị danh sách tài sản đang sử dụng của bộ phận, cho phép tìm kiếm theo mã/tên. |
|     | 4   | Chọn một hoặc nhiều tài sản và xác nhận. | Đưa tài sản vào danh mục đề nghị, hiển thị thông tin tài sản (mã, tên, loại, ngày đưa vào sử dụng, thời hạn). |
|     | 5   | Nhập tình trạng, lý do, nhấn lưu cho từng tài sản |     |
|     | 6   | Nhấn "Gửi đề nghị". | Kiểm tra BR-05.01–BR-05.03; chuyển trạng thái "Chờ tiếp nhận"; gửi thông báo cho NVQLTS; hiển thị thông báo thành công. |
| Luồng thay thế | 4a. Tài sản đã nằm trong đề nghị khác đang xử lý: hệ thống làm mờ, không cho chọn. 4b. BPSDTS xóa tài sản khỏi đề nghị: hệ thống cập nhật lại đề nghị |     |     |
| Luồng ngoại lệ | E1. Thiếu trường bắt buộc: hệ thống báo lỗi, không gửi. E2. Tệp sai định dạng hoặc vượt dung lượng: từ chối tệp và nêu lý do. E3. Mất kết nối khi gửi: giữ lại dữ liệu ở trạng thái nháp, thông báo thử lại. |     |     |
| Quy tắc nghiệp vụ | BR-05.01, BR-05.02, BR-05.03, BR-05.12 |     |     |
| Mã AD | AD-05.1 |     |     |
| Mã giao diện | MH-05.01 |     |     |

Bảng 132. Đặc tả UC-05.1 – Lập đề nghị thanh lý tài sản

#### 3.3.18.2 Sơ đồ hoạt động

Hình 61. AD-05.1 – Lập đề nghị thanh lý

#### 3.3.18.3 Giao diện

**MH-05.01 – Lập đề nghị thanh lý tài sản**

Hình 62. MH-05.01 – Lập đề nghị thanh lý tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Số đề nghị | Textbox \[20\] | O   | Tự sinh | Số đề nghị tự sinh theo quy tắc, không sửa được. |
| 2   | Ngày đề nghị | Date | O   | Ngày hiện tại | Định dạng dd/mm/yyyy, không sửa được. |
| 4   | Phòng / Bộ phận | Textbox \[100\] | O   | Bộ phận của người đăng nhập | Lấy tự động từ tài khoản đăng nhập, không sửa được (giống dòng "Phòng (Bộ phận)" trên mẫu). |
| 5   | Họ tên người đề nghị | Texbox \[100\] | O   | Tên người đăng nhập | Lấy tự động từ tài khoản đăng nhập (giống dòng "Họ tên người lập"). |
| 6   | Danh mục TSCĐ đề nghị thanh lý | Grid | I/O | N/A | Bắt buộc ít nhất 01 dòng. Các cột bao gồm:  <br>• STT (Tự động)  <br>• Tên, đặc điểm, ký hiệu TSCĐ (Hệ thống tự động lấy khi chọn TS)  <br>• ĐVT (Hệ thống tự động lấy)  <br>• Số lượng (Hệ thống tự động lấy)  <br>• Số hiệu TSCĐ (Hệ thống tự động lấy)  <br>• Năm sản xuất (Hệ thống tự động lấy)  <br>• Năm đưa vào sử dụng (Hệ thống tự động lấy)  <br>• Nguyên giá (Hệ thống tự động lấy)  <br>• Giá trị còn lại (Hệ thống tự động lấy)  <br>• Tình trạng hiện tại (Input, bắt buộc nhập)  <br>• Lý do (Input)  <br>• Nút Xóa |
| 77  | Nút Thêm tài sản | Button | I   | N/A | Mở popup chọn tài sản đang sử dụng của bộ phận (BR-05.01). |
| 88  | Lý do thanh lý (Chung) | Dropdown | I   | N/A | Bắt buộc. Chọn 1 trong 3 lý do theo BR-05.02. |
| 99  | Mô tả chi tiết lý do | Textarea \[500\] | I   | N/A | Bắt buộc. Ghi rõ thực trạng hư hỏng chung. |
| 10  | Tệp đính kèm | File upload | I   | N/A | Không bắt buộc; đính kèm ảnh chụp thực trạng (jpg, png, pdf; ≤ 5 tệp ≤ 10MB). |
| 11  | Nút Gửi đề nghị | Button | I   | N/A | Kiểm tra BR-05.01-BR-05.03; chuyển trạng thái "Chờ tiếp nhận” và báo NVQLTS. |

Bảng 133. Mô tả thành phần màn hình MH-05.01

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-05.01 | Các trường bắt buộc được đánh dấu (\*); khi vi phạm hiển thị viền đỏ và thông báo dưới trường. |
| QT-05.02 | Sau khi gửi, toàn bộ màn hình chuyển sang chế độ chỉ xem. |
| QT-05.03 | Chỉ hiển thị tài sản thuộc bộ phận của người đăng nhập. |

Bảng 134. Quy tắc màn hình MH-05.01

### 3.3.19 CN-05.2 Kiểm tra và thẩm định tài sản

#### 3.3.19.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-05.2 |     |     |
| Mô tả UC | NVQLTS tiếp nhận đề nghị, kiểm tra tình trạng thực tế, ghi nhận hiện trạng, mức độ hư hỏng và khả năng tiếp tục sử dụng; lập biên bản kiểm tra hiện trạng làm căn cứ đề xuất thanh lý; xử lý tài sản chưa đủ điều kiện. |     |     |
| Tác nhân chính | NVQLTS (chính); BPSDTS (nhận thông báo, phản hồi) |     |     |
| Tiền điều kiện | Có đề nghị thanh lý ở trạng thái "Chờ tiếp nhận"; người dùng đã đăng nhập với vai trò NVQLTS. |     |     |
| Hậu điều kiện | Biên bản kiểm tra hiện trạng được lưu; mỗi tài sản có kết luận "Đủ"/"Chưa đủ điều kiện"; tài sản chưa đủ điều kiện có hướng xử lý. |     |     |
| Luồng chính | Bước | Hành động tác nhân | Phản hồi hệ thống |
|     | 1   | NVQLTS mở danh sách đề nghị chờ xử lý và chọn một đề nghị. | Hiển thị chi tiết đề nghị và danh mục tài sản. |
|     | 2   | Nhấn "Tiếp nhận" và nhập ngày giờ kiểm tra dự kiến, | Chuyển trạng thái đề nghị "Đang thẩm định"; gửi thông báo lịch làm việc cho BPSDTS. |
|     | 3   | Kiểm tra thực tế tại BPSDTS; nhập hiện trạng, mức độ hư hỏng, khả năng tiếp tục sử dụng cho từng tài sản; đính kèm ảnh. Đại diện BPSDTS xác nhận kết quả kiểm tra ngay tại nơi kiểm tra | Việc kiểm tra thực tế không được thực hiện tự động bởi hệ thống. |
|     | 4   | Cập nhật kết quả thẩm định cho từng tài sản (đủ/chưa đủ điều kiện thanh lý). Và tải lên biên bản đã được xác nhận |     |
|     | 5   | Nhấn "Lưu biên bản". | Sinh số biên bản, lưu biên bản kiểm tra hiện trạng; cho phép in/xuất. |
|     | 6   | Nhấn "Chuyển lập tờ trình" với tài sản đủ điều kiện thanh lý. | Đánh dấu tài sản "Chờ lập tờ trình" và chuyển sang UC-05.3. |
| Luồng thay thế | 4.1. Chưa đủ điều kiện – tiếp tục sử dụng: chọn "Phản hồi tiếp tục sử dụng", nhập nội dung; hệ thống gửi phản hồi cho BPSDTS, tài sản giữ trạng thái "Đang sử dụng". 4.2. Chưa đủ điều kiện – điều chuyển: chọn "Điều chuyển"; hệ thống mở quy trình Điều chuyển tài sản với dữ liệu tài sản. 4.3. Không có đơn vị nhận điều chuyển và BPSDTS yêu cầu trả tài sản: NVQLTS lập kế hoạch thu hồi và biên bản bàn giao thu hồi; tài sản chuyển quy trình thu hồi tài sản |     |     |
| Luồng ngoại lệ | E2. Tài sản thực tế không khớp dữ liệu hệ thống: ghi nhận chênh lệch vào biên bản, báo cáo để xử lý riêng. E3. Lỗi lưu biên bản: giữ dữ liệu đã nhập, thông báo thử lại. |     |     |
| Quy tắc nghiệp vụ | BR-05.04, BR-05.05, BR-05.06, BR-05.12 |     |     |
| Mã AD | AD-05.2 |     |     |
| Mã giao diện | MH-05.02 |     |     |

Bảng 135. Đặc tả UC-05.2 – Kiểm tra và thẩm định tài sản

#### 3.3.19.2 Sơ đồ hoạt động

Hình 63. AD-05.2 – Kiểm tra và thẩm định tài sản

#### 3.3.19.3 Giao diện

**MH-05.02 – Kiểm tra và thẩm định tài sản**

Hình 64. MH-05.02 – Kiểm tra và thẩm định tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Danh sách đề nghị xử lý | Grid/Dropdown | I   | Trạng thái = "Chờ tiếp nhận " | NVQLTS chọn Đề nghị cần xử lý. |
| 2   | Thông tin Đề nghị | Textbox (Read-only) | O   | Theo Đề nghị đã chọn | Hiển thị: Số ĐN, Ngày lập, Bộ phận, Người lập. |
| 3   | Thời gian bắt đầu | DateTime | I   | Thời điểm hiện tại | Bắt buộc. Ghi nhận thời điểm bắt đầu kiểm tra. |
| 4   | Địa điểm | Textbox \[200\] | I   | N/A | Bắt buộc. Nhập địa điểm kiểm tra thực tế. |
| 5   | Thành phần tham gia | Grid | I/O | N/A | Bắt buộc. Gồm: STT, Họ và tên, Chức vụ, Đại diện đơn vị. |
| 6   | Danh mục tài sản kiểm tra | Grid | I/O | Load từ Đề nghị | Bắt buộc. Cột: Mã TS, Tên TS, Năm sử dụng, Thông số kỹ thuật, Nguyên giá, Tình trạng (nhập), Hướng xử lý (Dropdown). |
| 7   | Ghi nhận chung | Textarea \[1000\] | I   | N/A | Nhận xét chung của đoàn kiểm tra. |
| 8   | Đại diện BPSDTS xác nhận | Textbox \[100\] | I   | N/A | Bắt buộc. Họ tên người xác nhận kết quả tại chỗ. |
| 9   | Tệp biên bản đã xác nhận | File upload | I   | N/A | Bắt buộc. Tải lên bản scan/PDF biên bản đã có chữ ký của BPSDTS và các thành phần tham gia (BR-05.05). |
| 10  | Ảnh hiện trạng | File upload | I   | N/A | Không bắt buộc; đính kèm ảnh chụp thực trạng (jpg, png, pdf ≤ 5 tệp ≤ 10MB). |
| 11  | Nút Tiếp nhận & Báo lịch | Button | I   | N/A | Chuyển trạng thái Đề nghị sang "Đang thẩm định" và gửi thông báo lịch. |
| 12  | Nút Tải/Xuất biên bản | Button | O   | N/A | Tải xuống file Word/PDF mẫu biên bản để in, ký và scan lại. (Hoặc dùng để tải file biên bản đã lưu nếu đã lưu trước đó). |
| 13  | Nút Lưu biên bản | Button | I   | N/A | Lưu dữ liệu, sinh số Biên bản tự động. Chỉ bật khi đã nhập đủ trường bắt buộc và có Tệp biên bản đã xác nhận. |
| 14  | Nút Thực hiện hướng xử lý | Button | I   | N/A | Chỉ bật khi có TS chọn hướng xử lý khác "Đủ điều kiện". Thực thi phản hồi/điều chuyển/thu hồi. |
| 15  | Nút Chuyển lập tờ trình | Button | I   | N/A | Chỉ bật khi Biên bản đã lưu và có ít nhất 1 tài sản "Đủ điều kiện". |

Bảng 136. Mô tả thành phần màn hình MH-05.02

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-05.04 | Mỗi tài sản phải có kết luận trước khi lưu biên bản (BR-05.04). |
| QT-05.05 | Nếu thời hạn sử dụng đã hết, hệ thống gợi ý kết luận "Đủ điều kiện"; NVQLTS có thể đổi nhưng phải nhập lý do. |
| QT-05.06 | Biên bản đã lưu chỉ cho phép in/xuất và xem. |

Bảng 137. Quy tắc màn hình MH-05.02

### 3.3.20 CN-05.3 Lập tờ trình thanh lý tài sản

#### 3.3.20.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-05.3 |     |     |
| Mô tả UC | NVQLTS tổng hợp thông tin tài sản và kết quả thẩm định, lập tờ trình đề nghị thanh lý và gửi Giám đốc xem xét. |     |     |
| Tác nhân chính | NVQLTS (chính); Giám đốc (nhận thông báo) |     |     |
| Tiền điều kiện | Có tài sản "Đủ điều kiện thanh lý" đã có biên bản kiểm tra hiện trạng; hoặc có tờ trình bị trả "Trả bổ sung". |     |     |
| Hậu điều kiện | Tờ trình ở trạng thái "Chờ phê duyệt"; Giám đốc nhận thông báo. |     |     |
| Luồng chính | Bước | Hành động tác nhân | Phản hồi hệ thống |
|     | 1   | NVQLTS chọn menu Thanh lý tài sản > Lập tờ trình. | Hiển thị MH-05.03 với số tờ trình tự sinh. |
|     | 2   | Chọn đề nghị thanh lý liên quan. | Hiển thị danh sách tài sản đủ điều kiện kèm nguyên giá, hao mòn, giá trị còn lại, hiện trạng. |
|     | 3   | Chọn/bỏ chọn tài sản đưa vào tờ trình. | Tự tính lại tổng nguyên giá và tổng giá trị còn lại. |
|     | 4   | Nhập nội dung tờ trình | Kiểm tra bắt buộc; tự đính kèm đề nghị và biên bản kiểm tra. |
|     | 6   | Nhấn "Gửi Giám đốc". | Kiểm tra BR-05.07; chuyển trạng thái tờ trình thành "Chờ phê duyệt"; gửi thông báo cho Giám đốc. |
| Luồng thay thế | A1. Tờ trình bị trả về (Trạng thái "Bổ sung, sửa đổi"): NVQLTS mở lại tờ trình, xem lý do của Giám đốc, bổ sung/sửa đổi rồi gửi lại |     |     |
| Luồng ngoại lệ | E1. Không có tài sản đủ điều kiện để chọn: hệ thống thông báo, không cho tạo tờ trình. E2. Tài sản đã nằm trong tờ trình khác đang xử lý: hệ thống từ chối và nêu số tờ trình đó. |     |     |
| Quy tắc nghiệp vụ | BR-05.07, BR-05.09, BR-05.12 |     |     |
| Mã AD | AD-05.3 |     |     |
| Mã giao diện | MH-05.03 |     |     |

Bảng 138. Đặc tả UC-05.3 – Lập tờ trình thanh lý tài sản

Sơ đồ hoạt động dùng chung: AD-05.3, trình bày tại UC-05.4.

#### 3.3.20.3 Giao diện

**MH-05.03 – Lập tờ trình đề nghị thanh lý**

Hình 65. MH-05.03 – Lập tờ trình đề nghị thanh lý

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Số tờ trình | Textbox \[20\] | O   | Tự sinh | Số tờ trình tự sinh theo quy tắc, không sửa được. |
| 2   | Ngày lập tờ trình | Date | O   | Ngày hiện tại | Định dạng dd/mm/yyyy, không sửa được. |
| 3   | Kính gửi | Textbox \[100\] | I   | Ban Giám đốc | Bắt buộc. Mặc định là "Ban Giám đốc". |
| 4   | Phòng / Bộ phận | Textbox \[100\] | O   | Bộ phận của người đăng nhập | Lấy tự động từ tài khoản NVQLTS, không sửa được. |
| 5   | Người lập biểu | Textbox \[100\] | O   | Tên người đăng nhập | Lấy tự động từ tài khoản NVQLTS (hiển thị ở phần chữ ký cuối tờ trình). |
| 6   | Căn cứ thanh lý | Textarea \[1000\] | I   | Mẫu văn bản | Bắt buộc. Hệ thống tự động sinh mẫu câu (VD: Căn cứ chức năng, nhiệm vụ...; Căn cứ tình trạng tài sản đã hư hỏng...) nhưng cho phép NVQLTS sửa lại nếu cần. |
| 7   | Đề nghị thanh lý liên quan | Dropdown | I   | N/A | Bắt buộc. Chỉ liệt kê các Đề nghị có tài sản "Đủ điều kiện thanh lý" và chưa nằm trong tờ trình khác. Khi chọn, hệ thống tự load tài sản ra Grid bên dưới. |
| 8   | Danh mục tài sản đề xuất thanh lý | Grid | I/O | Load từ Đề nghị | Bắt buộc ít nhất 01 dòng. Cột: Chọn (Checkbox), STT, Tên, đặc điểm, ký hiệu TSCĐ, ĐVT, Số lượng, Số hiệu TSCĐ, Năm sản xuất, Năm đưa vào sử dụng, Nguyên giá (VNĐ), Giá trị còn lại (VNĐ). (Các cột dữ liệu lấy tự động từ DB, NVQLTS chỉ tick chọn/bỏ chọn). |
| 9   | Tổng nguyên giá | Textbox \[8\] | O   | 0   | Tự động tính tổng từ các dòng được tick chọn ở cột số 8. Định dạng có dấu phân cách hàng nghìn. |
| 10  | Tổng giá trị còn lại | Textbox \[18\] | O   | 0   | Tự động tính tổng từ các dòng được tick chọn ở cột số 8. Định dạng có dấu phân cách hàng nghìn. |

Bảng 139. Mô tả thành phần màn hình MH-05.03

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-05.07 | Tổng nguyên giá và giá trị còn lại cập nhật ngay khi chọn/bỏ chọn tài sản. |
| QT-05.08 | Tờ trình bị trả về được mở lại ở trạng thái "Trả bổ sung" và hiển thị lý do của Giám đốc ở đầu màn hình. |

Bảng 140. Quy tắc màn hình MH-05.03

### 3.3.21 CN-05.4 Phê duyệt thanh lý tài sản

#### 3.3.21.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-05.4 |     |     |
| Mô tả UC | Giám đốc xem xét tờ trình đề nghị thanh lý và quyết định phê duyệt hoặc không phê duyệt; không phê duyệt thì trả hồ sơ để bổ sung, sửa đổi. |     |     |
| Tác nhân chính | Giám đốc |     |     |
| Tiền điều kiện | Có tờ trình ở trạng thái "Chờ phê duyệt"; Giám đốc đã đăng nhập. |     |     |
| Hậu điều kiện | Phê duyệt: có quyết định thanh lý, tài sản "Được duyệt thanh lý". Không phê duyệt: tờ trình "Trả bổ sung". |     |     |
| Luồng chính | Bước | Hành động tác nhân | Phản hồi hệ thống |
|     | 1   | Giám đốc mở danh sách tờ trình chờ phê duyệt và chọn một tờ trình. | Hiển thị thông tin tờ trình, danh mục tài sản, hồ sơ kèm theo. |
|     | 2   | Giám đốc xem xét hồ sơ, tờ trình và danh mục tài sản. | Hệ thống hiển thị chi tiết hồ sơ đính kèm. |
|     | 3   | Giám đốc chọn kết quả "Phê duyệt". | Hệ thống hiển thị các trường nhập Số quyết định, Ngày quyết định, Ý kiến và Tệp quyết định. |
|     | 4   | Giám đốc nhập Số quyết định, Ngày quyết định, Ý kiến (nếu có) và tải lên Tệp quyết định đã ký (bản scan/PDF). | Hệ thống kiểm tra tính hợp lệ của dữ liệu (không trùng số QĐ, ngày QĐ hợp lệ, có tệp đính kèm). |
|     | 5   | Nhấn "Xác nhận". | Lưu quyết định thanh lý; chuyển tài sản "Được duyệt thanh lý"; gửi thông báo cho NVQLTS. |
| Luồng thay thế | A1. Chọn "Không phê duyệt": nhập lý do; hệ thống chuyển tờ trình sang "Trả bổ sung" và thông báo NVQLTS bổ sung, sửa đổi (quay lại UC-05.3). |     |     |
| Luồng ngoại lệ | E1. Thiếu số/ngày/tệp quyết định (khi phê duyệt) hoặc thiếu lý do (khi không phê duyệt): báo lỗi, không lưu. |     |     |
| Quy tắc nghiệp vụ | BR-05.08, BR-05.12 |     |     |
| Mã AD | AD-05.3 |     |     |
| Mã giao diện | MH-05.04 |     |     |

Bảng 141. Đặc tả UC-05.4 – Phê duyệt thanh lý tài sản

#### 3.3.21.2 Sơ đồ hoạt động

Hình 66. AD-05.3 – Lập tờ trình và phê duyệt thanh lý

#### 3.3.21.3 Giao diện

**MH-05.04 – Phê duyệt thanh lý tài sản**

Hình 67. MH-05.04 – Phê duyệt thanh lý tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Danh sách tờ trình chờ phê duyệt | Grid | O   | Trạng thái = Chờ phê duyệt | Cột: Số tờ trình, Ngày lập, Người lập, Số lượng TS, Tổng giá trị còn lại. Lấy từ TO_TRINH. |
| 2   | Thông tin tờ trình | Textbox/Label | O   | N/A | Hiển thị nội dung tờ trình, hình thức thanh lý, người lập; không sửa được. |
| 3   | Danh mục tài sản đề nghị | Grid | O   | N/A | Cột: Mã TS, Tên TS, Nguyên giá, Giá trị còn lại, Hiện trạng. Lấy từ CT_TO_TRINH. |
| 4   | Hồ sơ kèm theo | Link | O   | N/A | Liên kết xem/tải đề nghị, biên bản kiểm tra hiện trạng. |
| 5   | Kết quả xem xét | Radio | I   | N/A | Bắt buộc: Phê duyệt / Không phê duyệt. |
| 6   | Số quyết định | Textbox \[30\] | I   | N/A | Bắt buộc nếu Phê duyệt; không trùng với quyết định đã có. |
| 7   | Ngày quyết định | Date | I   | Ngày hiện tại | Bắt buộc nếu Phê duyệt; không lớn hơn ngày hiện tại. |
| 8   | Ý kiến / Lý do không phê duyệt | Textarea \[500\] | I   | N/A | Bắt buộc nếu Không phê duyệt; tối đa 500 ký tự. |
| 9   | Tệp quyết định | File upload | I   | N/A | pdf, ≤ 10 MB; bắt buộc nếu Phê duyệt. |
| 10  | Nút Xác nhận | Button | I   | N/A | Lưu kết quả; phê duyệt thì chuyển TS sang "Được duyệt thanh lý", không phê duyệt thì trả hồ sơ cho NVQLTS (BR-05.08). |
| 11  | Nút Hủy | Button | I   | N/A | Đóng màn hình, không lưu. |

Bảng 142. Mô tả thành phần màn hình MH-05.04

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-05.09 | Khi chọn "Phê duyệt" thì ẩn trường Lý do; khi chọn "Không phê duyệt" thì ẩn các trường Số quyết định, Ngày quyết định, Tệp quyết định. |
| QT-05.10 | Tờ trình đã có kết quả không cho xem xét lại. |

Bảng 143. Quy tắc màn hình MH-05.04

### 3.3.22 CN-05.5 Thực hiện thanh lý tài sản

#### 3.3.22.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-05.5 |     |     |
| Mô tả UC | NVQLTS ghi nhận thông tin Hợp đồng mua bán và Biên bản bàn giao sau khi tổ chức thanh lý thực tế ngoài hệ thống. Hệ thống lưu trữ chứng từ và chuyển trạng thái tài sản sang "Đã thanh lý". |     |     |
| Tác nhân chính | NVQLTS |     |     |
| Tiền điều kiện | Có Quyết định đã phê duyệt; Tài sản ở trạng thái "Được duyệt thanh lý". |     |     |
| Hậu điều kiện | Thông tin Hợp đồng và Biên bản bàn giao được lưu. Tài sản chuyển sang trạng thái "Đã thanh lý". Hồ sơ thanh lý tổng vẫn giữ trạng thái "Đang thực hiện" |     |     |
| Luồng chính | Bước | Hành động tác nhân | Phản hồi hệ thống |
|     | 1   | NVQLTS chọn quyết định đã phê duyệt. | Hiển thị danh mục tài sản thanh lý theo quyết định. |
|     | 2   | NVQLTS nhập thông tin Hợp đồng và biên bản bản giao , đính kèm tệp hợp đồng biên bản bản giao. | Kiểm tra tính hợp lệ của dữ liệu. |
|     | 3   | NVQLTS nhấn "Hoàn tất thanh lý". | , biên bản bàn giao, chuyển tài sản sang "Đã thanh lý” |
| Luồng thay thế | A1. Chưa hoàn tất bán hoặc bàn giao: lưu thông tin đang xử lý, không đánh dấu đã bàn giao. A2. Bàn giao nhiều đợt: ghi nhận riêng từng đợt và chỉ xác nhận các tài sản đã bàn giao có chứng từ. |     |     |
| Luồng ngoại lệ | E1. Chưa có quyết định phê duyệt: hệ thống không cho ghi nhận thực hiện thanh lý. E2. Thiếu hợp đồng/biên bản hoặc dữ liệu bắt buộc: hệ thống báo thiếu và không cho xác nhận hoàn tất bàn giao. |     |     |
| Mã AD | AD-05.4 |     |     |
| Mã giao diện | MH-05.05 |     |     |

Bảng 144. Đặc tả UC-05.5 – Thực hiện thanh lý tài sản

_Sơ đồ hoạt động dùng chung: AD-05.4, trình bày tại UC-05.6._

#### 3.3.22.3 Giao diện

**MH-05.05 – Thực hiện thanh lý tài sản**

Hình 68. MH-05.05 – Thực hiện thanh lý tài sản

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Chọn Quyết định thanh lý | Dropdown | I   | N/A | Chỉ hiển thị các QĐ đã phê duyệt nhưng chưa hoàn tất thanh lý. |
| 2   | Danh mục tài sản thanh lý | Grid | I/O | N/A | Cột: Mã TS, Tên TS, Giá trị còn lại, Giá bán (Input, số ≥ 0), Trạng thái. |
| 3   | Số hợp đồng | Textbox \[30\] | I   | N/A | Bắt buộc. Không trùng số HĐ. |
| 4   | Ngày ký hợp đồng | Date | I   | N/A | Bắt buộc. Không nhỏ hơn ngày ban hành Quyết định. |
| 5   | Bên mua (Tên tổ chức/cá nhân) | Textbox \[200\] | I   | N/A | Bắt buộc. |
| 6   | Tổng giá trị hợp đồng | Number \[18\] | O   | 0   | Tự động tính bằng tổng cột "Giá bán" của tất cả tài sản. Định dạng VNĐ. |
| 7   | Tệp Hợp đồng mua bán | File upload | I   | N/A | Bắt buộc. Bản scan Hợp đồng đã ký 2 bên (PDF ≤ 10MB). |
| 8   | Ngày bàn giao thực tế | Date | I   | N/A | Bắt buộc. Không nhỏ hơn ngày ký HĐ. |
| 9   | Người nhận (Đại diện bên mua) | Textbox \[100\] | I   | N/A | Bắt buộc. |
| 10  | Tệp Biên bản bàn giao | File upload | I   | N/A | Bắt buộc. Bản scan Biên bản có chữ ký 2 bên (PDF ≤ 10MB). |
| 11  | Nút Hoàn tất thanh lý | Button | I   | N/A | Lưu thông tin và biên bản bàn giao (Trạng thái ts “Đã thanh lý"). |

Bảng 145. Mô tả thành phần màn hình MH-05.05

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-05.11 | Màn hình chỉ ghi nhận kết quả bán thủ công, không phát hành hóa đơn hay thu tiền. |
| QT-05.12 | Chỉ cho phép”Hoàn tất thanh lý " khi đã lưu hợp đồng và đính kèm biên bản bàn giao. |

Bảng 146. Quy tắc màn hình MH-05.05

### 3.3.23 CN-05.6 Cập nhật dữ liệu và lưu hồ sơ thanh lý

#### 3.3.23.1 Đặc tả use case

| **Thuộc tính** | **Nội dung** |     |     |
| --- | --- |     |     | --- | --- |
| Mã UC | UC-05.6 |     |     |
| Mô tả UC | NVQLTS tập hợp, kiểm tra và lưu hồ sơ thanh lý theo quy định. |     |     |
| Tác nhân chính | NVQLTS |     |     |
| Tiền điều kiện | Tất cả tài sản ở trạng thái "Đã thanh lý"; có quyết định, hợp đồng, biên bản bàn giao hàng thanh lý. Hồ sơ đang ở trạng thái 'Đang thực hiện'." |     |     |
| Hậu điều kiện | hồ sơ thanh lý ở trạng thái "Hoàn tất" |     |     |
| Luồng chính | Bước | Hành động tác nhân | Phản hồi hệ thống |
|     | 1   | NVQLTS chọn hồ sơ thanh lý đã bàn giao. | Hiển thị MH-05.06: thông tin quyết định, hợp đồng và danh sách tài sản (nguyên giá, hao mòn, giá trị còn lại, giá bán). |
|     | 2   | Kiểm tra danh mục thành phần hồ sơ thanh lý. | Hiển thị trạng thái Đủ/Thiếu từng thành phần (BR-05.11). |
|     | 3   | Nhấn "Đóng và lưu hồ sơ". | Chuyển hồ sơ "Hoàn tất", lưu trữ theo quy định. |
| Luồng thay thế | N/A |     |     |
| Luồng ngoại lệ | N/A |     |     |
| Quy tắc nghiệp vụ | BR-05.10, BR-05.11, BR-05.12 |     |     |
| Mã AD | AD-05.4 |     |     |
| Mã giao diện | MH-05.06 |     |     |

Bảng 147. Đặc tả UC-05.6 – Cập nhật dữ liệu và lưu hồ sơ thanh lý

#### 3.3.23.2 Sơ đồ hoạt động

Hình 69. AD-05.4 – Thực hiện thanh lý và lưu hồ sơ

#### 3.3.23.3 Giao diện

**MH-05.06 – Cập nhật tài sản thanh lý và lưu hồ sơ**

Hình 70. MH-05.06 – Cập nhật tài sản thanh lý và lưu hồ sơ

| **STT** | **Tên** | **Kiểu đối tượng \[Độ dài\]** | **I/O** | **Giá trị khởi tạo** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1   | Số quyết định / Số hợp đồng | Textbox \[30\] | O   | Theo hồ sơ đã chọn | Chọn hồ sơ đã bàn giao; không sửa được. |
| 2   | Danh sách tài sản thanh lý | Grid | O   | N/A | Cột: Mã TS, Tên TS, Nguyên giá, Hao mòn lũy kế, Giá trị còn lại, Giá bán, Trạng thái. Lấy từ TAI_SAN và CT_THANH_LY. |
| 4   | Ghi chú | Textarea \[500\] | I   | N/A | Không bắt buộc; tối đa 500 ký tự. |
| 5   | Danh mục thành phần hồ sơ | Grid | O   | N/A | Liệt kê 7 thành phần hồ sơ (BR-05.11) kèm trạng thái Đủ/Thiếu và liên kết xem. |
| 6   | Nút Đóng và lưu hồ sơ | Button | I   | N/A | Chỉ bật khi tài sản đã cập nhật ở trạng thái “Đã thanh lý” hồ sơ đủ; chuyển hồ sơ sang "Hoàn tất" |

Bảng 148. Mô tả thành phần màn hình MH-05.06

| **Mã** | **Quy tắc** |
| --- | --- |
| QT-05.13 | Chỉ NVQLTS được đóng hồ sơ; các tác nhân khác chỉ xem. |
| QT-05.14 | Không cho đóng hồ sơ khi còn tài sản chưa ở trạng thái 'Đã thanh lý' hoặc hồ sơ còn thiếu thành phần. |

Bảng 149. Quy tắc màn hình MH-05.06

# 4\. Yêu cầu về thông tin dữ liệu

## 4.1 Yêu cầu về đối tượng cần quản lý

| **STT** | **Tên đối tượng quản lý** | **Thông tin mô tả** | **Nhu cầu xây dựng** |     |     | **Số lượng lớp, bảng dữ liệu** | **Kiểu dữ liệu** |     | **Số lượng trường thông tin** | **Số lượng quan hệ** | **Ghi chú** |
| --- | --- | --- | --- |     |     | --- | --- |     | --- | --- | --- | --- | --- | --- |
| **Kế thừa hoàn toàn** | **Kế thừa một phần** | **Xây dựng mới** | **Không gian** | **Phi không gian** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **A. Đối tượng dùng chung giữa các phân hệ** |     |     |     |     |     |     |     |     |     |     |     |
| 1   | **Tài sản** | Hồ sơ tài sản: mã (sinh khi lưu), tên, loại, số seri, nguồn gốc, ngày nhập, giá trị/nguyên giá, tình trạng, trạng thái (Chưa cấp phát / Sẵn sàng cấp / Đang sử dụng / Đã thu hồi / Mất / Đã thanh lý), vị trí, bộ phận sử dụng, người sử dụng/quản lý, người ghi nhận, chứng từ, thông tin bổ sung. |     |     | X   | 1   |     | X   | 20  | 7   | Tạo mới ở phân hệ Ghi nhận tài sản mới (20 trường); các phân hệ Cấp phát, Điều chuyển, Thu hồi, Thanh lý dùng chung và bổ sung thuộc tính/trạng thái (kế thừa một phần). Số quan hệ lấy mức cao nhất (Thanh lý); cần rà soát lại tổng số trường khi gộp thuộc tính của các phân hệ. |
| 2   | **Loại tài sản** | Danh mục loại: mã, tên, trạng thái; dùng chọn loại khi thêm tài sản, cấp phát và làm căn cứ sinh mã. | X   |     |     | 1   |     | X   | 4   | 2   | Dùng chung Ghi nhận, Cấp phát, Thu hồi. Phải có trước khi thêm mới tài sản. |
| 3   | **Nhà cung cấp** | Tên, liên hệ, trạng thái danh mục. |     | X   |     | 1   |     | X   | 4   | 1   |     |
| 4   | **Nhân viên** | \- Mã định danh (ID)<br><br>\- Mã nhân viên<br><br>\- Họ và tên<br><br>\- Phòng ban<br><br>\- Chức danh / chức vụ<br><br>\- Ảnh đại diện<br><br>\- Trạng thái làm việc<br><br>\- Ngày bắt đầu làm việc<br><br>(Email: dùng cho thông báo thu hồi) | X   |     |     | 1   |     | X   | 8   | 6   | Danh mục nhân sự dùng chung, có thể đồng bộ từ hệ thống nhân sự. Phân hệ Điều chuyển (Nhân sự, 6 trường) và Cấp phát khai là xây mới, nhưng Ghi nhận, Thu hồi xác định là kế thừa → gộp thành kế thừa hoàn toàn. |
| 5   | **Phòng ban / Đơn vị** | \- Mã định danh (ID)<br><br>\- Mã phòng ban / đơn vị<br><br>\- Tên phòng ban / đơn vị<br><br>\- Mã đơn vị cha, trưởng đơn vị (nếu có)<br><br>\- Trạng thái hoạt động | X   |     |     | 1   |     | X   | 4   | 5   | Danh mục dùng chung (Cấp phát: Phòng ban; Thanh lý: Đơn vị/Bộ phận; Thu hồi: Phòng ban). |
| 6   | **Chức danh / Chức vụ** | \- Mã định danh (ID)<br><br>\- Mã chức danh<br><br>\- Tên chức danh<br><br>\- Trạng thái hoạt động |     |     | X   | 1   |     | X   | 4   | 3   | Danh mục dùng chung (phân hệ Cấp phát). |
| 7   | **Tài khoản người dùng** | \- Mã định danh (ID)<br><br>\- Tên đăng nhập<br><br>\- Mật khẩu (mã hóa)<br><br>\- Nhân viên<br><br>\- Vai trò<br><br>\- Trạng thái tài khoản<br><br>\- Số lần nhập sai liên tiếp<br><br>\- Thời điểm khóa đến | X   |     |     | 1   |     | X   | 8   | 4   | Dùng chung toàn hệ thống (kiểm tra quyền, xác định người thao tác, xác nhận bằng mật khẩu). Thanh lý gọi là “Người dùng”. |
| 8   | **Vai trò và phân quyền** | **Bảng Vai trò:**<br><br>\- Mã định danh (ID)<br><br>\- Mã vai trò<br><br>\- Tên vai trò<br><br>\- Mô tả<br><br>**Bảng Phân quyền:**<br><br>\- Mã định danh (ID)<br><br>\- Vai trò<br><br>\- Chức năng<br><br>\- Quyền thao tác | X   |     |     | 2   |     | X   | 8   | 2   | Tách 2 bảng: Vai trò và Phân quyền theo chức năng. Dùng chung cơ chế phân quyền của hệ thống. |
| 9   | **Chứng từ / Tệp đính kèm** | Số chứng từ, tên tệp, loại tệp, dung lượng, đường dẫn, người tải, thời điểm tải, đối tượng hồ sơ liên quan. |     |     | X   | 1   |     | X   | 7   | 2   | Gộp “Chứng từ / tệp đính kèm” (Ghi nhận, 7 trường) và “Tệp đính kèm” (Điều chuyển, 6 trường). Cần kiểm tra định dạng/dung lượng (quy định chưa được xác nhận). |
| **B. Phân hệ Cấp phát tài sản** |     |     |     |     |     |     |     |     |     |     |     |
| 10  | **Phiếu yêu cầu cấp phát tài sản** | **Bảng Phiếu yêu cầu:**<br><br>\- Mã phiếu<br><br>\- Loại yêu cầu (cho cá nhân / cho nhân viên mới)<br><br>\- Người lập<br><br>\- Phòng ban người lập (lưu tại thời điểm tạo)<br><br>\- Người nhận tài sản<br><br>\- Hình thức cấp phát<br><br>\- Gói định mức áp dụng<br><br>\- Lý do yêu cầu<br><br>\- Ngày cần sử dụng<br><br>\- Trạng thái hiện tại<br><br>\- Thời điểm tạo<br><br>\- Thời điểm cập nhật<br><br>\- Mã định danh (ID)<br><br>**Bảng Chi tiết:**<br><br>\- Mã định danh (ID)<br><br>\- Phiếu yêu cầu<br><br>\- Loại tài sản<br><br>\- Mô tả tài sản<br><br>\- Số lượng yêu cầu<br><br>\- Ghi chú<br><br>\- Trạng thái khóa dòng |     |     | X   | 2   |     | X   | 20  | 6   | Tách 2 bảng: Phiếu yêu cầu (thông tin chung) và Chi tiết phiếu yêu cầu (từng dòng loại tài sản). |
| 11  | **Quyết định phê duyệt** | \- Mã định danh (ID)<br><br>\- Phiếu yêu cầu<br><br>\- Người phê duyệt<br><br>\- Kết quả (Đã duyệt / Từ chối)<br><br>\- Lý do từ chối<br><br>\- Tình trạng xử lý<br><br>\- Thời điểm phê duyệt / từ chối |     |     | X   | 1   |     | X   | 8   | 2   | Dữ liệu cho popup “Xem lý do từ chối” và thời điểm từ chối. |
| 12  | **Biên bản bàn giao tài sản (cấp phát)** | **Bảng Biên bản bàn giao:**<br><br>\- Số biên bản<br><br>\- Phiếu yêu cầu<br><br>\- Bên giao<br><br>\- Bên nhận<br><br>\- Ngày lập<br><br>\- Ngày bàn giao<br><br>\- Tổng giá trị<br><br>\- Trạng thái<br><br>\- Mã hash nội dung<br><br>\- Thời điểm tạo<br><br>\- Thời điểm cập nhật<br><br>\- Mã định danh (ID)<br><br>**Bảng Chi tiết:**<br><br>\- Mã định danh (ID)<br><br>\- Biên bản bàn giao<br><br>\- Tài sản<br><br>\- Số lượng<br><br>\- Đơn giá<br><br>\- Thành tiền<br><br>\- Ghi chú / phụ kiện đi kèm |     |     | X   | 2   |     | X   | 20  | 5   | Tách 2 bảng: Biên bản bàn giao (thông tin chung) và Chi tiết biên bản (từng tài sản). |
| 13  | **Xác nhận biên bản** | \- Mã định danh (ID)<br><br>\- Biên bản bàn giao<br><br>\- Người xác nhận<br><br>\- Vai trò xác nhận (bên giao / bên nhận)<br><br>\- Mã hash nội dung khi xác nhận<br><br>\- Thời điểm xác nhận |     |     | X   | 1   |     | X   | 6   | 2   | Suy ra từ luồng ký hai bên; phục vụ kiểm tra toàn vẹn nội dung biên bản. |
| **C. Phân hệ Điều chuyển tài sản** |     |     |     |     |     |     |     |     |     |     |     |
| 14  | **Yêu cầu điều chuyển** | Mã yêu cầu (dạng DC-YYYY-NNNN), tài sản, người đề nghị, lý do, vị trí nhận, người dự kiến tiếp nhận, ngày gửi, trạng thái, lý do bổ sung/từ chối. |     |     | X   | 1   |     | X   | 12  | 5   | Phục vụ UI01, UI02, UI03. |
| 15  | **Bộ phận / Vị trí** | Mã bộ phận hoặc địa điểm, tên, đơn vị quản lý, trạng thái sử dụng; dùng cho vị trí hiện tại và vị trí nhận. |     |     | X   | 1   |     | X   | 5   | 2   | Danh mục dùng chung; vị trí nhận phải khác vị trí hiện tại. Có thể đối chiếu/hợp nhất với danh mục Phòng ban / Đơn vị. |
| 16  | **Biên bản bàn giao (điều chuyển)** | Số biên bản, mã yêu cầu, thời gian, địa điểm, phụ kiện kèm theo, người lập, trạng thái xác nhận, ghi chú sai lệch. |     |     | X   | 1   |     | X   | 10  | 3   | Chỉ lập từ yêu cầu đã phê duyệt. |
| 17  | **Xác nhận bàn giao** | Xác nhận của bên giao và bên nhận, người xác nhận, thời gian xác nhận, trạng thái, ghi chú tình trạng/sai lệch. |     |     | X   | 1   |     | X   | 7   | 2   | Có thể triển khai thành hai bản ghi xác nhận gắn với một biên bản. |
| 18  | **Lịch sử điều chuyển** | Mã yêu cầu, tài sản, vị trí trước/sau, người quản lý trước/sau, thời điểm, người thao tác, kết quả điều chuyển. |     |     | X   | 1   |     | X   | 8   | 2   | Phục vụ tra cứu lịch sử và kiểm toán; chỉ ghi nhận khi có thay đổi. |
| **D. Phân hệ Thu hồi tài sản** |     |     |     |     |     |     |     |     |     |     |     |
| 19  | **Biên bản thu hồi** | Số biên bản, nhân viên, lý do, lịch bàn giao, trạng thái, mốc thời gian. |     |     | X   | 1   |     | X   | 21  | 6   | Bảng chính; BR01–BR05, BR09–BR16. |
| 20  | **Tài sản trong biên bản thu hồi** | Từng tài sản trong biên bản và kết quả xử lý (tình trạng, mất). |     |     | X   | 1   |     | X   | 13  | 6   | Không lưu bản sao mã/tên/serial do tham chiếu Tài sản. |
| 21  | **Phụ kiện bàn giao** | Phụ kiện nhân viên bàn giao kèm từng tài sản. |     |     | X   | 1   |     | X   | 4   | 2   | Phụ kiện không có dòng bàn giao = thiếu. |
| 22  | **Ảnh hiện trạng** | Ảnh hiện trạng của từng tài sản khi nhận. |     |     | X   | 1   |     | X   | 7   | 1   | File lưu ở kho tệp, bảng lưu đường dẫn. |
| 23  | **Thông báo thu hồi** | Nhật ký gửi thông báo/email: gửi lần đầu, gửi lại, nhắc quá hạn. |     |     | X   | 1   |     | X   | 9   | 1   | UC02, UC09. |
| 24  | **Lịch sử trạng thái biên bản** | Nhật ký chuyển trạng thái và người thực hiện. |     |     | X   | 1   |     | X   | 7   | 2   | Phục vụ truy vết. |
| 25  | **Danh mục trạng thái hoạt động** | Hoạt động bình thường, Lỗi màn hình, Không lên nguồn, Khác. |     |     | X   | 1   |     | X   | 6   | 1   | Cờ “yêu cầu ghi chú” (Khác = có). |
| 26  | **Danh mục phụ kiện theo loại tài sản** | Phụ kiện chuẩn theo từng loại tài sản. |     |     | X   | 1   |     | X   | 5   | 2   | Nguồn hiển thị chip phụ kiện. |
| 27  | **Tham số cấu hình phân hệ** | P1–P5 (ngày làm việc, định dạng/dung lượng/số ảnh). |     | X   |     | 1   |     | X   | 3   | 0   | Dùng bảng cấu hình hệ thống chung, bổ sung tham số. |
| **E. Phân hệ Thanh lý tài sản** |     |     |     |     |     |     |     |     |     |     |     |
| 28  | **Đề nghị thanh lý tài sản** | SO_DN, NGAY_DN, MA_DON_VI, MA_ND_LAP, LY_DO_CHUNG, … |     |     | X   | 1   |     | X   | 9   | 6   |     |
| 29  | **Danh mục TS đề nghị thanh lý** | MA_CT, SO_DN, MA_TS, LY_DO, TINH_TRANG, … |     |     | X   | 1   |     | X   | 7   | 2   |     |
| 30  | **Biên bản kiểm tra hiện trạng** | SO_BB, SO_DN, NGAY_KIEM_TRA, DIA_DIEM, MA_ND_LAP, … |     |     | X   | 1   |     | X   | 9   | 2   |     |
| 31  | **Chi tiết kiểm tra hiện trạng** | MA_CT, SO_BB, MA_TS, HIEN_TRANG, MUC_DO_HU_HONG, … |     |     | X   | 1   |     | X   | 7   | 2   |     |
| 32  | **Kế hoạch thu hồi tài sản** | MA_KH, SO_DN, MA_TS, NGAY_THU_HOI_DU_KIEN, LY_DO, … |     |     | X   | 1   |     | X   | 7   | 3   |     |
| 33  | **Biên bản bàn giao thu hồi** | SO_BB, MA_KH, NGAY_BAN_GIAO, BEN_GIAO, BEN_NHAN, … |     |     | X   | 1   |     | X   | 7   | 1   |     |
| 34  | **Tờ trình đề nghị thanh lý** | SO_TT, NGAY_LAP, MA_ND_LAP, NOI_DUNG, HINH_THUC, … |     |     | X   | 1   |     | X   | 10  | 2   |     |
| 35  | **Chi tiết tờ trình** | MA_CT, SO_TT, SO_DN, MA_TS, GTCL, … |     |     | X   | 1   |     | X   | 6   | 3   |     |
| 36  | **Quyết định thanh lý tài sản** | SO_QD, SO_TT, NGAY_QD, NGUOI_KY, KET_QUA, … |     |     | X   | 1   |     | X   | 7   | 5   |     |
| 37  | **Hợp đồng mua bán TS thanh lý** | SO_HD, SO_QD, NGAY_KY, BEN_MUA, GIA_TRI_HD, … |     |     | X   | 1   |     | X   | 7   | 3   |     |
| 38  | **Chi tiết thanh lý** | MA_CT, SO_QD, SO_HD, MA_TS, GIA_BAN, … |     |     | X   | 1   |     | X   | 6   | 3   |     |
| 49  | **Biên bản bàn giao hàng thanh lý** | SO_BB, SO_HD, NGAY_BAN_GIAO, NGUOI_BAN_GIAO, NGUOI_NHAN, … |     |     | X   | 1   |     | X   | 6   | 1   |     |
| 40  | **Hồ sơ thanh lý** | MA_HS, SO_QD, NGAY_DONG, MA_ND_LAP, TRANG_THAI, … |     |     | X   | 1   |     | X   | 6   | 1   |     |

Bảng 150: Bảng danh sách đối tượng dữ liệu cần quản lý

## 4.2 Liên kết giữa các đối tượng

| **STT** | **Tên lớp, bảng dữ liệu** | **Kiểu dữ liệu** |     | **Mô tả quan hệ** | **Tên lớp, bảng dữ liệu** |
| --- | --- | --- |     | --- | --- | --- |
| **Không gian** | **Phi không gian** |
| --- | --- | --- | --- | --- | --- |
| **A. Quan hệ giữa các đối tượng dùng chung** |     |     |     |     |     |
| 1   | **Phòng ban / Đơn vị** |     | X   | 1 – n: mỗi phòng ban có nhiều nhân viên; mỗi nhân viên thuộc một phòng ban | **Nhân viên** |
| 2   | **Chức danh / Chức vụ** |     | X   | 1 – n: mỗi chức danh/chức vụ gán cho nhiều nhân viên | **Nhân viên** |
| 3   | **Nhân viên** |     | X   | 1 – 1 (tối đa một): mỗi nhân viên có một tài khoản đăng nhập hệ thống (tài khoản đơn vị quản lý tài sản có thể không gắn nhân viên) | **Tài khoản người dùng** |
| 4   | **Vai trò và phân quyền (bảng Vai trò)** |     | X   | 1 – n: mỗi vai trò được gán cho nhiều tài khoản | **Tài khoản người dùng** |
| 5   | **Vai trò và phân quyền (bảng Vai trò)** |     | X   | 1 – n: mỗi vai trò có nhiều dòng phân quyền theo chức năng | **Vai trò và phân quyền (bảng Phân quyền)** |
| 6   | **Loại tài sản** |     | X   | 1 – n: một loại tài sản có nhiều hồ sơ tài sản; mỗi tài sản thuộc một loại | **Tài sản** |
| 7   | **Nhà cung cấp** |     | X   | 1 – n (tùy chọn): một nhà cung cấp gắn với nhiều tài sản; tài sản có thể chưa có nhà cung cấp | **Tài sản** |
| 8   | **Tài khoản người dùng** |     | X   | 1 – n: một tài khoản ghi nhận nhiều tài sản; mỗi hồ sơ lưu tài khoản người ghi nhận | **Tài sản** |
| 9   | **Phòng ban / Đơn vị** |     | X   | 1 – n: một phòng ban/đơn vị sử dụng nhiều tài sản | **Tài sản** |
| 10  | **Nhân viên** |     | X   | 1 – n: một nhân viên đang sử dụng nhiều tài sản; tại một thời điểm tài sản chỉ có một người sử dụng | **Tài sản** |
| **B. Phân hệ Ghi nhận tài sản mới** |     |     |     |     |     |
| 11  | **Tài sản** |     | X   | 1 – n (nếu có): một tài sản có nhiều tệp chứng từ đi kèm; mỗi tệp liên kết một hồ sơ tài sản | **Chứng từ / Tệp đính kèm** |
| 12  | **Tài sản** |     | X   | 1 – n: một tài sản có nhiều bản ghi lịch sử tạo/sửa/xóa/in QR; nhật ký luôn tham chiếu tài sản | **Lịch sử thao tác tài sản** |
| 13  | **Tài khoản người dùng** |     | X   | 1 – n: một tài khoản thực hiện nhiều thao tác được lưu vết | **Lịch sử thao tác tài sản** |
| **C. Phân hệ Cấp phát tài sản** |     |     |     |     |     |
| 14  | **Nhân viên** |     | X   | 1 – n: nhân viên là người lập của nhiều phiếu yêu cầu | **Phiếu yêu cầu cấp phát tài sản** |
| 15  | **Nhân viên** |     | X   | 1 – n: nhân viên là người nhận tài sản của nhiều phiếu yêu cầu | **Phiếu yêu cầu cấp phát tài sản** |
| 16  | **Phòng ban / Đơn vị** |     | X   | 1 – n: phòng ban của người lập được ghi nhận trên nhiều phiếu | **Phiếu yêu cầu cấp phát tài sản** |
| 17  | **Phiếu yêu cầu cấp phát tài sản** |     | X   | 1 – n: mỗi phiếu có nhiều dòng loại tài sản yêu cầu | **Chi tiết phiếu yêu cầu** |
| 18  | **Phiếu yêu cầu cấp phát tài sản** |     | X   | 1 – 1: mỗi phiếu chỉ được phê duyệt/từ chối một lần | **Quyết định phê duyệt** |
| 19  | **Nhân viên** |     | X   | 1 – n: nhân viên quản lý tài sản ra quyết định phê duyệt cho nhiều phiếu | **Quyết định phê duyệt** |
| 20  | **Phiếu yêu cầu cấp phát tài sản** |     | X   | 1 – n: mỗi phiếu đã duyệt được lập biên bản bàn giao | **Biên bản bàn giao tài sản (cấp phát)** |
| 21  | **Nhân viên** |     | X   | 1 – n: nhân viên là bên giao của nhiều biên bản | **Biên bản bàn giao tài sản (cấp phát)** |
| 22  | **Nhân viên** |     | X   | 1 – n: nhân viên là bên nhận của nhiều biên bản | **Biên bản bàn giao tài sản (cấp phát)** |
| 23  | **Biên bản bàn giao tài sản (cấp phát)** |     | X   | 1 – n: mỗi biên bản có nhiều dòng tài sản bàn giao | **Chi tiết biên bản bàn giao** |
| 24  | **Biên bản bàn giao tài sản (cấp phát)** |     | X   | 1 – n: mỗi biên bản có xác nhận (ký) của bên giao và bên nhận | **Xác nhận biên bản** |
| 25  | **Nhân viên** |     | X   | 1 – n: nhân viên là người ký xác nhận của nhiều biên bản | **Xác nhận biên bản** |
| **D. Phân hệ Điều chuyển tài sản** |     |     |     |     |     |
| 26  | **Tài sản** |     | X   | 1 – n: nhiều yêu cầu có thể gắn với một tài sản theo thời gian; mỗi yêu cầu chỉ tham chiếu một tài sản | **Yêu cầu điều chuyển** |
| 27  | **Nhân viên** |     | X   | 1 – n: mỗi yêu cầu do một nhân viên tạo; một nhân viên có thể tạo nhiều yêu cầu | **Yêu cầu điều chuyển** |
| 28  | **Bộ phận / Vị trí** |     | X   | 1 – n: mỗi yêu cầu có một vị trí nhận; một vị trí có thể là nơi nhận của nhiều yêu cầu | **Yêu cầu điều chuyển** |
| 29  | **Nhân viên** |     | X   | 1 – n: mỗi yêu cầu có một người dự kiến tiếp nhận; một nhân viên có thể tiếp nhận nhiều tài sản | **Yêu cầu điều chuyển** |
| 30  | **Yêu cầu điều chuyển** |     | X   | 1 – 1: mỗi yêu cầu đã phê duyệt có thể có một biên bản bàn giao chính thức | **Biên bản bàn giao (điều chuyển)** |
| 31  | **Nhân viên** |     | X   | 1 – n: bên giao và bên nhận của biên bản được tham chiếu từ danh mục nhân sự | **Biên bản bàn giao (điều chuyển)** |
| 32  | **Biên bản bàn giao (điều chuyển)** |     | X   | 1 – n: một biên bản có thể đính kèm nhiều tệp; mỗi tệp thuộc một hồ sơ liên quan | **Chứng từ / Tệp đính kèm** |
| 33  | **Biên bản bàn giao (điều chuyển)** |     | X   | 1 – n: một biên bản cần xác nhận của bên giao và bên nhận; mỗi xác nhận thuộc một biên bản | **Xác nhận bàn giao** |
| 34  | **Tài sản** |     | X   | 1 – n: một tài sản có thể phát sinh nhiều bản ghi lịch sử điều chuyển | **Lịch sử điều chuyển** |
| 35  | **Yêu cầu điều chuyển** |     | X   | 1 – n: mỗi bản ghi lịch sử gắn với yêu cầu điều chuyển tương ứng | **Lịch sử điều chuyển** |
| **E. Phân hệ Thu hồi tài sản** |     |     |     |     |     |
| 36  | **Nhân viên** |     | X   | 1 – n: một nhân viên có nhiều biên bản thu hồi (theo thời gian); mỗi biên bản thuộc đúng một nhân viên | **Biên bản thu hồi** |
| 37  | **Tài khoản người dùng** |     | X   | 1 – n: một nhân viên quản lý tài sản tạo nhiều biên bản | **Biên bản thu hồi** |
| 38  | **Tài khoản người dùng** |     | X   | 1 – n: một nhân viên quản lý tài sản xác nhận hoàn tất/nhận tài sản của nhiều biên bản (để trống đến khi hoàn tất) | **Biên bản thu hồi** |
| 39  | **Biên bản thu hồi** |     | X   | 1 – n: một biên bản có ít nhất một tài sản | **Tài sản trong biên bản thu hồi** |
| 40  | **Tài sản** |     | X   | 1 – n: một tài sản có thể thuộc nhiều biên bản theo thời gian nhưng tối đa một biên bản đang xử lý | **Tài sản trong biên bản thu hồi** |
| 41  | **Tài sản trong biên bản thu hồi** |     | X   | 1 – n: một tài sản bàn giao có nhiều phụ kiện đi kèm | **Phụ kiện bàn giao** |
| 42  | **Danh mục phụ kiện theo loại tài sản** |     | X   | 1 – n: một phụ kiện chuẩn xuất hiện ở nhiều lần bàn giao | **Phụ kiện bàn giao** |
| 43  | **Tài sản trong biên bản thu hồi** |     | X   | 1 – n: một tài sản có nhiều ảnh hiện trạng (tối đa theo tham số P5) | **Ảnh hiện trạng** |
| 44  | **Danh mục trạng thái hoạt động** |     | X   | 1 – n: một giá trị trạng thái hoạt động được dùng bởi nhiều tài sản | **Tài sản trong biên bản thu hồi** |
| 45  | **Biên bản thu hồi** |     | X   | 1 – n: một biên bản có nhiều lần gửi thông báo/nhắc | **Thông báo thu hồi** |
| 46  | **Biên bản thu hồi** |     | X   | 1 – n: một biên bản có nhiều bản ghi chuyển trạng thái | **Lịch sử trạng thái biên bản** |
| 47  | **Tài khoản người dùng** |     | X   | 1 – n: một người dùng thực hiện nhiều lần chuyển trạng thái | **Lịch sử trạng thái biên bản** |
| 48  | **Loại tài sản** |     | X   | 1 – n: một loại tài sản có danh sách phụ kiện chuẩn riêng | **Danh mục phụ kiện theo loại tài sản** |
| **F. Phân hệ Thanh lý tài sản** |     |     |     |     |     |
| 49  | **Phòng ban / Đơn vị** |     | X   | 1 – n: một đơn vị có nhiều người dùng | **Tài khoản người dùng** |
| 50  | **Phòng ban / Đơn vị** |     | X   | 1 – n: một bộ phận lập nhiều đề nghị | **Đề nghị thanh lý tài sản** |
| 51  | **Tài khoản người dùng** |     | X   | 1 – n: một người dùng lập nhiều đề nghị | **Đề nghị thanh lý tài sản** |
| 52  | **Đề nghị thanh lý tài sản** |     | X   | 1 – n: một đề nghị gồm nhiều tài sản | **Danh mục TS đề nghị thanh lý** |
| 53  | **Tài sản** |     | X   | 1 – n: một tài sản có thể xuất hiện ở nhiều đề nghị (ở các thời điểm khác nhau) | **Danh mục TS đề nghị thanh lý** |
| 54  | **Đề nghị thanh lý tài sản** |     | X   | 1 – n: một đề nghị có thể kiểm tra nhiều lần | **Biên bản kiểm tra hiện trạng** |
| 55  | **Biên bản kiểm tra hiện trạng** |     | X   | 1 – n: một biên bản gồm nhiều tài sản | **Chi tiết kiểm tra hiện trạng** |
| 56  | **Tài sản** |     | X   | 1 – n: một tài sản có nhiều lần kiểm tra | **Chi tiết kiểm tra hiện trạng** |
| 57  | **Đề nghị thanh lý tài sản** |     | X   | 1 – n: một đề nghị có thể có kế hoạch thu hồi cho tài sản chưa đủ điều kiện | **Kế hoạch thu hồi tài sản** |
| 58  | **Tài sản** |     | X   | 1 – n: một tài sản có thể có nhiều kế hoạch thu hồi | **Kế hoạch thu hồi tài sản** |
| 59  | **Kế hoạch thu hồi tài sản** |     | X   | 1 – n: một kế hoạch có biên bản bàn giao thu hồi | **Biên bản bàn giao thu hồi** |
| 60  | **Tờ trình đề nghị thanh lý** |     | X   | 1 – n: một tờ trình gồm nhiều tài sản | **Chi tiết tờ trình** |
| 61  | **Đề nghị thanh lý tài sản** |     | X   | 1 – n: một đề nghị có tài sản nằm ở nhiều tờ trình | **Chi tiết tờ trình** |
| 62  | **Tài sản** |     | X   | 1 – n: một tài sản có thể được trình nhiều lần | **Chi tiết tờ trình** |
| 63  | **Tờ trình đề nghị thanh** |     | X   | 1 – n: một tờ trình có thể được xem xét nhiều lần (phê duyệt / không phê duyệt) | **Quyết định thanh lý tài sản** |
| 64  | **Quyết định thanh lý tài sản** |     | X   | 1 – n: một quyết định có thể có nhiều hợp đồng mua bán | **Hợp đồng mua bán TS than** |
| 65  | **Quyết định thanh lý tài sản** |     | X   | 1 – n: một quyết định gồm nhiều tài sản | **Chi tiết thanh lý** |
| 66  | **Hợp đồng mua bán TS thanh lý** |     | X   | 1 – n: một hợp đồng gồm nhiều tài sản | **Chi tiết thanh lý** |
| 67  | **Tài sản** |     | X   | 1 – 1: một tài sản chỉ thanh lý một lần | **Chi tiết thanh lý** |
| 68  | **Hợp đồng mua bán TS thanh lý** |     | X   | 1 – n: một hợp đồng có thể bàn giao nhiều đợt | **Biên bản bàn giao hàng thanh lý** |
| 69  | **Quyết định thanh lý tài sản** |     | X   | 1 – 1: một quyết định có một hồ sơ thanh lý | **Hồ sơ thanh lý** |

Bảng 151: Bảng mối liên hệ giữa các đối tượng dữ liệu

# 5\. Yêu cầu phi chức năng

## 5.1 Yêu cầu hiệu năng

### 5.1.1 Thời gian phản hồi

Thời gian tính từ khi người dùng thực hiện thao tác đến khi hệ thống hiển thị kết quả, trong điều kiện đường truyền từ 10 Mbps và 10 người dùng đồng thời theo URD mục 6.3.1.

| **Mã** | **Yêu cầu** | **Chỉ tiêu hoặc tiêu chí chấp nhận** |
| --- | --- | --- |
| NFR-01 | Đăng nhập và mở trang chủ | Trung bình ≤ 2 giây; tối đa ≤ 7 giây. |
| NFR-02 | Mở danh sách có phân trang | Danh sách tài sản, phiếu và biên bản: trung bình ≤ 2 giây; tối đa ≤ 7 giây. |
| NFR-03 | Tìm kiếm và lọc | Với 2.000 bản ghi: trung bình ≤ 2 giây; tối đa ≤ 7 giây. |
| NFR-04 | Lưu hoặc cập nhật | Một phiếu hoặc một bản ghi: trung bình ≤ 2 giây; tối đa ≤ 7 giây. |
| NFR-05 | Lập và xuất PDF biên bản | Biên bản đến 20 tài sản: trung bình ≤ 5 giây; tối đa ≤ 10 giây. |

Bảng 152. Yêu cầu thời gian phản hồi

### 5.1.2 Khả năng chịu tải và xử lý đồng thời

| **Mã** | **Yêu cầu** | **Chỉ tiêu hoặc tiêu chí chấp nhận** |
| --- | --- | --- |
| NFR-06 | Người dùng đồng thời | Phục vụ tối thiểu 50 người dùng đồng thời và vẫn đảm bảo thời gian phản hồi quy định tại mục 4.1.1 theo URD mục 6.3.2. |
| NFR-07 | Thông lượng ghi | Tối thiểu 5 giao dịch ghi dữ liệu mỗi giây tại thời điểm cao điểm. |
| NFR-08 | Chỉnh sửa đồng thời | Ngăn ghi đè thay đổi khi nhiều người cùng sửa một tài sản hoặc phiếu. Người lưu sau được thông báo dữ liệu đã thay đổi và phải tải lại trước khi tiếp tục. |
| NFR-09 | Chống ghi nhận lặp | Nhấn xác nhận nhiều lần hoặc gửi lại do mạng chậm chỉ được ghi nhận một lần cho cùng yêu cầu nghiệp vụ. |

Bảng 153. Yêu cầu tải và xử lý đồng thời

## 5.2 An toàn và kiểm soát truy cập

| **Mã** | **Yêu cầu** | **Chỉ tiêu hoặc tiêu chí chấp nhận** |
| --- | --- | --- |
| NFR-10 | Phân quyền | Kiểm soát quyền truy cập và phạm vi hồ sơ theo tác nhân, người lập, người nhận và bộ phận được mô tả tại phần 3. |
| NFR-11 | Lưu vết | Ghi người thực hiện, thời điểm và nội dung thao tác thay đổi. Lịch sử mỗi lần cấp phát, thu hồi và điều chuyển được lưu riêng. |
| NFR-12 | Xác nhận biên bản cấp phát | Xác thực bằng mật khẩu, gắn bằng chứng xác nhận với nội dung biên bản; kiểm tra hash và khóa nội dung sau khi ký theo UC-02.3. |
| NFR-13 | Kiểm soát nhập và tệp đính kèm | Kiểm tra trường bắt buộc, độ dài, định dạng, giá trị và tệp tải lên theo từng màn hình; lỗi không làm hoàn tất nghiệp vụ hoặc lưu dữ liệu dở dang. |

Bảng 154. Yêu cầu kiểm soát truy cập và toàn vẹn

## 5.3 Yêu cầu chất lượng

### 5.3.1 Tính sẵn sàng và khôi phục

| **Mã** | **Yêu cầu** | **Chỉ tiêu hoặc tiêu chí chấp nhận** |
| --- | --- | --- |
| NFR-14 | Tính sẵn sàng | Tối thiểu 99,5% mỗi tháng trong giờ làm việc 08:00–18:00 từ thứ Hai đến thứ Sáu. |
| NFR-15 | Bảo trì | Thông báo trước 1 ngày; thực hiện bảo trì và nâng cấp ngoài giờ làm việc. |
| NFR-16 | Sao lưu | Tự động sao lưu hằng ngày lúc 00:00; giữ bản sao lưu tối thiểu 30 ngày và lưu tách biệt hệ thống chính. |
| NFR-17 | Phục hồi | Khi mất toàn bộ dữ liệu, khôi phục hệ thống trong vòng 12 giờ làm việc. |
| NFR-18 | Kiểm tra phục hồi | Thử phục hồi từ bản sao lưu ít nhất 3 tháng một lần; ghi nhận kết quả và đánh giá. |

Bảng 155. Yêu cầu ổn định và khôi phục

| **Mức lỗi** | **Thời gian phản hồi** | **Thời gian khắc phục tối đa** |
| --- | --- | --- |
| Khẩn cấp | Trong 30 phút | Không quá 4 giờ làm việc; nếu chưa sửa xong cần có giải pháp tạm thời để tiếp tục nghiệp vụ. |
| Quan trọng | Trong 2 giờ làm việc | Không quá 1 ngày làm việc. |
| Nhỏ | Trong 1 ngày làm việc | Không quá 5 ngày làm việc; có thể gộp đợt cập nhật định kỳ. |

Bảng 156. Thời gian xử lý sự cố theo URD

Lỗi khẩn cấp gồm mất hoặc sai lệch dữ liệu, không đăng nhập được hoặc không thực hiện được nghiệp vụ trọng yếu. Lỗi quan trọng gồm chức năng con không hoạt động nhưng có cách xử lý thay thế, sai thông tin biên bản hoặc phân quyền. Lỗi nhỏ gồm chính tả, căn lề và hiển thị không ảnh hưởng kết quả nghiệp vụ.

### 5.3.2 Tính chính xác

| **Mã** | **Yêu cầu** | **Chỉ tiêu hoặc tiêu chí chấp nhận** |
| --- | --- | --- |
| NFR-19 | Nhất quán tài sản | Sau cấp phát, thu hồi hoặc điều chuyển, người sử dụng, bộ phận, vị trí và trạng thái được cập nhật đồng bộ; không đồng thời gán một tài sản cho hai người sử dụng. |
| NFR-20 | Mã và giữ chỗ | Không trùng mã tài sản, mã biên bản; không lập hai phiếu cùng giữ chỗ một tài sản khi nghiệp vụ không cho phép. |
| NFR-21 | Đối chiếu số liệu | Số lượng theo trạng thái, bộ phận và người sử dụng phải khớp dữ liệu chi tiết và danh sách tra cứu; sai lệch bằng 0. |

Bảng 157. Yêu cầu chính xác và nhất quán

### 5.3.3 Tính dễ sử dụng

| **Mã** | **Yêu cầu** | **Chỉ tiêu hoặc tiêu chí chấp nhận** |
| --- | --- | --- |
| NFR-22 | Ngôn ngữ và định dạng | Menu, nhãn và thông báo bằng tiếng Việt; ngày dd/MM/yyyy; tiền VND có phân cách hàng nghìn. |
| NFR-23 | Thích ứng màn hình | Hỗ trợ máy tính, máy tính bảng và điện thoại; các thao tác chính không cần cuộn ngang. |
| NFR-24 | Điều hướng | Có thể truy cập chức năng từ giao diện chính không quá 4 lần nhấp chuột. |
| NFR-25 | Giảm nhập lặp | Sử dụng lại thông tin đã có trong hệ thống; hỗ trợ lưu nháp tại phiếu, biên bản có quy định lưu nháp. |
| NFR-26 | Thông báo và xác nhận | Thông báo chỉ rõ lỗi và cách khắc phục; đánh dấu trường bắt buộc; xác nhận trước thao tác quan trọng và cảnh báo khi thao tác không thể hoàn tác. |
| NFR-27 | Hướng dẫn sử dụng | Tài liệu theo vai trò dạng PDF hoặc MP4; người dùng nghiệp vụ có thể thao tác thành thạo sau hai buổi đào tạo. |

Bảng 158. Yêu cầu sử dụng và trình bày

## 5.4 Yêu cầu khác

| **Mã** | **Yêu cầu** | **Chỉ tiêu hoặc tiêu chí chấp nhận** |
| --- | --- | --- |
| NFR-28 | Trình duyệt | Hỗ trợ ba phiên bản mới nhất của Chrome, Edge và Safari theo URD; không yêu cầu cài thêm phần mềm để sử dụng các chức năng web. |

Bảng 159. Yêu cầu tương thích

# PHỤ LỤC A ĐỐI CHIẾU MÃ VÀ TRUY VẾT

## A.1 Đối chiếu mã nghiệp vụ và use case

| **Module** | **Mã gốc** | **Mã chuẩn** | **Nội dung** |
| --- | --- | --- | --- |
| NV-01 | GN.01; UC_GN_01 | CN-01.1; UC-01.1 | Thêm mới tài sản |
| NV-01 | GN.02; UC_GN_02 | CN-01.2; UC-01.2 | Sửa thông tin tài sản |
| NV-01 | GN.03; UC_GN_03 | CN-01.3; UC-01.3 | Xóa tài sản |
| NV-01 | GN.04; UC_GN_04 | CN-01.4; UC-01.4 | In QR tài sản |
| NV-01 | GN.05; UC_GN_05 | CN-01.5; UC-01.5 | Xem danh sách tài sản |
| NV-01 | GN.06; UC_GN_06 | CN-01.6; UC-01.6 | Tìm kiếm và lọc tài sản |
| NV-02 | Nhóm lập phiếu; UC01 / CN01 tại bảng UC | CN-02.1; UC-02.1 | Lập phiếu yêu cầu cấp phát tài sản |
| NV-02 | Nhóm phê duyệt; UC03 / CN03 tại bảng UC | CN-02.2; UC-02.2 | Phê duyệt yêu cầu cấp phát tài sản |
| NV-02 | Nhóm bàn giao; UC02 | CN-02.3; UC-02.3 | Lập và xác nhận biên bản bàn giao tài sản |
| NV-03 | UC01 | CN-03.1; UC-03.1 | Tạo biên bản thu hồi |
| NV-03 | UC02 | CN-03.2; UC-03.2 | Gửi thông báo thu hồi |
| NV-03 | UC03 | CN-03.3; UC-03.3 | Xác nhận đã đọc và đồng ý bàn giao |
| NV-03 | UC04 | CN-03.4; UC-03.4 | Ghi nhận bàn giao tài sản |
| NV-03 | UC05 | CN-03.5; UC-03.5 | Khóa, lưu trữ và in biên bản |
| NV-03 | UC06 | CN-03.6; UC-03.6 | Cập nhật trạng thái tài sản sau thu hồi |
| NV-04 | F01; UC04 | CN-04.1; UC-04.1 | Tạo và gửi yêu cầu điều chuyển |
| NV-04 | F02; UC04 | CN-04.2; UC-04.1 | Theo dõi yêu cầu điều chuyển |
| NV-04 | F03; UC04 | CN-04.3; UC-04.1 | Kiểm tra hồ sơ và điều kiện điều chuyển |
| NV-04 | F04; UC04 | CN-04.4; UC-04.1 | Phê duyệt yêu cầu điều chuyển |
| NV-04 | F05; UC04 | CN-04.5; UC-04.1 | Lập và xác nhận biên bản bàn giao |
| NV-04 | F06; UC04 | CN-04.6; UC-04.1 | Cập nhật sổ sách và lưu hồ sơ |
| NV-05 | CNC01; UC_TL01 | CN-05.1; UC-05.1 | Lập đề nghị thanh lý tài sản |
| NV-05 | CNC02; UC_TL02 | CN-05.2; UC-05.2 | Kiểm tra và thẩm định tài sản |
| NV-05 | CNC03; UC_TL03 | CN-05.3; UC-05.3 | Lập tờ trình thanh lý tài sản |
| NV-05 | CNC04; UC_TL04 | CN-05.4; UC-05.4 | Phê duyệt thanh lý tài sản |
| NV-05 | CNC05; UC_TL05 | CN-05.5; UC-05.5 | Thực hiện thanh lý tài sản |
| NV-05 | CNC06; UC_TL06 | CN-05.6; UC-05.6 | Cập nhật dữ liệu và lưu hồ sơ thanh lý |

Bảng 160. Đối chiếu mã chức năng và UC

## A.2 Đối chiếu mã sơ đồ hoạt động

| **Nhóm** | **Mã AD gốc hoặc hình nguồn** | **Mã chuẩn** | **UC áp dụng** |
| --- | --- | --- | --- |
| NV-01 | AD_GN_01 | AD-01.1 | UC-01.1 |
| NV-01 | AD_GN_02 | AD-01.2 | UC-01.2 |
| NV-01 | AD_GN_03 | AD-01.3 | UC-01.3 |
| NV-01 | AD_GN_04 | AD-01.4 | UC-01.4 |
| NV-01 | AD_GN_05 | AD-01.5 | UC-01.5 |
| NV-01 | AD_GN_06 | AD-01.6 | UC-01.6 |
| NV-02 | AD01-1 / AD - 01 | AD-02.1 | UC-02.1 |
| NV-02 | AD03-1 | AD-02.2 | UC-02.2 |
| NV-02 | AD02-1 | AD-02.3 | UC-02.3 |
| NV-03 | AD toàn quy trình, hình 1 | AD-03.1 | UC-03.1, UC-03.2, UC-03.3 |
| NV-03 | AD toàn quy trình, hình 2 | AD-03.2 | UC-03.4, UC-03.5, UC-03.6 |
| NV-04 | AD04 | AD-04.1 | UC-04.1 |
| NV-05 | AD_TL01 | AD-05.1 | UC-05.1 |
| NV-05 | AD_TL02 | AD-05.2 | UC-05.2 |
| NV-05 | AD_TL03 + AD_TL04 | AD-05.3 | UC-05.3, UC-05.4 |
| NV-05 | AD_TL05 + AD_TL06 | AD-05.4 | UC-05.5, UC-05.6 |

Bảng 161. Đối chiếu mã AD

## A.3 Danh mục và đối chiếu mã màn hình

| **Mã chuẩn** | **Mã hoặc vị trí trong nguồn** | **Tên màn hình** |
| --- | --- | --- |
| MH-01.01 | GD_GN_04 / MH_GN_04 | Thêm mới tài sản |
| MH-01.02 | GD_GN_05 / MH_GN_05 | Lỗi thêm mới tài sản |
| MH-01.03 | GD_GN_06 / MH_GN_06 | Thêm mới tài sản thành công |
| MH-01.04 | GD_GN_07 / MH_GN_07 | Xác nhận hủy thêm mới tài sản |
| MH-01.05 | GD_GN_08 / MH_GN_08 | Sửa thông tin tài sản |
| MH-01.06 | GD_GN_09 / MH_GN_09 | Xóa tài sản |
| MH-01.07 | GD_GN_10 / MH_GN_10 | Xóa tài sản đã nhập lý do |
| MH-01.08 | GD_GN_11 / MH_GN_11 | Xóa tài sản lỗi thiếu lý do |
| MH-01.09 | GD_GN_12 / MH_GN_12 | Không thể xóa tài sản |
| MH-01.10 | GD_GN_13 / MH_GN_13 | In QR tài sản |
| MH-01.11 | GD_GN_14 / MH_GN_14 | Xuất PDF tem QR thành công |
| MH-01.12 | GD_GN_15 / MH_GN_15 | In QR lỗi máy in |
| MH-01.13 | GD_GN_19 / MH_GN_19 | Danh sách tài sản |
| MH-01.14 | GD_GN_20 / MH_GN_20 | Danh sách tài sản trống |
| MH-01.15 | GD_GN_21 / MH_GN_21 | Lỗi tải danh sách tài sản |
| MH-01.16 | GD_GN_16 / MH_GN_16 | Tìm kiếm và lọc tài sản |
| MH-01.17 | GD_GN_17 / MH_GN_17 | Tìm kiếm không có kết quả |
| MH-01.18 | GD_GN_18 / MH_GN_18 | Tìm kiếm lỗi khoảng ngày |
| MH-02.01 | UC lập phiếu: MH1-01 | Danh sách phiếu yêu cầu của nhân viên |
| MH-02.02 | UC lập phiếu: MH1-02 / MH-02 | Menu thao tác trên phiếu yêu cầu |
| MH-02.03 | UC lập phiếu: MH1-03 / MH-03 | Tạo mới phiếu yêu cầu cấp phát |
| MH-02.04 | UC lập phiếu: MH1-04 / MH-04 | Xem lý do từ chối phiếu yêu cầu |
| MH-02.05 | UC phê duyệt: MH01 | Danh sách yêu cầu dành cho người phê duyệt |
| MH-02.06 | UC phê duyệt: MH02 | Chi tiết phiếu yêu cầu cấp phát |
| MH-02.07 | UC phê duyệt: MH-03 | Nhập lý do từ chối phiếu yêu cầu |
| MH-02.08 | UC bàn giao: MH-01 | Tạo biên bản bàn giao tài sản |
| MH-02.09 | UC bàn giao: MH-02 | Xác nhận ký biên bản bằng mật khẩu |
| MH-02.10 | UC bàn giao: MH03 | Danh sách biên bản bàn giao |
| MH-02.11 | UC bàn giao: MH-04 | Thông báo |
| MH-03.01 | Màn hình 1 / M01 | Danh sách biên bản thu hồi |
| MH-03.02 | Màn hình 2 / M02 | Tạo biên bản chưa chọn nhân viên |
| MH-03.03 | Màn hình 3 / M03 | Tạo biên bản đã chọn nhân viên |
| MH-03.04 | Màn hình 4 / M04 | Chi tiết biên bản ở trạng thái Nháp |
| MH-03.05 | Màn hình 5 / M05 | Chi tiết biên bản ở trạng thái Chờ bàn giao |
| MH-03.06 | Màn hình 6 / M06 | Đang bàn giao chưa quét tài sản |
| MH-03.07 | Màn hình 7 / M07 | Đang bàn giao ghi tình trạng và báo mất |
| MH-03.08 | Màn hình 8 / M08 | Đang bàn giao chọn trạng thái hoạt động và hoàn tất |
| MH-03.09 | Màn hình 9 / M09 | Chi tiết biên bản đã hoàn tất |
| MH-03.10 | Màn hình 10 / M10 | Xác nhận biên bản thu hồi |
| MH-04.01 | UI01 | Danh sách và theo dõi yêu cầu điều chuyển |
| MH-04.02 | UI02 | Tạo và gửi yêu cầu điều chuyển |
| MH-04.03 | UI03 | Chi tiết và xử lý yêu cầu điều chuyển |
| MH-04.04 | UI04 | Lập biên bản bàn giao điều chuyển |
| MH-04.05 | UI05 | Ghi nhận xác nhận bàn giao và tiếp nhận |
| MH-05.01 | MH_TL01 | Lập đề nghị thanh lý tài sản |
| MH-05.02 | MH_TL02 | Kiểm tra và thẩm định tài sản |
| MH-05.03 | MH_TL03 | Lập tờ trình đề nghị thanh lý |
| MH-05.04 | MH_TL04 | Phê duyệt thanh lý tài sản |
| MH-05.05 | MH_TL05 | Thực hiện thanh lý tài sản |
| MH-05.06 | MH_TL06 | Cập nhật tài sản thanh lý và lưu hồ sơ |

Bảng 162. Đối chiếu mã màn hình và popup

## A.4 Truy vết chức năng và giao diện

| **Mã UC** | **Chức năng** | **Mã AD** | **Màn hình** |
| --- | --- | --- | --- |
| UC-01.1 | Thêm mới tài sản | AD-01.1 | MH-01.01, MH-01.02, MH-01.03, MH-01.04 |
| UC-01.2 | Sửa thông tin tài sản | AD-01.2 | MH-01.05 |
| UC-01.3 | Xóa tài sản | AD-01.3 | MH-01.06, MH-01.07, MH-01.08, MH-01.09 |
| UC-01.4 | In QR tài sản | AD-01.4 | MH-01.10, MH-01.11, MH-01.12 |
| UC-01.5 | Xem danh sách tài sản | AD-01.5 | MH-01.13, MH-01.14, MH-01.15 |
| UC-01.6 | Tìm kiếm và lọc tài sản | AD-01.6 | MH-01.16, MH-01.17, MH-01.18 |
| UC-02.1 | Lập phiếu yêu cầu cấp phát tài sản | AD-02.1 | MH-02.01, MH-02.02, MH-02.03, MH-02.04 |
| UC-02.2 | Phê duyệt yêu cầu cấp phát tài sản | AD-02.2 | MH-02.05, MH-02.06, MH-02.07 |
| UC-02.3 | Lập và xác nhận biên bản bàn giao tài sản | AD-02.3 | MH-02.08, MH-02.09, MH-02.10, MH-02.11 |
| UC-03.1 | Tạo biên bản thu hồi | AD-03.1 | MH-03.01, MH-03.02, MH-03.03, MH-03.04 |
| UC-03.2 | Gửi thông báo thu hồi | AD-03.1 | MH-03.04, MH-03.05 |
| UC-03.3 | Xác nhận đã đọc và đồng ý bàn giao | AD-03.1 | MH-03.10 |
| UC-03.4 | Ghi nhận bàn giao tài sản | AD-03.2 | MH-03.05, MH-03.06, MH-03.07, MH-03.08 |
| UC-03.5 | Khóa, lưu trữ và in biên bản | AD-03.2 | MH-03.09 |
| UC-03.6 | Cập nhật trạng thái tài sản sau thu hồi | AD-03.2 | MH-03.09 |
| UC-04.1 | Điều chuyển tài sản toàn quy trình | AD-04.1 | MH-04.01, MH-04.02, MH-04.03, MH-04.04, MH-04.05 |
| UC-05.1 | Lập đề nghị thanh lý tài sản | AD-05.1 | MH-05.01 |
| UC-05.2 | Kiểm tra và thẩm định tài sản | AD-05.2 | MH-05.02 |
| UC-05.3 | Lập tờ trình thanh lý tài sản | AD-05.3 | MH-05.03 |
| UC-05.4 | Phê duyệt thanh lý tài sản | AD-05.3 | MH-05.04 |
| UC-05.5 | Thực hiện thanh lý tài sản | AD-05.4 | MH-05.05 |
| UC-05.6 | Cập nhật dữ liệu và lưu hồ sơ thanh lý | AD-05.4 | MH-05.06 |

Bảng 163. Ma trận truy vết UC và giao diện

## A.5 Đối chiếu quy tắc

| **Nhóm** | **Quy tắc nguồn** | **Mã chuẩn** |
| --- | --- | --- |
| NV-01 | BR_GN_01 đến BR_GN_15 | BR-01.01 đến BR-01.15 |
| NV-02 | BR01…BR09 / BR1.01…BR1.09; BR2.10…BR2.15 | BR-02.01 đến BR-02.15 |
| NV-03 | BR01…BR04; BR06…BR13 | BR-03.01…BR-03.04; BR-03.06…BR-03.13 |
| NV-04 | BR01 đến BR10 | BR-04.01 đến BR-04.10 |
| NV-05 | QT01 đến QT12; một dòng quy tắc không có mã | BR-05.01 đến BR-05.12; BR-05.13 |
| NV-04 | QTC01 đến QTC10 | HT-04.01 đến HT-04.10 |

Bảng 164. Đối chiếu mã quy tắc nghiệp vụ và quy tắc chung

| **Màn hình** | **Mã quy tắc nguồn** | **Mã quy tắc chuẩn** |
| --- | --- | --- |
| MH-01.01 | MH_GN_04_01 … MH_GN_04_08 | QT-01.01 … QT-01.08 |
| MH-01.02 | MH_GN_05_01 … MH_GN_05_06 | QT-01.09 … QT-01.14 |
| MH-01.03 | MH_GN_06_01 … MH_GN_06_06 | QT-01.15 … QT-01.20 |
| MH-01.04 | MH_GN_07_01 … MH_GN_07_06 | QT-01.21 … QT-01.26 |
| MH-01.05 | MH_GN_08_01 … MH_GN_08_08 | QT-01.27 … QT-01.34 |
| MH-01.06 | MH_GN_09_01 … MH_GN_09_07 | QT-01.35 … QT-01.41 |
| MH-01.07 | MH_GN_10_01 … MH_GN_10_07 | QT-01.42 … QT-01.48 |
| MH-01.08 | MH_GN_11_01 … MH_GN_11_07 | QT-01.49 … QT-01.55 |
| MH-01.09 | MH_GN_12_01 … MH_GN_12_06 | QT-01.56 … QT-01.61 |
| MH-01.10 | MH_GN_13_01 … MH_GN_13_09 | QT-01.62 … QT-01.70 |
| MH-01.11 | MH_GN_14_01 … MH_GN_14_06 | QT-01.71 … QT-01.76 |
| MH-01.12 | MH_GN_15_01 … MH_GN_15_08 | QT-01.77 … QT-01.84 |
| MH-01.13 | MH_GN_19_01 … MH_GN_19_09 | QT-01.85 … QT-01.93 |
| MH-01.14 | MH_GN_20_01 … MH_GN_20_07 | QT-01.94 … QT-01.100 |
| MH-01.15 | MH_GN_21_01 … MH_GN_21_08 | QT-01.101 … QT-01.108 |
| MH-01.16 | MH_GN_16_01 … MH_GN_16_08 | QT-01.109 … QT-01.116 |
| MH-01.17 | MH_GN_17_01 … MH_GN_17_08 | QT-01.117 … QT-01.124 |
| MH-01.18 | MH_GN_18_01 … MH_GN_18_07 | QT-01.125 … QT-01.131 |
| MH-02.01 | QT-1.01 … QT-1.04 | QT-02.01 … QT-02.04 |
| MH-02.03 | QT-F02-01 … QT-F02-07 | QT-02.05 … QT-02.11 |
| MH-02.04 | QT-F03-01 … QT-F03-07 | QT-02.12 … QT-02.18 |
| MH-02.05 | QT-F04-01 … QT-F04-12 | QT-02.19 … QT-02.27 |
| MH-02.06 | QT01 … QT05 | QT-02.28 … QT-02.32 |
| MH-02.07 | TT-01 … TT-02 | QT-02.33 … QT-02.34 |
| MH-02.08 | TT-01 … TT-09 | QT-02.35 … QT-02.42 |
| MH-02.09 | TT-01 … TT-10 | QT-02.43 … QT-02.51 |
| MH-02.10 | TT-01 … TT-14 | QT-02.52 … QT-02.64 |
| MH-02.11 | TT-01 … TT-8 | QT-02.65 … QT-02.72 |
| MH-04.02 | QT1.1 … QT1.3 | QT-04.01 … QT-04.03 |
| MH-04.01 | QT2.1 … QT2.3 | QT-04.04 … QT-04.06 |
| MH-04.03 | QT3.1 … QT3.4 | QT-04.07 … QT-04.10 |
| MH-04.04 | QT4.1 … QT4.4 | QT-04.11 … QT-04.14 |
| MH-04.05 | QT5.1 … QT5.4 | QT-04.15 … QT-04.18 |
| MH-05.01 | QTMH01-01 … QTMH01-03 | QT-05.01 … QT-05.03 |
| MH-05.02 | QTMH02-01 … QTMH02-03 | QT-05.04 … QT-05.06 |
| MH-05.03 | QTMH03-01 … QTMH03-02 | QT-05.07 … QT-05.08 |
| MH-05.04 | QTMH04-01 … QTMH04-02 | QT-05.09 … QT-05.10 |
| MH-05.05 | QTMH05-01 … QTMH05-02 | QT-05.11 … QT-05.12 |
| MH-05.06 | QTMH06-01 … QTMH06-02 | QT-05.13 … QT-05.14 |

Bảng 165. Đối chiếu dải mã quy tắc màn hình