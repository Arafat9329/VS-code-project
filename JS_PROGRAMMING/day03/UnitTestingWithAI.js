const { expect } = require("chai");
const { reverseArray } = require("../AICoding");

describe("reverseArray", () => {});
it("should return an empty array when given an empty array as input", () => {
  const input = [];
  const result = reverseArray(input);
  expect(result).to.deep.equal([]);
});
it("should handle an array with a single element", () => {
  const input = [42];
  const result = reverseArray(input);
  expect(result).to.deep.equal([42]);
});
