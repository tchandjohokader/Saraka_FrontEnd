import React, { Component } from "react"
import { list } from "../Data.js"
import VueOng from "./cartes/carte.js";
import Boutonaction from './boutonaction/boutonaction';


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
              <div className="ongchoisi" style={{backgroundColor:'black'}}>
                <img src={list[localStorage.getItem('id')].image} alt="" style={{opacity:'0.6'}} />
                <div>
                  <h1>{list[localStorage.getItem('id')].nom}</h1>
                  <h3>Merci pour votre généreux don, qui fait une réelle différence dans notre cause</h3>
                </div>
              </div>
              <div className="choixdudon">
                <div>
                  <div className="li">
                  <li className='underline-on-hover' onClick={this.argent}>Argent</li>
                  <li className='underline-on-hover'onClick={this.materiel}>Materiel</li>
                  </div>
                  {this.state.click ? <Finance/>: <Materiel/>}
                </div>
              </div>
            </div>
        )
    }
}
function Materiel (){
    return(
        <form action="#" method="get"  className="materiel">
  <div className="input-group mb-4">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Categorie</label>
    <select className="form-select" id="inputGroupSelect01">
      <option selected>Choisissez</option>
      <option value="1">Vêtement</option>
      <option value="2">Nourriture</option>
      <option value="3">Matelas</option>
      <option value="3">Autres</option>
    </select>
  </div>
  <div className="input-group mb-4">
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
  <div style={{marginLeft:'35%'}}>
  <Boutonaction backgroundColor='#0b61c3' titre='Valider' color='rgb(221, 235, 254)' lien='#' />
  </div>
</form>
    )
}
function Finance (){
    return(
        <div>
          <form>
            <div className="input-group mb-3" style={{marginLeft:'40px',marginRight:'10px'}}>
                <span className="input-group-text">FCFA</span>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                <span className="input-group-text">.00</span>
            </div>
            <div style={{marginLeft:'45%'}}>
              <Boutonaction backgroundColor='#0b61c3' titre='Valider' color='rgb(221, 235, 254)' lien='#' />
            </div>
          </form>
        </div>
    )
}

export  {VueOngs,Recherche,Faireundon}