const celsiusInput = document.querySelector('#celsius');
const fahrenheitInput = document.querySelector('#fahrenheit');
const kelvinInput = document.querySelector('#kelvin');
const convertButton = document.querySelector('#convert');

convertButton.addEventListener('click', function() {
  // Convert Celsius to Fahrenheit
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9 / 5) + 32;

  // Convert Celsius to Kelvin
  const kelvin = celsius + 273.15;

  // Update the Fahrenheit and Kelvin input fields
  fahrenheitInput.value = fahrenheit;
  kelvinInput.value = kelvin;
});
