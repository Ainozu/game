import {createSlice} from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'


export const userdataSlice=createSlice({
    name: 'userdata',
    initialState: {
        username:null
      },
      reducers: {
        login: (state,action) => {
            state.username = action.payload.username
            state.loggedIn=true
        },
        logout:(state)=>{
            state.username=null
            state.loggedIn=false
        } 
      }
    })

export function IsLoggedIn(){
    return useSelector((state)=>state.userdata.loggedIn)
}
export function GetUsername(){
    return useSelector((state)=>state.userdata.username)
}

export const {login,logout}=userdataSlice.actions

export default userdataSlice.reducer