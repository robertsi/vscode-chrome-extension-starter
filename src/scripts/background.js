//import thenChrome from "then-chrome";
// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// When the extension is installed or upgraded ...

//thenChrome.tabs.query({currentWindow: true}).then(console.log("promise called")); // tabs list
/*chrome.runtime.onInstalled.addListener(function () {
	// Replace all rules ...
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		// With a new rule ...
		chrome.declarativeContent.onPageChanged.addRules([{
			// That fires when a page's URL contains a 'g' ...
			conditions: [
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {
						urlContains: "g"
					},
				})
			],
			// And shows the extension's page action.
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});*/

//thenChrome.runtime.onMessage().then
function onMessage(message, sender, sendResponse) {
	alert(message);
	chrome.pageAction.show(sender.tab.id);
	sendResponse("something was found34fsdfdsadf!!!!!!");
}


chrome.runtime.onMessage.addListener(onMessage);

function onTabUpdated(tabId, changeInfo, tab) {
	const regex = /http:\/\/www\.24ur.com/;
	if (regex.test(tab.url) && changeInfo.status === "complete") {
		if (DEVELOPMENT) {
			console.log("Injecting content script");
			fetch("https://localhost:8080/contentScript.bundle.js")
				.then(response => response.text())
				.then((value) => {
					//console.log(value);
					chrome.tabs.executeScript(tabId, { code: value, runAt: "document_end" }, () => console.log("Content script injected!"));

				});
		}
		else {
			console.log("Injecting content script");
			chrome.tabs.executeScript(tabId, { file: "contentScript.bundle.min.js", runAt: "document_end" }, () => console.log("Content script injected!"));
		}
	}
	console.log("tabId:" + tabId + "changeInfo: " + changeInfo.status + "tab.url=" + tab.url);
}

chrome.tabs.onUpdated.addListener(onTabUpdated);

if (DEVELOPMENT) {
	if (module.hot) {
		//
		module.hot.dispose(() => {
			chrome.runtime.onMessage.removeListener(onMessage);
			chrome.tabs.onUpdated.removeListener(onTabUpdated);
		}); //we need to remove side effects
		module.hot.accept();
	}
}