[![Deploy on heroku](https://img.shields.io/badge/deploy-heroku.com-blueviolet)](https://projeto-fundos-imobiliarios.herokuapp.com/) 
![badge node version](https://img.shields.io/badge/node-v12.18.3-brightgreen)
![badge fork](https://img.shields.io/github/forks/maaysiq/projeto-final?style=social)
![badge license](https://img.shields.io/github/license/maaysiq/projeto-final?style=social)


<h1 align="center">
  <img src="imagens/Finance.gif" alt="Homem planejando" width="500">
  <p align="center">API Fundo de Investimentos Imobiliarios - FIIs<p>
</h1>

> Banco de dados de Fundos de Investimentos Imobiliários para se investir no ano de 2021 💰

> Status: Em construção... 🚧 👷  

 ## 📈 **Apresentação**

 A API Fundo de Investimentos Imobiliarios - FIIs é o projeto de conclusão do bootcamp de Back-end da [{reprograma}](https://reprograma.com.br/), em parceria com o projeto [ MINAs do Porto Digital](https://www.portodigital.org/capital-humano/iniciativas-para-a-diversidade/mulheres-em-inovacao-negocios-e-artes-minas). É uma API que tem por objetivo informar quais os melhores fundos imobiliários para se investir no ano de 2021.




 ## 🚀 **Tecnologias e dependências**

 [Git](https://git-scm.com/)

 [GitHub](https://github.com/)

 [NodeJS](https://nodejs.org/pt-br/) 

 [Nodemon](https://www.npmjs.com/package/nodemon)

 [Express](https://expressjs.com/pt-br/)

 [MongoDB](https://www.mongodb.com/)

 [Mongoose](https://mongoosejs.com/)

 [Dotenv-safe](https://www.npmjs.com/package/dotenv-safe)

 
## 🔧 **Funcionalidades**

- [X] Cadastro de fundos de investimentos imobiliários;
- [X] Lista de todos os  fundos de investimentos imobiliários cadastrados;
- [X] Lista de fundos de investimentos imobiliários por ID;
- [X] Lista de fundos de investimentos imobiliários por fundos;
- [X] Lista de fundos de investimentos imobiliários por segmentos;
- [X] Atualização de fundos de investimentos imobiliários;
- [X] Remoção de fundos de investimentos imobiliários.

## 🎯 **Rotas HTTP**

Esta API está sendo executada na `porta 8080` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:8080/` antes dos endpoints de requisição.


| Feature | Método | Rota |
|---------|--------|------|
| Lista de todos os fundos de Investimentos Imobiliários | GET | `/fundosimobiliarios/` |
| Lista os fundos de Investimentos Imobiliários por ID| GET | `fundosimobiliarios/id` |
| Lista os fundos de Investimentos Imobiliários por segmento| GET | `/fundosimobiliarios/segmento<nome-do-segmento>` |
| Lista os fundos de Investimentos Imobiliários por fundo| GET | `/fundosimobiliarios/fundo<nome-do-fundoImobiliário>` |
| Cadastro de fundos de Investimentos Imobiliários | POST | `/fundosimobiliarios/` |
| Atualização de fundos de Investimentos Imobiliários por fundo | PUT | `/fundosimobiliarios?fundo=<nome-do-fundoImobiliário>` |
| Remoção de fundos de Investimentos Imobiliários por fundo| DELETE | `/fundosimobiliarios?fundo=<nome-do-fundoImobiliário>` |

 ## 🔍 **Referências**


[Como escrever um README.md sensacional no Github](https://dev.to/reginadiana/como-escrever-um-readme-md-sensacional-no-github-4509#o-que-%C3%A9-o-readme)

[Clube Fundos de Investimentos Imobiliários](https://www.clubefii.com.br/)




 







































































### Autora
---

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius:40%;" src="imagens/ftomayara2.png" width="100px;" alt=""/>
 <br />
 <sub><b>Mayara Siqueira</b></sub></a>


 Entre em contato!❤️👋🏽


[![Linkedin Badge](https://img.shields.io/badge/-Mayara-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/may-siqueira/)](https://www.linkedin.com/in/may-siqueira/) 
[![Gmail Badge](https://img.shields.io/badge/-maay.siqueiraa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:maay.siqueiraa@gmail.com)](mailto:maay.siqueiraa@gmail.com)