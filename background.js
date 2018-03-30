chrome.browserAction.onClicked.addListener(function (activeTab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (arrayOfTabs) {
        var activeTab = arrayOfTabs[0];
        var activeTabId = activeTab.id;
        chrome.tabs.executeScript(activeTabId, { file: "addNote.js" });
    });
});
