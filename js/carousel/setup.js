$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        350:{
            items:2
        },
        450:{
            items:3
        },
        650:{
            items:4
        },
        1000:{
            items:6
        }
    }
});

function accordions(id) {
    var accordion = document.getElementById(id);
    if (accordion.className.indexOf("w3-show") == -1) {
      accordion.className += " w3-show";
    } else { 
      accordion.className = accordion.className.replace(" w3-show", "");
    }
  }