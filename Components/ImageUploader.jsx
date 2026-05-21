import { useRef, useState } from "react";
import { Upload, ImageIcon } from "lucide-react";

export default function ImageUploader({ onImageSelect }) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef();

  const handleFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return alert("Please upload an image file.");
    const reader = new FileReader();
    reader.onload = (e) => onImageSelect({ file, preview: e.target.result, base64: e.target.result.split(",")[1] });
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`uploader ${dragging ? "dragging" : ""}`}
      onClick={() => inputRef.current.click()}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
    >
      <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => handleFile(e.target.files[0])} />
      <Upload size={40} />
      <p>Drag & drop an animal image here</p>
      <span>or click to browse</span>
    </div>
  );
}