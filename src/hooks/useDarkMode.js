import useLocalStorage from "./useLocalStorage.js";

export const useDarkMode = (initalValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("setDark", initalValue);
  
    return [darkMode, setDarkMode];
  };
  
  export default useDarkMode;