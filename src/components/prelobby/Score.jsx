import React from 'react'
import { useEffect,useState } from 'react'
import {GetUsername} from '../redux/userdataSlice'
import axios from 'axios'


const Score = ({set}) => {
    const username= GetUsername()
    const [seconds,SetSecound]=useState()
    const [minutes,SetMinutes]=useState()


    useEffect(() => {
        axios.post('http://localhost/game/src/components/prelobby/Scores.php', {
            username:username,
            set: set,
            headers:{ 'Content-Type': 'application/json' },
        })
        .then(response => { 
            console.log(response)
            const time=response.data.score
            if(time!=undefined)
            {
                
                SetMinutes(Math.floor(time / 60))
                SetSecound(time - minutes * 60)
            }
            else
            {
                SetMinutes("N")
                SetSecound("A")
            }
        })
        .catch(error => {
            console.log("az baj")
        });
      });
  return (
    <div className="text-center">{minutes}:{seconds}</div>
  )
}

export default Score