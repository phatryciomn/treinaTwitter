import { useState } from 'react';
import styles from './TextInput.module.css';

export default function TextInput({ placeholder = 'Koé Paizão? Fala aí pra nós!', maxLength = 200, ...props}) {
    const [text, setText] = useState('');

    function onTextChange(event) {
    setText(event.target.value);
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
        </div>
    );
}