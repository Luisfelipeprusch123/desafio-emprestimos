# Imagem base
FROM node:18

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos do projeto
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código-fonte
COPY . .

# Construir o projeto (para produção) ou rodar em desenvolvimento
EXPOSE 3000
CMD ["npm", "start"]
