import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

// the field that password appearing in
function PasswordField({ pass }) {
  return (
    <section className="pass-field">
      <p className="password" style={pass ? { color: "var(--normal)" } : null}>
        {pass || "P4$5W0rD !"}
      </p>
      <p className="copied">copied</p>
      <FontAwesomeIcon
        icon={faCopy}
        className="copy-icon"
        onClick={() => {
          if (pass) {
            copied();
            copyToClipBoard(pass);
          }
        }}
      />
    </section>
  );
}

// display the copied word by clicking on copy button
function copied() {
  const cpy = document.querySelector(".copied");
  cpy.style.display = "block";
  setTimeout(() => {
    cpy.style.display = "none";
  }, 1000);
}

function copyToClipBoard(pass) {
  // Copy the text inside the text
  navigator.clipboard.writeText(pass);
}

export default PasswordField;
