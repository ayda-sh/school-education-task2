import { Link } from "./link";
import styles from "./responsive/menu.module.css"

export function Menu() {
    return(
        <div className={styles.menu}>
          <ul>
            <li>
              <Link/>
            </li>
            <li>
              <Link/>
            </li>
            <li>
              <Link/>
            </li>
            <li>
              <Link/>
            </li>
            <li>
              <Link/>
            </li> 
            <li>
              <Link/>
            </li>
        </ul>
        <div className={styles.menuicon}>
          <img src="src/assets/menuicon.svg" alt="" />
        </div>
        </div>
    )
}