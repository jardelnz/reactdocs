import React, { Component } from "react";
import "./estilo.css";
class CardNota extends Component {
  render() {
    return (
<div class="card">
  <div class="card-body">
    <h5 class="card-title">{this.props.titulo}</h5>
    <p class="card-text">{this.props.text}</p>
  </div>
</div>
    );
  }
}

export default CardNota;
