const groupAnagrams = require('./index');

test('groupAnagrams function exists', () => {
  expect(typeof groupAnagrams).toEqual('function');
});

test('Group Anagrams together', () => {
  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
    ['eat', 'tea', 'ate'],
    ['tan', 'nat'],
    ['bat']
  ]);
  expect(groupAnagrams(['listen', 'silent', 'tan', 'nat', 'bat'])).toEqual([
    ['listen', 'silent'],
    ['tan', 'nat'],
    ['bat']
  ]);
});
