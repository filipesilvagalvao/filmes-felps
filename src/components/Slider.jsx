import styles from "./Slider.module.css";
import thumb1 from "/src/assets/Thunderbolts-2025.webp"
const {
    slider,
    slider__background,
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
    return (
        <section className={slider}>
            
            <article className={slider__card}>
                <figure className={slider__figure}>
                    <img src={thumb1} alt="capa do filme ou série" className={slider__img} />
                    <figcaption className={slider__description}>
                        <h3 className={slider__title}>Thunderbolts*</h3>
                        <ul className={slider__list}>
                            <li className={slider__item}>8.0</li>
                            <li className={slider__item}>55 min</li>
                            <li className={slider__item}>Ação</li>
                            <li className={slider__item}>Aventura</li>
                            <li className={slider__item}>Ficção</li>
                            <li className={slider__item}>14</li>
                        </ul>

                        <p className={slider__paragraph}>Depois de se verem presos em uma armadilha mortal, uma equipe não convencional de sete anti-heróis deve embarcar em uma missão perigosa que os forçará a confrontar os cantos mais sombrios de seus passados.</p>
                        <button className="btn">Assistir Agora <i className="fa-regular fa-circle-play"></i></button>
                    </figcaption>
                </figure>
            </article>
            
            <article className={slider__card}>
                <figure className={slider__figure}>
                    <img src={thumb1} alt="capa do filme ou série" className={slider__img} />
                    <figcaption className={slider__description}>
                        <h3 className={slider__title}>Thunderbolts*</h3>
                        <ul className={slider__list}>
                            <li className={slider__item}>8.0</li>
                            <li className={slider__item}>55 min</li>
                            <li className={slider__item}>Ação</li>
                            <li className={slider__item}>Aventura</li>
                            <li className={slider__item}>Ficção</li>
                            <li className={slider__item}>14</li>
                        </ul>

                        <p className={slider__paragraph}>Depois de se verem presos em uma armadilha mortal, uma equipe não convencional de sete anti-heróis deve embarcar em uma missão perigosa que os forçará a confrontar os cantos mais sombrios de seus passados.</p>
                        <button className="btn">Assistir Agora <i className="fa-regular fa-circle-play"></i></button>
                    </figcaption>
                </figure>
            </article>

            <article className={slider__card}>
                <figure className={slider__figure}>
                    <img src={thumb1} alt="capa do filme ou série" className={slider__img} />
                    <figcaption className={slider__description}>
                        <h3 className={slider__title}>Thunderbolts*</h3>
                        <ul className={slider__list}>
                            <li className={slider__item}>8.0</li>
                            <li className={slider__item}>55 min</li>
                            <li className={slider__item}>Ação</li>
                            <li className={slider__item}>Aventura</li>
                            <li className={slider__item}>Ficção</li>
                            <li className={slider__item}>14</li>
                        </ul>

                        <p className={slider__paragraph}>Depois de se verem presos em uma armadilha mortal, uma equipe não convencional de sete anti-heróis deve embarcar em uma missão perigosa que os forçará a confrontar os cantos mais sombrios de seus passados.</p>
                        <button className="btn">Assistir Agora <i className="fa-regular fa-circle-play"></i></button>
                    </figcaption>
                </figure>
            </article>
        </section>
    )
}

export default Slider