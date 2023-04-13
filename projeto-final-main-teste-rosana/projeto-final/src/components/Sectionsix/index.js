import { Container } from '@mui/material';

import Ofertaespecial from './ofertaespecial.svg';

import './style.scss';

export default function SectionSix()
{
    return(
        <>
        <div className="section6">
            <Container>
            <section className="sectionsix">
                <div className="colunaone">
                    <div className="bg-img"></div>
                    <img alt="foto de um AirJordan, edição  especial, nas cores preto e amarelo" src={Ofertaespecial}></img>
                </div>
                <div className="colunatwo">
                    <h5>Oferta especial</h5>
                    <h2>Air Jordan edição de colecionador</h2>
                    <p className="paragrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui</p>
                    <a href="/*">
                        <button className="buttonsee">Ver Oferta</button>
                    </a>
                </div>
            </section>
            </Container>
        </div>
        </>
    )
}