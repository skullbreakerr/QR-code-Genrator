const button = document.getElementById("generateQR");


function generateQR(event){
  event.preventDefault();
   var chartAPI="https://chart.googleapis.com/chart?cht=qr&chs";
  var inputext = document.getElementById("inputext").value;
  var imgsize =document.getElementById("imgsize").value;
  var qr=document.getElementById("img");
  qr.src = chartAPI+"="+imgsize+"x"+imgsize+"&chl="+inputext;

//   if(imgsize=='150'){
//      qr.src = chartAPI+"150x150&chl="+inputext;     
//   }else if(imgsize=='250'){
//       qr.src = chartAPI+"250x250&chl="+inputext;     
//   }else if(imgsize=='350'){
//      qr.src = chartAPI+"350x350&chl="+inputext;     
//   }else if(imgsize=='450'){
//      qr.src = chartAPI+"450x450&chl="+inputext;     
//   }else if(imgsize=='550'){
//      qr.src = chartAPI+"550x550&chl="+inputext;     
//   }else{
//      qr.src = chartAPI+"250x250&chl=QRcode+Generator++Develop+by:+Dharmik+Patel";
//   }
}

button.addEventListener('click',generateQR);