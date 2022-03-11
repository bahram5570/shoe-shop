export const pricing = (items) => {
  let totalItems = 0;
  let originalPrice = 0;
  let discount = 0;
  let salePrice = 0;

  items.forEach((e) => {
    totalItems = totalItems + e.qt;
    originalPrice = originalPrice + e.qt * e.price;
    discount = discount + (e.qt * e.price * e.off) / 100;
    salePrice = salePrice + e.qt * e.price - (e.qt * e.price * e.off) / 100;
  });

  return { totalItems, originalPrice, discount, salePrice };
};
