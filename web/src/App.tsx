import React from 'react';

import Routes from './routes';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
