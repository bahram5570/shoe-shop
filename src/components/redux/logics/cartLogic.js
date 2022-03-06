export const cartLogic = (action) => {
  const data = JSON.parse(localStorage.getItem('cart'));
  const index = data.findIndex(
    (x) =>
      x.id === action.id &&
      x.color.name === action.color.name &&
      x.size === action.size
  );

  data.splice(index, 1);

  return { data, index };
};
