var personagem = 1;

infoPersonagem = () => {
    do {
        const imagem = document.querySelector('.imagemPersonagem' + personagem.toString());
        const paragrafoNome = document.querySelector('#nomePersonagem' + personagem.toString());
        const paragrafoId = document.querySelector('#idPersonagem' + personagem.toString());
        let idAleatorio = gerarValorAleatorio();
        personagem++;
     
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
            paragrafoNome.appendChild(nome);
            var id = document.createTextNode(data.id);
            paragrafoId.appendChild(id);
        })
    } while (personagem < 5);
}

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}