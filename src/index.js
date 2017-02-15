/*
hot modules do not work needs reload!
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#app').innerHTML = "<h1>Hi from JavaScript12!</h1>";
});*/

const app = document.querySelector("#app");
//app.innerHTML = "<h1>Hi from JavaScript6! ENV=" + process.env.NODE_ENV +"</h1>"

if (process.env.PRODUCTION) {
  app.innerHTML = "<h1>Hi from JavaScript8! ENV=prod</h1>"
  }
else {
  app.innerHTML = "<h1>Hi from JavaScript8! ENV=dev</h1>"
}


if (module.hot) {
  module.hot.accept();
}