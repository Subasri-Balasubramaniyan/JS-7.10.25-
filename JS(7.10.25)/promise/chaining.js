// Simulating async steps using promises
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 completed"), 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 2 completed"), 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 3 completed"), 1000);
  });
}

// Chaining
step1()
  .then((msg1) => {
    console.log(msg1);
    return step2(); // next promise
  })
  .then((msg2) => {
    console.log(msg2);
    return step3(); // next promise
  })
  .then((msg3) => {
    console.log(msg3);
    console.log("✅ All steps completed!");
  })
  .catch((error) => console.error("❌ Error:", error));
