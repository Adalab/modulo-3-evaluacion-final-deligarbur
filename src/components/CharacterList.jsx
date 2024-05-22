import Character from "./Character";

function CharacterList ({ listCharacters }) {
  const html = listCharacters.map((item) =>
    <Character key={ item.id } info={ item } />)

  return (
    <div className="cardList">
      { html }
    </div>
  )
}

export default CharacterList