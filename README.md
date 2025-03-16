# WatchEase

WatchEase là một ứng dụng web giúp người dùng khám phá và tìm kiếm thông tin về các bộ phim. Ứng dụng được xây dựng bằng **ReactJS** và sử dụng API từ **The Movie Database (TMDB)** để cung cấp dữ liệu phim.

## Tính năng chính
- Tìm kiếm phim theo tên.
- Hiển thị danh sách phim phổ biến, phim mới ra mắt.
- Xem chi tiết thông tin phim (tóm tắt, diễn viên, đánh giá, trailer,...).
- Lưu danh sách phim yêu thích.
- Đề xuất phim dựa trên sở thích người dùng.
- Hỗ trợ lọc phim theo thể loại, năm phát hành.
- Giao diện thân thiện, dễ sử dụng.

## Công nghệ sử dụng
- **ReactJS**: Xây dựng giao diện người dùng.
- **Axios**: Gửi yêu cầu API đến TMDB.
- **React Router**: Điều hướng giữa các trang.
- **Ant Design**: Thiết kế giao diện.

## Thông tin về The Movie Database (TMDB)
[The Movie Database (TMDB)](https://www.themoviedb.org/) là một cơ sở dữ liệu phim cộng đồng, cung cấp thông tin chi tiết về phim và chương trình truyền hình, bao gồm:
- **Tìm kiếm phim, chương trình truyền hình và diễn viên**.
- **Xếp hạng và đánh giá phim** từ cộng đồng.
- **Danh sách phim phổ biến, phim mới ra mắt và phim sắp chiếu**.
- **Thông tin chi tiết về phim**, bao gồm mô tả, diễn viên, trailer, poster, thể loại, và ngày phát hành.
- **API mạnh mẽ** cho phép nhà phát triển tích hợp dữ liệu vào ứng dụng.
- **Tạo và quản lý danh sách phim cá nhân**.

## Cách cài đặt và chạy dự án
### 1. Clone repository
```sh
git clone https://github.com/phihungvo/WatchEase.git
cd watchease
```
### 2. Cài đặt dependencies
```sh
npm install
```
### 3. Cấu hình API Key
- Đăng ký tài khoản tại [The Movie Database](https://www.themoviedb.org/).
- Lấy API key từ [Developer Settings](https://www.themoviedb.org/settings/api).
- Tạo file `.env` trong thư mục gốc và thêm API key:
```env
REACT_APP_TMDB_API_KEY=your_api_key_here
```
### 4. Chạy ứng dụng
```sh
npm start
```
Ứng dụng sẽ chạy tại `http://localhost:3000/`.


