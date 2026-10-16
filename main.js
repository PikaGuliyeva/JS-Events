const colorBox = document.querySelector('.colorbox');
const onclick = document.querySelector('.onclick');
onclick.addEventListener('click', function() {
    colorBox.style.backgroundColor = "red";
})
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.style.border = "2px solid red";
    });
});