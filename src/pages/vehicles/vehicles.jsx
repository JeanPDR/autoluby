
import React, {useContext} from 'react'
import { AuthContext } from '../contexts/auth';
import exit from "../../assets/icons/exit.png"
import logo from "../../assets/img/logo.png";
import search from"../../assets/icons/search.png"
import'./vehicles.css';

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
          <h1 className='title'>Todos Veículos</h1>
          <div className='card-view-list'>
            <p className="subtitle">Listagem geral de veículos</p>
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
       <div className='tb-div-vehicles'>
          <table>
            <thead>
                
                <tr className='tr-header'>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Ano</th>
                    <th>Km</th>
                    <th>Cor</th>
                    <th>Status</th>
                    <th>Chassi</th>
                    <th>Valor</th>
                    

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ford</td>
                    <td>Fiesta</td>
                    <td>2017</td>
                    <td>70.000</td>
                    <td>Branco</td>
                    <td className='sold'>Vendido</td>
                    <td>9BW</td>
                    <td>R$ 39.000,00</td>

                </tr>

                <tr>
                    <td>Ford</td>
                    <td>Fiesta</td>
                    <td>2017</td>
                    <td>70.000</td>
                    <td>Branco</td>
                    <td className='available'>Disponível</td>
                    <td>9BW</td>
                    <td>R$ 39.000,00</td>

                </tr>
                
                <tr>
                    <td>Ford</td>
                    <td>Fiesta</td>
                    <td>2017</td>
                    <td>70.000</td>
                    <td>Branco</td>
                    <td className='reserved'>Reservado</td>
                    <td>9BW</td>
                    <td>R$ 39.000,00</td>

                </tr>
                   

                
                <tr>
                    <td>Ford</td>
                    <td>Fiesta</td>
                    <td>2017</td>
                    <td>70.000</td>
                    <td>Branco</td>
                    <td className='sold'>Vendido</td>
                    <td>9BW</td>
                    <td>R$ 39.000,00</td>

                </tr>
                <tr>
                    <td>Ford</td>
                    <td>Fiesta</td>
                    <td>2017</td>
                    <td>70.000</td>
                    <td>Branco</td>
                    <td className='available'>Disponível</td>
                    <td>9BW</td>
                    <td>R$ 39.000,00</td>

                </tr>

                  <tr>
                    <td>Ford</td>
                    <td>Fiesta</td>
                    <td>2017</td>
                    <td>70.000</td>
                    <td>Branco</td>
                    <td className='available'>Disponivel</td>
                    <td>9BW</td>
                    <td>R$ 39.000,00</td>

                </tr>

                <tr>
                    <td>Ford</td>
                    <td>Fiesta</td>
                    <td>2017</td>
                    <td>70.000</td>
                    <td>Branco</td>
                    <td className='reserved'>Reservado</td>
                    <td>9BW</td>
                    <td>R$ 39.000,00</td>

                </tr>

              
            </tbody>
        </table>
          </div>
      </div>
      </div>

      
      </nav>

);
}
    