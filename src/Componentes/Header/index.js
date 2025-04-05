import Icones from '../../Componentes/Icones';
import OpcoesHeader from '../../Componentes/OpcoesHeader';
import Logo from '../../Componentes/Logo/index'
import styled from 'styled-components'
import { Link } from 'react-router-dom';



const HeaderContainer = styled.header`
    background-color:rgb(7, 7, 7)* fundo semelhante ao da logo */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
`


function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <OpcoesHeader />
        </HeaderContainer>
    )
}

export default Header;