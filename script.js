// Cardápio da lanchonete
// Estados da tela (etapa 1): escreva aqui em quais situações a tela pode estar
//Carregandp = ainda nao voltou o fetch, cardapio na tela= deu certo, erro= algo deu errado
// 1. Busca

// 2. Dados

// 3. Tela
async function carregarPagina() {
    try {
    const dados = await Promise.all([
        buscarDados('cardapio.json'),
        buscarDados('precos.json')
    ]);
    mostrarCardapio(dados[0], dados[1]);
    } catch (erro) {
    mostrarErro('Cardápio indisponível.');
    }
}

criarCard(item):[""]
// 4. Eventos



async function carregar() {
    const respostas = await Promise.all([
        fetch('cardapio.json'),
        fetch('promocoes.json')
    ]);
    const cardapio = await respostas[0].json();
    const promocoes = await respostas[1].json();
    mostrar(cardapio, promocoes);
}

