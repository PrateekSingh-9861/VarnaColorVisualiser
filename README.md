# 🎨 Varna – Wall Color Visualizer

Varna is a full-stack MERN application designed to help users visualize wall colors on room images before they paint. Inspired by tools like Asian Paints Visualizer, Varna allows users to digitally apply colors to their walls, view sample designs, give feedback, and interact through a user-friendly platform.

---

## 🚀 Features

### 👤 User
- 📝 Signup / Login / Logout (with authentication)
- 🎨 Upload room images and apply colors (like brush or bucket tools)
- 📸 View color palette and example designs
- 📬 Submit queries and feedback
- 🧡 Save favorite designs (future feature)

### 🛠️ Admin
- 📋 View and manage user queries and feedback
- 🧾 Admin dashboard to track activity

---

##  Modules

| Module             | Description                                  |
|--------------------|----------------------------------------------|
| Authentication     | User signup/login/logout             |
| Gallery            | Example room images with color suggestions   |
| Visualizer         | Apply selected colors to uploaded room images|
| Feedback           | Users can share their feedback               |
| Contact / Query    | Users can send queries without login         |
| Carousel           | Highlight featured images & tips             |
| Admin Dashboard    | Central place to manage data and uploads     |
| User Profile       | View and update personal details             |

---

## Tech Stack

### Frontend:
- React.js + Tailwind CSS
- React Router

### Backend:
- Node.js + Express.js
- MongoDB (with Mongoose)
- JWT Authentication
- CORS + dotenv

---

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/varna.git
cd varna

# Install frontend dependencies
cd Front-end
npm install

# Start frontend
npm start

# Open a new terminal and start backend
cd ../Backend
npm install
node server.js    # or use nodemon
