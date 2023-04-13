import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Produto from '../pages/Produto';
import DetalhesProduto from '../pages/DetalhesProduto';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export default function Ways()
{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/produtos' element={<Produto />}/>
                <Route path='/produtos/:id' element={<DetalhesProduto/>}/>
                <Route path='/categorias' element="pagina de categorias"/>
                <Route path='/meus-pedidos' element="pagina de meus pedidos"/>
     
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}