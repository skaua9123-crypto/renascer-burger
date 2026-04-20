# Renascer Burguer Landing Page

Landing page premium focada em conversao para pedidos no WhatsApp, pronta para usar como link da bio.

## Arquivos

- `index.html`: estrutura da pagina
- `styles.css`: visual, responsividade e animacoes
- `script.js`: animacao de entrada e feedback de clique
- `assets/`: pasta para as fotos da hamburgueria

## Onde trocar imagens

Coloque as imagens dentro da pasta `assets/` com estes nomes:

- `hero-burger.jpeg` -> foto segurando o hamburguer
- `experience.jpeg` -> foto do cliente comendo
- `stacked-burgers.jpeg` -> foto dos hamburgueres empilhados
- `logo-renascer.jpeg` -> logo da marca

Se preferir outros nomes, altere os `src` no arquivo `index.html`.

## Onde editar textos e links

Os comentarios no `index.html` mostram exatamente onde editar:

- WhatsApp
- Cardapio
- Promocao
- Endereco
- Horario
- Instagram
- Google Maps

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

## Observacoes

- A pagina foi pensada primeiro para mobile.
- Se alguma imagem nao existir, o layout mostra um fallback visual elegante em vez de quebrar.
- Para melhor conversao, mantenha a foto principal forte e bem iluminada.
