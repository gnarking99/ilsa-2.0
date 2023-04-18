import React, { useEffect, useRef } from "react";

const WebcamBox = () => {
  // Crea una referencia para el elemento de video
  const videoRef = useRef(null);

  // Efecto para acceder y mostrar la cámara web
  useEffect(() => {
    const videoElement = videoRef.current;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoElement) {
            videoElement.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error("Error accessing webcam:", error);
        });
    } else {
      console.error("Webcam not supported by this browser.");
    }

    // Función de limpieza para detener la transmisión de la cámara web
    return () => {
      if (videoElement && videoElement.srcObject) {
        videoElement.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="webcam-box">
      <div className="video-container">
        <video ref={videoRef} autoPlay muted playsInline />
      </div>
    </div>
  );
};

export default WebcamBox;
