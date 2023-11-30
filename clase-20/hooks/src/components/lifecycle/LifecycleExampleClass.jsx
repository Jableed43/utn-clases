import React, { Component } from 'react';

class LifecycleExampleClass extends Component {
  constructor(props) {
    super(props);

    // Estado inicial
    this.state = {
      count: 0
    };
  }

  // Método de montaje
  componentDidMount() {
    console.log('Componente montado');
    // Lógica de montaje (puede contener solicitudes de red, suscripciones, etc.)
  }

  // Método de actualización
  componentDidUpdate() {
    console.log('Componente actualizado');
    // Lógica para manejar cambios después de la actualización
  }

  // Método de desmontaje
  componentWillUnmount() {
    console.log('Componente desmontado');
    // Lógica de limpieza (puede contener cancelación de solicitudes o liberación de recursos)
    // En este ejemplo, reiniciamos el contador al desmontar el componente
    this.setState({ count: 0 });
  }

  // Método para manejar clics y actualizar el estado
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Método para desmontar el componente
  handleUnmount = () => {
    console.log('Desmontando componente...');
    // Desmontar el componente
    this.componentWillUnmount();
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Incrementar</button>
        <button onClick={this.handleUnmount}>Desmontar Componente</button>
      </div>
    );
  }
}

export default LifecycleExampleClass;
