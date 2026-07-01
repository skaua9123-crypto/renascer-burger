# Renascer Burguer Landing Page

Landing page premium focada em conversao para pedidos no WhatsApp, pronta para usar como link da bio.

Identidade visual atualizada em Jul/2026 com a nova marca Renascer Burger (logo, paleta e tipografia do manual de marca).

## Identidade visual

- **Laranja Vital** `#FF5D02` - cor principal
- **Preto** `#000000` - base e contraste
- **Areia Acolhedora** `#E9E4D0` - tom neutro e suave
- **Branco Essencial** `#F0F0F0` - texto e respiro visual
- **Tipografia de titulo:** Antonio (Google Fonts)
- **Tipografia de texto:** Poppins (substituta gratuita da fonte Rota do manual de marca, mesma familia geometrica arredondada)

## Arquivos

- `index.html`: estrutura da pagina
- `styles.css`: visual, responsividade e animacoes
- `script.js`: animacao de entrada e feedback de clique
- `assets/`: pasta com o logo e as fotos da hamburgueria

## Onde trocar imagens

Imagens atuais dentro da pasta `assets/`:

- `logo-renascer.png` -> logo oficial (fundo transparente, use este por padrao)
- `logo-renascer.jpg` -> logo oficial em fundo solido (fallback)
- `hero-burger.jpeg` -> foto de destaque no hero
- `batata-cheddar-bacon.jpeg` -> foto da batata carregada
- `renascer-bbq.jpeg` -> foto do Renascer BBQ
- `renascer-original.jpeg` -> foto usada na prova social

Para trocar por fotos novas, basta substituir o arquivo mantendo o mesmo nome, ou alterar o `src` correspondente no `index.html`.

## Onde editar textos e links

Os comentarios no `index.html` mostram exatamente onde editar:

- WhatsApp
- Cardapio
- Como chegar
- Instagram
- Endereco
- Horario

## Como testar localmente

1. Abra a pasta no VS Code.
2. Clique duas vezes no `index.html` ou use uma extensao como Live Server.
3. Confirme se as imagens aparecem corretamente no mobile.

## Como subir na Vercel

1. Crie um repositorio no GitHub e envie estes arquivos.
2. Acesse [Vercel](https://vercel.com/).
3. Clique em `Add New` -> `Project`.
4. Importe o repositorio.
5. A Vercel detecta automaticamente que e um site estatico.
6. Clique em `Deploy`.

Nao precisa configurar build command nem output directory.

## Como subir na Netlify

1. Compacte a pasta do projeto em `.zip` ou envie para GitHub.
2. Acesse [Netlify](https://www.netlify.com/).
3. Clique em `Add new site`.
4. Escolha `Deploy manually` e arraste a pasta/zip, ou conecte o repositorio.
5. O deploy sera feito como site estatico.

Tambem nao precisa configurar build command.
