import React, { useState } from 'react'
import './PlayGame.css'
import axios from "axios"

const PlayGame = () => {
    let [number,setNumber]= useState('')

    const handleChange = (event) => {
        setNumber(event.target.value);
      };
    let playHandle = ()=>{

        try {

            axios.post("http://localhost:5000/play",{
                number
            })
            .then((acc)=>{
                console.log(acc.data)
            })
            .catch((err)=>{
                console.log(err)
            })
            
        } catch (error) {
            console.log(error)
            alert("Kuch Gadbad Hai")
        }
      




    }


     const getPlaylist = async()=>{
        try {
            let res = await fetch('http://localhost:5000/playlist');
            res = await res.json()
            console.log(res)
        } catch (error) {
            console.log(error)
        }
     }
  return (
    <div className='box'>
    <div>
        <h3>Lets Check Your Luck and Win this game</h3>
        <input type='text' placeholder='Enter your Betting Number' value ={number} onChange={handleChange}  ></input>
<button type='button' className='btn'  onClick={playHandle}>play</button>
</div>
<div>

</div>
       <button type='button' className='btn2'  onClick= {getPlaylist} >Click Here for playlist</button>
    </div>
  )
}

export default PlayGame