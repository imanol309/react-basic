import React, { Component } from 'react'

export default class DatosBD extends Component {

    state = {
        datos: []
    }

    componentDidMount = async () =>{
        const datosBD = await fetch('https://jsonplaceholder.typicode.com/photos')
        const datosEnJson = await datosBD.json();
        this.setState({datos: datosEnJson})
        console.log(datosEnJson)
   }

    render() {
        return (
            <div>
                { 
                    this.state.datos.map(datos => {
                        return (
                            <div key={datos.id}>
                                <p>{datos.id}</p>
                                <p>{datos.title}</p>
                                <p>{datos.url}</p>
                                <p>{datos.thumbnailUrl}</p>`
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
