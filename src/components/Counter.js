import React from "react";
import { useState } from "react";

const Counter = () => {

    const [value, setValue] = useState(1)

    const increament = () => {

        setValue(value + 99999)

    }
    return (<>
        <button onClick={increament}>click to add </button>
        <p>{value}</p>
    </>
    )
}
export default Counter