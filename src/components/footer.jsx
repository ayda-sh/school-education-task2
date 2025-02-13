import { BeforeCopyRight } from "./beforeCopyRight";
import { CopyRight } from "./copyRight";
import { FooterCol2 } from "./footerCol2";
import { FooterCol3 } from "./footerCol3";
import { FooterCol4 } from "./footerCol4";
import { FooterCol5 } from "./footerCol5";
import { FooterLeftCol } from "./footerLeftCol";

import styles from "./footer.module.css"

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerrow}>
             <FooterLeftCol/>
             <FooterCol2/>
             <FooterCol3/>
             <FooterCol4/>
             <FooterCol5/>
            </div>

            <BeforeCopyRight/>
            <CopyRight/>
            
        </div>
    )
}