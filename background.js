chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  chrome.storage.sync.get(["geminiApiKey"], (result)=> { if (!result.geminiApiKey) {
      chrome.tabs.create({
        url: "options.html",
      });
    }});
});

