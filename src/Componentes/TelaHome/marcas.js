import React from 'react';
import styled from 'styled-components';
import imagemMarcas from "../../Imagens/marcas2.png"; // imagem nova com VW, Fiat, Chevrolet

const Section = styled.section`
  width: 100vw;
  background-color:rgb(255, 255, 255);
  padding: 40px 20px;
  text-align: center;
  color:rgb(0, 0, 0);
  box-sizing: border-box;
`;

const Titulo = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Imagem = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const Marcas = () => {
    return (
        <Section>
            <Titulo>Algumas Marcas Que Trabalhamos</Titulo>
            <Imagem src={imagemMarcas} alt="Marcas que trabalhamos" />
        </Section>
    );
};

export default Marcas;
