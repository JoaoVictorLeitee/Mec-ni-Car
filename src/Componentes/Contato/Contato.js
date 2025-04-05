import styled, { keyframes } from "styled-components";
import whatsapp from "../../Imagens/whatsapp.png";
import gmail from "../../Imagens/gmail.png";
import contatotela from "../../Imagens/contatotela.jpg";


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
const ContatoContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ContatoWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const ContatoBox = styled.div`
    background-color: white;
    padding: 1%;
    box-shadow: 0px 0px 10px rgba(0, 0.1, 0.2, 0.5); /* Sombreamento */
    border-radius: 10px;
    width: 50%; /* Ajusta a largura do quadrado */
    max-width: 570px; /* Largura máxima */
    margin-top: 0px;
    margin-left: -9px; /* Adiciona espaçamento entre a imagem e o box */
    animation: ${animeLeft} 1s forwards; /* Adiciona a animação */
    margin-top: 2.5vw;
`;

const VerticalImage = styled.img`
    width: 30%;
    height: auto; /* Garante que a imagem seja responsiva */
    max-height: 100%; /* Limita a altura da imagem */
    border-radius: 10px;
    margin-right: 10px; /* Adiciona espaçamento entre a imagem e o texto */
    animation: ${animeLeft} 1s forwards;
    margin-top: 2.5vw;
`;

const Titulo = styled.h1`
    color: #000000;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const Subtitulo = styled.a`
    color: #333;
    font-size: 2vw; /* Tamanho da fonte responsivo em relação à largura da viewport */
    margin-bottom: 10vw; /* Margem inferior responsiva */
    display: flex;
    align-items: center; /* Centraliza verticalmente o texto */
    justify-content: center; /* Centraliza horizontalmente o texto */
    margin-top: 6vw;
`;


const Icone = styled.img`
    margin-right: 1rem; /* Alterado para valores relativos */
    width: 2.5rem; /* Ajustar o tamanho do ícone conforme necessário */
`;

function Contato() {
    return (
        <ContatoContainer>
            <ContatoWrapper>
                <VerticalImage src={contatotela} />
                <ContatoBox>
                    <Titulo>Contato</Titulo>
                    <Subtitulo>
                        <Icone src={whatsapp} alt='Whatsapp' />
                        Telefone Para Contato: (61) 98165-0362
                    </Subtitulo>
                    <Subtitulo>
                        <Icone src={gmail} alt='Gmail' />
                        E-mail: victorleite.contatos@gmail.com
                    </Subtitulo>
                </ContatoBox>
            </ContatoWrapper>
        </ContatoContainer>
    );
}

export default Contato;
