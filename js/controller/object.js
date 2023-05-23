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
  _matKhau,
  _chucVu,
  _soDienThoai,
  _eMail,
  _diaChi,
  _ngayVaoLam,
  _mucLuong
) {
  this.idNhanVien = _idNhanVien;
  this.maNhanVien = _maNhanVien;
  this.tenNhanVien = _tenNhanVien;
  this.matKhau = _matKhau;
  this.chucVu = _chucVu;
  this.soDienThoai = _soDienThoai;
  this.eMail = _eMail;
  this.diaChi = _diaChi;
  this.ngayVaoLam = _ngayVaoLam;
  this.mucLuong = _mucLuong;
}
