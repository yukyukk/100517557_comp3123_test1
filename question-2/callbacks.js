function resolvedPromise() {
    const promise = new Promise((resolve) => {
        resolve({
            'message': 'delayed success!'
        });
    })
    setTimeout(() =>
        promise.then(message => console.log(message)), 500);
}

function rejectedPromise() {
    const promise = new Promise((resolve, reject) => {
        reject({
            'error': 'delayed exception!'
        });
    })
    setTimeout(() =>
        promise.catch(message => console.log(message)), 500);
}

resolvedPromise();
rejectedPromise();