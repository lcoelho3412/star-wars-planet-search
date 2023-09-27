import React from "react";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";
import StarWarsProvider from "./context/StarWarsProvider";

function App() {
  return (
    <StarWarsProvider>
      <div className="grid grid-rows-1 grid-flow-col ">
        <Form />
        <div className="divider lg:divider-horizontal"></div> 
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
