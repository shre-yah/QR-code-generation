import React, { useState, useEffect } from "react";
import "./Qrgenerator.css";

import QRCode from "qrcode";

function Qrgenerator() {
  const [Text, setText] = useState("");
  const [qrData, setqrData] = useState("");

  useEffect(() => {
    const Generateqrcode = async () => {
      try {
        const dataURL = await QRCode.toDataURL(Text);
        setqrData(dataURL);
      } catch (e) {
        console.error("Error generating QR Code");
      }
    };
    Text && Generateqrcode();
  }, [Text]);

  return (
    <>
      <div className="container">
        <div className="inputwrapper">
          <h1>
            <i className="ri-qr-code-line"></i>
            QR CODE GENERATOR
          </h1>
          <input
            type="text"
            placeholder="Enter URL here..."
            value={Text}
            autoFocus
            onChange={(e) => {
              setText(e.target.value.trim());
            }}
          />
          <small>
            <i className="ri-qr-code-fill"></i> Your QR Code Will Get Generated
            Here Automatically
          </small>
        </div>

        <div className="qrImagewrapper">
          <h2>Your QR Code Here...</h2>
          <div className="qrImage">
            {qrData && Text && <img src={qrData} alt=" QR code" />}
          </div>
          <h3>{Text}</h3>
          <a href={qrData} download="qr.png">
            <i className="ri-download-line"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Qrgenerator;
