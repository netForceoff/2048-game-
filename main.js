let createElementAndAppend = function(className, fieldElement, value, tag = 'div') {
  let element = document.createElement(tag);
  element.classList.add(className);

  if (value) {
    element.innerHTML = value;
  }

  fieldElement.appendChild(element);

  return element;
}

let getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let game = new Game(document.body, 4);
