import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    titulo: "",
    descripcion: ""
  };
  handleChange = e => {
    this.setState( { [e.target.name]: e.target.value});
  };
  handleSubmit = e => {
    e.preventDefault();
    const { titulo, descripcion} = this.state;
    const chisme = {titulo, descripcion};
    const conf = {
      method: "post",
      body: JSON.stringify(chisme),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };
  render() {
    const { titulo, descripcion} = this.state;
    return (
      <React.Fragment >
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Titulo</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="titulo"
                onChange={this.handleChange}
                value={titulo}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Descripcion</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="descripcion"
                onChange={this.handleChange}
                value={descripcion}
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Publicar chisme hehe
            </button>
          </div>
        </form>
      </div>
      <div>Nuevo Chisme</div>
      </React.Fragment>
    );
  }
}
export default Form;