🧠 Introduction

In JavaScript, AJAX, Fetch API, and Promises are used to handle asynchronous operations — tasks like fetching data from a server without blocking the rest of the program.

⚙️ 1. AJAX (Asynchronous JavaScript and XML)
💡 What is AJAX?

AJAX allows web pages to communicate with servers asynchronously — meaning you can fetch or send data without reloading the entire page.

Originally, AJAX used the XMLHttpRequest (XHR) object.

✅ Example: Using XMLHttpRequest
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("✅ Data fetched successfully!");
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error("❌ Error fetching data");
  }
};

xhr.onerror = function () {
  console.error("❌ Request failed");
};

xhr.send();

🧠 Explanation

open(method, URL, async) → Sets up the request.

onload → Runs when response is ready.

send() → Sends the request.

responseText → Holds the returned data (usually JSON).

🌍 2. Fetch API
💡 What is Fetch API?

The Fetch API is a modern way to make AJAX requests using Promises, making the code cleaner and easier to read.

✅ Example: Using fetch()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) throw new Error("Network error");
    return response.json();
  })
  .then((data) => {
    console.log("✅ Users fetched successfully:", data);
  })
  .catch((error) => {
    console.error("❌ Error:", error);
  });

🧠 Explanation

fetch() returns a Promise.

.then() is used to handle the successful response.

.catch() handles errors.

You can also use async/await for cleaner code.

⏳ 3. Async / Await (Simplified Fetch)
✅ Example: Using Async & Await
async function loadUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    console.log("✅ Users:", users);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

loadUsers();

🧠 Explanation

async → declares an asynchronous function.

await → pauses execution until the Promise is resolved.

Easier and cleaner than chaining .then() calls.

🔗 4. Promises
💡 What is a Promise?

A Promise represents a value that will be available in the future (resolved or rejected).

✅ Example: Basic Promise
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) resolve("✅ Task completed!");
    else reject("❌ Task failed!");
  }, 2000);
});

myPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err))
  .finally(() => console.log("🎯 Promise finished!"));

🧠 States of a Promise
State	Description
Pending	Still running
Resolved (Fulfilled)	Completed successfully
Rejected	Failed with an error
🔄 5. Promise Chaining
✅ Example
function step1() {
  return Promise.resolve("Step 1 done");
}
function step2() {
  return Promise.resolve("Step 2 done");
}
function step3() {
  return Promise.resolve("Step 3 done");
}

step1()
  .then((msg) => {
    console.log(msg);
    return step2();
  })
  .then((msg) => {
    console.log(msg);
    return step3();
  })
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

🤝 6. Promise.all()

Runs multiple promises in parallel and waits until all of them finish.

✅ Example
const p1 = Promise.resolve("Task 1 done");
const p2 = Promise.resolve("Task 2 done");
const p3 = Promise.resolve("Task 3 done");

Promise.all([p1, p2, p3])
  .then((results) => console.log("✅ All done:", results))
  .catch((error) => console.error("❌ Error:", error));

🏁 7. Promise.race()

Returns the result of the first promise that completes (resolved or rejected).

✅ Example
const fast = new Promise((resolve) => setTimeout(() => resolve("Fast one!"), 1000));
const slow = new Promise((resolve) => setTimeout(() => resolve("Slow one!"), 3000));

Promise.race([fast, slow])
  .then((result) => console.log("⚡ Winner:", result))
  .catch((err) => console.error("❌ Error:", err));

🚀 8. Mini Project Example

You can try this file:
👉 project.js

It demonstrates:

Fetch API

Promise chaining

Promise.all()

Promise.race()
