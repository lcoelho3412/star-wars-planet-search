import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData';

describe('Testa componente Form', ()=>{
   it('testa se existem os elementos na tela', async ()=>{
    global.fetch = () => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(testData),
      }); 
render(<App />);
await waitFor (() => expect(screen.getAllByRole('row')).toHaveLength(11)); 
const searchField = screen.getByTestId("name-filter")
userEvent.type(searchField, 'oo')
const tatooine = screen.getByText("Tatooine")
expect(tatooine).toBeInTheDocument()
userEvent.clear(searchField)

const columnField = screen.getByTestId("column-filter")
const comparisonField = screen.getByTestId("comparison-filter")
const valueField = screen.getByTestId("value-filter")
const fielterButton = screen.getByTestId("button-filter")

userEvent.selectOptions(columnField, 'diameter')
userEvent.selectOptions(comparisonField, 'maior que')
userEvent.type(valueField, '9000')
userEvent.click(fielterButton)

userEvent.selectOptions(columnField, 'population')
userEvent.selectOptions(comparisonField, 'menor que')
userEvent.type(valueField, '1000000')
userEvent.click(fielterButton)

userEvent.selectOptions(columnField, 'rotation_period')
userEvent.selectOptions(comparisonField, 'igual a')
userEvent.type(valueField, '23')
userEvent.click(fielterButton)

const row = screen.getAllByRole('row')

expect(row).toHaveLength(2)



  })
})