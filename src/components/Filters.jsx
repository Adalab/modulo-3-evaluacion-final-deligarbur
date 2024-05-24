function Filters ({ searchCharacter, search, setFilter, filter, setSelectedSpecies, selectedSpecies }) {

  const handleSearch = (ev) => {
    const valueSearch = ev.target.value;
    searchCharacter(valueSearch);
  }

  const handleKeyUp = (ev) => {
    if (ev.key === "Enter" && ev.target.value === "") {
      alert("Enter your character's name.")
    }
  }

  const handleSelect = (ev) => {
    setFilter(ev.target.value)
  }

  const handleSpecies = (ev) => {
    const valueCheckbox = ev.target.value;
    setSelectedSpecies(valueCheckbox);
  }

  return (
    <form onSubmit={ (ev) => { ev.preventDefault() } }>
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={ handleSearch }
        onKeyUp={ handleKeyUp }
        value={ search }
      />
      <select name="status" id="status" onChange={ handleSelect } value={ filter } >
        <option value="All">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <fieldset>
        <input
          type="radio"
          name="species"
          value="Human"
          onChange={ handleSpecies }
          checked={ selectedSpecies === "Human" }
        /> Human
        <input
          type="radio"
          name="species"
          value="Alien"
          onChange={ handleSpecies }
          checked={ selectedSpecies === "Alien" }
        /> Alien
      </fieldset>
    </form>
  )
}

export default Filters