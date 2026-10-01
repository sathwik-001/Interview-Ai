<div align="center">

# 🧠 Interview AI

**An AI-powered interview preparation platform that analyzes your resume and target job description to generate a fully personalized interview strategy.**

[![Node.js](https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-7+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-2.0%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 📄 **Resume Parsing** | Upload your PDF resume — the AI reads and understands it |
| 🎯 **Match Score** | See how well your profile matches the job description (0–100) |
| 💻 **Technical Questions** | AI-generated questions tailored to the exact role with ideal answers |
| 🧠 **Behavioral Questions** | STAR-method behavioral questions with how-to-answer guidance |
| 📅 **Preparation Roadmap** | Day-by-day study plan to fill your skill gaps before the interview |
| 🔍 **Skill Gap Analysis** | Visual breakdown of missing skills ranked by severity |
| 🎤 **AI Mock Interview** | Live chat with an AI interviewer that asks your questions and gives real-time feedback |
| 📑 **Resume PDF Generator** | Generates a tailored, ATS-friendly resume as a downloadable PDF |

---

## 🖼️ App Overview

```
┌────────────────────────────────────────────────────────────┐
│  Interview AI                                              │
│                                                            │
│  ┌──────────────────┐    ┌────────────────────────────┐   │
│  │  Job Description │    │  Your Profile              │   │
│  │  (paste here)    │    │  ┌──────────────────────┐  │   │
│  │                  │    │  │  Upload Resume (PDF)  │  │   │
│  │                  │    │  └──────────────────────┘  │   │
│  │                  │    │         — OR —              │   │
│  │                  │    │  ┌──────────────────────┐  │   │
│  └──────────────────┘    │  │  Self Description    │  │   │
│                           │  └──────────────────────┘  │   │
│                           └────────────────────────────┘   │
│                 [ Generate My Interview Strategy ]          │
└────────────────────────────────────────────────────────────┘
                            │
                            ▼
          ┌─────────────────────────────────┐
          │  Interview Report Page          │
          │                                 │
          │  [Technical] [Behavioral]       │
          │  [Road Map]  [Mock Interview]   │
          │                    ┌──────────┐ │
          │  Question cards    │ Match    │ │
          │  with answers &    │  Score   │ │
          │  intentions        │  75%     │ │
          │                    ├──────────┤ │
          │                    │ Skill    │ │
          │  [Download Resume] │  Gaps    │ │
          │                    └──────────┘ │
          └─────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Backend
- **[Express.js v5](https://expressjs.com/)** — REST API server
- **[MongoDB + Mongoose](https://mongoosejs.com/)** — Database & ORM
- **[@google/genai](https://www.npmjs.com/package/@google/genai)** — Gemini 2.0 Flash AI model
- **[Puppeteer](https://pptr.dev/)** — Headless browser for PDF generation
- **[pdf-parse v2](https://www.npmjs.com/package/pdf-parse)** — Resume PDF text extraction
- **[JWT + bcryptjs](https://www.npmjs.com/package/jsonwebtoken)** — Auth & password hashing
- **[multer](https://www.npmjs.com/package/multer)** — File upload handling
- **[Zod + zod-to-json-schema](https://zod.dev/)** — AI response schema validation

### Frontend
- **[React 19](https://react.dev/)** + **[Vite 7](https://vitejs.dev/)** — UI framework & build tool
- **[React Router v7](https://reactrouter.com/)** — Client-side routing
- **[Axios](https://axios-http.com/)** — HTTP client
- **[Sass/SCSS](https://sass-lang.com/)** — Styling

---

## 📁 Project Structure

```
Project/
├── README.md
├── Backend/
│   ├── server.js                    # Entry point
│   ├── package.json
│   ├── .env.example                 # Environment variable template ← copy to .env
│   └── src/
│       ├── app.js                   # Express setup, middleware, routes
│       ├── config/
│       │   └── database.js          # MongoDB connection
│       ├── controllers/
│       │   ├── auth.controller.js              # Register, login, logout, get-me
│       │   ├── interview.controller.js         # Generate report, get reports, resume PDF
│       │   └── mock.interview.controller.js    # 🆕 Mock interview chat
│       ├── middlewares/
│       │   ├── auth.middleware.js    # JWT verification + token blacklist check
│       │   └── file.middleware.js    # Multer file upload (3MB limit)
│       ├── models/
│       │   ├── user.model.js
│       │   ├── blacklist.model.js
│       │   └── interviewReport.model.js
│       ├── routes/
│       │   ├── auth.routes.js        # /api/auth/*
│       │   └── interview.routes.js   # /api/interview/*
│       └── services/
│           ├── ai.service.js                   # Report generation + tailored resume AI
│           └── mock.interview.service.js       # 🆕 Mock interview AI chat
│
└── Frontend/
    ├── index.html
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── app.routes.jsx
        ├── style.scss
        └── features/
            ├── auth/
            │   ├── auth.context.jsx
            │   ├── hooks/useAuth.js
            │   ├── services/auth.api.js
            │   ├── components/Protected.jsx
            │   └── pages/
            │       ├── Login.jsx
            │       └── Register.jsx
            └── interview/
                ├── interview.context.jsx
                ├── hooks/useInterview.js
                ├── services/interview.api.js
                ├── style/
                │   ├── home.scss
                │   ├── interview.scss
                │   └── mock.interview.scss     # 🆕 Mock interview styles
                └── pages/
                    ├── Home.jsx        # Create new interview plan
                    └── Interview.jsx   # View report + mock interview chat
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v20.16+** (required by `pdf-parse` v2)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally **or** a [MongoDB Atlas](https://www.mongodb.com/atlas) connection string
- A **Google Gemini API key** — get one free at [aistudio.google.com/apikey](https://aistudio.google.com/apikey)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/interview-ai.git
cd interview-ai
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

> ⚠️ **Note:** The first `npm install` downloads Chromium (~200 MB) for Puppeteer. This is a one-time step and may take a few minutes.

Copy the environment template:

```bash
cp .env.example .env
```

Edit **`Backend/.env`**:

```env
# MongoDB — local instance or Atlas connection string
MONGO_URI=mongodb://localhost:27017/interview-ai

# Google Gemini API Key — https://aistudio.google.com/apikey
GOOGLE_GENAI_API_KEY=your_api_key_here

# JWT Secret — any long, random, private string
JWT_SECRET=your_super_secret_jwt_key
```

Start the server:

```bash
npm run dev
# ✅  Server running at http://localhost:3000
# ✅  Connected to Database
```

### 3. Frontend Setup

Open a **new terminal**:

```bash
cd Frontend
npm install
npm run dev
# ✅  App running at http://localhost:5173
```

---

## 🔌 API Reference

### Auth — `/api/auth`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/register` | Public | Create a new account |
| `POST` | `/login` | Public | Login and set JWT cookie |
| `GET` | `/logout` | Public | Clear cookie, blacklist token |
| `GET` | `/get-me` | 🔒 Private | Get current logged-in user |

### Interview — `/api/interview`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/` | 🔒 Private | Generate a new interview report |
| `GET` | `/` | 🔒 Private | Get all reports for logged-in user |
| `GET` | `/report/:interviewId` | 🔒 Private | Get a specific report by ID |
| `POST` | `/resume/pdf/:reportId` | 🔒 Private | Download AI-tailored resume as PDF |
| `POST` | `/mock-chat/:reportId` | 🔒 Private | 🆕 Send message to AI mock interviewer |

#### Generate Report — `POST /api/interview/`
Accepts `multipart/form-data`:

| Field | Type | Required | Description |
|---|---|---|---|
| `resume` | File (PDF) | ✴️ | Candidate's resume |
| `jobDescription` | string | ✅ | Full job description text |
| `selfDescription` | string | ✴️ | Brief background if no resume |

> ✴️ At least one of `resume` or `selfDescription` must be provided.

#### Mock Interview Chat — `POST /api/interview/mock-chat/:reportId`

```json
{
  "userMessage": "I have 3 years of experience with React and TypeScript...",
  "messages": [
    { "role": "model", "text": "Welcome! Let us begin. Can you walk me through your React experience?" },
    { "role": "user",  "text": "Sure! I have been working with React for about 3 years..." }
  ]
}
```

---

## 🎤 Using the Mock Interview

1. Open any interview report and click the **"Mock Interview"** tab
2. Press **"Start Mock Interview"**
3. The AI greets you and asks the first question from your generated plan
4. Type your answer → press **Enter** to send *(Shift+Enter for a new line)*
5. The AI gives brief constructive feedback and moves to the next question
6. Press **"Reset"** to start a fresh session anytime

**The AI interviewer knows:**
- Your job title and full job description
- Your self-description / resume content
- Your identified skill gaps and their severity levels
- All your generated technical and behavioral questions

---

## ⚙️ Environment Variables

| Variable | Required | Description |
|---|---|---|
| `MONGO_URI` | ✅ | MongoDB connection string (local or Atlas) |
| `GOOGLE_GENAI_API_KEY` | ✅ | Gemini API key from Google AI Studio |
| `JWT_SECRET` | ✅ | Secret string for signing JWT tokens |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **ISC License**.

---

