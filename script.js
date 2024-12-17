let currentExpression = '';

function appendToDisplay(value) {
    const messageElement = document.querySelector('.js-message');

    // Prevent multiple decimals in a single number
    if (value === '.' && currentExpression.split(/[\+\-\*\/]/).pop().includes('.')) {
        return; // Do not append if the last number already contains a d
    }

    // Append the value to the current expression
    currentExpression += value; 
    messageElement.innerHTML = currentExpression; // Update the display
}

function calculateResult() {
    const messageElement = document.querySelector('.js-message');
    try {
        // Use eval to calculate the result of the expression
        const result = eval(currentExpression); 
        messageElement.innerHTML = result; // Display the result
        currentExpression = result.toString(); // Update currentExpression to the result
    } catch (error) {
        messageElement.innerHTML = 'Error'; // Handle any errors (e.g., invalid expressions)
        currentExpression = ''; // Reset the expression
    }
}

function clearDisplay() {
    currentExpression = ''; // Clear the expression
    document.querySelector('.js-message').innerHTML = ''; // Clear the display
}

document.addEventListener('keydown', function(event) {
    const validKeys = '0123456789.+-*/='; // Allowable keys
    if (validKeys.includes(event.key)) {
        if (event.key === '=') {
            calculateResult(); // Calculate when '=' is pressed
        } else {
            appendToDisplay(event.key); // Append other valid keys
        }
    }
});