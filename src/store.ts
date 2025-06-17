export interface Item {
  id: number;
  selected: boolean;
}

const ITEMS: Item[] = Array.from({ length: 1_000_000 }, (_, i) => ({
  id: i + 1,
  selected: false,
}));

let sortOrder: number[] = [...ITEMS.map(item => item.id)];

export const store = {
  getItems: (offset: number, limit: number, search?: string): Item[] => {
    let ids = sortOrder;
    if (search) {
      const term = search.toLowerCase();
      ids = ids.filter(id => id.toString().includes(term));
    }
    return ids.slice(offset, offset + limit).map(id => ({
      id,
      selected: ITEMS[id - 1].selected,
    }));
  },

  selectItem: (id: number, selected: boolean) => {
    if (ITEMS[id - 1]) ITEMS[id - 1].selected = selected;
  },

  sortItems: (fromId: number, toId: number) => {
    const fromIndex = sortOrder.indexOf(fromId);
    const toIndex = sortOrder.indexOf(toId);

    if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) return;

    const updated = [...sortOrder];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);

    sortOrder = updated;
  },

  getState: () => ({
    sortOrder,
    selected: ITEMS.filter(item => item.selected).map(i => i.id),
  }),
};
