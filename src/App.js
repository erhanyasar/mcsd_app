import React, { useState } from "react";
import { Selam, Naber } from "./components/Selam";
import "./css/App.css";

function App() {
  const [ornekDegisken, setOrnekDegisken] = useState("");

  const DegisiklikOlunca = (event) => {
    setOrnekDegisken(event.target.value);
    console.log(ornekDegisken);
  };

  return (
    <>
      <input
        defaultValue={ornekDegisken}
        placeholder="Adınızı giriniz..."
        onChange={(e) => DegisiklikOlunca(e)}
      ></input>
      <Selam isim={ornekDegisken} />
      <Naber />
    </>
  );
}

export default App;
