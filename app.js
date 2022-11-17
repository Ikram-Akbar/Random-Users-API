const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
};

const displayUsers = (data) => {
  const usersData = data.results;
  const usersElement = document.getElementById("usersTable");
  for (const user of usersData) {
    console.log(user.gender);
    const userInfo = document.createElement("Div");
    userInfo.innerHTML = `
      
<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">${user.gender}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      `
        ;
  }

  //   console.log(usersData);
};

loadUsers();
