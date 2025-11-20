import { useState } from 'react';
import TextInput from "../components/TextInput";
import Tweet from '../components/Tweet';
import styles from './Index.module.css';

export default function Index() {
    const [text, setText] = useState('');
    const maxLength = 120;
    const [tweetList, setTweetList] = useState([]);

    const tweet = {
        date: new Date().toDateString(),
        text: text,
        user: {
            name: 'Phatrycio Miranda Nascimento',
            userName: '@phatryciomn',
            picture: 'https://github.com//phatryciomn.png'
        }
    }

    function onTextChange(event) {
    const text = event.target.value;
    if (text.length <= maxLength) {
        setText(text);
        }
    }

    function sendTweet() {
        setTweetList([...tweetList, tweet])
    }

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