import { SlidingWindow } from "../katas/SlidingWindow";

describe("Sliding Window kata. Return the maximum profit you can achieve by buying a stock one day and selling it another day in the future. Each number in the provided array is the share price on a given day.", () => {
  test("Return max profit", () => {
    expect(SlidingWindow([7, 1, 5, 3, 6, 4])).toEqual(5);
  });
  test("Return max profit", () => {
    expect(SlidingWindow([7, 6, 4, 3, 1])).toEqual(0);
  });
});

// test("Return the maximum profit you can achieve by buying a stock one day and selling it another day in the future. Each number in the provided array is the share price on a given day.", () => {
//   expect(SlidingWindow([7, 1, 5, 3, 6, 4])).toEqual(5);
// });
// test("Return the maximum profit you can achieve by buying a stock one day and selling it another day in the future. Each number in the provided array is the share price on a given day.", () => {
//   expect(SlidingWindow([7, 6, 4, 3, 1])).toEqual(0);
// });
