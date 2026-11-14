var slideIndex = [];

function initPage (cId) {
  for (let i = 0; i < cId; i++){
    slideIndex[i] = 1;
  }
  for (let i = 0; i < slideIndex.length; i++) {
    showSlides(i, slideIndex[0]);
  }
}

function plusSlides(cId, n) {
  showSlides(cId, slideIndex[cId] += n);
}

function currentSlide(cId, n) {
  showSlides(cId, slideIndex[cId] = n);
}

function showSlides(cId, n) {
   var slides = document.getElementsByClassName(cId + "-images");
   var dots = document.getElementsByClassName(cId + "-demo");
   if (n > slides.length) {
     slideIndex[cId] = 1;
   }
   if (n < 1) {
     slideIndex[cId] = slides.length;
   }
   for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
   slides[slideIndex[cId]-1].style.display = "block";
}
