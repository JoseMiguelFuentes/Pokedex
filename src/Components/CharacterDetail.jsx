
import React from 'react';
import '../css/characterDetail.css'
import pokelogo from '../Images/Pokelogo.png'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ball from '../Images/pokeball_small.png'






const CharacterDetail = ( itemId ) => {


  const [ pokemonDetail,  setPokemonDetail ] = useState({})

  const { id } = useParams()
  

  useEffect( () =>{
    axios.get( `https://pokeapi.co/api/v2/pokemon/${id}/` )
      .then( res => setPokemonDetail ( res.data ))
      .catch ( error => console.error( error.response ) )
  },[])

  const { name, types, pokeId= id, abilities, sprites, height, weight, stats } = pokemonDetail

//  console.log(pokemonDetail);
  // Converting name first letter to capital letter
  let firstLetter = name?.[0].toUpperCase()
  let rest = name?.slice( 1, name.length)

  const typesColors = (types?.[0]?.type.name === 'grass') ? 'rgba(19, 168, 19, 0.712)' : (types?.[0].type.name === 'poison') ? 'rgb(17,124,19)' : (types?.[0].type.name === 'fire') ? 'rgb(251, 108, 108)' : (types?.[0]?.type.name === 'ice') ?  'rgb(134, 210, 244)' : (types?.[0]?.type.name === 'water') ? 'rgb(112, 183, 250)' : (types?.[0]?.type.name === 'flying') ? 'rgb(91, 45, 134)' : (types?.[0]?.type.name === 'ground') ? 'rgb(70, 24, 11)' : (types?.[0]?.type.name === 'fighting') ? 'rgb(151, 63, 38)': (types?.[0]?.type.name === 'rock')? 'rgb(21 15 14)': (types?.[0]?.type.name === 'bug') ?
  'rgb(139, 195, 74)': (types?.[0]?.type.name === 'ghost') ? 'rgb(49, 51, 106)' : (types?.[0]?.type.name === 'steel') ? 'rgb(93, 115, 108)' : (types?.[0]?.type.name === 'normal') ? 'rgb(151 73 91)': (types?.[0]?.type.name === 'electric') ? 'rgba(226, 223, 45, 0.648)' : (types?.[0]?.type.name === 'psychic') ? ' rgb(206 189 37)' : (types?.[0]?.type.name === 'dragon') ? 'rgb(68, 138, 148)': (types?.[0]?.type.name === 'dark') ? 'rgb(3, 7, 6)' : (types?.[0]?.type.name === 'fairy') ? 'rgb(152, 24, 68)':'transparent'
  
  
  
  const typesColors2 = (types?.[1]?.type.name === 'grass') ? 'rgba(19, 168, 19, 0.712)' : (types?.[1]?.type.name === 'poison') ? 'rgb(17,124,19)' : (types?.[1]?.type.name === 'fire') ? 'rgb(251, 108, 108)' : (types?.[1]?.type.name === 'ice') ?  'rgb(134, 210, 244)' : (types?.[1]?.type.name === 'water') ? 'rgb(112, 183, 250)' : (types?.[1]?.type.name === 'flying') ? 'rgb(91, 45, 134)' : (types?.[1]?.type.name === 'ground') ? 'rgb(70, 24, 11)' : (types?.[1]?.type.name === 'fighting') ? 'rgb(151, 63, 38)': (types?.[1]?.type.name === 'rock')? 'rgb(21 15 14)': (types?.[1]?.type.name === 'bug') ?
  'rgb(139, 195, 74)': (types?.[1]?.type.name === 'ghost') ? 'rgb(49, 51, 106)' : (types?.[1]?.type.name === 'steel') ? 'rgb(93, 115, 108)' : (types?.[1]?.type.name === 'normal') ? 'rgb(151 73 91)': (types?.[1]?.type.name === 'electric') ? 'rgb(226, 224, 45)' : (types?.[1]?.type.name === 'psychic') ? ' rgb(206 189 37)' : (types?.[1]?.type.name === 'dragon') ? 'rgb(68, 138, 148)': (types?.[1]?.type.name === 'dark') ? 'rgb(3, 7, 6)' : (types?.[1]?.type.name === 'fairy') ? 'rgb(152, 24, 68)':'transparent'
  
  //Format to height info
  let heightStr, firstHText, restHText, weightStr, firstWText, restWText
  

    heightStr = height?.toString()
    if( heightStr?.length === 1 ){
      firstHText = '0'
      restHText =  heightStr?.[heightStr.length -1]
    }else{
      firstHText = heightStr?.slice(0, heightStr?.length -1 )
      restHText =  heightStr?.[heightStr.length -1]
    }
  //Format to Weight info
   weightStr = weight?.toString()
   firstWText = weightStr?.slice(0, weightStr?.length -1 )
   restWText = weightStr?.[weightStr.length -1]
  
   const Attack = stats?.[1].base_stat * (100/ 150)
   const speed = stats?.[5].base_stat * (100/ 150)
   const defense = stats?.[2].base_stat * (100/ 150)
   const hp = stats?.[0].base_stat * (100/ 150)
  
  

  return (
    <div style={{background: typesColors}}>
      <article className='ball-box'>
        <img id='ball' src={ball} alt="ball" />
      </article>
      <header>
      <img className='pokelogo' src={pokelogo} alt="Pokelogo" />
      </header>
      <article className='card__main'>
        <img className='pokemon'
        src={sprites?.other['official-artwork'].front_default}
        />
        <div className='poke__data'>
          <div className='height' >
            <h3 className='height-data'>{`${firstHText},${restHText} m`}</h3>
            <p>Height</p>
          </div>
          <div className='weight'>
            <h3 className='weight-data'>{`${firstWText},${restWText} kg`}</h3>
            <p>Weight</p>
          </div>
          <div className='name'>
            <h3>{firstLetter?.concat(rest)}</h3>
          </div>
          <div className='id'> <b>N° </b>{pokeId}</div>
        </div>
      </article>
      <div className='abilities' >
        <h3 >Abilities</h3>
         {
          abilities?.map(element => (
            <div key={element.ability.name}>
              <p style={{ boxShadow: `0px 0px 8px 1px ${typesColors2}`}}
              className='ability__name'>{element.ability.name}</p>
              
            </div>   
          )
        )}
       
      </div>
        
      <div className='types'>
        <h3>Types</h3>
        <p className='typeName'
        style={{background: typesColors}  }>
           {types?.[0].type.name}</p>

        <p className='typeName'
          style={{background: typesColors2}}
        > {types?.[1]?.type.name && types?.[1]?.type.name}</p> 
      </div>

      <div className='baseStats pt-4'>
        <h3 className='monospace'>Base stats</h3>
        
        <div className="progress ">
        
          <div className="progress-bar  cormorant" role="progressbar" aria-label="Hp" style= {{width: `${hp}%`}} aria-valuenow={hp} aria-valuemin="0" aria-valuemax="150">
          <p className='cormorant stat_name'>Hp:</p>
          <span className='orbitron  number'>{stats?.[5].base_stat}/150</span>
          </div>
        </div>

        <div className="progress mt-2">
        
          <div className="progress-bar " role="progressbar" aria-label="Attack" 
          style= {{width: `${Attack}%`}} aria-valuenow={Attack} aria-valuemin="0" aria-valuemax="150">
            <p className='cormorant stat_name'>Attack:</p>
            <span className='orbitron number'>{stats?.[1].base_stat}/150</span>
          </div>
        </div>
          
        <div className="progress mt-2">
        
          <div className="progress-bar" role="progressbar" aria-label="Defense" style={{width: `${defense}%`}} aria-valuenow={defense} aria-valuemin="0" aria-valuemax="150">
          <p className='cormorant stat_name'>Defense:</p>
          <span className='orbitron number'>{stats?.[2].base_stat}/150</span>
          </div>
        </div>

        <div className="progress mt-2">
          
          <div className="progress-bar" role="progressbar" aria-label="Speed"  style={{width: `${speed}%`}} aria-valuenow={speed} aria-valuemin="0" aria-valuemax="150">
          <span className='cormorant stat_name'>Speed:</span>
          <span className='orbitron number'>{stats?.[5].base_stat}/150</span>
          </div>
        </div>
      </div>
      
      
    </div>
   
  )
}

export default CharacterDetail


