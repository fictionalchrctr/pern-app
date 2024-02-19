import styles from './Home.module.css'

const isSuccess = false

function Home() {
  return (
    <div className={styles.wrapper}>
      <form>
        {isSuccess ? (
          <div className={styles.success}>Заявка отправлена!</div>
        ) : (
          <>
            <h1>GTA 6 - Оставь заявку</h1>
            <input type="email" placeholder="Введите email" />
            <input type="name" placeholder="Введите имя" />
            <button>Оформить заявку!</button>
          </>
        )}
      </form>
    </div>
  )
}

export default Home
