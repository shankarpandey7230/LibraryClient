// validate
//  At least 6 characters
// 1 uppercase
// 1 lower case
// 1 digit
// -special character !@#$!@$!$!@%@#%$^$^&

export const validator = (password = "", confirmPassword = "") => {
  const error = [];
  password.length < 6 && error.push("Minimum 6 characters required");

  !/[A-Z]/.test(password) &&
    error.push("At least Uppercase letter is required");
  !/[a-z]/.test(password) &&
    error.push("At least LowerCase letter is required");
  !/[0-9]/.test(password) && error.push("At least  number  is required");
  !/[!@#$%^&*{}|]/.test(password) &&
    error.push("At least special character  is required");
  password !== confirmPassword && error.push("Password do not match");
  return error;
};
