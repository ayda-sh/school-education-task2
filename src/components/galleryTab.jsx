import styles from "./galleryTab.module.css"

export function GalleryTab() {
    return (
        <div className={styles.gallerytab}> 
            <button>All</button>
            <button>Classrooms</button>
            <button>Library</button>
            <button>Science Lab</button>
            <button>Computer Lab</button>
            <button>Garden and Nature Area</button>
        </div>
    )
}