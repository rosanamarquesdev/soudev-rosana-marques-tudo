import React from "react";
import { Button, Paper, Stack, Chip, Card } from '@mui/material';
import { blue} from '@mui/material/colors';

export default function ColecaoDestaque(){
    return(
        <>
            <Stack>
                <Paper elevation={2}>
                    <Chip label="30% OFF" />
                    {/* <img src={props.imagem} style={{width: "100%"}} /> */}
                </Paper>
                {/* <span>{props.categoria}</span>
                <h4>{props.nome}</h4> */}
                <Button sx={{ backgroundColor: blue[500]}}>Compre agora</Button>
            </Stack>
        </>
    )
}