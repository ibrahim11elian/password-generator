/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PasswordField from "./components/password_field";
import PasswordGenerator from "./components/password_generator";

function App() {
  const [strength, setStrength] = useState(0);
  const [value, setValue] = useState(8);
  const [pass, setPass] = useState("");

  const [argu, setArguments] = useState({
    length: 8,
    IncludeUppercaseLetters: false,
    IncludeLowercaseLetters: false,
    IncludeNumbers: false,
    IncludeSymboLs: false,
  });

  useEffect(() => {
    let newArguments = { ...argu };
    newArguments.length = value;
    setArguments({ ...newArguments });
  }, [value]);
  return (
    <div className="app">
      <div className="container">
        <header className="title">key master</header>
        <PasswordField pass={pass} />
        <PasswordGenerator
          strength={strength}
          setStrength={setStrength}
          value={value}
          setValue={setValue}
          argu={argu}
          setArguments={setArguments}
          generatePassword={generatePassword}
          setPass={setPass}
        />
      </div>
    </div>
  );
}

export default App;

function generatePassword(options) {
  let chars = "";
  let password = "";

  if (options.IncludeLowercaseLetters) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (options.IncludeUppercaseLetters) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (options.IncludeNumbers) {
    chars += "0123456789";
  }
  if (options.IncludeSymboLs) {
    chars += "!@#$%^&*()_+-=[]{}|;:,.<>/?`~";
  }

  for (let i = 0; i < options.length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}
