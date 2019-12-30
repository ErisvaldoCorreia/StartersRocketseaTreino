import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {

    // declaração de estado para armazenar valores.
    // o estado é declarado em formato de objeto
    state = {
        products: [],
    }

    // essa chamada é feita sempre que o componente é montado na aplicação.
    componentDidMount(){
        this.loadProducts();
    };

    loadProducts = async () => {
        const response = await api.get('/products');

        // atribui uma alteração no estado.
        this.setState({products: response.data.docs })

        // Testando Resposta dos dados vindo da Api
        console.log(response.data.docs);
    }

    render(){
        
        // desestrutura do estado para recuperar produtos
        const { products } = this.state;

        return (
            <div className="lista-produtos">
                {products.map(products => (
                    <article key={products._id}>
                        <strong>{products.title}</strong>
                        <p>{products.description}</p>
                        <a href="#">Detalhes</a>
                    </article>
                ))}
            </div>
        );
    }

}