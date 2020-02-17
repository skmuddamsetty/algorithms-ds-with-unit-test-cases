const {
  findPair_Naive,
  findPair_Hashing,
  findPair_Sorting
} = require('./index');

test('findPair_Naive is a function', () => {
  expect(typeof findPair_Naive).toEqual('function');
});

test('findPair_Hashing is a function', () => {
  expect(typeof findPair_Hashing).toEqual('function');
});

test('findPair_Sorting is a function', () => {
  expect(typeof findPair_Sorting).toEqual('function');
});

test('findPair_Naive works properly', () => {
  findPair_Naive([8, 7, 2, 5, 3, 1], 10);
  expect(console.log.mock.calls[0][0]).toEqual('(0,2)');
  expect(console.log.mock.calls[1][0]).toEqual('(1,4)');
  expect(console.log.mock.calls[2]).toEqual(undefined);
});

test('findPair_Sorting works properly', () => {
  findPair_Sorting([8, 7, 2, 5, 3, 1], 10);
  expect(console.log.mock.calls[0][0]).toEqual('(1,5)');
  expect(console.log.mock.calls[1][0]).toEqual('(2,4)');
  expect(console.log.mock.calls[2]).toEqual(undefined);
});

test('findPair_Hashing works properly', () => {
  findPair_Hashing([8, 7, 2, 5, 3, 1], 10);
  expect(console.log.mock.calls[0][0]).toEqual('(0,2)');
  expect(console.log.mock.calls[1][0]).toEqual('(1,4)');
  expect(console.log.mock.calls[2]).toEqual(undefined);
});

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});
