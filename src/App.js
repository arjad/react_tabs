import "./App.css";
import Tabs from './Tabs';
import Login from "./login";
import {useHistory} from "react-router-dom";
function App() 
{
  const history = useHistory();

  const handlehome = () =>{
    history.push("/home")
  }
  const handletab = () =>{
    history.push("/tab")
  }
  const handlelogin = () =>{
    history.push("/login")
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">
               <button onClick={handlehome}>Home</button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <button onClick={handletab}>Information</button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <button onClick={handlelogin}>Login</button>
              </a>
              
            </li>
            </ul>
        </div>
      </nav>

    </div>
  );
}    
export default App;
