var slides = document.querySelectorAll('.ad-group .ad'); // grab all slides from container
var currentSlide = 0; // keep track of current slide 
var slideInterval = setInterval(nextSlide, 8000); // show slide every 8seconds
var next = document.querySelector('.next');
var previous = document.querySelector('.previous');


function goToSlide(n) {
  slides[currentSlide].className = 'ad';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'ad active-ad';
}

function nextSlide() {
  goToSlide(currentSlide+1);
}

function previousSlide() {
  goToSlide(currentSlide-1);
}

next.onclick = function() {
  nextSlide();
}
previous.onclick = function() {
  previousSlide();
}
