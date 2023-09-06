import React, {  useState } from 'react';
import './carte.css'
import Boutonaction from '../boutonaction/boutonaction.js'
export default function Barte (props){ 
  const [hoveredId, setHoveredId] = useState(null)
  const ong=(id)=>{
    localStorage.setItem('id', id-1)
  }
    return(
        <div
        key={props.id} 
        className={'carte'}
        onMouseEnter={() =>setHoveredId(props.id)}
        onMouseLeave={()=>setHoveredId(null)}
        onClick={()=>ong(props.id)}
      >
        <div className='info'>
          <img src={props.image} alt="" className='Imageong'/>
          <h3 className='Nomong'>{props.nom}</h3>
          <p>{props.description}</p>
          <div className='Nbrededon '>
          <Boutonaction backgroundColor='#0b61c3' titre='Aider' color='rgb(221, 235, 254)' lien={`${props.id}`} />
              <div className={`${hoveredId === props.id ? 'visible' : 'invisible'}`}>
                <h5 style={{color:'#0b61c3'}} > 1000 cfa</h5>
                <h6> donate </h6>
              </div>
              <div className={`${hoveredId === props.id ? 'visible' : 'invisible'}`}>
                <h5 style={{color:'#0b61c3'}}> 1000 cfa </h5>
                <h6> restan </h6>
              </div>
            </div>
        </div>
      </div>
    )
}