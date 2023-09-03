import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Boutonaction(props){
    const [hover,setHover]=useState(false)
    return(
        <Link to = {`/${props.lien}`} style={{
            backgroundColor: `${hover ? 'white':props.backgroundColor}`,
            border: '1px solid #0b61c3',
            //rgb(221, 235, 254)
            color: `${hover? '#0b61c3':props.color}`,
            borderRadius: '20px',
            fontFamily:'Inter',
            margin: '10px',
            padding: '5px 20px',
            fontSize: '24px',
            textDecoration: 'none',
            transition:'0.5s ease-in-out'
        }}
        onMouseEnter={()=>{
            setHover(true)
        }} 
        onMouseLeave={()=>{
            setHover(false)
        }}
        > {props.titre} </Link>
    )
}