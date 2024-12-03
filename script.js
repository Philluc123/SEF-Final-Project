// Unit Conversion Function
function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    let result;
  
    if (unitFrom === 'm' && unitTo === 'km') {
      result = value / 1000;
    } else if (unitFrom === 'km' && unitTo === 'm') {
      result = value * 1000;
    } else if (unitFrom === 'kg' && unitTo === 'g') {
      result = value * 1000;
    } else if (unitFrom === 'g' && unitTo === 'kg') {
      result = value / 1000;
    } else {
      result = 'Conversion not available';
    }
  
    document.getElementById('conversionResult').innerText = `Result: ${result}`;
  }
  
  // Basic Physics Calculation (Kinetic Energy)
  function calculateKineticEnergy() {
    const mass = parseFloat(document.getElementById('mass').value);
    const velocity = parseFloat(document.getElementById('velocity').value);
  
    if (isNaN(mass) || isNaN(velocity)) {
      document.getElementById('kineticEnergyResult').innerText = 'Please enter valid numbers for mass and velocity.';
      return;
    }
  
    const kineticEnergy = 0.5 * mass * velocity * velocity;
    document.getElementById('kineticEnergyResult').innerText = `Kinetic Energy: ${kineticEnergy} Joules`;
  }
  
  // Material Estimation (for a simple box-shaped structure)
  function estimateMaterial() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const material = document.getElementById('material').value;
  
    if (isNaN(length) || isNaN(width) || isNaN(height)) {
      document.getElementById('materialEstimationResult').innerText = 'Please enter valid numbers for dimensions.';
      return;
    }
  
    const volume = length * width * height;
  
    let materialDensity;
    if (material === 'concrete') {
      materialDensity = 2400; // kg/m³
    } else if (material === 'wood') {
      materialDensity = 700; // kg/m³
    } else if (material === 'steel') {
      materialDensity = 7850; // kg/m³
    }
  
    const materialWeight = volume * materialDensity;
    document.getElementById('materialEstimationResult').innerText = `Material Weight: ${materialWeight.toFixed(2)} kg`;
  }
  
  // Language change functionality
  function changeLanguage() {
    const language = document.getElementById('languageSelect').value;
    if (language === 'es') {
      alert("¡La aplicación cambiará al español!");
      // Translate content dynamically here
    } else if (language === 'fr') {
      alert("L'application changera en français!");
      // Translate content dynamically here
    } else {
      alert("The application will switch to English.");
      // Reset to English
    }
  }
  