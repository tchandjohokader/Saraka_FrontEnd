import React, {  useState,useEffect } from 'react';
import './carte.css'
import { list} from '../../Data';
import Boutonaction from '../boutonaction/boutonaction.js'
import Barte from './carte1';
export default function Carte (props){ 
  const [hoveredId, setHoveredId] = useState(null)
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            
            setIsVisible(true);
          } else {
            //setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }  
    );

    const target = document.querySelector('.carte'); 
    observer.observe(target);
    

    // Nettoyez l'observateur lorsque le composant est démonté
    return () => {
      observer.disconnect();
    };
  }, []);

  const ong=(id)=>{
    localStorage.setItem('id', id-1)
  }
  const d=props.list
  const cartes =()=>{
     return list.slice(0, d).map((item) =>(
      <div
        className={`carte ${isVisible  ? 'visible' : 'invisible'}`}
      >
        <Barte id={item.id} image={item.image} nom={item.nom} description={item.description} />
      </div>
  ))
  }
    return(
        <div>
            <section className='listeong' >
                {cartes()}
            </section>
        </div>
    )
}