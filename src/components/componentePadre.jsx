import React from 'react'
import ComponenteHijo from './componenteHijo'


class ComponentePadre extends React.Component {


    enviarPadre() {
        console.log('aqui estoy')
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Soy el padre</h1>
                </header>
                <ComponenteHijo enviarPadre={this.enviarPadre} />
            </div>
        )
    }
}

export default ComponentePadre