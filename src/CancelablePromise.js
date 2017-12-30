export default class CancelablePromise {
  constructor() {
    this._cancelAll = false;
  }

  cancel() {
    this._cancelAll = true;
  }

  make(promise) {
    return new Promise((resolve) => {
      promise.then((value) => {
        if (!this._cancelAll) resolve(value);
      });
    });
  }
}