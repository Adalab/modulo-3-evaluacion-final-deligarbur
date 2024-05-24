import title from "../images/RickandMorty_Title.gif";

function Header () {
  return (
    <header className="header">
      <img src={ title } alt="Adalab" className="header_title" />
    </header >
  )
}

export default Header