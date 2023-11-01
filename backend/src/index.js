const express = require('express');
const app = express();



app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    nome: 'samu',
    profissão: 'procurador de emprego',
    idade: '19',
  });
});

app.listen(3333);
