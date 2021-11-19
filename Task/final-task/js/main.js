const userName = document.getElementById('name'),
      userlastName = document.getElementById('lastname'),
      userAge = document.getElementById('age'),
      userBtn = document.querySelector('.user__button');

const todoUser = [];      

userBtn.addEventListener('click', () => {
  
  const user = {
    name: userName.value,
    lastName: userlastName.value,
    age: userAge.value,
  }

  todoUser.push(user);

  console.log(todoUser);

})