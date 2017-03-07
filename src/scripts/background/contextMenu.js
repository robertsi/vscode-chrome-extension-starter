let windowId = 0;
const CONTEXT_MENU_ID = "example_context_menu";

function closeIfExist() {
	if (windowId > 0) {
		chrome.windows.remove(windowId);
		windowId = chrome.windows.WINDOW_ID_NONE;
	}
}

function popWindow(type) {
	closeIfExist();
	const createData = {
		type: "popup",
		left: 100,
		top: 100,
		width: 800,
		height: 475,
	};
	if (type === "open") {
		console.log("Opening window2");
		//createData.url = "https://localhost:8080/page_action.html";
		createData.url = "page_action.html";
		chrome.windows.create(createData, (window) => {
			windowId = window.id;
		});
	}
}

chrome.contextMenus.create({
	id: CONTEXT_MENU_ID,
	title: "Chrome extension starter Example",
	contexts: ["all"],
	documentUrlPatterns: [
		"https://github.com/robertsi/vscode-chrome-extension-starter/*"
	]
});
function onClicked(event){
	console.log("context menu clicked!");
	if (event.menuItemId === CONTEXT_MENU_ID) {
		popWindow("open");
	}
}

chrome.contextMenus.onClicked.addListener(onClicked);


if (DEVELOPMENT) {
	if (module.hot) {
		//
		module.hot.dispose(() => {
			console.log("Dispose context menu called.");
			chrome.contextMenus.onClicked.removeListener(onClicked);
			chrome.contextMenus.remove(CONTEXT_MENU_ID);
		}); //we need to remove side effects
		//module.hot.accept();
	}
}