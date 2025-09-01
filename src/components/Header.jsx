import { useRef } from "react";
import styles from "./Header.module.css";
import logo from "/src/assets/logo.png"
const {
    header,
    header__container,
    header__linkLogo,
    header__logo,
    header__nav,
    header__list,
    header__item,
    header__itemLink,
    header__form,
    header__inputSearch,
    header__buttonSearch,
    header__labelHamburguer,
    header__buttonHamburguerSpan,
    menuToggle,
    buttonSearchModal
} = styles;

function Header() {
    const searchInput = useRef(null);

    function openSearchModal() {
        searchInput.current.classList.toggle(styles.header__formOpen);
        searchInput.current.children[0].focus();
    }
    return (
        <header className={header}>
            <div className={header__container}>

                <a href="/" className={header__linkLogo}>
                    <img src={logo} alt="logo do site" className={header__logo} />
                </a>

                <nav className={header__nav}>

                    <input type="checkbox" id="menu-toggle" className={menuToggle} />

                    <label htmlFor="menu-toggle" className={header__labelHamburguer}>
                        <span className={header__buttonHamburguerSpan}></span>
                        <span className={header__buttonHamburguerSpan}></span>
                        <span className={header__buttonHamburguerSpan}></span>
                    </label>

                    <ul className={header__list}>
                        <li className={header__item}>
                            <a href="#" className={header__itemLink}>
                                <i className="fa-regular fa-house"></i>
                                Home
                            </a>
                        </li>
                        <li className={header__item}>
                            <a href="#" className={header__itemLink}>
                                <i className="fa-solid fa-masks-theater"></i>
                                Gênero
                            </a>
                        </li>
                        <li className={header__item}>
                            <a href="#" className={header__itemLink}>
                                <i className="fa-solid fa-film"></i>
                                Filmes
                            </a>
                        </li>
                        <li className={header__item}>
                            <a href="#" className={header__itemLink}>
                                <i className="fa-solid fa-layer-group"></i>
                                Séries
                            </a>
                        </li>
                        <li className={header__item}>
                            <a href="#" className={header__itemLink}>
                                <i className="fa-solid fa-trophy"></i>
                                Top
                            </a>
                        </li>
                    </ul>
                </nav>

                <button type="button" className={buttonSearchModal} onClick={openSearchModal}><i className="fa-solid fa-magnifying-glass"></i></button>

                <form className={header__form} ref={searchInput}>
                    <input type="search" name="" id="" className={header__inputSearch} placeholder="Buscar..." />
                    <button type="submit" className={header__buttonSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
        </header>
    )
}

export default Header