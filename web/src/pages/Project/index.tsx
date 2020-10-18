import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import { Content } from './styles';

import Sidebar from '../../components/Sidebar';

import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface Project {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  whatsapp: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface ProjectParams {
  id: string;
}

const Project: React.FC = () => {
  const params = useParams<ProjectParams>();
  const [project, setProject] = useState<Project>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`/projects/${params.id}`).then(response => {
      setProject(response.data);
    });
  }, [params]);

  if (!project) {
    return <p>Carregando</p>;
  }

  function goToWhatsapp(): void {
    window.open(
      `https://api.whatsapp.com/send?phone=55${project?.whatsapp}`,
      '_blank',
    );
  }

  return (
    <Content>
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img src={project.images[activeImageIndex].url} alt={project.name} />

          <div className="images">
            {project.images.map((image, index) => {
              return (
                <button
                  key={image.id}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={project.name} />
                </button>
              );
            })}
          </div>

          <div className="orphanage-details-content">
            <h1>{project.name}</h1>
            <p>{project.about}</p>

            <div className="map-container">
              <Map
                center={[project.latitude, project.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[project.latitude, project.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${project.latitude},${project.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{project.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {project.opening_hours}
              </div>
              {project.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF6690" />
                  Não tendemos <br />
                  fim de semana
                </div>
              )}
            </div>

            <button
              type="button"
              className="contact-button"
              onClick={goToWhatsapp}
            >
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </Content>
  );
};

export default Project;
