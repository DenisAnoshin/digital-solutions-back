import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {
  getItems,
  postSelect,
  postSort,
  getMemoryState,
} from './src/controllers/items.controller';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/items', getItems);
app.post('/select', postSelect);
app.post('/sort', postSort);
app.get('/state', getMemoryState);

export default app;