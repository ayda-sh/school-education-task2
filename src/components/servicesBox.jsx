import { ServicesCard } from "./servicesCard";

import styles from "./servicesBox.module.css"

export function ServicesBox() {
    return (
       <div className={styles.servicesbox}>
         <div> 
            <ServicesCard/>
        </div>
        <div> 
            <ServicesCard/>
        </div>
        <div> 
            <ServicesCard/>
        </div>
        <div> 
            <ServicesCard/>
        </div>
        <div> 
            <ServicesCard/>
        </div>
        <div> 
            <ServicesCard/>
        </div>
       </div>
        
    )
}