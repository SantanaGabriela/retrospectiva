# Retrospectiva de namoro — como usar

Site no formato "stories" (tipo Spotify Wrapped / Instagram) com uma foto e
uma frase para cada ano de namoro, contador de dias ao vivo e música de fundo.

## Estrutura de pastas

```
retrospectiva/
├── index.html
├── style.css
├── script.js
├── fotos/
│   ├── 2016.jpg   (o começo — o pedido, 30/10/2016)
│   ├── 1 ano 2017.jpeg   (aniversário de 1 ano)
│   ├── ...
│   ├── 9 ano 2025.jpeg   (aniversário de 9 anos)
│   └── 2026.jpg   (aniversário de 10 anos)
└── musica/
    └── trilha.mp3
```

## Passo a passo

1. **Fotos**: as fotos anuais ficam na pasta `fotos/`, de `2016.jpg` a
   `2026.jpg`. Os stories comemorativos de 1 a 9 anos usam as fotos
   `1 ano 2017.jpeg` até `9 ano 2025.jpeg`; o aniversário de 10 anos usa
   `2026.jpg`. 2016 é o começo e 2017–2026 são os 10 anos de namoro.
   Para trocar uma foto de aniversário, substitua o arquivo mantendo o
   mesmo nome. Se o arquivo não existir, aquele story aparece sem foto.

2. **Adicione a música**: coloque um arquivo `.mp3` dentro de `musica/` com
   o nome `trilha.mp3`. Se preferir outro nome, atualize a linha
   `<audio id="audio-trilha" src="musica/trilha.mp3" ...>` no `index.html`.
   Use uma música que vocês baixaram legalmente (ex.: exportada do próprio
   Spotify não funciona por causa de DRM — dá pra usar um MP3 comprado,
   gravado por vocês, ou de bancos de música livres de direitos).

3. **Edite os textos**: abra `script.js` e procure o bloco `HISTORIA` no
   topo do arquivo. Cada objeto `{ ano, imagem, frase, motivo }` é um story.
   Troque `frase` (uma linha poética curta) e `motivo` (o motivo de amar
   daquele ano) pelos de vocês. Pode adicionar ou remover anos livremente.

4. **Edite os nomes e mensagem final**: no `index.html`, procure os
   comentários `<!-- EDITE AQUI -->` — tem o nome de vocês na capa e a
   mensagem final antes da assinatura.

5. **Confira a data de início**: em `script.js`, a constante `DATA_INICIO`
   já está com `30/10/2016`. O contador de dias na capa é calculado ao vivo
   a partir dela, então vai continuar certo mesmo se você abrir o site daqui
   a alguns meses.

6. **Veja no navegador**: no VS Code, clique com o botão direito em
   `index.html` → "Open with Live Server" (se tiver a extensão instalada),
   ou simplesmente dê duplo clique no arquivo pra abrir direto no navegador.

## Ajustes finos

- **Velocidade de cada story**: no `style.css`, a variável
  `--duracao-story` (no topo do arquivo, dentro de `:root`) controla quanto
  tempo cada story fica na tela antes de avançar sozinho. Está em `6s`.
- **Navegação manual**: tocar/clicar na metade direita da foto avança,
  na esquerda volta. Também dá para tocar em uma barra de progresso para
  pular direto para uma lembrança. Segurar a foto pausa o avanço automático.
  No teclado, use as setas (`←` `→`) para navegar e a barra de espaço para
  pausar/retomar.
- **Stories interativos**: o coração no topo reage em cada lembrança. Os
  stories dos anos e aniversários concluem a retrospectiva antes dos dois
  extras finais: o mapa dos destinos mais visitados, em que dá para escolher
  um lugar favorito, e o quiz de três perguntas. O mapa e o quiz têm fundos
  animados feitos em CSS, sem fotos; o quiz espera uma resposta antes de
  seguir para a próxima pergunta.
- **Cores dos stories**: a paleta romântica fica em `PALETA_STORIES`, no
  `script.js`. O destaque e o fundo alternam entre os capítulos.
- **Mensagem secreta (P.S.)**: na tela final, segurar o coração por cerca
  de 1,4s revela uma mensagem escondida. Pra editar o texto, procure
  `final-ps` no `index.html`. Pra mudar o tempo necessário, é a constante
  `TEMPO_PARA_REVELAR` no `script.js`.
- **Reação em emoji**: no final, ela toca num emoji (❤️ 🥹 😍 😭 🔥) pra
  reagir, igual reação de story do Instagram. A escolha fica salva só no
  navegador dela (via `localStorage`), sem passar por nenhum servidor —
  você não vê o que ela escolheu, é só uma lembrancinha pra ela mesma.
  Pra trocar os emojis disponíveis, procure `final-reacao-emojis` no
  `index.html` e edite os botões (o atributo `data-emoji` é o que fica
  salvo).
- **Números da história**: a tela entre a capa e os stories mostra os dias
  juntos, quantos aniversários de namoro já passaram (calculado
  automaticamente a partir de `DATA_INICIO`, então já vai marcar 10 no dia
  30/10/2026) e quantos capítulos tem a retrospectiva.

## Publicar no GitHub Pages (link pra ele acessar de qualquer lugar)

1. **Crie um repositório novo** no GitHub (github.com → botão "New"). Pode
   deixar como **público** — dá no mesmo, porque o GitHub Pages publica o
   site como uma página pública de qualquer forma, mesmo que o repositório
   seja privado (qualquer pessoa com o link consegue ver, não tem senha).
   Se isso te incomoda, escolha um nome de repositório discreto, que não
   entregue do que se trata.

2. **Suba os arquivos**. Duas formas:
   - **Pelo navegador**: na página do repositório, clique em "Add file" →
     "Upload files" e arraste a pasta inteira (`index.html`, `style.css`,
     `script.js`, `fotos/`, `musica/`).
   - **Pelo terminal do VS Code** (já que você tem o programa):
     ```
     git init
     git add .
     git commit -m "primeira versão da retrospectiva"
     git branch -M main
     git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
     git push -u origin main
     ```

3. **Ative o GitHub Pages**: no repositório, vá em **Settings → Pages**.
   Em "Branch", selecione `main` e a pasta `/ (root)`, depois clique em
   **Save**.

4. **Aguarde 1–2 minutos** e acesse o link que aparece ali mesmo, algo como:
   `https://seu-usuario.github.io/seu-repositorio/`

5. Qualquer atualização futura (trocar uma frase, adicionar uma foto) é só
   repetir o upload ou fazer `git add . && git commit -m "ajuste" && git push`
   — o site atualiza sozinho em alguns minutos.


## Stories interativos

A segunda tela mostra dias, horas, aniversarios e a quantidade de capítulos
de viagem calculada diretamente do roteiro. As fotos das viagens, a partir
de 2020, estão agrupadas por ano: Barra de Jangada e Cabo de Santo Agostinho
em 2020, Barra de Jangada em 2021 e 2022, João Pessoa, Gravatá e Porto de
Galinhas em 2024, e João Pessoa em 2025. A duração dos stories continua
definida por `--duracao-story` no `style.css`; nos capítulos de viagem,
ela se ajusta para dar tempo de ver todas as fotos.
O roteiro também celebra os aniversários de 1 a 10 anos entre as histórias
anuais. Depois do último ano da retrospectiva, mostra um mapa dos destinos
mais visitados calculado a partir de `VIAGENS` e um quiz de três perguntas
sobre a data de namoro, o primeiro beijo e o pedido.