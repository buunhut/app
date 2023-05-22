// trang nhập hàng
// render giao diện
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

// trang nhân thêm nhân viên
// render danh sách nhân viên ra màn hình
function renderDanhSachNhanVien() {
  // tạo list nhân viên hứng dữ liệu để render
  var listNhanVien = [];
  danhSachNhanVien.forEach(function (item, index) {
    listNhanVien += `
        <tr>
          <td class="tblIdNhanVien none">${item.idNhanVien}</td>
          <td class="tblMaNhanVien">${item.maNhanVien}</td>
          <td class="tblTenNhanVien">${item.tenNhanVien}</td>
          <td class="tblChucVu"">${item.chucVu}</td>
          <td class="tblDienThoai">${item.soDienThoai}</td>
          <td class="tblEmail">${item.eMail}</td>
          <td class="tblDiaChi">${item.diaChi}</td>
          <td class="tblNgayVao">${item.ngayVaoLam}</td>
          <td class="tblMucLuong">${item.mucLuong.toLocaleString()}</td>
          <td class="tblThaoTac">
              <button class="sua" onclick="suaNhanVien('${item.idNhanVien}')">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <button class="xoa" onclick="xoaNhanVien('${item.idNhanVien}')">
                <i class="fa-solid fa-trash-can"></i>
              </button>
          </td>
        </tr>    
      `;
  });
  document.getElementById("listNhanVien").innerHTML = listNhanVien;
}

// gán giá trị cho ô input, dùng reset dữ liệu trên form và eidt
function duLieuInputNhanVien(
  idNhanVien,
  maNhanVien,
  tenNhanVien,
  chucVu,
  soDienThoai,
  eMail,
  diaChi,
  ngayVaoLam,
  mucLuong
) {
  document.getElementById("idNhanVien").value = idNhanVien;
  document.getElementById("maNhanVien").value = maNhanVien;
  document.getElementById("tenNhanVien").value = tenNhanVien;
  document.getElementById("chucVu").value = chucVu;
  document.getElementById("soDienThoai").value = soDienThoai;
  document.getElementById("eMail").value = eMail;
  document.getElementById("diaChi").value = diaChi;
  document.getElementById("ngayVaoLam").value = ngayVaoLam;
  document.getElementById("mucLuong").value = mucLuong;
}

// function tìm vị trí
function timViTri(idNhanVien) {
  // lấy mã nhân viên tìm ra vị trí index của nhân viên đó trong mảng danhSachNhanVien
  for (var i = 0; i < danhSachNhanVien.length; i++) {
    if (danhSachNhanVien[i].idNhanVien == idNhanVien) {
      var index = i;
      break;
    }
  }
  return index;
}
// lưu vào local storage
function saveToStorage(danhSachNhanVien) {
  localStorage.setItem("listnhanvien", JSON.stringify(danhSachNhanVien));
}

// get dữ liệu từ local storage
function getFromStorage() {
  var listNhanVien = JSON.parse(localStorage.getItem("listnhanvien"));
  if (listNhanVien != null) {
    danhSachNhanVien = listNhanVien;
  }
}
