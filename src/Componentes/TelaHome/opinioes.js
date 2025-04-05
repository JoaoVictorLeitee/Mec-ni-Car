import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import opiniao1 from '../../Imagens/opiniao1.png';
import opiniao2 from '../../Imagens/opiniao2.png';
import opiniao3 from '../../Imagens/opiniao3.png';
import opiniao4 from '../../Imagens/opiniao4.png';
import opiniao5 from '../../Imagens/opiniao5.png';
import opiniao6 from '../../Imagens/opiniao6.png';
import opiniao7 from '../../Imagens/opiniao7.png'; // adicione mais se quiser

const Section = styled.section`
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 1px 0 1px;
  text-align: center;
  color: rgb(0, 0, 0);
  box-sizing: border-box;
`;

const Titulo = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 100px;
`;
const Imagem = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 8px;
  max-height: 400px; // Limita altura da imagem
`;

const Carrossel = styled(Slider)`
  max-width: 600px; // reduzido
  margin: 0 auto;
  padding-bottom: 0px;

  .slick-slide {
    padding: 4px; // menos espaço entre os slides
  }
`;

const AvaliacaoGoogle = styled.div`
  margin-top: -300px;
  padding-bottom: 30px;

 p {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
}
  a {
    color: #1a73e8;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;


const Opinioes = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500
    };

    return (
        <Section>
            <Titulo>Opiniões dos Nossos Clientes</Titulo>
            <Carrossel {...settings}>
                <div><Imagem src={opiniao1} alt="Opinião 1" /></div>
                <div><Imagem src={opiniao2} alt="Opinião 2" /></div>
                <div><Imagem src={opiniao3} alt="Opinião 3" /></div>
                <div><Imagem src={opiniao4} alt="Opinião 4" /></div>
                <div><Imagem src={opiniao5} alt="Opinião 5" /></div>
                <div><Imagem src={opiniao6} alt="Opinião 6" /></div>
                <div><Imagem src={opiniao7} alt="Opinião 7" /></div>
            </Carrossel>
            <AvaliacaoGoogle>
                <p>Nos avalie no Google!</p>
                <a href="https://g.co/kgs/2UVNgKZ" target="_blank" rel="noopener noreferrer">
                    Clique aqui para avaliar
                </a>
            </AvaliacaoGoogle>
        </Section>
    );
};

export default Opinioes;
