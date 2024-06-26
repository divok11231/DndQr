import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase.client';
import '../layouts/control-style.css';
import React from '@astrojs/react';
import { onMount } from '../pages/api/endpoint';

const Close = () => {
  const [text, setText] = useState('');

  const data = "https://dnd-qr.vercel.app/redpage" ;

  const handleClick = async () => {
    try {
      const { data, error } = await supabase
        .from('currentPageUrl')
        .update([{ goneMessage: text }])
        .eq('currentPageUrl', 'nignognaggins')
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDoneClick = async () => {
    try {
      console.log('test');
      const { data: result, error } = await supabase
        .from('currentPageUrl')
        .update({ url: data})
        .eq('currentPageUrl', 'nignognaggins')
      
      if (error) {
        console.error(error);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    onMount(data);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
      <div className="icon-container">
        <button onClick={handleDoneClick}>
          <img className="close" alt="Close" src="close.svg" />
        </button>
      </div>
    </div>
  );
};

export default Close;
