export default function ResultCard({ result }) {
  return (
    <div className="result-card">
      <h2>🐾 {result.breed}</h2>
      <p className="confidence">Confidence: {result.confidence}</p>
      <div className="section"><h3>Physical Traits</h3><p>{result.traits}</p></div>
      <div className="section"><h3>Temperament</h3><p>{result.temperament}</p></div>
      <div className="section"><h3>Care Tips</h3><p>{result.care}</p></div>
    </div>
  );
}