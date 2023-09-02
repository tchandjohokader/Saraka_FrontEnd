import React, {useState,useEffect } from 'react';
import './Vue_Ong.css'
import { infodon} from '../Data';
import Boutonaction from './boutonaction/boutonaction';




function Vue (){
  const [isVisible, setIsVisible] = useState(false);
  const affichage = (nombre, id) => {
    let element = document.querySelector(`#${id}`);
    let cpt = 0
    var delta = Math.ceil((1 * 1000) / nombre);
    function countdown() {
      element.innerHTML = ++cpt;
      if( cpt < nombre ) { 
         setTimeout(countdown, delta);
      }
    }
    setTimeout(countdown, delta);
  };
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
          { threshold: 0.4 } // Exemple de ratio de visibilité (50%)
        );
    
        const target = document.querySelector('.Vue'); 
        observer.observe(target);
            
        // Nettoyez l'observateur lorsque le composant est démonté
      }, );



  return(
    <div className='Vue listeong'>
        <div className="vue1"><h3 id='vue'>{isVisible? affichage(infodon.vue,'vue') : '0'}</h3><h2>Visite</h2></div>
        <div className="vue1"><h3 id='ong'>{isVisible? affichage(infodon.ong,'ong') : '0'}</h3><h2>ONG</h2></div>
        <div className="vue1"><h3 id='don'>{isVisible? affichage(infodon.don,'don') : '0'}</h3><h2>Don</h2></div>
    </div>
)
}

function Nous (){
  return(
    <div className='Nous'>
    <div style={{display:'flex' , backgroundColor:'#f4fafb'}}>
    <div className='mondemeuilleur'>
        <img  src="./IMAGE/fond6.jpg" className='imgemondemeuilleur'/>
      </div>
      <div className='text1' style={{margin:'5% 3%'}}>
        <h1>Qui sommes-nous</h1>
        <h2 style={{marginTop:'15px'}}>Saraka La Plateforme Qui Transforme des Vies par la Générosité Locale</h2>
        <p >SARAKA a pour mission de simplifier le processus de donation aux œuvres caritatives en localisant le donneur et en identifiant les associations caritatives les plus proches de lui,  offrant ainsi à ces associations un soutien matériel ou financier immédiat</p>
        <Boutonaction backgroundColor='#0b61c3' titre='Changer une vie' color='rgb(221, 235, 254)' lien='Faire_un_don'/>
      </div>
    </div>
  </div>
  )
}
function Imageaccueil (){    
  return(
      <div className='heros'>
        <div style={{display:'flex' , backgroundColor:'#f4fafb'}}>
          <div className='text1'>
            <h2 style={{marginTop:'15px'}}> Un Don pour un Monde Meilleur </h2>
            <p style={{fontSize:'1.1em'}}>En ce moment précis, vous pouvez être le héros dont quelqu'un a besoin. Offrez votre compassion, votre générosité, et votre solidarité, et transformez des vies. Votre don, qu'il s'agisse d'une pièce de monnaie, d'un billet, d'un vêtement ou d'un produit alimentaire, peut ouvrir un monde d'opportunités pour ceux qui luttent pour un avenir meilleur. Soyez la lueur d'espoir pour ceux plongés dans l'obscurité de l'incertitude, de la faim et de la maladie. Agissez dès aujourd'hui pour devenir le héros de quelqu'un.</p>
            <Boutonaction backgroundColor='#0b61c3' titre='Devenez un héros' color='rgb(221, 235, 254)' lien='Faire_un_don'/>
          </div>
          <div className='mondemeuilleur'>
            <img  src="./IMAGE/fond5.jpg" className='imgemondemeuilleur'/>
          </div>
        </div>
      </div>
  )
}
function Imagedefond() {
  useEffect(() => {
    const target = document.querySelectorAll('.invisible1');
    target.forEach(element => {
      element.classList.remove('invisible1')
      element.classList.add('visible')
    }); 
  }, );
  return(
      <div className='accueil'>
        <div className='text' >
          <h1 className={'titre invisible1'} style={{transition: '1s' }}>Agissons Ensemble </h1>
          <p className={'contenu invisible1'}style={{transition: '1.5s ease-in-out' }}> Changeons le monde ensemble , en faisant un don aujourd'hui pour un avenir meilleur.</p>
          <div className={' boutton invisible1 '} style={{transition: '2s ease-in-out' }}>
            <Boutonaction backgroundColor='transparent' lien ='Faire_un_don' titre='Aider' color='rgb(221, 235, 254)'/>
          </div>
        </div>
      </div>
  )
  
}
export {Vue,Nous,Imageaccueil,Imagedefond};