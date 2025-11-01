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

function showToast() {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = "toast";

  toast.innerHTML = `
    <span class="icon">ℹ️</span>
    <span>Portfolio sẽ sớm được cập nhật!</span>
  `;

  container.appendChild(toast);

  // Tự động xóa sau 4 giây
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Gắn sự kiện khi nhấn nút "Portfolio"
document.getElementsByClassName("portfolio-wrapper").addEventListener("click", (e) => {
  e.preventDefault(); // Ngăn chuyển trang
  showToast();
});
