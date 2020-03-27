const express = require('express');

const app = express();

app.use(express.json());

app.post('/user', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Ops' });
});

app.get('/user/:id', (request, response) => {
  const body = request.body;
  const params = request.query;
  console.log(body);
  response.json({
    id: request.params.id,
    nome: params.nome
  });
});

app.listen(3333, () => {
  console.log('Servidor ouvindo');
});
