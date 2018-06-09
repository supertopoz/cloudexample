const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('working')
})

const server = app.listen(process.env.PORT || 8080, () => {
  const host = server.address().address;
  const port = server.address().address;
  console.log(`Exampe app listning at http://${host}:${port}`);
})