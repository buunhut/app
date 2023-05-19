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
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
function xoaNhapHang(tenSanPhamMuonXoa) {
  var indexSanPhamMuonXoa = -1;
  for (var i = 0; i < danhSachNhap.length; i++) {
    if (danhSachNhap[i].tenSanPham == tenSanPhamMuonXoa) {
      indexSanPhamMuonXoa = i;
      break;
    }
  }
  console.log(indexSanPhamMuonXoa);
  danhSachNhap.splice(indexSanPhamMuonXoa, 1);
  renderNhapHang();
}

// trang thêm nhân viên

// nút tạo thêm nhân viên
function show() {
  document.querySelector(".nhanVienForm").classList.toggle("show");
  document.querySelector(".overlay").classList.toggle("visibility");
  document.querySelector(".themNhanVien").classList.remove("none");
  document.querySelector(".capNhatThongTinNhanVien").classList.add("none");
}

//  nút overlay
function overLay() {
  document.querySelector(".nhanVienForm").classList.toggle("show");
  document.querySelector(".overlay").classList.toggle("visibility");
  duLieuInputNhanVien("", "", "", "", "", "", "", "", "");
}

// trang thêm nhân viên
var danhSachNhanVien = [];

//lấy dữ liệu từ local lên
getFromStorage();
// console.log(danhSachNhanVien);

//render ra giao diện
renderDanhSachNhanVien();

// lấy dữ thông tin nhân viên
function layThongTinNhanVien() {
  var checkIdNhanVien = document.querySelectorAll(
    "#listNhanVien tr td.tblIdNhanVien"
  );
  var idNhanVien = 0;
  if (checkIdNhanVien.length == 0) {
    idNhanVien = 1;
  } else {
    idNhanVien = Number(checkIdNhanVien[0].innerHTML) + 1;
  }
  //lấy dữ liệu từ inphut
  var tenNhanVien = document.getElementById("tenNhanVien").value;
  var chucVu = document.getElementById("chucVu").value;
  var soDienThoai = document.getElementById("soDienThoai").value;
  var diaChi = document.getElementById("diaChi").value;
  var ngayVaoLam = document.getElementById("ngayVaoLam").value;
  var mucLuong = Number(document.getElementById("mucLuong").value);
  if (chucVu == "Quản lý") {
    var maNhanVien = "ql0" + idNhanVien;
  } else if (chucVu == "Phục vụ") {
    var maNhanVien = "pv0" + idNhanVien;
  } else if (chucVu == "Giao hàng") {
    var maNhanVien = "gh0" + idNhanVien;
  } else {
    var maNhanVien = "nv0" + idNhanVien;
  }
  //check validate
  var valid = true;
  valid =
    checkRong(tenNhanVien, "tbTenNV") &
    checkRong(chucVu, "tbChucVu") &
    checkRong(soDienThoai, "tbSoDienThoai") &
    checkRong(diaChi, "tbSoDiaChi") &
    checkRong(ngayVaoLam, "tbNgayVaoLam") &
    checkRong(mucLuong, "tbMucLuong");
  if (!valid) {
    return;
  }

  //tạo ra các lớp object nhân viên, truyền giá trị lấy đc vào
  var nhanVien = new lopNhanVien(
    idNhanVien,
    maNhanVien,
    tenNhanVien,
    chucVu,
    soDienThoai,
    diaChi,
    ngayVaoLam,
    mucLuong
  );
  return nhanVien;
}

//lấy thông tin chỉnh sửa
function layThongTinNhanVienDaSua() {
  //lấy dữ liệu từ inphut
  var idNhanVien = document.getElementById("idNhanVien").value;
  var maNhanVien = document.getElementById("maNhanVien").value;
  var tenNhanVien = document.getElementById("tenNhanVien").value;
  var chucVu = document.getElementById("chucVu").value;
  var soDienThoai = document.getElementById("soDienThoai").value;
  var diaChi = document.getElementById("diaChi").value;
  var ngayVaoLam = document.getElementById("ngayVaoLam").value;
  var mucLuong = Number(document.getElementById("mucLuong").value);
  if (chucVu == "Quản lý") {
    var maNhanVien = "ql0" + idNhanVien;
  } else if (chucVu == "Phục vụ") {
    var maNhanVien = "pv0" + idNhanVien;
  } else if (chucVu == "Giao hàng") {
    var maNhanVien = "gh0" + idNhanVien;
  } else {
    var maNhanVien = "nv0" + idNhanVien;
  }
  //check validate
  var valid = true;
  valid =
    checkRong(tenNhanVien, "tbTenNV") &
    checkRong(chucVu, "tbChucVu") &
    checkRong(soDienThoai, "tbSoDienThoai") &
    checkRong(diaChi, "tbSoDiaChi") &
    checkRong(ngayVaoLam, "tbNgayVaoLam") &
    checkRong(mucLuong, "tbMucLuong");
  if (!valid) {
    return;
  }
  // tạo ra các lớp object nhân viên, truyền giá trị lấy đc sau chỉnh sửa vào
  var nhanVien = new lopNhanVien(
    idNhanVien,
    maNhanVien,
    tenNhanVien,
    chucVu,
    soDienThoai,
    diaChi,
    ngayVaoLam,
    mucLuong
  );
  return nhanVien;
}

