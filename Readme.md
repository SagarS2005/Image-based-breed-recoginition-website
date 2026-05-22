# AI-Based Animal Breed Recognition System

An AI-powered web application that identifies animal breeds from uploaded images using the Google Gemini 2.0 Flash Vision API. The system analyzes animal photos and returns structured breed information including confidence score, physical traits, temperament, and care recommendations.

Built with React.js + Vite and powered by Google's multimodal generative AI.

---

# Features

* Secure Login Authentication
* Drag & Drop Image Upload
* AI-Based Breed Recognition using Gemini 2.0 Flash
* Structured Breed Information Output
* Fast Recognition Response
* Confidence Score with Detailed Analysis
* API Cooldown Protection against Rate Limits
* Error Handling for Invalid Inputs & API Failures
* Responsive User Interface

---

# Tech Stack

| Technology                  | Purpose              |
| --------------------------- | -------------------- |
| React.js                    | Frontend Framework   |
| Vite                        | Build Tool           |
| Google Gemini 2.0 Flash API | AI Breed Recognition |
| React Router v6             | Routing              |
| Lucide React                | Icons                |
| CSS                         | Styling              |
| JavaScript (JSX)            | Application Logic    |

---

# Application Workflow

1. User logs into the system.
2. User uploads or drags an animal image.
3. Image is converted into Base64 format.
4. Gemini Vision API analyzes the image.
5. Structured breed information is returned.
6. Result card displays:

   * Breed Name
   * Confidence Score
   * Physical Traits
   * Temperament
   * Care Tips

---

# Project Structure

```bash
src/
│
├── components/
│   ├── ImageUploader.jsx
│   ├── ResultCard.jsx
│   ├── LoadingSpinner.jsx
│   └── Login_Page.jsx
│
├── App.jsx
├── Run.jsx
├── main.jsx
│
├── App.css
└── loginPage.css
```

---

# Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/animal-breed-recognition.git
cd animal-breed-recognition
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

Get your API key from Google AI Studio.

## 4. Start Development Server

```bash
npm run dev
```

---

# Demo Login Credentials

```text
Username: Sagar
Password: Radha
```

These credentials are hardcoded for demonstration purposes only.

---

# AI Response Schema

The application uses Gemini Structured Output with the following JSON schema:

```json
{
  "breed": "String",
  "confidence": "String",
  "traits": "String",
  "temperament": "String",
  "care": "String"
}
```

---

# Supported Image Formats

* JPG / JPEG
* PNG
* GIF
* BMP
* WEBP

---

# Security & Reliability Features

* Login-based access control
* Environment variable API key protection
* Client-side cooldown timer (10 seconds)
* File type validation
* API error handling
* Graceful fallback messaging

---

# Testing

## Functional Testing Performed

| Test Case               | Status |
| ----------------------- | ------ |
| Valid Login             | Pass   |
| Invalid Login           | Pass   |
| Upload Animal Image     | Pass   |
| Upload Non-Image File   | Pass   |
| Upload Non-Animal Image | Pass   |
| API Rate Limit Handling | Pass   |
| Drag & Drop Upload      | Pass   |
| Missing API Key         | Pass   |

---

# Future Improvements

* Real backend authentication
* Database integration
* Camera capture support
* Breed recognition history
* User accounts & profiles
* Support for plant/object recognition
* AI model switching support

---

# Screenshots

Add project screenshots inside a `/screenshots` folder.

```md
/screenshots/login.png
/screenshots/home.png
/screenshots/result.png
```

---

# Learning Outcomes

This project demonstrates:

* Real-world AI API integration
* Structured JSON generation using LLMs
* React component architecture
* Frontend-only AI applications
* Async API handling
* State management with React Hooks

---

# References

* React.js Documentation
* Vite Documentation
* Google Gemini API Docs
* React Router Documentation
* Lucide React Icons
* MDN FileReader API

---

# Author

**Sagar**

AI-Based Animal Breed Recognition System — 2026

---

# Final Note

This project demonstrates practical AI integration in a modern frontend application using React.js and Google's Gemini Vision API.

Currently, the application is frontend-only. For production-level deployment, backend authentication, secure API handling, server-side validation, and proper database integration would be necessary.
