import "./tailwind.css";

const ICON_ENTER_MS = 300;
const ICON_ANIMATION_MS = 3750; // 3.2s progress + 0.55s complete pulse
const ICON_HOLD_MS = 300;
const ICON_EXIT_MS = 300;

document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.querySelector("[data-download-button-1]");
  const icon = downloadButton?.querySelector("[data-icon-2]");

  downloadButton?.addEventListener("click", () => {
    if (downloadButton.dataset.downloading === "true") return;

    downloadButton.dataset.downloading = "true";

    // Start the loading icon animation after the enter transition
    window.setTimeout(() => {
      icon.dataset.iconAnimating = "true";

      window.setTimeout(() => {
        delete downloadButton.dataset.downloading;

        // Reset animation state after the exit transition for the next click
        window.setTimeout(() => {
          delete icon.dataset.iconAnimating;
        }, ICON_EXIT_MS);
      }, ICON_ANIMATION_MS + ICON_HOLD_MS);
    }, ICON_ENTER_MS);
  });

  // Enable icon transitions after first paint to avoid load-time flash
  requestAnimationFrame(() => {
    document.documentElement.dataset.ready = "true";
  });
});
