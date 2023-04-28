const form = document.querySelector('.feedback-form');

const emailInput = form.querySelector('input[name="email"]');

const messageInput = form.querySelector('textarea[name="message"]');

const feedbackFormStateKey = 'feedback-form-state';

const throttle = require('lodash.throttle');

if (localStorage.getItem(feedbackFormStateKey)) {
  const { email, message } = JSON.parse(
    localStorage.getItem(feedbackFormStateKey)
  );
  emailInput.value = email;
  messageInput.value = message;
} else {
  emailInput.value = '';
  messageInput.value = '';
}

form.addEventListener(
  'input',
  throttle(() => {
    const formState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(feedbackFormStateKey, JSON.stringify(formState));
  }, 500)
);

const storedFeedbackFormState = JSON.parse(
  localStorage.getItem(feedbackFormStateKey)
);
if (storedFeedbackFormState) {
  emailInput.value = storedFeedbackFormState.email;
  messageInput.value = storedFeedbackFormState.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.removeItem(feedbackFormStateKey);
  emailInput.value = '';
  messageInput.value = '';
  console.log(feedbackFormState);
});
