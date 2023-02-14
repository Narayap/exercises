const text = ['Hello!', 'Welcome to my website.', 'I hope you enjoy your stay.'];
let i = 0;
let speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text[i].charAt(0);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
