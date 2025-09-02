import styles from "./Slider.module.css";
import thumb1 from "/src/assets/Thunderbolts-2025.webp"
import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";

const {
    slider,
    slider__card,
    slider__figure,
    slider__img,
    slider__description,
    slider__title,
    slider__list,
    slider__item,
    slider__paragraph
} = styles;

function Slider() {
    const global = useContext(GlobalContext)

    if (global.topMovies === null) return null

    const { topMovies,genreMovies } = global

    return (
        <section className={slider}>
            {topMovies.results.map(({backdrop_path,genre_ids,overview,poster_path,title,vote_average},i) => (
                i<9&&
                <article className={slider__card}>
                    <figure className={slider__figure}>
                        <img src={'https://image.tmdb.org/t/p/w1280'+backdrop_path} alt={title} className={slider__img} />
                        <figcaption className={slider__description}>
                            <h3 className={slider__title}>{title}</h3>
                            <ul className={slider__list}>
                                <li className={slider__item}>{vote_average}</li>
                                <li className={slider__item}>55 min</li>
                                {genre_ids.map((genreId)=><li className={slider__item}>{genreMovies[genreId]}</li>)}
                                <li className={slider__item}>14</li>
                            </ul>

                            <p className={slider__paragraph}>{overview}</p>
                            <button className="btn">Assistir Agora <i className="fa-regular fa-circle-play"></i></button>
                        </figcaption>
                    </figure>
                </article>
            ))}
        </section>
    )
}

export default Slider