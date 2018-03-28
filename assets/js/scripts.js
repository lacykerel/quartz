var slides = document.querySelectorAll('.ad-group .ad'); // grab all slides from container
var currentSlide = 0; // keep track of current slide 
var slideInterval = setInterval(nextSlide, 8000); // show slide every 8seconds
var next = document.querySelector('.next');
var previous = document.querySelector('.previous');
var slideCount = slides.length;

document.querySelector('.slideCount').innerHTML = currentSlide + 1 +'/'+ slideCount;

$('.video-icon').on('click', function(){
  var videoId = $(this).data('video');
  $('video').get(videoId).play();
});

$('.video-section video').on('play', function() {
  clearInterval(slideInterval);
  $('.video-icon').css('display', 'none');
});

$('.video-section video').on('pause', function() {
  $('.video-icon').css('display', 'block');
});

$('.video-section video').on('pause', function() {
  slideInterval = setInterval(nextSlide, 8000);
});

function goToSlide(n) {  
  slides[currentSlide].className = 'ad';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'ad active-ad';
  document.querySelector('.slideCount').innerHTML = currentSlide + 1 +'/'+ slideCount;
  $('.video').get(n).pause();

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
