import React, { useContext, useEffect } from "react";
import StarWarsContext from "../context/StarWarsContext";

function Table() {
  const { data, dataCopy, setDataCopy, nameFilter, selectedFilters } =
    useContext(StarWarsContext);

  const dataTreatment = () =>
    data.filter((planet) =>
      selectedFilters.every((filter) => {
        if (filter.condition === "igual a") {
          return +planet[filter.column] === +filter.value;
        }
        if (filter.condition === "maior que") {
          return +planet[filter.column] > +filter.value;
        }
        return +planet[filter.column] < +filter.value;
      })
    );
  useEffect(() => {
    setDataCopy(dataTreatment());
  }, [selectedFilters]);

  return (
    <div className="relative overflow-x-auto shadow-md pt-6">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Rotation Period</th>
            <th className="px-6 py-3">Orbital Period</th>
            <th className="px-6 py-3">Diameter</th>
            <th className="px-6 py-3">Climate</th>
            <th className="px-6 py-3">Gravity</th>
            <th className="px-6 py-3">Terrain</th>
            <th className="px-6 py-3">Surface Water</th>
            <th className="px-6 py-3">Population</th>
          </tr>
        </thead>
        <tbody>
          {dataCopy
            .filter(({ name }) =>
              name.toLowerCase().includes(nameFilter.toLowerCase())
            )
            .map((planet) => (
              <tr key={planet.key}>
                <td data-testid="planet-name">{planet.name}</td>
                <td className="px-6 py-4">{planet.rotation_period}</td>
                <td className="px-6 py-4">{planet.orbital_period}</td>
                <td className="px-6 py-4">{planet.diameter}</td>
                <td className="px-6 py-4">{planet.climate}</td>
                <td className="px-6 py-4">{planet.gravity}</td>
                <td className="px-6 py-4">{planet.terrain}</td>
                <td className="px-6 py-4">{planet.surface_water}</td>
                <td className="px-6 py-4">{planet.population}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
