import React from 'react-dom';
import '../stylesheets/Actor.css';

function Actors(props) {
   return (
    <div className='container-actor'>
      <img className='photo-actor' src={require(`./images/actor-${props.picture}.jpeg`)} alt='Villanelle'/>
      <div className='container-text'>
        <p className='nombre-actor'>{props.name}</p>
        <p className='description-actor'>"{props.description}"</p>
      </div>
    </div>
   ); 
}

export default Actors;