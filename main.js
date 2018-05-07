var number = Math.floor(Math.random() * 100) + 1
var input = document.getElementById("guess-input")
var guessButton = document.getElementById("guess-button")
var restartButton = document.getElementById("restart-button")
var output = document.getElementById("output")
var warning = document.getElementById("toggle-warning")

function makeGuess () {
    if(!isNaN(input)){
        var num = parseInt(input.value);
        if (num === number){
            output.innerText += "\nYou Found It! The number indeed was " + number
            hideWarning() 
        }
        else if (num > number){
            output.innerText += "\nThat's too high!"
            input.value = ""
            hideWarning()
        }
        else {
            output.innerText += "\nThat's too low"
            input.value = ""
            hideWarning()
        }
    }
    else{
        showWarning()
    }
    
}

function restartGame () {
    input.value = ""
    number = Math.floor(Math.random() * 100) + 1
    output.innerText = ""
}

function showWarning(){
    if (warning.style.display === "none")
        warning.style.display = "block"
}

function hideWarning(){
    if (warning.style.display === "block")
        warning.style.display = "none"
}

guessButton.addEventListener('click', makeGuess)
restartButton.addEventListener('click', restartGame)

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      guessButton.click();
    }
  });

