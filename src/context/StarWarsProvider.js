import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestAPI from '../services/api';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [availableFilters, setAvailableFilters] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const planetAPI = await requestAPI();
      setData(planetAPI);
      setDataCopy(planetAPI);
    }
    fetchAPI();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        setData,
        nameFilter,
        setNameFilter,
        selectedFilters,
        setSelectedFilters,
        dataCopy,
        setDataCopy,
        availableFilters,
        setAvailableFilters,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarWarsProvider;
