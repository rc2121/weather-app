import React from 'react';
import City from './Components/City';
import Weather from './Components/Weather';
const App = () => {
  
  return(
    <div className="main-container">
      <City/>
      <Weather/>    
    </div>
  );
}

export default App;