import React, {  useState,useEffect } from 'react';
import './carte.css'
import { list} from '../../Data';
import Boutonaction from '../boutonaction/boutonaction.js'
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
        key={item.id} 
        className={`carte ${isVisible  ? 'visible' : 'invisible'}`}
        onMouseEnter={() =>setHoveredId(item.id)}
        onMouseLeave={()=>setHoveredId(null)}
        onClick={()=>ong(item.id)}
      >
        <div className='info'>
          <img src={item.image} alt="" className='Imageong'/>
          <h3 className='Nomong'>{item.nom}</h3>
          <p>{item.description}</p>
          <div className='Nbrededon '>
          <Boutonaction backgroundColor='#0b61c3' titre='Aider' color='rgb(221, 235, 254)' lien={`${item.id}`} />
              <div className={`${hoveredId === item.id ? 'visible' : 'invisible'}`}>
                <h5 style={{color:'#0b61c3'}} > 1000 cfa</h5>
                <h6> donate </h6>
              </div>
              <div className={`${hoveredId === item.id ? 'visible' : 'invisible'}`}>
                <h5 style={{color:'#0b61c3'}}> 1000 cfa </h5>
                <h6> restan </h6>
              </div>
            </div>
        </div>
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