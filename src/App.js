import Sidebar from "./components/sidebar/Sidebar"
import Controller from "./components/controller_sidebar/Controller"
import Topbar from "./components/topbar/Topbar"

import "./app.css"
import Home  from  "./pages/home/Home"

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";



function App() {
  return (
    <Router>
       <div className="AppX">
       <Topbar/>
       <div className="container">
        <Switch>
        <Route exact path= '/'component={Sidebar} / >
       
        <Route path='/controller' component={Controller} />
      
        
           
          
        </Switch>
        <Home/>
          
         
           
       
               

    
           
         
             
          
          
        </div>
    </div>
    </Router>
    
   
  );
}

export default App;
