// Toggle all by id

document.querySelector('#toggle-all').click

//Toggle all with getElementById 
document.getElementById("toggle-all").click()

// Click on toggle 
document.querySelector(" ul.todo-list > li:nth-child(1) input.toggle").click()

//delete with destrtoy class
document.querySelector(" ul.todo-list > li:nth-child(1) button.destroy").click()

//
document.querySelector("button.clear-completed")

//choose between All && Active && Completed
document.querySelector("ul.filters > li:nth-child(1) > a").click()

location.hash ="/complited"
location.hash ="/active"
location.hash ="/all"
 

///
document.querySelector("body > section > header > input").change="hello"
document.querySelector("body > section > header > input").change()

document.querySelector("body > section > header > input").dispatchEvent(new Event("change", {'bubbles':true}))

document.querySelector("input.new-todo").value = "hello"
document.querySelector("input.new-todo").dispatchEvent(new Event("change", {'bubbles':true}))

//Change existent value with Dblclick

document.querySelector("ul.todo-list> li:nth-child(8) > div > label").dispatchEvent(new Event ('dblclick' , {'bubbles':true} ))
document.querySelector("ul.todo-list> li:nth-child(8) .edit").value = "ameded"
document.querySelector("ul.todo-list> li:nth-child(8) .edit").dispatchEvent(new Event ('bluer'))
