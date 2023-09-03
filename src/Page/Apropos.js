import { Footer, Menu } from "../components/Menu_Foot";
import Cartedescriptive from "../components/carte_descriptif/carte_descriptive";
import { cartedescriptive } from "../Data";
import Presentation from "../components/presentation/presentation";


export default function Apropos (){
        let cte1=cartedescriptive[1]
        return(
            <div>
                <Menu/>
                <div style={{marginBottom:'100px'}}></div>
                <Presentation/>
                <Cartedescriptive titre ={`${cte1.titre}`} text={`${cte1.text}`} infobouton={`${cte1.infobouton}`} image={`${cte1.image}`}/>
                <Footer/>  
            </div>
        )
}
 