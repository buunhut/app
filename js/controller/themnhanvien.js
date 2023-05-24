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
  var matKhau = document.getElementById("matKhau").value;
  var chucVu = document.getElementById("chucVu").value;
  var soDienThoai = document.getElementById("soDienThoai").value;
  var eMail = document.getElementById("eMail").value;
  var diaChi = document.getElementById("diaChi").value;
  var ngayVaoLam = document.getElementById("ngayVaoLam").value;
  var mucLuong = document.getElementById("mucLuong").value;
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
    checkRong(tenNhanVien, "tbTenNV", "tbTextTenNhanVien") &
    checkRong(matKhau, "tbMatKhau", "tbTextMatKhau") &
    checkRong(chucVu, "tbChucVu", "tbTextChucVu") &
    checkRong(soDienThoai, "tbSoDienThoai", "tbTextSoDienThoai") &
    checkRong(eMail, "tbEmail", "tbTextEmail") &
    checkRong(diaChi, "tbDiaChi", "tbTextDiaChi") &
    checkRong(ngayVaoLam, "tbNgayVaoLam", "tbTextNgayVaoLam") &
    checkRong(mucLuong, "tbMucLuong", "tbTextMucLuong") &


    checkKyTuChu(tenNhanVien, "tbTenNV", "tbTextTenNhanVien") &
    checkHoaDbSo(matKhau, "tbMatKhau", "tbTextMatKhau") &
    checkPhone(soDienThoai, "tbSoDienThoai", "tbTextSoDienThoai") &
    checkEmail(eMail, "tbEmail", "tbTextEmail") 
  if (!valid) {
    return;
  }

  //tạo ra các lớp object nhân viên, truyền giá trị lấy đc vào
  var nhanVien = new lopNhanVien(
    idNhanVien,
    maNhanVien,
    tenNhanVien,
    matKhau,
    chucVu,
    soDienThoai,
    eMail,
    diaChi,
    ngayVaoLam,
    mucLuong
  );
  return nhanVien;
}

//lấy thông tin chỉnh sửa
function layThongTinNhanVienDaSua() {
  //lấy dữ liệu từ inphut
  checkRong(tenNhanVien, "tbTenNV", "tbTextTenNhanVien") &
  checkRong(matKhau, "tbMatKhau", "tbTextMatKhau") &
  checkRong(chucVu, "tbChucVu", "tbTextChucVu") &
  checkRong(soDienThoai, "tbSoDienThoai", "tbTextSoDienThoai") &
  checkRong(eMail, "tbEmail", "tbTextEmail") &
  checkRong(diaChi, "tbDiaChi", "tbTextDiaChi") &
  checkRong(ngayVaoLam, "tbNgayVaoLam", "tbTextNgayVaoLam") &
  checkRong(mucLuong, "tbMucLuong", "tbTextMucLuong") &


  checkKyTuChu(tenNhanVien, "tbTenNV", "tbTextTenNhanVien") &
  checkHoaDbSo(matKhau, "tbMatKhau", "tbTextMatKhau") &
  checkPhone(soDienThoai, "tbSoDienThoai", "tbTextSoDienThoai") &
  checkEmail(eMail, "tbEmail", "tbTextEmail") 
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
    checkKyTuChu(tenNhanVien, "tbTenNV") &
    checkHoaDbSo(matKhau, "tbMatKhau") &
    checkRong(chucVu, "tbChucVu") &
    checkRong(soDienThoai, "tbSoDienThoai") &
    checkRong(eMail, "tbEmail") &
    checkRong(diaChi, "tbDiaChi") &
    checkRong(ngayVaoLam, "tbNgayVaoLam") &
    checkRong(mucLuong, "tbMucLuong") &
    checkPhone(soDienThoai, "tbSoDienThoai") &
    checkEmail(eMail, "tbEmail") 
  if (!valid) {
    return;
  }
  // tạo ra các lớp object nhân viên, truyền giá trị lấy đc sau chỉnh sửa vào
  var nhanVien = new lopNhanVien(
    idNhanVien,
    maNhanVien,
    tenNhanVien,
    matKhau,
    chucVu,
    soDienThoai,
    eMail,
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
  // document.querySelector(".mainForm").classList.toggle("show");
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
    duLieuInputNhanVien("", "", "", "", "", "", "", "", "", "");
  }
}

// chức năng sửa thông tin nhân viên, điền dữ liệu cũ lên ô input
function suaNhanVien(idNhanVien) {
  // xử lý các nút
  document.querySelector(".mainForm").classList.toggle("show");
  document.querySelector(".overlay").classList.toggle("visibility");
  document.querySelector(".themNhanVien").classList.add("none");
  document.querySelector(".capNhatThongTinNhanVien").classList.remove("none");
  var i = timViTri(idNhanVien);
  duLieuInputNhanVien(
    danhSachNhanVien[i].idNhanVien,
    danhSachNhanVien[i].maNhanVien,
    danhSachNhanVien[i].tenNhanVien,
    danhSachNhanVien[i].matKhau,
    danhSachNhanVien[i].chucVu,
    danhSachNhanVien[i].soDienThoai,
    danhSachNhanVien[i].eMail,
    danhSachNhanVien[i].diaChi,
    danhSachNhanVien[i].ngayVaoLam,
    danhSachNhanVien[i].mucLuong
  );
}

// chức năng cập nhật thông tin nhân viên
function capNhatThongTinNhanVien() {
  document.querySelector(".themNhanVien").classList.add("none");
  // document.querySelector(".capNhatThongTinNhanVien").classList.toggle("none");
  // document.querySelector(".mainForm").classList.toggle("show");
  // document.querySelector(".overlay").classList.toggle("visibility");
  nhanVienDaSua = layThongTinNhanVienDaSua();
  // tìm vị trí nhân viên cần sửa
  var index = timViTri(nhanVienDaSua.idNhanVien);
  // thay thế thông tin nhân viên đã sửa
  danhSachNhanVien[index] = nhanVienDaSua;
  // reset dữ liệu các ô input của form
  duLieuInputNhanVien("", "", "", "", "", "", "", "", "", "");
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
