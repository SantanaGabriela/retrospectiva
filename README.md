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
│   ├── 2017.jpg   (ano 1)
│   ├── ...
│   └── 2026.jpg   (ano 10 — os 10 anos completos)
└── musica/
    └── trilha.mp3
```

## Passo a passo

1. **Fotos**: já estão na pasta `fotos/`, uma por ano, de `2016.jpg` a
   `2026.jpg` (11 fotos: 2016 é o começo e 2017–2026 são os 10 anos de
   namoro — por isso a tela mostra "ano 1 de 10" até "ano 10 de 10").
   Pra trocar uma foto, é só substituir o arquivo mantendo o mesmo nome.
   Se o arquivo não existir, aquele story aparece sem foto — nada quebra.

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
- **Navegação manual**: tocar/clicar na metade direita da tela avança,
  na esquerda volta. Segurar pressionado pausa o avanço automático.
  Nas setas do teclado (`←` `→`) também funciona.
- **Cores**: todas as cores estão centralizadas no topo do `style.css`,
  dentro de `:root` (`--vinho-fundo`, `--dourado`, `--rosa-poeira`, etc.),
  então dá pra trocar a paleta inteira mexendo só ali.
- **Progressão de tom por ano**: as fotos ganham uma tonalidade que vai
  mudando gradualmente do início (roxo-azulado) até o fim (dourado), pra
  reforçar a sensação de passagem de tempo. As duas cores-base ficam em
  `TOM_INICIO` e `TOM_FIM`, no topo da seção 4 do `script.js`.
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