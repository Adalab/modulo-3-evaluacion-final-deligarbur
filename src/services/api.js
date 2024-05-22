const getDataFromApi = () => {
  // Creo un objeto donde yo guardo las cosas que me interesan de lo que me devuelve la API
  return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then((response) => response.json())
    .then((data) => {
      const newArray = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          img: character.image,
          episode: character.episode,
        };
      });

      return newArray;
    })
}

export default getDataFromApi;