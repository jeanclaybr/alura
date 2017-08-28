/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class NegociacaoController {
    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

    }
}
