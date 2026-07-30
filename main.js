// Vanilla JavaScript entry file for your tutorial.
// You and your audience will write code here during the video.

import "./tailwind.css";

document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.querySelector("[data-download-button-1]");

  downloadButton?.addEventListener("click", () => {
    downloadButton.dataset.downloading = "true";
  });
});


