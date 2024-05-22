function FilterByName ({ searchCharacter, search }) {

  const handleSearch = (ev) => {
    const valueSearch = ev.target.value;
    searchCharacter(valueSearch);
  }

  return (
    <form>
      <label htmlFor="search"></label>
      <input type="text" name="search" id="search" onChange={ handleSearch } value={ search } />
    </form>
  )
}

export default FilterByName