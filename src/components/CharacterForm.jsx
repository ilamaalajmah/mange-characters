import { useState } from 'react';
import axios from 'axios';

const CharacterForm = () => {
  const[name, setName] = useState('');
  const[image, setImage] = useState('');
  const[gender, setGender] = useState('male');

  const test=async (e)=>{
    e.preventDefault();
    const newCharacter={name,image,gender};

    try {
      await axios.post('https://670239dbbd7c8c1ccd3e3b5d.mockapi.io/project', newCharacter);
      setName('');
      setImage('');
      setGender('Male');
    } catch (error) {
      console.error('Error adding character:',error);
    }
  };

  return (
    <form onSubmit={test} className="p-4">
     
     <input type="text" placeholder="Full Name Of The Character:" value={name} onChange={(e) => setName(e.target.value)}className="border p-2 mb-4 w-full" required/>

      <input type="text"  placeholder="URL Of The Photo:"value={image} 
      onChange={(e) =>
        setImage(e.target.value)}className="border p-2 mb-4 w-full" required />

      <select value={gender}onChange={(e)=> 
        setGender(e.target.value)} className="border p-2 mb-4 w-full">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <button type="submit"
      className="bg-green-500 text-white  py-2 px-4  rounded">
        Add The Character:
        </button>
    </form>
  );
};

export default CharacterForm;