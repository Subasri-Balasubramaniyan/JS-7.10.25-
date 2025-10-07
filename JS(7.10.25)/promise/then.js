// Create a Promise
let myPromise = new Promise((resolve, reject) => {
  let success = true; // Change this to false to see reject in action

  setTimeout(() => {
    if (success) {
      resolve("✅ Data fetched successfully!");
    } else {
      reject("❌ Failed to fetch data.");
    }
  }, 2000); // Simulate a 2-second delay
});

// Using .then(), .catch(), and .finally()
myPromise
  .then((message) => {
    console.log("THEN:", message);
    return "Processing the data..."; // You can return values for chaining
  })
  .then((nextMessage) => {
    console.log("THEN CHAIN:", nextMessage);
  })
  .catch((error) => {
    console.error("CATCH:", error);
  })
  .finally(() => {
    console.log("FINALLY: Promise has finished executing.");
  });

