import logo from '../../Imagens/badu.png'
import './estilo.css'

function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt='logo' className='logo-img' />
            <div className='logo-textos'>
                <p className='nome'><strong>Mecâni'Car</strong></p>
                <p className='subtitulo'>Centro Automotivo</p>
            </div>
        </div>
    )
}

export default Logo;
