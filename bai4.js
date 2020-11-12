function nut() {
    var x, y ;
    x=new Date().getFullYear();
    y= hi.txtnamsinh.value
    d=document.getElementById("demo");
    if(y>x){
        document.getElementById("demo").innerHTML='Mời bạn nhập lại , Năm sinh không quá năm hiện tại';
    }
    else{
        var z= x-y;
        //  document.getElementById("demo").innerHTML= "Tuổi của bạn là "+ z +".";
      if(z%2){
         d.innerHTML= "Tuổi của bạn là "+ z +" Kq cua ban la: Le";
         d.style.color = "blue";
         }
  
      else{
        d.innerHTML= "Tuổi của bạn là "+ z +" Kq cua ban la : Chan"; 
        d.style.color ="red";
      }
        
    }
  }
  
