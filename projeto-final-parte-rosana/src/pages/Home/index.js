// import Banner from "./components/Banner"  -- assim nao deu certo;
import Banner from '../../components/Banner';

import React from 'react';
import ColecoesDestaqueIcones from '../../components/ColecoesDestaqueIcones';
import ColecaoDestaque from '../../components/ColecaoDestaque';


export default function Home() {
  return (
    <>
      {/* <Banner/> */}
      {/* <ColecoesDestaqueIcones /> */}
      <ColecaoDestaque />
    </>
  );
}
