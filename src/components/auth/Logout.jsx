import React from 'react'
import {useDispatch } from 'react-redux'
import {logout} from '../redux/userdataSlice'

function logout_f(){
  const dispatch =useDispatch();
  dispatch(
    logout()
  )
}
const Logout = () => {
  logout_f();
  return (
    <div>Logout</div>
  )
}

export default Logout