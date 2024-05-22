function Character ({ info }) {
  return (
    <article className="characterCard">
      <img src={ info.img } alt={ info.name } className="characterCard_img" />
      <h4>{ info.name }</h4>
      <p>{ info.species }</p>
    </article>
  )
}

export default Character