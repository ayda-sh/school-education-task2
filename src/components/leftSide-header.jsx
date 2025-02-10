import { Button } from "./button";

import styles from "./leftSideheader.module.css"

export function LeftSideHeadr() {
    return (
        <div className={styles.leftsideheader}>
            <Button/>
            <h1>Nurturing Young Minds for Success</h1>
        </div>
    )
}