import React, {Component} from "react";
import tacks from "./sample/tasks.json"
import Tacks from "./components/tacksOne"
import Formulario from "./components/formulario"
import "./App.css";

class Aplicacion extends Component{

  state = {
    tacks: tacks
  }

  render(){
    return (
        <div>
          <Formulario/>
          <Tacks tacks ={this.state.tacks}/>
        </div>
    )
  }
}

export default Aplicacion;