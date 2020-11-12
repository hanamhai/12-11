function BMI(){
    var a = document.getElementById("ten").value;
    document.getElementById("test").innerHTML = a;
    var b = document.getElementById("tuoi").value;
    
    var x,y;
    x= bmi.cao.value
    y= bmi.nang.value
    d=document.getElementById("test");
    var z= x/100;
    var w=y/(z*2);
    d.innerHTML="tuoi $(b)"
    if (w<18.5){
        d.style.color="yellow";
        d.innerHTML=`Bạn đang gầy và có nguy cơ phát triển bệnh mức thấp ${w}\n`+ `tuoi ${b}`;
    }
    if (18.5<=w & w<=24.9){
        d.style.color="green";
        d.innerHTML=`Bạn đang cân đối và có nguy cơ phát triển bệnh mức trung bình ${w}\n`+ `tuoi ${b}`;
    }
    if (25<=w & w<=29.9){
        d.style.color="green";
        d.innerHTML=`Bạn đang hơi béo và có nguy cơ phát triển bệnh mức cao ${w}\n`+ `tuoi ${b}`;
       
    }
    if (30<=w & w<=34.9){
        d.style.color="red";
        d.innerHTML=`Bạn đang béo phì cấp độ 1 và có nguy cơ phát triển bệnh mức cao ${w}\n`+ `tuoi ${b}`;
    }
    if (35<=w & w<=39.9){
        d.style.color="red";
        d.innerHTML=`Bạn đang Béo phì cấp độ 2 và có nguy cơ phát triển bệnh mức rất cao ${w}\n`+ `tuoi ${b}`;
    }
    if (w>=40){
        d.style.color="red";
        d.innerHTML=`Bạn đang Béo phì cấp độ 3 và có nguy cơ phát triển bệnh mức nguy hiểm ${w}\n`+ `tuoi ${b}`;
    }
    
}
// function BMI(){
//     var a = document.getElementById("ten").value;
//     document.getElementById("test").innerHTML = a;
//     var b = document.getElementById("tuoi").value;
//     document.getElementById("test").innerHTML = b;
// }