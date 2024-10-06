import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';
import Update from './components/Update';

const App = () => {
  return (
    <Router>
      <div>
        <h1 className="text-center text-[#799896] text-3xl font-bold my-4">
          Add Your Character:</h1>

        <Routes>
          <Route path="/" element={<><CharacterForm /><CharacterList /></>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;