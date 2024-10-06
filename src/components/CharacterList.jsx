import { useEffect, useState } from 'react';
import CharacterItem from './CharacterItem';

import axios from 'axios';

const CharacterList = () => {
  const [characters,setCharacters]=useState([]);
  const [searchTerm,setSearchTerm]=useState("");


  useEffect(() => {
    const char = async () => {
      try {
        const response = await axios.get('https://670239dbbd7c8c1ccd3e3b5d.mockapi.io/project');
        setCharacters(response.data);
      } 
      
      catch (error) {
        console.error('Error fetching', error);
      }
    };

    char();
  }, 
  []);


  const filter=characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const test=async(id)=>{
    if(window.confirm('Are You Sure To Delete?')) {
      try{
        await axios.delete(`https://670239dbbd7c8c1ccd3e3b5d.mockapi.io/project/${id}`);
        setCharacters(characters.filter(character=>character.id !== id));
      }
      
      catch (error) {
        console.error('Error deleting character:', error);
      }

    }
  };




  return(
    <div className="container mx-auto p-4">
      <input type="text" placeholder="Search For Characters..."onChange={(e)=>setSearchTerm(e.target.value)}  className="border  p-2   mb-4  w-full"/>
      <div className="grid grid-cols-1  sm:grid -cols-2 lg:grid-cols-3  gap-4">

        {filter.length > 0 ? (
          filter.map(character =>( <CharacterItem key={character.id} character={character} onDelete={test} />
          ))
        ) : (
          <p>Oops,,There's No Characters!</p>
        )}
      </div>
    </div>
  );
};

export default CharacterList;

