import React, { useState, useEffect } from "react";

const NewForm = (props) => {
    const [text, setText] = useState("")
    const [preview, setPreview] = useState("")
    const [isPreviewEnabled, setIsPreviewEnabled] = useState(false)
    const [btnPreview, setBtnPreview] = useState("Enable Preview")

    useEffect(() => {
        if (isPreviewEnabled === true) {
            setPreview(text)
        }
    }, [isPreviewEnabled, text]);

    const handleUpperCase = (e) => {
        e.preventDefault()
        let a = text.toUpperCase()
        setText(a)
        props.showAlert("success", " Your Text Has been Copied");
    }
    const handleLowerCase = (e) => {
        e.preventDefault()
        let a = text.toLowerCase()
        setText(a)
    }
    const handleCapitalize = (e) => {
        e.preventDefault()
        let a = text.charAt(0).toUpperCase() + text.slice(1)
        setText(a)
    }
    const handleActivateText = (e) => {
        e.preventDefault()
        setIsPreviewEnabled(true)
        if (setIsPreviewEnabled === true) {
            setBtnPreview("Disable")
        }
        setIsPreviewEnabled(true)


    }
    const handleCopyText = (text) => {
        text.preventDefault()
        text = document.getElementById("myTextArea")
        text.select();
        text.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(text.value);

        /* Alert the copied text */
        props.showAlert("success", " Your Text Has been Copied");

    }
    const handleChange = (event) => {

        setText(event.target.value)

    }


    return (
        <>
            <div className="container ">


                <form className="was-validated">
                    <div className="mt-5">
                        <h3 className={`fst-italic text-${props.new === "light" ? "dark" : "light"}`}> {text.length === 0 ? "" : text.length + " charactars " + text.split(" ").length + " words"}</h3>
                        <label htmlFor="validationTextarea" className={`form-label text-${props.new === "light" ? "dark" : "light"}`}></label>
                        <textarea value={text} onChange={handleChange} className="form-control  is-invalid" rows="4" id="myTextArea" placeholder="Required example textarea" required></textarea>
                        <div className="invalid-feedback my-1">
                            {text.length === 0 ? "Enter some text in the box " : ""}
                        </div>

                    </div>
                    <div className="container my-3 buttons">
                        <button className="btn mx-2 btn-primary" onClick={handleUpperCase} type="submit">To uppercase</button>
                        <button className="btn mx-2 btn-primary" onClick={handleLowerCase} type="submit">To lowercase</button>
                        <button className="btn mx-2 btn-primary" onClick={handleCapitalize} type="submit">To capitalize</button>
                        <button className="btn mx-2 btn-primary" onClick={handleActivateText} type="submit">{btnPreview} </button>
                        <button className="btn mx-2 btn-primary" onClick={handleCopyText} type="submit">Copy </button>
                    </div>


                </form>
                <div style={{ height: "20vh", overflow: "auto", }} className="container testing border border-3 mt-5 border-primary">
                    <h4 className={`text-${props.new === "light" ? "dark" : "light"} text-decoration-underline fst-italic`}>Preview</h4>
                    <p className={`text-${props.new === "light" ? "dark" : "light"} fs-5`}>{isPreviewEnabled === false ? "Enable Preview to view Text" : preview} </p>
                </div>
            </div>
        </>
    )



}
export default NewForm