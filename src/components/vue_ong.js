import React, {useState,useEffect } from 'react';
import './Vue_Ong.css'
import { list, infodon} from '../Data';
import { Link } from 'react-router-dom';
import Boutonaction from './boutonaction/boutonaction';

function VueOng (props){ 
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
    <div >
    <div style={{display:'flex' }}>
    <div className='mondemeuilleur'>
        <img  src="./IMAGE/fond6.jpg" className='imgemondemeuilleur'/>
      </div>
      <div className='text1' style={{margin:'5% 3%'}}>
        <h1>Qui sommes-nous</h1>
        <h2 style={{marginTop:'15px'}}> Saraka la plateforme 
            qui change des vies </h2>
        <p >SARAKA vise à faciliter le processus des donations aux œuvres caritatives en localisant le donneur puis en recherchant les associations caritatives les plus proches de chez lui afin de leur faire bénéficier de son aide, qu'elle soit matérielle ou financière.</p>
        <Boutonaction backgroundColor='#0b61c3' titre='Changer une vie' color='rgb(221, 235, 254)' lien='Faire_un_don'/>
      </div>
    </div>
  </div>
  )
}
function Imageaccueil (){    
  return(
      <div >
        <div style={{display:'flex' , backgroundColor:'rgb(239, 247, 249)'}}>
          <div className='text1'>
            <h2 style={{marginTop:'15px'}}> Un Don pour un Monde Meilleur </h2>
            <p >En ce moment précis, quelque part en Côte d'Ivoire, il y a quelqu'un qui a besoin de vous. Votre compassion, votre générosité et votre solidarité peuvent faire une réelle différence dans la vie de ceux qui font face à l'adversité. Imaginez le pouvoir de votre don. Chaque pièce de monnaie, chaque billet, chaque vêtement, chaque produit alimentaire que vous partagerez ouvrira un océan d'opportunités pour ceux qui se battent pour un meilleur avenir. Votre don sera une source de lumière pour les personnes vivant dans l'obscurité de l'incertitude, de la faim ou de la maladie. Nous vous invitons à devenir le héros de quelqu'un aujourd'hui.</p>
            <Boutonaction backgroundColor='transparent' titre='Aider' color='black' lien='Faire_un_don'/>
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
export {Vue,Nous,Imageaccueil,Imagedefond,VueOng};