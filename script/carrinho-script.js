let btnFrete = document.querySelector('.btn-frete')
let btnCupom = document.querySelector('.btn-cupom')

let inputFrete = document.querySelector('#frete')
let inputCupom = document.querySelector('#cupom')

let totalComFrete = document.querySelector('.preco-total')
let valorFrete = document.querySelector('.valor-frete')




btnFrete.addEventListener('click', function() {
    if(inputFrete.value.length != 8 ){
        alert('CEP invalido, adicione um cep de 8 digitos')
    } else {
        totalComFrete.textContent = 'Total: R$ 309,00'
        valorFrete.textContent = 'Valor do Frete: R$ 10,00'


        
    }
    inputFrete.value = ''
})

btnCupom.addEventListener('click', function() {
    alert('Cupom invalido')
    inputCupom.value = ''
})