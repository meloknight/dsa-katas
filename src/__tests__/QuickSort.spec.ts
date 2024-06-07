import { QuickSort } from "../katas/QuickSort";

describe("QuickSort", () => {
  it("should sort an array in place", () => {
    expect(QuickSort([6, 3, 8, 4, 1111, 234, 0])).toEqual([
      0, 3, 4, 6, 8, 234, 1111,
    ]);
  });
});
