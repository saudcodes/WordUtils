import React, { useState, useEffect } from "react";

export default function Navbar(props) {
  const [style, setStyle] = useState({ background: "red" })
  // const newJ = setStyle({ background: "red" });

  useEffect(() => {
    if (props.glow === "dark") {
      setStyle({
        background: "linear-gradient(15deg, #13547a 1%, #80d0c7 75%)", boxShadow: "0px -12px 55px  #0ff", a: "white",
      })
    }
    else {
      setStyle({
        background: "white"
      })
    }

  }, [props.glow])
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
                <a className="nav-link text-light active" aria-current="page" href="/">{props.link}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>

      </nav>
    </>
  )
}

Navbar.defaultProps = {
  title: "SAUD",
  link: "Homepage"
}