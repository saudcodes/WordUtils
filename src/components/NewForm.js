import React, { useState, useEffect } from "react";

const NewForm = (props) => {
    const [text, setText] = useState("")
    const [preview, setPreview] = useState("")
    // const [isPreviewEnabled, setIsPreviewEnabled] = useState(false)
    const [isTouched, setIsTouched] = useState(false)

    useEffect(() => {
        if (text !== "") {
            setPreview(text)

        }

    }, [text]);

    const handleUpperCase = (e) => {
        e.preventDefault()
        let upperCased = text.toUpperCase()
        setText(upperCased)
        props.showAlert("success", " Your Text Has been Upper cased");
    }
    const handleLowerCase = (e) => {
        e.preventDefault()
        let lowerCased = text.toLowerCase()
        setText(lowerCased)
        props.showAlert("success", " Your Text Has been Lower cased");
    }
    const handleCapitalize = (e) => {
        e.preventDefault()
        let a = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
        setText(a)
        props.showAlert("success", " Your Text Has been Capitalized");
    }
    // const handleActivateText = (e) => {
    //     e.preventDefault()
    //     setIsPreviewEnabled(true)
    //     if (isPreviewEnabled === true) {
    //         setIsPreviewEnabled(false)

    //         props.showAlert("success", " Text Preview has been Disabled!!!");


    //     }
    //     else { props.showAlert("success", " Text Preview has been Enabled!!!"); }

    // }
    const handleCopyText = (text) => {
        text.preventDefault()
        text = document.getElementById("myPreviewArea")
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);

        props.showAlert("success", " Your Text Has been Copied");


    }
    const handleChange = (event) => {

        setText(event.target.value)
        
    } 


    return (
        <>
            <div className="">
                <div style={{}} className="container mt-5  ">


                    <form className="was-validated">
                        <div className="">
                            <h3 className={`fst-italic position-fixed mt-2 text-${props.mode === "light" ? "dark" : "light"}`}> {text.length === 0 ? "" : text.length + " charactars " + text.split(" ").filter((element) => { return element.length !== 0 }).length + " words"}</h3>
                            <label htmlFor="validationTextarea" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}></label>
                            <textarea onChange={handleChange} className="form-control mt-5 is-invalid" rows="4" id="myTextArea" placeholder="Required example textarea" required></textarea>
                            <div className="invalid-feedback my-1">
                                {text.length === 0 && isTouched === true ? "Enter some text in the box " : ""}
                            </div>

                        </div>
                        <div className="container my-3 buttons">
                            <button style={props.mode === "light" ? { color: "white" } : props.myColor} className="btn mx-2 my-1  btn-primary" onClick={handleUpperCase} type="submit">To Uppercase</button>
                            <button style={props.mode === "light" ? { color: "white" } : props.myColor} className="btn mx-2 my-1 btn-primary" onClick={handleLowerCase} type="submit">To Lowercase</button>
                            <button style={props.mode === "light" ? { color: "white" } : props.myColor} className="btn mx-2 my-1 btn-primary" onClick={handleCapitalize} type="submit">To Capitalize</button>
                            {/* <button style={props.mode === "light" ? { color: "white" } : props.myColor} className="btn mx-2 btn-primary" onClick={handleActivateText} type="submit">{isPreviewEnabled === false ? "Enable Preview" : " Disable Preview"} </button> */}
                            <button style={props.mode === "light" ? { color: "white" } : props.myColor} className="btn mx-2 my-1 btn-primary" onClick={handleCopyText} type="submit">Copy </button>
                        </div>


                    </form>
                    <div style={{ height: "20vh", overflow: "auto", }} className="container testing border border-3 mt-5 border-primary">
                        <h4 className={`text-${props.mode === "light" ? "dark" : "light"} text-decoration-underline fst-italic`}>Result</h4>
                        {/* <p className={`text-${props.mode === "light" ? "dark" : "light"} fs-5`}>{preview} </p> */}
                        <input id="myPreviewArea" style={{ background: "transparent", outline: "none", width: "100%", height: "auto", border: "none" }} className={`text-${props.mode === "light" ? "dark" : "light"} fs-5`} type="text" value={preview} />
                    </div>
                </div>
            </div>
        </>
    )



}
export default NewForm