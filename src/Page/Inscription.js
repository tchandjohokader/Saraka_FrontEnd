import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Boutonaction from "../components/boutonaction/boutonaction";

    
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
        <div style={{display: 'flex'}}>
            <div className="mondemeuilleur">
                <img src="./IMAGE/Sign up-pana.png"className='imgemondemeuilleur'/>
            </div>
            <div className="connection">
                <div className="connect">
                    <h3 style={{color:'#0b61c3'}}>Inscrivez-Vous</h3>
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
                        <div className="col-12" style={{marginLeft:'35%',width:'70%'}}>
                            <Boutonaction backgroundColor='#0b61c3' titre='Creer votre compte' color='rgb(221, 235, 254)' lien='Faire_un_don'/>
                        </div>
                        <p className="inscrit" style={{width:'44%'}}>Vous avez un compte <Link to ='/Connection'>connectez-vous</Link></p>
                    </form>
                </div>
            </div>
        </div>
      );
    }
