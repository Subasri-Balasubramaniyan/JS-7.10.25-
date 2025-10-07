const myPromise = new Promise((resolve, reject) => {      /* resolve - fulfills the promise */
                                                            /* reject- fails the promise */
  // Do something async here (like fetch data)
  let success = true;

  if (success) {
    resolve("Task completed successfully!");
  } else {
    reject("Something went wrong!");
  }
});
