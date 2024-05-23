import CharacterCard from "./CharacterCard";

function CharacterList ({ listCharacters }) {
  const html = listCharacters.map((item) =>
    <CharacterCard key={ item.id } info={ item } />)

  return (
    <div className="cardList">
      { html }
    </div>
  )
}

export default CharacterList