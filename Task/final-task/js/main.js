const userName = document.getElementById('name'),
      userlastName = document.getElementById('lastname'),
      userAge = document.getElementById('age'),
      userBtn = document.querySelector('.user__button'),
      input = document.querySelector('.user__input');
const todoUser = [];



function disabledBtn() {
  userBtn.disabled = true;
}

function enableBtn() {
  userBtn.disabled = false;
}
      

userBtn.addEventListener('click', () => {

  const user = {
    name: userName.value,
    lastName: userlastName.value,
    age: userAge.value,
  }
})




