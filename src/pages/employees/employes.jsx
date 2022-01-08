
import React, {useContext} from 'react'
import { AuthContext } from '../contexts/auth';
import exit from "../../assets/icons/exit.png"
import logo from "../../assets/img/logo.png";
import search from"../../assets/icons/search.png"
import'../vehicles/vehicles';

export default function Navbar() {
 

  const { logout, } = useContext(AuthContext);
    
    const handleLogout = () => {
      logout();
    }
 
 
return(
  <nav>

<div className='logo'>
     <img src={logo} alt='logo'></img>
     <p className='title-logo'>AutoLuby</p>
     </div>
     

      <button onClick={handleLogout} className="btn-logout">Sair
      <img src={exit} alt='exit'></img></button>

      <div className='container-card-list'>
          <h1 className='title'>Funcionários</h1>
          <div className='card-view-list'>
            <p className="subtitle">Listagem de funcionários da empresa</p>
              <input type="search"  className='searchList'/>
              <img src={search} className='img-search'></img>


            
             <ul class="pagination">

                      <li>

                        <a href="#" target="_self">Anterior</a>

                    </li>
                     <li>

                        <a href="#">1</a>

                    </li>

                    <li>

                        <a class="active">2</a>

                    </li>

                    <li>

                        <a href="#">3</a>

                    </li>

                    <li>

                        <a href="#" target="_self">Proximo</a>

                   </li>

            </ul>
       <div className='tb-div'>
      
          <table className='employer-table'>
            <thead>
                
                <tr className='employer-tr-header'>
                    <th className='center'>Nome</th>
                    <th className='center'>Email</th>
                    <th className='center'>CPF</th>
                    <th className='center'>Valor</th>
                    <th width='500'className='center' id='bio'>Bio</th>
                </tr>
            </thead>
           
            <tbody  >
                <tr className='tritem'>
                    <td>Tiago</td>
                    <td>tiago.m@mail.com</td>
                    <td>144.578.065-78</td>
                    <td>R$ 6.000,00</td>
                    <td className='bio'>Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.</td>
                

                </tr>
                <tr className='tritem'>
                    <td>Renata</td>
                    <td>renata.m@mail.com</td>
                    <td>190.578.065-37</td>
                    <td>R$ 6.000,00</td>
                    <td className='bio'>Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.</td>
                

                </tr>

                <tr className='tritem'>
                    <td>Fernando</td>
                    <td>fernando.m@mail.com</td>
                    <td>187.578.065-83</td>
                    <td>R$ 8.000,00</td>
                    <td className='bio'>Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.</td>
                

                </tr>
                <tr className='tritem'>
                    <td>Luís Arthur</td>
                    <td>luis.arthur.m@mail.com</td>
                    <td>127.578.065-67</td>
                    <td>R$ 8.000,00</td>
                    <td className='bio'>Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.</td>
                

                </tr>
                <tr className='tritem'>
                    <td>Tataina</td>
                    <td>tatiana.m@mail.com</td>
                    <td>166.578.065-49</td>
                    <td>R$ 10.000,00</td>
                    <td className='bio'>Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.</td>
                

                </tr>
                <tr className='tritem'>
                    <td>José Luiz</td>
                    <td>jose.luiz.m@mail.com</td>
                    <td>166.578.065-49</td>
                    <td>R$ 10.000,00</td>
                    <td className='bio'>Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.</td>
                

                </tr>
                <tr className='tritem'>
                    <td>Amanda</td>
                    <td>amanda.m@mail.com</td>
                    <td>166.578.065-49</td>
                    <td>R$ 10.000,00</td>
                    <td className='bio'>Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.</td>
                

                </tr>

                

              
            </tbody>
        </table>
        </div>
         
      </div>
      </div>

      
      </nav>

);
}
    