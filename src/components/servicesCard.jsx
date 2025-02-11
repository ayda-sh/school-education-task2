import styles from "./servicesCard.module.css"

export function ServicesCard() {
    return (
        <div className={styles.servicescard}>   
              <img src="src/assets/Image.png" alt="" />
              <h4>Language Arts</h4>
              <p>Reading, writing, storytelling, and communication skills.</p>  
        </div>
    )
}