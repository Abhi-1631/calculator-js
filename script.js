let displayValue = "";

// Function to update the display
function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue;
}

// Function to append characters to the display
function appendCharacter(char) {
  displayValue += char;
  updateDisplay();
}

// Function to clear the display
function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

// Function to delete the last character from the display
function deleteCharacter() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

// Function to perform the calculation
function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}

// Call the updateDisplay function initially
updateDisplay();
