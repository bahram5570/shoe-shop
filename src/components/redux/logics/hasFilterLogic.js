export const hasFilterLogic = (state, currentInputs) => {
  if (state.length === currentInputs.length) {
    return false;
  } else {
    return true;
  }
};
