/* =============================================================
   1. EDITE AQUI — dados de cada ano
   ---------------------------------------------------------------
   - ano: o ano da foto (aparece grande no topo do story)
   - imagem: caminho dentro da pasta /fotos (fotos/2016.jpg, etc.)
   - frase: uma linha curta e poética pra abrir o ano
   - motivo: o "motivo pra te amar" daquele ano
   Pode reordenar, adicionar ou remover objetos à vontade — o
   restante do site se adapta automaticamente à quantidade de itens.

   São 11 fotos (2016 a 2026): 2016 é o começo (o pedido, 30/10/2016)
   e de 2017 a 2026 são os 10 anos de namoro. Os stories de aniversário
   usam as fotos nomeadas por ano até o 9º aniversário; o 10º usa 2026.jpg.
============================================================= */
const HISTORIA = [
  {
    ano: 2016,
    imagem: "fotos/2016.jpg",
    frase: "um ano de espera, um sim pra vida toda",
    motivo: "Porque levamos 1 ano inteiro para oficializar nossa relação, e foi nesse tempo que eu descobri que você era a pessoa certa."
  },
  {
    ano: 2017,
    imagem: "fotos/2017.jpg",
    frase: "aprendendo a ser time",
    motivo: "Porque você passou a ser o meu parceiro de vida"
  },
  {
    ano: 2018,
    imagem: "fotos/2018.jpg",
    frase: "o calmo e a sem paciência",
    motivo: "Porque seu jeito calmo sempre soube lidar com a minha falta de paciência, sem nunca me fazer sentir errada por isso."
  },
  {
    ano: 2019,
    imagem: "fotos/2019.jpg",
    frase: "toda vontade minha virava prioridade sua",
    motivo: "Porque você sempre realizar meus gostos e vontades."
  },
  {
    ano: 2020,
    imagem: "fotos/2020.jpg",
    frase: "o ano em que o mundo parou e a gente não",
    motivo: "Porque mesmo com tudo parado e a distância pesando, o nosso amor só cresceu."
  },
  {
    ano: 2021,
    imagem: "fotos/2021.jpg",
    frase: "mais que namorado, meu melhor amigo",
    motivo: "Porque você virou a pessoa pra quem eu conto tudo, sem medo de julgamento - O melhor ouvinte"
  },
  {
    ano: 2022,
    imagem: "fotos/2022.jpg",
    frase: "quem acreditou em mim primeiro",
    motivo: "Porque você acredita em mim até nos dias em que eu mesma duvido."
  },
  {
    ano: 2023,
    imagem: "fotos/2023.jpg",
    frase: "gênio forte, paciência maior ainda",
    motivo: "Porque eu sei que não sou fácil,autoritária e sem paciência nenhuma e mesmo assim você continua escolhendo ficar, com toda a calma que me falta."
  },
  {
    ano: 2024,
    imagem: "fotos/2024.jpeg",
    frase: "confortável como um lar",
    motivo: "Porque depois de tantos anos, você virou sinônimo de lar: o lugar onde eu posso ser exatamente do jeito que sou."
  },
  {
    ano: 2025,
    imagem: "fotos/2025.jpeg",
    frase: "e seguimos escrevendo",
    motivo: "Porque cada ano que passa só confirma que fizemos a escolha certa."
  },
  {
    ano: 2026,
    imagem: "fotos/2026.jpg",
    frase: "dez anos depois daquele pedido de namoro",
    motivo: "Porque a gente já viveu tanta coisa, e mesmo assim eu só consigo pensar em tudo o que ainda vamos viver juntos."
  }
];

// EDITE AQUI: data em que vocês começaram a namorar (ano, mês-1, dia)
const DATA_INICIO = new Date(2016, 9, 30); // 30/10/2016 — mês é 0-indexado (9 = outubro)

