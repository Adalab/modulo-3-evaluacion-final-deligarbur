const getDataFromApi = () => {
  // Creo un objeto donde yo guardo las cosas que me interesan de lo que me devuelve la API
  return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then((response) => response.json())
    .then((data) => {
      const newArray = data.results.map((user) => {
        return {
          id: user.id,
          name: user.name,
          status: user.status,
          species: user.species,
          origin: user.origin.name,
          img: user.image,
          episode: user.episode,
        };
      });

      return newArray;
    })
}

export default getDataFromApi;