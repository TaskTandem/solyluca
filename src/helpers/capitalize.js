export const capitalize = (word) => {
  if(!word?.charAt) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
