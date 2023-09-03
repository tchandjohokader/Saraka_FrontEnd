import Boutonaction from "../boutonaction/boutonaction";
import './carte_descriptive.css'

export default function Cartedescriptive (props){    
    return(
        <div className='heros'>
          <div style={{display:'flex' , backgroundColor:'#f4fafb'}}>
            <div className='text1'>
              <h2 style={{marginTop:'15px'}}> {props.titre} </h2>
              <p style={{fontSize:'1.1em'}}>{props.text}</p>
              <Boutonaction backgroundColor='#0b61c3' titre={props.infobouton} color='rgb(221, 235, 254)' lien='Faire_un_don'/>
            </div>
            <div className='mondemeuilleur'>
              <img  src={props.image} className='imgemondemeuilleur'alt=''/>
            </div>
          </div>
        </div>
    )
  }