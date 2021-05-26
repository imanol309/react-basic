import React, {Component} from "react";
import tacks from "./sample/tasks.json"
// import Tacks from "./components/tacksOne"
// import Formulario from "./components/formulario"
import DatosBD from './components/datosBD'
import "./App.css";


class Aplicacion extends Component{
  
  state = {
    tacks: tacks
  }

  mostrar = (id,nombre,edad) => {
    const newMostrar = {
      id: id,
      nombre: nombre,
      edad: edad
    }
    this.setState({
      tacks: [...this.state.tacks, newMostrar]  
    })
  }

  render(){
    return (
        <div>
          <DatosBD/>
          {/* <Formulario mostrar={this.mostrar} />
          <Tacks tacks ={this.state.tacks} /> */}
        </div>
    )
  }
}

export default Aplicacion;