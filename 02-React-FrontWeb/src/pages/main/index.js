import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {

    // declaração de estado para armazenar valores.
    // o estado é declarado em formato de objeto
    state = {
        products: [],
        productsInfo: {},
        page: 1,
    }

    // essa chamada é feita sempre que o componente é montado na aplicação.
    componentDidMount(){
        this.loadProducts();
    };

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const { docs, ...productsInfo } = response.data;

        // atribui uma alteração no estado.
        this.setState({
            products: docs,
            productsInfo: productsInfo,
            page: page,
        });

        // Testando Resposta dos dados vindo da Api
        console.log(response.data.docs);
    }

    // funções para navegar entre as páginas de resultado da API 
    prevPage = () => {
        const { page } = this.state;
        // if de ponto morto - end para a função se condição atendida
        if ( page === 1 ) return; 
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }
    nextPage = () => {
        const { page, productsInfo } = this.state;
        // if de ponto morto - end para a função se condição atendida
        if ( page === productsInfo.pages ) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    render(){
        // desestrutura do estado para recuperar as informações
        const { products, page, productsInfo } = this.state;

        return (
            <div className="lista-produtos">
                {products.map(products => (
                    <article key={products._id}>
                        <strong>{products.title}</strong>
                        <p>{products.description}</p>
                        
                        {/* substitui a tag a como função de link para acessar a navegação */}
                        <Link to={`/products/${products._id}`}>Detalhes</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>
                        Anterior
                    </button>
                    <button disabled={page === productsInfo.pages} onClick={this.nextPage}>
                        Próxima
                    </button>
                </div>
            </div>
        );
    }
}