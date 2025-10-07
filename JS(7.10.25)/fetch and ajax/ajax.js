fetch('https://jsonplaceholder.typicode.com/users')  /* Starts request */
  .then(response => response.json())  // Convert response body to JSON
  .then(data => {                      /* Handles data */
    console.log("Users:", data);
  })
  .catch(error => {                                             /* Handles network or parsing errors */
    console.error("Error fetching data:", error);
  });
