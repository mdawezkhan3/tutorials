const promise1 = Promise.resolve(3);
const promise2 = 42;

const promise3 = new Promise((resolve) => {
 setTimeout(resolve, 100, "foo")
})

Promise.all([promise1, promise2, promise3]).then(values => {
 console.log(values);
})


Promise.myAll = function (promises) {
  const settledPromises = [];
  let settledPromisesCount = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then((response) => {
        settledPromises[index] = response;
        settledPromisesCount++;
        if(settledPromisesCount === promises.length) {
          resolve(settledPromises);
        }
      }).catch((err) => {
        reject(err)
      });
    });
  })
}

Promise.myAll([promise1, promise2, promise3, 78]).then(values => {
 console.log(values);
}).catch(err => console.log(err))

Promise.myAll([promise1, promise2, promise3, Promise.reject("bar")]).then(values => {
 console.log(values);
}).catch (err => console.log(err))
