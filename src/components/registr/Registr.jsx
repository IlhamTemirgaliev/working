import style from "./registr.module.css";
const Rigistr =  () => {
  return(

    <div className={style.bg}>
      <div className={style.registr}>
        <div className={style.registr_info}>
          <h2>Регистрация</h2>
          <p>Заполните все поля чтобы начать свой путь 🚀</p>
            <div className={style.registr_info}>
              <div className={style.input}>
                <p>Никнейм</p>
                <input type="text" />
              </div>
              <div className={style.input}>
                <p>E-Mail</p>
                <input type="text" />
              </div>
              <div className={style.input}>
                <p>Пароль</p>
                <input type="text" />
              </div>
              <div className={style.input}>
                <p>Подтвердить пароль</p>
                <input type="text" />
              </div>
              <button type="submit" className={style.btn}>Регистрация</button>
            </div>
        </div>
      </div>
    </div>

  )
}
export default Registr