import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const FORM_LOCAL_STORAGE = 'feedback-form-state';

let formData = {};

saveDataInput();

formRef.addEventListener('input', throttle(onFormInput, 500));

formRef.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(FORM_LOCAL_STORAGE, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  e.target.reset();
  console.log(formData);
  localStorage.removeItem(FORM_LOCAL_STORAGE);
}

function saveDataInput() {
  const savedData = JSON.parse(localStorage.getItem(FORM_LOCAL_STORAGE));

  if (!savedData) {
    return;
  }

  formData = savedData;
  formRef.email.value = formData.email || '';
  formRef.message.value = formData.message || '';
}
