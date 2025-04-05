import React from 'react';
import styled from 'styled-components';
import imagemMarcas from "../../Imagens/marcas2.png"; // imagem com VW, Fiat, Chevrolet

const Section = styled.section`
  width: 100vw;
  background-color: rgb(0, 0, 0);
  padding: 40px 20px;
  text-align: center;
  color: rgb(0, 0, 0);
  box-sizing: border-box;
`;

const Titulo = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color:rgb(255, 255, 255);
`;

const Imagem = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: block;
  margin: 0 auto 40px auto;
`;

const ServicosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  margin-top: 40px;
`;


const Card = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);

  h3 {
    margin-top: 0;
    color:rgb(0, 0, 0);
    font-size: 20px;
  }

  p {
    margin: 10px 0 0 0;
    font-size: 16px;
    color: #333;
  }
`;

const Servicos = () => {
    return (
        <Section>
            <Titulo>Serviços que oferecemos</Titulo>

            <ServicosGrid>
                <Card>
                    <h3>Upgrade de Escape</h3>
                    <p>Melhoria no sistema de exaustão para experiência sonora otimizada.</p>
                </Card>
                <Card>
                    <h3>Manutenção Corretiva</h3>
                    <p>Diagnóstico e reparo de falhas mecânicas e eletrônicas.</p>
                </Card>
                <Card>
                    <h3>Serviço de Freios</h3>
                    <p>Inspeção e substituição de componentes do sistema de freios.</p>
                </Card>
                <Card>
                    <h3>Serviço de Motor</h3>
                    <p>Manutenção completa do motor garantindo desempenho ideal.</p>
                </Card>
                <Card>
                    <h3>Serviços de Borracharia</h3>
                    <p>Reparo e substituição de pneus, calibragem e atendimento emergencial.</p>
                </Card>
            </ServicosGrid>
        </Section>
    );
};

export default Servicos;
