import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update=()=>{
  const { id } = useParams();

  const navigate = useNavigate();
  
    const [image, setImage]=useState('');

  useEffect(() => {
    const char =async()=>{
      const response =await axios.get(`https://670239dbbd7c8c1ccd3e3b5d.mockapi.io/project/${id}`);

    const character =response.data;

  setImage(character.image);
    };

    char();
  },[id]);

  const update=async(e)=>{
    e.preventDefault();
    const upchar={image};

    await axios.put(`https://670239dbbd7c8c1ccd3e3b5d.mockapi.io/project/${id}`,upchar);
    navigate('/');
  };

  return (
    <form onSubmit={update} className="p-4">

      <input type="text" required
        placeholder="URL Of The Photo:"
        value={image}
        onChange={(e)=>setImage(e.target.value)}
        className="border p-2 mb-4 w-full"  />
    
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Update Character
      </button>

    </form>
  );
};

export default Update;