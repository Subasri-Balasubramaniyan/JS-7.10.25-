async function addUser() {
    const newuser={
        name:"Subasri",
        email:"subasri@gmail.com",
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/users',{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify(newuser)
    });
    const data=await response.json();
    console.log("User Added:",data)
}
addUser();