# 🚀 NEXUS – Real-Time Chat Web App (Frontend)

NEXUS is a modern, scalable **real-time chat web application frontend**, inspired by platforms like **WhatsApp Web** and **Instagram DM**.  
It focuses on **performance, clean UI, and professional architecture** using React and modern tooling.

---

## ✨ Features

### 💬 Messaging

- Real-time one-to-one chat UI
- Message types: **text, image, file** (extensible)
- Message timestamps & delivery status (UI-ready)
- Infinite scroll–ready message list

### 🟢 Status (Stories)

- View user statuses (24-hour concept)
- Status list with avatar ring UI
- Status viewer architecture (expandable)

### ⭐ Saved Messages

- Save / bookmark important messages
- Dedicated Saved screen
- Reference-based (no message duplication)

### 🔔 Notifications

- In-app notification list
- Empty state handling
- UI-ready for backend integration

### ⚙️ Settings

- Profile management
- Privacy controls
- Security section
- Dark Mode (UI-ready)
- Help & About screens

### 🎥 Media (UI Only)

- Live camera preview (browser-safe)
- Media utilities separated from UI
- Ready for backend / WebRTC integration

---

## 🧠 Architecture Overview

The frontend follows a **WhatsApp-like professional separation of concerns**:

UI (React)
│
├── Redux (UI & app state only)
│
├── Media Utils (camera / mic handling)
│
├── API Layer (REST-ready)
│
└── Socket Layer (real-time ready)

### Key Principles

- ❌ No side-effects in Redux reducers
- ❌ No MediaStreams in Redux
- ✅ UI-driven browser permissions
- ✅ Flat message architecture
- ✅ Event-based design mindset

---

## 🛠️ Tech Stack

- **React**
- **Redux Toolkit**
- **React Router**
- **Tailwind CSS**
- **Lucide Icons**
- **Browser Media APIs**
- **Socket.IO (planned)**
- **REST APIs (planned)**

---

## 📂 Project Structure

---

## 🔐 State Management (Redux)

Redux is used **only for UI and application state**, not for browser APIs.

### Stored in Redux

- Active navigation tabs
- Current chat metadata
- Call UI state (flags only)
- Mute / camera toggles
- Sidebar & navigation state

### Not Stored in Redux

- MediaStream objects
- Browser permissions
- DOM references

This ensures:

- Predictable state
- Easier debugging
- Production-safe behavior

---

## 🎥 Media Handling (Camera / Mic)

Media logic is **fully isolated** in utility functions:

- `getVideoCallStream()`
- `attachStreamToVideo()`
- `toggleMic()`
- `toggleCamera()`
- `stopVideoCallStream()`

### Why this approach?

- Browser security compliance
- Cleaner React components
- Easy WebRTC integration later

---

## 🌐 API-Ready Design

The frontend is designed for **professional REST APIs**, similar to WhatsApp:

- `/auth`
- `/users`
- `/conversations`
- `/messages`
- `/status`
- `/saved`
- `/media`
- `/sync`

Loose coupling ensures backend scalability and flexibility.

---

## ▶️ Getting Started

### 1️⃣ Install dependencies

```bash
npm install
 npm run dev
npm start
```

### 3️⃣ Open in browser

http://localhost:3000

## 🚀 Future Enhancements

- Real-time messaging (Socket.IO)
- WebRTC audio/video calling
- Message delivery & read receipts
- Multi-device sync
- End-to-end encryption (conceptual)
- PWA support

---

## 👨‍💻 Author

### Mohammad Asif Hasnain

Full-Stack Developer (MERN)
Focus: Scalable systems, clean architecture, real-time applications

### 📄 License

- This project is intended for educational and portfolio purposes.
- UI inspiration credits belong to their respective platforms.

```

```
