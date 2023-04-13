import Header from '../../components/Header';
import Banner from '../../components/Banner';
import ColecaoDestaque from '../../components/ColecaoDestaque';
import ColecoesDestaqueIcones from '../../components/ColecoesDestaqueIcones';
import ProdutosemAlta from "../../components/ProdutosemAlta";
import SectionSix from '../../components/Sectionsix';
import Footer from '../../components/Footer';

import './style.css';

export default function Home() 
{
    return(
        <>
        <Header/>
        <Banner/>
        <ColecaoDestaque />
        <ColecoesDestaqueIcones />
        <ProdutosemAlta/>
        <SectionSix/>
        <Footer/>
        </>
    )
}
