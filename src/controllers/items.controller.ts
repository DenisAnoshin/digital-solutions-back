import { Request, Response } from 'express';
import { getFilteredItems } from '../services/items.service';
import { updateSelected, updateSorted, getState } from '../storage/memory';

export const getItems = (req: Request, res: Response) => {
  const offset = parseInt(req.query.offset as string || '0');
  const limit = parseInt(req.query.limit as string || '20');
  const search = (req.query.search as string || '').toLowerCase();

  const items = getFilteredItems({ offset, limit, search });
  res.json({ items });
};

export const postSelect = (req: Request, res: Response) => {
  updateSelected(req.body.selected || []);
  res.json({ success: true });
};

export const postSort = (req: Request, res: Response) => {
  updateSorted(req.body.sorted || []);
  res.json({ success: true });
};

export const getMemoryState = (req: Request, res: Response) => {
  res.json(getState());
};
