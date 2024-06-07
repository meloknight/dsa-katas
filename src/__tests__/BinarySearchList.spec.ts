import { BinarySearchList } from "../katas/BinarySearchList";

describe("BinarySearchList", () => {
  it("should return true if the requested value is found in the array. Otherwise, it should return false.", () => {
    expect(BinarySearchList([6, 3, 8, 4, 1111, 234, 0], 3)).toEqual(true);
  });
});
