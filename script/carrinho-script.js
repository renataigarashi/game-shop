let btnCupom = document.querySelector('.btn-cupom');
let inputCupom = document.querySelector('#cupom');

let nomeLocalizacao = document.querySelector('#frete-localidade');
let valorFrete = document.querySelector('.valor-frete');
let precoTotal = document.querySelector('.preco-total');
let precoFrete = document.querySelector('.preco-frete');

let incrementar = document.querySelector('.bi-plus-square');
let decrementar = document.querySelector('.bi-dash-square');
let textoProduto = document.querySelector('.quantidade-numero');
let quantidadeProduto = parseInt(textoProduto.textContent);
let textoPreco = document.querySelector('.preco');
let precoInt = parseFloat(textoPreco.textContent);

incrementar.addEventListener('click', function() {
    quantidadeProduto++;
    textoProduto.innerHTML = quantidadeProduto;

    let precoFinal = quantidadeProduto * precoInt;
    textoPreco.textContent = precoFinal;
    let valorFreteAtualizado = parseFloat(precoFrete.textContent);

    if (!isNaN(valorFreteAtualizado)) {
        precoTotal.textContent = precoFinal + valorFreteAtualizado;
    } else {
        precoTotal.textContent = precoFinal;
    }
});

decrementar.addEventListener('click', function() {
    if (quantidadeProduto <= 1) {
        alert('A quantidade de produto não pode ser menor que 1');
    } else {
        quantidadeProduto--;
        textoProduto.innerHTML = quantidadeProduto;

        let precoFinal = quantidadeProduto * precoInt;
        textoPreco.textContent = precoFinal;
        let valorFreteAtualizado = parseFloat(precoFrete.textContent);

        if (!isNaN(valorFreteAtualizado)) {
            precoTotal.textContent = precoFinal + valorFreteAtualizado;
        } else {
            precoTotal.textContent = precoFinal;
        }
    }
});

let buscaCep = async () => {
    let cep = document.querySelector('#frete').value;
    if (cep.length != 8 || isNaN(cep)) {
        alert('CEP inválido, adicione um valor numérico de 8 dígitos');
    } else {
        let url = `https://viacep.com.br/ws/${cep}/json/`;

        let response = await fetch(url);
        let data = await response.json();

        mostrarLocalizacao(data);
    }
};

const mostrarLocalizacao = (data) => {
    if (data.erro) {
        valorFrete.textContent = 'CEP Inválido';
        precoFrete.textContent = '0'; 
        nomeLocalizacao.innerHTML = '';


        let valorFreteAtualizado = parseFloat(precoFrete.textContent);
        let precoFinal = quantidadeProduto * precoInt;

        if (!isNaN(valorFreteAtualizado)) {
            precoTotal.textContent = precoFinal + valorFreteAtualizado;
        } else {
            precoTotal.textContent = precoFinal;
        }
    } else {
        nomeLocalizacao.innerHTML = data.localidade;
        precoFrete.textContent = '10'; 

        let valorFreteAtualizado = parseFloat(precoFrete.textContent);
        let precoTotalFinal = quantidadeProduto * precoInt;
        
        if (!isNaN(valorFreteAtualizado)) {
            precoTotal.textContent = precoTotalFinal + valorFreteAtualizado;
        } else {
            precoTotal.textContent = precoTotalFinal;
        }
    }
};

btnCupom.addEventListener('click', function() {
    alert('Cupom inválido');
    inputCupom.value = '';
});
