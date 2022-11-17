const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
};

const displayUsers = (data) => {
  const usersData = data.results;
  const usersElement = document.getElementById("usersTable");
  for (const user of usersData) {
    console.log(user);
    const p = document.createElement("p");
    p.innerText = user.email;
    usersElement.appendChild(p);
  }
};

loadUsers();