const VIAGENS = [
  { tipo: "viagem", ano: "NOSSA VIAGEM DE 2020", subtitulo: "Barra de Jangada e Cabo de Santo Agostinho", destinos: ["Barra de Jangada", "Cabo de Santo Agostinho"], frase: "Uma escapada pertinho do mar que abriu caminho para tantas outras aventuras.", imagens: ["fotos/20201.jpeg", "fotos/20202.jpeg"] },
  { tipo: "viagem", ano: "NOSSA VIAGEM DE 2021", subtitulo: "Barra de Jangada", destinos: ["Barra de Jangada"], frase: "Voltamos para um lugar especial e fizemos mais lembranças para guardar.", imagens: ["fotos/20211.jpeg", "fotos/20212.jpeg", "fotos/20213.jpeg", "fotos/20214.jpeg"] },
  { tipo: "viagem", ano: "NOSSA VIAGEM DE 2022", subtitulo: "Barra de Jangada", destinos: ["Barra de Jangada"], frase: "Mais um ano, mais um retorno a esse cantinho que já é tão nosso.", imagens: ["fotos/20221.jpeg", "fotos/20222.jpeg", "fotos/20223.jpeg", "fotos/2022.jpg"] },
  { tipo: "viagem", ano: "NOSSA VIAGEM DE 2024", subtitulo: "João Pessoa, Gravatá e Porto de Galinhas", destinos: ["João Pessoa", "Gravatá", "Porto de Galinhas"], frase: "Três destinos, tantos cenários diferentes e uma coleção de momentos nossos.", imagens: ["fotos/20241.jpeg", "fotos/20242.jpeg", "fotos/20243.jpeg", "fotos/20244.jpeg", "fotos/20245.jpeg", "fotos/20246.jpeg", "fotos/20247.jpeg", "fotos/20248.jpeg", "fotos/20249.jpeg"] },
  { tipo: "viagem", ano: "NOSSA VIAGEM DE 2025", subtitulo: "João Pessoa", destinos: ["João Pessoa"], frase: "Voltamos a um lugar que já faz parte das nossas lembranças.", imagens: ["fotos/20251.jpeg", "fotos/20252.jpeg", "fotos/20253.jpeg", "fotos/20254.jpeg", "fotos/20256.jpeg", "fotos/20257.jpeg"] }
];

const contagemDestinos = VIAGENS.flatMap(viagem => viagem.destinos)
  .reduce((contagem, destino) => {
    contagem.set(destino, (contagem.get(destino) || 0) + 1);
    return contagem;
  }, new Map());
const DESTINOS_MAIS_VISITADOS = Array.from(contagemDestinos, ([nome, visitas]) => ({ nome, visitas }))
  .sort((a, b) => b.visitas - a.visitas);

const STORY_RANKING = {
  tipo: "ranking",
  ano: "NOSSO MAPA DO AMOR",
  subtitulo: "lugares que já fazem parte da nossa história",
  frase: "Nossos lugares mais visitados",
  motivo: "Tem lugar que vira cenário favorito quando a gente está junto.",
  destinos: DESTINOS_MAIS_VISITADOS
};

const STORY_QUIZ = {
  tipo: "quiz",
  ano: "QUIZ DO CASAL",
  subtitulo: "3 perguntas sobre a nossa história",
  perguntas: [
    {
      texto: "Qual é a data do nosso aniversário de namoro?",
      opcoes: ["30/10/2016", "30/10/2015", "29/10/2016"],
      resposta: "30/10/2016"
    },
    {
      texto: "Quando demos o nosso primeiro beijo?",
      opcoes: ["29/10/2014", "30/10/2015", "30/10/2016"],
      resposta: "30/10/2015"
    },
    {
      texto: "Onde foi feito o pedido de namoro?",
      opcoes: ["Sítio da Trindade", "Cinema", "Na sua casa"],
      resposta: "Cinema"
    }
  ]
};

