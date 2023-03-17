# MOTORS

O JSON para utilizar no Insomnia é este aqui ->
https://drive.google.com/file/d/1dc9a2XnrpR2Bigd8cEDLSuqZcgDwdnEM/view

O url base da API é http://localhost:3000

Acessar documentação da api -> http://localhost:3000/api-docs

## TECNOLOGIAS USADAS

- Nodejs
- Express
- Prisma

## INSTALAÇÂO

```bash
# Fazer o clone do projeto
git clone git@github.com:projeto-m6/backend.git

# Acesse a pasta do projeto
cd backend

# Instale as dependências
yarn


# Faça uma copia do arquivo .env.example e renomei para .env
cat .env.example > .env

# Informe os dados no arquivo .env

# Crie um banco de cados com o nome que você informou no arquivo .env

# Rode as migrations
yarn prisma migrate deploy

# Execute a aplicação
yarn dev

# O servidor iniciará na porta: 3000
```
