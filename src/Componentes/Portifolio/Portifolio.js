import styled, { keyframes } from "styled-components";
import MyPlayer from "../meuvideo/video";

// Definindo a animação
const animeLeft = keyframes`
  0% {
    transform: translateX(-40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Estilizando o componente com a animação
const PesquisaContainer = styled.section`
  position: relative; /* Necessário para posicionar a caixa de texto */
  color: #fff;
  text-align: center;
  padding: 800px 0;
  height: 10vh; /* Definir a altura da tela inteira */
  width: 100%;
  margin-bottom: 100px; /* Adiciona margem inferior para mover o vídeo para baixo */
  animation: ${animeLeft} 1s forwards; /* Aplica a animação ao PesquisaContainer */
`;


const Subtitulo = styled.h3`
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 40px
  margin-top: 200px;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  left: 3%;
  height: 110%; /* Alterado para 100% */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animeLeft} 1s forwards; /* Aplica a animação ao VideoWrapper */
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function PortifolioTela() {
  return (
    <PesquisaContainer>
      <VideoWrapper>
        <MyPlayer />
        <VideoOverlay>
          <Subtitulo>Acima projetos postados no GitHub que demonstram meus conhecimentos</Subtitulo>
          <a>Clique no icone do GitHub acima no menu do site para acessar</a>
        </VideoOverlay>
      </VideoWrapper>
    </PesquisaContainer>
  );
}

export default PortifolioTela;
