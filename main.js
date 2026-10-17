// Task 1
const colorBox = document.querySelector('.colorbox');
const onclick = document.querySelector('.onclick');

const colors = ["red", "blue", "green"];
onclick.addEventListener("click", function(){
    const randomIndex = Math.floor(Math.random() * colors.length);
    colorBox.style.backgroundColor = colors[randomIndex];
})


// Task 2
const cards = document.querySelectorAll(".card")
cards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.style.border = "2px solid red";
    });
});


// Task 3
const circle = document.getElementById("circle");
console.log(circle);


let isBig = false;

circle.addEventListener("dblclick", function(){
    if(isBig===false){
        circle.style.scale = 1.15;
        isBig = true;
    }else {
        circle.style.scale = 1;
        isBig=false;
    }
})

// Task 4

