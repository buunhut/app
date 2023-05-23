//check rỗng
function checkRong(checkInput, idThongBao) {
  if (checkInput == "") {
    document.getElementById(idThongBao).style.color = "red";
    return false;
  } else {
    document.getElementById(idThongBao).style.color = "black";
    return true;
  }
}

// check số điện thoại
function checkPhone(phone, idThongBao){
  var regNumber = /^[0-9]+$/;
  var checkPhone = regNumber.test(phone);
  // console.log(checkPhone);
  if(checkPhone == false || phone.length < 9 || phone.length > 12){
    document.getElementById(idThongBao).style.color = "red";
  }
  return checkPhone;
}


// check email
function checkEmail(email, idThongBao) {
  var email = document.getElementById("eMail").value;
  let pattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    var checkEmail = pattern.test(email);
    // console.log(checkEmail)
    
    if(checkEmail == false){
      document.getElementById(idThongBao).style.color = "red";
    }  
    return pattern.test(email); // false
}

// định dạnh number
function onKeyUpDinhDangSo(idCheck) {
  n = document.getElementById(idCheck).value;
  //chỉ lấy số từ input
  var chiLaySo = /[0-9]/g;
  var number = "";
  var checkInput = n.match(chiLaySo);
  // console.log(checkInput);
  if (checkInput) {
    checkInput.forEach(function (item) {
      number += item;
      checkInput = number;
    });
    checkInput = checkInput.toString();
  }
  document.getElementById(idCheck).value = Number(checkInput).toLocaleString();
  document.getElementById("tbMucLuong").style.color = "black";
  return checkInput;
}

// check ký tự a đến z, ko lấy số
function checkKyTuChu(text, idThongBao){
  var chiLayText = /^[\p{L} ]+$/u;
  if(chiLayText.test(text) == false){
    document.getElementById(idThongBao).style.color = "red";
  }
  return chiLayText.test(text);
  }

// check ký tự đặc biệt + số + chữ in hoa
function checkHoaDbSo(value, idThongBao){
var checkKyTuDacBiet = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
var chiLaySo = /[0-9]/g;
var checkKyTuHoa = /[A-Z]/ ;
 
var kq = "";
if(value.length > 6 && value.length <= 10 
  && value.match(checkKyTuDacBiet) && value.match(chiLaySo) 
  && value.match(checkKyTuHoa)){
  kq = true;
  document.getElementById(idThongBao).style.color = "black";

} else {
  kq = false; 
  document.getElementById(idThongBao).style.color = "red";
}
// console.log(kq);
return kq;
}


// check onchange password
function onChangePass(){
  var value = document.getElementById("matKhau").value;
  var checkKyTuDacBiet = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var chiLaySo = /[0-9]/g;
  var checkKyTuHoa = /[A-Z]/ ;
   
  if(value.length >= 6 && value.length <= 10 && value.match(checkKyTuDacBiet) && value.match(chiLaySo) && value.match(checkKyTuHoa)){
    document.getElementById("tbMatKhau").style.color = "black";
    document.getElementById("tbTextMatKhau").innerHTML = "";
    document.getElementById("tbTextMatKhau").classList.add("none");
  } else {
    document.getElementById("tbMatKhau").style.color = "red";
    document.getElementById("tbTextMatKhau").innerHTML = "Ít nhất 6 ký tự, gồm ký tự hoa và ký tự đặc biệt";
    document.getElementById("tbTextMatKhau").classList.remove("none");
    }
}
// onchange số điện thoại
function onChangeSoDienThoai(){
  var phone = document.getElementById("soDienThoai").value;
  var regNumber = /^[0-9]+$/;
  var checkPhone = regNumber.test(phone);
  if(checkPhone == false || phone.length < 9 || phone.length > 11){
    document.getElementById("tbSoDienThoai").style.color = "red";
    document.getElementById("tbTextSoDienThoai").innerHTML = "Chỉ chứa 9 - 11 ký tự số";
    document.getElementById("tbTextSoDienThoai").classList.remove("none");
  } else {
    document.getElementById("tbSoDienThoai").style.color = "black";
    document.getElementById("tbTextSoDienThoai").innerHTML = "";
    document.getElementById("tbTextSoDienThoai").classList.add("none");
  }

}
// onchange tên nhân viên
function onChangeTenNhanVien(){
  var tenNhanVien = document.getElementById("tenNhanVien").value;
  var checkKyTuDacBiet = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var chiLaySo = /[0-9]/g;
  if(tenNhanVien.match(checkKyTuDacBiet) || tenNhanVien.match(chiLaySo)){
    document.getElementById("tbTenNV").style.color = "red";
    document.getElementById("tbTextTenNhanVien").innerHTML = "không được chứa ký tự đặc biệt hoặc số";
    document.getElementById("tbTextTenNhanVien").classList.remove("none");
  } else {
    document.getElementById("tbTenNV").style.color = "black";
    document.getElementById("tbTextTenNhanVien").innerHTML = "";
    document.getElementById("tbTextTenNhanVien").classList.add("none");
  }
}
// onchange email
function onChangeEmail(){
  var email = document.getElementById("eMail").value;
  let pattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    var checkEmail = pattern.test(email);
    // console.log(checkEmail)
    
    if(checkEmail == false){
      document.getElementById("tbEmail").style.color = "red";
      document.getElementById("tbTextEmail").innerHTML = "Địa chỉ Email không hợp lệ";
      document.getElementById("tbTextEmail").classList.remove("none");
      } else {
        document.getElementById("tbEmail").style.color = "black";
        document.getElementById("tbTextEmail").innerHTML = "";
        document.getElementById("tbTextEmail").classList.add("none");
      }
}
// onchange rỗng
function onChangeCheckRong(id, idTb){
  var text = document.getElementById(id).value;
  if(text == ""){
    document.getElementById(idTb).style.color = "red";
  } else {
    document.getElementById(idTb).style.color = "black";
  }

}
