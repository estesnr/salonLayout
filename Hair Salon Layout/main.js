// let opacity = 0
// let intervalID = 0

// window.onload = fadeIn();

// function fadeIn() {
//     setInterval(show, 200);
// }

// function show() {
//     let body = document.querySelector('main');

//     opacity = Number(window.getComputedStyle(body).getPropertyValue('opacity'))

//     if(opacity < 1) {
//         opacity = opacity + 0.1;
//     }
//     else {
//         clearInterval(intervalID)
//     }
// }

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n)
// }

// function showSlides(n) {
//     let slides = document.querySelector('#slides');
//     // if(n > slides.length) {
//     //     slideIndex = 1
//     // }
//     // if(n < 1) {
//     //     slideIndex = slides.length;
//     // }
//     slides[slideIndex-1].style.display = "block"

// }