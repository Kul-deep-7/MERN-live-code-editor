# CodeCast — Real-Time Collaborative Code Editor

PROJECT OVERVIEW
The problem it solves:
Imagine you and a friend are debugging code over a video call. You paste code in WhatsApp, they paste it back with edits. It's chaos. CodeCast eliminates that — it's a shared Google Docs, but for code. Multiple people join one "room" and see every keystroke in real time.

CodeCast is a real-time code collaboration web app where multiple users can join a shared room and write, edit, and execute code together — every keystroke syncs instantly across all connected clients.
Built with ExpressJS,NodeJS & REactJS & Socket.io.

🔴 Live Demo: https://mern-live-code-editor-1.onrender.com


---

## Features

- Create or join a room using a UUID-based Room ID
- Real-time code sync across all users in the same room — no refresh needed
- See who's in the room with auto-generated avatars
- Execute code directly in the browser across 16 languages
- Copy Room ID to share with collaborators
- Language selector with syntax support via CodeMirror

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, CodeMirror v5, Bootstrap 5 |
| Backend | Node.js, Express |
| Real-time | Socket.io (WebSocket) |
| Code Execution | JDoodle Compiler API |
| Routing | React Router v6 |
| Notifications | react-hot-toast |
| Avatars | react-avatar |
| Room IDs | uuid v4 |

---


### Set up the server
 
```bash
cd server
npm install
```
 
Create a `.env` file inside the `backend/` folder:
 
```
jDoodle_clientId=your_client_id_here
jDoodle_clientSecret=your_client_secret_here
PORT=5000
```
 
> Get your `clientId` and `clientSecret` from Jdoodle.
 
Start the server:
 
```bash
cd backend
node index.js
```
 
### 3. Set up the frontend
 
```bash
cd frontend
npm install
```
 
Start the React(vite) app:
 
```bash
npm run dev
```
 
## How to Use
 
1. Open the app — you'll see the home screen
2. Click **New Room** to generate a UUID-based Room ID, or paste an existing one
3. Enter your username and click **JOIN**
4. Share the Room ID with anyone you want to collaborate with
5. Start coding — changes sync live across all connected users
6. Select a language from the dropdown, click **Open Compiler**, then **Run Code** to execute
---
 
## How It Works — Key Concepts
 
### Real-time Sync (Socket.io)
 
Every keystroke emits a `CODE_CHANGE` event to the server, which broadcasts it to all other users in the room. The server never stores the code — it purely relays events.
 
```
User A types → emit CODE_CHANGE → server → broadcast to B, C, D
```
 
### Code Sync for New Joiners
 
When a new user joins a room that already has code, existing users emit a `SYNC_CODE` event directly to the new user's socket ID. This peer-to-peer sync means the server never needs to store editor state.
 
### Compile Proxy
 
The `/compile` endpoint on the Express server acts as a proxy to JDoodle's API. The browser never calls JDoodle directly — this keeps your API credentials secure on the server side.
 
---
 
## Supported Languages
 
`python3` · `java` · `cpp` · `nodejs` · `c` · `ruby` · `go` · `scala` · `bash` · `sql` · `pascal` · `csharp` · `php` · `swift` · `rust` · `r`
 
---

Real-world use case:
You're doing a mock FAANG interview. Your interviewer shares a Room ID. You both join. You type your solution — they watch every character appear in real time. When you're done, they hit "Run Code" — the code executes on a cloud compiler and output appears instantly. No copy-pasting, no screen-sharing lag.
What it's NOT:
There's no login, no database, no persistent storage. Rooms exist only while people are connected. The moment everyone leaves, the code is gone.

---
 
## Known Limitations
 
- **No persistence** — rooms exist only while users are connected. Code is lost when everyone leaves.
- **No authentication** — anyone with a Room ID can join. Usernames are not verified.
- **No debouncing** — every keystroke emits a WebSocket event. Can be noisy at scale.
- **Single server** — not horizontally scalable without a Redis adapter.
---
 
## Potential Improvements
 
- Add MongoDB to persist room code between sessions
- Add JWT-based authentication for private rooms
- Add a live cursor position indicator per user
- Implement a chat panel alongside the editor
---
