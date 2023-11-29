// Wait for the DOM to be ready
$(document).ready(function() {

    // Try another table button
    $('#wrongTable').click(function() {
      $("table").css("background-color", "red");
    });
  
    // Locate "Next" button button
    $('#nextButton').click(function() {
      // Add your code here for the 'Locate "Next" button' button
    });
  
    // Start crawling button
    $('#startScraping').click(function() {
      // Add your code here for the 'Start crawling' button
    });
  
    // Stop crawling button
    $('#stopScraping').click(function() {
      // Add your code here for the 'Stop crawling' button
    });
  
    // CSV button
    $('#csv').click(function() {
      // Add your code here for the 'CSV' button
    });
  
    // XLSX button
    $('#xlsx').click(function() {
      // Add your code here for the 'XLSX' button
    });
  
    // COPY ALL button
    $('#copy').click(function() {
      // Add your code here for the 'COPY ALL' button
    });
  
    // EDIT AGENT button
    $('#editPrecanned').click(function() {
      // Add your code here for the 'EDIT AGENT' button
    });
  
    // CREATE AGENT button
    $('#createPrecanned').click(function() {
      // Add your code here for the 'CREATE AGENT' button
    });
  
    // Reset columns button
    $('#resetColumns').click(function() {
      // Add your code here for the 'Reset columns' button
    });
  
    // Help/Feedback link
    $('#help').click(function() {
      // Add your code here for the 'Help/Feedback' link
    });
  
    // Rate button
    $('#rate').click(function() {
      // Add your code here for the 'Rate' button
    });
  
    // Rate Later button
    $('#rateLater').click(function() {
      // Add your code here for the 'Rate Later' button
    });
  
    // Start clicking button
    $('#startClicking').click(function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        console.log('activeTab: ', activeTab)
        chrome.tabs.sendMessage(activeTab.id, { action: 'clickAllButtons' }, function (e) {
          console.log("Error", e)
        });
        console.log('message sent: ', activeTab)
      });
    });
  
    // Stop clicking button
    $('#stopClicking').click(function() {
      // Add your code here for the 'Stop clicking' button
    });
  });
  