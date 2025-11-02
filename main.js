const descText =
  "Is an engineering student. A friendly dev who loves learning and creating fun things from web technology to embedded systems...";
const descElem = document.getElementById("description");
const words = descText.split(" ");
let i = 0;

function showWord() {
  if (i < words.length) {
    descElem.innerHTML += (i === 0 ? "" : " ") + words[i];
    i++;
    setTimeout(showWord, 150);
  }
}
window.addEventListener("load", () => {
  setTimeout(showWord, 300);
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Kiểm tra theme đã lưu
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeIcon.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// // Portfolio Button Toast
// const portfolioBtn = document.getElementById("portfolioBtn");
// const toast = document.getElementById("toast");

// portfolioBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   // Nếu toast đang hiển thị, reset lại để tạo hiệu ứng lại
//   toast.classList.remove("show");
//   void toast.offsetWidth; // trick để reset animation

//   toast.classList.add("show");

//   // Ẩn toast sau 3 giây
//   setTimeout(() => {
//     toast.classList.remove("show");
//   }, 3000);
// });

function showToast(message, type = 'info') {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  // Chọn icon theo loại
  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "error") icon = "❌";

  toast.innerHTML = `
    <span class="icon">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Tự động xóa sau 4 giây
  setTimeout(() => toast.remove(), 4000);
}

document.getElementById("portfolioBtn").addEventListener("click", (e) => {
  e.preventDefault();
  showToast("Portfolio sẽ sớm được cập nhật!", "info");
});

// 🔌 Kiểm tra kết nối Internet
function updateConnectionStatus() {
  if (navigator.onLine) {
    showToast("Kết nối Internet đã được khôi phục!", "success");
  } else {
    showToast("Mất kết nối Internet!", "error");
  }
}

// Lắng nghe sự kiện online/offline
window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

// Kiểm tra trạng thái ban đầu khi tải trang
window.addEventListener("load", () => {
  if (!navigator.onLine) {
    showToast("Hiện đang offline!", "error");
  }
});
