import styles from "./galleryBox.module.css"

export function GalleryBox() {
    return (
       <div>
         <div className={styles.imagerow}>
            <img src="src/assets/gallery.png" alt="" />
            <img src="src/assets/gallery2.png" alt="" />
            <img src="src/assets/gallery3.png" alt="" />
            <img src="src/assets/gallery4.png" alt="" />
        </div>

        <div className={styles.gallerybox}>
           <div className={styles.boxhead}>
                <h5>Classrooms</h5>
                <div>
                <button>
                    <img src="src/assets/chevronleft.png" alt="" />
                </button>
                <button>
                    <img src="src/assets/chevronright.png" alt="" />
                </button>
                </div>
           </div>

           <p>Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.</p>
        </div>
       </div>
    )
}