
import React, { useState, useEffect } from 'react'

export default function Dark(props) {
    const [style, setStyle] = useState({
        color: "black",
        backgroundColor: "white",
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")


    useEffect(() => {
        if (props.mode === "dark") {
            setStyle({
                color: "white",
                backgroundColor: "black",
            })
            setBtnText("Enable Light Mdor")
        }
        else {

            setStyle({
                color: "black",
                backgroundColor: "white",
            })
            setBtnText("Enable Dark Mode")
        }
    }, [props.mode]);



    return (
        <>
            <div className="container mt-5">
                <div className="accordion  " style={{ border: "2px solid ", color: props.mode === "dark" ? "red " : "blue", boxShadow: " 120px 80px 40px 20px #0ffs" }} id="accordionExample" >
                    <div className="accordion-item" style={style}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item " style={style}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={style}>
                        <h2 class="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>


                <button className="btn btn-primary" onClick={props.toggleBtn} type="submit">{btnText}</button>
            </div>
        </>
    )
}