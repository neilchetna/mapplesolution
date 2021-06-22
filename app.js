// var i = 0;
// var image = [];
// var time = 3000;

// image[0] = "../images/iPhone-01.png";
// image[1] = "../images/apple watch-01.png";

// function changeImg() {
//   document.slidea.src = image[i];

//   document.slideb.src = image[i - 1];

//   if (i < image.length - 1) {
//     i = i + 1;
//   } else {
//     i = 0;
//   }
//   setTimeout("changeImg()", time);
// }
// window.onload = changeImg;
setTimeout(function () {
  let activeSlide = document.querySelector(".slide.translate-x-0");
  activeSlide.classList.remove("translate-x-0");
  activeSlide.classList.add("-translate-x-full");

  let nextSlide = activeSlide.nextElementSibling;
  nextSlide.classList.remove("translate-x-full");
  nextSlide.classList.add("translate-x-0");
}, 3000);
