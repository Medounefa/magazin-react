import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css"
// import {currentUser,setCurrentUser} from './firebase';

const LoginPage = () => {

//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()
//     let navigate = useNavigate()

//   const submit =(e)=>{
//     e.preventDefault(); // Stop the form from submitting

//     let newUser = {
//         email:email,
//         password:password
//     }
//     // setCurrentUser(newUser)

//     // setTimeout(() => {
//     //     if(currentUser.email === newUser.email){
//     //         navigate("/home")
//     //     }
//     // }, 2000);
// }

  return (
    <div className='container forme'>
      <div className='row '>
        <h2>Connectez-vous</h2>
        <form>
          <div className='form-group'>
            <input type="text" name="email" placeholder="Entrer votre mail" className="form-control" ></input>
          </div><br />
          <div className='form-group'>
            <input type="password" name="password" placeholder="Entrer votre mot de passe" className="form-control" ></input>
          </div><br />
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>Se connectez</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage