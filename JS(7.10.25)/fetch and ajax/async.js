async function loadUsers() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Error:", error);
  }
}

loadUsers();
