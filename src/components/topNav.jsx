import styles from "./topNav.module.css"


export function TopNav() {
    return (
        <div className={styles.topnav}>
            <p>Admission is Open, Grab your seat now</p>
            <img src="src/assets/Icon.png" />
        </div>
    )
}