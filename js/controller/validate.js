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
  console.log(checkPhone);
  if(checkPhone == false){
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
function dinhDangSo(idCheck) {
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
  return checkInput;
}

