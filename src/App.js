import React from "react"
import logo from "./logo.svg";
import "./App.css";
import Componente from "./rutadelcurso/ComponentesOne";
import Propiedades from "./rutadelcurso/Propiedades";
import Estado from "./rutadelcurso/Estado";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
        <section>
          <Componente msg="Soy un programador junio" />
          <Propiedades cadena="verdadero" numero = {58} numeroOne = {78}></Propiedades>
          <hr/>
          <Estado/>


        </section>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
