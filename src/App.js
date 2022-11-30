import "./App.css";
import React from "react";
import github from "./github.png";
function App() {
  function handleClick(e) {
    e.preventDefault();
    var form_text = document.getElementById("text").value;
    document.getElementById("qr").style.visibility = "visible";
    document.getElementById(
      "qr"
    ).src = `http://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${form_text}`;
  }

  return (
    <div className="App">
      <a
        href="https://github.com/YuvarajSingh-0/simplest-qrcode-gen/tree/master"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} id="git" alt="github" />
      </a>
      <h1>Simplest QR Code Generator</h1>
      <form>
        <input type="text" id="text" placeholder="Enter Text" />
        <div>
          <img src="" id="qr" alt="qrcode" />
        </div>
        <button type="Submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
