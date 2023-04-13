import { Link, useLocation } from 'react-router-dom';
import { Container, TextField } from '@mui/material';
import {Search, ShoppingCart} from '@mui/icons-material/';

import Logodc from './logodc.svg';

import "./style.scss";

export default function Header() {
    const location = useLocation();

    const isActive = (url) => {
        if (location.pathname === url) {
            return "active";
        }

        return "";
    };

    return (
        <div id="head">
            <Container>
                <div className='navbar'>
                    <div className='logopink'>
                        <img src={Logodc} alt=""/>
                        <h1>Digital Store</h1>
                    </div>
                    <TextField className='input' label={<Search/>} sx={{width: "500px"}}/>
                    <div className='cadastro'><Link to="/">Cadastre-se</Link>
                    <Link to="/"><button>Entrar</button></Link></div>
                    <div><ShoppingCart sx={{color: '#c92071'}}/> </div>
                </div>
                <div className="menu">
                    <Link to="/" className={isActive('/')}>Home</Link>
                    <Link to="/produtos" className={isActive('/produtos')}>Produtos</Link>
                    <Link to="/categorias" className={isActive('/categorias')}>Categorias</Link>
                    <Link to="/meus-pedidos" className={isActive('/meus-pedidos')}>Meus Pedidos</Link>
                </div>
            </Container>
        </div>
    )
}