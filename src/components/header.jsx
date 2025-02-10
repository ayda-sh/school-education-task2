import { LeftSideHeadr } from "./leftSide-header"
import { RightSideHeader } from "./rightSide-header"

import styles from "./header.module.css"


export function Header() {
    return(
        <header>
           <div className={styles.mainheader}> 
           <LeftSideHeadr/>
           <RightSideHeader/>
           </div>
        </header>
    )
}