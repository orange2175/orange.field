var img_src = new Array(“cre_img/sui.png”,”img/sample2.png”,”img/sample3.png”);
var i = 0;

function henkou() {

    if (i == 2) {
      i = 0;
    } else {
      i ++;
    }
    document.getElementById(“image_file”).src = img_src[i];
  }