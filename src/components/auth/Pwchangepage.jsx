import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { GetUsername } from '../redux/userdataSlice';

const Pwchangepage = () => {
    const [passwordold,setPasswordOld]=useState("")
    const [passwordnew,setPasswordNew]=useState("")
    const [error,setError]=useState("")
    const navigate = useNavigate()
    const username=GetUsername()


    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post('http://localhost/game/src/components/auth/passwordchange.php', {
            username: username,
            password_old: passwordold,
            password_new: passwordnew,
            headers:{ 'Content-Type': 'application/json' },
            withCredentials:true
        })
        .then(response => { 
            console.log(response.data.status)
            
            if(response.data.status==400)
            {
                setError("Hibás jelszó")
            }
            if(response.data.status==401)
            {
                setError("Az új jelszó nem lehet ugyanaz")
            }
            if(response.data.status==200)
            {
                setError("")
                window.location.href = '/';
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
                        type="password" 
                        id="password_old" 
                        placeholder="Régi jelszó"
                        autoComplete="off"
                        value={passwordold}
                        onChange={(e)=> setPasswordOld(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                {/*<label className="form-label" htmlFor="password">Password:</label>*/}
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password_new"
                        placeholder="Új jelszó"
                        value={passwordnew}
                        onChange={(e)=> setPasswordNew(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                <div className="flex justify-evenly items-center">
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Jelszó módosítása</button>
                </div>
                    
                </div>
                
            </form>
         </div>
         
         </React.Fragment>
  )
}

export default Pwchangepage