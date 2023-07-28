
import React,{Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark ">
            <Link style={{fontWeight:'bolder',marginLeft:'40px'}} className="navbar-brand" to="/"> DAILY NEWS</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto fw-bold">
                    <li className="nav-item mx-4 "><Link className="nav-link" to="/">General</Link></li>
                    <li className="nav-item mx-4"><Link className="nav-link" to="/business">Business</Link></li>
                    <li className="nav-item mx-4"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item mx-4"><Link className="nav-link" to="/health">Health</Link></li>
                    <li className="nav-item mx-4"><Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item mx-4"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item mx-4"><Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
            </div>
        </nav>
    </div>  
    )
  }
}