const STORIES_ANIVERSARIO = Array.from({ length: 10 }, (_, indice) => {
  const anos = indice + 1;
  const ano = DATA_INICIO.getFullYear() + anos;
  return {
    tipo: "aniversario",
    ano: `${anos} ${anos === 1 ? "ANO" : "ANOS"} DE NAMORO`,
    subtitulo: `30 de outubro de ${ano}`,
    imagem: anos <= 9 ? `fotos/${anos} ano ${ano}.jpeg` : `fotos/${ano}.jpg`,
    frase: anos >= 3 && anos <= 9
      ? `${anos} Anos de nós`
      : anos === 10
        ? "10 anos de nós e uma vida inteira para viver e construir juntos."
      : anos === 1
        ? "Um ano escolhendo a gente."
        : `${anos} anos de nós. E ainda é só o começo.`,
    motivo: (anos >= 3 && anos <= 9) || anos === 10
      ? ""
      : "Cada 30 de outubro marca mais um capítulo da nossa história. ♥"
  };
});

const ROTEIRO = [
  HISTORIA[0],
  STORIES_ANIVERSARIO[0],
  HISTORIA[1],
  STORIES_ANIVERSARIO[1],
  HISTORIA[2],
  STORIES_ANIVERSARIO[2],
  HISTORIA[3],
  STORIES_ANIVERSARIO[3],
  HISTORIA[4],
  VIAGENS[0],
  STORIES_ANIVERSARIO[4],
  HISTORIA[5],
  VIAGENS[1],
  STORIES_ANIVERSARIO[5],
  HISTORIA[6],
  VIAGENS[2],
  STORIES_ANIVERSARIO[6],
  HISTORIA[7],
  STORIES_ANIVERSARIO[7],
  HISTORIA[8],
  VIAGENS[3],
  STORIES_ANIVERSARIO[8],
  HISTORIA[9],
  VIAGENS[4],
  HISTORIA[10],
  STORIES_ANIVERSARIO[9],
  STORY_RANKING,
  STORY_QUIZ
];


/* =============================================================
   2. CONTADOR DE DIAS NA TELA DE CAPA
============================================================= */
/* =============================================================
   3. NAVEGAÇÃO ENTRE TELAS
============================================================= */
const telaCapa = document.getElementById("tela-capa");
const telaNumeros = document.getElementById("tela-numeros");
const telaStories = document.getElementById("tela-stories");
const telaFinal = document.getElementById("tela-final");

function mostrarTela(tela){
  [telaCapa, telaNumeros, telaStories, telaFinal].forEach(t => t.classList.remove("ativa"));
  tela.classList.add("ativa");
}

/* =============================================================
   3.1 TELA "NOSSA HISTÓRIA EM NÚMEROS"
============================================================= */

// quantos aniversários de namoro (anos completos) já passaram desde o início
function calcularAniversariosCompletos(dataInicio, agora){
  let anos = agora.getFullYear() - dataInicio.getFullYear();
  const aindaNaoChegouNesteAno =
    (agora.getMonth() < dataInicio.getMonth()) ||
    (agora.getMonth() === dataInicio.getMonth() && agora.getDate() < dataInicio.getDate());
  if (aindaNaoChegouNesteAno) anos -= 1;
  return Math.max(anos, 0);
}

// anima um número subindo de 0 até o valor final — efeito "Wrapped"
function animarContagem(elementId, valorFinal, duracaoMs = 1200){
  const el = document.getElementById(elementId);
  if (!el) return;
  const inicio = performance.now();

  function passo(agora){
    const progresso = Math.min((agora - inicio) / duracaoMs, 1);
    // easing suave de desaceleração no final
    const suavizado = 1 - Math.pow(1 - progresso, 3);
    const valorAtual = Math.round(valorFinal * suavizado);
    el.textContent = valorAtual.toLocaleString("pt-BR");
    if (progresso < 1) requestAnimationFrame(passo);
  }
  requestAnimationFrame(passo);
}

