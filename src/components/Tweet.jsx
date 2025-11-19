export default function Tweet(props) {
    return (
        <div className={StyleSheet.tweetContainer}>
            <img src={'https://github.com//phatryciomn.png'}/>
            <div className={StyleSheet.user}>
                <span>Phatrycio Miranda Nascimento</span>
                <span>@phatryciomn</span>
                <span>Há 12 horas</span>
            </div>
            <div className={Styles.tweetText}>
                {props.children}
            </div>
        </div>
    )
}