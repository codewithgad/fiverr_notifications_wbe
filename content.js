function checkForNewMessageNotification() {
  const notificationIcon = document.querySelector(".unread-icon");
  if (notificationIcon) {
    chrome.runtime.sendMessage({ newMessage: true });
  }
}

// Run every 20 seconds
setInterval(checkForNewMessageNotification, 20000);
