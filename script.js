const dadosTemporadas = [
    {
        id: 1,
        titulo: "Temporada 1: O Início do Pesadelo",
        resumo: "Rick Grimes acorda do coma e se depara com um mundo dominado por mortos-vivos (Walkers). Ele embarca em uma jornada desesperada para encontrar sua família e se junta a um pequeno grupo de sobreviventes em Atlanta. A temporada estabelece as regras brutais do novo mundo.",
        card_image: "./imagens/twd_s1.jpg",
        imagens: ["./imagens/s1/atlanta.webp", "./imagens/s1/cavalo.webp", "./imagens/s1/dontopen.jpg", "./imagens/s1/nogas.jpg", "./imagens/s1/zumbi.jpg"]
    },
    {
        id: 2,
        titulo: "Temporada 2: A Fazenda de Hershel",
        resumo: "O grupo deixa Atlanta e se abriga na fazenda de Hershel Greene. Conflitos internos e morais surgem enquanto lidam com a perda e a chegada de novos membros. É um período de falso refúgio e grandes revelações.",
        card_image: "./imagens/twd_s2.jpg",
        imagens: ["./imagens/s2/farm.jpg", "./imagens/s2/tri.jpg", "./imagens/s2/zumbis.jpg", "./imagens/s2/shanedead.jpg", "./imagens/s2/rickrun.jpg"] 
    },
    {
        id: 3,
        titulo: "Temporada 3: A Prisão e o Governador",
        resumo: "O grupo encontra um santuário seguro na Prisão. No entanto, sua paz é ameaçada pela ascensão do tirânico Governador e a comunidade de Woodbury. Uma temporada de guerra total e sacrifícios dolorosos.",
        card_image: "./imagens/twd_s3.jpg",
        imagens: ["./imagens/s3/prisonteam.jpg", "./imagens/s3/governor.jpg", "./imagens/s3/takeprison.jpg"]
    },
    {
        id: 4,
        titulo: "Temporada 4: Infecção e Recomeço",
        resumo: "A vida na prisão é abalada por uma letal cepa de gripe que se espalha rapidamente, forçando o grupo a medidas drásticas. O retorno brutal e vingativo do Governador culmina em uma batalha destrutiva que destrói a prisão e separa o grupo, enviando-os para a estrada em pequenos grupos de sobreviventes desesperados, eventualmente convergindo para o misterioso 'Santuário' chamado Terminus.",
        card_image: "./imagens/twd_s4.jpg",
        imagens: ["./imagens/s4/prisonage.jpg", "./imagens/s4/brother.jpg", "./imagens/s4/colt.jpg", "./imagens/s4/gates.jpg", "./imagens/s4/gatesZ.jpg", "./imagens/s4/maglen.jpg", "./imagens/s4/trilhos.jpg"] 
    },
    {
        id: 5,
        titulo: "Temporada 5: Terminus e Alexandria",
        resumo: "O grupo escapa do canibalismo em Terminus e parte em direção a Washington, guiados por Abraham e Eugene, que promete uma cura. A temporada explora o trauma da sobrevivência, levando-os a confrontos brutais (como o Hospital Grady Memorial) e, finalmente, à comunidade segura e isolada de Alexandria, onde tentam se reintegrar a uma vida 'normal', descobrindo que o perigo nem sempre vem dos Walkers.",
        card_image: "./imagens/twd_s5.jpg",
        imagens: ["./imagens/s5/rickfull.jpg", "./imagens/s5/carolzene.jpg", "./imagens/s5/daryl.jpg", "./imagens/s5/tara.jpg", "./imagens/s5/duple.jpg", "./imagens/s5/bethdead.jpg"] 
    },
    {
        id: 6,
        titulo: "Temporada 6: Os Lobos e a Chegada de Negan",
        resumo: "O grupo luta para proteger Alexandria de ameaças massivas, incluindo uma horda gigantesca de Walkers e os bandidos selvagens conhecidos como 'Os Lobos'. Após a comunidade provar sua capacidade de luta, eles encontram outras comunidades. No final chocante da temporada, o grupo é brutalmente subjugado por Negan e seu grupo, os Salvadores, culminando em uma introdução violenta e a morte de um membro central.",
        card_image: "./imagens/twd_s6.jpg",
        imagens: ["./imagens/s6/novomundo.jpg", "./imagens/s6/duple.jpg", "./imagens/s6/team.jpg", "./imagens/s6/jesus.jpg", "./imagens/s6/babyglenn.jpg"] 
    },
    {
        id: 7,
        titulo: "Temporada 7: A Tirania de Negan",
        resumo: "A temporada foca na submissão de Rick e seus aliados à tirania de Negan. O grupo é forçado a trabalhar para os Salvadores, enquanto o terror psicológico e físico de Negan esmaga a esperança. Rick, eventualmente, viaja para as comunidades vizinhas (Hilltop, O Reino, e a comunidade do Lixão 'Os Catadores') para formar uma aliança secreta e planejar a guerra contra o inimigo comum.",
        card_image: "./imagens/twd_s7.jpg",
        imagens: ["./imagens/s7/cerked.jpg", "./imagens/s7/glennkill.jpg", "./imagens/s7/negan.jpg","./imagens/s7/du.jpg", "./imagens/s7/s7.jpg"] 
    },
    {
        id: 8,
        titulo: "Temporada 8: Guerra Total",
        resumo: "A tão esperada guerra contra Negan e os Salvadores começa. As comunidades de Alexandria, Hilltop e O Reino se unem em uma 'Guerra Total'. A temporada é marcada por tiroteios, traições e o alto custo moral e físico da batalha, culminando na derrota de Negan e na decisão de Rick de aprisioná-lo em vez de matá-lo, em busca de um futuro de civilização.",
        card_image: "./imagens/twd_s8.jpg",
        imagens: ["./imagens/s8/war.jpg", "./imagens/s8/fight.jpg", "./imagens/s8/carl.jpg", "./imagens/s8/end.jpg"] 
    },
    {
        id: 9,
        titulo: "Temporada 9: O Desaparecimento de Rick e os Sussurradores",
        resumo: "Anos após a guerra, as comunidades trabalham para construir uma nova civilização. A temporada é dividida por um salto temporal após a saída dramática de Rick Grimes da série. Um novo e aterrorizante inimigo, os Sussurradores (liderados por Alpha), que se disfarçam usando a pele dos Walkers, emerge. O grupo deve aprender a lidar com essa nova ameaça que redefine os limites do medo e da sobrevivência.",
        card_image: "./imagens/twd_s9.jpg",
        imagens: ["./imagens/s9/rick.jpg", "./imagens/s9/cavalo.jpg", "./imagens/s9/dont.jpg", "./imagens/s9/teens.jpg", "./imagens/s9/ep1.jpg", "./imagens/s9/alpha.jpg"] 
    },
    {
        id: 10,
        titulo: "Temporada 10: Ascensão dos Sussurradores",
        resumo: "A tensão entre os sobreviventes e os Sussurradores atinge o pico. As comunidades lidam com o luto e a paranoia após o massacre da feira. A Guerra dos Sussurradores se intensifica, culminando em grandes confrontos táticos e psicológicos, onde Carol e Negan desempenham papéis cruciais. A temporada também introduz a trama da Comunidade da Commonwealth.",
        card_image: "./imagens/twd_s10.jpg",
        imagens: ["./imagens/s10/poster2.jpg", "./imagens/s10/poster.jpg", "./imagens/s10/foda.jpg", "./imagens/s10/surto.jpg", "./imagens/s10/beta.jpg", "./imagens/s10/daryl.jpg"] 
    },
    {
        id: 11,
        titulo: "Temporada 11: Commonwealth e o Fim",
        resumo: "A temporada final se concentra na comunidade de Alexandria, que luta contra a fome e a reconstrução, e na nova ameaça/aliado: a Commonwealth, uma comunidade gigantesca, altamente desenvolvida, mas socialmente desigual. O grupo se infiltra na Commonwealth, descobrindo suas corrupções internas e lutando para proteger os ideais de Rick. O final épico traz o desfecho da saga principal e prepara o terreno para os spin-offs.",
        card_image: "./imagens/twd_s11.jpg",
        imagens: ["./imagens/s11/poster.jpg", "./imagens/s11/s11.jpg", "./imagens/s11/team.jpg"] 
    }
];

