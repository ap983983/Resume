// const numb = document.querySelector(".key");


// let counter = 0;
// setInterval(() => {
//   if(counter == 3 ){
//     clearInterval();
//   }else{
//     counter+=1;
//     numb.textContent = counter + "%";
//   }
// }, 10);

// Can also be included with a regular script tag
import Typed from 'typed.js';

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

var typed = new Typed('.text-style', options);