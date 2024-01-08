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
- <a href="https://tailwindcss.com/" target="_blank">Tailwindcss</a> - Componentes estilizados
- <a href="https://www.npmjs.com/package/json-server" target="_blank">JSON Server</a> - Ferramenta que simula uma API REST

## Demonstração Online

A demonstração está  hospedada na AWS, no seguinte endereço:
<a href="http://ssbook.s3-website-sa-east-1.amazonaws.com" target="_blank">aqui</a>.

## Download

```bash
# Clonar o repositório
$ git clone https://github.com/antunesdanilo/vite-react-product-catalog

# Entrar no diretório do projeto
$ cd vite-react-product-catalog

# Instalar as dependências com npm
$ npm install

# Instalar as dependências com npm
$ yarn

# Iniciar a aplicação
$ yarn start
```

Acessar <a href="http://localhost:3000" target="_blank">localhost:3000</a>

## Instalação em container

Pré-requisitos

Docker<br/>
NodeJs<br/>
NPM

### Com docker compose

```bash
# Entrar no diretório do projeto
$ cd todolist

# Fazer o build das imagens e criar os containers
$ docker-compose up -d --build
```

### Com containers isolados

```bash
# Entrar no diretório do projeto
$ cd todolist

# Entrar no sub-diretório backend
$ cd backend

# Fazer o build da imagem
$ docker build -t todolist/backend .

# Executar o container
$ docker run -it -p 3333:3333 todolist/backend


# Entrar no sub-diretório frontend
$ cd frontend

# Fazer o build da imagem
$ docker build -t todolist/frontend .

# Executar o container
$ docker run -it -p 80:80 todolist/frontend
```

Acessar <a href="http://localhost" target="_blank">localhost</a>

## Instalação local

Pré-requisitos

NodeJS<br/>
NPM ou yarn
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


# Iniciar o API REST simulada através do json server
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

Acessar <a href="http://localhost:4200" target="_blank">localhost</a>

---
Desenvolvido por @DaniloAntunes - 2023