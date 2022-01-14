import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router-dom';

export default class CreProducto extends Component {

    categoria = React.createRef();
    descripci = React.createRef();
    costo = React.createRef();
    existenci = React.createRef();
    imagen = React.createRef();

    state = { status: false }

    nuevoProducto = (e) => {
        e.preventDefault();
        var cat = this.categoria.current.value;
        var des = this.descripci.current.value;
        var cos = this.costo.current.value;
        var exi = this.existenci.current.value;
        var img = this.imagen.current.value;
        
        var Producto = {
            IdCategoria: cat,
            Descripcion: des,
            Costo: cos,
            Existencia: exi,
            Imagen: img,
        };
        var url = Global.urljulitas + '/productos';
        axios.post(url, Producto).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Nuevo Producto</h1>
                <form onSubmit={this.nuevoProducto} style={{width: "50%", margin: "auto"}}>
                    <label>Categoria: </label>
                    <input type="number" name="Categoria" className="form-control" ref={this.categoria} />
                    <label>Descripcion: </label>
                    <input type="text" name="Descripcion" className="form-control" ref={this.descripci} />
                    <label>Costo: </label>
                    <input type="number" name="Costo" className="form-control" ref={this.costo} />
                    <label>Existencia: </label>
                    <input type="number" name="Existencia" className="form-control" ref={this.existenci} />
                    <label>Imagen: </label>
                    <input type="text" name="Imagen" className="form-control" ref={this.imagen} /><br />
                    <button className="btn btn-success">Guardar</button>
                </form>
            </div>
        )
    }
}
