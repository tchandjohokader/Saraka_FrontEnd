import React from "react";
import { Link } from "react-router-dom";
import '../components/connection.css'
import axios from 'axios';
export default function Connection(){
    return(
      <div className="tous">
              <div className="infoconect">
                  <p>Bienvenue sur</p>
                  <h4>SARAKA</h4>
                  {console.log(axios.isCancel('something'))}
              </div>
          <div className="connection">
          <p className="inscrit">Vous n'avez pas de compte <Link to ='/Inscription'>inscrivez-vous</Link></p>
          <div className="connect">
  <h6>Informations de votre compte</h6>
  <form action="">
      <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="nom@example.com"/>
          <label htmlFor="floatingInput">Addresse mail</label>
      </div>
      <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Mot de passe</label>
      </div>
      <div className="col-12">
          <button type="submit" className="btn btn-light">Envoyer</button>
      </div>
      <Link>Mot de passe oublier?</Link>
  </form>
  </div>
          </div>
      </div>
      )
  }