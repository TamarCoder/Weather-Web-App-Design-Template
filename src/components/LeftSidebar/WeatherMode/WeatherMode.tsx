import { Wind } from 'lucide-react'
import styles from './WeatherMode.module.scss'


export default function WeatherMode() {
    return(
        <div className={styles.weatherMode}>
            <Wind  className={styles.icon}/>
        </div>
    )
}