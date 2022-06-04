import React, { useState, useEffect } from "react";

const NewForm = (props) => {
    const [text, setText] = useState("")
    const [preview, setPreview] = useState("")
    const [isPreviewEnabled, setIsPreviewEnabled] = useState(false)
    const [btnPreview, setBtnPreview] = useState("Enable Dark Mode")


    useEffect(() => {
        if (isPreviewEnabled === true) {
            setPreview(text)
        }
    }, [isPreviewEnabled, text]);

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
        if (setIsPreviewEnabled === true) {
            setBtnPreview("Disable")
        }
        setIsPreviewEnabled(true)

    }
    const handleChange = (event) => {

        setText(event.target.value)

    }


    return (
        <>
            <div className="container ">

                <form className="was-validated">
                    <div className="mt-5">
                        <label htmlFor="validationTextarea" className="form-label">Textarea</label>
                        <textarea value={text} onChange={handleChange} className="form-control  is-invalid" rows="4" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                        <div className="invalid-feedback">
                            Please enter a message in the textarea.
                        </div>

                    </div>

                    <button className="btn mx-2 btn-primary" onClick={upperCase} type="submit">To uppercase</button>
                    <button className="btn mx-2 btn-primary" onClick={lowerCase} type="submit">To lowercase</button>
                    <button className="btn mx-2 btn-primary" onClick={capitalize} type="submit">To capitalize</button>
                    <button className="btn mx-2 btn-primary" onClick={activateText} type="submit">{btnPreview} </button>


                </form>
                <div style={{ height: "60vh", }} className="container border border-3 mt-5 border-primary">
                    <h4>Preview</h4>
                    <p >{preview}</p>
                </div>
            </div>
        </>
    )



}
export default NewForm