function mostrarTelaNumeros(){
  mostrarTela(telaNumeros);

  const agora = new Date();
  const dias = Math.floor((agora - DATA_INICIO) / (1000 * 60 * 60 * 24));
  const aniversarios = calcularAniversariosCompletos(DATA_INICIO, agora);
  const horas = Math.floor((agora - DATA_INICIO) / (1000 * 60 * 60));
  const viagens = ROTEIRO.filter(item => item.tipo === "viagem").length;

  animarContagem("numero-dias", dias);
  animarContagem("numero-horas", horas);
  animarContagem("numero-aniversarios", aniversarios);
  animarContagem("numero-viagens", viagens);
}

document.getElementById("btn-ver-historia").addEventListener("click", () => {
  iniciarStories();
});

/* =============================================================
   4. MOTOR DE STORIES
============================================================= */
const barraProgresso = document.getElementById("barra-progresso");
const elAno = document.getElementById("stories-ano");
const elSub = document.getElementById("stories-sub");
const elFoto = document.getElementById("stories-foto");
const elFrase = document.getElementById("stories-frase");
const elMotivo = document.getElementById("stories-motivo");
const elContagem = document.getElementById("stories-contagem");
const elInteracao = document.getElementById("stories-interacao");
const btnReagirStory = document.getElementById("btn-reagir-story");

let indiceAtual = 0;
let pausado = false;
let quizRespondido = false;
let perguntaQuizAtual = 0;
let acertosQuiz = 0;
let timeoutAvanco = null;
let slideshowViagemTimer = null;
let avancarFotoViagem = null;

const PALETA_STORIES = [
  { destaque: "#ff9aae", fundo: "#451827" },
  { destaque: "#f7b7c8", fundo: "#431d35" },
  { destaque: "#e9a6d2", fundo: "#371b3a" },
  { destaque: "#ffc0b9", fundo: "#4a202c" },
  { destaque: "#d8b2f2", fundo: "#302040" },
  { destaque: "#f4a9b8", fundo: "#4b1d35" }
];
const INTERVALO_FOTO_VIAGEM = 3200;

function obterDuracaoStory(indice = indiceAtual){
  const duracaoCss = getComputedStyle(document.documentElement)
    .getPropertyValue("--duracao-story").trim();
  const duracaoBase = duracaoCss.endsWith("ms")
    ? parseFloat(duracaoCss)
    : parseFloat(duracaoCss) * 1000;
  const item = ROTEIRO[indice];

  if (item.tipo === "ranking" || item.tipo === "quiz") {
    return Math.max(duracaoBase, 12000);
  }
  if (item.tipo !== "viagem") return duracaoBase;
  return Math.max(duracaoBase, item.imagens.length * INTERVALO_FOTO_VIAGEM);
}

function aplicarTomDoAno(indice){
  const paleta = PALETA_STORIES[indice % PALETA_STORIES.length];
  telaStories.style.setProperty("--cor-destaque", paleta.destaque);
  telaStories.style.setProperty("--cor-fundo-story", paleta.fundo);
}

// monta uma barra de progresso pra cada item da história
function montarBarras(){
  barraProgresso.innerHTML = "";
  ROTEIRO.forEach((story, indice) => {
    const item = document.createElement("button");
    item.className = "barra-item";
    item.type = "button";
    item.setAttribute("aria-label", `ir para lembrança ${indice + 1}: ${story.ano}`);
    item.innerHTML = '<div class="barra-preenchimento"></div>';
    item.addEventListener("click", () => irParaStory(indice));
    barraProgresso.appendChild(item);
  });
}

function pegarBarras(){
  return Array.from(barraProgresso.querySelectorAll(".barra-item"));
}

