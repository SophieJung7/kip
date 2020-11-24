class Cache {
  constructor() {
    this.vals = {};
    this.accessTimes = {};
  }

  // Values

  get(key) {
    if (key in this.vals) {
      // update access time on each cache lookup
      this.accessTimes[key] = new Date().getTime();
      return this.vals[key];
    }
    return -1;
  }

  put(key, value) {
    this.vals[key] = value;
  }

  // Last Access Time

  getLastAccessTime(key) {
    return this.accessTimes[key];
  }
}

module.exports = Cache;
