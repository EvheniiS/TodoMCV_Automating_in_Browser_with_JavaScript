/* Math.random()

// give random number between 0 and 9 
Math.floor(Math.random()*10)


for( var prop in autoTodo) {
    if(typeof autoTodo[prop]=="function"){
        console.log(prop)
    }
}
*/

// Actual bot 
var rando = new function () {
    
    function getRandomInt(x){
        
        return Math.floor(Math.random()*x)

    } 
    
    function getRandomIntIndex(){ 
        max = document.querySelectorAll("ul.todo-list li").length;
        if(max === 0){
            console.log("no items to choose from");
            return 0;
        }
        x = getRandomInt(max)+1;
        return x;
    }

    this.toggleAll = function(){
        console.log("toggle all");
        autoTodo.toggleAll();
    } 



    this.selectRandomItrem = function(){
        x = getRandomIntIndex();
        if(x>0) {
            console.log("select item " + x);
            autoTodo.selectItemX(x);
        }
    }

    this.createRandomTodo = function(){
        console.log("create a todo")
        autoTodo.createTodo("random toodo " + Date.now());
    }

    this.amendRandomTodo = function(){
        x = getRandomIntIndex();
        if(x>0){
            console.log("amend todo " + x);
            autoTodo.amendTodo(x, "amended random todo "+ Date.now())
        }
    }
}

var randoBot = setInterval(function(){
    var theFunctions = [];
        for( var prop in rando) {
        if(typeof rando[prop]=="function"){
            theFunctions.push(prop)
        }
    } 

    var randomFunctionIndex = Math.floor(Math.random()*theFunctions.length)
    rando [theFunctions[randomFunctionIndex]]() 

},1000);

//clearInterval(randoBot)
