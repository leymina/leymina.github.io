function showMenu(toggleId,menuId){
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    if(toggle && menu ){
        toggle.addEventListener("click", function(){
            menu.classList.toggle("active");
        })
    }
}
showMenu("burger","menu");

const heroSlider = new Swiper(".hero_container",{
 autoplay:{
     delay: 2000,
     disableOnInteraction:false,
 },
 loop:true,
 speed:1000,
 grabCursor:true,
 effect:'coverflow',
    coverflowEffect: {
      rotate: 30,
      strech:0,
      depth:100,
      modefier:1,
      slideShadows: true,
    },
  

    navigation:{
        nextEl:'.arrow-right',
        prevEl: '.arrow-left'

    },
});

const brawlStars = ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 1000,

})

brawlStars.reveal('.item-shop',{
    origin: 'bottom',
    interval: 200,
})
    
  
 