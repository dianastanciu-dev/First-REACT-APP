import './App.css';
import './components/Button.css'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (
    
  <Router> 
    <>
      <Navbar /> {/*Navbar pe toate paginile*/}
      <Switch>
          
          <Route path="/" exact component=
          {Home} 
          />{/*componenta Home doar pe pagina Home*/}
          
      </Switch>
    </>
    </Router>
  );
}

export default App;
