import { useRef,  } from "react"


const PulsarBotones = () => {

    const cont = useRef(0);

    const handleClick = (incrementar) => {
        incrementar ? cont.current++ : cont.current--

        console.log(`Contador ${cont.current}`);
    }

    console.log('RENDER!!');

    return (
        <div>
            <button onClick={() => handleClick(false)}>Descrementar</button>
            <button onClick={() => handleClick(true)}>incrementar</button>
        </div>
    )

}


export default PulsarBotones