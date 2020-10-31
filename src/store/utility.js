export const updateState = (oldObject, updatedValue) => {
  return {
    ...oldObject,
    ...updatedValue,
  };
}