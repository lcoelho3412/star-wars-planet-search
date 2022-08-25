import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const {
    setNameFilter,
    selectedFilters,
    setSelectedFilters,
    /* availableFilters,
    setAvailableFilters, */
  } = useContext(StarWarsContext);

  const [selected, setSelected] = useState({
    // estado generico para inputs
    column: 'population',
    condition: 'maior que',
    value: '0',
  });

  const saveSelection = (event) => {
    setSelected({ ...selected,
      [event.target.name]: event.target.value,
    });
  };

  /*  const columnOptionRemoval = (option) => !selectedFilters
    .find((filter) => option === filter.column); */

  const filterColumns = () => {
    const columns = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    return columns;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedFilters([
      ...selectedFilters, selected,
    ]);
    setSelected({
      column: '',
      condition: 'maior que',
      value: '0',
    });
  };
  return (
    <div>
      <form>
        <label htmlFor="filter">
          Busca
          <input
            onChange={ ({ target }) => setNameFilter(target.value) }
            type="text"
            id="filter"
            data-testid="name-filter"
          />
        </label>
        <label htmlFor="column-filter">
          <select
            name="column"
            onChange={ saveSelection }
            data-testid="column-filter"
          >
            {
              filterColumns().map((column) => (
                <option value={ column } key={ column }>{column}</option>
              ))
            }

          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            name="condition"
            data-testid="comparison-filter"
            onChange={ saveSelection }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            value={ selected.value }
            name="value"
            onChange={ saveSelection }
            id="value-filter"
            data-testid="value-filter"
            type="number"
          />
        </label>
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ handleSubmit }
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default Form;
