# 🏘️ Link: 
- https://api-videos-para-trabalho-ptac.vercel.app/

## Descrição:
- Esse é uma API Rest feita por min especialmente para a disciplina PTAC, aplicações para cliente, e é feita em conjunto com o repositório https://github.com/Amorim-EA/TrabalhoPTAC

# 🗃️ EndPoints
### GET - /videos
### GET - /video/:id
- ex: /video/1 = req.params.id = 1
### POST - /video 
- req.body = objectJson{title(string), description(string), link(string)}
### PUT - /video/:id   
- req.body = objectJson{title(string), description(string), link(string)}  ex: /video/10 = req.params.id = 10
### DELETE - /video/:id   
- ex: /video/5 = req.params.id = 5

## 🖥️ Tecnologias Utilizadas:
- Nodejs
- Yarn
- Express
- Sequelize
- Cors
- Postgre ElephantSQL online
- pg e pg-hstore
- dotenv
- nodemon
- Inteligência 🧠

### 🧔 Coded By Erick Amorim
### Thank You 😉
