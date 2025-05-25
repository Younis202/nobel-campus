// Simple in-memory cache handler to avoid file system issues
const cache = new Map()

module.exports = class CacheHandler {
  constructor(options) {
    this.options = options
  }

  async get(key) {
    return cache.get(key)
  }

  async set(key, data) {
    cache.set(key, data)
  }
}