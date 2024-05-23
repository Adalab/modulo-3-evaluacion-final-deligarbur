import { Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function CharacterDetail ({ getPosition }) {

  //cojo el id del path de la url
  const { id } = useParams();
  //lo convierto a número porque es un string lo que me trae el useParams
  const idNumber = parseInt(id);
  const detailData = getPosition(idNumber);

  const renderDetail = detailData ?
    <article>
      <img src={ detailData.img } alt={ detailData.name } />
      <h2>{ detailData.name }</h2>
      <h3>{ detailData.species }</h3>
      <h4>{ detailData.status === "Alive" ? "👽" : "☠️" }</h4>
      <p>{ detailData.origin }</p>
      <p>Número de episodios: { detailData.episode.length }</p>
    </article > : <PageNotFound />;

  return (
    <section>
      <Link to="/"> Ir a home</Link>
      { renderDetail }
    </section>

  )
}

export default CharacterDetail