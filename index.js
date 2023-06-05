import './style.css';
const button = document.getElementById('generateQR');
const scanqrcode = document.getElementById('scanQR');

function generateQR(event) {
  event.preventDefault();
  var chartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs';
  var inputext = document.getElementById('inputext').value;
  var imgsize = document.getElementById('imgsize').value;
  var qr = document.getElementById('img');
  if (inputext === '') {
    qr.src =
      chartAPI +
      '=' +
      imgsize +
      'x' +
      imgsize +
      '&chl=QRcode+Generator++Develop+by:+Dharmik+Patel';
  } else {
    qr.src = chartAPI + '=' + imgsize + 'x' + imgsize + '&chl=' + inputext;
  } 
}

const scanQR= (event)=>{
   event.preventDefault();
   var currentss = document.getElementById('qr-generator');
   var newss = document.getElementById('qr-scanner');

   currentss.classList.add("hidden");
   newss.classList.remove("hidden");
} 

scanqrcode.addEventListener('click',scanQR);
button.addEventListener('click', generateQR);


// Head Text Effect//
const textElement = document.getElementById('text');
const words = ['Generator','Scanner'];

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

// QR Scanner
const config = {
  inputStream: {
    name: "Live",
    type: "LiveStream",
    target: "#camera",
    constraints: {
      facingMode: "environment", // Use the back camera
    },
  },
  decoder: {
    readers:["code_128_reader", "ean_reader", "upc_reader", "qr_code_reader"], // Specify the desired barcode readers
  },
};

// Initialize Quagga with the configuration
Quagga.init(config, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  Quagga.start();
});

// Detecting QR code //
Quagga.onDetected( result => {
  const code = result.codeResult.code;
  document.getElementById("result").value = code;
});
