import styles from './Player.module.css'

const { player, player__btnContainer, player__btn, player__screen, player__iframe } = styles

function Player() {
    return (
        <section className={player}>
            <div className={player__btnContainer}>
                <button className={`${player__btn} btn`}>Opção 1 <i className="fa-regular fa-circle-play"></i></button>
                <button className={`${player__btn} btn`}>Opção 2 <i className="fa-regular fa-circle-play"></i></button>
                <button className={`${player__btn} btn`}>Opção 3 <i className="fa-regular fa-circle-play"></i></button>
                <button className={`${player__btn} btn`}>Opção 4 <i className="fa-regular fa-circle-play"></i></button>
                <button className={`${player__btn} btn`}>Opção 5 <i className="fa-regular fa-circle-play"></i></button>
                <button className={`${player__btn} btn`}>Donwload <i className="fa-solid fa-download"></i></button>
            </div>
            <div className={player__screen}>
                <iframe src="https://megaembed.com/embed/movie?tmdb=986056" allow='encrypted-media' allowFullScreen frameBorder="0" className={player__iframe}></iframe>
            </div>
        </section>
    )
}

export default Player