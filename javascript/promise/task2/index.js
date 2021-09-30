const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

const serverUrl = 'https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/';

const validateFormHandler = () => {
  if (loginForm.reportValidity()) {
    submitBtn.removeAttribute('disabled');
    errorElem.textContent = '';
  } else {
    submitBtn.setAttribute('disabled', true);
    errorElem.textContent = '';
  }
};
loginForm.addEventListener('input', validateFormHandler);

// algo
// 1. read form get user info +++
// 2. send data to server +++
// 3. handle server response +++

const createdUserHandler = event => {
  event.preventDefault();

  // 1
  // option 1 - BAD
  // const user = {
  //   email: emailInput.value,
  //   name: nameInput.value,
  //   password: passwordInput.value,
  // };

  // option 2 - GOOD
  const userData = Object.fromEntries(new FormData(loginForm));

  fetch(serverUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;' },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(body => {
      loginForm.reset();
      alert(JSON.stringify(body));
    })
    .catch(() => {
      errorText.textContent = 'Failed to create user';
    });
};
loginForm.addEventListener('submit', createdUserHandler);

// Don't use:
// 1. naming of files/func/variables is important ++++
// 2. magical numbers or strings ++++

// 3. nesting of the code, more than 2 ++++
// 4. too much if/else statements ++++
// 5. duplicates of the code ++++
// 5. variable that is used only once ++++
// 6. for/while, foreach and other loops, use arrays methods ++++

// 7. redundant iteration throught arrays or objects - speed ++++
// 8. take attention to the memory usage, don't create new array if it is not needed ++++
// 10. divide your code into logical blocks ++++
// 11. BIG code blocks (inside { } - if, loop or array methods) ++++

// 12. EVERY line of code should be easy to read ++++
// 13. EVERY piece of code must be tested ++++
