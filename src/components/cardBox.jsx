import styles from "./cardBox.module.css";

export function CardBox() {
    return (
        <div className={styles.cardbox}>
        
               <img src="src/assets/Icon Container.png" alt="" />
               <h4>Thematic Learning</h4>
               <p>Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.</p>
         
        </div>
    )
}