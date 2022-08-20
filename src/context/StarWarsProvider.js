import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestAPI from '../services/api';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const planetAPI = await requestAPI();
      setData(planetAPI);
    }
    fetchAPI();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        setData,
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
