import React from "react";
import { Footer, Menu } from "../composant/Menu_Foot";
import { Nous } from "../composant/vue_ong";



function Apropos (){
        return(
            <div>
                <Menu/>
                <div style={{marginBottom:'100px'}}></div>
                <Nous/>
                <Footer/>

                
                
                
            </div>
        )
}
export default Apropos