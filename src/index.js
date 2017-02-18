"use strict";
import $ from "jquery";
/*
hot modules do not work needs reload!
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#app').innerHTML = "<h1>Hi from JavaScript!</h1>";
});*/

/*const app = document.querySelector("#app");
//app.innerHTML = "<h1>Hi from JavaScript6! ENV=" + process.env.NODE_ENV +"</h1>"

if (DEVELOPMENT) {
	app.innerHTML = "<h1>Hi from JavaScript! ENV=dev</h1>";
} else {
	app.innerHTML = "<h1>Hi from JavaScript! ENV=prod</h1>";
}*/
if (DEVELOPMENT) {
	$("#app").html("<h1>Hi from JavaScript! ENV=dev</h1>");
} else {
	$("#app").html("<h1>Hi from JavaScript! ENV=prod</h1>");
}

if (DEVELOPMENT) {
	if (module.hot) {
		module.hot.accept();
	}
}