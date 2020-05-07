import {useState, useContext, useEffect} from 'react';

import {setStatusToTrue, GuessStatusContext} from "../store/GuessStatus/GueesReducer"

 
export const useGuess = (pokName: string) => {
    const {setStatus} = useContext(GuessStatusContext)
    const [inputValue, setInputValue] = useState("")

   
   
    const onChange = (e: any) => {
        setInputValue(e.target.value)
        
        if(pokName.toLowerCase() === e.target.value.toLowerCase()){
            setStatus(setStatusToTrue())
            
        }
    }

    useEffect(() => {
        setInputValue("")
    },[pokName])

    return{
        onChange,
        inputValue,
    }
}
 
