"use client";
import Latex from "react-latex-next";
import { Space_Mono } from "next/font/google";
import { useState } from "react";

const mono = Space_Mono({ subsets: ["latin"], weight:"400" });

function Calculator() {
  let [math, setMath] = useState("");
  let btns = [
    [...Array(10).keys()],
    ["+", "-", "x", "/"],
    ["!", ".", "(", ")"],
    ["CLEAR", "DEL"],
  ];

  function updateMath(btn) {
    console.log(btn);
    if (btn === "CLEAR") return setMath("");
    else if (btn === "DEL") return setMath(math.slice(0, -1));
    else if (btn === "x") return setMath(math + "*");
    else return setMath(math + btn);
  }

  return (
    <main className={mono.className}>
      {/* In */}
      <div className="box" id="in">
        {math}
      </div>
      {/* Out */}
      <div className="box" id="out">
        <Latex>{math ? "$" + (output(math) ?? "...") + "$" : ""}</Latex>
      </div>
      {/* Buttons */}
      <div className="box">
        {btns.map((btns, i) => (
          <div key={i} className="box">
            {btns.map((btn, i) => (
              <button key={i} onClick={() => updateMath(btn)}>
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
/**
 * @param {string} math
 */
function output(math) {
  try {
    return eval(math);
  } catch (err) {
    return;
  }
}

export default Calculator;
