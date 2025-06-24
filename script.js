function inserirNome(){
    let nomeUsuario = prompt("Qual é o seu nome?");
    let elemento = document.querySelector ("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome();