function renderizarInteracao(item){
  elInteracao.replaceChildren();
  if (item.tipo === "quiz") {
    perguntaQuizAtual = 0;
    acertosQuiz = 0;
  }
  if (item.tipo === "ranking") {
    const lista = document.createElement("ol");
    lista.className = "destinos-ranking";
    item.destinos.forEach((destino, indice) => {
      const linha = document.createElement("li");
      const posicao = document.createElement("span");
      posicao.className = "ranking-posicao";
      posicao.textContent = String(indice + 1).padStart(2, "0");
      const nome = document.createElement("span");
      nome.className = "ranking-destino";
      nome.textContent = destino.nome;
      const selecionar = document.createElement("button");
      selecionar.type = "button";
      selecionar.className = "ranking-escolher";
      selecionar.setAttribute("aria-label", `marcar ${destino.nome} como lugar favorito`);
      selecionar.setAttribute("aria-pressed", "false");
      selecionar.textContent = "♡";
      selecionar.addEventListener("click", () => {
        lista.querySelectorAll(".ranking-escolher").forEach(botao => {
          botao.classList.remove("escolhido");
          botao.setAttribute("aria-pressed", "false");
          botao.textContent = "♡";
        });
        selecionar.classList.add("escolhido");
        selecionar.setAttribute("aria-pressed", "true");
        selecionar.textContent = "♥";
        destaque.textContent = `${destino.nome} também mora nas nossas lembranças. ♥`;
      });
      const visitas = document.createElement("span");
      visitas.className = "ranking-visitas";
      visitas.textContent = `${destino.visitas} ${destino.visitas === 1 ? "viagem" : "viagens"}`;
      linha.append(posicao, nome, visitas, selecionar);
      lista.appendChild(linha);
    });
    const destaque = document.createElement("p");
    destaque.className = "ranking-destaque";
    destaque.setAttribute("aria-live", "polite");
    destaque.textContent = "Toque no coração do lugar que mais marcou vocês.";
    elInteracao.append(lista, destaque);
    return;
  }

  if (item.tipo === "quiz") {
    renderizarPerguntaQuiz(item);
  }
}

function renderizarPerguntaQuiz(item){
  const pergunta = item.perguntas[perguntaQuizAtual];
  elSub.textContent = `pergunta ${perguntaQuizAtual + 1} de ${item.perguntas.length}`;
  elFrase.textContent = pergunta.texto;
  elMotivo.textContent = "Escolha uma alternativa para revelar a resposta.";
  elInteracao.replaceChildren();

  const opcoes = document.createElement("div");
  opcoes.className = "quiz-opcoes";
  pergunta.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "quiz-opcao";
    botao.textContent = opcao;
    botao.addEventListener("click", () => {
      opcoes.querySelectorAll(".quiz-opcao").forEach(opcaoBotao => {
        opcaoBotao.disabled = true;
        if (opcaoBotao.textContent === pergunta.resposta) {
          opcaoBotao.classList.add("resposta-certa");
        }
      });
      const acertou = opcao === pergunta.resposta;
      if (acertou) acertosQuiz += 1;
      botao.classList.add(acertou ? "selecionada-certa" : "selecionada-errada");
      const resposta = document.createElement("p");
      resposta.className = "quiz-resposta";
      resposta.textContent = acertou
        ? "Acertou! Essa lembrança continua viva. ♥"
        : `A resposta era: ${pergunta.resposta}. ♥`;
      const proxima = document.createElement("button");
      proxima.type = "button";
      proxima.className = "quiz-continuar";
      proxima.textContent = perguntaQuizAtual + 1 < item.perguntas.length
        ? "próxima pergunta →"
        : "ver resultado ♥";
      proxima.addEventListener("click", () => {
        if (perguntaQuizAtual + 1 < item.perguntas.length) {
          perguntaQuizAtual += 1;
          renderizarPerguntaQuiz(item);
          return;
        }
        renderizarResultadoQuiz(item);
      });
      elInteracao.append(resposta, proxima);
    });
    opcoes.appendChild(botao);
  });
  elInteracao.appendChild(opcoes);
}

