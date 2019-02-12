var thumbnail = document.getElementsByClassName("js-thumbnail");
var arrow = document.getElementsByClassName("js-arrow");
var slideIndex = 1;

var hamburgerIcon = document.getElementsByClassName("js-mobile-menu");
var close = document.getElementsByClassName("js-close");

function addEventListeners() {    
    for (var i = 0; i < thumbnail.length; i++) {
        thumbnail[i].addEventListener("click", function() {
            var thumbnailIndex = parseInt(this.getAttribute("data-index"));
            changeMainImage(slideIndex = thumbnailIndex);
        });
    }

    for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", function(e) {
            e.preventDefault();

            var increment = parseInt(this.getAttribute("data-increment"));
            changeMainImage(slideIndex += increment);
        });
    }
}    

function arrowMainImage(n) {
    changeMainImage(slideIndex += n);
}

function changeMainImage(n) {
    var slide = document.getElementsByClassName("js-slide");

    if (n > slide.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slide.length;
    }
    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (var j = 0; j < thumbnail.length; j++) {
        thumbnail[j].className = thumbnail[j].className.replace(" opacity-off", "");
    }
    slide[slideIndex-1].style.display = "block";
    thumbnail[slideIndex-1].className += " opacity-off";
}

function mobileMenu () {
    var nav = document.getElementsByClassName("nav")[0];

    hamburgerIcon[0].addEventListener("click", function() {
        nav.classList.toggle("active");
    });

    for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function(){
            if (nav.classList.contains("active")) {
                nav.classList.remove("active");
            }
        });
    }
}

(function() {
    if (thumbnail.length || arrow.length) {
        addEventListeners();
    }     

    if (hamburgerIcon.offsetParent !== null) {
        mobileMenu();
    }

    var scroll = new SmoothScroll('.js-smooth-scroll', {
        speed: 500,
        speedAsDuration: true
    });
})();