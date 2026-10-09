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
   e de 2017 a 2026 são os 10 anos de namoro. Por isso a contagem na
   tela mostra "ano 1 de 10" até "ano 10 de 10" (= 2026).
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
    motivo: "Porque eu sei que não sou fácil — autoritária, sem paciência nenhuma — e mesmo assim você continua escolhendo ficar, com toda a calma que me falta."
  },
  {
    ano: 2024,
    imagem: "fotos/2024.jpg",
    frase: "confortável como um lar",
    motivo: "Porque depois de tantos anos, você virou sinônimo de lar: o lugar onde eu posso ser exatamente do jeito que sou."
  },
  {
    ano: 2025,
    imagem: "fotos/2025.jpg",
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

/* =============================================================
   2. CONTADOR DE DIAS NA TELA DE CAPA
============================================================= */
function atualizarContadorDias(){
  const agora = new Date();
  const diffMs = agora - DATA_INICIO;
  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  document.getElementById("contador-dias").textContent = dias.toLocaleString("pt-BR");
}
atualizarContadorDias();

// mantém o número certo enquanto a página fica aberta ao longo do dia
setInterval(atualizarContadorDias, 60 * 1000);

// recalcula na hora se a aba ficou em segundo plano (ou o computador
// hibernou) e "virou o dia" enquanto ninguém olhava — assim o número
// nunca aparece desatualizado quando a pessoa volta a olhar a tela
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible"){
    atualizarContadorDias();
  }
});

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

  animarContagem("numero-dias", dias);
  animarContagem("numero-aniversarios", aniversarios);
  // anos de história contados aqui = último ano − primeiro ano (2026 − 2016 = 10)
  const anosDeHistoria = HISTORIA[HISTORIA.length - 1].ano - HISTORIA[0].ano;
  animarContagem("numero-capitulos", anosDeHistoria);
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

let indiceAtual = 0;
let pausado = false;
let timeoutAvanco = null;

// cores de início e fim da progressão — de um tom frio/roxo (o começo,
// 2016) até um dourado quente (o presente), pra reforçar visualmente
// a passagem do tempo a cada story
const TOM_INICIO = { r: 0x22, g: 0x14, b: 0x2c }; // roxo-azulado escuro
const TOM_FIM = { r: 0x8a, g: 0x5a, b: 0x24 };    // dourado-âmbar

function interpolarCor(corA, corB, t){
  const r = Math.round(corA.r + (corB.r - corA.r) * t);
  const g = Math.round(corA.g + (corB.g - corA.g) * t);
  const b = Math.round(corA.b + (corB.b - corA.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

function aplicarTomDoAno(indice){
  const total = HISTORIA.length;
  const t = total > 1 ? indice / (total - 1) : 0;
  const cor = interpolarCor(TOM_INICIO, TOM_FIM, t);
  document.getElementById("stories-tom").style.setProperty("--tom-ano", cor);
  document.getElementById("stories-tom").style.backgroundColor = cor;
  telaStories.style.setProperty("--tom-fundo", cor);
}

// monta uma barra de progresso pra cada item da história
function montarBarras(){
  barraProgresso.innerHTML = "";
  HISTORIA.forEach(() => {
    const item = document.createElement("div");
    item.className = "barra-item";
    item.innerHTML = '<div class="barra-preenchimento"></div>';
    barraProgresso.appendChild(item);
  });
}

function pegarBarras(){
  return Array.from(barraProgresso.querySelectorAll(".barra-item"));
}

function renderizarStory(indice){
  const item = HISTORIA[indice];
  elAno.textContent = item.ano;
  elSub.textContent = indice === 0
    ? "nosso começo"
    : `ano ${indice} de ${HISTORIA.length - 1}`;
  elFrase.textContent = item.frase;
  elMotivo.textContent = item.motivo;

  aplicarTomDoAno(indice);

  // tenta carregar a foto; se não existir ainda, mostra um estado vazio discreto
  elFoto.dataset.vazio = "false";
  elFoto.onerror = () => { elFoto.dataset.vazio = "true"; };
  elFoto.src = item.imagem;
  elFoto.alt = `Foto do ano ${item.ano}`;

  // atualiza estado visual das barras
  const barras = pegarBarras();
  barras.forEach((b, i) => {
    b.classList.remove("atual", "concluida", "pausada");
    if (i < indice) b.classList.add("concluida");
    if (i === indice) b.classList.add("atual");
  });
}

function irParaStory(indice){
  clearTimeout(timeoutAvanco);

  if (indice < 0){
    indice = 0;
  }
  if (indice >= HISTORIA.length){
    finalizarStories();
    return;
  }

  indiceAtual = indice;
  renderizarStory(indiceAtual);
  agendarAvanco();
}

function agendarAvanco(){
  clearTimeout(timeoutAvanco);
  // lê a duração definida no CSS (--duracao-story) pra manter as duas coisas em sincronia
  const duracaoCss = getComputedStyle(document.documentElement)
    .getPropertyValue("--duracao-story").trim();
  const duracaoMs = duracaoCss.endsWith("ms")
    ? parseFloat(duracaoCss)
    : parseFloat(duracaoCss) * 1000;

  timeoutAvanco = setTimeout(() => irParaStory(indiceAtual + 1), duracaoMs);
}

function pausarStory(){
  if (pausado) return;
  pausado = true;
  clearTimeout(timeoutAvanco);
  const barras = pegarBarras();
  if (barras[indiceAtual]) barras[indiceAtual].classList.add("pausada");
}

function retomarStory(){
  if (!pausado) return;
  pausado = false;
  const barras = pegarBarras();
  const barraAtual = barras[indiceAtual];
  if (!barraAtual) return;

  // recalcula quanto tempo falta com base no quanto a barra já preencheu
  const preenchimento = barraAtual.querySelector(".barra-preenchimento");
  const proporcaoFeita = preenchimento.getBoundingClientRect().width /
    barraAtual.getBoundingClientRect().width;

  const duracaoCss = getComputedStyle(document.documentElement)
    .getPropertyValue("--duracao-story").trim();
  const duracaoMs = duracaoCss.endsWith("ms")
    ? parseFloat(duracaoCss)
    : parseFloat(duracaoCss) * 1000;

  barraAtual.classList.remove("pausada");
  const tempoRestante = duracaoMs * (1 - proporcaoFeita);
  timeoutAvanco = setTimeout(() => irParaStory(indiceAtual + 1), tempoRestante);
}

function iniciarStories(){
  montarBarras();
  indiceAtual = 0;
  mostrarTela(telaStories);
  renderizarStory(0);
  agendarAvanco();
}

function finalizarStories(){
  clearTimeout(timeoutAvanco);
  mostrarTela(telaFinal);
}

/* -------- zonas de toque: esquerda volta, direita avança -------- */
const zonaEsq = document.getElementById("zona-esq");
const zonaDir = document.getElementById("zona-dir");

zonaEsq.addEventListener("click", () => irParaStory(indiceAtual - 1));
zonaDir.addEventListener("click", () => irParaStory(indiceAtual + 1));

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