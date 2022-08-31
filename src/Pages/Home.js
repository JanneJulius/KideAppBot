import React, {useState, useRef} from 'react';
import {appLogic} from '../API/AppLogic';


function Home() {

  const infoText = !localStorage.getItem('authToken') ? <p>To enable URL, save your Auth Token from top left menu</p>: <p>Enter event URL and press enter</p>;

  const [query, setQuery] = useState('');

  const search = async (e) => {
    if(e.key === 'Enter') {
        await appLogic(query);
        setQuery('');
    }
}

  return (
    <div className='homeView'>
      <h1 className='homeViewTitle'>KideAppBot</h1>
      {infoText}
      <input type='text' className='URLinput' placeholder='Enter event URL...'
      disabled={!localStorage.getItem('authToken') ? true : false}
      value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>

      

    </div>
  );
}
export default Home;