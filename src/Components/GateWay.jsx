
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getName } from '../store/slices/userName.slice';
import charizard from '../Images/charizard.gif'
import '../css/gateWay.css'
import pokeball from '../Images/Button_pokeball.png'
import ball from '../Images/pokeball_small.png'


const GateWay = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm({});
  let defaultValues = {
    userName: ''
  }

  const submit = data => {
    console.log(data.userName);
    reset(defaultValues)
    let firstLetter = data.userName[0].toUpperCase()
    let rest = data.userName.slice( 1, data.userName.length)
    dispatch( getName( firstLetter + rest ) )
    navigate("/pokedex")
  }


  return (
    <div className='firstPage'>
      <article className='ball-box'>
        <img id='ball' src={ball} alt="ball" />
      </article>
      <div className='card'>
        <img className='charizard' src={charizard} alt="charizard" />
        
          
          <form className='form1' onSubmit={handleSubmit(submit)} >
            <h2 className='trainer'>Hello Trainer!</h2>
            <h3 className='askName'>Give me your name to start</h3>
            <div className='box-form'>
              <input type="text"
                className='first-input'
                id="gateWay"
                placeholder='Your name..'
                {...register("userName")}
                />
              <button className='first-button'><img src={pokeball} alt="poke-button"  className='pokeballGW'/></button>
            </div>
          </form>
        
       
      </div>
    </div>
  );
};

export default GateWay;