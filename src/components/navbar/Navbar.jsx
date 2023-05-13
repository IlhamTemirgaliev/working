import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.conteiner}>
    <div className={styles.blok}>
        <NavLink className={styles.logo} to='/'> I<label className={styles.label}>WEX</label></NavLink>
         <nav className={styles.contlink}>
<NavLink to='/admins' className={styles.admins}>
    Admins
</NavLink>
<NavLink className={styles.join}>
    sign in 
</NavLink>
<NavLink className={styles.registr}>
    sign on 
</NavLink>
        </nav>
    </div>
    </div>
  )
}

export default Navbar