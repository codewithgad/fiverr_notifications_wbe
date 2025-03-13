# Fiverr Message Notifier - Chrome Extension
🚀 Fiverr Message Notifier is a Chrome extension that automatically reloads your Fiverr pages and plays a sound notification whenever a new client message is detected. It helps freelancers stay responsive without constantly checking their inbox manually.

# ✨ Features
- ✅ Automatic Page Reloading – Periodically refreshes Fiverr pages to check for new messages.
- ✅ Real-time Message Detection – Monitors the Fiverr message icon for the red notification indicator.
- ✅ Sound Notification – Plays an alert sound when a new message arrives.
- ✅ Manual Sound Control – Users can stop or test the notification sound from the popup menu.
- ✅ Customizable Refresh Interval – Modify the refresh time interval for message detection.

# 🛠 Installation
## 1️⃣ Download the Extension

Clone this repository:
```bash
git clone https://github.com/gad-ongoro/fiverr_notifications_wbe.git
cd fiverr_notifications_wbe
```
## 2️⃣ Load the Extension into Chrome

Open Chrome and go to chrome://extensions/.
Enable Developer Mode (top right corner).
Click "Load Unpacked" and select the project folder.
# 📌 How to Use
Ensure the extension is active.
The extension will automatically refresh Fiverr pages and detect new messages.
When a new message arrives, an alert sound will play.
Click the popup icon to manually stop or test the sound.
# ⚙️ Configuration
- Modify the refresh interval in the background.js file:

```javascript
chrome.alarms.create("refreshPage", { periodInMinutes: 3 }); // 3 mins
```

- Change the notification sound by replacing the alert.mp3 file in the /sounds folder.

# 🔧 Technologies Used
JavaScript (Vanilla JS for logic)
HTML & CSS (Popup UI)
Chrome Extensions API (Runtime, Alarms, Notifications)

# 📜 License
This project is licensed under the MIT License – feel free to use, modify, and share!

# 💡 Future Enhancements
- Add browser notifications 🔔
- Enable custom sound uploads 🎵
- Add user authentication for cloud features 🌐

🚀 Stay connected for updates!

