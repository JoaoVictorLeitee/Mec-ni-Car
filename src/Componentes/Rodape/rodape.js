import styled from "styled-components";

const FooterSection = styled.footer`
  width: 100vw; /* FORÇA largura total da viewport */
  background-color:rgba(0, 0, 0, 0.94)* fundo semelhante ao da logo */
  color: white;
  padding: 1px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;


const LogoArea = styled.div`
  max-width: 200px;

  img {
    width: 100%;
    height: auto;
  }
`;

const InfoArea = styled.div`
  text-align: right;

  h2 {
    margin-bottom: 10px;
    font-size: 5px;
    color:rgb(0, 0, 0); 
  }

  p {
    margin: 4px 0;
    font-size: 16px;
    color: #eee;
  }

  .contact-info {
    margin-top: 10px;

    a {
      color: #28a745;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

function Rodape() {
  return (
    <FooterSection>
      <LogoArea>
        {/* Substitua o caminho da imagem pela sua logo */}
        <img src={require("../../Imagens/badu.png")} alt="Logo" />
      </LogoArea>

      <InfoArea>
        <h2>Seu serviço especializado de reparo e manutenção Automotiva</h2>
        <div className="contact-info">
          <p>WhatsApp: <a href="https://wa.me/61999995045">(61) 99245-4938</a></p>
          <p>Endereço: Quadra 604 Conjunto 24 Casa 15 Recanto Das Emas 15 - Recanto das Emas, Brasília - DF, 72640-424</p>
          <p>Horário: Seg a Sex | 8h às 18h</p>
          <p>Sab | 8h às 12h</p>
          <p>Instagram: <a href="https://www.instagram.com/mecanicar_borracharia" target="_blank">@mecanicar_borracharia</a></p>
        </div>
      </InfoArea>
    </FooterSection>
  );
}

export default Rodape;
