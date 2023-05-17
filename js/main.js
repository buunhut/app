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

// nhập hàng
var danhSachNhap = [];
function renderNhapHang() {
  var content = [];
  var stt = 0;
  for (var i = 0; i < danhSachNhap.length; i++) {
    stt++;
    var nhapHang = danhSachNhap[i];
    content += `  
    <tr>
      <td class="number">${stt}</td>
      <td>${nhapHang.tenSanPham}</td>
      <td class="number">${nhapHang.soLuong.toLocaleString()}</td>
      <td class="number">${nhapHang.donGia.toLocaleString()}</td>
      <td class="number">${nhapHang.thanhTien()}</td>
      <td>
        <button class="sua" onclick="suaNhapHang('${nhapHang.tenSanPham}')">
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button class="xoa" onclick="xoaNhapHang('${nhapHang.tenSanPham}')">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>  
    `;
  }
  document.getElementById("tblDanhSachSanPham").innerHTML = content;
}
// nhập hàng
function nhapHang() {
  // lấy dữ liệu từ người dùng nhập vào
  var _tenSanPham = document.getElementById("tenSanPham").value;
  var _soLuong = Number(document.getElementById("soLuong").value);
  var _donGia = Number(document.getElementById("donGia").value);
  // lưu dữ liệu vào lớp object
  var nhapHang = new NhapHang(_tenSanPham, _soLuong, _donGia);
  // truyền object vào mảng
  danhSachNhap.push(nhapHang);
  console.log(danhSachNhap);
  // render ra trình duyệt
  renderNhapHang();
}
// xóa nhập hàng
function xoaNhapHang(tenSanPhamMuonXoa){
  var indexSanPhamMuonXoa = -1;
  for(var i = 0; i < danhSachNhap.length; i++){
    if(danhSachNhap[i].tenSanPham == tenSanPhamMuonXoa){
      indexSanPhamMuonXoa = i;
      break;
    }
  }
  console.log(indexSanPhamMuonXoa);
  danhSachNhap.splice(indexSanPhamMuonXoa,1);
  renderNhapHang();
}

// thêm nhân viên
// gán giá trị cho ô input, dùng reset dữ liệu trên form và eidt
function duLieuInputNhanVien(
  maNhanVien,
  tenNhanVien,
  chucVu,
  soDienThoai,
  diaChi,
  ngayVaoLam,
  mucLuong,
){
  document.getElementById("maNhanVien").value = maNhanVien;
  document.getElementById("tenNhanVien").value = tenNhanVien;
  document.getElementById("chucVu").value = chucVu;
  document.getElementById("soDienThoai").value = soDienThoai;
  document.getElementById("diaChi").value = diaChi;
  document.getElementById("ngayVaoLam").value = ngayVaoLam;
  document.getElementById("mucLuong").value = mucLuong;
}


// render danh sách nhân viên ra màn hình
function renderDanhSachNhanVien(){
  // tạo list nhân viên hứng dữ liệu để render
  var listNhanVien = [];
  danhSachNhanVien.forEach(function(item, index){
    listNhanVien += `
      <tr>
        <td>${item.maNhanVien}</td>
        <td>${item.tenNhanVien}</td>
        <td>${item.chucVu}</td>
        <td>${item.soDienThoai}</td>
        <td>${item.diaChi}</td>
        <td>${item.ngayVaoLam}</td>
        <td class="number">${item.mucLuong.toLocaleString()}</td>
        <td>
            <button class="sua" onclick="suaNhanVien('${item.maNhanVien}')">
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class="xoa" onclick="xoaNhanVien('${item.maNhanVien}')">
              <i class="fa-solid fa-trash-can"></i>
            </button>
        </td>
      </tr>    
    `
  });
  document.getElementById("listNhanVien").innerHTML = listNhanVien;
}


// lớp object nhân viên
function lopNhanVien(
  _maNhanVien,
  _tenNhanVien,
  _chucVu,
  _soDienThoai,
  _diaChi,
  _ngayVaoLam,
  _mucLuong,
){
  this.maNhanVien = _maNhanVien;
  this.tenNhanVien = _tenNhanVien;
  this.chucVu = _chucVu;
  this.soDienThoai = _soDienThoai;
  this.diaChi = _diaChi;
  this.ngayVaoLam = _ngayVaoLam;
  this.mucLuong =  _mucLuong;
}
var danhSachNhanVien = [];
function themNhanVien(){
  //lấy dữ liệu từ inphut
  var maNhanVien = document.getElementById("maNhanVien").value;
  var tenNhanVien = document.getElementById("tenNhanVien").value;
  var chucVu = document.getElementById("chucVu").value;
  var soDienThoai = document.getElementById("soDienThoai").value;
  var diaChi = document.getElementById("diaChi").value;
  var ngayVaoLam = document.getElementById("ngayVaoLam").value;
  var mucLuong = Number(document.getElementById("mucLuong").value);
  // tạo ra các lớp object nhân viên
  var nhanVien = new lopNhanVien(
    maNhanVien,
    tenNhanVien,
    chucVu,
    soDienThoai,
    diaChi,
    ngayVaoLam,
    mucLuong,
  )
  // truyền lớp nhân viên vừa tạo ra vào trong danh sách nhân viên
  danhSachNhanVien.push(nhanVien);

  // reset dữ liệu các ô input của form
  duLieuInputNhanVien("","","","","","","");

  //renderDanhSachNhanVien ra màn hình
  renderDanhSachNhanVien();

  




}