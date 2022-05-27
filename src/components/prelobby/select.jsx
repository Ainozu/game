import React from 'react'
import {useState} from 'react'
import Card from '../common/Cardfront'
import Display from './display'
import { Link } from 'react-router-dom'
import { GetUsername } from '../redux/userdataSlice'
import {useDispatch } from 'react-redux'
import {logout} from '../redux/userdataSlice'
import Loginpage from '../auth/Loginpage'
import Registerpage from '../auth/Registerpage'
import Popup from 'reactjs-popup'
import Pwchangepage from '../auth/Pwchangepage'




const Select = () => {
  const dispatch =useDispatch();
  const [deck, setDeck]=useState("set1");
  const username= GetUsername();
  function Logout(){
    dispatch(logout())}
  return (
    
    <React.Fragment>
      {username==null ?
        
      /*<Link to="/login">
        <div className="absolute top-5 right-2 h-12 w-40 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Belépés</div>
      </Link>*/
      <React.Fragment>
        <Popup modal
        nested
        trigger={<div className="absolute top-5 right-40 h-12 w-25 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full" >Belépés</div>} position="right center">
          <Loginpage/>
        </Popup>
        <Popup modal
        nested
        trigger={<div className="absolute top-5 right-5 h-12 w-25 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" >Regisztráció</div>} position="right center">
          <Registerpage/>
        </Popup>
      </React.Fragment>
      
      :
      <React.Fragment>
        <div className="relative h-20vh w-100vw">
        <div className="absolute right-0">Hello, {username}!</div>
        
        
        
        <Popup modal
        nested
        trigger={<div className="absolute top-9 right-40 h-9 w-22 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4  inline-block" >Jelszócsere</div>} position="right center">
          <Pwchangepage/>
        </Popup>
        <button className="absolute top-9 right-0 inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={Logout}>
          Kilépés
        </button>
      </div>

      </React.Fragment>
      }
      
      
      <div className="grid grid-cols-4 gap-4 p-20">
        <Link to="/g1">
          <div onMouseEnter={() => setDeck("set1")}><Card img="../imgs/set1/1.png" hover="hover:border-red-600 "/></div>
          </Link>
        <Link to="/g2">
          <div onMouseEnter={() => setDeck("set2")}><Card img="../imgs/set2/1.png" hover="hover:border-red-600 "/></div>
        </Link>
        <Link to="/g3">
          <div onMouseEnter={() => setDeck("set3")}><Card img="../imgs/set3/1.png" hover="hover:border-red-600 "/></div>
        </Link>
        <Link to="/g4">
          <div onMouseEnter={() => setDeck("set4")}><Card img="../imgs/set4/1.png" hover="hover:border-red-600 "/></div>
        </Link>

      </div>
      <Display set={deck}/>
    </React.Fragment>
  )
}

export default Select