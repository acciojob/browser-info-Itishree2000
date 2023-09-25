//your JS code here. If required
// Get a reference to the div element with the id "browser-info"
const browserInfoDiv = document.getElementById("browser-info");

// Get browser name and version from the navigator object
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

// Display the browser information inside the div
browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
