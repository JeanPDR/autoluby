import React, {useContext} from 'react';
import { BrowserRouter as Router, 
      Route, 
      Routes,
      Navigate,
    }   from 'react-router-dom';

import { AuthProvider, AuthContext} from './pages/contexts/auth';

import AllVehicles from './pages/all-vehicles/allVehicles';
import Employees from './pages/employees/employes';
import LoginPage from './pages/login';
import Home from './pages/home/index';
import Vehicles from './pages/vehicles/vehicles';








const AppRoutes = () => {

  const Private = ({children}) => {
    const {authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <span><h1>Carregando...</h1></span>
    }
    if (!authenticated) {
        return <Navigate to = "/" />
    }

    return children;
  };

    return (

     

      

        <Router>
          
        <AuthProvider>
        
        <Routes>
        
        <Route path = 'https://autoluby.dev.luby.com.br/login' exact element = 
        {<LoginPage/>}>
        </Route>
        
        <Route path = 'https://autoluby.dev.luby.com.br/home' exact element =
         {<Private>
            <Home>
               
             </Home>
      
            
          
          

         </Private>
        }/> 
        

        <Route path = 'https://autoluby.dev.luby.com.br/employees' exact  element = 
        {<Private>
         
          <Employees/>
          
        </Private>}/>

        <Route path = 'https://autoluby.dev.luby.com.br/vehicles' exact element = 
        {<Private>
          
          <Vehicles/>
          
        </Private>} />
        <Route path = 'https://autoluby.dev.luby.com.br/allvehicles' exact element =
        {<Private>
          
          <AllVehicles/>
         
        </Private>} />
       
        </Routes>

        </AuthProvider> 
       </Router>
       
    );
  };
  
  export default AppRoutes;