// ===================================================================
// SELETORES DE ELEMENTOS
// ===================================================================
const telaHero = document.getElementById('tela-hero');
const telaCards = document.getElementById('tela-cards');
const telaDetalhes = document.getElementById('tela-detalhes');

const btnExplorar = document.getElementById('btn-explorar');
const btnVoltarHero = document.getElementById('btn-voltar-hero');
const btnVoltarCards = document.getElementById('btn-voltar-cards');

const cardsWrapper = document.getElementById('cards-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Elementos do Frame 3 (Detalhes)
const tituloTemporada = document.getElementById('titulo-temporada');
const textoTemporada = document.getElementById('texto-temporada');

let prevImgButton;
let nextImgButton;

// ===================================================================
// 1. FUNÇÕES DE TRANSIÇÃO ENTRE FRAMES (TELAS)
// ===================================================================

/**
 * Altera a visibilidade entre duas telas (frames).
 * @param {HTMLElement} telaAtual - A tela que será ocultada.
 * @param {HTMLElement} proximaTela - A tela que será exibida.
 */
function trocarTela(telaAtual, proximaTela) {
    telaAtual.classList.remove('active');
    telaAtual.classList.add('hidden');
    
    // Adiciona um pequeno delay para a transição de opacidade ser suave
    setTimeout(() => {
        proximaTela.classList.remove('hidden');
        proximaTela.classList.add('active');
    }, 50); 
}

// -----------------------------------
// 2. FUNÇÕES DE CARDS (FRAME 2)
// -----------------------------------

/**
 * Renderiza os cards das temporadas no DOM.
 */
function renderizarCards() {
    cardsWrapper.innerHTML = ''; // Limpa o wrapper antes de renderizar
    dadosTemporadas.forEach(temporada => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.setProperty('--card-bg', `url('${temporada.card_image}')`);
        card.innerHTML = `
            <div class="card-overlay"></div> <div class="card-content-wrapper">
            <h3>Temporada ${temporada.id}</h3>
            <p>${temporada.titulo.split(':')[1].trim()}</p>
            <button class="card-button" data-id="${temporada.id}">Ver Detalhes</button>
        `;

        cardsWrapper.appendChild(card);
    });
}

