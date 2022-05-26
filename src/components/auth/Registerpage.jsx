import React,{useState} from 'react'
import axios from 'axios'


const Registerpage = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")


    const handleSubmit = (e)=>{
        e.preventDefault();

     
        
        axios.post('http://localhost/game/src/components/auth/register.php', {
            username: username,
            password: password,
            headers:{ 'Content-Type': 'application/json' },
            withCredentials:true
        })
        .then(response => { 
            console.log(response.data)
           /*switch(response.status){
               case 200:console.log("W"); break;
               case 400: console.log("már van"); break;
            }*/
           
        })
        .catch(error => {
            //console.log(error.response)
            //console.log(error)
            if (!error?.response) {
               // console.log('No Server Response');
            } else if (error.response?.status === 400) {
                //console.log('Missing Username or Password');
            } else if (error.response?.status === 401) {
               // console.log('Unauthorized');
            } else {
               // console.log('Login Failed');
            }
        });
    }

  return (
      <React.Fragment>
         <div className="grid place-items-center h-screen" >
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-red-200">
                <div className="mb-4">
                {/*<label htmlFor="username">Username:</label>*/}
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" 
                        id="username" 
                        placeholder="Username"
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
                        placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <button type="submit" className="btn btn-primary btn-block ">Sign in</button>
                </div>
            </form>
         </div>
         
         </React.Fragment>
  )
}

export default Registerpage