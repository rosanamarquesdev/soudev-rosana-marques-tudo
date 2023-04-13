import { Container } from '@mui/material';

import Logodc from './logodc.svg';
import Facebook from './facebook.svg';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';

import "./style.scss";

export default function Footer()
{
    return(
        <>
        <footer>
            <Container>
            <div className="sectionup">
                <div className="about">
                    <div className="logo">
                        <div><img alt="logo da Digital College" src={Logodc}/></div>
                        <div className="logonome"><h3>Digital Store</h3></div>
                    </div>
                    <p className="paraabout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <a href='https://www.facebook.com'><img alt="logo do Facebook" className="icon" src={Facebook}/></a>
                    <a href='https://www.instagram.com'><img alt="logo do Instagram" className="icon" src={Instagram}/></a>
                    <a href='https://twitter.com/home'><img alt="logo do Twitter" className="icon" src={Twitter}/></a>
                </div>
                <div className="column">
                    <h4>Informação</h4>
                    <a href='/'><p>Sobre Drip Store</p></a>
                    <a href='/'><p>Wishlist</p></a>
                    <a href='/'><p>Segurança</p></a>
                    <a href='/'><p>Blog</p></a>
                    <a href='/'><p>Trabalhe conosco</p></a>
                    <a href='/'><p>Meus pedidos</p></a>
                </div>
                <div className="column category">
                    <h4>Categorias</h4>
                    <a href='/'><p>Camisetas</p></a>
                    <a href='/'><p>Calças</p></a>
                    <a href='/'><p>Bonés</p></a>
                    <a href='/'><p>Headphones</p></a>
                    <a href='/'><p>Tênis</p></a>
                </div>
                <div className="column">
                    <h4>Contato</h4>
                    <p className="paragrafo">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p className="paragrafo">(85) 3051-3411</p>
                </div>
            </div>
            
            <div className="creditos">
                <p className="patente">@ 2022 Digital College</p>
            </div>
            </Container>
        </footer>
        </>
    )
}