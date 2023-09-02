import React, {  useState,useEffect } from 'react';
import './carte.css'
import { list} from '../../Data';
import { Link } from 'react-router-dom';
export default function VueOng (props){ 
  const [hoveredId, setHoveredId] = useState(null)
  const [transition,setTransition]=useState(true)
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
      <div key={item.id} 
           className={`carte ${isVisible  ? 'visible' : 'invisible'} ${hoveredId === item.id ? 'cartehover' : 'cartenohover'}`}
           onMouseEnter={() =>{setTimeout(() => {
            setTransition(true)
          }, 2500);setHoveredId(item.id)}}
      onMouseLeave={()=>{setHoveredId(null);setTransition(false)}}
      onClick={()=>ong(item.id)}
      >
              <div className='info'>
              <img src={item.image} alt="" className='Imageong'/>
              <h3 className='Nomong'>{item.nom}</h3>
              <p>{item.description}</p>
              <div className='Nbrededon'>
                <Link to={`/${hoveredId}`} style={{ animation:hoveredId === item.id ? 'hover 2.5s ' : 'nohover 3s'}} className={transition && hoveredId === item.id? 'aller' : 'venir'}>Aider</Link>
              </div>
              </div>
      </div>
  ))
  }
    return(
        <div>
          <div className='oudonner'>
          </div>
            <section className='listeong' >
                {cartes()}
            </section>
        </div>
    )
}