import React from "react";
import { Link } from "react-router-dom";
import '../components/connection.css'
import { useState } from "react";
import axios from 'axios';
/*
// Send a POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
*/
export default function Connection(){
    const [email, setEmail] = useState("");
    const [motdepasse, setMotdepasse] = useState("");

    const verification=async (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/connection',{email,motdepasse})
        setEmail('')
        setMotdepasse('')
    }
    /*const motdepasseoublier=()=>{

    }*/

    return(
            <div className="tous">
                <div className="infoconect">
                  <p>Bienvenue sur</p>
                  <h4>SARAKA</h4>
                </div>
                <div className="connection">
                    <p className="inscrit">Vous n'avez pas de compte <Link to ='/Inscription'>inscrivez-vous</Link></p>
                    <div className="connect">
                        <h6>Informations de votre compte</h6>
                        <form  onSubmit={(e)=>verification(e)}>
                            <div className="form-floating mb-3">
                                <input 
                                    type="email"
                                    className="form-control" 
                                    id="floatingInput" 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="nom@example.com"
                                />
                                <label htmlFor="floatingInput">Addresse mail</label>
                            </div>
                            <div className="form-floating">
                                <input 
                                    type="password" 
                                    className="form-control"
                                    id="floatingPassword" 
                                    placeholder="Password"
                                    value={motdepasse}
                                    onChange={(e)=>setMotdepasse(e.target.value)}
                                 />
                                <label htmlFor="floatingPassword">Mot de passe</label>
                            </div>
                            <div className="col-12">
                                <button 
                                    type="submit" 
                                    className="btn btn-light"
                                >
                                    Envoyer</button>
                            </div>
                            <Link>Mot de passe oublier?</Link>
                        </form>
                    </div>
                </div>
            </div>
      )
  }

