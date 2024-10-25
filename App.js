
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './Components/create'; // Ensure Create is properly imported
import Read from './Components/read';
import Edit from './Components/Edit';
//created root create 
function App() {
  return (
    <div className="container">
      <Routes>
      <Route  exact path='/' element={<Read/>}> </Route>
      <Route  exact path='/Create' element={<Create/>}> </Route>
      <Route  exact path='/edit' element={<Edit/>}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;

