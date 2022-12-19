import React, { useState } from "react";
import Form from "./components/form"
import NamesList from "./components/NamesList";

function App() {
  const [myNames, setMyNames] = useState([])


  const handleNewName = (name) => {
    setMyNames([...myNames, name]) // copia todo el array y le agrega el name
  }


  return (
    <>
      <Form handleName={handleNewName} />
      <NamesList names={myNames} />
    </>
  );
}

export default App;
