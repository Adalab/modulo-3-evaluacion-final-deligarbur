import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import Footer from "./Footer";
import SearchNotFound from "./SearchNotFound";

function Home ({ searchCharacter, search, listCharacters, noCharacter }) {
  return (
    <>
      <Header />
      <Filters searchCharacter={ searchCharacter } search={ search } />
      <SearchNotFound noCharacter={ noCharacter } />
      <CharacterList listCharacters={ listCharacters } />
      <Footer />
    </>
  )
}

export default Home