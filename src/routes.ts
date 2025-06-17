import { Router } from 'express';
import { store } from './store';

const router = Router();

router.get('/items', (req, res) => {
  const offset = parseInt(req.query.offset as string) || 0;
  const limit = parseInt(req.query.limit as string) || 20;
  const search = req.query.search?.toString();
  const items = store.getItems(offset, limit, search);
  res.json(items);
});

router.post('/select', (req, res) => {
  const { id, selected } = req.body;

  if (typeof id !== 'number' || typeof selected !== 'boolean') {
    res.status(400).json({ error: 'Invalid payload' });
  }

  store.selectItem(id, selected);
  res.json('success');
});


router.post('/sort', (req, res) => {
  const { fromId, toId } = req.body;

  if (typeof fromId !== 'number' || typeof toId !== 'number') {
    res.status(400).json({ error: 'Invalid fromId or toId' });
  }

  store.sortItems(fromId, toId);
  res.json('success');
});


router.get('/state', (req, res) => {
  res.json(store.getState());
});

export default router;
