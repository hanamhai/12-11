function KQ(){
    var x, y, z;
    x= hai.toan.value;
    y= hai.van.value;
    z= hai.anh.value;
    d=document.getElementById("test");
    var t=(x+y+z);
    var tb=t/3;
    if(9<=tb & tb<=10){
        return d.innerHTML="Xuất Sắc";
    }
    if(6.5<=tb & tb<7){
        d.innerHTML="Khá";
    }
    if(7<=tb & tb<=8.9){
        d.innerHTML="Giỏi";
    }
    if(5<=tb & tb<6.5){
        d.innerHTML="Trung Bình";
    }
    if(tb<5){
        d.innerHTML="Yếu";
    }
}