import Header from './Header'
import FilterByName from './FilterByName';
import CharacterList from './CharacterList';
import Footer from './Footer';

function Home ({ searchCharacter, search, listCharacters }) {
  return (
    <>
      <Header />
      <FilterByName searchCharacter={ searchCharacter } search={ search } />
      <CharacterList listCharacters={ listCharacters } />
      <Footer />
    </>
  )
}

export default Home