import "./estilo.css";
import React from "react";
import {Link} from 'react-router-dom';

function Listar(){
  let cursos = ["html", "css", "javascript"];

  return (
    <ul>
        {cursos.map(function (x){
        // return (<li> {x.toLocaleUpperCase()} </li>)
        return (<li> {x.toLocaleUpperCase()} </li>)
        })}
    </ul>
  )
}

export default function App(){
  let nome = "Chiquinha"

  return(
    <>
      <h1>Olá mundo</h1>
      <h2 className="red">Digital College</h2>

      <Listar />

      <hr/>

      <p>
        Bem vindo {nome}
      </p>

      <ul>
        <Listar />
        {/* {cursos.map(function (x){
          // return (<li> {x.toLocaleUpperCase()} </li>)
          return (<li> {x.toLocaleUpperCase()} </li>)
        })} */}

        {/* {cursos.map(x => <li>{x}</li>)} */}
        {/* <li></li>
        <li>{cursos[1]}</li>
        <li>{cursos[2]}</li> */}
      </ul>

 

    </>
  )
}
