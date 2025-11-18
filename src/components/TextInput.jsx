import { useState } from 'react';
import styles from './TextInput.module.css';

export default function TextInput({ placeholder = 'Koé Paizão? Fala aí pra nós!', maxLength = 200, ...props}) {
    const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState([])

    function onTextChange(event) {
    setText(event.target.value);
  }

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
                placeholder={placeholder} 
                maxLength={maxLength}
                value={text}
                onChange={onTextChange}
                {...props}
            />
            <p>{text.length} / {maxLength}</p>
            <button onClick={sendTweet}>Enviar</button>
            {tweetList.map(tweet => {
                return (
                    <p>{tweet}</p>
                )
            })}
        </div>
    );
}