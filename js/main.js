const plusbtn = document.getElementById('plus');
const minusbtn = document.getElementById('minus');
const quantityinp = document.getElementById('quantity');
const h2Display = document.getElementById('display')
const val = parseInt(document.querySelector('#quantity').value);

// let currentVal = 0;

// const defaultVal = val.defaultValue;
// let currentVal = parseInt(val.value);

// console.log(currentVal.value)



plusbtn.addEventListener('click', (e) => {
  h2Display.innerHTML = val
  console.log('plus');

  // for(let val = 1; val > 0; val++){
    // if(e == "plusbtn"){
      // h2Display.innerHTML = val
    // } else {
      // h2Display
    // }
  // }
})

minusbtn.addEventListener('click', (e) => {
  h2Display.innerHTML = val
  console.log('minus');
})
