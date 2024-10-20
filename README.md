
# Sistema de Solicitação de Empréstimo

Este projeto consiste em um sistema simples para solicitação de empréstimos, implementado com um backend em Node.js usando Express e um frontend em React. O sistema permite que os usuários preencham um formulário com suas informações pessoais e recebam uma proposta de empréstimo com base nos dados fornecidos.

## Tecnologias Utilizadas

- **Backend:**
  - Node.js
  - Express
  - CORS

- **Frontend:**
  - React
  - Axios
  - Zod
  - React Hook Form

## Funcionalidades

- **Cadastro de Solicitação de Empréstimo:**
  - Os usuários podem preencher um formulário com as seguintes informações:
    - Nome
    - CPF
    - Idade
    - Salário
    - Localização (sigla do estado)

- **Proposta de Empréstimo:**
  - O sistema avalia os dados fornecidos e retorna uma proposta de empréstimo com as seguintes opções:
    - Empréstimo Pessoal
    - Empréstimo Consignado
    - Empréstimo com Garantia
  - Cada proposta inclui a taxa de juros correspondente.

- **Respostas do Servidor:**
  - A resposta do servidor exibe o nome do usuário e as propostas de empréstimo disponíveis.

## Estrutura do Projeto

```
/backend
  └── server.js           # Código do servidor Express
/frontend
  └── EmprestimoForm.jsx   # Componente do formulário de empréstimo
```

## Como Executar o Projeto

### Backend

1. Navegue até a pasta do backend:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o servidor:

   ```bash
   node server.js
   ```

   O servidor estará rodando em `http://localhost:3000`.

### Frontend

1. Navegue até a pasta do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute a aplicação React:

   ```bash
   npm start
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue para discutir melhorias e novas funcionalidades.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
