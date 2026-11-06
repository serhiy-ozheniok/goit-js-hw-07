const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', event => {
  event.target.value;
  const inputTrim = event.target.value.trim();
  if (inputTrim !== '') {
    output.textContent = inputTrim;
  } else {
    output.textContent = 'Anonymous';
  }
});
