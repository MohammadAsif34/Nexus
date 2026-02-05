export const isValidSearch = (value) => {
  // allow only letters and numbers
  const regex = /^[a-zA-Z0-9.]{4,}$/;

  return regex.test(value);
};
