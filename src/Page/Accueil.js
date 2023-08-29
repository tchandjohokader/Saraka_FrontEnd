import { Menu, Footer } from "../components/Menu_Foot";
import {VueOng,Vue,Nous,Imageaccueil} from "../components/vue_ong";

function Pageaccueil (){
        return(
            <div>
                <Menu/>            
                <Imageaccueil/>
                <h3 style={{ transform: 'translateY(80px)' ,marginLeft:'50px',padding:'20px'}}>Où donner maintenant</h3>
                <VueOng list={3}/>
                <Nous/>
                <Vue/>
                <Footer/>                
            </div>
        )
}
export default Pageaccueil