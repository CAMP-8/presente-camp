import React from 'react';
import {Link} from 'react-router-dom';

import style from './user-menu.module.css';
import {BrowserRoutes} from '../../../../constants/browser-route.const';
import {setItem} from 'shared/local-storage/user-local-storage';
import {useAuthProvider} from '../../../../context/auth.context';
import IUserData from '../../../../interfaces/user-data.interface';

const UserMenu: React.FC = () => {
    const {setUserData} = useAuthProvider();

    function logout(): void {
        setItem({} as IUserData);
        setUserData({email: '', name: '', token: ''});
    }

    return (
        <>
            <h4 className={style.dropdownTitle}>Conta</h4>
            <li className={`${style.listItem} mt-24`}>
                <Link to={BrowserRoutes.NOT_FOUND}>Ver meu perfil</Link>
                <hr className={`my-24`}/>
            </li>

            <li className={style.listItem}>
                <Link to={BrowserRoutes.NOT_FOUND}>Configurar minha conta</Link>
                <hr className={`my-24`}/>
            </li>

            <li className={style.listItem}>
                <Link to={BrowserRoutes.NOT_FOUND}>Sobre o presente</Link>
                <hr className={`my-24`}/>
            </li>

            <li className={`${style.listItem} mb-24`}>
                <Link onClick={logout} to={BrowserRoutes.LANDING}>Sair</Link>
            </li>
        </>
    );
};

export default UserMenu;
