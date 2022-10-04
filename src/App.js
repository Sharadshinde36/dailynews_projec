
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (

  
    <div className="App">
      <BrowserRouter>
      <Navbar/>
     
     <Routes>
   
          <Route path="/business" element={<News key="business" pagesize={6} category='business' country='in'/>}/>  
          <Route path="/entertainment"  element={<News key="entertainment" pagesize={6} category='entertainment' country='in'/>}/> 
          <Route path="/general"     element={<News key="general" pagesize={6} category='general' country='in'/>}  /> 
          <Route path="/health"      element={<News key="health" pagesize={6} category='health' country='in'/>}  /> 
          <Route path="/science"     element={<News key="science" pagesize={6} category='science' country='in'/>}  />  
          <Route path="/sport"       element={<News key="sports" pagesize={6} category='sports' country='in'/>}  />  
          <Route path="/technology"  element={<News key="technology" pagesize={6} category='technology' country='in'/>}  />  
          
         
         
        </Routes>
        </BrowserRouter>,
     </div>

  );
}

export default App;
