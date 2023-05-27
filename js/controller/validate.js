//check rỗng
function checkRong(id, idThongBao, idThongBaoText) {
  var text = document.getElementById(id).value;
  if (text == "") {
    document.getElementById(idThongBao).style.color = "red";
    document.getElementById(idThongBaoText).innerHTML = "Vui lòng nhập dữ liệu";
    document.getElementById(idThongBaoText).classList.remove("none");
    return false;
  } else {
    document.getElementById(idThongBao).style.color = "black";
    document.getElementById(idThongBaoText).innerHTML = "";
    document.getElementById(idThongBaoText).classList.add("none");
    return true;
  }
}

// check tên, check ký tự a đến z, ko lấy số
function checkTen(id, idThongBao, idThongBaoText) {
  var ten = document.getElementById(id).value;
  if (ten == "") {
    document.getElementById(idThongBao).style.color = "red";
    document.getElementById(idThongBaoText).innerHTML = "Vui lòng nhập dữ liệu";
    document.getElementById(idThongBaoText).classList.remove("none");
    return false;
  } else {
    document.getElementById(idThongBao).style.color = "black";
    document.getElementById(idThongBaoText).innerHTML = "";
    document.getElementById(idThongBaoText).classList.add("none");
    
    var chiLayText = /^[\p{L} ]+$/u;
    if (chiLayText.test(ten) == false) {
      document.getElementById(idThongBao).style.color = "red";
      document.getElementById(idThongBaoText).innerHTML = "Không được chứa ký tự đặc biệt hoặc số";
      document.getElementById(idThongBaoText).classList.remove("none");
        return false;
    } else {
      document.getElementById(idThongBao).style.color = "black";
      document.getElementById(idThongBaoText).innerHTML = "";
      document.getElementById(idThongBaoText).classList.add("none");
  
      return true;
    }
  }
}

//check mật khẩu
function checkPass(id, idThongBao, idThongBaoText) {
  var value = document.getElementById(id).value;
  if (value == "") {
    document.getElementById(idThongBao).style.color = "red";
    document.getElementById(idThongBaoText).innerHTML = "Vui lòng nhập dữ liệu";
    document.getElementById(idThongBaoText).classList.remove("none");
    return false;
  } else {
    document.getElementById(idThongBao).style.color = "black";
    document.getElementById(idThongBaoText).innerHTML = "";
    document.getElementById(idThongBaoText).classList.add("none");
    var checkKyTuDacBiet = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var chiLaySo = /[0-9]/g;
    var checkKyTuHoa = /[A-Z]/;
    if (
      value.length >= 6 &&
      value.length <= 20 &&
      value.match(checkKyTuDacBiet) &&
      value.match(chiLaySo) &&
      value.match(checkKyTuHoa)
    ) {
      document.getElementById("tbMatKhau").style.color = "black";
      document.getElementById("tbTextMatKhau").innerHTML = "";
      document.getElementById("tbTextMatKhau").classList.add("none");
      return true;
    } else {
      document.getElementById("tbMatKhau").style.color = "red";
      document.getElementById("tbTextMatKhau").innerHTML =
        "Chứa 6 - 20 ký tự, gồm ký tự hoa, số và ký tự đặc biệt";
      document.getElementById("tbTextMatKhau").classList.remove("none");
      return false;
    }
  }
}

// check số điện thoại
function checkPhone(id, idThongBao, idThongBaoText) {
  var phone = document.getElementById(id).value;
  if (phone == "") {
    document.getElementById(idThongBao).style.color = "red";
    document.getElementById(idThongBaoText).innerHTML = "Vui lòng nhập dữ liệu";
    document.getElementById(idThongBaoText).classList.remove("none");
    return false;
  } else {
    var regNumber = /^[0-9]+$/;
    var checkPhone = regNumber.test(phone);
    // console.log(checkPhone);
    if (checkPhone == false || phone.length < 9 || phone.length > 12) {
      document.getElementById(idThongBao).style.color = "red";
      document.getElementById(idThongBaoText).innerHTML = "Chỉ chứa 9 - 11 ký tự số";
      document.getElementById(idThongBaoText).classList.remove("none");
        return false;
    } else {
      document.getElementById(idThongBao).style.color = "black";
      document.getElementById(idThongBaoText).innerHTML = "";
      document.getElementById(idThongBaoText).classList.add("none");
      return true;
    }
  }
}

// check email
function checkEmail(id, idThongBao, idThongBaoText) {
  var email = document.getElementById(id).value;
  if (email == "") {
    document.getElementById(idThongBao).style.color = "red";
    document.getElementById(idThongBaoText).innerHTML = "Vui lòng nhập dữ liệu";
    document.getElementById(idThongBaoText).classList.remove("none");
    return false;
  } else {
    let pattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var checkEmail = pattern.test(email);
    if (checkEmail == false) {
      document.getElementById(idThongBao).style.color = "red";
      document.getElementById(idThongBaoText).innerHTML = "Nhập sai định dạng Email";
      document.getElementById(idThongBaoText).classList.remove("none"); 
      return false; // false
    } else {
      document.getElementById(idThongBao).style.color = "black";
      document.getElementById(idThongBaoText).innerHTML = "";
      document.getElementById(idThongBaoText).classList.add("none");
      return true;
    }
  }
}

// // check luong
function checkLuong(id, idThongBao, idThongBaoText) {
  var text = document.getElementById(id).value;
  var luong = text.replaceAll(/[.,]/g, '');
  var luong = text.replaceAll(/[.,]/g, '');

  if (luong == "") {
    document.getElementById(idThongBao).style.color = "red";
    document.getElementById(idThongBaoText).innerHTML = "Vui lòng nhập dữ liệu";
    document.getElementById(idThongBaoText).classList.remove("none");
    return false;
  } else {
    if (
      luong >= 1000000 &&
      luong <= 20000000
    ) {
      document.getElementById(idThongBao).style.color = "black";
      document.getElementById(idThongBaoText).innerHTML = "";
      document.getElementById(idThongBaoText).classList.add("none");
      return true;
    } else {
      document.getElementById(idThongBao).style.color = "red";
      document.getElementById(idThongBaoText).innerHTML =
        "Lương từ 1 triệu đến 20 triệu";
      document.getElementById(idThongBaoText).classList.remove("none");
      return false;
    }
  }
}

// định dạnh number
function onKeyUpDinhDangSo(idCheck) {
  n = document.getElementById(idCheck).value;
  //chỉ lấy số từ input
  var chiLaySo = /[0-9]/g;
  var number = "";
  var checkInput = n.match(chiLaySo);
  if (checkInput) {
    checkInput.forEach(function (item) {
      number += item;
      checkInput = number;
    });
    checkInput = checkInput.toString();
  }

  document.getElementById(idCheck).value = Number(checkInput).toLocaleString();
  return checkInput;
}


// demo
text = "10.000.0000.000";
var luong = text.replaceAll(/[.,]/g, '');
console.log(luong);