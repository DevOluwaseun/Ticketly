# 🎫 Ticketly – Real-Time Ticketing & Chat Support App

**Ticketly** (temporary name) is a plug-and-play customer support solution designed for small business owners. It enables them to handle customer queries and complaints through a unified system that combines real-time chat and ticket management. Each business can integrate their support page into a website or social media profile to offer a seamless support experience.

---

## 🚀 Features

- 🏪 **Business Account**

  - Each business owner can create a unique account.
  - Get a unique URL to embed on a website or share on social media.
  - Manage support settings and team members from a centralized dashboard.

- 👨‍💼 **Admin Dashboard**

  - View all tickets and chat sessions.
  - Assign agents to handle tickets.
  - Take over ticket.

- 💬 **Real-Time Messaging**

  - Socket.IO for live ticket-based conversations
  - One chat thread per ticket
  - Message storage with timestamps

- 🧑‍💻 **Agents**

  - Support agents can access assigned tickets and participate in live chats.
  - Role-based access to avoid data leakage across businesses.

- 🙋 **Users / Customers**

  - Customers can create a ticket or start a chat — anonymously or with an account.
  - Logged-in users can view ticket history and continue past chats.

- 💬 **Chat & Ticketing Integration**

  - Real-time chat with auto-escalation to ticketing.
  - Chat history stored with the ticket for complete context.

- 📊 **Analytics**

  - Track metrics such as ticket resolution time, chat response rate, and agent performance.

- 🔒 **Authentication & Roles**

  - Secure signups and logins for Admins, Agents, and Users.
  - Role-based dashboards and access control.

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

• Business Account and Unique Referral Link
• User Roles: Admin, Agent, User
• Notifications for New Tickets / Chats
• File Upload Support in Chat
• Agent Availability System
• Chat Bot Auto-Response (Future AI integration)
• SaaS Admin Panel for Me to monitor all tenants

<!-- Add this after the Tech Stack section -->

## ✅ Current Status

### Completed Features

- ✅ User authentication (signup, login, JWT)
- ✅ Ticket creation and management
- ✅ Message system for ticket conversations
- ✅ Agent ticket assignment
- ✅ Protected routes and middleware
- ✅ Responsive admin dashboard
- ✅ Unit tests for core functionality

### In Progress

- 🚧 Frontend form validation
- 🚧 Socket.IO real-time chat
- 🚧 File upload support

### Next Up

- 📋 User dashboard
- 📋 Email notifications
- 📋 Business account features

## 🧠 Inspiration

Many small businesses and home-run ventures lack an affordable and easy-to-use support system. Ticketly is built with this audience in mind — quick setup, smooth UX, and full control without tech stress.

## 🤝 Contributing

PRs and feedback are welcome!

## 🧑‍💻 Author

Oluwaseun Atanda  
🔗 Portfolio | 🐙 GitHub | 📫 LinkedIn

## 📜 License

MIT License. Free to use and modify with attribution.
