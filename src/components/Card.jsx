import styles from "./Card.module.css";
import capa from '../assets/capa-filme.webp'

const {
    card,
    card__figure,
    card__rate,
    card__img,
    card__description,
    card__list,
    card__item
} = styles;

function Card() {
    return (
        <article className={card}>
            <figure className={card__figure}>
                <span className={card__rate}>7.5</span>
                <img className={card__img} src={capa} alt="nome do filme" />
                <figcaption className={card__description}>
                    <ul className={card__list}>
                        <li className={card__item}>2025</li>
                        <li className={card__item}>55 min</li>
                    </ul>
                </figcaption>
            </figure>
            <i className="fa-regular fa-circle-play"></i>
        </article>
    )
}

export default Card