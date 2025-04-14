export const addToLocalStorage = (key, value) => {
    try {
      const normalizeState = JSON.stringify(value);
      window.localStorage.setItem(key, normalizeState);
    } catch (error) {
      console.log(error);
    }
  };
  export const getFromLocalStorage = (key) => {
    try {
      const valueFromLocalStorage = window.localStorage.getItem(key);
      if (valueFromLocalStorage !== null) {
        return JSON.parse(valueFromLocalStorage);
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };