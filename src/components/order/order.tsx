import style from '@components/order/order.module.scss'
import MusicIcon from '@components/music-icon/music-icon'

function Order() {
    return (
        <div className={style.order}>
            <div className={style.order__icon}>
                <MusicIcon />
            </div>
            
            <div className={style.order__summary}>
                <h2 className={style.order__plan}>Annual Plan</h2>
                <p className={style.order__price}>$59.99/year</p>
            </div>

            <div className={style.order__action}>
                <a className={style.order__changeLink} href="#">Change</a>
            </div>
        </div>
    )
}

export default Order