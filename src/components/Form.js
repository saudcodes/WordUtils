import React, { useState } from 'react';

export default function Form(props) {
    const [text, setText] = useState("dd")
    const convert = () => {
        let newText = text.value + "jdf"
        setText(newText)
    }
    const handleChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <h3>{props.title}</h3>
            <div className="mb-3">
                <label htmlFor="box" className="form-label"></label>
                <textarea value={text} onChange={handleChange} className="form-control" id="box" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={convert}>Convert Uppercase</button>
        </>

    )
}

