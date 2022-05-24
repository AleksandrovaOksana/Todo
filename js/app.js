let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

let todoList = [];
if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessage();
}

    addButton.addEventListener  ('click', function (){
        if(addMessage.value!=''){
            let newTodo = {
                todo: addMessage.value,
                checked: false,
                important: false
        };
        todoList.push(newTodo);
        displayMessage();
        localStorage.setItem('todo', JSON.stringify(todoList));
        }
  


    });
    function displayMessage(){
        let displayMessage = '';
        todoList.forEach (function(item, i){
         displayMessage += `
        <li class='todoText'>
            <input type = 'checkbox' id='item_${i}' ${item.checked ? 'checked':''}>
            <label for = 'item_${i}'>${item.todo}</label>
        </li>
        `
        todo.innerHTML = displayMessage;        
        })
    }
    todo.addEventListener('change', function(event){
       let idInput = event.target.getAttribute('id');
    //    let forLabel = todo.querySelector('[for = '+idInput+']');
       let valueLabel = todo.querySelector('[for = '+idInput+']').innerHTML;
      todoList.forEach(function(item){
          if(item.todo === valueLabel){
              item.checked = !item.checked;
              localStorage.setItem('todo', JSON.stringify(todoList));
          }
      })
    })