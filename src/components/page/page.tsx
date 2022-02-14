import style from '@components/page/page.module.scss'
import Card from '@components/card/card'

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
