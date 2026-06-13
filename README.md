# Video Feed App

## Logic Play/Pause khi cuộn trang

Sử dùng IntersectionObserver gắn vào thẻ <video> để theo dõi xem video có đang hiển thị trên màn hình không. Đặt threshold: 0.7 tức là video phải hiện ít nhất 70% thì mới tính là đang xem.

- Cuộn tới, video vào viewport đủ 70% → gọi video.play()
- Cuộn qua, video ra khỏi viewport → gọi video.pause()

video để muted mặc định vì trình duyệt chặn autoplay có tiếng – có nút loa để bật tiếng thủ công.
