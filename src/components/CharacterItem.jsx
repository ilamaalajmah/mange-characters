import { Link } from 'react-router-dom';

const CharacterItem = ({ character, onDelete }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={character.image} className="w-full rounded" alt={character.name} />
      <h2 className="text-xl font-bold">{character.name}</h2>
      <div>
        <Link to={`/update/${character.id}`} className="bg-blue-500 text-white py-2 px-4 rounded mt-2 mr-2">
          Update
        </Link>
        <button
          onClick={() => onDelete(character.id)}
          className="bg-red-500 text-white py-2 px-4 rounded mt-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CharacterItem;