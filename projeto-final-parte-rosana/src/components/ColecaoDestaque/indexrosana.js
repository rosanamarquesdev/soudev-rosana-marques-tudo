import React from "react";

import "./style.scss";

import { Button, Paper, Chip, Grid } from '@mui/material';
import { blue, yellow, red, pink , lime} from '@mui/material/colors';

import Blusa01 from '../../Imagens/blusa01.svg';
import Tenis01 from '../../Imagens/tenis01.svg';
import Fone01 from '../../Imagens/fone01.svg';


import Tenis from '../../Imagens/tenis.svg';
import { Container, height } from "@mui/system";


export default function ColecaoDestaque(){

    return(
        <>
            <Container >

            <Grid container spacing={3}>

                <Grid item xs={4}>
                    <Paper elevation={2} sx={{ backgroundColor: blue[100]}} style={{width: "405px", height: "250px", display: "flex", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "20px", marginTop: "20px"}}>
                            <Chip label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "Bold"}} style={{width: "80px", width: "85px", marginTop: "20px"}}/>
                            <p className="title-collection">Novo drop <br/>Supreme</p>
                            <Button sx={{ backgroundColor: 'white', color: pink[500], fontWeight: "bold", textTransform: "capitalize"}} style={{marginTop: "20px", width: "140px", height: "42px"}}>Comprar</Button>
                        </div>
                        <div>
                            <img src={Blusa01} style={{width: "100%"}} />
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper elevation={2} sx={{ backgroundColor: blue[100]}} style={{width: "405px", height: "250px", display: "flex", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "20px", marginTop: "20px"}}>
                            <Chip label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "Bold"}} style={{width: "80px", width: "85px", marginTop: "20px"}}/>
                            <p className="title-collection">Novo drop <br/>Supreme</p>
                            <Button sx={{ backgroundColor: 'white', color: pink[500], fontWeight: "bold", textTransform: "capitalize"}} style={{marginTop: "20px", width: "140px", height: "42px"}}>Comprar</Button>
                        </div>
                        <div>
                            <img src={Tenis01} style={{width: "100%"}} />
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper elevation={2} sx={{ backgroundColor: blue[100]}} style={{width: "405px", height: "250px", display: "flex", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "20px", marginTop: "20px"}}>
                            <Chip label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "Bold"}} style={{width: "80px", width: "85px", marginTop: "20px"}}/>
                            <p className="title-collection">Novo drop <br/>Supreme</p>
                            <Button sx={{ backgroundColor: 'white', color: pink[500], fontWeight: "bold", textTransform: "capitalize"}} style={{marginTop: "20px", width: "140px", height: "42px"}}>Comprar</Button>
                        </div>
                        <div>
                            <img src={Fone01} style={{width: "100%"}} />
                        </div>
                    </Paper>
                </Grid>

            </Grid>

            </Container>
        </>
    )
}