/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import './connection.css'
class Seconnecter extends Component{
    state = {
        click: true
      };
    
      handleClick = () => {
        let a = document.querySelector('a')
        // eslint-disable-next-line no-lone-blocks
        {a.textContent==="inscrivez-vous"?this.setState({ click: false }):this.setState({ click: true })}
      };
    
    render(){
        return(
            <div className="tous">
                    <div className="infoconect">
                        <p>Bienvenue sur</p>
                        <h4>SARAKA</h4>
                    </div>
                <div className="connection">
                <p className="inscrit">{this.state.click? "Vous n'avez pas de compte.":"Vous avez un compte."}<a href="#" onClick={this.handleClick}>{this.state.click? "inscrivez-vous":"connectez-vous"}</a></p>
                {this.state.click? <Connection/>:<Inscription/>}
                </div>
            </div>
            )
    }
}
function Connection (){
    return(
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
            <a href="#">Mot de passe oublier?</a>
        </form>
    </div>
    )
}
function Inscription (){
    return(
        <div className="connect">
            <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Nom</label>
    <input type="text" className="form-control" id="inputEmail4" placeholder="Ex:Kone"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Prenom</label>
    <input type="text" className="form-control" id="inputPassword4" placeholder="Ex:cader"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">E-mail</label>
    <input type="email" className="form-control" id="inputAddress" placeholder="nom@gmail.com"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Mot de passe </label>
    <input type="password" className="form-control" id="inputCity" placeholder="xxxxxxxxxxxx"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Confirmer le mot de passe </label>
    <input type="password" className="form-control" id="inputAddress2" placeholder="xxxxxxxxxxxx"/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-light">Envoyer</button>
  </div>
</form>
        </div>
    )
}
export {Seconnecter}