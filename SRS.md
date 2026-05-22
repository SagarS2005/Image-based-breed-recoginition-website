# Software Requirements Specification (SRS)
## AI-Based Animal Breed Recognition System — *Breed Recognizer*

**Prepared by:** Sagar | **Version:** 1.0 | **Date:** May 2026

---

## 1. Introduction

Breed Recognizer is a React.js web application that identifies animal breeds from uploaded images using Google's Gemini 2.0 Flash AI. After logging in, a user can upload any animal photo and instantly receive the breed name, confidence level, physical traits, temperament, and care tips — all in a single-page browser interface with no backend server required.

---

## 2. Purpose & Scope

**Purpose:** To provide a simple, browser-based tool that identifies animal breeds from photos using AI.

**Scope:**
- User logs in and accesses the breed recognition tool
- User uploads an animal image via drag-and-drop or file browser
- System sends the image to Google Gemini API and displays structured breed information
- System handles errors and enforces a cooldown between requests

---

## 3. Functional Requirements

| # | Requirement |
|---|-------------|
| FR-01 | System shall display a Login page at `/` with username and password fields |
| FR-02 | Valid credentials (Sagar / 'password') shall redirect user to `/home`; invalid credentials shall show an alert |
| FR-03 | Main page shall provide a drag-and-drop and click-to-browse image upload zone |
| FR-04 | Only image files (`image/*`) shall be accepted; other file types trigger an alert |
| FR-05 | After upload, system shall show an image preview and a "Recognize Breed" button |
| FR-06 | On button click, system sends Base64 image to Gemini 2.0 Flash API with a defined JSON schema |
| FR-07 | API response shall include: breed name, confidence %, traits, temperament, and care tips |
| FR-08 | If the image contains no animal, the breed field shall return `"Not an animal"` |
| FR-09 | On API failure (429 or network error), system shall display a clear error message |
| FR-10 | A 10-second cooldown shall be enforced after each API call to prevent rate limiting |

---

## 4. Non-Functional Requirements

| # | Requirement |
|---|-------------|
| NFR-01 | AI response time shall be within 3–8 seconds under normal network conditions |
| NFR-02 | UI must remain responsive during API calls (non-blocking async/await) |
| NFR-03 | API key must be stored in `.env` file as `VITE_GEMINI_API_KEY`, never hardcoded |
| NFR-04 | Application must work on Chrome, Firefox, and Edge (latest versions) |

---

## 5. Software & Hardware Requirements

### Software

| Item | Requirement |
|------|------------|
| Framework | React.js 18+ |
| Build Tool | Vite + Node.js 18+ |
| AI API | Google Gemini 2.0 Flash (`@google/generative-ai`) |
| Routing | React Router v6 |
| Browser | Chrome / Firefox / Edge (latest) |
| Environment | `VITE_GEMINI_API_KEY` set in `.env` file |

### Hardware

| Component | Minimum |
|-----------|---------|
| Processor | Dual Core 1.6 GHz |
| RAM | 4 GB |
| Internet | Required (for Gemini API calls) |
| Display | 1024 × 768 or higher |

---

## 6. Constraints & Assumptions

- A valid Google Gemini API key is required; the app will not function without it
- This is a front-end only app — no backend server or database is used
- Login credentials are hardcoded (suitable for academic/demo use only)
- Image quality affects recognition accuracy; clear, well-lit photos give best results
- The Gemini API free tier has usage limits; heavy use may require a paid plan