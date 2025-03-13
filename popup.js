document.getElementById("testSound").addEventListener("click", () => {
  const audio = new Audio(chrome.runtime.getURL("sounds/notification.mp3"));
  audio.play();
});

document.getElementById("toggleReload").addEventListener("click", () => {
  chrome.storage.local.get("autoReload", (data) => {
    const newState = !data.autoReload;
    chrome.storage.local.set({ autoReload: newState });
    document.getElementById("toggleReload").textContent = newState ? "Disable Auto-Reload" : "Enable Auto-Reload";
  });
});
