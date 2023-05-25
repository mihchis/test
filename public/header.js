window.onload = function () {
  var gioiThieu = document.getElementById("gioithieu");
  var dichvu = document.getElementById("dichvu");
  var sanpham = document.getElementById("sanpham");
  var lienhe = document.getElementById("lienhe");

  if (window.location.hash === "#gioithieu" && gioiThieu) {
    window.scrollTo(0, gioiThieu.offsetTop);
  } else if (window.location.hash === "#dichvu" && dichvu) {
    window.scrollTo(0, dichvu.offsetTop);
  } else if (window.location.hash === "#sanpham" && sanpham) {
    window.scrollTo(0, sanpham.offsetTop);
  } else if (window.location.hash === "#lienhe" && lienhe) {
    window.scrollTo(0, lienhe.offsetTop);
  }
};
