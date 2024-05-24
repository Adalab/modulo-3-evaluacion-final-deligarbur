import logo from "../images/logo-adalab.png";
import portal from "../images/footer-portal.png";



function Footer () {
  return (
    <footer className="footer">
      <p className="footer_license">Adalab ©2024</p>
      <img className="footer_portal" src={ portal } alt="Rick and Morty portal" />
      <img className="footer_logo" src={ logo } alt="Logo Adalab" />
    </footer>
  )
}

export default Footer