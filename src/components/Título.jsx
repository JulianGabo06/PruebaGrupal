import React from "react";

const Título = ({ nombre, edad }) => {
  console.log(nombre, edad);
  return (
    <>
      <h1>
        Mi nombre es {nombre} y mi edad es {edad}
      </h1>
    </>
  );
};

export default Título;
