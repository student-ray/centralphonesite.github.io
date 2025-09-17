document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); //IMPEDE O ENVIO DO FORMULÁRIO

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const errorMessage = document.getElementById('error-message');

    //VERIFICAÇÃO DE LOGIN
    if (email === ValidUser.email && senha === ValidUser.senha) {
        errorMessage.textContent = ""; //LIMPA A MESAGEM DE ERRO
        alert("Login realizado com sucesso!");

        window.location.href = "Final-cont.html"; //REDICONA A PÁGINA
    } else {
        errorMessahe.textContent = "E-mail ou senha incorretos. Tente novamente.";
    }
});