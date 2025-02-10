import { Logo } from "./logo";
import { Menu } from "./menu";

import styles from "./mainNav.module.css"

export function MainNav() {
    return (
        <nav className={styles.mainnav}>
          
                <Logo />
                <Menu />
           
        </nav>
    )
}