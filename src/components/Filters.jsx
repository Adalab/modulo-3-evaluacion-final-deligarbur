function Filters ({ searchCharacter, search }) {

  const handleSearch = (ev) => {
    const valueSearch = ev.target.value;
    searchCharacter(valueSearch);
  }

  const handleKeyUp = (ev) => {
    if (ev.key === "Enter" && ev.target.value === "") {
      alert("Introduce el nombre de un personaje")
    }
  }

  return (
    <form onSubmit={ (ev) => { ev.preventDefault() } }>
      <label htmlFor="search"></label>
      <input type="text" name="search" id="search" onChange={ handleSearch } onKeyUp={ handleKeyUp } value={ search } />

    </form>
  )
}

export default Filters