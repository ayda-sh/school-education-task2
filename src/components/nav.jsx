import { TopNav } from "./topNav";
import { MainNav } from "./mainNav";

import styles from "./nav.module.css"

export function Nav() {
    return (
        <nav>
            <TopNav />
            <MainNav />
        </nav>
    )
}