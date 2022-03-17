const form = document.forms[0];
const input = document.body.querySelector('#input');
const button = document.body.querySelector('#submit');
const image = document.body.querySelector('div')
button.onclick = function(){
    const img = document.createElement('img');
    image.appendChild(img);
    img.setAttribute('src',input.value);
    input.classList.add('is-valid');
    p.textContent = 'Super!!'
    p.classList.add('toP')
}

const todoInput = document.body.querySelector('#inputText')
const todoBtn = document.body.querySelector('.btn')
const ul = document.querySelector('.list-group')
const select = document.querySelector('select')
// todoBtn.onclick = function(){
//     if( todoInput.value.length > 10){
//         event.preventDefault();
//         const li = document.createElement('li')
//         li.textContent = todoInput.value
//         ul.appendChild(li)
//     }
// }
const caption = document.body.querySelector('.caption')
const lastDiv = document.querySelector('.container mt-5')
todoBtn.addEventListener('click',function(){
    if( todoInput.value.length > 10 && select.selectedIndex > 0){
        todoInput.classList.remove('is-invalid')
        todoInput.classList.add('is-valid')
        caption.style.display = 'none'


        const li = document.createElement('li')
        console.log(li)
        li.textContent = todoInput.value
        li.classList.add('list-group-item')
        if( select.selectedIndex === 1 ){ 
            li.classList.add('list-group-item-secondary')
        }
        if( select.selectedIndex === 2 ){
            li.classList.add('list-group-item-warning')
        }
        if( select.selectedIndex === 3 ){ 
            li.classList.add('list-group-item-danger')
        }
        ul.appendChild(li)
    }
    else{
        todoInput.classList.add('is-invalid')
        caption.style.display = 'inline'
    }

})
