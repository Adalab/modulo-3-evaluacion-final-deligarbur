function Filters ({ searchCharacter, search, setSearch, setFilter, filter, setSelectedSpecies, selectedSpecies }) {

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
    const value = ev.target.value;
    setSelectedSpecies(value);
  }

  const resetFilters = () => {
    setSelectedSpecies("");
    setFilter("All");
    setSearch("");
  };

  return (
    <form className="form" onSubmit={ (ev) => { ev.preventDefault() } }>
      <label className="search" htmlFor="search">
        <input
          className="search_input"
          type="text"
          name="search"
          id="search"
          onChange={ handleSearch }
          onKeyUp={ handleKeyUp }
          value={ search }
        />
        <button className="search_input-reset" onClick={ resetFilters }>Reset</button>
      </label>

      <fieldset className="filters">
        <select className="filters_status" name="status" id="status" onChange={ handleSelect } value={ filter } >
          <option value="All">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <div className="filters_species">
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
        </div>
      </fieldset>

    </form>
  )
}

export default Filters