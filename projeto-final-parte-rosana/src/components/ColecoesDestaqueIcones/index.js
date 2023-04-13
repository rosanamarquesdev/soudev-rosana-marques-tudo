// import { Link } from "react-router-dom"  -- NAO ESTAVA FUNCIONANDO ASSIM;
import { Link } from '@mui/material';
import React from "react";

// import "./styles.css"  --- mudei para style.scss;
import "./style.scss";

import { grey } from '@mui/material/colors';

import { Avatar, Container, Grid } from "@mui/material";


import camisetas from "./camiseta.svg";
import calcas from "./calca.svg";
import bones from "./bone (4).svg";
import tenisi from "./teniss.svg";
import fones from "./fone.svg";
import camisetasrosa from "./camisetaROSA.svg";
import calcasrosa from "./calcaROSA.svg";
import bonesrosa from "./boneROSA.svg";
import tenisirosa from "./tenissROSA.svg";
import fonesrosa from "./foneROSA.svg";


export default function ColecoesDestaqueIcones() {
  const [ativo, setAtivo] = React.useState(0);

  const colecoes = [
    { nome: "Camisetas", 
      imagem: camisetas, 
      imagemAtiva: camisetasrosa 
    },
    { nome: "Calças", 
      imagem: calcas, 
      imagemAtiva: calcasrosa 
    },
    { nome: "Bonés", 
      imagem: bones, 
      imagemAtiva: bonesrosa 
    },
    { nome: "Headphones", 
      imagem: fones, 
      imagemAtiva: fonesrosa 
    },
    { nome: "Tênis", 
      imagem: tenisi, 
      imagemAtiva: tenisirosa 
    },
  ];

  // const isActive = ( ) => {
  //     if (cada.nome === isActive) {
  //         return "active";
  //     }

  //     return "";
  // };

  const Sections = () => {
    return colecoes.map((cada, posicao) => {
      return (
        <Grid key={posicao} item className="iconeslinks" onClick={() => setAtivo(posicao)}>
          <Avatar sx={{ backgroundColor: "white", height: "104px", width: "104px"}}>
            <img src={posicao === ativo ? cada.imagemAtiva : cada.imagem} alt="qualquercoisa" />
          </Avatar>
          <Link  to="/" className='link'>{cada.nome}</Link>
        </Grid>
      );
    });
  };

  return (
    <>

      {/* <div className="bgGray"> */}
        {/* <Container> */}
        {/* <Container sx={{ backgroundColor: grey[200] }}> */}
        <Container className='container-collection'>
          <h3 className="h3dest">Coleções em destaque</h3>
          <Grid container direction="row" justifyContent="center" spacing={2}>
            <Sections />
          </Grid>
        </Container>
      {/* </div> */}
    </>
  );
}
