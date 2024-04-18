import React, { useState } from "react";
import Título from "./components/Título";
import "./App.css";

const App = () => {
  const [edad, setEdad] = useState(null);
  const [nombre, setNombre] = useState("");
  const [infoArray, setInfoArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const InfoJulian = () => {
    setNombre("Julian");
    setEdad(19);
  };

  const InfoSantiago = () => {
    setNombre("Santiago");
    setEdad(16);
  };

  const handleSubmit = () => {
    setInfoArray([...infoArray, inputValue]);
    setInputValue("");
  };

  console.log(infoArray);

  return (  
    <div>
      <Título nombre={nombre} edad={edad} />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Info Julian</button>
      <button onClick={InfoJulian}>Info Julian</button>
      <button onClick={InfoSantiago}>Info Santiago</button>
      <ul>
        {infoArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
