import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";

  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    console.log('uma nova nota foi criada ' + this.titulo + this.texto);
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >

        <input
          type="text"
          placeholder="Insira um título para sua nota"
          className="form-control"
          onChange={this._handleMudancaTitulo.bind(this)}
        />

        <br />

        <textarea
          rows={15}
          placeholder="Descreva sua nota..."
          className="form-control"
          onChange={this._handleMudancaTexto.bind(this)}
        />

        <br />
        <button className="btn btn-primary form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
