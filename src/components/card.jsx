import { CardBox } from "./cardBox";

import styles from "./card.module.css"

export function Card() {
    return (
        <div className={styles.card}>
            <div>
                <CardBox />
            </div>
            <div>
                <CardBox />
            </div>
            <div>
                <CardBox />
            </div>
            <div>
                <CardBox />
            </div>
            <div>
                <CardBox />
            </div>
            <div>
                <CardBox />
            </div>
        </div>

    )
}