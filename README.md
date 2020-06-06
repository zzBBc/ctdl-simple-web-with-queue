# ctdl-simple-web-with-queue
A simple web (Spring Boot, Reactjs) use queue

- Giao diện admin (chưa có authentication) quản lý các bài đăng mới:
  + Delete: dequeue
  + Update: dequeue và thêm vào danh sách bài đăng trong giao diện người dùng
  
- Giao diện người dùng hiện thị bài đăng:
  + Danh sách các bài đăng, từng bài đăng cụ thể
  + Sắp xếp theo thời gian đăng, sắp xếp theo lượt xem nhiều nhất
  + Thêm bài đăng (enqueue) vào giao diện admin
  
* Chưa sử dụng csdl
