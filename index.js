import './style.css';
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

const textElement = document.getElementById('text');
const words = ['QR Code Generator'];

let wordIndex = 0;
let letterIndex = 0;

function typeText() {
  if (letterIndex < words[wordIndex].length) {
    textElement.textContent += words[wordIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(typeText, Math.floor(Math.random() * 200) + 100); // Adjust typing speed here
  } else {
    setTimeout(eraseText, 1000); // Adjust the delay before erasing here
  }
}

function eraseText() {
  if (letterIndex >= 0) {
    textElement.textContent = words[wordIndex].substring(0, letterIndex);
    letterIndex--;
    setTimeout(eraseText, 50); // Adjust erasing speed here
  } else {
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
    setTimeout(typeText, 500); // Adjust the delay before typing the next word here
  }
}

typeText();
