import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

    
export default function Inscription (){
    const [nom,setNom]=useState("")
    const [prenom,setPrenom]=useState("")
    const [email,setEmail]=useState("")
    const [motdepasse,setMotdepasse]=useState("")
    const [confirmmotdepasse,setConfirmmotdepasse]=useState("")
    const submit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/inscription',{nom,prenom,email,motdepasse})
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        });
    }
    const verification =()=>{
        
    }
    return (
        <div className="tous">
            <div className="infoconect">
                <p>Bienvenue sur</p>
                <h4>SARAKA</h4>
            </div>
            <div className="connection">
                <p className="inscrit">Vous avez un compte <Link to ='/Connection'>connectez-vous</Link></p>
                <div className="connect">
                    <form className="row g-3" onSubmit={(e)=>submit(e)}>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Ex: Kone"  required value={nom} onChange={(e)=> setNom(e.target.value)}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Prenom</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Ex: cader" required value={prenom} onChange={(e)=> setPrenom(e.target.value)}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="inputAddress" placeholder="nom@gmail.com" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" id="inputCity" placeholder="xxxxxxxxxxxx" required value={motdepasse} onChange={(e)=> setMotdepasse(e.target.value)}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Confirmer le mot de passe</label>
                            <input type="password" className="form-control" id="inputAddress2" placeholder="xxxxxxxxxxxx" required value={confirmmotdepasse} onChange={(e)=> setConfirmmotdepasse(e.target.value)}/>
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
