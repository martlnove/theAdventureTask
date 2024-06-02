document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var repetirSenha = document.getElementById('repetir-senha').value;

    // Armazene os valores no sessionStorage
    sessionStorage.setItem('nome', nome);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('senha', senha);

    alert("Usuário criado com sucesso!");
    window.location.href = 'index.html';
});
