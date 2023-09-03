import React, { useEffect, useState } from 'react';
import './presentation.css'
import Boutonaction from '../boutonaction/boutonaction';


export default function Presentation () {
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

    const target = document.querySelector('.Nous'); 
      observer.observe(target);
  }); 
  return(
    <div className='Nous'>
    <div style={{display:'flex' , backgroundColor:'#f4fafb'}}>
    <div className='mondemeuilleur'>
        <img  src="./IMAGE/fond6.jpg" className='imgemondemeuilleur' alt=''/>
      </div>
      <div className='text1' style={{margin:'5% 3%'}}>
        <h1 style={{transition: '1s ease-in-out'}} className={`${isVisible ? 'visible':'invisible2'}`}>Qui sommes-nous</h1>
        <h2 style={{marginTop:'15px',transition: '1.5s ease-in-out'}} className={`${isVisible ? 'visible':'invisible2'}`}>Saraka La Plateforme Qui Transforme des Vies par la Générosité Locale</h2>
        <p style={{transition: '2s ease-in-out'}} className={`${isVisible ? 'visible':'invisible2'}`}>SARAKA a pour mission de simplifier le processus de donation aux œuvres caritatives en localisant le donneur et en identifiant les associations caritatives les plus proches de lui,  offrant ainsi à ces associations un soutien matériel ou financier immédiat</p>
        <div style={{transition: '2.5s ease-in-out'}} className={`${isVisible ? 'visible':'invisible2'}`}>
          <Boutonaction backgroundColor='#0b61c3' titre='Changer une vie' color='rgb(221, 235, 254)' lien='Faire_un_don'/>
        </div>
      </div>
    </div>
  </div>
  )
}
