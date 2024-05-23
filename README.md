# Projeto Lumi - Teste Prático para Desenvolvedor Full Stack

## Descrição

Este projeto é um teste prático para a posição de Desenvolvedor Full Stack Pleno na Lumi. O objetivo é avaliar as habilidades técnicas e a competência do candidato em desenvolvimento Full Stack, utilizando tecnologias como TypeScript/JavaScript ou Python, Node.js e React.

O desafio consiste em desenvolver uma aplicação capaz de:
1. Extrair dados de faturas de energia elétrica.
2. Organizar esses dados em um banco de dados PostgreSQL.
3. Apresentar esses dados em uma aplicação web, por meio de uma API.

## Estrutura do Projeto
/projeto
/client
/src
App.js # Componente principal da aplicação React
index.js # Ponto de entrada da aplicação React
/prisma
schema.prisma # Definição do esquema do banco de dados Prisma
extract_data.py # Script Python para extração de dados das faturas
server.js # Servidor Node.js usando Express
package.json # Definições de dependências e scripts NPM
server.test.js # Testes unitários para o servidor usando Jest
.env # Configurações de ambiente (ex. DATABASE_URL) 



## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL

### Frontend
- React
- Axios

### Extração de Dados
- Python
- pdfplumber

### Testes
- Jest
- Supertest

## Pré-requisitos

- Node.js e npm instalados
- Python e pip instalados
- PostgreSQL instalado e configurado
- pgAdmin4 (opcional, mas recomendado para gerenciar o PostgreSQL)

## Configuração do Projeto

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio


### Passo 2: Configurar o Banco de Dados
1. Crie um banco de dados PostgreSQL
2. Configure o arquivo .env com a URL de conexão do banco de dados

DATABASE_URL="postgresql://postgres:415232@localhost:5432/API_CRUD?schema=public"

### Passo 3: Instalar as Dependências do Backend

npm install

### Passo 4: Configurar e Gerar o Prisma Client

npx prisma generate
npx prisma migrate dev --name init

### Passo 5: Iniciar o Servidor Backend

npm start

### Passo 6: Instalar as Dependências do Frontend

1. Navegue até a pasta client:
cd client

2. Instale as dependências do frontend:

npm install

3. Inicie o frontend:

npm start

## Passo 7: Configurar o Ambiente Python
1. Crie e ative um ambiente virtual:

python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate

2. Instale a biblioteca pdfplumber:

pip install pdfplumber

### Passo 8: Executar o Script de Extração de Dados


python extract_data.py path_to_pdf_invoice.pdf

### Passo 9: Executar os Testes

Certifique-se de que o banco de dados de teste está configurado corretamente no arquivo .env.test.
npm test

Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

Copie e cole o conteúdo acima no arquivo `README.md` do seu projeto. Se precisar de mais alguma coisa, estou à disposição para ajudar!
