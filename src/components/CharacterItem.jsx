const CharacterItem = ({ character, onDelete }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={character.image}className="w-full rounded" />
      <h2 className="text-xl font-bold">
        {character.name}
        </h2>
      <button
        onClick={()=>onDelete(character.id)}className="bg-red-500 text-white py-2 px-4 rounded mt-2">
            Delete
            </button>
    </div>
  );
};
export default CharacterItem;