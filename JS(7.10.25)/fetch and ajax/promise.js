let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data loaded!");
  } else {
    reject("Error occurred!");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
