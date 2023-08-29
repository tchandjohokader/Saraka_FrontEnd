import React, { Component } from "react"
import { VueOng } from "./vue_ong.js"
import { list } from "../Data.js"


function VueOngs (){
    return(
    <div className="tousong">
        <VueOng list={30} />
    </div>)
}
function Recherche (){
    return(
    <form className="recherche">
        <select >
        <option selected>Categorie</option>
        <option value="1">Sante</option>
        <option value="2">Protection des enfants</option>
        <option value="3">Sinistre</option>
    </select>
        <input type="text" placeholder="Rechercher..."/>
</form>)
}
class Faireundon extends Component{
    state = {
        click: null
      };
    
      argent = () => {
        this.setState({ click: true });
      };
    
      materiel = () => {
        this.setState({ click: false });
      };
    render(){
        return(
            <div className="faireundon">
              <h4 className="textdon">Merci pour votre don</h4>
                <div className="ongchoisi">
                  <img src={list[localStorage.getItem('id')].image} alt="" />
                  <div>
                    <h4>{list[localStorage.getItem('id')].nom}</h4>
                    <h5>{list[localStorage.getItem('id')].categorie}</h5>
                  </div>
                </div>
                <div className="choixdudon">
                    <li className='underline-on-hover' onClick={this.argent}>Argent</li>
                    <li className='underline-on-hover'onClick={this.materiel}>Materiel</li>
                </div>
                {this.state.click ? <Finance/>: <Materiel/>}
            </div>
        )
    }
}
function Materiel (){
    return(
        <form action="#" method="get">
  <div className="input-group mb-3">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Categorie</label>
    <select className="form-select" id="inputGroupSelect01">
      <option selected>Choisissez</option>
      <option value="1">Vêtement</option>
      <option value="2">Nourriture</option>
      <option value="3">Matelas</option>
      <option value="3">Autres</option>
    </select>
  </div>
  <div className="input-group mb-3">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Livraison</label>
    <select className="form-select" id="inputGroupSelect01">
      <option selected>Comment voulez-vous faire le don</option>
      <option value="1">Vous meme</option>
      <option value="2">Faire livrai</option>
    </select>
  </div>
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Intituler" aria-label="First name"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Quantite" aria-label="Last name"/>
    </div>
  </div>
  <button type="button" className="btn btn-secondary">Valider</button>
</form>
    )
}
function Finance (){
    return(
        <div>
    <div className="input-group mb-3">
        <span className="input-group-text">FCFA</span>
        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
        <span className="input-group-text">.00</span>
    </div>
    <button type="button" className="btn btn-secondary">Valider</button>
    </div>
    )
}

export  {VueOngs,Recherche,Faireundon}