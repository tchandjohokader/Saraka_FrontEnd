import { Menu, Footer } from "../components/Menu_Foot";
import Cartedescriptive from "../components/carte_descriptif/carte_descriptive";
import Carte from "../components/cartes/carte";
import '../components/cartes/carte.css'
import { cartedescriptive, infodon } from "../Data";

import { useEffect, useState } from "react";
import Boutonaction from "../components/boutonaction/boutonaction";
import Nous from "../components/vue_ong";

export default function Pageaccueil (){
    let cte0=cartedescriptive[0]
    let cte1=cartedescriptive[1]
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
        const targe = document.querySelectorAll('.invisible1');
        targe.forEach(element => {
          element.classList.remove('invisible1')
          element.classList.add('visible')
        });
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
          const target = document.querySelector('.Vue'); 
          observer.observe(target);
      }, );
    return(
        <div>
            <Menu/> 
            <div className='accueil'>
                <div className='text' >
                    <h1 className={'titre invisible1'} style={{transition: '1s' }}>Agissons Ensemble </h1>
                    <p className={'contenu invisible1'}style={{transition: '1.5s ease-in-out' }}> Changeons le monde ensemble , en faisant un don aujourd'hui pour un avenir meilleur.</p>
                    <div className={' boutton invisible1 '} style={{transition: '2s ease-in-out' }}>
                        <Boutonaction backgroundColor='transparent' lien ='Faire_un_don' titre='Aider' color='rgb(221, 235, 254)'/>
                    </div>
                </div>
            </div>         
            <Cartedescriptive titre ={`${cte0.titre}`} text={`${cte0.text}`} infobouton={`${cte0.infobouton}`} image={`${cte0.image}`}/>
            <h3 style={{ transform: 'translateY(40px)' ,marginLeft:'50px',padding:'20px',fontFamily: 'sans-serif'}}>Où donner maintenant</h3>
            <Carte list={3} />
            <div className='Vue listeong'>
                <div className="vue1"><h3 id='vue'>{isVisible? affichage(infodon.vue,'vue') : '0'}</h3><h2>Visite</h2></div>
                <div className="vue1"><h3 id='ong'>{isVisible? affichage(infodon.ong,'ong') : '0'}</h3><h2>ONG</h2></div>
                <div className="vue1"><h3 id='don'>{isVisible? affichage(infodon.don,'don') : '0'}</h3><h2>Don</h2></div>
            </div>
            <Nous/>
            <Cartedescriptive titre ={`${cte1.titre}`} text={`${cte1.text}`} infobouton={`${cte1.infobouton}`} image={`${cte1.image}`}/>
            <Footer/>                
        </div>
    )
}