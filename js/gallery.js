function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

document.body.addEventListener('keypress', function(e) {
    if(e.key == "Escape"){
      closeModal ();
    }
    if(e.key == "ArrowRight"){
      plusSlides(1);
    }
    if(e.key == "ArrowLeft"){
      plusSlides(-1);
    }
});
