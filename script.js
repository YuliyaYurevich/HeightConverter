const form = document.querySelector('form');
const feet = document.querySelector('#feet');
const inches = document.querySelector('#inches');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let feetValue = +feet.value;
  let inchesValue = +inches.value;

  if (
    feetValue < 0 ||
    isNaN(feetValue) ||
    inchesValue < 0 ||
    isNaN(inchesValue)
  ) {
    result.textContent = 'Please enter a valid number';
  } else {
    let height = convert(feetValue, inchesValue);

    result.textContent = `${height} cm`;
  }
});

function convert(feet, inches) {
  return (feet * 12 + inches) * 2.54;
}
