// import Header from '../../components/Header';
// import Menu from '../../components/Menu';
import React from "react";
// import {useState} from "react";
// import Menu from '../../components/Menu';
import {Card, Button, Grid} from "@mui/material";



function CadaProduto(props){
    const [quantidade, alterarQuantidade] = React.useState(1);

    const add = () => {
        alterarQuantidade(quantidade + 1);
    }

    const remove = () => {
        // nao permite colocar valor negativo
        alterarQuantidade(quantidade - 1);
    }

    return(

        // const [quantidade, alterarQuantidade] = React.useState(0);

        // const add = () => {
        //     alterarQuantidade(quantidade + 1);
        // }

        // const remove = () => {
        //     // nao permite colocar valor negativo
        //     alterarQuantidade(quantidade - 1);
        // }

        // return(
        //     <>

        //     {/* <Menu /> */}
        //     Pagina Produtos
        //     <hr/>

        //     <Card>
        //         Pizza de cogumelos ( R$ 29 )

        //         <Button  disabled={quantidade <= 0} onClick={remove}> - </Button>
        //         {quantidade}
        //         <Button onClick={add}> + </Button>

        //         TOTAL:  {29 * quantidade}
        //     </Card>

        //     </>
        // )

        <Card style={{width: '100%', padding:'10px'}}>

            {/* Pizza de cogumelos ( R$ 29 ) */}
            {props.produto} ( R$ {props.valor} )

            <Button  disabled={quantidade === 1} onClick={remove}> - </Button>
            {quantidade}
            <Button disable={quantidade === 10} onClick={add}> + </Button>

            <hr/>

            TOTAL:  {props.valor * quantidade}
        </Card>
    )
}

export default function Produtos(){
    return(
        <>
        {/* <Menu /> */}
        Pagina Produtos
        <hr/>

        <Grid container spacing={4}>
            <Grid item >
                <CadaProduto produto="Pratinho" valor="8.90"/>
            </Grid>

            <Grid item>
                <CadaProduto produto="Heineken" valor="10"/>
            </Grid>

            <Grid item>
                <CadaProduto produto="Pratinho" valor="8.90"/>
            </Grid>

            <Grid item>
                <CadaProduto produto="Heineken" valor="10"/>
            </Grid>
        </Grid>

        </>
    )
}

