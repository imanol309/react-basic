import React, { Component } from "react"

class Tacks extends Component {
    render() {
      return(
        this.props.tacks.map(e => 
        <p className = "hola" key={e.id}>
            Mi id es {e.id} mi nombre es {e.nombre} y tengo {e.edad} años
            <input type="checkbox" />
            <button className = "holaButton">
              X
            </button>
        </p> )
      )
    } 
}

export default Tacks;