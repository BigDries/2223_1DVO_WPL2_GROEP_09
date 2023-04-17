// carousel 
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const rotateButton = document.querySelector('#rotate-button');
const positionButtons = document.querySelectorAll('.position-button');

let currentPosition = 0;

// positie items carousel
for (let i = 0; i < carouselItems.length; i++) 
{
  carouselItems[i].style.transform = `rotate(${i * (360 / carouselItems.length)}deg) translateX(250px) rotate(${-i * (360 / carouselItems.length)}deg)`;
}

// roteren carousel button click
rotateButton.addEventListener('click', () => 
{
  currentPosition -= (360 / carouselItems.length);
  carousel.style.transform = `rotate(${currentPosition}deg)`;
});

// set carousel position on button click
for (let i = 0; i < positionButtons.length; i++) 
{
  positionButtons[i].addEventListener('click', () => 
  {
    currentPosition = -(i * (360 / carouselItems.length));
    carousel.style.transform = `rotate(${currentPosition}deg)`;
  });
}