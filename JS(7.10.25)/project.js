// 🌟 Step 1: Fetch users
function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      console.log("✅ Users fetched successfully!");
      console.log(users.slice(0, 3)); // show first 3 users
      return users;
    });
}

// 🌟 Step 2: Fetch posts
function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      console.log("✅ Posts fetched successfully!");
      console.log(posts.slice(0, 3)); // show first 3 posts
      return posts;
    });
}

// 🌟 Step 3: Chaining example
function loadData() {
  console.log("📡 Loading data...");
  fetchUsers()
    .then((users) => {
      console.log("➡️ Now fetching posts for user:", users[0].name);
      return fetchPosts(); // chain next promise
    })
    .then((posts) => {
      console.log("📦 Displaying first post title:", posts[0].title);
    })
    .catch((error) => {
      console.error("❌ Error loading data:", error);
    })
    .finally(() => {
      console.log("🎯 Data fetching complete!");
    });
}

// 🌟 Step 4: Promise.all() – fetch users & posts simultaneously
function loadAllAtOnce() {
  console.log("\n🚀 Loading users and posts together...");
  Promise.all([fetchUsers(), fetchPosts()])
    .then(([users, posts]) => {
      console.log("✅ Both users and posts loaded!");
      console.log("Users:", users.length, "Posts:", posts.length);
    })
    .catch((err) => console.error("❌ Error in Promise.all:", err));
}

// 🌟 Step 5: Promise.race() – whichever finishes first
function loadFastest() {
  console.log("\n🏁 Checking which API responds first...");
  Promise.race([fetchUsers(), fetchPosts()])
    .then((result) => {
      console.log("⚡ Fastest response received:", Array.isArray(result) ? result.length + " items" : result);
    })
    .catch((err) => console.error("❌ Error in Promise.race:", err));
}

// Run all
loadData();       // chaining example
setTimeout(loadAllAtOnce, 4000); // wait a bit before next
setTimeout(loadFastest, 7000);   // wait a bit before next
