import { Menu, Footer } from "../components/Menu_Foot";
import Cartedescriptive from "../components/carte_descriptif/carte_descriptive";
import Carte from "../components/cartes/carte";
import '../components/cartes/carte.css'
import { cartedescriptive } from "../Data";
import {Vue,Nous,Imagedefond} from "../components/vue_ong";

export default function Pageaccueil (){
    let cte0=cartedescriptive[0]
    let cte1=cartedescriptive[1]
    return(
        <div>
            <Menu/> 
            <Imagedefond />          
            <Cartedescriptive titre ={`${cte0.titre}`} text={`${cte0.text}`} infobouton={`${cte0.infobouton}`} image={`${cte0.image}`}/>
            <h3 style={{ transform: 'translateY(40px)' ,marginLeft:'50px',padding:'20px',fontFamily: 'sans-serif'}}>Où donner maintenant</h3>
            <Carte list={3} />
            <Vue/>
            <Nous/>
            <Cartedescriptive titre ={`${cte1.titre}`} text={`${cte1.text}`} infobouton={`${cte1.infobouton}`} image={`${cte1.image}`}/>
            <Footer/>                
        </div>
    )
}