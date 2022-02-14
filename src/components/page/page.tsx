import style from './page.module.scss'
import Card from '../card/card'

function Page() {
    return (
      <main className={style.page}>
          <div className={style.page__card}>
              <Card />
          </div>
      </main>
    )
}

export default Page
