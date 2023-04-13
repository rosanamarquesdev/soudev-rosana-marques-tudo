import React from "react";
import {Grid, Card, Button, Fab} from "@mui/material";
import { useParams } from "react-router-dom";
import Zoom from "react-img-zoom";

import "./style.scss";

import bone01 from "./img/bone01.jpg";
import bone02 from "./img/bone02.jpg";
import bone03 from "./img/bone03.jpg";
import bone04 from "./img/bone04.jpg";
import bone05 from "./img/bone05.jpg";

import { Stack } from "@mui/system";
import { ChevronLeft, ChevronRight, Star, StarOutline } from "@mui/icons-material";



export default function DetalhesProduto() {
    const {id} = useParams();
    const [atual, setAtual] = React.useState(0);

    const imagens = [
        bone01,
        bone02,
        bone03,
        bone04,
        bone05,
    ];


    const Items = () => {
        return imagens.map((cada, posicao) => {
            return(
                <Grid item xs={2.4}>
                    <Card align="center" onClick={ () => setAtual(posicao)} sx={(atual === posicao) && { border: "2px solid red"}}>
                        <img src={cada} width="100%"/>
                    </Card>
                </Grid>
            )
        }); // <Items />
    }

    function anterior(){
        if(atual == 0){
            setAtual(imagens.length - 1);
        } else {
            setAtual(atual - 1);
        }
    }

    function proximo(){
        if(atual < imagens.length - 1){
            setAtual(atual + 1);
        } else {
            setAtual(0)
        }
    }

    const [ color, setColor] = React.useState();

    // só executa a funcao um unica vez - faz ficar passando automatico
    // React.useEffect(() => {
    //     let intervalo = setInterval(proximo, 3000);

    //     return () => clearInterval(intervalo);
    // });

    return (

        <div className="product-details">
            Detalhes do Produto {id}
                
                <Grid container spacing={3}>
                    <Grid item xs={7}>
                        <Card align="center">
                            <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                                <ChevronLeft sx={{fontSize: "60px"}} onClick={anterior} />
                                {/* <img width="400px" src={imagens[atual]}/> */}

                                {imagens.map((img, key) => (
                                <div style={{display: key === atual?'block':'none'}} >
                                    <Zoom width={400} height={400} zoomScale={2} img={img}/>
                                </div>
                                ))}

                                <ChevronRight sx={{fontSize: "60px"}} onClick={proximo} />
                            </Stack>
                        </Card>

                        <Grid container spacing={2}>
                                <Items />
                        </Grid>
                    </Grid>

                    <Grid item xs={5}>
                        <div className="title">Tenis Nike</div>
                        <div className="ref">Casual</div>
                        <div className="reviews">
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                            <StarOutline/>
                        </div>
                            descricao
                        <div>
                            tamanho
                        </div>
                        <div>
                            <p><small>Cor</small></p>
                            <Fab onClink={() => setColor('Azul')} color="primary"></Fab>
                            <Fab onClink={() => setColor('Roxo')} color="secondary"></Fab>
                            <Fab onClink={() => setColor('Verde')} color="sucess"></Fab>
                            <Fab onClink={() => setColor('Vermelho')} color="error"></Fab>
                        </div>
                        <Button className="buy" variant="contained">COMPRAR</Button>

                    </Grid>
                </Grid>

        </div>
    )
}
