/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function PasswordGenerator({
  strength,
  setStrength,
  value,
  setValue,
  argu,
  setArguments,
  generatePassword,
  setPass,
}) {
  return (
    <section className="pass-generator ">
      <PasswordLength value={value} setValue={setValue} />
      <PasswordStrengthOptions
        strength={strength}
        setStrength={setStrength}
        argu={argu}
        setArguments={setArguments}
      />
      <StrengthStatus strength={strength} />
      <button
        className="btn-generate"
        onClick={() => setPass(generatePassword(argu))}
      >
        <p>generate</p>
        <FontAwesomeIcon icon={faArrowRight} className="arrow" />
      </button>
    </section>
  );
}

function PasswordLength({ value, setValue }) {
  return (
    <section className="pass-length inside-container">
      <div className="head">
        <div className="name">character length</div>
        <div className="char-value">{value}</div>
      </div>
      <div className="slider">
        <input
          type="range"
          min="8"
          max="20"
          value={value}
          id="myRange"
          onChange={({ target: { value: radius } }) => {
            setValue(radius);
          }}
        ></input>
      </div>
    </section>
  );
}

const options = [
  "Include Uppercase Letters",
  "Include Lowercase Letters",
  "Include Numbers",
  "Include SymboLs",
];

const levels = ["too weak !", "weak", "medium", "strong"];
const colorLevels = ["#f74b4b", "#fb7a56", "#f8cb63", "#a3ffae"];
function PasswordStrengthOptions({
  strength,
  setStrength,
  argu,
  setArguments,
}) {
  return (
    <div className="options inside-container">
      {options.map((e, i) => {
        return (
          <label className="option" key={i}>
            <p className="name">{e}</p>
            <CheckInputs
              strength={strength}
              setStrength={setStrength}
              name={e.replace(/\s/g, "")}
              argu={argu}
              setArguments={setArguments}
            />
          </label>
        );
      })}
    </div>
  );
}

const CheckInputs = ({ strength, setStrength, name, argu, setArguments }) => {
  const [check, setCheck] = useState(false);
  function changeStrength(increase, name) {
    let newArguments = { ...argu };
    if (increase) {
      setStrength(() => strength + 1);
    } else {
      setStrength(() => strength - 1);
    }
    newArguments[name] = !check;
    setArguments({ ...newArguments });
    setCheck(() => !check);
  }
  return (
    <>
      <input
        type="checkbox"
        className="check-box"
        checked={check}
        name={name}
        onClick={() =>
          check ? changeStrength(false, name) : changeStrength(true, name)
        }
      ></input>
      <span className="check-mark"></span>
    </>
  );
};

function StrengthStatus({ strength }) {
  return (
    <section className="s-section inside-container">
      <div className="strength">
        <p className="name">strength</p>
        <div className="status">
          <p className="value">{levels[strength - 1]}</p>
          <div className="progress">
            {options.map((e, i) => {
              return (
                <span
                  key={i}
                  style={
                    i < strength
                      ? {
                          background: colorLevels[strength - 1],
                          borderColor: colorLevels[strength - 1],
                        }
                      : {
                          background: "transparent",
                          borderColor: "var(--normal)",
                        }
                  }
                ></span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PasswordGenerator;
