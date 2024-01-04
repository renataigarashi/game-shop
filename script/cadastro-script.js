let btnCadastrar = document.querySelector('.btnCadastrar');
let mensagemDiv = document.querySelector('#mensagem');

btnCadastrar.addEventListener('click', function() {
    let inputs = document.querySelectorAll('.formulario input');
    console.log(inputs)


    let allFieldsFilled = true;

    inputs.forEach(input => {
        if (input.value === '') {
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled) {
        mensagemDiv.innerHTML = `<p class='warning'>Preencha todos os campos!</p>`;
    } else {
        mensagemDiv.innerHTML = `<p class='success'>Cadastro efetuado com sucesso!</p>`;
    }

    setTimeout(() => {
        mensagemDiv.innerHTML = '';
    }, 3000);

    // Limpar os campos após verificar
    inputs.forEach(input => {
        input.value = '';
    });
});