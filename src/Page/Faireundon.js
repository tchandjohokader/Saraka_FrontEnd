import React from "react";
import { Menu, Footer } from "../components/Menu_Foot";
import { Recherche, VueOngs } from "../components/ong"

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