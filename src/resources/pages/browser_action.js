"use strict";
import $ from "jquery";

function awesome() {
	// Do something awesome!
	alert("This is awesome browser action3!");
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