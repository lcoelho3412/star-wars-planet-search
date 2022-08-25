import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testa componente Form', ()=>{
  it('testa se existem os elementos na tela', ()=>{
render(<App />);
const searchField = screen.getByTestId("name-filter")
const columnField = screen.getByTestId("column-filter")
const comparisonField = screen.getByTestId("comparison-filter")
const valueField = screen.getByTestId("value-filter")
const fielterButton = screen.getByTestId("button-filter")
const removeAllButton = screen.getByTestId("button-remove-filters")


expect(searchField).toBeInTheDocument();
expect(columnField).toBeInTheDocument();
expect(comparisonField).toBeInTheDocument();
expect(valueField).toBeInTheDocument();
expect(fielterButton).toBeInTheDocument();
expect(removeAllButton).toBeInTheDocument();
  })
})