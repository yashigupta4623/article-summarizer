document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(['geminiApiKey'], ({ geminiApiKey }) => {
        if (geminiApiKey) document.getElementById("api-key").value = geminiApiKey;
    });

    document.getElementById("save-button").addEventListener("click", () => {
        const apiKey = document.getElementById("api-key").value.trim();
        if(!apiKey) {
            alert("Please enter a valid API key.");
            return;
        }

        chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
            document.getElementById("success-message").style.display = "block";
            setTimeout(() => window.close(), 2000);
        });
    });
});