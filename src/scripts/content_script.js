console.log("Executing content script3");
let regex = /Naslovnica/;

//var regex = new RegExp("google");


if (regex.test(document.body.innerText)) {
	//chrome.extension.sendRequest("request message", function (response_str) { alert(response_str); });
	chrome.runtime.sendMessage("smth was  in content script", function (response_str) { alert(response_str); });
}

if (DEVELOPMENT) {
	if (module.hot) {
		module.hot.accept();
	}
}