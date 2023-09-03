import { useEffect, useState } from "react";
import Boutonaction from "../boutonaction/boutonaction";
import './carte_descriptive.css'

export default function Cartedescriptive (props){   
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } 
    );

    const target = document.querySelector('.heros'); 
      observer.observe(target);
  }); 
    return(
        <div className='heros'>
          <div style={{display:'flex' , backgroundColor:'#f4fafb'}}>
            <div className='text1'>
              <h2 style={{marginTop:'15px'}} className={`${isVisible ? 'visible':'invisible2'}`} > {props.titre} </h2>
              <p style={{fontSize:'1.1em',transition: '2s ease-in-out'}} className={`${isVisible ? 'visible':'invisible2'}`}>{props.text}</p>
              <div style={{transition: '3s ease-in-out'}} className={`${isVisible ? 'visible':'invisible2'}`}>
                <Boutonaction backgroundColor='#0b61c3' titre={props.infobouton} color='rgb(221, 235, 254)' lien='Faire_un_don'/>
              </div>
            </div>
            <div className='mondemeuilleur'>
              <img  src={props.image} className='imgemondemeuilleur'alt=''/>
            </div>
          </div>
        </div>
    )
  }