import React from 'react';
import { FiArrowLeft, FiAlignJustify, FiMap, FiInfo } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

// import mapMarkerImg from '../../images/map-marker.svg';

import { Content } from './styles';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Content>
      <button className="back-button" type="button" onClick={goBack}>
        <FiArrowLeft size={24} color="#FFF" />
      </button>

      {/* <img src={mapMarkerImg} alt="Happy" /> */}

      <Link to="/map" className="menu-item">
        <FiMap className="icon" size={24} />
        Mapa
      </Link>

      <Link to="/projects" className="menu-item">
        <FiAlignJustify className="icon" size={24} />
        Projetos
      </Link>

      <Link to="/about" className="menu-item">
        <FiInfo className="icon" size={24} />
        Sobre nós
      </Link>
    </Content>
  );
};

export default Sidebar;
