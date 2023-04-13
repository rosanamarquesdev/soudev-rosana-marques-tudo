import { Avatar, Container, Grid} from "@mui/material";
// import { blue, yellow, red, pink , lime, white} from '@mui/material/colors';



import "./style.scss";
import camisetas from "./camiseta.svg";
import calcas from "./calca.svg";
import bones from "./bone.svg";
import fones from "./fone.svg";
import tenis from "./tenis.svg";


export default function ColecoesDestaqueIcones(){
    const colecoes = [
        {
            nome: "Camisetas",
            imagem: camisetas
        },
        {
            nome: "Calças",
            imagem: calcas
        },
        {
            nome: "Bonés",
            imagem: bones
        },
        {
            nome: "Headphones",
            imagem: fones
        },
        {
            nome: "Tênis",
            imagem: tenis
        },
    ]


    const Sections = () => {
        return colecoes.map((cada) => {
                return (
                    <Grid item>
                        <Avatar sx={{bgcolor: "white", height: "104px", width: "104px"}}>
                            <img src={cada.imagem}></img>
                        </Avatar>
                        <p>{cada.nome}</p>
                    </Grid>
                );
        });
    }

    return(
        <>
            <div className="bg">
                <Container>
                    <h3>Coleções em destaque</h3>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <Sections />
                    </Grid>
                </Container>
            </div>
        </>
    )
}

