
const button = document.querySelectorAll("[data-button]");
const content = document.querySelectorAll("[data-content ");
const color = document.querySelectorAll(".tabs__btn--active");
 
button.forEach (function (item) {
    item.addEventListener("click" , function(){
    
       content.forEach(function(item){
              item.classList.remove("hidden")
         
       });
       const box = document.querySelector("#" + this.dataset.button)
       box.classList.add("hidden")
    });
});

const buttonBurger = document.querySelector("#button")
const buttonContent = document.querySelector("[data-burger]")

buttonBurger.addEventListener("click" , function(){
      buttonContent.classList.toggle("menu-list--active")
});

const swiper = new Swiper('.swiper', {
    autoplay: true,
    loop: true,
    pagination: {
        effect: "fade",
        el: '.swiper-pagination',
    },

});
