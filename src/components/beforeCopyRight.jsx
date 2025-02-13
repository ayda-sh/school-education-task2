import styles from "./footerstyles/beforeCopyRight.module.css"

export function BeforeCopyRight() {
    return (
       <div className={styles.beforecopyright}>
         <div className={styles.rules}>
            <ul>
                <li><a href="">Terms of Service</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Cookie Policy</a></li>
            </ul>
        </div>

        <div className={styles.icons}>
            <a href=""><img src="src/assets/facebook.svg" alt="" /></a>
            <a href=""><img src="src/assets/twitter.svg" alt="" /></a>
            <a href=""><img src="src/assets/linkdin.svg" alt="" /></a>
        </div>
       </div>
    )
}