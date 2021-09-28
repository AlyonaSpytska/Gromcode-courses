export const parseUser = text => {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
};
