import styled from 'styled-components';
import { Link } from "react-router-dom"

const textoOpcoes = ['Quem somos', 'Contato'];

const Opcao = styled.li`
  min-width: 120px;
  font-size: 18px;
  color: #C0C0C0; /* prata clássico */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  margin-right: 15px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    min-width: auto;
    margin-right: 10px;
  }
`;


const Opcoes = styled.ul`
  display: flex;
  box-sizing: border-box;

  /* Estilos responsivos */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`} key={texto}>
          <Opcao><p>{texto}</p></Opcao>
        </Link>
      ))}
    </Opcoes>
  )
}

export default OpcoesHeader;
