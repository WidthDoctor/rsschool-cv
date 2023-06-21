const menu = document.querySelector(".menu");
const burger = document.querySelector('.burger_menu');
const HEADER = document.querySelector('header');


menu.addEventListener('click', function() {
  menuOFF();
  setTimeout(() => {
    HEADER.classList.add('little');
  }, 1000);
});


burger.addEventListener('click',function(){
  burgerOFF();
  HEADER.classList.remove('little');
})


function burgerOFF(){
  HEADER.classList.remove('little');
  burger.classList.add('hide');
  setTimeout(() => {
    burger.classList.add('none');
  }, 500);

  menu.classList.remove('none');
  setTimeout(() => {
    menu.classList.remove('hide');
  }, 500);
}

function menuOFF() {
  menu.classList.add('hide');
  setTimeout(() => {
    menu.classList.add('none');
  }, 500);
  setTimeout(() => {
    HEADER.classList.add('little');
  }, 1000);

  burger.classList.remove('none');
  setTimeout(() => {
    burger.classList.remove('hide');
  }, 500);
}




