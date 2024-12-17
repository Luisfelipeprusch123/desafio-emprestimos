# imagem base
FROM node:18


# Definir o diretório  de trabalho 
WORKDIR /usr/src/app

# Copiar arquivos do projetos 
COPY package*.json


# instalar dependências

RUN npm install

# Copiar o código-fonte
COPY . .

# Expor a porta do servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "server.js"]