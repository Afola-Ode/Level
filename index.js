const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
});

// const slides = document.querySelectorAll(".slide-container");
// const prevBtn = document.querySelector(".prev-Btn");
// const nextBtn = document.querySelector(".next-Btn");

// slides.forEach(function(slide, index){
//     slide.style.left = `${index * 100}%`;
// });

// let counter = 0;
// nextBtn.addEventListener("click", function(){
//     counter++;
//     carousel();
// });
// prevBtn.addEventListener("click", function(){
//     counter--;
//     carousel();
// });

// function carousel(){
//     if(counter === slides.length){
//         counter = 0;
//     }
//     if(counter < 0){
//         counter = slides.length - 1;
//     }
//     slides.forEach(function(slide){
//         slide.style.transform = `translateX(-${counter*100}%)`;
//     })
// }

var slideIndex =1;
showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex = n)
}

function showSlides(n){
    var i;
    var slides = document.querySelectorAll(".slide-container");
    var dots = document.querySelectorAll("dot");
    if (n>slides.length){
        slideIndex = 1
    }
    if(n<1){
        slideIndex = slides.length
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display ="block";
}


//Testimonials
var testimonialIndex =1;
testimonialSlides(testimonialIndex);

function currentTestimonial(x){
    testimonialSlides(testimonialIndex = x)
}

function testimonialSlides(x){
    var z;
    var testimonials = document.querySelectorAll(".testimonial-container");
    var indicators = document.querySelectorAll("indicator");
    if (x>testimonials.length){
        testimonialIndex = 1
    }
    if(x<1){
        testimonialIndex = testimonials.length
    }
    for(z=0; z<testimonials.length; z++){
        testimonials[z].style.display = "none";
    }
    for(z=0; z<indicators.length; z++){
        indicators[z].className = indicators[z].className.replace(" active", "");
    }
    testimonials[testimonialIndex-1].style.display ="block";
    indicators[testimonialIndex-1].className +=" active";
}