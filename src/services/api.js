const requestAPI = async () => {
  const ENDPOINT = 'https://swapi.dev/api/planets';
  const response = await fetch(ENDPOINT);
  const { results } = await response.json();
  const planets = results.map(({ residents, ...rest }) => rest);
  /* return planets; */
  return response.ok ? Promise.resolve(planets) : Promise.reject(planets);
};

export default requestAPI;
