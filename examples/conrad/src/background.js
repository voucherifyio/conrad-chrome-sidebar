console.log('Conrad Sidebar Extension Registered')

chrome.browserAction.onClicked.addListener(tab => {
  console.log('Browser Action Triggered')
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.id, {
    file: 'entry.js'
	})
})

