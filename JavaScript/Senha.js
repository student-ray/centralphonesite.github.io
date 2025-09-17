     document.getElementById('NovaConta').addEventListener('submit', function(event) {
        event.preventDefault(); //IMPEDE O ENVIO DO FORMULÁRIO
     
        const password = document.getElementById('password').value;
        const ConfirmPassword = document.getElementById('ConfirmPassword').value;
        const errorMessage = document.getElementById('error-message');

        if (password === ConfirmPassword) {
            errorMessage.textContent = ""; //LIMPA A MENSAGEM DE ERRO
            alert("Cadastro realizado com sucesso!")
    
        } else {
            errorMessage.textContent = "As senhas não corresponde. Tente novamente.";
        }
     });