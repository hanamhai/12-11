var w3 ={};
w3.toggleShow = function (sel) {
    var i, x = w3.getElements(sel), l = x.length;
    for (i = 0; i < l; i++) {    
      if (x[i].style.display == "none") {
        w3.styleElement(x[i], "display", "block");
      } else {
        w3.styleElement(x[i], "display", "none");
      }
    }
};