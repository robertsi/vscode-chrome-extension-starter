"use strict";
import $ from "jquery";



function awesome() {
	//alert("Hi from options page");
	//https://bugs.chromium.org/p/chromium/issues/detail?id=476350
	chrome.extension.getBackgroundPage().alert("Hi from options page1554");
	let nums = [2, 3, 5, 8, 10, 13, 15, 20];


	// Statement bodies
	nums.forEach(v => {
		if (v % 5 === 0)
			console.log(v);
	});



}

function totallyAwesome() {
	// do something TOTALLY awesome!
	console.log("this is tottaly awesome");
}

function awesomeTask() {
	awesome();
	totallyAwesome();
}

function clickHandler(e) {
	//setTimeout(awesomeTask, 1000);
	awesomeTask();
}

function main() {
	// Initialization work goes here.
	//jq("button").click(clickHandler);
	$("button").click(clickHandler);
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
/*document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  main();
});*/

function DOMContentLoaded() {
	main();
}


//var jq = $.noConflict();
//jQuery(document).ready(DOMContentLoaded);
$(document).ready(DOMContentLoaded);

if (DEVELOPMENT) {
	if (module.hot) {
		module.hot.accept();
	}
}