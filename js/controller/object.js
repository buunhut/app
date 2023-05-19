// tạo lớp object trang nhập hàng
function NhapHang(_tenSanPham, _soLuong, _donGia) {
  this.tenSanPham = _tenSanPham;
  this.soLuong = _soLuong;
  this.donGia = _donGia;
  this.thanhTien = function () {
    return (this.soLuong * this.donGia).toLocaleString();
  };
}
// tạo lớp object trang nhân viên
function lopNhanVien(
  _idNhanVien,
  _maNhanVien,
  _tenNhanVien,
  _chucVu,
  _soDienThoai,
  _diaChi,
  _ngayVaoLam,
  _mucLuong
) {
  this.idNhanVien = _idNhanVien;
  this.maNhanVien = _maNhanVien;
  this.tenNhanVien = _tenNhanVien;
  this.chucVu = _chucVu;
  this.soDienThoai = _soDienThoai;
  this.diaChi = _diaChi;
  this.ngayVaoLam = _ngayVaoLam;
  this.mucLuong = _mucLuong;
}
