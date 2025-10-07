const fast = new Promise((resolve) => setTimeout(() => resolve("⚡ Fast promise resolved"), 1000));
const slow = new Promise((resolve) => setTimeout(() => resolve("🐢 Slow promise resolved"), 3000));

Promise.race([fast, slow])
  .then((result) => console.log("Winner:", result))
  .catch((error) => console.error("❌ Error:", error));
