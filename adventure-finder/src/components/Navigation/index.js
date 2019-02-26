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
        <Link className={styles.text} to={ROUTES.HOME}>
            <li className={styles.navListLeft}>Home</li>
        </Link>
        <li className={styles.navListRight}><SignOutButton /></li>
        <Link className={styles.text} to={ROUTES.ACCOUNT}>
            <li className={styles.navListRight}>Account</li>
        </Link>
        <Link className={styles.text} to={ROUTES.ADD}>
            <li className={styles.navListRight}>Add Post</li>
        </Link>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <Link className={styles.text} to={ROUTES.LANDING}>
            <li className={styles.navListLeft}>Adventure Finder</li>
        </Link>
        <Link className={styles.text} to={ROUTES.SIGN_IN}>
            <li className={styles.navListRight}>Sign In</li>
        </Link>
    </ul>
);

export default Navigation;