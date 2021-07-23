import { useState } from 'react';

function useValidation() {
  const [errorText, setErrorText] = useState(false);
  const [isErrorEmail, setErrorEmail] = useState(false);
  const [isErrorPassword, setErrorPassword] = useState(false);

  const onHandleSubmit = (formData, onLoginUser) => {
    const { userEmail, userPassword } = formData;
    const regExEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    const isInValidEmail = !regExEmail.test(userEmail);
    let isValid = false;

    if ((userEmail === '' && userPassword === '') || (isInValidEmail && userPassword.trim() !== '')) {
      setErrorText('Please enter a valid email address');
      setErrorEmail(true);
      setErrorPassword(false);
    } else if (!isInValidEmail && userPassword.trim() === '') {
      setErrorText('Please enter a valid password');
      setErrorEmail(false);
      setErrorPassword(true);
    } else if (isInValidEmail && userPassword.trim() === '') {
      setErrorText('We can’t recognize this email and password combination. Please try again.');
      setErrorEmail(true);
      setErrorPassword(true);
    } else {
      setErrorText(false);
      isValid = true;
    }

    if (isValid) {
      setErrorPassword(false);
      setErrorEmail(false);
      onLoginUser({
        email: userEmail,
        password: userPassword,
      });
    }

  };

  return [errorText, isErrorEmail, isErrorPassword, onHandleSubmit];
}

export default useValidation;
