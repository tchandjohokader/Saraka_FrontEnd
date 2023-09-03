import React from "react";
import { Footer, Menu } from "../components/Menu_Foot";
import Nous from "../components/vue_ong";
import Cartedescriptive from "../components/carte_descriptif/carte_descriptive";
import { cartedescriptive } from "../Data";



function Apropos (){
        let cte1=cartedescriptive[1]
        return(
            <div>
                <Menu/>
                <div style={{marginBottom:'100px'}}></div>
                <Nous/>
                <Cartedescriptive titre ={`${cte1.titre}`} text={`${cte1.text}`} infobouton={`${cte1.infobouton}`} image={`${cte1.image}`}/>
                <Footer/>

                
                
                
            </div>
        )
}
export default Apropos