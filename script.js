
let buttons = document.querySelectorAll('.button');
const input = document.getElementById('input');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      input.innerText = eval(input.innerText)
    }
    else if(e.target.innerHTML == 'C'){
      input.innerText = " ";
    }
    else if(e.target.innerHTML == 'Del'){
      input.innerText = input.innerText.slice(0,-1);
    }
    else{ 
    console.log(e.target.innerText)
    input.innerText += e.target.innerText
      }
  })
})