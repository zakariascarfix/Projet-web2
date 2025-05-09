import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import '../src/Components/Acceuil'
import Acceuil from '../src/Components/Acceuil';
import Vendre from './Components/Appartements/Vendre/Vendre';
import Acheter from './Components/Appartements/Acheter/Acheter';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Acceuil/>}/>
            <Route path='/Acheter' element={<Acheter/>}/>
            <Route path='/Vendre' element={<Vendre/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
