import express from 'express';
import Routes from './routes/index';

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());

Routes(server);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default server;
