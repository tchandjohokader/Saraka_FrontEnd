import React from 'react';
import { Link } from 'react-router-dom';

export default function Boutonaction(props){
    return(
        <Link to = {`/${props.direction}`} className='boutonaction' style={{
            backgroundColor: `${props.backgroundColor !==undefined ? 'props.backgroundColor':'transparent'}`,
            border: '2px solid #0b61c3',
            color: `${props.color !==undefined? 'props.color':'rgb(221, 235, 254)'}`,
            borderRadius: '20px',
            margin: '10px',
            padding: '0px 15px',
            fontSize: '24px',
            textDecoration: 'none'
        }}> Aider </Link>
    )
}