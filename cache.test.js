const Cache = require('./cache');

test('get(key) returns -1 if key doesnt exist', () => {
  var cache = new Cache();
  var value = cache.get('missing-key');
  expect(value).toBe(-1);
});

test('get(key) returns value if key exists', () => {
  var cache = new Cache();
  var key = 'valid-key';
  var value = 'some-value';
  cache.put(key, value);
  expect(cache.get(key)).toBe(value);
});

test('get(key) updates last access time', async () => {
  var cache = new Cache();
  var key = 'valid-key';

  // Update key
  cache.put(key, 'some-value');

  // retrieve key to set last access time
  cache.get(key);
  var firstLastAccessTime = cache.getLastAccessTime(key);

  // sleep so the access times differ
  // (JavaScript dates only precise to the nearest millisecond)
  await sleep(5);

  // retrieve key to set last access time
  cache.get(key);
  var secondLastAccessTime = cache.getLastAccessTime(key);

  expect(firstLastAccessTime).not.toBe(secondLastAccessTime);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
