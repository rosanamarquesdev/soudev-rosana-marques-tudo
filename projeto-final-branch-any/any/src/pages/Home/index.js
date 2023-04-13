import { Container } from '@mui/system';
import Footer from '../../components/Footer';
import SectionSix from '../../components/Section';
import './style.css';



export default function Home(){

    const [listaProdutos, setListaProdutos] = React.useState([]);

    React.useEffect(() => {
        async functon buscarProdutos(){
            let resposta = await tech
        }
    }, [])

    return(
        <>
        {/* <SectionSix/>
        <Footer/> */}
        <Container>
            <Grid container spacing={3}>
                {
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                }
            </Grid>
        </Container>
        </>
    )
}