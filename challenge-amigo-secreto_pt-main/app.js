let listaDeAmigosSecretos = [];

function adicionarAmigoSecreto() {
    const nomeAmigoSecreto = document.getElementById('amigo');
    const nome = nomeAmigoSecreto.value.trim();

    if (nome == "") {
        alert('Por favor, insira um nome!');
        return;
    }

    if (listaDeAmigosSecretos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    listaDeAmigosSecretos.push(nome);
    console.log(listaDeAmigosSecretos);
    nomeAmigoSecreto.value = "";

    atualizarLista();

}

function atualizarLista(){
    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    for(let x = 0; x <listaDeAmigosSecretos.length; x++){
        const li = document.createElement("Li");
        li.textContent = listaDeAmigosSecretos[x];
        lista.appendChild(li);
    }
}

function sortearAmigos(){
    if (listaDeAmigosSecretos.length <= 1) {
        alert('É necessário no mínimo duas pessoas para o sorteio!!!');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigosSecretos.length);
    const amigoSecretoSorteado = listaDeAmigosSecretos[indiceAleatorio];
    const resultadoSorteio = document.querySelector('#resultado');
    resultadoSorteio.innerHTML = `O amigo secreto sorteado é: ${amigoSecretoSorteado}`;


    confetti({
        particleCount: 100,
        spread: 90, 
        origin: { y: 0.6 }
    });
}

function resetarSorteio() {
    listaDeAmigosSecretos = [];
    document.querySelector('#listaAmigos').innerHTML = "";
    document.querySelector('#resultado').innerHTML = "";
}