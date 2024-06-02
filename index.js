const buttons = document.querySelectorAll(".button");
const increElement = document.querySelector(".incre")
let incre = 0

buttons.forEach(button => {
    button.addEventListener("click", function() {
        incre++;
increElement.textContent = incre;

        // incre.textContent = incre++;
        console.log(increElement);
       
    });
});
