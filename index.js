
// Destructuring window.location object. Unpacking hash property to new variable
const { hash: encryptedHash } = window.location;

const message = atob(encryptedHash.replace('#', ''));

if (message) {
  document.querySelector("#message-form").classList.add('hide');
  document.querySelector("#message-show").classList.remove('hide');

  document.querySelector('#message-header').innerHTML = message;
}

// Form action on submit
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  // Switch forms
  document.querySelector("#message-form").classList.add('hide');
  document.querySelector("#link-form").classList.remove('hide');

  const messageInput = document.querySelector('#message-input');

  // Base64 encoding
  const encrypted = btoa(messageInput.value);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;

  // Auto select link input value
  linkInput.select();
});