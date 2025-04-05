import HomeTela from '../Componentes/TelaHome';
import styled from 'styled-components'


const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column; /* Permite empilhar os elementos verticalmente */
  justify-content: center;
  align-items: center;
  background-color:rgb(0, 0, 0); /* Cor de fundo suave */
  box-sizing: border-box;

  li {
    list-style: none;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;


function Home() {
  return (
    <AppContainer>
      <HomeTela />
    </AppContainer>
  );
}

export default Home;
