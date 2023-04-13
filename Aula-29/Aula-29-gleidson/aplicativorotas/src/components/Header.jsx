import React from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function Header()
{
    return(
        <>
            {/* <header>
                <Link to="/">Home</Link> 
                <hr />
                <Link to="/outrapagina">Alunos</Link> 
            </header> */}

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link> {/* coloquei aqui 1 */}
                        </li>
                        <li className="nav-item">
                            <Link to="/outrapagina" className="nav-link">Alunos</Link> {/* coloquei aqui 2 */}
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}