var thumbnail = document.getElementsByClassName("js-thumbnail");
var arrow = document.getElementsByClassName("js-arrow");
var slideIndex = 1;

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

(function() {
    if (thumbnail.length || arrow.length) {
        addEventListeners();
    }          
})();