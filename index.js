        // star rating

function insertStar(containerId, svgCode){
    document.getElementById(containerId).innerHTML += svgCode;

}

const fullStar = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 24 24" fill="#FFD700">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>`
;

const emptyStar = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>`
;

const halfStar = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">

<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />


<polygon points="12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FFD700" />
</svg>`
;

let stars = 4;

for(let i =0 ; i < stars; i++){
    insertStar('star-rtng', fullStar);
    insertStar('star-rtng2', fullStar);
    insertStar('star-rtng6', fullStar);
    insertStar('star-rtng7', fullStar);
    insertStar('star-rtng9', fullStar);
    insertStar('star-rtng12', fullStar);
    insertStar('star-rtng13', fullStar);
}
insertStar('star-rtng',emptyStar);
insertStar('star-rtng7',emptyStar);
insertStar('star-rtng9',emptyStar);
insertStar('star-rtng12',emptyStar);
insertStar('star-rtng2',halfStar);
insertStar('star-rtng6',halfStar);
insertStar('star-rtng13',halfStar);

stars = 5;

for ( let i = 0; i< stars; i++){
    insertStar('star-rtng3',fullStar);
    insertStar('star-rtng5',fullStar);
    insertStar('star-rtng10',fullStar);
    insertStar('star-rtng11',fullStar);
}

stars = 3;

for ( let i = 0; i< stars; i++){
    insertStar('star-rtng4',fullStar);
    insertStar('star-rtng8',fullStar);
}
insertStar('star-rtng4',halfStar);
insertStar('star-rtng4',emptyStar);
insertStar('star-rtng8',emptyStar);
insertStar('star-rtng8',emptyStar);

// let clicked = false;
// let cart = document.querySelector(".cart");
// cart.addEventListener("click",()=>{
//     if(clicked == false){
//         clicked == true;
//         cart.classList.add("click");
//     }

//     else{
//         clicked = false;
//         cart.classList.remove("click");
       
        
//     }
   
// })

  

const modal = document.getElementById('modal');
const closeModal = document.querySelector('#close')
const openModal = document.querySelector('.open')



closeModal.addEventListener('click',()=>{
 modal.closeModal();
})

openModal.addEventListener('click',()=>{
 modal.showModal();
})



var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    slidesPerView: 4,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  


  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper2-pagination",
        clickable: true,
    },
  
});