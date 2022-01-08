import React, {useState, useContext} from "react";
import { AuthContext } from "../contexts/auth";
import logo from '../../assets/img/logo.png';
import car from '../../assets/img/car.png';
import './login.css'


const LoginPage = () => {

  const {login} = useContext(AuthContext); 

  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log ("submit", {email, password});

    login(email, password)
  }

  return (

    <div className="all">
    <div className="App">
    <div className="container">
    <div className="logo-login">
    <img src={logo} alt='logo'></img>
    <p className="p-Autoluby">AutoLuby</p>
    </div>

      <div id="login">
        <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit}>
          <img className="car"src={car} alt='logo'></img> 
        
            <span className='title'>
              <div>
            <p className="login-form-title">Bem-vindo à AutoLuby</p>
            <p className="login-form-subtitle">Faça o login para acessar sua conta.</p>
            </div>
            </span>
    
            
            <div className='wrap-input'>
            <div className='email'>
            <p>Endereço de email</p>
            
            <input  
            type="email" 
            name = "email" 
            placeholder='@email.com' 
            value={email} 
            onChange={(e) => setEmail(e.target.value) }/>

            <div className='password'>
            <div className='wrap-input'>
              
            <p>Senha</p>
            <input 
            type="password" 
            name = "password" 
            placeholder= 'senha' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>

            <div className="icons">
            </div>
            </div>
    
            </div>
            </div>
            <div className='div-remember'>
            <span> 
            <div className='btn-remender-password'>
            <div className ='checkbox'>
            <input type="checkbox" ></input>
            </div>
            <a className='remember'>Lembra minha senha</a>
            <a className='forgot'>Esqueceu a senha?</a>
            </div>
            </span>
            </div>
            </div>
            <div className='btn-form'>  
            <button type="submit" className='login-btn'>Entrar</button>
            </div>
    
            <div clasName ='dont-have-account'>
              <span className='span-dont-have-account'>Ainda não tem uma conta?</span>
              <a className='create-account'>Criar Conta</a>
            </div>
            </form>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default LoginPage;
