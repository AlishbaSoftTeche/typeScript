let current_users = ['john', 'mary', 'alex', 'sarah', 'emma'];
let new_users = ['john', 'peter', 'sarah', 'lucas', 'megan'];

for (let i = 0; i < new_users.length; i++) {
  let usernameExists = false;

  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      usernameExists = true;
      break;
    }
  }

  if (usernameExists) {
    console.log(`Sorry, the username '${new_users[i]}' is already taken. Please choose a different username.`);
  } else {
    console.log(`Congratulations! The username '${new_users[i]}' is available.`);
  }
}