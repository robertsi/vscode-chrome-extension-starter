"use strict";
let regex = /Naslovnica/;

//var regex = new RegExp("google");


if (regex.test(document.body.innerText)) {
	//chrome.extension.sendRequest("request message", function (response_str) { alert(response_str); });
	chrome.runtime.sendMessage("request message", function (response_str) { alert(response_str); });
}