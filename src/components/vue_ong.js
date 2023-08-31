import React, {useState,useEffect } from 'react';
import './Vue_Ong.css'
import { list, infodon} from '../Data';
import { Link } from 'react-router-dom';

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
    <section className='Vue listeong'>
        <div className="vue1"><h3 id='vue'>{isVisible? affichage(infodon.vue,'vue') : '0'}</h3><h2>Visite</h2></div>
        <div className="vue1"><h3 id='ong'>{isVisible? affichage(infodon.ong,'ong') : '0'}</h3><h2>ONG</h2></div>
        <div className="vue1"><h3 id='don'>{isVisible? affichage(infodon.don,'don') : '0'}</h3><h2>Don</h2></div>
    </section>
)
}

function Nous (){
  return(
    <div className='apropo'>
      <img src="./IMAGE/fond3.png" alt=""/>
      <div>
      <h4>QUI SOMMES-NOUS</h4>
        <h3>Saraka la plateforme 
            qui change des vies
        </h3>
        <p> SARAKA vise à faciliter le processus des donations aux œuvres caritatives en localisant le donneur puis en recherchant les associations caritatives les plus proches de chez lui afin de leur faire bénéficier de son aide, qu'elle soit matérielle ou financière.</p>
      </div>
    </div>
  )
}
function image (){
        
        
    return(
        <section id="hero" className="hero d-flex align-items-center section-bg accue">
        <div className="container">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 data-aos="fade-up" style={{marginTop:'15px'}}>Aider</h2>
              <p data-aos="fade-up" data-aos-delay="100">En ce moment précis, quelque part en Côte d'Ivoire, il y a quelqu'un qui a besoin de vous. Votre compassion, votre générosité et votre solidarité peuvent faire une réelle différence dans la vie de ceux qui font face à l'adversité. Imaginez le pouvoir de votre don. Chaque pièce de monnaie, chaque billet, chaque vêtement, chaque produit alimentaire que vous partagerez ouvrira un océan d'opportunités pour ceux qui se battent pour un meilleur avenir. Votre don sera une source de lumière pour les personnes vivant dans l'obscurité de l'incertitude, de la faim ou de la maladie. Nous vous invitons à devenir le héros de quelqu'un aujourd'hui.</p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="/Faire_un_don" className="btn-book-a-table">Faire un don</a>
    
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img src="./IMAGE/fond.png" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300"  style={{ transform: 'translateY(20%)' }}/>
            </div>
          </div>
        </div>
      </section>
    )
}
function Imageaccueil() {
  return(
    <section>
      <div>
        <div>
          ljkhjghfdfcgvjhkbjln,bnvybctvyxtykuljihgu
        </div>
      </div>
    </section>
  )
  
}
export {Vue,Nous,Imageaccueil,VueOng};