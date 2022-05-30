import React, { useState, useEffect } from "react";

const NewForm = (props) => {
    const [text, setText] = useState("")
    const [preview, setPreview] = useState("")
    const [isPreviewEnabled, setIsPreviewEnabled] = useState(false)


    useEffect(() => {
        if (isPreviewEnabled === true) {
            setPreview(text)
        } else {
            console.log('Count is less that 5');
        }
    });

    const upperCase = (e) => {
        e.preventDefault()
        let a = text.toUpperCase()
        setText(a)
    }
    const lowerCase = (e) => {
        e.preventDefault()
        let a = text.toLowerCase()
        setText(a)
    }
    const capitalize = (e) => {
        e.preventDefault()
        let a = text.charAt(0).toUpperCase() + text.slice(1)
        setText(a)
    }
    const activateText = (e) => {
        e.preventDefault()

        setIsPreviewEnabled(true)
        console.log(setIsPreviewEnabled)
        console.log(preview)
    }
    const handleChange = (event) => {

        setText(event.target.value)

    }


    return (
        <>
            <div className="container">
                <h2>{preview}</h2>
                <form className="was-validated">
                    <div className="mt-5">
                        <label htmlFor="validationTextarea" className="form-label">Textarea</label>
                        <textarea value={text} onChange={handleChange} className="form-control  is-invalid" rows="4" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                        <div className="invalid-feedback">
                            Please enter a message in the textarea.
                        </div>

                    </div>

                    <button className="btn btn-primary" onClick={upperCase} type="submit">To uppercase</button>
                    <button className="btn btn-primary" onClick={lowerCase} type="submit">To lowercase</button>
                    <button className="btn btn-primary" onClick={capitalize} type="submit">To capitalize</button>
                    <button className="btn btn-primary" onClick={activateText} type="submit">Enable Text Preview </button>


                </form>
            </div>
        </>
    )



}
export default NewForm