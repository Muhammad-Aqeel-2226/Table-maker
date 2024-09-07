function validateInput(event) {
    const input = event.target;
    // Remove any character that is not a digit
    input.value = input.value.replace(/[^0-9]/g, '');
}

function userInput() {
    let num1, op;
    num1 = document.getElementById("input").value;  // Get the input value
    op = document.getElementById("output");  // Get the output element

    // Clear the previous output
    op.innerHTML = "";

    // Validate the input
    if (num1 === "" || isNaN(num1) || num1 <= 0) {
        op.innerHTML = "Error: Please Enter a positive number greater than 0.";
        return;  // Stop further execution if there's an error
    }

    // Generate the multiplication table
    for (let i = 1; i <= 50; i++) {
        op.innerHTML += num1;
        op.innerHTML += " x ";
        op.innerHTML += i;
        op.innerHTML += " = ";
        op.innerHTML += num1 * i;
        op.innerHTML += " <br/>";
    }
}

// Listen for "Enter" key press on the input field
document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        userInput();
    }
});
