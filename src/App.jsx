import { useEffect, useState } from "react";

export default function App() {
  const [tilt, setTilt] = useState({ alpha: 0, beta: 0, gamma: 0 });

  useEffect(() => {
    const handleOrientation = (event) => {
      setTilt({
        alpha: event.alpha?.toFixed(1),
        beta: event.beta?.toFixed(1),
        gamma: event.gamma?.toFixed(1),
      });
    };
    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "Arial" }}>
      <h1>📏 Levella Level Tool</h1>
      <div
        style={{
          margin: "30px auto",
          width: "200px",
          height: "200px",
          border: "5px solid #444",
          borderRadius: "50%",
          position: "relative",
          background: "#f9f9f9",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "limegreen",
            position: "absolute",
            top: `${100 + Number(tilt.beta) / 2}px`,
            left: `${100 + Number(tilt.gamma) / 2}px`,
            transform: "translate(-50%, -50%)`,
            transition: "top 0.1s, left 0.1s",
          }}
        ></div>
      </div>
      <p>
        <strong>Beta (front-back tilt):</strong> {tilt.beta}° <br />
        <strong>Gamma (side tilt):</strong> {tilt.gamma}° <br />
      </p>
      <p style={{ fontSize: "14px", color: "gray" }}>
        Tilt your phone to see the bubble move!
      </p>
    </div>
  );
}
