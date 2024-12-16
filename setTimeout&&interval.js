setTimeout(function () {console.log("Hello")},1000);


// WRONG CALL - Call a function to create a todo ,then call return value after 1000(S) 
// (usefull for getting values after function but not passing them)
setTimeout(autoTodo.createTodo("hello"),1000)

//Right way - Call a function with setTimer and pass the parameter after 1000 (S)
setTimeout(autoTodo.createTodo,1000,("Hello again 1000"))

//for loop with setTimeout
for(x=1; x <= 20; x++) {
    setTimeout(autoTodo.createTodo, x*100, ("todo " + x));
}

//Example with function
for(x=1; x <= 20; x++) {
    setTimeout(function (name){
        document.querySelector('input.new-todo').value=name;
        document.querySelector('input.new-todo').dispatchEvent(new Event('change',{'bubbles':true}));
    }, x*100, ("todo " + x));
}

                            // setIterval
var sayHello = setInterval(function (){console.log("hello")}, 1000)


//create 100 todos with setInterval

var botTodoCount = 0;

var creatorBot = setInterval(function (){
    
        document.querySelector('input.new-todo').value="todo " + botTodoCount;
        document.querySelector('input.new-todo').dispatchEvent(new Event('change',{'bubbles':true}));
    
        botTodoCount++;
    
        if(botTodoCount >=20){
            clearInterval(creatorBot);
        }

    },500)


    //Home work _ count from 20 to 0 
var botTodoCount = 20;
var creatorBot = setInterval(function (){
    
        document.querySelector('input.new-todo').value="todo " + botTodoCount;
        document.querySelector('input.new-todo').dispatchEvent(new Event('change',{'bubbles':true}));
    
        botTodoCount--;
    
        if(botTodoCount <= 0){
            clearInterval(creatorBot);
        }

    },500)
