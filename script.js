var passo = 1;
console.log(passo)

infoPersonagem = () => {
    do {
        const imagem = document.querySelector('.imagemPersonagem' + passo.toString());
        const paragrafo = document.querySelector('#nomePersonagem' + passo.toString());
        const id = document.querySelector('#idPersonagem' + passo.toString());

        let idAleatorio = gerarValorAleatorio();
        console.log(idAleatorio)

        console.log(passo)
        passo++;
        console.log(passo);
        fetch(`https://rickandmortyapi.com/api/character/${idAleatorio}`, {
            method: 'GET',
            headers: {
                Accept: 'application/jason',
                "Content-type": 'application/jason'
            }
        }).then((response) => response.json()).then((data) => {
            imagem.src = data.image;
            imagem.alt = 'nome do personagem' + data.name;
            var nome = document.createTextNode(data.name);
            paragrafo.appendChild(nome);
            var idPersonagem = document.createTextNode(data.id);
            id.appendChild(idPersonagem);
            console.log("passou por aqui1")
            console.log(idAleatorio)

        })

    } while (passo < 5);
}

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}