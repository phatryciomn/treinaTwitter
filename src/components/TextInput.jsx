import styles from './TextInput.module.css';

export default function TextInput () {
    return (
        //{} -> Escape, o código dentro será js
        //maxLenght -> Usado para especificar o número máximo de caracteres
        <div>
            <textarea className={styles.input} placeholder={"Koé Paizão? Fala aí pra nós!"} maxLength={120}/>
        </div>
    )
}