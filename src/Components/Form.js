import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const { nameFilter, setNameFilter } = useContext(StarWarsContext);
  console.log(nameFilter);
  return (
    <div>
      <form>
        <label htmlFor="filter">
          Filtrar
          <input
            onChange={ ({ target }) => setNameFilter(target.value) }
            type="text"
            id="filter"
            data-testid="name-filter"
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
