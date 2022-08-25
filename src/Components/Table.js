import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data,
    dataCopy,
    setDataCopy,
    nameFilter,
    selectedFilters } = useContext(StarWarsContext);

  const dataTreatment = () => data.filter((planet) => (
    selectedFilters.every((filter) => {
      if (filter.condition === 'igual a') {
        return +planet[filter.column] === +filter.value;
      }
      if (filter.condition === 'maior que') {
        return +planet[filter.column] > +filter.value;
      }
      return +planet[filter.column] < +filter.value;
    })
  ));
  useEffect(() => {
    setDataCopy(
      dataTreatment(),
    );
  }, [selectedFilters]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { dataCopy
            .filter(({ name }) => name
              .toLowerCase()
              .includes(nameFilter
                .toLowerCase()))
            .map((planet) => (
              <tr key={ planet.key }>
                <td data-testid="planet-name">{ planet.name }</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}

        </tbody>
      </table>
    </div>

  );
}
export default Table;
