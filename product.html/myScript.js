// Lắng nghe sự kiện scroll trên trang web
window.addEventListener('scroll', function() {
    var backToTopBtn = document.querySelector('.back-to-top-btn');
    // Nếu thanh cuộn lớn hơn 100px thì hiển thị nút triển lên trang đầu
    if (window.pageYOffset > 100) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });