function performConversion() {
    const value = parseFloat(document.getElementById("value").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
  
    if (isNaN(value)) {
      document.getElementById("result").textContent = "Please enter a valid number.";
      return;
    }
  
    let conversionRate = getConversionRate(unitFrom, unitTo);
    let convertedValue = value * conversionRate;
  
    document.getElementById("result").textContent = `${value} ${unitFrom} is equal to ${convertedValue.toFixed(2)} ${unitTo}.`;
  }
  
  function getConversionRate(unitFrom, unitTo) {
    const conversionRates = {
      m: { m: 1, km: 0.001, g: NaN, kg: NaN },
      km: { m: 1000, km: 1, g: NaN, kg: NaN },
      g: { g: 1, kg: 0.001, m: NaN, km: NaN },
      kg: { g: 1000, kg: 1, m: NaN, km: NaN },
    };
  
    return conversionRates[unitFrom][unitTo] || NaN;
  }
  
  function changeLanguage() {
    const language = document.getElementById("languageSelect").value;
    alert(`Language changed to: ${language}`);
  }
  function showForm(type) {
    document.getElementById('conversionFormContainer').innerHTML = forms[type];
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
    `,
    calculator: `
        <form id="calculatorForm">
            <label for="expression">Expression:</label>
            <input type="text" id="expression" placeholder="Enter math expression (e.g., 5+3)">
            <button type="button" onclick="calculate()">Calculate</button>
        </form>
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
    `
};
