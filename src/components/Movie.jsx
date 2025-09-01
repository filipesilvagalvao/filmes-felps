import styles from './Movie.module.css'
import background from '/src/assets/bg-thumderbolds.webp'
import Player from './Player'

const {
movie,
movie__figure,
movie__imgBackground,
movie__description,
movie__title,
movie__list,
movie__item
} = styles

function Movie() {
  return (
    <article className={movie}>
      <figure className={movie__figure}>
        <img src={background} alt="" className={movie__imgBackground}/>
        <figcaption className={movie__description}>
          <h1 className={movie__title}>Thunderbolts*</h1>
          <ul className={movie__list}>
            <li className={movie__item}>7.2</li>
            <li className={movie__item}><i className="fa-solid fa-calendar-days"></i> 2025</li>
            <li className={movie__item}><i className="fa-regular fa-clock"></i> 2h06min</li>
            <li className={movie__item}><i className="fa-solid fa-masks-theater"></i> Ação, Aventura, Ficção, Romance, Terror, Comédia, Suspense</li>
          </ul>
        </figcaption>
      </figure>
      <Player/>
      <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque hic sequi, illo similique ab sunt, repellat eligendi eum, distinctio ex obcaecati incidunt soluta amet provident sit quod quia inventore ipsa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, maiores. Natus, nemo repellendus! Eligendi laudantium totam eveniet quis maiores a adipisci, nemo qui impedit alias explicabo excepturi repellendus earum ab.</p>
    </article>
  )
}

export default Movie