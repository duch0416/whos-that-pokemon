import {useState} from 'react';


 
export const useGuess = (pokName: string) => {
    const [inputValue, setInputValue] = useState("")
    const [guessStatus, setGuessStatus] = useState(false)

    const onChange = (e: any) => {
        setInputValue(e.target.value)
        if(pokName.toLowerCase() === inputValue.toLowerCase()){
            setGuessStatus(true)
        }
    }

    

    return{
        onChange,
        inputValue,
        guessStatus
    }
}
 
