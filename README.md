# Convite de Formatura

Site de convite de formatura, agora preparado para servir **vários convidados**
(um por formando/formanda) a partir do mesmo deploy, usando URLs como:

- `.../Convite_formando/roberta`
- `.../Convite_formando/narija`

## Como adicionar uma nova pessoa

1. Coloque as duas fotos dela em `src/assets/images/<slug>/` (ex: `hero.jpg` e `about.jpg`).
2. Abra `src/data/graduates.js`, copie um dos blocos dentro de `GRADUATES`,
   troque a chave (o "slug" que vai na URL), o nome, a citação e os imports das fotos.
3. Se o evento (data/local) ou o PIX forem diferentes para essa pessoa, é só
   sobrescrever esses campos dentro do bloco dela — por padrão todo mundo
   compartilha o mesmo `EVENT`/`CONTACT`/PIX definidos no topo do arquivo.
4. Para o link ter uma **prévia própria no WhatsApp/Instagram** (foto, nome e
   data corretos ao colar o link):
   - Gere a arte de prévia (1200x630) com `pip install Pillow` e depois:
     ```bash
     python3 scripts/generate-og-image.py \
       --photo src/assets/images/<slug>/hero.jpg \
       --slug <slug> \
       --name "Nome da Pessoa" \
       --course "Odontologia — UNINASSAU" \
       --date "24 de Abril de 2027" \
       --venue "Requinte Buffet · Mossoró/RN"
     ```
   - Adicione uma entrada em `src/data/social.js` com o mesmo slug, o título/
     descrição desejados e `image: "og/<slug>.jpg"`.
5. Dê `git push` — o GitHub Actions builda e publica automaticamente. O build
   já gera sozinho `dist/<slug>/index.html` com a prévia certa para cada
   pessoa listada em `social.js` (o GitHub Pages serve `.../<slug>` e
   `.../<slug>/` como esse mesmo arquivo).

A rota `/` (sem slug) redireciona para o convite padrão (`DEFAULT_SLUG`, no
arquivo `graduates.js`). Qualquer slug que não exista mostra uma tela
"Convite não encontrado" com links para os convites disponíveis.

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org) 18+ instalado.

```bash
npm install
npm run dev       # http://localhost:5173/Convite_formando/roberta
npm run build     # gera a pasta dist/ com o site pronto
npm run preview   # pré-visualiza o build de produção
```
