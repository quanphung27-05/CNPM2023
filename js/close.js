// Lấy tham chiếu đến nút xoá và ô nhập liệu comment
const clearBtn = document.getElementById("clear-comment");
const commentInput = document.getElementById("comment-input");

// Gắn sự kiện click vào nút xoá
clearBtn.addEventListener("click", function() {
  // Xóa nội dung trong ô comment
  commentInput.value = "";
});