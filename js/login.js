document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var usuario = document.getElementById('login').value;
    var senhaDigitada = document.getElementById('senha').value;

    // Recupera os dados armazenados na sessão
    var usuarioSessao = sessionStorage.getItem('email');
    var senhaSessao = sessionStorage.getItem('senha');

    // Verifica se os dados inseridos correspondem aos da sessão
    if (usuario === usuarioSessao && senhaDigitada === senhaSessao) {
        window.location.href = 'home.html';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
});
