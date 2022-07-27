
import React from 'react';
import buttonPokeball from '../Images/pokeball-3.png'
import '../css/pokedex.css'

//Librerias
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom'; 

//Hooks
import { useState, useEffect } from 'react';
//Components
import CharacterItems from './CharacterItems';
//Actions
import { getIdName } from '../store/slices/idName.slice';



const Pokedex = ( ) => {
  const [element, setElement ]= useState('')

  const user  = useSelector(state => state.user)
  const [characters, setCharacters ] = useState([])
  const [ types, setTypes ] = useState([])

  const { register, handleSubmit, reset } = useForm({});
  let defaultValues = {
    pokemonName: ''
  }
   
  
  const navigate = useNavigate()


  const find = data => {
    alert(data.pokemonName);
    navigate ( `/pokedex/${data.pokemonName.toLowerCase().trim()}` )
  }


  useEffect( ()=>{
  axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"`)
    .then( res => setCharacters ( res.data.results ))

  axios.get(`https://pokeapi.co/api/v2/type/`)
    .then( res => setTypes ( res.data.results ))
},[])

const typesFilter = e => {
  axios.get( e.target.value )
  .then( res =>  res.data.results ? setCharacters(res.data.results) : setCharacters(res.data.pokemon))

}

const getAllPokemons = ()=>{
  axios.get(`https://pokeapi.co/api/v2/pokemon`)
    .then( res => setCharacters ( res.data.results ))
}




const [page, setPage] = useState(1);
const lastIndex = page * 12;
const firstIndex = lastIndex - 12;
const paginated = characters.slice(firstIndex, lastIndex);
const lastPage = Math.ceil(characters.length / 12);
const numbers = []; // [1, 2, 3, 4]
for (let i = 1; i <= lastPage; i++) {
  numbers.push(i);
}

const machine  =  ( text, time, element)=>{
  let textArray = text.split('')
  let index = 0
  let write = setInterval(() => {
    if (element.length < textArray.length) {
    setElement(element += textArray[index] )
    index++
    }
  }, time);
}
  const greeting =`Welcome ${user}!, here you can find your favorite pokemon.`
  useEffect(()=>{
      machine( greeting, 155, element)
  },[])

// const classButton = 

// console.log(pokemonFiltered)
// console.log(paginated)
// console.log(types)

  return (
    <div className='pokedex'>
      <main  className='pokeGreet container-sm'>
        <h1 className='cormorant'>Pokedex</h1>
        <p style={{transition: 'all 0.5s ease'}} >{element}</p>
      
        <form onSubmit={handleSubmit( find )} className='form2'>
          <input id='input2' type="text" {...register( 'pokemonName' )} placeholder='Search a Pokemon'/>
        
        <button className='buttonPokeball'>
        
          <p className='pokebox'><img src={buttonPokeball} alt="pokeball"  className='pokeball'/></p></button>
        </form>
       
        <select onChange={typesFilter}>
          <option value={ 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'    
            }>All Pokemons</option>
          {
            types.map(type => (
              <option  key={type.url}
              value={type.url}
              >{type.name}</option>
              
            ) )
          }
          </select>
          </main>
      <ul className='items-box'>
      {
        paginated.map( item => 
          <li key={item.name ?  item.name : item.pokemon.name} >
            <CharacterItems url={item.url ? item.url : item.pokemon.url}/>
          </li>
           )
      }
      </ul>
      <div className='pages-box'>
        <button className='btn-main' type='button' onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previuos
        </button>
        
        {numbers.map((number) => (
          <div key={number} className='page-number'  onClick={() => setPage(number)
          }>{number}</div>
        ))}

        <button className='btn-main' onClick={() => setPage(page + 1)} disabled={page === lastPage}>
          Next
        </button>
      </div>
      
    </div>
    
  );
};

export default Pokedex;