function renderizarResultadoQuiz(item){
  quizRespondido = true;
  telaStories.classList.remove("quiz-aguardando");
  const barraAtual = pegarBarras()[indiceAtual];
  if (barraAtual) barraAtual.classList.remove("pausada");
  elSub.textContent = "resultado do nosso quiz";
  elFrase.textContent = "Quanto você lembra da nossa história?";
  elMotivo.textContent = "";
  elInteracao.replaceChildren();

  const resultado = document.createElement("p");
  resultado.className = "quiz-resultado";
  resultado.textContent = `${acertosQuiz} de ${item.perguntas.length} respostas certas ♥`;
  const continuar = document.createElement("button");
  continuar.type = "button";
  continuar.className = "quiz-continuar";
  continuar.textContent = "encerrar e guardar essa lembrança ♥";
  continuar.addEventListener("click", () => irParaStory(indiceAtual + 1));
  elInteracao.append(resultado, continuar);
}

function renderizarStory(indice){
  const item = ROTEIRO[indice];
  quizRespondido = false;
  perguntaQuizAtual = 0;
  acertosQuiz = 0;
  clearInterval(slideshowViagemTimer);
  avancarFotoViagem = null;
  elAno.textContent = item.ano;
  elSub.textContent = item.subtitulo || (item.tipo === "viagem" ? "uma aventura nossa" : item.tipo === "texto" ? "tantas memorias para contar" : indice === 0 ? "nosso comeco" : `ano ${item.ano} da nossa historia`);
  elFrase.textContent = item.frase;
  elMotivo.textContent = item.motivo || "";
  elContagem.textContent = `${String(indice + 1).padStart(2, "0")} / ${String(ROTEIRO.length).padStart(2, "0")}`;
  renderizarInteracao(item);
  btnReagirStory.classList.remove("reagido");
  btnReagirStory.textContent = "♡";
  btnReagirStory.setAttribute("aria-label", "reagir com coração");
  btnReagirStory.setAttribute("aria-pressed", "false");
  aplicarTomDoAno(indice);

  const imagens = item.imagens || (item.imagem ? [item.imagem] : []);
  let fotoAtual = 0;
  function mostrarFoto(){
    const caminho = imagens[fotoAtual % imagens.length];
    elFoto.dataset.vazio = "false";
    elFoto.onerror = () => { elFoto.dataset.vazio = "true"; };
    elFoto.src = caminho;
    elFoto.alt = item.tipo === "viagem"
      ? `Lembranca da viagem: ${item.subtitulo}`
      : item.tipo === "aniversario"
        ? `Foto para celebrar ${item.ano}`
        : `Foto do ano ${item.ano}`;
    elFoto.classList.remove("foto-entrando");
    void elFoto.offsetWidth;
    elFoto.classList.add("foto-entrando");
    fotoAtual += 1;
  }
  if (imagens.length) {
    mostrarFoto();
  } else {
    elFoto.removeAttribute("src");
    elFoto.alt = "";
    elFoto.dataset.vazio = "true";
  }
  if (item.tipo === "viagem" && imagens.length > 1){
    avancarFotoViagem = mostrarFoto;
    slideshowViagemTimer = setInterval(avancarFotoViagem, INTERVALO_FOTO_VIAGEM);
  }
  telaStories.classList.toggle("story-viagem", item.tipo === "viagem");
  telaStories.classList.toggle("story-texto", item.tipo === "texto");
  telaStories.classList.toggle("story-ranking", item.tipo === "ranking");
  telaStories.classList.toggle("story-quiz", item.tipo === "quiz");
  telaStories.classList.toggle("story-aniversario", item.tipo === "aniversario");
  telaStories.classList.toggle("quiz-aguardando", item.tipo === "quiz");

  const barras = pegarBarras();
  barras.forEach((b, i) => {
    b.classList.remove("atual", "concluida", "pausada");
    if (i < indice) b.classList.add("concluida");
    if (i === indice) {
      b.style.setProperty("--duracao-story", `${obterDuracaoStory(indice)}ms`);
      b.classList.add("atual");
      b.setAttribute("aria-current", "step");
    } else {
      b.removeAttribute("aria-current");
    }
  });
}

