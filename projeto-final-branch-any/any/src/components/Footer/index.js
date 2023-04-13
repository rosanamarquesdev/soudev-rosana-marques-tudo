import Logodc from '../../Images/logodc.svg';
import Facebook from '../../Images/facebook.svg';
import Instagram from '../../Images/instagram.svg';
import Twitter from '../../Images/twitter.svg';
import Paragrafo from '../Paragrafo';
import "./style.css";

export default function Footer()
{
    return(
        <>
        <footer>
            <div className="sectionup">
                <div className=" about">
                    <div className="logo">
                        <div><img alt="logo da Digital College" src={Logodc}/></div>
                        <div><h3>Digital Store</h3></div>
                    </div>
                    <Paragrafo class="paragrafos paraabout" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."/>
                    <a href='https://www.facebook.com'><img alt="logo do Facebook" className="icon" src={Facebook}/></a>
                    <a href='https://www.instagram.com'><img alt="logo do Instagram" className="icon" src={Instagram}/></a>
                    <a href='https://twitter.com/home'><img alt="logo do Twitter" className="icon" src={Twitter}/></a>
                </div>
                <div className="column">
                    <h4>Informações</h4>
                    <a href='/'><Paragrafo class="paragrafos" text="Sobre Drip Store"/></a>
                    <a href='/'><Paragrafo class="paragrafos" text="Segurança"/></a>
                    <a href='/'><Paragrafo class="paragrafos" text="Wishlist"/></a>
                    <a href='/'><Paragrafo class="paragrafos" text="Blog"/></a>
                    <a href='/'><Paragrafo class="paragrafos" text="Trabalhe conosco"/></a>
                    <a href='/'><Paragrafo class="paragrafos" text="Meus pedidos"/></a>
                </div>
                <div className="column">
                    <h4>Categorias</h4>
                    <a href='/'><Paragrafo class="paragrafos" text="Camisetas"/></a>
                    <a href='/'><Paragrafo class="paragrafos" text="Calças"/></a>
                    <a href='/'><Paragrafo class="paragrafos" text="Bonés"/></a>
                    <a href='/'><Paragrafo class="paragrafos" text="Headphones"/></a>
                    <a href='/'><Paragrafo class="paragrafos" text="Tênis"/></a>
                </div>
                <div className="column">
                    <h4>Contato</h4>
                    <Paragrafo class="paragrafos" text="Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161"/>
                    <Paragrafo class="paragrafos" text="(85) 3051-3411"/>
                </div>
            </div>
            <div className="creditos">
                <Paragrafo class="patente" text="@ 2022 Digital College"/>
            </div>
        </footer>
        
        </>
    )
}