document.getElementById("gmail_button").addEventListener("click", function() {
    const emailInput = document.getElementById("gmail_input").value
    const resultDisplay = document.getElementById("gmail_result")

    if (validateGmail(emailInput)) {
        resultDisplay.textContent = "Good:)"
        resultDisplay.style.color = "green"
    } else {
        resultDisplay.textContent = "Error"
        resultDisplay.style.color = "red"
    }
})

function validateGmail(email) {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
    return gmailRegex.test(email)
}

//Part 2
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0, positionY = 0;

const moveBlock = () => {
    if (positionX < 450) {
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()
