import { Link, useParams } from "react-router-dom";

function CharacterDetail ({ getPosition }) {

  const { position } = useParams()
  const detailData = getPosition(position)

  return (
    <article>
      <img src={ detailData.img } alt={ detailData.name } />
      <h2>{ detailData.name }</h2>
      <h3>{ detailData.species }</h3>
      <h4>{ detailData.status === "Alive" ? "👽" : "☠️" }</h4>
      <p>{ detailData.origin }</p>
      <p>Número de episodios: { detailData.episode.length }</p>
      <Link to="/"> Ir a home</Link>
    </article>
  )
}

export default CharacterDetail