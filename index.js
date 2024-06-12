import express from 'express';
import routes from './src/routes/apiRoutes';
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`The server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


routes(app);