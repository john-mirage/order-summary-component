import style from './card.module.scss'
import illustration from '../../assets/images/illustration-hero.svg'

function Card() {
    return (
        <article className={style.card}>
            <img className={style.card__image} src={illustration} />
            <h1 className={style.card__title}>Order Summary</h1>
            <p className={style.card__description}>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        </article>
    )
}

export default Card