import { useState } from "react"

export const useCounter = (initialState = 0) => {

    const [counter, setCounter] = useState<number>(initialState);


    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }



    return {

        counter,
        increment,
        decrement,
        reset

    }
}
