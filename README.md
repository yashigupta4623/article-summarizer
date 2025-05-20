# AI Article Summarizer Chrome Extension

A lightweight Chrome extension that uses AI to generate concise summaries of any webpage content. Choose from brief summaries, detailed summaries, or bullet points to get the information you need quickly and efficiently.

## Features

* **Multiple summary formats:** Brief summary, detailed summary, or bullet points.
* **Easy-to-use interface:** Select summary type, click to summarize, and copy the result.
* **Works on any webpage:** Summarizes visible page content instantly.
* **Copy summary with one click.**

## Screenshots
![Image](https://github.com/user-attachments/assets/dcb03c48-e4da-4915-83d5-ee7b65dfa4b5)
![Image](https://github.com/user-attachments/assets/f79ed408-fa62-49ef-b8a0-b1c28a01ceb2)

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top-right corner).
4. Click **Load unpacked** and select the project folder.
5. The extension will appear in your toolbar.

## Usage

1. Navigate to any article or webpage.
2. Click the extension icon to open the popup.
3. Select the desired summary type:

   * Brief Summary
   * Detailed Summary
   * Bullet Points
4. Click **Summarize This Page** to generate the summary.
5. Use **Copy Summary** to copy the text to your clipboard.

## File Overview

* `background.js` - Handles background tasks and extension lifecycle.
* `content.js` - Injected script to extract webpage content for summarization.
* `popup.html` / `popup.js` - UI and logic for the popup window.
* `options.html` / `options.js` - Settings page for user preferences.
* `manifest.json` - Extension configuration file.
* `icon.png`, `image.png` - Extension icons and UI images.

## Development

Feel free to fork and improve this project. To contribute:

* Fork the repo
* Create a new branch for your feature/fix
* Submit a pull request with a clear description of your changes
