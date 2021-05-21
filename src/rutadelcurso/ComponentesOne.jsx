import React, { Component } from "react";


// CREANDO UN COMPONENTE DESDE UNA FUNCIONAN DE FECHA O AROSFUNCION
const Componente = (props) => <h2>{props.msg}</h2>




// CREANDO COMPONEMTES CON FUNCIONES, ACTUALMENTE SON MAS USADAS QUE LAS CLASES
// function Componente(props){
//     return <h2>{props.msg}</h2>;
// }



// Creando compomente con clases, casi no es muy usados atualmente
// class Componente extends Component {
//   render() {
//     return <h2>{this.props.msg}</h2>;
//   }
// }

export default Componente;