function irParaStory(indice){
  if (ROTEIRO[indiceAtual].tipo === "quiz" && !quizRespondido && indice > indiceAtual) return;
  clearTimeout(timeoutAvanco);
  pausado = false;

  if (indice < 0){
    indice = 0;
  }
  if (indice >= ROTEIRO.length){
    finalizarStories();
    return;
  }

  indiceAtual = indice;
  renderizarStory(indiceAtual);
  agendarAvanco();
}

function agendarAvanco(){
  clearTimeout(timeoutAvanco);
  if (pausado) return;
  if (ROTEIRO[indiceAtual].tipo === "quiz" && !quizRespondido) return;
  timeoutAvanco = setTimeout(() => irParaStory(indiceAtual + 1), obterDuracaoStory());
}

function pausarStory(){
  if (pausado) return;
  pausado = true;
  clearTimeout(timeoutAvanco);
  clearInterval(slideshowViagemTimer);
  const barras = pegarBarras();
  if (barras[indiceAtual]) barras[indiceAtual].classList.add("pausada");
}

function retomarStory(){
  if (!pausado) return;
  pausado = false;
  const barras = pegarBarras();
  const barraAtual = barras[indiceAtual];
  if (ROTEIRO[indiceAtual].tipo === "quiz" && !quizRespondido) {
    if (barraAtual) barraAtual.classList.remove("pausada");
    return;
  }
  if (!barraAtual) {
    agendarAvanco();
    return;
  }

  // recalcula quanto tempo falta com base no quanto a barra já preencheu
  const preenchimento = barraAtual.querySelector(".barra-preenchimento");
  const proporcaoFeita = preenchimento.getBoundingClientRect().width /
    barraAtual.getBoundingClientRect().width;

  barraAtual.classList.remove("pausada");
  const tempoRestante = obterDuracaoStory() * (1 - proporcaoFeita);
  timeoutAvanco = setTimeout(() => irParaStory(indiceAtual + 1), tempoRestante);
  if (avancarFotoViagem) {
    slideshowViagemTimer = setInterval(avancarFotoViagem, INTERVALO_FOTO_VIAGEM);
  }
}

function iniciarStories(){
  montarBarras();
  indiceAtual = 0;
  pausado = false;
  mostrarTela(telaStories);
  renderizarStory(0);
  agendarAvanco();
}

function finalizarStories(){
  clearTimeout(timeoutAvanco);
  clearInterval(slideshowViagemTimer);
  mostrarTela(telaFinal);
}

/* -------- zonas de toque: esquerda volta, direita avança -------- */
const zonaEsq = document.getElementById("zona-esq");
const zonaDir = document.getElementById("zona-dir");

zonaEsq.addEventListener("click", () => irParaStory(indiceAtual - 1));
zonaDir.addEventListener("click", () => irParaStory(indiceAtual + 1));
btnReagirStory.addEventListener("click", () => {
  const reagido = btnReagirStory.classList.toggle("reagido");
  btnReagirStory.textContent = reagido ? "♥" : "♡";
  btnReagirStory.setAttribute("aria-label", reagido ? "remover reação de coração" : "reagir com coração");
  btnReagirStory.setAttribute("aria-pressed", String(reagido));
  if (!reagido) return;

  const coracao = document.createElement("span");
  coracao.className = "story-coracao-animado";
  coracao.setAttribute("aria-hidden", "true");
  coracao.textContent = "♥";
  document.querySelector(".stories-visual").appendChild(coracao);
  coracao.addEventListener("animationend", () => coracao.remove(), { once: true });
});

// segurar (mouse ou toque) pausa o story, como no Instagram
[zonaEsq, zonaDir].forEach(zona => {
  zona.addEventListener("pointerdown", pausarStory);
  zona.addEventListener("pointerup", retomarStory);
  zona.addEventListener("pointerleave", retomarStory);
});

// setas do teclado, já que você vai testar bastante pelo navegador
document.addEventListener("keydown", (e) => {
  if (!telaStories.classList.contains("ativa")) return;
  if (e.key === "ArrowRight") irParaStory(indiceAtual + 1);
  if (e.key === "ArrowLeft") irParaStory(indiceAtual - 1);
  if (e.code === "Space" && !e.target.closest("button")) {
    e.preventDefault();
    pausado ? retomarStory() : pausarStory();
  }
});

