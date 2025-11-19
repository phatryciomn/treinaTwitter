import { useState } from 'react';
import styles from './TextInput.module.css';

export default function TextInput(props) {
    const [tweetList, setTweetList] = useState([]);

  function sendTweet() {
    setTweetList([...tweetList, text])
    }

    return (
        //{} -> Escape, o código dentro será js
        //maxLenght -> Usado para especificar o número máximo de caracteres
        //onChange -> Cada alteração 
        //onTextChange -> Mudança a cada caracter
        <div>
            <textarea 
                className={styles.input}
                {...props}
            />
            {/* 
                <button onClick={sendTweet}>Enviar</button>
                {tweetList.map(tweet => {
                    return (
                        <p>{tweet}</p>
                    )
                })}
            */}
        </div>
    );
}