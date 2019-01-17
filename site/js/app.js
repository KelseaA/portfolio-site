var thumbnail = document.getElementsByClassName("js-thumbnail");

function addEventListener() {    
    for (var i = 0; i < thumbnail.length; i++) {
        thumbnail[i].addEventListener("click", function() {
            var thumbnailIndex = this.getAttribute("data-index");
            changeMainImage(slideIndex = thumbnailIndex);
        });
    }
}    

function changeMainImage(thumbnailIndex) {
    var slide = document.getElementsByClassName("js-slide");

    if (thumbnailIndex > slide.length) {
        slideIndex = 1;
    }
    if (thumbnailIndex < 1) {
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
    if (thumbnail.length) {
        addEventListener();
    }          
})();