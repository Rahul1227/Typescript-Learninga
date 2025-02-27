"use strict";
console.log(`This is the learning of TypeScript`);
const displayArea = document.getElementById('display');
const bttn = document.getElementById('clickButton');
// if (displayArea instanceof HTMLElement) {
//     displayArea.innerHTML = '<h4>TypeScript is the lang</h4>';
// } else {
//     console.error('Element with id "display" not found');
// }
displayArea.innerHTML = '<h4>TypeScript is the lang</h4>';
bttn.innerHTML = `<h1>Bhag yahan se</h1>`;
bttn.addEventListener('click', () => {
    displayArea.innerHTML = `<h2>Bhaga nahi abhi tak</h2>`;
    displayArea.style.color = 'red';
});
// if(bttn instanceof HTMLElement && displayArea instanceof HTMLElement){
//     bttn.innerHTML=`<h1>Bhag yahan se</h1>`
//     bttn.addEventListener('click',()=>{
//         displayArea.innerHTML=`<h2>Bhaga nahi abhi tak</h2>`
//         displayArea.style.color='red'
//     })
// }
