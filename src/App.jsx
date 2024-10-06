import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';

const App = () => {
  return (
    <div>
      <h1 className="text-center text-[#799896] text-3xl  font-bold my-4">Add Your Character:</h1>
      <CharacterForm />
      <CharacterList />

    </div>
  );
};

export default App;