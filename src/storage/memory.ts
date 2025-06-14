export const ITEMS: number[] = Array.from({ length: 1_000_000 }, (_, i) => i + 1);
export let selectedItems: Set<number> = new Set();
export let sortedItems: number[] = [];

export const updateSelected = (selected: number[]) => {
  selectedItems = new Set(selected);
};

export const updateSorted = (sorted: number[]) => {
  sortedItems = sorted;
};

export const getState = () => ({
  selected: Array.from(selectedItems),
  sorted: sortedItems,
});
