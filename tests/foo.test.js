describe('Array.', () => {
  test('indexOf returns -1 in case of an item that is not in the array.', () => {
    const arr = [1, 2, 3];

    expect(arr.indexOf(4)).toBe(-1);
  });
});
