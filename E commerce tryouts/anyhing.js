let cartQuantity = 0;
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');
let button5 = document.querySelector('.button5');
let button6 = document.querySelector('.button6');
let button7 = document.querySelector('.button7');

button1.addEventListener('click',()=>{
  createAlert(cartQuantity);


});
button2.addEventListener('click',()=>{
  cartQuantity = cartQuantity+1;
  createAlert(cartQuantity);

});

button3.addEventListener('click',()=>{
  cartQuantity = cartQuantity+2;
  createAlert(cartQuantity);

});
button4.addEventListener('click',()=>{
  cartQuantity = cartQuantity+3;
  createAlert(cartQuantity);

});
button5.addEventListener('click',()=>{
  cartQuantity = cartQuantity+5;
  createAlert(cartQuantity);

});
button6.addEventListener('click',()=>{
  cartQuantity = cartQuantity+6;
  createAlert(cartQuantity);

});


button7.addEventListener('click',()=>{
  cartQuantity = 0;
  createAlert(cartQuantity)
})


function createAlert(cart){
  alert(`Cart quantity is ${cart}`);

}

