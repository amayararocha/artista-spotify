# Projeto ArtistHub 🎙️🎶

## Descrição

Este projeto é uma aplicação Angular que utiliza JSON Server para gerenciar e simular um banco de dados. A aplicação permite adicionar e listar detalhes de artistas, músicas mais tocadas e álbuns populares.

## Funcionalidades

- Adicionar detalhes de artistas
- Adicionar músicas mais tocadas
- Adicionar álbuns populares
- Listar todos os detalhes de artistas, músicas e álbuns

## Tecnologias Utilizadas

- **Angular**: Framework para construção da SPA (Single Page Application)
- **JSON Server**: Simulador de API REST para criar uma API fake
- **Tailwind CSS**: Biblioteca de estilização
- **RxJS**: Biblioteca para programação reativa
- **TypeScript**: Linguagem utilizada para desenvolvimento

## Configuração do Projeto

### Pré-requisitos

- Node.js
- npm ou yarn

### Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/amayararocha/artisthub.git
cd artisthub
```
2. **Instalando Dependências:**
```bash
npm install
```
3. **Configuração do JSON Server**
O projeto já inclui um arquivo db.json na raiz do projeto com a estrutura necessária para o JSON Server.

Para iniciar o JSON Server, execute o comando:

json-server --watch db.json --port 5000

Isso iniciará o JSON Server na porta 5000, e a API estará disponível em http://localhost:5000.

4. **Executando o Projeto Angular**
Inicie a aplicação Angular com o seguinte comando:
```bash
ng serve
```
A aplicação estará disponível em http://localhost:4200. 
