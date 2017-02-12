function component () {
  var element = document.createElement('div');

  element.innerHTML = "Hello Webpack2!";

  return element;
}

document.body.appendChild(component());