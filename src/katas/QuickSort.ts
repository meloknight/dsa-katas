function qs(a: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }
  const pivotIdx = partition(a, lo, hi);
  qs(a, lo, pivotIdx - 1);
  qs(a, pivotIdx + 1, hi);
}

function partition(a: number[], lo: number, hi: number): number {
  const pivot = a[hi];
  let idx = lo - 1;
  for (let i = lo; i < hi; i++) {
    if (a[i] <= pivot) {
      idx++;
      const tmp = a[i];
      a[i] = a[idx];
      a[idx] = tmp;
    }
  }
  idx++;
  a[hi] = a[idx];
  a[idx] = pivot;

  return idx;
}

export function QuickSort(a: number[]): number[] {
  qs(a, 0, a.length - 1);
  return a;
}
