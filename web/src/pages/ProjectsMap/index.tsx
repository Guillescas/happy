import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';

import { Container, Content } from './styles';

import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface Project {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const ProjectsMap: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <aside>
          <header>
            <img src={mapMarkerImg} alt="happy" />

            <h2>Escolha um projeto no mapa ou clique no botão abaixo</h2>
            <Link to="/projects" className="enter-projects-list">
              Ver lista completa de projetos
            </Link>
          </header>

          <footer>
            <strong>Disponibilidade apenas para:</strong>
            <span>
              <strong>Curitiba, </strong>Paraná
            </span>
            <br />
            <span>ps: Mais lugares logo logo!</span>
          </footer>
        </aside>

        <Map
          center={[-25.4261526, -49.2575408]}
          zoom={13.6}
          style={{ width: '100%', height: '100%' }}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            // DARK THEME: url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />

          {projects.map(project => {
            return (
              <Marker
                key={project.id}
                icon={mapIcon}
                position={[project.latitude, project.longitude]}
              >
                <Popup
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="map-popup"
                >
                  {project.name}
                  <Link to={`/projects/${project.id}`}>
                    <FiArrowRight size={20} color="#fff" />
                  </Link>
                </Popup>
              </Marker>
            );
          })}
        </Map>

        <Link to="/projects/create" className="create-project">
          <FiPlus size={32} color="#fff" />
        </Link>
      </Content>
    </Container>
  );
};

export default ProjectsMap;
