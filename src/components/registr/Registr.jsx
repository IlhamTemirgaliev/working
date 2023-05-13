
import style from './index.module.css'
const Registr = () => {
  return (
    <div className={style.bgg}>
    <div className={style.registrs}>

<h1 className={style.titles}>Sigin in</h1>


<form className={style.inputbloks}  action="">
    <input className={style.inputs} type="text"  placeholder='name'/> 
    <input  className={style.inputs}  type="text"  placeholder='paswword'/>
    <input  className={style.inputs}  type="text"  placeholder='gmail'/>
   <div className={style.blokbtns}> <button className={style.buttons}>Sign<label className={style.label}> in</label></button></div>
</form>






    </div>
  </div>
  )
}

export default Registr