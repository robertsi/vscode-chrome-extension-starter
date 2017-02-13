/*
hot modules do not work needs reload!
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#app').innerHTML = "<h1>Hi from JavaScript12!</h1>";
});*/

const app =  document.querySelector('#app');
app.innerHTML = "<h1>Hi from JavaScript5!</h1>"


if (module.hot) 
{
		module.hot.accept();
}