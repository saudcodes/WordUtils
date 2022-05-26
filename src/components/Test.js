import React, { useState } from "react";
export default function Test(props) {


    const [text, setText] = useState(1)
    const fire = (item) => {
        item = prompt("enter text")
        let a = item.toUpperCase()
        setText(a);

    }

    return (

        <>
            <h2>Welcome Back {text}</h2>
            <button onClick={fire}>click</button>
        </>
    )
}

Test.defaultProps = { name: "saud" };
