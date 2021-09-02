'use strict'

const btn1 = document.querySelector(`#btn1`);

 btn1.addEventListener('click',() => {
  alert('button number is 1')
 });

 const  btn2 = document.querySelector(`#btn2`);

 btn2.addEventListener('mouseover',() => {
  alert('button number is 2')
});

 const btn3 = document.querySelector(`#btn3`);

 btn3.addEventListener('mouseout',() => {
  alert('button number is 3')
 });

document.querySelector('#btn1').style.backgroundColor = 'yellow';
document.querySelector('#btn2').style.backgroundColor = 'grey';
document.querySelector('#btn3').style.backgroundColor = 'purple';



const block = document.querySelector('#block');

block.style.cssText = 'BackGround-Color : beige; width : 250px' ;


const text = document.querySelectorAll(`p`);

text.forEach(item => {
 item.style.color = 'LightBlue'
});


const div = document.querySelector('#block')

 const firstChild = div.firstElementChild
console.log(firstChild)

