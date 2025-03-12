const validate = (email, password) => {
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gim.test(email);
  const isPasswordVaild =
    /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(password);

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordVaild) return "Password is not valid";

  return null;
};

export default validate;
