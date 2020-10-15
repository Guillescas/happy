import React from 'react';
import Sidebar from '../../components/Sidebar';

import { Container, Content } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <Sidebar />

      <Content>
        <p className="page-title">Sobre nós</p>

        <section>
          <h1>Como surgiu o ---?</h1>

          <p>
            O --- se originou de um outro projeto, o happy! O happy foi
            desenvolvido na Next Level Week (NLW), uma evento em que um projeto
            é desenvolvido do total zero em apenas uma semana. Esse evento é
            promovido pela Rocketseat, uma startup sensacional que tem feito
            milhares de alunos pelo mundo afora!
          </p>

          <p>
            O --- se originou da terceira edição da NLW. Na primeira, fiz a
            trilha iniciante. Na segunda, fiz a trilha avançada, e vi outras
            pessoas fazendo as suas próprias versões do projeto principal. Quis
            fazer o meu projeto personalizado também, mas como eu estava
            iniciando com React, fiz apenas personalizações simples e pensei em
            fazer minha aplicação personalizada para a próxima edição.
          </p>

          <p>
            A próxima edição chegou, e agora estou conseguindo fazer tudo o que
            eu queria! Estou muito feliz por poder concluir o projeto com boas
            práticas de código, funcionalidades novas, e até conseguir fazer o
            deploy da aplicação (deixar a aplicação online).
          </p>

          <p>
            Você pode conferir o projeto original (happy) clicando{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.figma.com/file/fWpZHM1ZaKuxzl0cc0dxk6/Happy-Web-(Copy)?node-id=48603%3A210"
            >
              aqui
            </a>
            ! E para ver o meu projeto, é só explorar esse site todinho! Espero
            que você goste, e sou aberto à qualquer feedback, sugestão e
            críticas. Caso queira falar comigo, me mande uma mensagem no
            linkedin clicando{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/guilherme-illescas"
            >
              aqui
            </a>
            !
          </p>
        </section>
      </Content>
    </Container>
  );
};

export default About;
