import { ITEMS, sortedItems } from '../storage/memory';

interface FilterParams {
  offset: number;
  limit: number;
  search: string;
}

export function getFilteredItems({ offset, limit, search }: FilterParams): number[] {
  let data = [...ITEMS];

  if (search) {
    data = data.filter((n) => n.toString().includes(search));
  }

  if (sortedItems.length > 0) {
    data = sortedItems.filter((n) => data.includes(n)).concat(
      data.filter((n) => !sortedItems.includes(n))
    );
  }

  return data.slice(offset, offset + limit);
}
