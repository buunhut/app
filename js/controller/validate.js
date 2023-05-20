//check rỗng
function checkRong(checkInput, idThongbao) {
  if (checkInput == "") {
    document.getElementById(idThongbao).style.color = "red";
    return false;
  } else {
    document.getElementById(idThongbao).style.color = "black";
    return true;
  }
}
// check number

function checkEmail(checkInput) {
  let pattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return pattern.test(checkInput);
}
var a = checkEmail("nhut@gmail.com");
// console.log(a);

// định dạnh number
function dinhDangSo(n) {
  n = document.getElementById("mucLuong").value;
  //chỉ lấy số từ input
  var chiLaySo = /[0-9]/g;
  var number = "";
  var checkInput = n.match(chiLaySo);
  console.log(checkInput);
  if (checkInput) {
    checkInput.forEach(function (item) {
      number += item;
      checkInput = number;
    });
    checkInput = checkInput.toString();
  }
  document.getElementById("mucLuong").value = Number(checkInput).toLocaleString();
  return checkInput;
}