/**
 * Lógica de navegação do carrossel.
 */
function navegarCarrossel(direction) {
    const scrollAmount = cardsWrapper.clientWidth * 0.7; // Rola 70% da largura visível
    const currentScroll = cardsWrapper.scrollLeft;

    if (direction === 'next') {
        cardsWrapper.scrollLeft += scrollAmount;
    } else {
        cardsWrapper.scrollLeft -= scrollAmount;
    }

    // Atualiza o estado dos botões de navegação
    setTimeout(atualizarBotoesCarrossel, 600); 
}

/**
 * Habilita/desabilita botões de carrossel de cards.
 */
function atualizarBotoesCarrossel() {
    const scrollLeft = cardsWrapper.scrollLeft;
    const scrollWidth = cardsWrapper.scrollWidth;
    const clientWidth = cardsWrapper.clientWidth;

    prevButton.disabled = scrollLeft === 0;
    nextButton.disabled = scrollLeft + clientWidth >= scrollWidth - 10; // Margem de erro de 10px
}

// -----------------------------------
// 3. FUNÇÕES DE DETALHES (FRAME 3)
// -----------------------------------

/**
 * Lógica de navegação do carrossel de imagens.
 * @param {string} direction - 'prev' ou 'next'.
 */
function navegarCarrosselImagens(direction) {
    const carrosselImagens = document.getElementById('carrossel-imagens');
    if (!carrosselImagens || carrosselImagens.children.length === 0) return;
    
    // Calcula a largura de um item, que no CSS é 90% do contêiner.
    // Usamos o primeiro elemento como referência para incluir a margem.
    const firstImg = carrosselImagens.querySelector('img');
    if (!firstImg) return;
    
    const imgWidth = firstImg.clientWidth + 10; // Largura da imagem (90%) + margem (10px)

    if (direction === 'next') {
        carrosselImagens.scrollLeft += imgWidth;
    } else {
        carrosselImagens.scrollLeft -= imgWidth;
    }

    // Atualiza o estado dos botões de navegação
    setTimeout(atualizarBotoesImagens, 300); 
}

/**
 * Habilita/desabilita botões do carrossel de imagens.
 */
