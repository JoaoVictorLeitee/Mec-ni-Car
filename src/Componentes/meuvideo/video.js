import React from "react";
import styled from "styled-components";
import video from '../Portifolio/video.mp4';

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Definir a altura da tela inteira */
`;

const Video = styled.video`
  position: absolute;
  top: -310px; /* Movendo o vídeo para cima */
  left: 48%;
  transform: translateX(-50%);
  width: 80%;
  height: 80%;
`;

function MyPlayer() {
  return (
    <VideoWrapper>
      <Video autoPlay loop>
        <source src={video} type="video/mp4" />
      </Video>
    </VideoWrapper>
  );
}

export default MyPlayer;
