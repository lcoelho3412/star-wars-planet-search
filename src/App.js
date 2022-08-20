import React from 'react';
import './App.css';
import Form from './Components/Form';
import Table from './Components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Form />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
