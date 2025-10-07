// async_fetch_example.js

// Define an async function
async function loadUsers() {
  try {
    // Fetch user data from a real API
    let response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Check if the response is successful (status 200–299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert the response to JSON
    let users = await response.json();

    // Display the fetched data
    console.log("✅ Users fetched successfully:\n");
    console.log(users);

  } catch (error) {
    // Handle network or API errors
    console.error("❌ Error fetching users:", error.message);
  }
}

// Call the function
loadUsers();
