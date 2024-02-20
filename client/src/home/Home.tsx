import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Home.module.css'

const isSuccess = false

interface IFormState {
  name: string
  email: string
}

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormState>()

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    console.log(data.name)
    console.log(data.email)
  }
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSuccess ? (
          <div className={styles.success}>Заявка отправлена!</div>
        ) : (
          <>
            <h1>Оформите предзаказ на GTA 6</h1>
            <input
              type="email"
              placeholder="Введите email"
              {...register('email', {
                required: 'Заполните email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Некорректный email',
                },
              })}
            />
            <div className={styles.error}>
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <input
              type="name"
              placeholder="Введите имя"
              {...register('name', { required: 'Заполните поле' })}
            />
            <div className={styles.error}>
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <button>Оформить предзаказ!</button>
          </>
        )}
      </form>
    </div>
  )
}

export default Home
