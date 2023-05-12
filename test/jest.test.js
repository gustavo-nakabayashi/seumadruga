test('Devo conhecer as principais assertivas do Jest', () => {
  let number = null;
  expect(number).toBeNull();

  number = 12;
  expect(number).not.toBeNull();
  expect(number).toBe(12);
  expect(number).toEqual(12);
  expect(number).toBeGreaterThan(10);
  expect(number).toBeLessThan(22);
});
