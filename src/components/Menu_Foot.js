import React from 'react';
import { Link } from 'react-router-dom';

function Menu () {
        return (
          <header id="header" className="header fixed-top d-flex align-items-center" >
    <div className="container d-flex align-items-center justify-content-between">

      <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
        <h1 style={{ color: '#0b61c3' ,fontFamily:'Jacques Francois'}}>SARAKA</h1>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/A_propos">A propos</Link></li>
          <li><Link to="/Faire_un_don">Faire un don</Link></li>
          <li><Link to="/Mon_compte">Mon compte</Link></li>
        </ul>
      </nav>
      <Link to='/Connection' className="btn-book-a-table">Connection</Link>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </div>
  </header>
        )}
function Footer (){
        return(
            <footer id="footer" className="footer" >

    <div className="container" >
      <div className="row gy-3">
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-geo-alt icon"></i>
          <div>
            <h4>Address</h4>
            <p>
              Port-Bouet <br/>
              Abidjan - CI<br/>
            </p>
          </div>

        </div>

        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-telephone icon"></i>
          <div>
            <h4>Contact</h4>
            <p>   
              <strong>Tel:</strong> +225 0504848121 <br/>
              <strong>Email:</strong> sarakaafrique@gmail.com<br/>
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-telephone icon"></i>
          <div>
            <h4>Contact</h4>
            <p>   
              <strong>Tel:</strong> +225 0504848121 <br/>
              <strong>Email:</strong> sarakaafrique@gmail.com<br/>
            </p>
          </div>
        </div>


        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Suivez Nous</h4>
          <div className="social-links d-flex">
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Saraka</span></strong>. All Rights Reserved
      </div>
    </div>
    

  </footer>
        )
    }
export { Menu, Footer };

