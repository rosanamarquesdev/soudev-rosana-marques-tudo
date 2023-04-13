import React from "react";

import "./style.scss";

import { Button, Paper, Stack, Badge, Chip, Card } from '@mui/material';
import { blue, yellow, red, pink , lime} from '@mui/material/colors';
import Blusa01 from '../../Imagens/blusa01.svg';
import Tenis from '../../Imagens/tenis.svg';
import { height } from "@mui/system";

// import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function ColecaoDestaque(){


    // const theme = createTheme({
    //     palette: {
    //       primary: {
    //         main: '#C92071',
    //       },
    //       secondary: {
    //         main: '#E7FF86',
    //       },
    //     },
    //   });


    return(
        <>

        {/* <ThemeProvider theme={theme}> */}

            <Paper elevation={2} sx={{ backgroundColor: blue[100]}} style={{width: "405px", height: "250px", display: "flex", justifyContent: "space-between"}}>
            {/* <Paper elevation={2} sx={{ backgroundColor: 'primary'}} style={{width: "405px", height: "250px", display: "flex", justifyContent: "space-between"}}> */}
                <div style={{display: "flex", flexDirection: "column", marginLeft: "20px", marginTop: "20px"}}>
                    {/* <Chip label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "Bold"}} style={{width: "80px", width: "85px", marginTop: "20px"}}/> */}
                    <Chip label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "Bold"}} style={{width: "80px", width: "85px", marginTop: "20px"}}/>
                    {/* <h3 style={{marginTop: "10px"}} >Novo drop <br/>Supreme</h3> */}
                    <p className="title-collection">Novo drop <br/>Supreme</p>
                    <Button sx={{ backgroundColor: 'white', color: pink[500], fontWeight: "bold", textTransform: "capitalize"}} style={{marginTop: "20px", width: "140px", height: "42px"}}>Comprar</Button>
                </div>
                <div>
                    <img src={Blusa01} style={{width: "100%"}} />
                </div>
            </Paper>
            
        {/* </ThemeProvider> */}
        </>
    )
}