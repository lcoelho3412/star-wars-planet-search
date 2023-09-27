/* eslint-disable max-len */
import React, { useContext, useState } from "react";
import StarWarsContext from "../context/StarWarsContext";

function Form() {
  const { setNameFilter, selectedFilters, setSelectedFilters } =
    useContext(StarWarsContext);

  const [selected, setSelected] = useState({
    column: "population",
    condition: "maior que",
    value: "0",
  });

  const saveSelection = (event) => {
    setSelected({ ...selected, [event.target.name]: event.target.value });
  };

  const getAllFilters = [
    "population",
    "orbital_period",
    "diameter",
    "rotation_period",
    "surface_water",
  ];

  const usedFilters = selectedFilters.map(({ column }) => column);

  const availableFilters = getAllFilters.filter(
    (filter) => !usedFilters.includes(filter)
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedFilters([...selectedFilters, selected]);
    setSelected({
      column: availableFilters[0],
      condition: "maior que",
      value: "0",
    });
  };
  const filterRemover = ({ target }) => {
    const { name } = target;
    const newSelectedFilters = selectedFilters.filter(
      (filter) => filter.column !== name
    );
    setSelectedFilters(newSelectedFilters);
  };
  return (
    <div>
      <form className="grid grid-rows-5 grid-flow-col gap-32 px-8 pt-6">
        <label htmlFor="filter">
          <input
            placeholder="Busca"
            className="input input-bordered input-info w-full max-w-xs uppercase"
            onChange={({ target }) => setNameFilter(target.value)}
            type="text"
            id="filter"
            data-testid="name-filter"
          />
        </label>
        <label htmlFor="column-filter">
          <select
            className="select select-info w-full max-w-xs uppercase"
            name="column"
            onChange={saveSelection}
            data-testid="column-filter"
          >
            {availableFilters.map((column) => (
              <option value={column} key={column}>
                {column}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            className="select select-info w-full max-w-xs uppercase"
            name="condition"
            data-testid="comparison-filter"
            onChange={saveSelection}
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            className="select select-info w-full max-w-xs"
            value={selected.value}
            name="value"
            onChange={saveSelection}
            id="value-filter"
            data-testid="value-filter"
            type="number"
          />
        </label>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <button
          className="btn btn-info gap-4"
          type="submit"
          data-testid="button-filter"
          onClick={handleSubmit}
        >
          Filtrar
        </button>

      <button
        className="btn btn-warning gap-4"
        onClick={() => setSelectedFilters([])}
        data-testid="button-remove-filters"
        type="button"
      >
        REMOVER
      </button>

      {selectedFilters.map(({ column, condition, value }) => (
        <div data-testid="filter" key={column}>
          <p>{column}</p>
          <p>{condition}</p>
          <p>{value}</p>
          <button type="button" onClick={filterRemover} name={column}>
            excluir
          </button>
        </div>
      ))}
      </div>
      </form>
    </div>
  );
}

export default Form;
