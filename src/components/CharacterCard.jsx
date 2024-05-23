import { Link } from "react-router-dom";

function Character ({ info }) {
  return (
    <article className="characterCard">
      <Link to={ `/detail/${info.id}` }>
        <img src={ info.img } alt={ info.name } className="characterCard_img" />
        <h4>{ info.name }</h4>
        <p>{ info.species }</p>
      </Link>
    </article>
  )
}

export default Character