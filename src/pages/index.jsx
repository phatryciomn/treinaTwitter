import TextInput from "../components/TextInput";
import Tweet from '../components/Tweet';
import styles from './Index.module.css';
import { useIndex } from '../hooks/userIndex.page'

export default function Index() {

    const {
        text,
        onTextChange,
        maxLength,
        sendTweet,
        tweetList
    } = useIndex();

    return (
        <div>
            <h1 className={styles.pageTitle}>TreinaTweet</h1>
            <div className={styles.tweetContainer}>
                <img src={'https://github.com//phatryciomn.png'}
                className={styles.avatar} />

                <TextInput
                placeholder={'Fala meu peixe, o q ta pegando?'}
                rows={3}
                maxLength={maxLength}
                value={text}
                onChange={onTextChange}
                />
            </div>
            <div className={styles.buttonContainer}>
                <div>{text.length} / {maxLength}</div>
                <button 
                onClick={sendTweet}
                className={styles.postButton}
                disabled={text.length === 0}
                >Tweetar</button>            
            </div>
            <ul className={styles.tweet}>
                {tweetList.map(tweet => {
                    return (
                        <li className={styles.tweetListItem}>
                            <Tweet tweet={tweet}/></li>
                    )
                })}
            </ul>

        </div>
    )
}