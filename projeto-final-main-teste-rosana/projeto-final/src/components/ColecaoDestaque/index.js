import React from "react";

import "./style.scss";

import { Button, Paper, Chip, Grid, Container } from '@mui/material';
import { blue, pink , lime} from '@mui/material/colors';

import Blusa01 from './blusa01.svg';
import Tenis01 from './tenis01.svg';
import Fone01 from './fone01.svg';


export default function ColecaoDestaque(){

    return(
        <>

        <div className='background-cards'>
            <Container>

                <p className="title-cards">Coleções em destaque</p>

                <div className="collection-cards">

                    <Paper elevation={2} sx={{ backgroundColor: blue[100]}} style={{width: "370px", height: "218px", display: "flex", justifyContent: "space-between"}}>
                                <div style={{display: "flex", flexDirection: "column", marginLeft: "20px"}}>
                                    <Chip label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "Bold"}} style={{ width: "82px", marginTop: "19px"}}/>
                                    <p className="title-collection">Novo drop <br/>Supreme</p>
                                    <Button sx={{ backgroundColor: 'white', color: pink[500], fontWeight: "bold", textTransform: "capitalize"}} style={{marginTop: "20px", width: "140px", height: "42px"}}>Comprar</Button>
                                </div>
                                <div>
                                    <img src={Blusa01} style={{width: "100%"}} />
                                </div>
                    </Paper>

                    <Paper elevation={2} sx={{ backgroundColor: blue[100]}} style={{width: "370px", height: "218px", display: "flex", justifyContent: "space-between"}}>
                                <div style={{display: "flex", flexDirection: "column", marginLeft: "20px"}}>
                                    <Chip label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "Bold"}} style={{ width: "82px", marginTop: "19px"}}/>
                                    <p className="title-collection">Novo drop <br/>Supreme</p>
                                    <Button sx={{ backgroundColor: 'white', color: pink[500], fontWeight: "bold", textTransform: "capitalize"}} style={{marginTop: "20px", width: "140px", height: "42px"}}>Comprar</Button>
                                </div>
                                <div>
                                    <img src={Tenis01} style={{width: "100%"}} />
                                </div>
                    </Paper>

                    <Paper elevation={2} sx={{ backgroundColor: blue[100]}} style={{width: "370px", height: "218px", display: "flex", justifyContent: "space-between"}}>
                                <div style={{display: "flex", flexDirection: "column", marginLeft: "20px"}}>
                                    <Chip label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "Bold"}} style={{ width: "82px", marginTop: "19px"}}/>
                                    <p className="title-collection">Novo drop <br/>Supreme</p>
                                    <Button sx={{ backgroundColor: 'white', color: pink[500], fontWeight: "bold", textTransform: "capitalize"}} style={{marginTop: "20px", width: "140px", height: "42px"}}>Comprar</Button>
                                </div>
                                <div>
                                    <img src={Fone01} style={{width: "100%"}} />
                                </div>
                    </Paper>

                </div>

            </Container>
        </div>
    </>
    )
}