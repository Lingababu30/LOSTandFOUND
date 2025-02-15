import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import LostAndFound from './Components/LostAndFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Corrected syntax for the 'element' prop */}
        <Route path="/" element={<LostAndFound />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
