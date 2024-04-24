document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector( "#mntk_mmenu" ),
            "(max-width: 991px)"
        );

        const navigator = menu.navigation();
        const drawer = menu.offcanvas();

        document.querySelector( "a[href='#mntk_mmenu']" )
            .addEventListener( "click", ( evnt ) => {
                evnt.preventDefault();
                drawer.open();
        });
    }
);


$('.open_search').on('click', function(event){
    event.stopPropagation();
  
    $('.search_block').toggleClass('visible');
    $('.search_block .search_input').focus();
  });
  
  $('body').on('click', function(){
    $('.search_block').removeClass('visible');
  });
  
  $('.search_box').on('click', function(event){
    event.stopPropagation();
  });
  
  $('.search_input').on('keyup', function(event){
    if($(this).val() !== ''){
      $(this).addClass('typing');
    } else {
      $(this).removeClass('typing');
    }
});




const tabButtons = document.querySelectorAll('.tab-btn')

tabButtons.forEach((tab) => {
  tab.addEventListener('click', () => tabClicked(tab))
})

function tabClicked(tab) {
  
  tabButtons.forEach(tab => {
    tab.classList.remove('active')
  })
  tab.classList.add('active')
  
  const contents = document.querySelectorAll('.content')
  
  contents.forEach((content) => {
    content.classList.remove('show')
  })
  
  const contentId = tab.getAttribute('content-id')
  const contentSelected = document.getElementById(contentId)
  
  contentSelected.classList.add('show')
  //console.log(contentId)
}




(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
}());



$('.gallerySlide').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });