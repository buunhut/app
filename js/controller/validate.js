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
