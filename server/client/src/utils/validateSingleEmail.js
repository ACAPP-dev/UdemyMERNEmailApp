const REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (email) => {
  const invalidEmail = REGEXP.test(email) === false;

  if (invalidEmail) {
    return `Please enter a valid email address!`;
  } else {
    return null;
  }
};
