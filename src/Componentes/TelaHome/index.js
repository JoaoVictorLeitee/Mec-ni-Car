// HomeTela.tsx
import styled from "styled-components";
import background from "../../Imagens/audi.png"; // sua imagem de fundo
import Marcas from './marcas';
import Rodape from '../Rodape/rodape';
import Servicos from './servicos';
import Opinioes from './opinioes';



const HomeSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: url(${background}) center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 20px;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #fff;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
    color: #eee;
  }

  .btn {
    margin-top: 30px;
    background-color: #28a745;
    color: white;
    padding: 12px 28px;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: 0.3s;

    &:hover {
      background-color: #218838;
    }
  }
`;

function HomeTela() {
  return (
    <>
      <HomeSection>
        <Overlay />
        <Content>
          <h1>🔧 Bem-vindo à Mecâni'Car</h1>
          <p>
            Qualidade, transparência e agilidade em serviços automotivos.<br />
            Seu carro nas mãos de quem entende!
          </p>
          <a className="btn" href="https://wa.me/seu_numero_aqui" target="_blank">
            💬 Entre em Contato
          </a>
        </Content>
      </HomeSection>

      {/* Agora sim o bloco de marcas vai aparecer logo abaixo da HomeSection */}
      <Marcas />
      <Servicos />
      <Opinioes />
      <Rodape />
    </>
  );
}


export default HomeTela;
