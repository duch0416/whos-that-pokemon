import {useState, useReducer} from 'react';

import {guessReducer, initState, setStatusToTrue} from "../store/GuessStatus/GueesReducer"

 
export const useGuess = (pokName: string) => {
    // const guessStatus = useContext(GuessStatusContext);
    const [inputValue, setInputValue] = useState("")
    const [GuessState, dispatch] = useReducer(guessReducer, initState);
    // const [guessStatus, setGuessStatus] = useState(false)


    const onChange = (e: any) => {
        setInputValue(e.target.value)
        
        if(pokName.toLowerCase() === inputValue.toLowerCase()){
            dispatch(setStatusToTrue())
        }
    }

    

    return{
        onChange,
        inputValue,
    }
}
 
