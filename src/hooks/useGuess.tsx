import {useState, useContext} from 'react';

import {setStatusToTrue, GuessStatusContext} from "../store/GuessStatus/GueesReducer"

 
export const useGuess = (pokName: string) => {
    const {dispatch} = useContext(GuessStatusContext)
    const [inputValue, setInputValue] = useState("")
   

    const onChange = (e: any) => {
        setInputValue(e.target.value)
        console.log(e.target.value)
        if(pokName.toLowerCase() === e.target.value.toLowerCase()){
            console.log("ok")
            dispatch(setStatusToTrue())
        }
    }


    return{
        onChange,
        inputValue,
    }
}
 
