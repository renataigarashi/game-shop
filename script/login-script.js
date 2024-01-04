let btnLogin = document.querySelector('#botaoLogin');

        btnLogin.addEventListener('click', function() {
            let loginInput = document.querySelector('#email');
            let senhaInput = document.querySelector('#password');
            let mensagemDiv = document.querySelector('#mensagem');

            if (loginInput.value === '' || senhaInput.value === '') {
                mensagemDiv.innerHTML = `<p class='warning'>
                                            Preencha todos os campos!
                                        </p>`;
            } else {
                mensagemDiv.innerHTML = `<p class='success'>
                                            Login efetuado com sucesso!
                                        </p>`;
            }

            setTimeout(() => {
                mensagemDiv.innerHTML = ''; 
            }, 3000);

            loginInput.value = '';
            senhaInput.value = '';
        });