/* =============================================================
   5. MÚSICA DE FUNDO
============================================================= */
const audio = document.getElementById("audio-trilha");
const btnMusica = document.getElementById("btn-musica");
const btnComecar = document.getElementById("btn-comecar");

function tocarMusica(){
  audio.play().catch(() => {
    // se o navegador bloquear autoplay, o botão de música continua disponível manualmente
  });
  btnMusica.classList.add("tocando");
}

function alternarMusica(){
  if (audio.paused){
    tocarMusica();
  } else {
    audio.pause();
    btnMusica.classList.remove("tocando");
  }
}
btnMusica.addEventListener("click", alternarMusica);

/* =============================================================
   6. BOTÕES PRINCIPAIS
============================================================= */
btnComecar.addEventListener("click", () => {
  tocarMusica(); // o clique do usuário "libera" o autoplay no navegador
  mostrarTelaNumeros();
});

document.getElementById("btn-rever").addEventListener("click", () => {
  iniciarStories();
});

/* =============================================================
   7. EASTER EGG — segurar o coração revela um "P.S." escondido
============================================================= */
const btnCoracao = document.getElementById("btn-coracao");
const finalPs = document.getElementById("final-ps");
const TEMPO_PARA_REVELAR = 1400; // ms segurando até a mensagem aparecer
let temporizadorCoracao = null;

function comecarASegurar(){
  btnCoracao.classList.add("segurando");
  temporizadorCoracao = setTimeout(() => {
    finalPs.classList.add("revelado");
  }, TEMPO_PARA_REVELAR);
}

function pararDeSegurar(){
  btnCoracao.classList.remove("segurando");
  clearTimeout(temporizadorCoracao);
}

btnCoracao.addEventListener("pointerdown", comecarASegurar);
btnCoracao.addEventListener("pointerup", pararDeSegurar);
btnCoracao.addEventListener("pointerleave", pararDeSegurar);
btnCoracao.addEventListener("pointercancel", pararDeSegurar);

/* =============================================================
   8. REAÇÃO EM EMOJI — salva só no navegador dela (localStorage)
   ---------------------------------------------------------------
   Funciona como reação de story do Instagram: ela toca em um emoji,
   ele fica destacado e a escolha é salva. Não é enviado pra nenhum
   servidor; fica guardado só no navegador onde ela tocou.
============================================================= */
const CHAVE_REACAO = "retrospectiva-reacao";
const botoesEmoji = Array.from(document.querySelectorAll(".emoji-btn"));
const statusReacao = document.getElementById("final-reacao-status");

function selecionarEmoji(emoji, mostrarStatus = true){
  botoesEmoji.forEach(btn => {
    btn.classList.toggle("selecionado", btn.dataset.emoji === emoji);
  });
  if (mostrarStatus){
    statusReacao.textContent = `reação ${emoji} salva neste navegador`;
  }
}

function carregarReacaoSalva(){
  try {
    const salvo = localStorage.getItem(CHAVE_REACAO);
    if (salvo){
      selecionarEmoji(salvo, false);
      statusReacao.textContent = `sua última reação foi ${salvo}`;
    }
  } catch (erro) {
    // localStorage pode falhar (modo anônimo, navegador bloqueando, etc.)
    // — nesse caso os botões simplesmente funcionam sem salvar nada
  }
}
carregarReacaoSalva();

botoesEmoji.forEach(btn => {
  btn.addEventListener("click", () => {
    const emoji = btn.dataset.emoji;
    selecionarEmoji(emoji);
    try {
      localStorage.setItem(CHAVE_REACAO, emoji);
    } catch (erro) {
      statusReacao.textContent = `reação ${emoji} (não deu pra salvar neste navegador, mas tá tudo bem)`;
    }
  });
});