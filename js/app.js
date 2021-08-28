

function selectId(selection){
  return document.getElementById(selection)
}

// search form js
let searchIcon = selectId('search-icon')
let searchForm = selectId('search-form')
searchIcon.addEventListener('click', function(){
  searchForm.classList.toggle('show-form')
})

// owl carouse hero section
$('.hero .owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  autoplay: true,
  autoplayHoverPause:true,
  navigator: true,
  nav: true,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:1
      },
      992:{
        items: 1
      }
  }
});

// product tab carousel
$('.product-tab .owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  autoplay: true,
  autoplayHoverPause:false,
  navigator: false,
  nav: true,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:3
      },
      992:{
        items: 4
      }
  }
});
// brand carouse
$('.brand .owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  autoplay: true,
  autoplayHoverPause:false,
  navigator: false,
  nav: true,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      576:{
        items: 2
      },
      768:{
          items:3
      },
      992:{
        items: 5
      }
  }
});

// aos jquery plugin
AOS.init({ 
  easing: 'ease',
  duration: 1000,
  once: false
})