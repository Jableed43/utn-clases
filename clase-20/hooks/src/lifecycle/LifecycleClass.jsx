import { Component } from 'react';

class LifecycleClass extends Component {
    constructor(props){
        super(props)
    

    //estado inicial
    this.state = {
        count: 0
    }
}

//montaje
componentDidMount(){
    console.log('componente montado');
}

//actualizacion
componentDidUpdate(){
    console.log('componente actualizado')
}

//desmontaje
componentWillUnmount(){
    this.setState({count: 0})
}

//manejamos el incremento del contador
handleIncrement(){
    this.setState({count: this.state.count + 1})
}

//manejamos el desmontaje del componente
handleUnmount(){
    console.log('desmontando componente')
    this.componentWillUnmount()
}


    render() {
        return (
            <div>
                <p>Contador: {this.state.count} </p>
                <button onClick={this.handleIncrement}>Incrementar</button>
                <button  onClick={this.handleUnmount}>Desmontar componente</button>
            </div>
        )
    }

}

export default LifecycleClass;
