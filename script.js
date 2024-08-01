//to get the reference of input,add button and list
const newTodoInput =document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn');
const newTodoList = document.getElementById('todoList');

function addTodo(){
    //taking the input
    const newTodoText = newTodoInput.value;
    newTodoInput.value='';

    //creating elements for list
    const newList =document.createElement('li');
    const totalCheckbox =document.createElement('input');
    const newText =document.createElement('span');
    const delBtn =document.createElement('button');

    //changing the type of input to checkbox
    totalCheckbox.type='checkbox';

    //append the elements into list
    newList.appendChild(totalCheckbox);
    newList.appendChild(newText);
    newList.appendChild(delBtn);

    //taking the contents for list items
    newText.textContent=newTodoText;
    delBtn.textContent='delete';

    //append the entire listitems to the list
    newTodoList.append(newList);

    //function for deleting the items
    delBtn.addEventListener('click',function(){
        newTodoList.removeChild(newList);
    })

}
//calling the function to add list items on click
addBtn.addEventListener('click',addTodo);