import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import background from './style/cortado.jpg';


//Views
import Home from './views/Home';
import Followers from './views/Followers';
import Repositories from './views/Repositories';

function App() {
  return (
    <div className=' m-0 p-0' style={{backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    minHeight:'100vh',
    backgroundSize:'cover'
    }}>
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

       {/* <Route path="/*">
         <Error404 />
       </Route> */}

     </Switch>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
