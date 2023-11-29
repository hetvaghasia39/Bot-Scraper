// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('action: ', request)
  if (request.action === 'clickAllButtons') {
    console.log('inside: ', request)
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
      console.log('inside: ', button)
      if (button.innerText === 'Access Email') {
        button.click();
      }
    });
  }
});