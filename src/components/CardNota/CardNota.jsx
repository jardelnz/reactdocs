import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";

class CardNota extends Component {

  apagar(){
    let indice = this.props.indice;
    this.props.excluirNota(indice);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.titulo}</h5>
          <DeleteSVG onClick={this.apagar.bind(this)} />
          <p className="card-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default CardNota;
