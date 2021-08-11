import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import AppBar from "./components/AppBar";
import { theme } from "./Theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/rtls_client">
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={AppBar} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
