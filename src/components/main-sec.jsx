import { Button } from "./button";
import { Card } from "./card";

import styles from "./mainsec.module.css"
import { ServicesBox } from "./servicesBox";

export function MainSec() {
    return (
    
         <section>
           <div className={styles.featuressection}>
              <Button/>
              <h2>Our Special Features</h2>
              <p className={styles.par}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
              <Card/>
           </div>

           <div>
              <Button/>
              <h2>What Students Learn</h2>
              <p>
                At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include
              </p>
           
              <ServicesBox/>
           </div>
          
        </section>
    
    )
}