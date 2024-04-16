// task 1
const URL = "https://jsonplaceholder.typicode.com/users"

fetch(URL)
.then(responseofRequest => responseofRequest.json())
.then(users => {
    const userList = document.getElementById('userList');
    users.forEach(user => {
      const userTitle = document.createElement('userTitle');
      userTitle.innerText = `
        ${user.name}
        ${user.address.city}, ${user.address.street}
      `;
      userList.appendChild(userTitle);
    });
  });




