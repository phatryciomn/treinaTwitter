import { useState } from 'react';

export function useIndex() {
    const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState([]);
    const maxLength = 120;
    
        const tweet = {
            date: new Date(),
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

    return {
        text,
        onTextChange,
        maxLength,
        sendTweet,
        tweetList
    }
    
}