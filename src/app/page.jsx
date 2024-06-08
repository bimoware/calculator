"use client";
import ButtonGroup from "@/components/ButtonGroup";
import InnOut from "@/components/InOut";
import "@/style.css";
import { useState } from "react";

export default function Home() {
  let [exp, setExp] = useState({ math : "", cursor: 0});
  return (
    <main>
      <InnOut exp={exp} />
      <ButtonGroup 
      setExp={setExp}
      exp={exp}/>
      <br/>
      <span>Cursor: {exp.cursor}<br/>Expression: {exp.math}</span>
    </main>
  );
}
