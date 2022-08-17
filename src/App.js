
import React, { useState } from "react";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./components/theme";

function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <h1>Hello bro!</h1>
        <button onClick={switchTheme}>Switch Theme</button>
        <h2>React is Awesome!</h2>
      </div>
    </ThemeProvider>
  );
}
export default App;

