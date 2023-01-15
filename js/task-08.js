const formEl = document.querySelector('.login-form');
const buttonEl = document.querySelector('button');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    alert('Усі поля форми повинні бути заповненні.');
  } else {
    const dataForm = {
      email,
      password,
    };
    console.log(dataForm);

    event.currentTarget.reset();
  }
}
