// xử lý menu
var topMenu = document.querySelector(".top");
var mainMenu = document.querySelector(".mainMenu");
var menu = document.querySelector(".menuItem");
var menuUl = document.querySelector(".menuItem ul");
var barOpen = document.querySelector(".bar i:first-child");
var barClose = document.querySelector(".bar i:last-child");
var clickNhapHang = document.querySelector(".mainMenu .nhap");
var clickXuatHang = document.querySelector(".mainMenu .xuat");
var clickKhoHang = document.querySelector(".mainMenu .kho");
var clickQuanLy = document.querySelector(".mainMenu .quanly");
//click nhập hàng
clickNhapHang.onclick = function () {
  document.querySelector(".nhap").classList.toggle("height220");
  document.querySelector(".nhap .dropdown").classList.toggle("block");

  document.querySelector(".xuat").classList.remove("height220");
  document.querySelector(".xuat .dropdown").classList.remove("block");

  document.querySelector(".kho").classList.remove("height220");
  document.querySelector(".kho .dropdown").classList.remove("block");

  document.querySelector(".quanly").classList.remove("height220");
  document.querySelector(".quanly .dropdown").classList.remove("block");
};
//click xuất hàng
clickXuatHang.onclick = function () {
  document.querySelector(".nhap").classList.remove("height220");
  document.querySelector(".nhap .dropdown").classList.remove("block");

  document.querySelector(".xuat").classList.toggle("height220");
  document.querySelector(".xuat .dropdown").classList.toggle("block");

  document.querySelector(".kho").classList.remove("height220");
  document.querySelector(".kho .dropdown").classList.remove("block");

  document.querySelector(".quanly").classList.remove("height220");
  document.querySelector(".quanly .dropdown").classList.remove("block");
};
//click kho hàng
clickKhoHang.onclick = function () {
  document.querySelector(".nhap").classList.remove("height220");
  document.querySelector(".nhap .dropdown").classList.remove("block");

  document.querySelector(".xuat").classList.remove("height220");
  document.querySelector(".xuat .dropdown").classList.remove("block");

  document.querySelector(".kho").classList.toggle("height220");
  document.querySelector(".kho .dropdown").classList.toggle("block");

  document.querySelector(".quanly").classList.remove("height220");
  document.querySelector(".quanly .dropdown").classList.remove("block");
};
//click quản lý
clickQuanLy.onclick = function () {
  document.querySelector(".nhap").classList.remove("height220");
  document.querySelector(".nhap .dropdown").classList.remove("block");

  document.querySelector(".xuat").classList.remove("height220");
  document.querySelector(".xuat .dropdown").classList.remove("block");

  document.querySelector(".kho").classList.remove("height220");
  document.querySelector(".kho .dropdown").classList.remove("block");

  document.querySelector(".quanly").classList.toggle("height220");
  document.querySelector(".quanly .dropdown").classList.toggle("block");
};
// var overlay = document.querySelector(".overlay");
var myBody = document.querySelector("body");
//tạo function bắt resize màn hình, truyền vào tham số breakpoint
function resizeWindow(breakpoint) {
  // xử lý khi chạm điểm breakpoint, bằng .matches
  if (breakpoint.matches) {
    // chạm breakpoint
    // mainMenu.classList.add("fixTop");
    topMenu.classList.add("none");
    menuUl.classList.add("none");
    barOpen.classList.remove("none");
    barClose.classList.add("none");
    // overlay.classList.add("none");
  } else {
    // chưa chạm breakpoint
    topMenu.classList.remove("none");
    menu.classList.remove("heightAuto");
    menuUl.classList.remove("none");
    barOpen.classList.add("none");
    barClose.classList.add("none");
    // overlay.classList.add("none");
    myBody.classList.remove("lockScroll");
  }
}
// tạo biến chưa giá trị breakpoint
var breakpoint = window.matchMedia("(max-width: 992px)");
// chạy function resizeWindow, lúc không thay đổi kích thước
resizeWindow(breakpoint);
// bắt thuộc tính khi thay đổi giá trị breakpoint
breakpoint.addEventListener("change", () => {
  resizeWindow(breakpoint);
});
// click bar xổ ra menu
barOpen.onclick = function () {
  barOpen.classList.add("none");
  barClose.classList.remove("none");
  menu.classList.toggle("heightAuto");
  menuUl.classList.toggle("none");
  // overlay.classList.toggle("none");
  myBody.classList.toggle("lockScroll");
};
barClose.onclick = function () {
  barOpen.classList.remove("none");
  barClose.classList.add("none");
  menu.classList.toggle("heightAuto");
  menuUl.classList.toggle("none");
  // overlay.classList.toggle("none");
  myBody.classList.toggle("lockScroll");
};
// backToTop
var toTop = document.querySelector(".toTop");
// bắt sự kiện lăn chuột bằng window.onscroll

window.onscroll = function () {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    toTop.style.display = "block";
    mainMenu.classList.add("fixTop");
  } else {
    toTop.style.display = "none";
    mainMenu.classList.remove("fixTop");
  }
};

toTop.onclick = function () {
  document.body.scrollTop = 0; // chạy Safari
  document.documentElement.scrollTop = 0; // chạy Chrome, Firefox, IE and Opera
};
