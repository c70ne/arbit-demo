import styles from '../styles/Home.module.css'
import Welcome from './Welcome'
import Contact from './Contact'
import FAQ from './FAQ'
import LatestFeatures from './LatestFeatures'
import UpcomingFeatures from './UpcomingFeatures'

export default function Overview() {

    return (
        <>
            <div className={styles.overview_left_column}>
                <Welcome />
                <Contact />
                <FAQ />
            </div>
            <div className={styles.padding}></div>
            <div className={styles.overview_right_column}>
                <LatestFeatures />
                <UpcomingFeatures />
            </div>
        </>
    )
}