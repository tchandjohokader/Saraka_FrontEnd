import React from "react";
import { Menu, Footer } from "../components/Menu_Foot";
import '../components/monprofile.css'
import Boutonaction from "../components/boutonaction/boutonaction";


function Monprofile () {
        return(
            <div>
                <Menu/>
                <div className="moncompte">
                    <h1 style={{fontFamily: 'Playfair Display, serif'}}>Vous n'avez pas encore fait de don</h1>
                    <Boutonaction  backgroundColor='#0b61c3' titre='Faite un don' color='rgb(221, 235, 254)' lien='Faire_un_don'/>
                </div>
                <Footer/>       
            </div>
        )
    }
export default Monprofile