//chức năng thêm nhân viên
function themNhanVien() {
  document.querySelector(".capNhatThongTinNhanVien").classList.add("none");
  // document.querySelector(".themNhanVien").classList.remove("none");
  // document.querySelector(".nhanVienForm").classList.toggle("show");
  // document.querySelector(".overlay").classList.toggle("visibility");

  // lấy thông tin nhân viên được nhập từ ô input
  var nhanVien = layThongTinNhanVien();

  // nếu check ko thành công thì ko xóa bảo giá trị input
  if (nhanVien) {
    // truyền lớp nhân viên vừa tạo ra vào trong danh sách nhân viên
    danhSachNhanVien.unshift(nhanVien);

    //lưu vào storage
    saveToStorage(danhSachNhanVien);

    //renderDanhSachNhanVien ra màn hình
    renderDanhSachNhanVien();

    // reset dữ liệu các ô input của form
    duLieuInputNhanVien("", "", "", "", "", "", "", "", "");
  }
}

// chức năng sửa thông tin nhân viên, điền dữ liệu cũ lên ô input
function suaNhanVien(idNhanVien) {
  // xử lý các nút
  document.querySelector(".nhanVienForm").classList.toggle("show");
  document.querySelector(".overlay").classList.toggle("visibility");
  document.querySelector(".themNhanVien").classList.add("none");
  document.querySelector(".capNhatThongTinNhanVien").classList.remove("none");
  var i = timViTri(idNhanVien);
  duLieuInputNhanVien(
    danhSachNhanVien[i].idNhanVien,
    danhSachNhanVien[i].maNhanVien,
    danhSachNhanVien[i].tenNhanVien,
    danhSachNhanVien[i].chucVu,
    danhSachNhanVien[i].soDienThoai,
    danhSachNhanVien[i].diaChi,
    danhSachNhanVien[i].ngayVaoLam,
    danhSachNhanVien[i].mucLuong
  );
}

// chức năng cập nhật thông tin nhân viên
function capNhatThongTinNhanVien() {
  document.querySelector(".themNhanVien").classList.add("none");
  // document.querySelector(".capNhatThongTinNhanVien").classList.toggle("none");
  // document.querySelector(".nhanVienForm").classList.toggle("show");
  // document.querySelector(".overlay").classList.toggle("visibility");
  nhanVienDaSua = layThongTinNhanVienDaSua();
  // tìm vị trí nhân viên cần sửa
  var index = timViTri(nhanVienDaSua.idNhanVien);
  // thay thế thông tin nhân viên đã sửa
  danhSachNhanVien[index] = nhanVienDaSua;
  // reset dữ liệu các ô input của form
  duLieuInputNhanVien("", "", "", "", "", "", "", "");
  //lưu vào storage
  saveToStorage(danhSachNhanVien);
  renderDanhSachNhanVien();
}

// chức năng xóa nhân viên
function xoaNhanVien(idNhanVien) {
  var i = timViTri(idNhanVien);
  var tenNhanVienMuonXoa = danhSachNhanVien[i].tenNhanVien;
  var xacNhanXoa = confirm(
    "Bạn có chắc muốn xóa nhân viên tên " +
      tenNhanVienMuonXoa.toUpperCase() +
      " ?"
  );
  if (xacNhanXoa == true) {
    danhSachNhanVien.splice(i, 1);
    //lưu vào storage
    saveToStorage(danhSachNhanVien);
    renderDanhSachNhanVien();
  }
}
