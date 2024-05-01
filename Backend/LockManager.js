// LockManager.js
class LockManager {
    constructor() {
      this.locks = new Set(); // Use a Set to store locked resources
    }
  
    acquireLock(resourceId) {
      return new Promise((resolve, reject) => {
        if (!this.locks.has(resourceId)) {
          this.locks.add(resourceId);
          resolve();
        } else {
          reject(new Error(`Resource ${resourceId} is already locked`));
        }
      });
    }
  
    releaseLock(resourceId) {
      this.locks.delete(resourceId);
    }
  }
  
  module.exports = LockManager;
  