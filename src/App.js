import './App.scss';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import About from './components/About';
import Table from './components/Table';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
