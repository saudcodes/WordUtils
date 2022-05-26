import React from 'react';
import { useState } from 'react';


const Overview = () => {
    const add = () => {
        return value + 1;
    }
    const [value, setValue] = useState("")

    return (
        <>
            <input className="form-control form-control-lg" type="text" aria-label=".form-control-lg example" />
            <button onClick={add} className="btn btn-warning"  >CLICK ME :D</button>
            <h1>{value}</h1>

        </>
    )
}

export default Overview