import { useParams } from "react-router-dom";

function CharacterDetail ({ getPosition }) {

  const { position } = useParams()
  const detailData = getPosition(position)

  return (
    <article>
      <img src={ detailData.img } alt={ detailData.name } />
      <h2>{ detailData.name }</h2>
      <h3>{ detailData.species }</h3>
      <h4>{ detailData.status }</h4>
      <p>{ detailData.origin }</p>
      <ul>Lista de episodios
        { detailData.episode.map((item, i) => {
          return <li key={ i }>{ item }</li>
        }) }
      </ul>
    </article>
  )
}

export default CharacterDetail