import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { Text } from "./components";

const Em = ({ children }: { children: React.ReactNode }) => (
  <em style={{ background: "yellow", color: "black" }}>{children}</em>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Text as="div">Hello Text world</Text>

        <Text as="h1">
          Edit <code>src/App.tsx</code> and save to reload.
        </Text>

        {/* Example: passing a specific component prop */}
        <Text color="violet">Hello world</Text>

        {/* Example: the 'as' prop can also take in a custom component*/}
        <Text as={Em}>This is important</Text>

        <Text
          as="a"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Text>
      </header>
    </div>
  );
}

export default App;
