function resolvedPromise() {
  const promise = new Promise((resolve) => {
  setTimeout(() =>
    resolve({
      'message': 'delayed success!'
    }, 500));
  })
    promise.then(message => console.log(message));
}

function rejectedPromise() {
  const promise = new Promise((resolve, reject) => {
  setTimeout(() =>
    reject({
      'error': 'delayed exception!'
    }, 500));
  })
    promise.catch(message => console.log(message));
}

resolvedPromise();
rejectedPromise();