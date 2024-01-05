let input = document.querySelector('.input');
let add = document.querySelector('.add')
let list = document.querySelector('.lists')

function toDoList(){
  add.addEventListener('click',()=>{
    if (input.value === ''){
      alert('write a todo list')
    }
    else{
    let li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" class = "check"><label for="" class = "label">${input.value}</label> <button class = "clicked">Delete</button>`
    list.appendChild(li)
    input.value = ''
    }
  })
}
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('clicked')) {
    event.target.parentElement.remove();
  }
});

toDoList()