       // Image Slideshow
       let thumbnails = document.getElementsByClassName('thumbnail')
       let activeImages = document.getElementsByClassName('active')
       for (var i = 0; i < thumbnails.length; i++) {
           thumbnails[i].addEventListener('mouseover', function() {
               // if there are more than one active image, remove the first
               if (activeImages.length > 0) {
                   activeImages[0].classList.remove('active')
               }
               // on mouseover add active class to target
               this.classList.add('active')
                   // change current target to featured image
               document.getElementById('featured').src = this.src
           })
       }

       var slideIndex = 1;
       showSlides(slideIndex);

       // Next/previous controls
       function plusSlides(n) {
           showSlides(slideIndex += n);
       }

       // Thumbnail image controls
       function currentSlide(n) {
           showSlides(slideIndex = n);
       }

       function showSlides(n) {
           var i;
           var slides = document.getElementsByClassName("mySlides");
           var dots = document.getElementsByClassName("demo");
           var captionText = document.getElementById("caption");
           if (n > slides.length) {
               slideIndex = 1
           }
           if (n < 1) {
               slideIndex = slides.length
           }
           for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";
           }
           for (i = 0; i < dots.length; i++) {
               dots[i].className = dots[i].className.replace(" active", "");
           }
           slides[slideIndex - 1].style.display = "block";
           dots[slideIndex - 1].className += " active";
           captionText.innerHTML = dots[slideIndex - 1].alt;
       }

       // Video Slideshow
       var slideIndex = 1;
       showDivs(slideIndex);

       function plusDivs(n) {
           showDivs(slideIndex += n);
       }

       function showDivs(n) {
           var i;
           var x = document.getElementsByClassName("myVideoSlides");
           if (n > x.length) {
               slideIndex = 1
           }
           if (n < 1) {
               slideIndex = x.length
           }
           for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";
           }
           x[slideIndex - 1].style.display = "block";
       }


       $('#productCarousel').carousel({
           interval: 10000
       })

       $('.carousel .carousel-item').each(function() {
           var minPerSlide = 3;
           var next = $(this).next();
           if (!next.length) {
               next = $(this).siblings(':first');
           }
           next.children(':first-child').clone().appendTo($(this));

           for (var i = 0; i < minPerSlide; i++) {
               next = next.next();
               if (!next.length) {
                   next = $(this).siblings(':first');
               }

               next.children(':first-child').clone().appendTo($(this));
           }
       });