import { useState } from 'react';
import TextInput from "../components/TextInput";

export default function Index() {
    const [text, setText] = useState('');
    const maxLength = 120;

    function onTextChange(event) {
    const text = event.target.value;
    if (text.length <= maxLength) {
        setText(text);
        }
    }

    return (
        <div>
            <h1>TreinaTweet</h1>
            <div>
                <img src={'https://github.com//phatryciomn.png'} />
                <TextInput
                placeholder={'Fala meu peixe, o q ta pegando?'}
                maxLength={maxLength}
                value={text}
                onChange={onTextChange}
                />
            </div>
            <div>
                <div>{text.length} / {maxLength}</div>
                <button>Tweetar</button>
            </div>

            <ul>
                <li>Tweet 1</li>
                <li>Tweet 2</li>
            </ul>

        </div>
    )
}