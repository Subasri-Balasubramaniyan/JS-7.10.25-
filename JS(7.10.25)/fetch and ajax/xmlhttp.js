// xmlhttp.js
const { XMLHttpRequest } = require('xmlhttprequest');   // 1️⃣ Import XMLHttpRequest

const xhr = new XMLHttpRequest();                       // 2️⃣ Create an XHR object

xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);   // 3️⃣ Setup the request (method, URL, async)

xhr.onload = function() {                               // 4️⃣ When request finishes successfully
  if (xhr.status === 200) {                             // 5️⃣ Check if response status is OK (200)
    console.log("✅ Users:", JSON.parse(xhr.responseText)); // 6️⃣ Convert JSON text → JS object and print
  } else {
    console.error("❌ Error:", xhr.status);              // 7️⃣ Handle HTTP errors
  }
};

xhr.onerror = function() {                              // 8️⃣ Handle network or connection errors
  console.error("❌ Network error");
};

xhr.send();                                              // 9️⃣ Send the request
