import { BubbleSort } from "../katas/BubbleSort";

describe("BubbleSort", () => {
  it("should sort an array in place", () => {
    expect(BubbleSort([6, 3, 8, 4, 1111, 234, 0])).toEqual([
      0, 3, 4, 6, 8, 234, 1111,
    ]);
  });
});
