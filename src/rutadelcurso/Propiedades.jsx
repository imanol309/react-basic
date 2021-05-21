import React from "react"

export default function Propiedades(props) {
    return (
        <div>
            <hr />
            <h2>
                imanol es programador junior {props.porDefecto}
            </h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.numeroOne}</li>
            </ul>
        </div>
    )
}
 
Propiedades.defaultProps = {
    porDefecto: "las props"
}
