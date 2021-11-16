import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


//Views
import Home from './views/Home';
import Followers from './views/Followers';
import Repositories from './views/Repositories';
import Error404 from './components/Error404';

function App() {
  return (
    < >
     <BrowserRouter >
     <Switch>

       <Route path="/" exact>
       <Home />
       </Route>

       <Route path="/followers/:user" exact>
         <Followers/>
       </Route>

       <Route path="/repositories/:user" exact>
         <Repositories/>

       </Route>

        <Route path="/*">
         <Error404/>
       </Route> 

     </Switch>
    </BrowserRouter>
  
    </>
  );
}

export default App;
