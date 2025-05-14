import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import '../src/Components/Acceuil'
import Acceuil from '../src/Components/Acceuil';
import Vendre from './Components/Appartements/Vendre/Vendre';
import Acheter from './Components/Appartements/Acheter/Acheter';
import A_Propos from './Components/A_Propos/A_Propps';
import Contact from './Components/Contact/Contact';
import Error from './Components/Acceuil/Errour404/Errour';
import Confidentialite from './Components/Acceuil/Confidentialite/Confidentialite';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Acceuil/>}/>
            <Route path='/Acheter' element={<Acheter/>}/>
            <Route path='/Vendre' element={<Vendre/>}/>
            <Route path='/A_Propos' element={<A_Propos/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<Acheter/>}/>
            <Route path="/confidentialite" element={<Confidentialite />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
