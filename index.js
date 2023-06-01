function generateQR(){
  var chartAPI="https://chart.googleapis.com/chart?cht=qr&chs=";
  var inputext = document.getElementById("inputext").value;
  var imgsize =document.getElementById("imgsize").value;
  var qr=document.getElementById("img");

  if(inputext!=null && imgsize=='150'){
     qr.src = chartAPI+"150x150&chl="+inputext;     
  }else if(inputext!=null&&imgsize=='250'){
      qr.src = chartAPI+"250x250&chl="+inputext;     
  }else if(inputext!=null&&imgsize=='350'){
     qr.src = chartAPI+"350x350&chl="+inputext;     
  }else if(inputext!=null&&imgsize=='450'){
     qr.src = chartAPI+"450x450&chl="+inputext;     
  }else if(inputext!=null&&imgsize=='550'){
     qr.src = chartAPI+"550x550&chl="+inputext;     
  }else{
      windows.alert("Empty text field");
  }
}