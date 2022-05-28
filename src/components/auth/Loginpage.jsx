import React,{useState} from 'react'
import {useDispatch } from 'react-redux'
import {login} from '../redux/userdataSlice'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const navigate = useNavigate();
    
    const dispatch =useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post('http://localhost/game/src/components/auth/login.php', {
            username: username,
            password: password,
            headers:{ 'Content-Type': 'application/json' },
            withCredentials:true
        })
        .then(response => { 
            console.log(response.data)
            if(response.data.status==200)
            {
            dispatch(
                login({
                    username:username,
                    loggedIn:true,
                })
                )
                setError("")
                navigate('/')
            }
            if(response.data.status==400)
            {
                setError("Hibás felhasználónév és/vagy jelszó")
            }
        })
        .catch(error => {
        });
    }

  return (
      <React.Fragment>
         <div className="grid place-items-center h-screen" >
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-red-200">
                {error!="" &&
                    <h2 className="text-red-700">
                        {error}
                    </h2>
                }
                <div className="mb-4">
                {/*<label htmlFor="username">Username:</label>*/}
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" 
                        id="username" 
                        placeholder="Felhasználónév"
                        autoComplete="off"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                {/*<label className="form-label" htmlFor="password">Password:</label>*/}
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        placeholder="Jelszó"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                <div class="flex justify-evenly items-center">
                <button type="submit" className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Belépés</button>
                </div>
                    
                </div>
                
            </form>
         </div>
         
         </React.Fragment>
  )
}

export default Loginpage