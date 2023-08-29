<<<<<<< HEAD
import { Menu, Footer } from "../composant/Menu_Foot";
=======
import { Menu, Footer } from "../components/Menu_Foot";
>>>>>>> bbae662877e60b4404fb819f4b3a54ca05fa65ee
import {VueOng,Vue,Nous,Imageaccueil} from "../components/vue_ong";

export default function Pageaccueil (){
    return(
        <div>
            <Menu/>            
            <Imageaccueil/>
            <h3 style={{ transform: 'translateY(80px)' ,marginLeft:'50px',padding:'20px'}}>Où donner maintenant</h3>
            <VueOng list={3} />
            <Nous/>
            <Vue/>
            <Footer/>                
        </div>
    )
}