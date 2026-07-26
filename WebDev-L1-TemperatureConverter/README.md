# Temperature Converter

A simple and responsive web application that converts temperatures between **Celsius**, **Fahrenheit**, and **Kelvin**. Built with HTML5, CSS3, and Vanilla JavaScript as part of the **Oasis Infobyte Web Development & Designing Internship** (Level 1 – Task 3).

## Description

This project allows users to enter a temperature value, select the input unit, and instantly view the equivalent values in all three temperature scales. It includes input validation, absolute zero checks, and a clean card-based layout that works on desktop, tablet, and mobile devices.

**Subtitle:** Convert temperatures quickly and accurately between Celsius, Fahrenheit, and Kelvin.

## Features

- Numeric temperature input with validation
- Rejects empty, whitespace-only, and non-numeric input
- User-friendly error messages
- Unit selector dropdown (Celsius, Fahrenheit, Kelvin)
- Convert button with hover effect
- Displays all converted values together (2 decimal places)
- Absolute zero validation for each unit
- Responsive centered card layout
- Semantic HTML and accessible labels
- CSS variables and Flexbox layout
- Media queries for multiple screen sizes

## Folder Structure

```
TemperatureConverter/
├── index.html      # Main HTML structure
├── style.css       # Styles and responsive design
├── script.js       # Validation and conversion logic
└── README.md       # Project documentation
```

## Technologies Used

| Technology        | Purpose                          |
|-------------------|----------------------------------|
| HTML5             | Page structure and semantics     |
| CSS3              | Styling, layout, responsiveness  |
| Vanilla JavaScript| Validation and conversions       |
| Google Fonts      | Poppins (headings), Open Sans (body) |

**Not used:** Bootstrap, Tailwind CSS, React, Vue, jQuery, or any JavaScript framework.

## How to Run

1. Download or clone this project folder to your computer.
2. Open the `TemperatureConverter` folder.
3. Double-click `index.html` to open it in your web browser.

   **OR**

4. Right-click `index.html` → **Open with** → choose Chrome, Firefox, Edge, or any modern browser.

No installation, build step, or server is required.

## Usage

1. Enter a temperature in the input field (e.g., `25`).
2. Select the input unit from the dropdown (Celsius, Fahrenheit, or Kelvin).
3. Click **Convert Temperature**.
4. View the converted results for all three units below the form.

### Example

**Input:** 25°C

**Output:**

- Celsius: 25.00 °C
- Fahrenheit: 77.00 °F
- Kelvin: 298.15 K

## Validation Messages

| Condition              | Message                                      |
|------------------------|----------------------------------------------|
| Empty input            | Please enter a temperature.                  |
| Invalid / letters      | Only numeric values are allowed.             |
| Below absolute zero    | Temperature cannot be below absolute zero.   |

## Conversion Formulas

- **Celsius → Fahrenheit:** (°C × 9/5) + 32
- **Celsius → Kelvin:** °C + 273.15
- **Fahrenheit → Celsius:** (°F − 32) × 5/9
- **Fahrenheit → Kelvin:** ((°F − 32) × 5/9) + 273.15
- **Kelvin → Celsius:** K − 273.15
- **Kelvin → Fahrenheit:** ((K − 273.15) × 9/5) + 32


## Future Improvements

- Add a **Clear / Reset** button to empty the form and results
- Allow conversion on unit dropdown change without clicking the button again
- Add a dark mode toggle
- Show a brief explanation of each temperature scale for learning
- Save recent conversions using `localStorage`
- Add keyboard accessibility improvements (focus styles on all interactive elements)

## Author

Created for the **Oasis Infobyte Web Development & Designing Internship**.

## License

This project is for educational and internship evaluation purposes.
