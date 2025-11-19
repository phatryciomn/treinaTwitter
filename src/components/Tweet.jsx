import styles from './Tweet.module.css'

export default function Tweet(props) {
    return (
        <div className={styles.tweetContainer}>
            <img className={styles.avatar} src={'https://github.com//phatryciomn.png'}/>
            <div className={styles.user}>
                <span className={styles.userName}>Phatrycio Miranda Nascimento</span>
                <span className={styles.userUserName}>@phatryciomn</span>
                <span className={styles.date}>Há 12 horas</span>
            </div>
            <div className={styles.tweetText}>
                {props.children}
            </div>
        </div>
    )
}