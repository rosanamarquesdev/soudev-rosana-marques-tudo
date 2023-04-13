import { Container, Grid, Card, Chip  } from '@mui/material';
import './style.scss';
import tenis from './produto.png';
import React from 'react';


function Produto(props){
    
    return (
        <div className='Produto'>
            <Card className='card'>
                {props.desconto && <Chip className="chip" label="30% OFF"/>}
                <img className="imagem" src={tenis} alt='Imagem de um tênis'/>
            </Card>
            <small>Tênis</small>
            <p className='descriçao'>K-Swiss V8 - Masculino</p>
            <br/>
            <div className='valor'>
                <p className='duzentos'>$200</p> <strong className='cem'>$100</strong>
            </div>
        </div>
    )
}

export default function ProdutosAlta () {
    return (
        <div id='ProdutosEmAlta' >
            <Container disableGutters>
                <div className='ProdutosEmAlta'>
                    <div className='titulos'>
                            <h3 className='titulo1'>Produtos em alta</h3>
                            <a href='#'  className='all'>
                                Ver todos ➝
                                </a>  
                                
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Produto desconto/>
                        </Grid>
                         <Grid item xs={3}>
                            <Produto desconto/>
                        </Grid>
                        <Grid item xs={3}>
                            <Produto/>
                        </Grid>
                        <Grid item xs={3}>
                            <Produto/>
                        </Grid> 
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Produto/>
                        </Grid>
                         <Grid item xs={3}>
                            <Produto/>
                        </Grid>
                        <Grid item xs={3}>
                            <Produto/>
                        </Grid>
                        <Grid item xs={3}>
                            <Produto/>
                        </Grid> 
                    </Grid>
                </div>
            </Container>
        </div>
    )
}