import { useState, useEffect } from "react";
import ImageUploader from "./components/ImageUploader";
import ResultCard from "./components/ResultCard";
import LoadingSpinner from "./components/LoadingSpinner";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import "./App.css";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

/**
 * Recognizes the breed of an animal from an image using Gemini Structured Outputs.
 * @param {string} base64Image - The raw base64 string (with or without the data prefix)
 * @param {string} mimeType - The MIME type of the image (default: "image/jpeg")
 */
async function recognizeBreed(base64Image, mimeType = "image/jpeg") {
  const genAI = new GoogleGenerativeAI(API_KEY);
  
  // STRIP PREFIX: The API will crash if the string includes "data:image/jpeg;base64,"
  const cleanBase64 = base64Image.includes(",") 
    ? base64Image.split(",")[1] 
    : base64Image;

  // Define the exact JSON structure you want returned
  const responseSchema = {
    type: SchemaType.OBJECT,
    properties: {
      breed: { 
        type: SchemaType.STRING, 
        description: "Exact breed name, or 'Not an animal' if no animal is present" 
      },
      confidence: { 
        type: SchemaType.STRING, 
        description: "Confidence percentage, e.g., '95%'" 
      },
      traits: { 
        type: SchemaType.STRING, 
        description: "Detailed physical description including size, coat, color, and distinctive features. Leave empty if not an animal." 
      },
      temperament: { 
        type: SchemaType.STRING, 
        description: "Personality traits and behavioral characteristics. Leave empty if not an animal." 
      },
      care: { 
        type: SchemaType.STRING, 
        description: "Specific care tips including diet, exercise, and grooming needs. Leave empty if not an animal." 
      }
    },
    required: ["breed", "confidence", "traits", "temperament", "care"]
  };

  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: responseSchema,
    }
  });

  const prompt = "You are an expert animal breed identifier. Analyze this image carefully and identify the animal.";

  // Use cleanBase64 here instead of the raw input
  const result = await model.generateContent([
    prompt,
    { inlineData: { data: cleanBase64, mimeType: mimeType } },
  ]);

  try {
    return JSON.parse(result.response.text());
  } catch (err) {
    throw new Error("Invalid AI response format");
  }
}

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cooldown, setCooldown] = useState(false);

  const handleImageSelect = (img) => {
    setImage(img);
    setResult(null);
    setError(null);
  };

  const handleRecognize = async () => {
    if (!image || cooldown) return;
    
    // Quick safeguard: ensure API key exists before trying to call the server
    if (!API_KEY) {
      setError("API Key is missing. Check your .env file and restart the server.");
      return;
    }

    setLoading(true);
    setCooldown(true);
    setError(null);

    try {
      // Try to extract the MIME type from the file object, otherwise fallback to jpeg
      const mimeType = image.file?.type || image.type || "image/jpeg";
      
      const data = await recognizeBreed(image.base64, mimeType);
      setResult(data);
    } catch (err) {
      console.error("Full Error Details:", err); // Logs to your browser console to help debug
      
      if (err.message?.includes("429")) {
        setError("Too many requests. Please wait a moment and try again.");
      } else {
        setError("Failed to reach server or process image. Please check your network and try again.");
      }
    } finally {
      setLoading(false);
      setTimeout(() => setCooldown(false), 10000);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>🐾 Breed Recognizer</h1>
        <p>Upload a photo of an animal to identify its breed using AI</p>
      </header>

      <main>
        <ImageUploader onImageSelect={handleImageSelect} />

        {image && (
          <div className="preview-section">
            <img src={image.preview} alt="Uploaded" className="preview-img" />
            <div></div>
            <button
              className="btn"
              onClick={handleRecognize}
              disabled={loading || cooldown}
            >
              {loading ? "Analyzing..." : cooldown ? "Please wait..." : "Recognize Breed"}
            </button>
          </div>
        )}

        {loading && <LoadingSpinner />}
        {error && <p className="error">{error}</p>}
        {result && <ResultCard result={result} />}
      </main>
    </div>
  );
}

export default App;