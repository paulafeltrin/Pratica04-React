//Crie um component de class
// Crie uma arrow function que receba uma mensagem e exiba na tela
// Crie uma arrow function que retorne o dobro de um número e exiba na tela

import React from "react";
import "./styles.css";

export default class App extends React.Component {
  mensagem = (msg) => {
    return <h2>{msg}</h2>;
  };

  dobro = (n) => {
    return <h2>O dobro é {n * 2}</h2>;
  };

  render() {
    return (
      <>
        <h1>Arrow function</h1>
        {this.mensagem("Mensagem nova na tela!")}
        {this.dobro(4)}
      </>
    );
  }
}
