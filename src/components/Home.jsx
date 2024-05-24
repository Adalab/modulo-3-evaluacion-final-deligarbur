import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import Footer from "./Footer";
import SearchNotFound from "./SearchNotFound";

function Home ({ searchCharacter, search, setSearch, listCharacters, noCharacter, setFilter, filter, setSelectedSpecies, selectedSpecies }) {
  return (
    <>
      <Header />
      <Filters
        searchCharacter={ searchCharacter }
        search={ search }
        setSearch={ setSearch }
        filter={ filter }
        setFilter={ setFilter }
        selectedSpecies={ selectedSpecies }
        setSelectedSpecies={ setSelectedSpecies }
      />
      <SearchNotFound noCharacter={ noCharacter } />
      <CharacterList listCharacters={ listCharacters } />
      <Footer />
    </>
  )
}

export default Home