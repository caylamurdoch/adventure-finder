import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import styles from './Navigation.module.css';

const Navigation = () => (
    <div className={styles.nav}>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <ul>
        <li className={styles.navListLeft}>
            <Link className={styles.text} to={ROUTES.HOME}>Home</Link>
        </li>
        <li className={styles.navListRight}>
            <SignOutButton />
        </li>
        <li className={styles.navListRight}>
            <Link className={styles.text} to={ROUTES.ACCOUNT}>Profile</Link>
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li className={styles.navListLeft}>
            <Link className={styles.text} to={ROUTES.LANDING}>Home</Link>
        </li>
        <li className={styles.navListRight}>
            <Link className={styles.text} to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;