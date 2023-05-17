// tạo lớp object
function NhapHang (
    _tenSanPham,
    _soLuong,
    _donGia,
){
    this.tenSanPham = _tenSanPham;
    this.soLuong = _soLuong;
    this.donGia = _donGia;
    this.thanhTien = function(){
        return (this.soLuong * this.donGia).toLocaleString();
    }
}