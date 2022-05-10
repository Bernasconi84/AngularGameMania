let menu = document.getElementById("menu")
    function mostrarMenu() {
      if (menu.style.display == "none") {
        menu.style.display = "flex";
      } else {
        menu.style.display = "none"
      }
    }



    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 5,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    })


    