import React from "react";
import { Link } from "react-router-dom";

    
export default function Inscription (){
    return (
        <div className="tous">
            <div className="infoconect">
                <p>Bienvenue sur</p>
                <h4>SARAKA</h4>
            </div>
            <div className="connection">
                <p className="inscrit">Vous avez un compte <Link to ='/Connection'>connectez-vous</Link></p>
                <div className="connect">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Ex: Kone" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Prenom</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Ex: cader" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="inputAddress" placeholder="nom@gmail.com" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" id="inputCity" placeholder="xxxxxxxxxxxx" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Confirmer le mot de passe</label>
                            <input type="password" className="form-control" id="inputAddress2" placeholder="xxxxxxxxxxxx" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-light">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      );
    }
