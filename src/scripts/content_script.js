console.log("Executing content script");
let regex = /package\.json/;

//var regex = new RegExp("google");


if (regex.test(document.body.innerText)) {
	//chrome.extension.sendRequest("request message", function (response_str) { alert(response_str); });
	chrome.runtime.sendMessage("Package.json was found on the page!", function (response_str) { alert(response_str); });
}

if (DEVELOPMENT) {
	if (module.hot) {
		//not working in content scripts://
		//console.log("accepting hot module");
		//module.hot.accept();
	}
}