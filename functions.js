
function clickItem(item){
    item.click()
}

document.getElementById("toggle-all")

//forEach function
function toggleAll() {
    document.querySelector('#toggle-all').click();
}

var toggles=document.querySelectorAll('.toggle')

//Function for Toggling All Items
function selectItemX(x){
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click()
}

function selectItemX(x){
    document.querySelector("ul.todo-list > li:nth-child(" + ") input.toggle").click()
}

// Function for Deleting Items
function deleteItemX(x){
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') button.destroy').click()

}

//Function for Clearing Items

function clearCompleted(){
    document.querySelector('button.clear-completed').click();
}


//Function for Filtering Items
function filterCompleted(){
    location.hash = "/completed";
}
function filterAll(){
    location.hash = "/";
}
function filterActive(){
    location.hash = "/active";
}

//Function for Creating Items
function createTodo(name){
    document.querySelector('input.new-todo').value=name;
    document.querySelector('input.new-todo').dispatchEvent(new Event('change',{'bubbles':true}));
}

//Function for Amending Items
function amendTodo(x, amendedValue){
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label').dispatchEvent(new Event('dblclick', {'bubbles':true}));
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').value=amendedValue;
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').dispatchEvent(new Event('blur'));
}`1`