//middle ware to save the state in local storage

export const saveState = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("state", JSON.stringify(store.getState()));
  console.log("state saved");
  return result;
};

