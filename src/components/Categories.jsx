import styles from './Categories.module.css'
const {
    category,
    category__nav,
    category__label,
    category__input
} = styles

function Categories() {
    return (
        <div className={category}>
            <nav className={category__nav}>
                <label htmlFor="filmes" className={category__label}>
                    <i className="fa-solid fa-film"></i>
                    <input type="radio" id="filmes" name="category" className={category__input} />
                    Filmes
                </label>
                <label htmlFor="series" className={category__label}>
                    <i className="fa-solid fa-layer-group"></i>
                    <input type="radio" id="series" name="category" className={category__input} />
                    Séries
                </label>
                <label htmlFor="animes" className={category__label}>
                    <i className="fa-solid fa-torii-gate"></i>
                    <input type="radio" id="animes" name="category" className={category__input} />
                    Animes
                </label>
                <label htmlFor="desenhos" className={category__label}>
                    <i className="fa-solid fa-child-reaching"></i>
                    <input type="radio" id="desenhos" name="category" className={category__input} />
                    Desenhos
                </label>
            </nav>
        </div>
    )
}

export default Categories