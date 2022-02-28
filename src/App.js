import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
    
      
      // ######################################################//
      return (
        <div className="App m-0 p-0" style={{overflowX:'hidden'}} >
          <LoginPage />
        </div>
      ); 
}
export default App;