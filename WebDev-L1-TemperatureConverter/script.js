// ============================================
// TEMPERATURE CONVERTER - JavaScript
// Oasis Infobyte Web Development Internship
// ============================================

// Absolute zero limits for each unit
const ABSOLUTE_ZERO = {
    celsius: -273.15,
    fahrenheit: -459.67,
    kelvin: 0
};

// Get HTML elements
const temperatureInput = document.getElementById('temperature-input');
const unitSelect = document.getElementById('unit-select');
const convertBtn = document.getElementById('convert-btn');
const errorMessage = document.getElementById('error-message');
const resultSection = document.getElementById('result-section');
const inputDisplay = document.getElementById('input-display');
const resultCelsius = document.getElementById('result-celsius');
const resultFahrenheit = document.getElementById('result-fahrenheit');
const resultKelvin = document.getElementById('result-kelvin');


// ============================================
// VALIDATION FUNCTIONS
// ============================================

/**
 * Check if the input is empty or contains only whitespace
 */
function isEmpty(value) {
    return value.trim() === '';
}

/**
 * Check if the input is a valid number
 * Rejects letters and other non-numeric characters
 */
function isValidNumber(value) {
    const trimmed = value.trim();

    // Check if it's a valid number using isNaN
    if (isNaN(trimmed) || trimmed === '') {
        return false;
    }

    // Extra check: make sure it only contains numbers, decimal point, and minus sign
    const numberPattern = /^-?\d*\.?\d+$/;
    return numberPattern.test(trimmed);
}

/**
 * Check if temperature is below absolute zero for the selected unit
 */
function isBelowAbsoluteZero(temperature, unit) {
    return temperature < ABSOLUTE_ZERO[unit];
}


// ============================================
// CONVERSION FUNCTIONS
// ============================================

/**
 * Convert any unit to Celsius first, then to all units
 */

// Celsius to Fahrenheit: (°C × 9/5) + 32
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Celsius to Kelvin: °C + 273.15
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Fahrenheit to Celsius: (°F − 32) × 5/9
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Fahrenheit to Kelvin: ((°F − 32) × 5/9) + 273.15
function fahrenheitToKelvin(fahrenheit) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    return celsiusToKelvin(celsius);
}

// Kelvin to Celsius: K − 273.15
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// Kelvin to Fahrenheit: ((K − 273.15) × 9/5) + 32
function kelvinToFahrenheit(kelvin) {
    const celsius = kelvinToCelsius(kelvin);
    return celsiusToFahrenheit(celsius);
}

/**
 * Convert input temperature to all three units
 * Returns an object with celsius, fahrenheit, and kelvin values
 */
function convertTemperature(temperature, unit) {
    let celsius, fahrenheit, kelvin;

    // First convert input to all units based on selected unit
    if (unit === 'celsius') {
        celsius = temperature;
        fahrenheit = celsiusToFahrenheit(celsius);
        kelvin = celsiusToKelvin(celsius);
    } else if (unit === 'fahrenheit') {
        fahrenheit = temperature;
        celsius = fahrenheitToCelsius(fahrenheit);
        kelvin = fahrenheitToKelvin(fahrenheit);
    } else if (unit === 'kelvin') {
        kelvin = temperature;
        celsius = kelvinToCelsius(kelvin);
        fahrenheit = kelvinToFahrenheit(kelvin);
    }

    return {
        celsius: celsius,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    };
}


// ============================================
// DISPLAY FUNCTIONS
// ============================================

/**
 * Show error message to the user
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    resultSection.hidden = true;
}

/**
 * Hide error message
 */
function hideError() {
    errorMessage.textContent = '';
    errorMessage.classList.remove('show');
}

/**
 * Format number to two decimal places
 */
function formatResult(value) {
    return value.toFixed(2);
}

/**
 * Get unit symbol for display
 */
function getUnitSymbol(unit) {
    if (unit === 'celsius') return '°C';
    if (unit === 'fahrenheit') return '°F';
    if (unit === 'kelvin') return 'K';
    return '';
}

/**
 * Display conversion results on the page
 */
function displayResults(inputTemp, inputUnit, results) {
    // Show what the user entered
    inputDisplay.textContent = 'Input: ' + formatResult(inputTemp) + getUnitSymbol(inputUnit);

    // Display all converted values with proper labels
    resultCelsius.textContent = formatResult(results.celsius) + ' °C';
    resultFahrenheit.textContent = formatResult(results.fahrenheit) + ' °F';
    resultKelvin.textContent = formatResult(results.kelvin) + ' K';

    // Show the result section
    resultSection.hidden = false;
}


// ============================================
// MAIN CONVERSION HANDLER
// ============================================

/**
 * Handle convert button click
 * Validates input and performs conversion
 */
function handleConvert() {
    // Get input values
    const inputValue = temperatureInput.value;
    const selectedUnit = unitSelect.value;

    // Step 1: Check for empty input
    if (isEmpty(inputValue)) {
        showError('Please enter a temperature.');
        return;
    }

    // Step 2: Check for valid numeric input
    if (!isValidNumber(inputValue)) {
        showError('Only numeric values are allowed.');
        return;
    }

    // Convert string to number
    const temperature = parseFloat(inputValue.trim());

    // Step 3: Check absolute zero validation
    if (isBelowAbsoluteZero(temperature, selectedUnit)) {
        showError('Temperature cannot be below absolute zero.');
        return;
    }

    // Input is valid - hide any previous errors
    hideError();

    // Perform conversion
    const results = convertTemperature(temperature, selectedUnit);

    // Display results on screen
    displayResults(temperature, selectedUnit, results);
}


// ============================================
// EVENT LISTENERS
// ============================================

// Convert when button is clicked
convertBtn.addEventListener('click', handleConvert);

// Also convert when Enter key is pressed in the input field
temperatureInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleConvert();
    }
});

// Clear error when user starts typing again
temperatureInput.addEventListener('input', function () {
    if (errorMessage.classList.contains('show')) {
        hideError();
    }
});
