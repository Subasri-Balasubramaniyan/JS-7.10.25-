const promise1 = new Promise((resolve) => setTimeout(() => resolve("✅ Task 1 done"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("✅ Task 2 done"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("✅ Task 3 done"), 1500));

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All completed:", results);
  })
  .catch((error) => {
    console.error("❌ One failed:", error);
  });
