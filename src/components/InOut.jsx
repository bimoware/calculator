"use client";
export default function InnOut({ exp }) {
  function eval2(math) {
    try {
      return eval(math);
    } catch (_) {
      return "...";
    }
  }
  return (
    <div>
      <div style={{ height: "50px" }} className="in box">
        <span><pre>
          {exp.math}
          <br />
          <span style={{display:"block"}} className="right">{" ".repeat(exp.cursor)}^</span></pre>
        </span>
      </div>
      <div className="in box">
        <span>= {eval2(exp.math)}</span>
      </div>
    </div>
  );
}
