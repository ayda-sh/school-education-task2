import styles from "./footerstyles/footerLeftCol.module.css"

export function FooterLeftCol() {
    return (
        <div className={styles.footerleftcol}>
            <img src="src/assets/footerlogo.png" alt="" />
            <p>
            We believe in the power of play to foster creativity, problem-solving skills, and imagination.
            </p>
            <div className={styles.contactus}>
                <img src="src/assets/email.svg" alt="" />
                <p>hello@littlelearners.com</p>
            </div>
            <div className={styles.contactus}>
                <img src="src/assets/phone.svg" alt="" />
                <p>+91 91813 23 2309</p>
            </div>
            <div className={styles.contactus}>
                <img src="src/assets/map.svg" alt="" />
                <p>Somewhere in the World</p>
            </div>
        </div>
    )
}