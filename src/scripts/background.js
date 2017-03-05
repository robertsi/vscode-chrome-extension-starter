"use strict";
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
function onMessage(message, sender, sendResponse)
{
	alert(message);
	chrome.pageAction.show(sender.tab.id);
	sendResponse("google was found20");
}


chrome.runtime.onMessage.addListener(onMessage);