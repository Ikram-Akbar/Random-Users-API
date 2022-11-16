const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
};

const displayUsers = (data) => {
  console.log(data);
};

loadUsers();
