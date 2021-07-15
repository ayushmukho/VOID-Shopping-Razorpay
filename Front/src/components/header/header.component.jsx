import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import { useAuth } from '../../context/user-context';
import './header.styles.scss';

const Header = () => {
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();

    async function handelLogout() {
        setError('')

        try {
            await logout();
            history.pushState('/login');
        } catch (error) {
            setError('Failed to log out')
        }
    }

    return (
        <nav className='nav-menu'>
            <div className="logo">
                <Link to="/">VOID</Link>
            </div>
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/shop'>
                        Shop
                    </Link>
                </li>
                {
                    !currentUser &&
                    <li>
                        <Link to="/sign-in">
                            Sign In
                        </Link>
                    </li>
                }
                {
                    currentUser &&
                    <li style={{cursor: "pointer"}} onClick={handelLogout}>
                        Sign Out
                    </li>
                }
            </ul>
            <CartIcon />
        </nav>
    )
}

export default Header;
