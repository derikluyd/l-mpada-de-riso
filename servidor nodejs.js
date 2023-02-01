// Servidor node.js

const express = require('express');
const app = express();

app.get('/api/risks', (req, res) => {
  res.json([
    {
      name: 'Risco 1',
      latitude: -34.397,
      longitude: 150.644
    },
    {
      name: 'Risco 2',
      latitude: -35.397,
      longitude: 151.644
    }
  ]);
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
