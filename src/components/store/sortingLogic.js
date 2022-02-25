export const sortingLogic = (mode, data) => {
  let sorted;
  const currentData = [...data];

  switch (mode) {
    case 'Relevace':
      sorted = currentData.sort((a, b) => (a.brand > b.brand ? 1 : -1));
      return sorted;

    case 'High':
      sorted = currentData.sort((a, b) => (a.price < b.price ? 1 : -1));
      return sorted;

    case 'Low':
      sorted = currentData.sort((a, b) => (a.price > b.price ? 1 : -1));
      return sorted;

    case 'Rating':
      sorted = currentData.sort((a, b) => (a.likes < b.likes ? 1 : -1));
      return sorted;

    case 'OFF':
      sorted = currentData.sort((a, b) => (a.off < b.off ? 1 : -1));
      return sorted;

    default:
      return data;
  }
};
