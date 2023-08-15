import react from 'react';
import {Link, NavLink} from 'react-router-dom';
import s from './TopMenu.module.css';

const activeStyle = {
    "text-decoration": "underline"
};

export default function TopMenu() {
    return (
        <div id='top-menu' className={s.container}>
            <div className={s.navbar}>
                <Link to="/" className={s.logo}>Побег в Лес</Link>
                <ul className={s.menu} id="menu">
                    <li><NavLink to='/' style={({ isActive }) => isActive?activeStyle:undefined}>О нас</NavLink></li>
                    <li><NavLink to='/houses' style={({ isActive }) => isActive?activeStyle:undefined}>Домики</NavLink></li>
                    <li><NavLink to='/callback' style={({ isActive }) => isActive?activeStyle:undefined}>Обратная связь</NavLink></li>
                    <li><NavLink to='/profile' style={({ isActive }) => isActive?activeStyle:undefined}>Профиль</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
