function getArticleText() {
  const article = document.querySelector("article");
  if (article) return article.innerText;

  // fallback
  const paragraphs = Array.from(document.querySelectorAll("p"));
  return paragraphs.map((p) => p.innerText).join("\n");
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_ARTICLE_TEXT") {
    const text = document.body.innerText || "";
    sendResponse({ text });
  }
  return true; // Needed for async sendResponse
});