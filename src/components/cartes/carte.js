import React, {  useState,useEffect } from 'react';
import './carte.css'
import { list} from '../../Data';
import Barte from './carte1';
export default function Carte (props){ 
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        })
      },
      { threshold: 0.5 }  
    );

    const target = document.querySelector('.carte'); 
    observer.observe(target);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  const cartes =()=>{
     return list.slice(0, props.list).map((item) =>(
      <div className={`${isVisible  ? 'visible' : 'invisible'}`}>
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