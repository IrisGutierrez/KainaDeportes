
import React from 'react'
function Barra({children}) {
    return (
         <div className="fondo">
                            <nav class="navbar navbar-expand-lg  fondo">
                                    <div class="container-fluid">
                                        <a className="text" href="index.js">Zapatilla</a>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                            <a className="nav-link text" aria-current="page"  href="index.js">Remeras</a>
                                            </li>
                                            <li className="nav-item">
                                            <a className="nav-link text " href="index.js">Ropa</a>
                                            </li>
                                            <li className="nav-item">
                                            <a className="nav-link text " href="index.js">Accesorios</a>
                                            </li>
                                            
                                        </ul>
                                        </div>
                                    </div>
                              <h1>{children}</h1>
                            </nav>  
        </div> 
       
    )
 
}

export default Barra;