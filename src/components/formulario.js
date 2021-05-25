import React,  { Component} from 'react';

class formulario extends Component {

    state = {
        id: '',
        nombre: '',
        edad: ''
    }

    enviarDatoss = (e) => {
        console.log(this.state);
        console.log("Accion quitada");
        e.preventDefault();
    }

    mostrarDatosEscrito = (r) => {
        console.log(r.target.name, r.target.value)
        this.setState({
            [r.target.name]: r.target.value
        })
    }

    render() {
        return (
            <form style={{marginLeft: '15%',
                            marginTop: '15%'}} 
            onSubmit={this.enviarDatoss}>
                <label>
                    Id
                    <input type="text" 
                    name="id" 
                    onChange={this.mostrarDatosEscrito}
                    value={this.state.id}/>
                </label>
                <label>
                    Nombre
                    <input type="text" 
                    name="nombre"
                    onChange={this.mostrarDatosEscrito}
                    value={this.state.nombre}/>
                </label>
                <label>
                    Edad
                    <input type="text" 
                    name="edad"
                    onChange={this.mostrarDatosEscrito}
                    value={this.state.edad}/>
                </label>
                <button type="submit">
                    ENVIAR DATOS
                </button>
            </form>
        )
    }
}

export default formulario;