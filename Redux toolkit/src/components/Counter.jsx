import { useDispatch, useSelector } from "react-redux"

import { increment, decrement, reset } from "../app/features/counter/counterSlice"

const Counter = () => {

    const count = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>CounterValue: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>
    )
}

export default Counter
