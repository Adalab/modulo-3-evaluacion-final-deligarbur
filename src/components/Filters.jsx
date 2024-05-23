function Filters ({ searchCharacter, search, setFilter, filter }) {

  const handleSearch = (ev) => {
    const valueSearch = ev.target.value;
    searchCharacter(valueSearch);
  }

  const handleKeyUp = (ev) => {
    if (ev.key === "Enter" && ev.target.value === "") {
      alert("Introduce el nombre de un personaje")
    }
  }

  const handleSelect = (ev) => {
    console.log(ev.target.value)
    setFilter(ev.target.value)
  }

  return (
    <form onSubmit={ (ev) => { ev.preventDefault() } }>
      <label htmlFor="search"></label>
      <input type="text" name="search" id="search" onChange={ handleSearch } onKeyUp={ handleKeyUp } value={ search } />
      <select name="status" id="status" onChange={ handleSelect } value={ filter } >
        <option value="All">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <fieldset>
        <input type="checkbox" name="human" id="human" /> Human
        <input type="checkbox" name="alien" id="alien" /> Alien
      </fieldset>
    </form>
  )
}

export default Filters