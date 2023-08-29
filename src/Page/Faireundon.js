import React from "react";
import { Menu, Footer } from "../composant/Menu_Foot";
import { Recherche, VueOngs } from "../composant/ong"

function Faireundon(){
        return(
            <div>
                <Menu/>
                <Recherche/>
                <VueOngs/>
                <Footer/> 
            </div>
        )
}

export default Faireundon