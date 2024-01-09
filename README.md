# AUTO SUPER

## Sobre

Esta aplicação tem como objetivo permitir que o usuário liste e pesquise produtos através de uma lista vinda de um serviço que simula uma API REST. É possível visualizar uma lista de produtos, filtrar por categoria e/ou palavra-chave, ver seus detalhes e ainda adicionar ou remover do carrinho de compras.

## Linguagens utilizadas

- Javascript
- Typescript
- HTML
- CSS

## Tecnologias Utilizadas

No desenvolvimento desta aplicação foram utilizadas as seguintes tecnologias:

- <a href="https://nodejs.org" target="_blank">NodeJS</a> - Interpretador javascript
- <a href="https://pt-br.reactjs.org" target="_blank">ReactJS</a> - Framework frontend
- <a href="https://redux.js.org/" target="_blank">Redux</a> - Gerenciamento de estado
- <a href="https://tailwindcss.com/" target="_blank">Tailwindcss</a> - Componentes estilizados
- <a href="https://www.npmjs.com/package/json-server" target="_blank">JSON Server</a> - Ferramenta que simula uma API REST
- <a href="https://mui.com/material-ui/material-icons/" target="_blank">Material icons</a> - Ícones
- <a href="https://www.radix-ui.com/" target="_blank">Radix UI</a> - Componentes visuais
- <a href="https://www.docker.com/" target="_blank">Docker</a> - Criação de execução de containers

## Demonstração Online

A demonstração está hospedada na AWS, no seguinte endereço:
<a href="http://vite-react-product-catalog.s3-website-sa-east-1.amazonaws.com " target="_blank">aqui</a>.

## Instalação em container

Pré-requisitos

Docker

### Com docker compose

```bash
# Entrar no diretório do projeto
$ cd vite-react-product-catalog

# Fazer o build das imagens e criar os containers
$ docker-compose up -d --build
```

### Com containers isolados

```bash
# Entrar no diretório do projeto
$ cd vite-react-product-catalog

# Fazer o build da imagem para a API
$ docker build -t vite-react-product-catalog/api -f DockerfileApi .

# Executar o container
$ docker run -it -p 3000:3000 vite-react-product-catalog/api

# Em um novo terminal, entrar no diretório do projeto
$ cd vite-react-product-catalog

# Fazer o build da imagem para o frontend
$ docker build -t vite-react-product-catalog/frontend .

# Executar o container
$ docker run -it -p 80:80 vite-react-product-catalog/frontend
```

Acessar <a href="http://localhost" target="_blank">localhost</a>

## Instalação local

Pré-requisitos

NodeJS<br/>
NPM ou yarn<br/>
Json Server

```bash
# Clonar o repositório
$ git clone https://github.com/antunesdanilo/vite-react-product-catalog

# Entrar no diretório do projeto
$ cd vite-react-product-catalog

# Instalar as dependências
## NPM
$ npm install

## Yarn
$ yarn


# Iniciar a API REST simulada através do json server
## NPM
$ NPM run json-server

## Yarn
$ yarn json-server

# Iniciar a aplicação
## NPM
$ NPM run dev

## Yarn
$ yarn dev
```

Acessar <a href="http://localhost:4200" target="_blank">localhost:4200</a>

---

Desenvolvido por @DaniloAntunes - 2023
