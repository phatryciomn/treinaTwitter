export default function TextInput () {
    return (
        //{} -> Escape, o código dentro será js
        //maxLenght -> Usado para especificar o número máximo de caracteres
        <div>
            <textarea placeholder={"Koé Paizão? Fala aí pra nós"} maxLength={120}/>
        </div>
    )
}