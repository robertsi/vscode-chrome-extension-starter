import $ from "jquery";



function awesome() {
	//alert("Hi from options page9");
	//https://bugs.chromium.org/p/chromium/issues/detail?id=476350
	chrome.extension.getBackgroundPage().alert("Hi from options page5!!!");
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
	awesomeTask();
}

function main() {
	$("button").click(clickHandler);
}


function DOMContentLoaded() {
	console.log("DOMContentLoaded");
	main();
}


//var jq = $.noConflict();
//jQuery(document).ready(DOMContentLoaded);
$(document).ready(DOMContentLoaded);

if (DEVELOPMENT) {
	if (module.hot) {
		module.hot.dispose(() => {
			$("button").off("click");
			//$("button").off(clickHandler);
		}); //we need to remove side effects

		module.hot.accept();
	}
}