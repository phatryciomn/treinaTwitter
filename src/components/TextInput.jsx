import styles from './TextInput.module.css';

export default function TextInput(props) {

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
        </div>
    );
}