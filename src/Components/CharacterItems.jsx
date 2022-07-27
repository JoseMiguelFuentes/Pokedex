
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/characterItems.css'
import ball2 from '../Images/pokeball_small.png'


const CharacterItems = ({url}) => {
  const navigate = useNavigate()
  
  const [ pokemon,  setPokemon ] = useState({})
  const {types} = pokemon

  useEffect( () =>{
    axios.get( url )
      .then( res => setPokemon ( res.data ))
      .catch ( error => console.error( error.response ) )
  },[])



  // console.log( pokemon)
  // Converting name first letter to capital letter
  let firstLetter = pokemon.name?.[0].toUpperCase()
  let rest = pokemon.name?.slice( 1, pokemon.name.length < 16 ? pokemon.name.length : 16)

  //setting color for the card
  const typesColors = (types?.[0]?.type.name === 'grass') ? 'rgba(19, 168, 19, 0.712)' : (types?.[0]?.type.name === 'poison') ? 'rgb(17,124,19)' : (types?.[0]?.type.name === 'fire') ? 'rgb(251, 108, 108)' : (types?.[0]?.type.name === 'ice') ?  'rgb(134, 210, 244)' : (types?.[0]?.type.name === 'water') ? 'rgb(112, 183, 250)' : (types?.[0]?.type.name === 'flying') ? 'rgb(91, 45, 134)' : (types?.[0]?.type.name === 'ground') ? 'rgb(70, 24, 11)' : (types?.[0]?.type.name === 'fighting') ? 'rgb(151, 63, 38)': (types?.[0]?.type.name === 'rock')? 'rgb(21 15 14)': (types?.[0]?.type.name === 'bug') ?
  'rgb(139, 195, 74)': (types?.[0]?.type.name === 'ghost') ? 'rgb(49, 51, 106)' : (types?.[0]?.type.name === 'steel') ? 'rgb(93, 115, 108)' : (types?.[0]?.type.name === 'normal') ? 'rgb(151 73 91)': (types?.[0]?.type.name === 'electric') ? 'rgb(226, 224, 45)' : (types?.[0]?.type.name === 'psychic') ? ' rgb(206 189 37)' : (types?.[0]?.type.name === 'dragon') ? 'rgb(68, 138, 148)': (types?.[0]?.type.name === 'dark') ? 'rgb(3, 7, 6)' : (types?.[0]?.type.name === 'fairy') ? 'rgb(152, 24, 68)':'transparent'

  








  return (
    <div>
      <article className='ball-box2'>
        <img id='ball' src={ball2} alt="ball" />
      </article>
      {
        
          <article key={pokemon.name} className='pokemonCard'
            style={{ background: typesColors}}
           onClick={()=> navigate( `/pokedex/${pokemon.id}` )}
           >
            <h3>{firstLetter?.concat(rest)}</h3>
            <div className='front_default-box'>
            <img src={pokemon.sprites?.other.dream_world.front_default !==  null ? pokemon.sprites?.other.dream_world.front_default: pokemon.sprites?.front_default} id='front_default'/>
            </div>
            <p>Type: { pokemon.types?.[0].type.name}{pokemon.types?.length == 2 ? ', ' : ''}{pokemon.types?.length == 2 && pokemon.types[1].type.name}.</p>
            <h4>Base stats</h4>
            <p>Hp: <span className='orbitron'>{pokemon.stats?.[0].base_stat}</span></p>
            <p>Attack: <span className='orbitron'>{pokemon.stats?.[1].base_stat}</span></p>
            <p>Defense: <span className='orbitron'>{pokemon.stats?.[2].base_stat}</span></p>
            <p>Speed: <span className='orbitron'>{pokemon.stats?.[5].base_stat}</span></p>
          </article>
      }
      
      
    </div>
  );
};

export default CharacterItems;






// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../css/characterItems.css'
// import ball2 from '../Images/pokeball_small.png'


// const CharacterItems = ({url}) => {
//   const navigate = useNavigate()

//   const [ pokemon,  setPokemon ] = useState({})
//   const {types} = pokemon

//   useEffect( () =>{
//     axios.get( url )
//       .then( res => setPokemon ( res.data ))
//       .catch ( error => console.error( error.response ) )
//   },[])



//   // console.log( pokemon)
//   // Converting name first letter to capital letter
//   let firstLetter = pokemon.name?.[0].toUpperCase()
//   let rest = pokemon.name?.slice( 1, pokemon.name.length < 16 ? pokemon.name.length : 16)

//   //setting color for the card
//   const typesColors = (types?.[0]?.type.name === 'grass') ? 'rgba(19, 168, 19, 0.712)' : (types?.[0]?.type.name === 'poison') ? 'rgb(17,124,19)' : (types?.[0]?.type.name === 'fire') ? 'rgb(251, 108, 108)' : (types?.[0]?.type.name === 'ice') ?  'rgb(134, 210, 244)' : (types?.[0]?.type.name === 'water') ? 'rgb(112, 183, 250)' : (types?.[0]?.type.name === 'flying') ? 'rgb(91, 45, 134)' : (types?.[0]?.type.name === 'ground') ? 'rgb(70, 24, 11)' : (types?.[0]?.type.name === 'fighting') ? 'rgb(151, 63, 38)': (types?.[0]?.type.name === 'rock')? 'rgb(21 15 14)': (types?.[0]?.type.name === 'bug') ?
//   'rgb(139, 195, 74)': (types?.[0]?.type.name === 'ghost') ? 'rgb(49, 51, 106)' : (types?.[0]?.type.name === 'steel') ? 'rgb(93, 115, 108)' : (types?.[0]?.type.name === 'normal') ? 'rgb(151 73 91)': (types?.[0]?.type.name === 'electric') ? 'rgb(226, 224, 45)' : (types?.[0]?.type.name === 'psychic') ? ' rgb(206 189 37)' : (types?.[0]?.type.name === 'dragon') ? 'rgb(68, 138, 148)': (types?.[0]?.type.name === 'dark') ? 'rgb(3, 7, 6)' : (types?.[0]?.type.name === 'fairy') ? 'rgb(152, 24, 68)':'transparent'

  










//   return (
//     <div>
//       <article className='ball-box2'>
//         <img id='ball' src={ball2} alt="ball" />
//       </article>
//       {
        
//           <article key={pokemon.name} className='pokemonCard'
//             style={{ background: typesColors}}
//            onClick={()=> navigate( `/pokedex/${pokemon.id}` )}
//            >
//             <h3>{firstLetter?.concat(rest)}</h3>
//             <div className='front_default-box'>
//             <img src={pokemon.sprites?.other.dream_world.front_default !==  null ? pokemon.sprites?.other.dream_world.front_default: pokemon.sprites?.front_default} id='front_default'/>
//             </div>
//             <p>Type: { pokemon.types?.[0].type.name}{pokemon.types?.length == 2 ? ', ' : ''}{pokemon.types?.length == 2 && pokemon.types[1].type.name}.</p>
//             <h4>Base stats</h4>
//             <p>Hp: <span className='orbitron'>{pokemon.stats?.[0].base_stat}</span></p>
//             <p>Attack: <span className='orbitron'>{pokemon.stats?.[1].base_stat}</span></p>
//             <p>Defense: <span className='orbitron'>{pokemon.stats?.[2].base_stat}</span></p>
//             <p>Speed: <span className='orbitron'>{pokemon.stats?.[5].base_stat}</span></p>
//           </article>
//       }
      
//     </div>
//   );
// };

// export default CharacterItems;