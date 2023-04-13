import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
export default function Ways()
{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/produtos' element="pagina de produtos"/>
                <Route path='/categorias' element="pagina de categorias"/>
                <Route path='/meus-pedidos' element="pagina de meus pedidos"/>
            </Routes>
        </BrowserRouter>
        </>
    )
}