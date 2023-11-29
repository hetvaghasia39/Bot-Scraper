/*! InstantDataScraperNext - 2023-10-26 */

chrome.action.onClicked.addListener(function (e) {
  chrome.windows.getCurrent(function (e) {
    parentWindowId = e.id;
  }),
    chrome.windows.create({
      url: chrome.runtime.getURL(
        "popup.html?tabid=" +
          encodeURIComponent(e.id) +
          "&url=" +
          encodeURIComponent(e.url)
      ),
      type: "popup",
      width: 720,
      height: 650,
    });
});

// // background.js
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   chrome.tabs.executeScript(sender.tab.id, { file: 'onload.js' });
// });
