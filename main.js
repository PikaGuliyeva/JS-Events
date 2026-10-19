// // Task 1
// const colorBox = document.querySelector('.colorbox');
// const onclick = document.querySelector('.onclick');

// const colors = ["red", "blue", "green"];
// onclick.addEventListener("click", function(){
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     colorBox.style.backgroundColor = colors[randomIndex];
// })

// // Task 2
// const cards = document.querySelectorAll(".card")
// cards.forEach(function(card) {
//     card.addEventListener("click", function() {
//         card.style.border = "2px solid red";
//     });
// });

// // Task 3
// const circle = document.getElementById("circle");

// let isBig = false;

// circle.addEventListener("dblclick", function(){
//     if(isBig===false){
//         circle.style.scale = 1.15;
//         isBig = true;
//     }else {
//         circle.style.scale = 1;
//         isBig=false;
//     }
// })

// // Task 4
// const text = document.getElementById("text");
// const counter = document.getElementById("counter");

// text.addEventListener("input", function(){
//     const remaining = 100 - text.value.length;
//     counter.textContent = "Qalan simvol " + remaining;
// })

// // Task 5
// const options = document.getElementById("options")

// options.addEventListener("change", function(){
//     document.body.style.backgroundColor = options.value;
// })

// Task 6
// const form = document.getElementById("myForm");
// const metn = document.getElementById("texts");

// form.addEventListener("submit", function(e){
//     e.preventDefault()

//     if(metn.value.trim()==="") {
//         console.log("Xeta: melumat daxil edilmeyib");
//     }else{
//         console.log("Ugurludur");

//     }
// })

// Task 7
// const box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     box.style.opacity = 0.5;
// })
// box.addEventListener("mouseleave", function(){
//     box.style.opacity = 1;
// })

// Task 8????

// Task 9
// const input = document.getElementById("input");
// input.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     console.log("Enter düyməsinə basıldı!");
//   }
// });

// Task 10
// Quick note manager

const form = document.getElementById("addForm");
const addInput = document.getElementById("addList");
const listGroup = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clearButton");

function runEvents() {
    form.addEventListener("submit", addTodo);
    listGroup.addEventListener("click", removeTodoToUI);
}

function addTodo(e) {
    e.preventDefault();

    const inputText = addInput.value.trim();

    if (inputText === "") {
        alert("Xanani bosh buraxmayin");
    } else {
        addTodoToUI(inputText);
    }
}

function removeTodoToUI(e) {
    if (e.target.className === "fa fa-remove") {
        e.preventDefault();

        const todo = e.target.parentElement.parentElement;
        todo.remove();
    }
}

function addTodoToUI(newTodo) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    listGroup.appendChild(li);

    addInput.value = "";
}

runEvents();
