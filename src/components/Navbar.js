import React, { useState, useEffect } from "react";

export default function Navbar(props) {
  const [style, setStyle] = useState({ background: "white" })


  useEffect(() => {
    if (props.mode === "dark") {
      setStyle(
        props.newColor
      )

    }
    else {
      setStyle(
        { background: "white", }

      )

    }

  }, [props.mode, props.newColor])


  function autoClick() {
    if (props.mode === "light") {
      document.getElementById("flexSwitchCheckDefault").click();

    }
  }


  return (

    <>
      <nav style={style} className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse text-light navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-light me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark active" aria-current="page" href="/">{props.link}</a>
              </li>


            </ul>

            <button className="btn mx-2 "> Select Color<input id="colorpicker"
              style={{ width: "25px", height: " 15px", border: " none" }} type="color" onClick={autoClick} onChange={props.switchColor} /></button>
            <button className="btn mx-1" type="submit">{props.mode === "dark" ? "Enable Light mode" : " Enable Dark mode"}</button>
            <div className="form-check me-5 form-switch">


              <input className="form-check-input w-20 text-danger btn-lg" onClick={props.toggleBtn} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}

Navbar.defaultProps = {
  title: "SAUD",
  link: "Homepage",

}