function atualizarBotoesImagens() {
    const carrosselImagens = document.getElementById('carrossel-imagens');
    if (!carrosselImagens || !prevImgButton || !nextImgButton) return;

    const scrollLeft = carrosselImagens.scrollLeft;
    const scrollWidth = carrosselImagens.scrollWidth;
    const clientWidth = carrosselImagens.clientWidth;

    // Se a largura do scroll for próxima da largura do cliente (apenas uma ou zero imagens)
    if (scrollWidth <= clientWidth + 5) {
        prevImgButton.disabled = true;
        nextImgButton.disabled = true;
        return;
    }
    
    prevImgButton.disabled = scrollLeft < 10; // Margem de erro
    nextImgButton.disabled = scrollLeft + clientWidth >= scrollWidth - 10;
}


/**
 * Injeta o conteúdo da temporada clicada no Frame 3 e inicia a transição.
 * @param {number} temporadaId - O ID da temporada.
 */
function mostrarDetalhesTemporada(temporadaId) {
    const temporada = dadosTemporadas.find(t => t.id === temporadaId);
    if (!temporada) return;

    // A. Atualizar o Conteúdo Fixo do Frame 3
    tituloTemporada.textContent = temporada.titulo;
    textoTemporada.textContent = temporada.resumo;
    
    // B. Injetar Estrutura de Carrossel (Wrapper e Botões)
    const colCarrossel = document.querySelector('.col-carrossel');
    
    // 1. Injetar a estrutura completa de carrossel de imagens (com botões e wrapper)
    colCarrossel.innerHTML = `
        <div class="image-carousel-wrapper">
            <button class="img-nav-button prev-img" disabled>&#10094;</button>
            <div id="carrossel-imagens" class="image-carousel">
                </div>
            <button class="img-nav-button next-img">&#10095;</button>
        </div>
    `;
    
    // 2. Re-selecionar os elementos dinâmicos após a injeção
    const carrosselImagens = document.getElementById('carrossel-imagens');
    prevImgButton = colCarrossel.querySelector('.prev-img');
    nextImgButton = colCarrossel.querySelector('.next-img');

    // 3. Injetar Imagens
    temporada.imagens.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Cena da ${temporada.titulo}`;
        carrosselImagens.appendChild(img);
    });
    
    // 4. Anexar Event Listeners (para desktop)
    if (prevImgButton && nextImgButton) {
        prevImgButton.onclick = () => navegarCarrosselImagens('prev');
        nextImgButton.onclick = () => navegarCarrosselImagens('next');
        
        // Adiciona listener de scroll para atualizar botões (útil para rolagem manual e mobile)
        carrosselImagens.onscroll = atualizarBotoesImagens;
    }

    // C. Executar a Transição
    trocarTela(telaCards, telaDetalhes);
    
    // D. Atualizar botões após a transição (para garantir que a largura do carrossel seja calculada)
    setTimeout(atualizarBotoesImagens, 600); 
}


// ===================================================================
// EVENT LISTENERS (AÇÕES DO USUÁRIO)
// ===================================================================

// Ação 1: Botão 'Explorar' na Tela Hero
btnExplorar.addEventListener('click', () => {
    trocarTela(telaHero, telaCards);
    atualizarBotoesCarrossel(); // Garante que os botões do carrossel estejam corretos ao iniciar
});

// Ação 2: Botão 'Voltar ao Início' na Tela Cards
btnVoltarHero.addEventListener('click', () => {
    trocarTela(telaCards, telaHero);
});

// Ação 3: Navegação do Carrossel (Setas Laterais)
prevButton.addEventListener('click', () => navegarCarrossel('prev'));
nextButton.addEventListener('click', () => navegarCarrossel('next'));
cardsWrapper.addEventListener('scroll', atualizarBotoesCarrossel); // Monitora o scroll manual

// Ação 4: Botões 'Ver Detalhes' nos Cards
cardsWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-button')) {
        const id = parseInt(e.target.dataset.id);
        mostrarDetalhesTemporada(id);
    }
});

// Ação 5: Botão 'Voltar às Temporadas' na Tela Detalhes
btnVoltarCards.addEventListener('click', () => {
    trocarTela(telaDetalhes, telaCards);
});


// ===================================================================
// INICIALIZAÇÃO
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderizarCards(); // Cria os cards ao carregar a página
    // Adiciona placeholders de imagem temporários se os seus não existirem:
    // **LEMBRE-SE DE CRIAR A PASTA 'img' E COLOCAR IMAGENS DENTRO!**
    if (dadosTemporadas[0].imagens[0].includes('img/')) {
        console.warn("Lembre-se de criar a pasta 'img' e adicionar imagens reais para TWD!");
    }
});