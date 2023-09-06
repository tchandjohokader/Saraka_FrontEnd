import React from "react";
import { Link } from "react-router-dom";
import '../components/connection.css'
import { useState } from "react";
import axios from 'axios';
import Boutonaction from "../components/boutonaction/boutonaction";
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
            <div style={{display: 'flex'}} >
                <div className="mondemeuilleur">
                    <img src="./IMAGE/5098293.jpg"className='imgemondemeuilleur' alt=""/>
                </div>
                <div className="connection">
                    <div className="connect">
                        <h3 style={{color:'#0b61c3'}}>Connectez-Vous</h3>
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
                            <div className="col-12" style={{marginLeft:'34%',width:'35%'}}>
                                <Boutonaction  backgroundColor='#0b61c3' titre='Connection' color='rgb(221, 235, 254)' lien='Faire_un_don'/>
                            </div>
                            <Link>Mot de passe oublier?</Link>
                            <p className="inscrit">Vous n'avez pas de compte <Link to ='/Inscription'>inscrivez-vous</Link></p>
                        </form>
                    </div>
                </div>
            </div>
      )
  }

