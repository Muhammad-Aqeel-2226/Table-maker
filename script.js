function validateInput(event) {
    const input = event.target;
    // Remove any character that is not a digit
    input.value = input.value.replace(/[^0-9]/g, '');
}

function userInput() {
    let num, output;
    num = document.getElementById("input").value;  
    output = document.getElementById("output");

    // Clear the previous output
    output.innerHTML = "";

    // Validate the input
    if (num === "") {
        output.innerHTML = "ERROR: Please Enter a number.";
        output.style.color = 'red';
        return;
    } else if (isNaN(num)) {
        output.innerHTML = "ERROR: Please Enter a Correct number.";
        output.style.color = 'red';
        return;
    }else if(num <= 0){
        output.innerHTML = "ERROR: Please Enter a positive number greater than 0.";
        output.style.color = 'red';
        return;
    }

    output.innerHTML += `<h1>Here is the table of ${num}.</h1><br/>`;
    // Generate the multiplication table
    for (let i = 1; i <= 50; i++) {
        output.style.color = 'aliceblue';
        output.innerHTML += num;
        output.innerHTML += " x ";
        output.innerHTML += i;
        output.innerHTML += " = ";
        output.innerHTML += num * i;
        output.innerHTML += " <br/>";
    }
}

// Listen for "Enter" key press on the input field
document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        userInput();
    }
});
