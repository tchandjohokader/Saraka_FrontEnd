import React from "react";
import { Menu, Footer } from "../composant/Menu_Foot";
import '../composant/monprofile.css'


function Monprofile () {
        return(
            <div>
                <Menu/>
                <div className="moncompte">
                    <h1 style={{fontFamily: 'Playfair Display, serif'}}>Vous n'avez pas encore fait de don</h1>
                    <a href="#book-a-table" >Faite un don</a>
                </div>
                <Footer/> 

                
                
                
            </div>
        )
    }
export default Monprofile