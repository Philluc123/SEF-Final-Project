function showForm(type) {
    document.getElementById('conversionFormContainer').innerHTML = forms[type];
}

    
function convertDistance() {
    const value = parseFloat(document.getElementById("value").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;

    if (isNaN(value)) {
        document.getElementById("distanceOutput").textContent = "Please enter a valid number.";
        return;
    }

    const conversionRates = {
        m: { m: 1, km: 0.001, feet: 3.28084, miles: 0.000621371 },
        km: { m: 1000, km: 1, feet: 3280.84, miles: 0.621371 },
        feet: { m: 0.3048, km: 0.0003048, feet: 1, miles: 0.000189394 },
        miles: { m: 1609.34, km: 1.60934, feet: 5280, miles: 1 },
    };

    const conversionRate = conversionRates[unitFrom]?.[unitTo] || NaN;
    if (isNaN(conversionRate)) {
        document.getElementById("distanceOutput").textContent = "Conversion between selected units is not supported.";
        return;
    }

    const convertedValue = value * conversionRate;
    document.getElementById("distanceOutput").textContent = 
        `${value} ${unitFrom} is equal to ${convertedValue.toFixed(2)} ${unitTo}.`;
}

function convertMass() {
    const value = parseFloat(document.getElementById("value").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;

    if (isNaN(value)) {
        document.getElementById("massOutput").textContent = "Please enter a valid number.";
        return;
    }

    const conversionRates = {
        kg: { kg: 1, g: 1000, lb: 2.20462, oz: 35.274 },
        g: { kg: 0.001, g: 1, lb: 0.00220462, oz: 0.035274 },
        lb: { kg: 0.453592, g: 453.592, lb: 1, oz: 16 },
        oz: { kg: 0.0283495, g: 28.3495, lb: 0.0625, oz: 1 },
    };

    const conversionRate = conversionRates[unitFrom]?.[unitTo] || NaN;
    if (isNaN(conversionRate)) {
        document.getElementById("massOutput").textContent = "Conversion between selected units is not supported.";
        return;
    }

    const convertedValue = value * conversionRate;
    document.getElementById("massOutput").textContent = 
        `${value} ${unitFrom} is equal to ${convertedValue.toFixed(2)} ${unitTo}.`;
}

function convertTemperature() {
    const value = parseFloat(document.getElementById("value").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;

    if (isNaN(value)) {
        document.getElementById("temperatureOutput").textContent = "Please enter a valid number.";
        return;
    }

    let convertedValue;
    if (unitFrom === "celsius" && unitTo === "fahrenheit") {
        convertedValue = (value * 9/5) + 32;
    } else if (unitFrom === "celsius" && unitTo === "kelvin") {
        convertedValue = value + 273.15;
    } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
        convertedValue = (value - 32) * 5/9;
    } else if (unitFrom === "fahrenheit" && unitTo === "kelvin") {
        convertedValue = (value - 32) * 5/9 + 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "celsius") {
        convertedValue = value - 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "fahrenheit") {
        convertedValue = (value - 273.15) * 9/5 + 32;
    } else {
        convertedValue = value; // Same unit conversion
    }

    document.getElementById("temperatureOutput").textContent = 
        `${value} ${unitFrom} is equal to ${convertedValue.toFixed(2)} ${unitTo}.`;
}

function calculate() {
    const expression = document.getElementById("expression").value;
    try {
        const result = eval(expression);
        document.getElementById("calculatorOutput").textContent = `Result: ${result}`;
    } catch (error) {
        document.getElementById("calculatorOutput").textContent = "Invalid expression.";
    }
}

function calculateMaterialCost() {
    const material = document.getElementById("material").value;
    const quantity = parseFloat(document.getElementById("quantity").value);
    const costPerUnit = parseFloat(document.getElementById("costPerUnit").value);

    if (isNaN(quantity) || isNaN(costPerUnit)) {
        document.getElementById("materialCostOutput").textContent = "Please enter valid numbers for quantity and cost.";
        return;
    }

    const totalCost = quantity * costPerUnit;
    document.getElementById("materialCostOutput").textContent = 
        `The total cost for ${quantity} units of ${material} is $${totalCost.toFixed(2)}.`;
}

// Language selector
function changeLanguage() {
    const language = document.getElementById("languageSelect").value;
    alert(`Language changed to: ${language}`);
}

const forms = {
    distance: `
        <form id="distanceForm">
            <label for="value">Value:</label>
            <input type="number" id="value" placeholder="Enter value">
            <label for="unitFrom">From:</label>
            <select id="unitFrom">
                <option value="m">Meters</option>
                <option value="km">Kilometers</option>
                <option value="feet">Feet</option>
                <option value="miles">Miles</option>
            </select>
            <label for="unitTo">To:</label>
            <select id="unitTo">
                <option value="m">Meters</option>
                <option value="km">Kilometers</option>
                <option value="feet">Feet</option>
                <option value="miles">Miles</option>
            </select>
            <button type="button" onclick="convertDistance()">Convert</button>
        </form>
        <p id="distanceOutput">Result will appear here.</p>
    `,
    mass: `
        <form id="massForm">
            <label for="value">Value:</label>
            <input type="number" id="value" placeholder="Enter value">
            <label for="unitFrom">From:</label>
            <select id="unitFrom">
                <option value="kg">Kilograms</option>
                <option value="g">Grams</option>
                <option value="lb">Pounds</option>
                <option value="oz">Ounces</option>
            </select>
            <label for="unitTo">To:</label>
            <select id="unitTo">
                <option value="kg">Kilograms</option>
                <option value="g">Grams</option>
                <option value="lb">Pounds</option>
                <option value="oz">Ounces</option>
            </select>
            <button type="button" onclick="convertMass()">Convert</button>
        </form>
        <p id="massOutput">Result will appear here.</p>
    `,
    temperature: `
        <form id="temperatureForm">
            <label for="value">Temperature:</label>
            <input type="number" id="value" placeholder="Enter temperature">
            <label for="unitFrom">From:</label>
            <select id="unitFrom">
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>
            <label for="unitTo">To:</label>
            <select id="unitTo">
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>
            <button type="button" onclick="convertTemperature()">Convert</button>
        </form>
        <p id="temperatureOutput">Result will appear here.</p>
    `,
    calculator: `
        <form id="calculatorForm">
            <label for="expression">Expression:</label>
            <input type="text" id="expression" placeholder="Enter math expression (e.g., 5+3)">
            <button type="button" onclick="calculate()">Calculate</button>
        </form>
        <p id="calculatorOutput">Result will appear here.</p>
    `,
    materialCost: `
        <form id="materialCostForm">
            <label for="material">Material:</label>
            <input type="text" id="material" placeholder="Enter material name">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" placeholder="Enter quantity">
            <label for="costPerUnit">Cost per Unit:</label>
            <input type="number" id="costPerUnit" placeholder="Enter cost per unit">
            <button type="button" onclick="calculateMaterialCost()">Calculate</button>
        </form>
        <p id="materialCostOutput">Result will appear here.</p>
    `
};
