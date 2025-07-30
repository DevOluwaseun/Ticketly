# 🎫 Ticketly – Real-Time Ticketing & Chat Support App

**Ticketly** is a full-stack ticketing system that allows users to create support tickets and chat with agents in real-time. It features authentication, role-based access, and secure Socket.IO messaging — perfect for customer service teams and support workflows.

---

## 🚀 Features

- 🔐 **Authentication**

  - JWT login and protected routes
  - Role-based access: Admin, Agent, User

- 🧾 **Ticket Management**

  - Users can create and view tickets
  - Agents can view & respond to assigned tickets
  - Statuses: `open`, `pending`, `closed`

- 💬 **Real-Time Messaging**

  - Socket.IO for live ticket-based conversations
  - One chat thread per ticket
  - Message storage with timestamps

- 🧠 **Backend Structure**
  - Modular Mongoose schemas: User, Ticket, Message
  - Express routes, validation, and middleware
  - MongoDB for persistence

---

## 🧰 Tech Stack

| Frontend | Backend    | Database | Real-time |
| -------- | ---------- | -------- | --------- |
| React    | Node.js    | MongoDB  | Socket.IO |
| Tailwind | Express.js | Mongoose | JWT       |

---

## 🛠️ Getting Started

#### 1. Clone the repo

```bash
git clone https://github.com/DevOluwaseun/ticketly.git
cd Ticketly
```

#### 2. env file

Create a .env file in your backend/ folder:

```bash
PORT=5001
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3d
```

#### 3. Run the App

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm start
```

## 🚧 Roadmap

    •	Ticket creation and management
    •	Socket.IO real-time chat
    •	Authentication and roles
    •	Typing indicators
    •	Admin dashboard
    •	Email notifications

## In Progress

25% Done

## 🧑‍💻 Author

Oluwaseun Atanda  
🔗 Portfolio | 🐙 GitHub | 📫 LinkedIn

## 📜 License

MIT License. Free to use and modify with attribution.
