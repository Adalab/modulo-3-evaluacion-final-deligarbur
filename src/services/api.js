const getDataFromApi = () => {

  return fetch('https://rickandmortyapi.com/api/character/?search=20')
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

      //Ordenar por nombre alfabéticamente
      const sortByName = newArray.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });

      return sortByName;
    })
}

export default getDataFromApi;