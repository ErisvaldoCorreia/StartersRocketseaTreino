import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {

    state = {
        products: [],
    }

    componentDidMount(){
        this.loadProducts();
    };

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({products: response.data.docs })

        // Testando Resposta dos dados vindo da Api
        console.log(response.data.docs);
    }

    render(){
        return (
            <div className="lista-produtos">
                <h1>Contagem de Produtos: {this.state.products.length}</h1>
                
                {this.state.products.map(products => (
                    <h3 key={products._id}>{products.title}</h3>
                ))}
            </div>
        );
    }
}