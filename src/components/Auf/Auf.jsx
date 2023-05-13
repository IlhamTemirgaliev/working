import React from 'react'
import style from './auf.module.css'
const Auf = () => {
  return (
    <div className={style.bg}>
    <div className={style.registr}>

<h1 className={style.title}>Sigin in</h1>


<form className={style.inputblok}  action="">
    
    <input  className={style.input}  type="text"  placeholder='paswword'/>
    <input  className={style.input}  type="text"  placeholder='gmail'/>
   <div className={style.blokbtn}> <button className={style.button}>Sign<label className={style.label}> in</label></button></div>
</form>







      {/* <div className={style.registr_info}>
        <h2>Авторизация</h2>
        <p>Заполните все поля чтобы начать свой путь 🚀</p>
          <div className={style.registr_info}>
            <div className={style.input}>
              <p>E-Mail</p>
              <input type="text" />
            </div>
            <div className={style.input}>
              <p>Пароль</p>
              <input type="text" />
            </div>
            <button type="submit" className={style.btn}>Авторизация</button>
          </div>
      </div> */}
    </div>
  </div>

  )
}

export default Auf