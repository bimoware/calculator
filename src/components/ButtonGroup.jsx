"use client";

export default function ButtonGroup({ setExp, exp }) {
  function update(btn) {
    // CLEAR
    if(btn === "CLEAR"){
      return setExp({
        math: "",
        cursor: 0
      })
    }
    // DEF
    if(btn === "DEL"){
      return setExp({
        math: exp.math.slice(0,exp.cursor-1) + exp.math.slice(exp.cursor),
        cursor: exp.cursor ? exp.cursor - 1 : 0
      })
    }
    // <- ->
    if(["←", "→"].includes(btn)){
      let n = 0;
      if(btn === "←") return setExp({
        math: exp.math,
        cursor: exp.cursor ? (exp.cursor - 1) : exp.math.length
      })
      else if(btn === "→") return setExp({
        math: exp.math,
        cursor: exp.cursor === exp.math.length ? 0 : (exp.cursor +1 )
    })
      return setExp({
        math: exp.math,
        cursor: exp.cursor + n
      })
    }
    if(btn === "^") return setExp({
      math: exp.math.slice(0,exp.cursor) + "**()" + exp.math.slice(exp.cursor),
      cursor: exp.cursor + 3
    });

    // ...
    return setExp({
      math: exp.math.slice(0,exp.cursor) + btn + exp.math.slice(exp.cursor),
      cursor: exp.cursor + btn.length
    });
  }
  let btns = [
    ["←", "→", "DEL", "CLEAR"],
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    [".", "0", "^", "/"],
    ["<", ">", "(", ")"],
  ];
  return (
    <div className="box">
      {btns.map((btns, i) => {
        return (
          <div key={i} className="buttongroup">
            {btns.map((btn, i) => {
              return (
                <button className="box" key={i} onClick={() => update(btn)}>
                  {btn}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
