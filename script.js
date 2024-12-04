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
  