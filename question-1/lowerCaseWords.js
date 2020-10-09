function lowerCaseWords(array) {

    let newArray = [];
    const promise = new Promise((resolve, reject) => {
        for (let word of array) {
            if (typeof word == "string") {
                newArray.push(word.toLowerCase());
            }
        }
        if (newArray.length < 1) {
            reject("No strings in the array.");
        } else {
            resolve();
        }
    })
    promise.catch((message) => console.log(message));
    promise.then(() => console.log(newArray));
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray);
