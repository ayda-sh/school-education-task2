import { Button } from "./button";
import { Card } from "./card";

import styles from "./mainsec.module.css"

export function MainSec() {
    return (
    
         <section>
           <div className={styles.featuressection}>
           <Button/>
            <h2>Our Special Features</h2>
           <p className={styles.par}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
            <Card/>
           </div>
        </section>
    
    )
}