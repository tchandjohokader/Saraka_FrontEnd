import { Menu, Footer } from "../components/Menu_Foot";
import VueOng from "../components/cartes/carte";
import {Vue,Nous,Imageaccueil,Imagedefond} from "../components/vue_ong";

export default function Pageaccueil (){
    return(
        <div>
            <Menu/> 
            <Imagedefond />          
            <Imageaccueil/>
            <Vue/>
            <h3 style={{ transform: 'translateY(40px)' ,marginLeft:'50px',padding:'20px',fontFamily: 'sans-serif'}}>Où donner maintenant</h3>
            <VueOng list={3} />
            <Nous/>
            <Footer/>                
        </div>
    )
}