import React from "react";
import "./App.css";


// function Cabecera(props) {
//   return (
//     <div className = "hola">
//       {props.text}
//     </div>
//   )
// }

class Cabecera extends React.Component{
  state = {
    show: 1
  }

  cambiar2 = () => {
    this.setState({show:2})
  }

  cambiar1 = () =>{
    this.setState({show:1})
  }

  render() {
    if (this.state.show <= 1){
      return (
        <div className = "hola">
          {this.props.text}
          <hr/>
          <button onClick = {this.cambiar2}>Cambiar Estado</button>
        </div>
      )
    }else{
      return (
        <div>
            <h2>No existe ningun usuario</h2>
            <button onClick = {this.cambiar1} >Cambiar Estado</button>
        </div>
      )
    }
  }
}


function App() {
  return (
  <div className = "hola">
    <Cabecera text = "Hola"/>
    <hr/>
    <Cabecera text = "Hello"/>
    <hr/>
    <Cabecera text = "KLK"/>
  </div>
  )
}


export default App;
