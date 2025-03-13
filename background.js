// automatic page refresh

chrome.alarms.create("refreshPage", { periodInMinutes: 3 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "refreshPage") {
    chrome.tabs.query({ url: "https://www.fiverr.com/*" }, (tabs) => {
      tabs.forEach((tab) => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: () => location.reload()
        });
      });
    });
  }
});

// Check for new message notifications

chrome.runtime.onMessage.addListener((message) => {
  if (message.newMessage) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon128.png",
      title: "New Fiverr Message!",
      message: "You have a new message on Fiverr.",
    });

    const audio = new Audio(chrome.runtime.getURL("sounds/notification.mp3"));
    audio.play();
  }
});
