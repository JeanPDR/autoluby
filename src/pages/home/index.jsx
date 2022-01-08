import React, {useContext} from 'react'
import { AuthContext } from '../contexts/auth';
import exit from "../../assets/icons/exit.png"
import logo from "../../assets/img/logo.png";
import Foto1 from "../../assets/img/Card_Img1.png";
import Foto2 from "../../assets/img/Card-img2.png";
import Foto3 from "../../assets/img/Card-img3.png";
import { useNavigate } from 'react-router-dom';
import'./Home.css';

export default function Navbar() {
 

  const { logout, } = useContext(AuthContext);
    
    const handleLogout = () => {
      logout();
    }
   const navigate = useNavigate();
 
return(
  <nav>

    
    <div className='logo'>
     <img src={logo} alt='logo'></img>
     <p className='title-logo'>AutoLuby</p>
     </div>
     

      <button onClick={handleLogout} className="btn-logout">Sair
      <img src={exit} alt='exit'></img></button>

      <div className='container-card'>

      <section className='Card1'>
      <div className='container-card-view1'>
      <section className='card-view1'>
      <section className='card-title'>
      
      <h1>Veículos reservados e vendidos </h1>
         <h2 className='subtitle'>Veículos reservados e vendidos por você</h2>
         </section>
         <h3>180 Veículos</h3>
         <img onClick={() =>navigate ('/vehicles')}src={Foto1} alt='Foto1'></img>
         
      </section>
           
      </div>
      </section>

      <section className='Card2'>
      <div className='container-card-view2'>
      <section className='card-view2'>
      <section className='card-title'>
      
      <h1>Listagem geral de veículos </h1>
         <h2 className='subtitle'>Listagem de veículos de toda a empresa</h2>
         </section>
         <h3>180 Veículos</h3>
         <img onClick={() =>navigate ('/allvehicles')} src={Foto2} alt='Foto2'></img>
         
      </section>
           
      </div>
      </section>

      <section className='Card3'>
      <div className='container-card-view3'>
      <section className='card-view3'> 
      <section className='card-title'>
      
      <h1>Funcionários da empresa </h1>
      
      
         <h2 className='subtitle'>Listagem de todos os funcionários da empresa</h2>
         
         </section>
         <h3 >180 Veículos</h3>
         
         <img onClick={() =>navigate ('/employees')} src={Foto3} alt='Foto3'></img>
         <section>
         </section>
      </section>
      
      </div>
      </section>


      
           
      </div>
      

     </nav>
     );
}
