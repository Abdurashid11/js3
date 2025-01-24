document.body.style.backgroundColor = 'black';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.color = 'white';

const inputContainer = document.createElement('div');
inputContainer.style.display = 'flex';
inputContainer.style.alignItems = 'center';
inputContainer.style.marginBottom = '20px';

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter your number';
input.style.fontSize = '20px';
input.style.padding = '10px';
input.style.borderRadius = '20px';
input.style.border = 'none';
input.style.outline = 'none';
input.style.width = '300px';

const sendButton = document.createElement('button');
sendButton.textContent = 'Send';
sendButton.style.marginLeft = '10px';
sendButton.style.padding = '10px 20px';
sendButton.style.fontSize = '18px';
sendButton.style.borderRadius = '20px';
sendButton.style.border = 'none';
sendButton.style.cursor = 'pointer';
sendButton.style.backgroundColor = '#444';
sendButton.style.color = 'white';
sendButton.addEventListener('click', () => {
  const parsedValue = parseInt(input.value, 10);
  if (parsedValue) {
    counterValue = parsedValue;
    updateCounter();
  }
});

inputContainer.appendChild(input);
inputContainer.appendChild(sendButton);

const counter = document.createElement('div');
counter.style.display = 'flex';
counter.style.alignItems = 'center';
counter.style.justifyContent = 'space-between';
counter.style.backgroundColor = '#333';
counter.style.padding = '20px';
counter.style.borderRadius = '20px';
counter.style.width = '200px';
counter.style.marginBottom = '20px';

const decreaseButton = document.createElement('button');
decreaseButton.textContent = '-';
decreaseButton.style.fontSize = '24px';
decreaseButton.style.width = '40px';
decreaseButton.style.height = '40px';
decreaseButton.style.borderRadius = '50%';
decreaseButton.style.border = 'none';
decreaseButton.style.backgroundColor = '#444';
decreaseButton.style.color = 'white';
decreaseButton.style.cursor = 'pointer';
decreaseButton.addEventListener('click', () => {
  counterValue--;
  updateCounter();
});

const counterText = document.createElement('span');
counterText.textContent = '19';
counterText.style.fontSize = '48px';
counterText.style.color = 'red';

const increaseButton = document.createElement('button');
increaseButton.textContent = '+';
increaseButton.style.fontSize = '24px';
increaseButton.style.width = '40px';
increaseButton.style.height = '40px';
increaseButton.style.borderRadius = '50%';
increaseButton.style.border = 'none';
increaseButton.style.backgroundColor = '#444';
increaseButton.style.color = 'white';
increaseButton.style.cursor = 'pointer';
increaseButton.addEventListener('click', () => {
  counterValue++;
  updateCounter();
});

counter.appendChild(decreaseButton);
counter.appendChild(counterText);
counter.appendChild(increaseButton);

const colorSelector = document.createElement('div');
colorSelector.style.marginTop = '20px';

const colorLabel = document.createElement('label');
colorLabel.textContent = 'Select color';
colorLabel.style.marginRight = '10px';

const colorInput = document.createElement('input');
colorInput.type = 'color';
colorInput.style.width = '50px';
colorInput.style.height = '30px';
colorInput.style.border = 'none';
colorInput.addEventListener('change', () => {
  counterText.style.color = colorInput.value;
});

colorSelector.appendChild(colorLabel);
colorSelector.appendChild(colorInput);

document.body.appendChild(inputContainer);
document.body.appendChild(counter);
document.body.appendChild(colorSelector);

let counterValue = 19;
function updateCounter() {
  counterText.textContent = counterValue;
}
