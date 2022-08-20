const requestAPI = async () => {
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(ENDPOINT);
  const { results } = await response.json();
  const planets = results.map(({ residents, ...rest }) => rest);
  console.log(planets);
  return response.ok ? Promise.resolve(planets) : Promise.reject(planets);
};

export default requestAPI;
