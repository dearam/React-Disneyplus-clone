import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Temp from './components/Temp';


function App() {
  return (
      <div>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/Temp" element={<Temp/>}/>
          </Routes>
       </Router>
      </div>
  );
}

export default App;
