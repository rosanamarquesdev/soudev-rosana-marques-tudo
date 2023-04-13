import React from 'react';
import { Container, Grid, Card, Rating, Fab, Button, Chip, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import Tenis1 from './img/tenis1.png';
import Tenis2 from './img/tenis2.png';
import Tenis3 from './img/tenis3.png';
import Tenis4 from './img/tenis4.png';
import Tenis5 from './img/tenis5.png';

import './style.scss';

export default function ProdutoInfo()
{
    const [cor, setCor] = React.useState(0);
    const [selected, setSelected] = React.useState('36');
    const [atual, setAtual] = React.useState(0);
    // const [listaTenis, setListaTenis] = React.useState([]);

    const imagens = [
        Tenis1,
        Tenis2,
        Tenis3,
        Tenis4,
        Tenis5,
    ];
    const colors = [
        "primary",
        "secondary",
        "success",
        "error",
    ]

    const Items = () => {
        return imagens.map((cada, posicao) => {
                return (
                    <Grid item xs={2.4}>
                        <Card className='imagemmenor' onClick={() => setAtual(posicao)} sx={(atual === posicao) && { border: "2px solid #C92071"}}>
                            <img src={cada} width="70%" alt='imagem'/>
                        </Card>
                    </Grid>
                );
        }); 
    }

    const Cores = () => {
        return colors.map((elemento, key) => {
            return (
                <Fab size='small' sx={(cor === key) && { border: "2px solid #C92071"}} onClick={() => setCor(key)} color={elemento}></Fab>
            )
        })
    }
    function anterior(){
        if(atual === 0){
            setAtual(imagens.length - 1);
        }else{
            setAtual(atual - 1);
        }
    }
    function proximo(){
        if(atual < imagens.length - 1){
            setAtual(atual + 1);
        }else{
            setAtual(0)
        }
    }

    // function buscarTenis()
    // {
    //     fetch("https://64161661351c4aed49170e4f.mockapi.io/produtos")
    //     .then(res => res.json())
    //     .then(lista => {
    //         setListaTenis(lista);
    //     })
    // }

    
    // React.useEffect(() => {
    //     buscarTenis();
    // })

    return(
        <>
        
            <div id='produtos'>
                <Container>
                    <div className='rotas'>
                        <h5><strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</h5>
                    </div>
                <Grid container spacing={3}>
                    <Grid item xs={6.5}>
                        <Card align="center">
                            <Grid direction="row" className='ladoleft'>
                                <div className='imagem'>
                                <ChevronLeft className='setaleft' onClick={anterior}/>

                                <img width="400px" src={imagens[atual]} alt="um tênis"/>
                                {/* {imagens.map((img, key) => (
                                    <div  hidden={key !== atual}>
                                        <Zoom width={400} height={400} zoomScale={2} img={img}/>
                                    </div>
                                ))} */}
                                <ChevronRight className='setaright' onClick={proximo} />
                                </div>
                            </Grid>
                    </Card>

                    <Grid container spacing={2}>
                        <Items/>
                    </Grid>
                </Grid>
                    <Grid item xs={5}>
                        <div className="title">
                        Tênis Nike Revolution 6 Next Nature Masculino
                        </div>

                        <div className="ref">
                            Casual | Nike | REF:38416711
                        </div>

                        <div className="reviews">
                            <Rating value={4}/>
                            <Chip label="4,7" color="warning" size="small"/>
                            <small>(90 avaliações)</small>
                        </div>
                        <div className='price'>
                            <h5>R$</h5>
                            <h3>299</h3>
                            <h5>,00</h5>
                        </div>

                        <div className='descricao'>
                            <p>Descrição do Produto</p>
                        </div>
                        <div className='pdescricao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>

                        <div className='tamanho'>
                            <p>Tamanho</p>
                            {/* map() */}
                            <ToggleButtonGroup size='small' value={selected} exclusive onChange={(event, newSelected) => {
                                setSelected(newSelected);}}>
                            <ToggleButton value='36' className='settamanho' >36</ToggleButton>
                            <ToggleButton value='37' className='settamanho'>37</ToggleButton>
                            <ToggleButton value='38' className='settamanho'>38</ToggleButton>
                            <ToggleButton value='39' className='settamanho'>39</ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        <div className='cores'>
                            <p>Cor </p>
                            <Cores/>
                        </div>
                        <br/>

                        <Button className="buy" variant="contained"> COMPRAR </Button>
                    </Grid>
                </Grid>
                </Container>
            </div>
        </>
    )
}